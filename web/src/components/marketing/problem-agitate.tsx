export function ProblemAgitate() {
  const pains = [
    {
      icon: "⏱",
      title: "Hours become days",
      body: "Design cycles drag on. Feedback loops, revision rounds, and stakeholder reviews turn a single screen into a week-long ordeal.",
    },
    {
      icon: "💸",
      title: "Expensive to prototype",
      body: "Freelance designers bill $75–150/hr. Agency projects start at $10k. And you still might not end up with what you imagined.",
    },
    {
      icon: "🌀",
      title: "Lost in translation",
      body: "The gap between what you describe and what you receive is enormous. Designers interpret. Revisions pile up. Your original vision fades.",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Subtle danger glow behind the pain cards */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-96 w-[700px] rounded-full blur-3xl opacity-10"
        style={{ background: "radial-gradient(ellipse,#ef4444 0%,transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-red-400">
            The old way
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Design tools{" "}
            <span className="italic text-slate-500">weren&apos;t</span> built for speed
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
            You have a great idea. But the path from idea to polished UI is
            slow, costly, and endlessly frustrating.
          </p>
        </div>

        {/* Pain cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {pains.map((pain) => (
            <div
              key={pain.title}
              className="rounded-2xl border border-red-500/15 p-7 transition-colors hover:border-red-500/30"
              style={{ background: "rgba(239,68,68,0.04)" }}
            >
              {/* X marker */}
              <div className="mb-5 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.2)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
                    <path
                      d="M2 2l10 10M12 2L2 12"
                      stroke="#ef4444"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span className="text-xl">{pain.icon}</span>
              </div>
              <h3 className="mb-2 text-base font-semibold text-white">
                {pain.title}
              </h3>
              <p className="text-sm leading-6 text-slate-400">{pain.body}</p>
            </div>
          ))}
        </div>

        {/* Transition bridge — pain → solution */}
        <div className="mt-20 flex flex-col items-center gap-4 text-center">
          <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">
            There&apos;s a better way
          </p>
          <div
            className="h-12 w-px"
            style={{
              background:
                "linear-gradient(to bottom, rgba(239,68,68,0.3), rgba(59,130,246,0.8))",
            }}
          />
          <div
            className="flex h-9 w-9 items-center justify-center rounded-full text-white text-sm font-bold shadow-lg shadow-blue-900/50"
            style={{ background: "linear-gradient(135deg,#2563eb,#3b82f6)" }}
          >
            ↓
          </div>
          <p className="text-2xl font-bold text-white tracking-tight">
            Meet VibeUI
          </p>
        </div>
      </div>
    </section>
  );
}
