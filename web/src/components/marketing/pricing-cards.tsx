import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for exploring what VibeUI can do.",
    cta: "Get started",
    ctaHref: "/signup",
    highlighted: false,
    features: [
      "10 AI generations / month",
      "3 concurrent screens",
      "Basic design patterns",
      "PNG export",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    description: "For designers and developers who ship regularly.",
    cta: "Start free trial",
    ctaHref: "/signup?plan=pro",
    highlighted: true,
    features: [
      "100 AI generations / month",
      "Unlimited screens per project",
      "Full design pattern library",
      "PNG + SVG + JSON export",
      "API access with scoped keys",
      "Priority generation queue",
      "Email support",
    ],
  },
  {
    name: "Team",
    price: "$99",
    description: "For product teams moving fast together.",
    cta: "Contact us",
    ctaHref: "mailto:hello@vibeui.com",
    highlighted: false,
    features: [
      "500 AI generations / month",
      "5 team seats included",
      "Shared project workspace",
      "Custom brand guidelines",
      "Dedicated API endpoint",
      "SSO / SAML",
      "Slack + priority support",
    ],
  },
];

export function PricingCards() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-400">Pricing</p>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
            Start free, upgrade when you need more. No hidden fees, no surprise bills.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map(({ name, price, description, cta, ctaHref, highlighted, features }) => (
            <article
              key={name}
              className={`relative flex flex-col rounded-2xl p-8 ${
                highlighted
                  ? "bg-violet-600 text-white shadow-2xl shadow-violet-900/60 ring-1 ring-violet-500"
                  : "border border-white/10 bg-white/5"
              }`}
            >
              {highlighted && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-violet-900 px-4 py-1 text-xs font-semibold text-violet-100">
                  Most popular
                </span>
              )}

              <div className="mb-6">
                <h3 className={`text-lg font-semibold ${highlighted ? "text-violet-100" : "text-white"}`}>
                  {name}
                </h3>
                <div className="mt-3 flex items-end gap-1">
                  <span className={`text-5xl font-bold tracking-tight ${highlighted ? "text-white" : "text-white"}`}>
                    {price}
                  </span>
                  <span className={`mb-1.5 text-sm ${highlighted ? "text-violet-200" : "text-slate-400"}`}>/mo</span>
                </div>
                <p className={`mt-2 text-sm ${highlighted ? "text-violet-200" : "text-slate-400"}`}>{description}</p>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <div className={`mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full ${highlighted ? "bg-violet-400/30" : "bg-violet-500/20"}`}>
                      <Check className={`h-2.5 w-2.5 ${highlighted ? "text-white" : "text-violet-400"}`} />
                    </div>
                    <span className={`text-sm ${highlighted ? "text-violet-100" : "text-slate-300"}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={ctaHref}
                className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors ${
                  highlighted
                    ? "bg-white text-violet-700 hover:bg-violet-50"
                    : "bg-violet-600 text-white hover:bg-violet-700"
                }`}
              >
                {cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-slate-500">
          All plans include a 14-day free trial. No credit card required to start.
        </p>
      </div>
    </section>
  );
}
