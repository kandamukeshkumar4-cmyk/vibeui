import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { btnPrimary, marketingH2 } from "@/lib/marketing-styles";

const avatars = [
  { initials: "SK", color: "#c4a574" },
  { initials: "AD", color: "#8b7355" },
  { initials: "MR", color: "#6b8f71" },
  { initials: "JL", color: "#7a8fa6" },
  { initials: "TK", color: "#9a8b7a" },
];

export function FinalCta() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-10 flex flex-col items-center gap-3">
          <div className="flex -space-x-2.5">
            {avatars.map((a) => (
              <div
                key={a.initials}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-background text-xs font-bold text-[#fcfbf8]"
                style={{ background: a.color }}
              >
                {a.initials}
              </div>
            ))}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-background bg-[rgba(28,28,28,0.08)] text-[10px] font-semibold text-muted">
              +2k
            </div>
          </div>
          <p className="text-sm text-muted">
            Join <span className="font-semibold text-foreground">2,400+</span>{" "}
            designers and founders already building with VibeUI
          </p>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-border bg-[rgba(28,28,28,0.03)] px-8 py-20 text-center">
          <div className="relative">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-muted">
              Ready to start?
            </p>
            <h2 className={marketingH2}>Design your next app today</h2>
            <p className="mx-auto mt-5 max-w-md text-lg text-muted">
              Turn your idea into a stunning mobile UI in seconds. No design
              skills required. Free to get started.
            </p>

            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/signup" className={`${btnPrimary} !px-8 !py-4`}>
                Start Creating — it&apos;s free <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <p className="mt-5 text-xs text-[rgba(28,28,28,0.4)]">
              No credit card required · Cancel anytime · Instant access
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
