import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function FinalCta() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-4">
        {/* Dark rounded card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 px-8 py-20 text-center"
          style={{ background: "rgba(10,16,64,0.7)" }}>

          {/* Vertical stripe texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 32px)",
            }}
          />

          {/* Glow behind card */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(59,130,246,0.15) 0%, transparent 70%)",
            }}
          />

          <div className="relative">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Design your next App
            </h2>
            <p className="mx-auto mt-5 max-w-md text-lg text-slate-400">
              Turn your idea into a stunning mobile UI in seconds. No design skills required.
            </p>

            <div className="mt-10">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-900/40 hover:bg-blue-500 transition-colors"
              >
                Start Creating <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
