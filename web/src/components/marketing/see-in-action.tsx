import { ArrowRight, Image, LayoutTemplate, Wand2 } from "lucide-react";
import Link from "next/link";

const demos = [
  {
    Icon: Wand2,
    title: "Design from scratch",
    description:
      "Type a prompt like 'a dark-mode crypto portfolio app with live price charts' and watch complete, polished screens appear in real-time.",
    tag: "Most popular",
    tagColor: "bg-violet-100 text-violet-700",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    screens: [
      { bg: "#0F172A", accent: "#6366F1" },
      { bg: "#1E293B", accent: "#8B5CF6" },
      { bg: "#0F172A", accent: "#A78BFA" },
    ],
  },
  {
    Icon: Image,
    title: "Design from screenshots",
    description:
      "Upload screenshots of an existing app — VibeUI recreates and improves the design, giving you an editable version you actually own.",
    tag: "Unique feature",
    tagColor: "bg-sky-100 text-sky-700",
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
    screens: [
      { bg: "#0EA5E9", accent: "#38BDF8" },
      { bg: "#0369A1", accent: "#7DD3FC" },
      { bg: "#0EA5E9", accent: "#BAE6FD" },
    ],
  },
  {
    Icon: LayoutTemplate,
    title: "Clone from template",
    description:
      "Start from one of our curated design templates — e-commerce, social, productivity — then customize with natural language.",
    tag: "Fastest start",
    tagColor: "bg-emerald-100 text-emerald-700",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    screens: [
      { bg: "#059669", accent: "#34D399" },
      { bg: "#065F46", accent: "#6EE7B7" },
      { bg: "#059669", accent: "#A7F3D0" },
    ],
  },
];

function MiniPhoneStack({ screens }: { screens: Array<{ bg: string; accent: string }> }) {
  return (
    <div className="relative h-28 w-full">
      {screens.map(({ bg, accent }, i) => (
        <div
          key={i}
          className="absolute rounded-xl overflow-hidden shadow-md"
          style={{
            width: 60,
            height: 100,
            background: bg,
            left: `${i * 22}%`,
            top: i === 1 ? 0 : 8,
            zIndex: screens.length - Math.abs(i - 1),
            transform: `rotate(${(i - 1) * 5}deg)`,
          }}
        >
          <div className="p-1.5">
            <div className="h-1 w-6 rounded-full mb-1" style={{ background: accent, opacity: 0.8 }} />
            <div className="h-1 w-4 rounded-full mb-2" style={{ background: accent, opacity: 0.4 }} />
            <div className="space-y-1">
              {[80, 60, 70].map((w, j) => (
                <div key={j} className="h-1 rounded-full" style={{ width: `${w}%`, background: accent, opacity: 0.3 }} />
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-4 flex justify-around items-center px-1" style={{ background: "rgba(0,0,0,0.3)" }}>
            {[0, 1, 2].map((j) => (
              <div key={j} className="h-1.5 w-1.5 rounded-sm" style={{ background: j === 0 ? accent : "rgba(255,255,255,0.2)" }} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function SeeInAction() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-600">See it in action</p>
          <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Three ways to generate
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-500">
            Whether you&apos;re starting from an idea, a screenshot, or a template — VibeUI has a generation mode for you.
          </p>
        </div>

        {/* Demo cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {demos.map(({ Icon, title, description, tag, tagColor, iconBg, iconColor, screens }) => (
            <article
              key={title}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all hover:border-violet-200 hover:shadow-lg hover:shadow-violet-50"
            >
              {/* Mini phone preview */}
              <div className="mb-6 rounded-xl bg-white p-4 shadow-sm">
                <MiniPhoneStack screens={screens} />
              </div>

              {/* Tag */}
              <span className={`mb-3 inline-flex self-start rounded-full px-2.5 py-0.5 text-xs font-semibold ${tagColor}`}>
                {tag}
              </span>

              {/* Icon + title */}
              <div className="flex items-center gap-3 mb-3">
                <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${iconBg}`}>
                  <Icon className={`h-4 w-4 ${iconColor}`} />
                </div>
                <h3 className="text-base font-semibold text-slate-950">{title}</h3>
              </div>

              <p className="flex-1 text-sm leading-6 text-slate-500">{description}</p>

              <Link
                href="/signup"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 hover:text-violet-700 transition-colors"
              >
                Try it free <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
