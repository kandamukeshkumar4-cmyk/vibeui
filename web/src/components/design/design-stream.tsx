"use client";

import { useState } from "react";
import { Loader2, Send, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { chatIterate, generateDesign, type SSEEvent } from "@/lib/api-client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/input";
import { PhoneMockup } from "@/components/design/phone-mockup";

interface Screen {
  name: string;
  description: string;
  html: string;
  order: number;
}

interface DesignStreamProps {
  dashboardMode?: boolean;
}

export function DesignStream({ dashboardMode = false }: DesignStreamProps) {
  const [prompt, setPrompt] = useState("A calm fitness coaching app with habit tracking, workouts, and weekly progress insights.");
  const [chat, setChat] = useState("");
  const [generationId, setGenerationId] = useState<string | null>(null);
  const [screens, setScreens] = useState<Screen[]>([]);
  const [status, setStatus] = useState("Idle");
  const [isGenerating, setIsGenerating] = useState(false);

  async function onGenerate() {
    setIsGenerating(true);
    setScreens([]);
    setStatus("Starting");
    try {
      await generateDesign({ prompt, num_screens: dashboardMode ? 6 : 3, style: "modern", platform: "ios" }, (event: SSEEvent) => {
        if (event.event === "step_start") setStatus((event.data as { message?: string }).message || "Working");
        if (event.event === "warning") toast.warning((event.data as { message?: string }).message || "Using local fallback");
        if (event.event === "screen_generated") setScreens((current) => [...current, event.data as Screen].sort((a, b) => a.order - b.order));
        if (event.event === "saved") setGenerationId((event.data as { id: string }).id);
        if (event.event === "done") setStatus("Complete");
      });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Generation failed");
      setStatus("Failed");
    } finally {
      setIsGenerating(false);
    }
  }

  async function onChat() {
    if (!generationId || !chat.trim()) return;
    setIsGenerating(true);
    try {
      await chatIterate(generationId, chat, (event) => {
        if (event.event === "screen_updated") {
          const updated = event.data as Screen;
          setScreens((current) => {
            const next = [...current];
            const index = next.findIndex((screen) => screen.name === updated.name);
            if (index >= 0) next[index] = updated;
            else next.push(updated);
            return next.sort((a, b) => a.order - b.order);
          });
        }
      });
      setChat("");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Iteration failed");
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <div className={dashboardMode ? "grid gap-6 lg:grid-cols-[360px_1fr]" : "space-y-6"}>
      <Card className="p-4">
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-900">
          <Sparkles className="h-4 w-4" /> Design prompt
        </div>
        <Textarea value={prompt} onChange={(event) => setPrompt(event.target.value)} />
        <Button onClick={onGenerate} disabled={isGenerating || prompt.length < 5} className="mt-3 w-full">
          {isGenerating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
          Generate
        </Button>
        <p className="mt-3 text-sm text-slate-500">{status}</p>
        {generationId ? (
          <div className="mt-4 flex gap-2">
            <input
              className="h-10 min-w-0 flex-1 rounded-lg border border-slate-200 px-3 text-sm outline-none"
              value={chat}
              onChange={(event) => setChat(event.target.value)}
              placeholder="make it dark mode"
            />
            <Button onClick={onChat} disabled={isGenerating || !chat.trim()} className="px-3">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        ) : null}
      </Card>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {screens.length === 0 ? (
          <Card className="flex min-h-80 items-center justify-center p-8 text-center text-sm text-slate-500">
            Generated screens appear here one by one.
          </Card>
        ) : (
          screens.map((screen) => <PhoneMockup key={`${screen.name}-${screen.order}`} html={screen.html} screenName={screen.name} />)
        )}
      </div>
    </div>
  );
}
