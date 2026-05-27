"use client";

import { useState } from "react";
import {
  marketingCard,
  marketingEyebrow,
  marketingH2,
} from "@/lib/marketing-styles";

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
        <div className="mb-14 text-center">
          <p className={marketingEyebrow}>Testimonials</p>
          <h2 className={marketingH2}>Loved by builders</h2>
        </div>

        <div className={`${marketingCard} px-10 py-12 text-center`}>
          <div
            className="mb-6 text-6xl font-serif leading-none text-[rgba(28,28,28,0.15)] select-none"
            aria-hidden="true"
          >
            &ldquo;
          </div>

          <blockquote className="mx-auto max-w-xl text-lg leading-8 text-foreground">
            {testimonials[current].quote}
          </blockquote>

          <div className="mt-8">
            <p className="text-base font-semibold text-foreground">
              {testimonials[current].name}
            </p>
            <p className="mt-1 text-sm text-muted">{testimonials[current].role}</p>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 bg-foreground"
                  : "w-2 bg-[rgba(28,28,28,0.15)] hover:bg-[rgba(28,28,28,0.3)]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
