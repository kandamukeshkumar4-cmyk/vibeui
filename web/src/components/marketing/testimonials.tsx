const testimonials = [
  {
    quote:
      "VibeUI cut our app design cycle from 2 weeks to 2 hours. We shipped our MVP to the App Store before our competitors even finished their wireframes.",
    name: "Marcus T.",
    role: "Founder, LaunchPad Studio",
    initials: "MT",
    color: "bg-violet-500",
  },
  {
    quote:
      "I described our product in one sentence and got 8 complete screens back. The quality was better than what we usually get from freelancers after 3 rounds of revision.",
    name: "Priya K.",
    role: "Product Lead, Ember Labs",
    initials: "PK",
    color: "bg-indigo-500",
  },
  {
    quote:
      "We used VibeUI to pitch our app to investors. The generated screens looked so professional that they asked who our design agency was. We said 'AI.'",
    name: "Daniel R.",
    role: "CEO, Foundry Apps",
    initials: "DR",
    color: "bg-sky-500",
  },
];

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-400">Testimonials</p>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Loved by builders
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
            From solo founders to product teams — here&apos;s what people are shipping with VibeUI.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map(({ quote, name, role, initials, color }) => (
            <article
              key={name}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-8"
            >
              {/* Stars */}
              <div className="mb-5 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="flex-1 text-sm leading-7 text-slate-300">
                &ldquo;{quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white ${color}`}>
                  {initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{name}</p>
                  <p className="text-xs text-slate-400">{role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
