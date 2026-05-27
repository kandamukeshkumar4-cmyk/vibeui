import {
  marketingEyebrow,
  marketingH2,
  marketingLead,
} from "@/lib/marketing-styles";
import { PhoneFrameCompact, PhonePreviewStage, SHOWCASE_PHONES } from "./phone-showcase";

const gallery = SHOWCASE_PHONES.filter((p) =>
  ["crypto-dash", "grocery-home", "sports-home", "estate-home", "banking-mint", "airline-search", "jewelry-home"].includes(p.id)
);

export function DesignShowcase() {
  return (
    <section className="border-y border-border bg-[rgba(28,28,28,0.02)] py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className={marketingEyebrow}>Output quality</p>
            <h2 className={`${marketingH2} font-serif`}>Apps your team would actually ship</h2>
          </div>
          <p className={`${marketingLead} md:mt-0 md:max-w-sm md:text-left`}>
            Fintech, mobility, travel, dining, health, and productivity — each
            screen uses your DESIGN.md tokens: cream surfaces, charcoal type, and
            border-based depth.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {gallery.map((phone) => (
            <PhonePreviewStage key={phone.id} className="min-h-[320px]">
              <PhoneFrameCompact phone={phone} width={172} />
              <div className="mt-4 text-center">
                <p className="text-sm font-semibold text-foreground">{phone.label}</p>
                <p className="text-xs text-muted">{phone.category}</p>
              </div>
            </PhonePreviewStage>
          ))}
        </div>
      </div>
    </section>
  );
}
