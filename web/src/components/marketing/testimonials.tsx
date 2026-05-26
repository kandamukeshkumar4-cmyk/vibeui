"use client";

import { useState } from "react";

const testimonials = [
  {
    quote:
      "We used to spend a lot of time and money hiring UI designers. With VibeUI we're able to create beautiful interfaces so much faster and with much less effort. It's been a game changer for our startup.",
    name: "Diego R.",
    role: "Entrepreneur",
  },
  {
    quote:
      "This made the process of designing our app interface so much more intuitive and efficient. I can iterate on ideas in minutes instead of days. Honestly the best AI design tool I've used.",
    name: "Wolffe",
    role: "Power User",
  },
  {
    quote:
      "VibeUI cut our app design cycle from 2 weeks to 2 hours. We shipped our MVP to the App Store before our competitors even finished their wireframes.",
    name: "Marcus T.",
    role: "Founder, LaunchPad Studio",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-4">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Testimonials
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Loved by builders
          </h2>
        </div>

        {/* Carousel card */}
        <div className="relative rounded-2xl border border-white/10 bg-white/5 px-10 py-12 text-center">
          {/* Open quote mark */}
          <div
            className="mb-6 text-6xl font-serif leading-none text-blue-500/40 select-none"
            aria-hidden="true"
          >
            &ldquo;
          </div>

          {/* Quote */}
          <blockquote className="mx-auto max-w-xl text-lg leading-8 text-slate-200">
            {testimonials[current].quote}
          </blockquote>

          {/* Author */}
          <div className="mt-8">
            <p className="text-base font-semibold text-white">
              {testimonials[current].name}
            </p>
            <p className="mt-1 text-sm text-slate-400">
              {testimonials[current].role}
            </p>
          </div>
        </div>

        {/* Dot navigation */}
        <div className="mt-8 flex items-center justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 bg-blue-500"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
