import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-violet-600 py-24">
      {/* Background stripes */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #fff 25%, transparent 25%), linear-gradient(-135deg, #fff 25%, transparent 25%), linear-gradient(45deg, #fff 25%, transparent 25%), linear-gradient(-45deg, #fff 25%, transparent 25%)",
          backgroundSize: "20px 20px",
        }}
      />
      {/* Glow orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white opacity-5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white opacity-5 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Design your next app today
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-violet-200">
          Join thousands of founders, designers, and developers generating beautiful app UIs in seconds. Start free — no credit card needed.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-bold text-violet-700 shadow-lg hover:bg-violet-50 transition-colors"
          >
            Start Creating for Free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="#demo"
            className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-8 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            See Live Demo
          </Link>
        </div>

        {/* Social proof micro-stats */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
          {[
            { value: "10,000+", label: "Screens generated" },
            { value: "2,400+", label: "Active creators" },
            { value: "4.9 / 5", label: "Average rating" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-2xl font-bold text-white">{value}</p>
              <p className="text-sm text-violet-300">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
