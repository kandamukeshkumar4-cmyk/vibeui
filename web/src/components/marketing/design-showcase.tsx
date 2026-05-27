import {
  marketingEyebrow,
  marketingH2,
  marketingLead,
} from "@/lib/marketing-styles";
import { PhoneCaption, PhoneFrame, SHOWCASE_PHONES } from "./phone-showcase";

/** Group label for each app family */
const APP_GROUPS: Record<string, string> = {
  "Lustre":    "Jewelry",
  "Matchday":  "Sports",
  "Dwello":    "Real Estate",
  "Spenny":    "Banking",
  "FreshCart": "Grocery",
};

export function DesignShowcase() {
  return (
    <section className="border-y border-border bg-[rgba(28,28,28,0.02)] py-20" id="demo">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className={marketingEyebrow}>Reference designs</p>
            <h2 className={`${marketingH2} font-serif`}>
              13 production-ready screens across 5 apps
            </h2>
          </div>
          <p className={`${marketingLead} md:mt-0 md:max-w-xs md:text-left`}>
            Lustre · Matchday · Dwello · Spenny · FreshCart — every screen
            built from real design tokens with tab bars, live data, and proper
            content hierarchy.
          </p>
        </div>

        {/* App group chips */}
        <div className="mb-10 flex flex-wrap gap-2">
          {Object.entries(APP_GROUPS).map(([label, cat]) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-semibold text-foreground"
            >
              {label}
              <span className="text-muted font-normal">· {cat}</span>
            </span>
          ))}
        </div>

        {/* All 13 phones grid */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {SHOWCASE_PHONES.map((phone) => (
            <div
              key={phone.id}
              className="flex flex-col items-center rounded-2xl border border-border bg-white/60 p-5 shadow-[0_4px_24px_rgba(28,28,28,0.06)] transition-shadow hover:shadow-[0_8px_40px_rgba(28,28,28,0.12)]"
            >
              <PhoneFrame phone={phone} width={168} />
              <PhoneCaption phone={phone} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
