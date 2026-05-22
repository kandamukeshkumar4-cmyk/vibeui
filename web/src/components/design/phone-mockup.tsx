"use client";

import { buildPreviewSrcDoc } from "@/lib/preview";
import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  html: string;
  screenName?: string;
  className?: string;
}

export function PhoneMockup({ html, screenName, className }: PhoneMockupProps) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      {screenName ? <p className="mb-2 text-sm font-medium text-slate-500">{screenName}</p> : null}
      <div className="relative h-[580px] w-[280px] rounded-[2.6rem] bg-slate-950 p-3 shadow-2xl shadow-slate-950/20">
        <div className="absolute left-1/2 top-0 z-10 h-7 w-32 -translate-x-1/2 rounded-b-2xl bg-slate-950" />
        <iframe
          title={screenName || "Generated screen preview"}
          sandbox=""
          referrerPolicy="no-referrer"
          srcDoc={buildPreviewSrcDoc(html)}
          className="h-full w-full overflow-hidden rounded-[2rem] border-0 bg-white"
        />
        <div className="absolute bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-slate-600" />
      </div>
    </div>
  );
}

