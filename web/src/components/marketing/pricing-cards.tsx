const plans = [
  ["Free", "$0", "10 generations/month"],
  ["Pro", "$29", "100 generations/month"],
  ["Team", "$99", "500 generations/month"],
];

export function PricingCards() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Pricing</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {plans.map(([name, price, usage]) => (
          <article key={name} className="rounded-lg border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="mt-4 text-4xl font-bold">{price}<span className="text-base font-medium text-slate-500">/mo</span></p>
            <p className="mt-3 text-sm text-slate-600">{usage}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

