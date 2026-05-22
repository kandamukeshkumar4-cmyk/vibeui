const steps = ["Describe your app", "AI designs it", "Iterate and export"];

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950">From prompt to product surface</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step} className="rounded-lg bg-white p-6 shadow-sm">
            <span className="text-sm font-semibold text-slate-500">0{index + 1}</span>
            <p className="mt-3 text-xl font-semibold text-slate-950">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

