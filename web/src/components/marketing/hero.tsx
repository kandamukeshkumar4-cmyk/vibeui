import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const suggestions = ["Fitness App", "Habit Tracker", "Digital Gallery", "Journaling App"];

const mockupColors = [
  { bg: "#7C3AED", accent: "#A78BFA" },
  { bg: "#0F172A", accent: "#6366F1" },
  { bg: "#0EA5E9", accent: "#38BDF8" },
  { bg: "#059669", accent: "#34D399" },
  { bg: "#DC2626", accent: "#F87171" },
  { bg: "#D97706", accent: "#FCD34D" },
];

function MiniPhone({ bg, accent }: { bg: string; accent: string }) {
  return (
    <div
      className="relative flex-shrink-0 overflow-hidden rounded-2xl shadow-lg"
      style={{ width: 120, height: 220, background: bg }}
    >
      {/* Status bar */}
      <div className="flex items-center justify-between px-3 pt-3 pb-1">
        <span style={{ color: accent, fontSize: 8, fontWeight: 700 }}>9:41</span>
        <div className="flex gap-0.5">
          {[6, 8, 10, 12].map((h, i) => (
            <div key={i} style={{ width: 2, height: h, borderRadius: 1, background: accent, opacity: 0.8 }} />
          ))}
        </div>
      </div>
      {/* Header bar */}
      <div className="mx-3 mt-1 rounded-lg px-2 py-1.5" style={{ background: "rgba(255,255,255,0.1)" }}>
        <div className="h-1.5 w-12 rounded-full" style={{ background: accent }} />
      </div>
      {/* Content cards */}
      <div className="mx-3 mt-2 space-y-1.5">
        {[100, 80, 90].map((w, i) => (
          <div key={i} className="rounded-lg p-2" style={{ background: "rgba(255,255,255,0.08)" }}>
            <div className="mb-1 h-1 rounded-full" style={{ width: `${w}%`, background: accent, opacity: 0.6 }} />
            <div className="h-1 rounded-full" style={{ width: "60%", background: "rgba(255,255,255,0.2)" }} />
          </div>
        ))}
      </div>
      {/* Bottom nav */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-around px-3 py-2" style={{ background: "rgba(0,0,0,0.3)" }}>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col items-center gap-0.5">
            <div className="h-3 w-3 rounded-sm" style={{ background: i === 0 ? accent : "rgba(255,255,255,0.3)" }} />
            <div className="h-0.5 w-4 rounded-full" style={{ background: i === 0 ? accent : "rgba(255,255,255,0.2)" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)", backgroundSize: "40px 40px" }}
      />
      {/* Purple glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-200 opacity-20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-8 text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700">
          <Sparkles className="h-3.5 w-3.5" />
          V2 Now Available
        </div>

        {/* Headline */}
        <h1 className="mx-auto max-w-3xl text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
          Design apps in{" "}
          <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">seconds</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-500">
          Generate beautiful app UIs with AI and iterate on your ideas instantly.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/signup"
            className="inline-flex h-12 items-center gap-2 rounded-xl bg-violet-600 px-6 text-sm font-semibold text-white shadow-md shadow-violet-200 hover:bg-violet-700 transition-colors"
          >
            Start Creating <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="#demo"
            className="inline-flex h-12 items-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Learn More
          </a>
        </div>

        {/* Prompt input mockup */}
        <div className="mx-auto mt-10 max-w-xl">
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 shadow-sm">
            <span className="flex-1 text-left text-sm text-slate-400">Design a sleek fitness tracking app with workout rou...</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600">
              <ArrowRight className="h-4 w-4 text-white" />
            </div>
          </div>
          {/* Suggestion chips */}
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {suggestions.map((s) => (
              <span key={s} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 hover:border-violet-300 hover:text-violet-700 cursor-pointer transition-colors">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Phone mockup grid */}
      <div className="relative mx-auto max-w-6xl overflow-hidden px-4 pb-16">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {mockupColors.map((c, i) => (
            <div key={i} className="flex justify-center">
              <MiniPhone bg={c.bg} accent={c.accent} />
            </div>
          ))}
        </div>
        {/* Bottom fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>
    </section>
  );
}
