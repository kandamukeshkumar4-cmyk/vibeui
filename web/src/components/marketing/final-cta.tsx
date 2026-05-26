import { ArrowRight } from "lucide-react";
import Link from "next/link";

const avatars = [
  { initials: "SK", color: "#ec4899" },
  { initials: "AD", color: "#6366f1" },
  { initials: "MR", color: "#f59e0b" },
  { initials: "JL", color: "#10b981" },
  { initials: "TK", color: "#3b82f6" },
];

export function FinalCta() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-4">
        {/* Avatar + social proof strip */}
        <div className="mb-10 flex flex-col items-center gap-3">
          <div className="flex -space-x-2.5">
            {avatars.map((a) => (
              <div
                key={a.initials}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-slate-900 text-xs font-bold text-white"
                style={{ background: a.color }}
              >
                {a.initials}
              </div>
            ))}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-slate-900 bg-slate-800 text-[10px] font-bold text-slate-400">
              +2k
            </div>
          </div>
          <p className="text-sm text-slate-400">
            Join <span className="font-semibold text-white">2,400+</span>{" "}
            designers and founders already building with VibeUI
          </p>
        </div>

        {/* Dark rounded card */}
        <div
          className="relative overflow-hidden rounded-3xl border border-white/10 px-8 py-20 text-center"
          style={{ background: "rgba(10,16,64,0.7)" }}
        >
          {/* Vertical stripe texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 32px)",
            }}
          />

          {/* Glow */}
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(59,130,246,0.18) 0%, transparent 70%)",
            }}
          />

          <div className="relative">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
              Ready to start?
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Design your next app today
            </h2>
            <p className="mx-auto mt-5 max-w-md text-lg text-slate-400">
              Turn your idea into a stunning mobile UI in seconds. No design
              skills required. Free to get started.
            </p>

            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-900/40 hover:bg-blue-500 transition-colors"
              >
                Start Creating — it&apos;s free <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <p className="mt-5 text-xs text-slate-600">
              No credit card required · Cancel anytime · Instant access
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
