import {
  marketingCard,
  marketingEyebrow,
  marketingH2,
  marketingLead,
} from "@/lib/marketing-styles";

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
    <section className="relative overflow-hidden py-24">
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mb-14 text-center">
          <p className={`${marketingEyebrow} text-[rgba(120,40,40,0.7)]`}>The old way</p>
          <h2 className={marketingH2}>
            Design tools{" "}
            <span className="italic text-muted">weren&apos;t</span> built for speed
          </h2>
          <p className={marketingLead}>
            You have a great idea. But the path from idea to polished UI is
            slow, costly, and endlessly frustrating.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {pains.map((pain) => (
            <div
              key={pain.title}
              className={`${marketingCard} border-[rgba(120,40,40,0.15)] hover:border-[rgba(120,40,40,0.25)]`}
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[rgba(120,40,40,0.2)] bg-[rgba(120,40,40,0.06)]">
                  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
                    <path
                      d="M2 2l10 10M12 2L2 12"
                      stroke="#8b4040"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span className="text-xl">{pain.icon}</span>
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">
                {pain.title}
              </h3>
              <p className="text-sm leading-6 text-muted">{pain.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-4 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted">
            There&apos;s a better way
          </p>
          <div
            className="h-12 w-px"
            style={{
              background:
                "linear-gradient(to bottom, rgba(120,40,40,0.25), rgba(28,28,28,0.5))",
            }}
          />
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-sm font-semibold text-[#fcfbf8]">
            ↓
          </div>
          <p className="text-2xl font-semibold tracking-[-0.02em] text-foreground">
            Meet VibeUI
          </p>
        </div>
      </div>
    </section>
  );
}
