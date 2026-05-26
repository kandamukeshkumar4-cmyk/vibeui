"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

/* ─────────────────────────────────────────────────────
   App definitions — Unsplash photo IDs + accent colours
───────────────────────────────────────────────────── */
type AppCard = {
  name: string;
  category: string;
  accent: string;
  photoId: string;
};

const APPS: AppCard[] = [
  {
    name: "VITALS",
    category: "Fitness Tracker",
    accent: "#30d158",
    photoId: "photo-1571019613454-1cb2f99b2d8b",
  },
  {
    name: "FLUX",
    category: "Crypto Portfolio",
    accent: "#00d4aa",
    photoId: "photo-1611974789855-9c2a0a7236a3",
  },
  {
    name: "PULSE",
    category: "Music Player",
    accent: "#1DB954",
    photoId: "photo-1493225457124-a3eb161ffa5f",
  },
  {
    name: "SNAP",
    category: "Social Feed",
    accent: "#e1306c",
    photoId: "photo-1611162617213-7d7a39e9b1d7",
  },
  {
    name: "EATS",
    category: "Food Delivery",
    accent: "#ff6900",
    photoId: "photo-1565299624946-b28f40a0ae38",
  },
  {
    name: "PLAY",
    category: "Game Hub",
    accent: "#a855f7",
    photoId: "photo-1542751371-adc38448a05e",
  },
  {
    name: "LUXE",
    category: "Fashion Store",
    accent: "#d4af37",
    photoId: "photo-1441986300917-64674bd600d8",
  },
  {
    name: "ROAM",
    category: "Travel Planner",
    accent: "#7dd3fc",
    photoId: "photo-1506905925346-21bda4d32df4",
  },
];

/* Duplicate for a seamless marquee loop */
const MARQUEE: AppCard[] = [...APPS, ...APPS];

/* ─────────────────────────────────────────────────────
   iPhone 15-style phone frame with real Unsplash photo
───────────────────────────────────────────────────── */
function PhoneFrame({ app }: { app: AppCard }) {
  const imgUrl =
    `https://images.unsplash.com/${app.photoId}` +
    `?w=320&h=640&fit=crop&crop=center&q=80`;

  return (
    <div
      style={{
        width: 158,
        height: 316,
        borderRadius: 38,
        border: "8px solid #1c1c1e",
        background: "#000",
        overflow: "hidden",
        position: "relative",
        flexShrink: 0,
        boxShadow:
          "0 32px 72px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.06)",
      }}
    >
      {/* Dynamic Island */}
      <div
        style={{
          position: "absolute",
          top: 10,
          left: "50%",
          transform: "translateX(-50%)",
          width: 76,
          height: 22,
          borderRadius: 20,
          background: "#000",
          zIndex: 20,
        }}
      />

      {/* Real app screenshot via CSS background-image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Subtle top status-bar scrim */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 48,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)",
          zIndex: 5,
        }}
      />

      {/* Status bar time */}
      <div
        style={{
          position: "absolute",
          top: 14,
          left: 18,
          fontSize: 8,
          fontWeight: 700,
          color: "rgba(255,255,255,0.9)",
          zIndex: 15,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
        }}
      >
        9:41
      </div>

      {/* Bottom gradient overlay + app info */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "52%",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 55%, transparent 100%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 16px 18px",
        }}
      >
        {/* Accent dot */}
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: app.accent,
            marginBottom: 6,
            boxShadow: `0 0 8px ${app.accent}`,
          }}
        />
        <div
          style={{
            fontSize: 13,
            fontWeight: 900,
            color: "white",
            letterSpacing: 1.8,
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
          }}
        >
          {app.name}
        </div>
        <div
          style={{
            fontSize: 9,
            color: app.accent,
            marginTop: 3,
            fontWeight: 600,
            letterSpacing: 0.3,
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
          }}
        >
          {app.category}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   Hero section
───────────────────────────────────────────────────── */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(ellipse,#3b82f6 0%,transparent 70%)",
        }}
      />

      {/* ── Hero text + CTAs + prompt input ── */}
      <div className="relative mx-auto max-w-4xl px-4 pt-20 pb-14 text-center">
        {/* Badge */}
        <div
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-sm font-semibold text-white"
          style={{ background: "rgba(255,255,255,0.08)" }}
        >
          <Sparkles className="h-3.5 w-3.5 text-blue-400" />
          V2 Now Available
        </div>

        {/* Headline */}
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Design apps in seconds
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-400">
          Generate beautiful app UIs with AI and iterate on your ideas instantly
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/50 hover:bg-blue-500 transition-colors"
          >
            Start Creating <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="#demo"
            className="inline-flex items-center rounded-xl border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Learn More
          </a>
        </div>

        {/* Prompt input */}
        <div className="mx-auto mt-10 max-w-2xl">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
            <span className="flex-1 text-left text-sm text-slate-500">
              Design a sleek fitness tracking app with dark mode and animated
              charts...
            </span>
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-500 cursor-pointer transition-colors">
              <ArrowRight className="h-4 w-4 text-white" />
            </div>
          </div>

          {/* Prompt chips */}
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {[
              "Fitness App",
              "Habit Tracker",
              "Digital Gallery",
              "Journaling App",
            ].map((chip) => (
              <span
                key={chip}
                className="cursor-pointer rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-400 hover:border-blue-400/50 hover:text-blue-300 transition-colors"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scrolling phone marquee ── */}
      <div className="relative pb-28 overflow-hidden">
        {/* Left edge fade */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-36 z-10"
          style={{
            background: "linear-gradient(to right, rgb(2,8,23), transparent)",
          }}
        />
        {/* Right edge fade */}
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-36 z-10"
          style={{
            background: "linear-gradient(to left, rgb(2,8,23), transparent)",
          }}
        />

        {/* The scrolling track */}
        <div
          className="marquee-track"
          style={{ display: "flex", gap: 20, width: "max-content" }}
        >
          {MARQUEE.map((app, i) => (
            <PhoneFrame key={i} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
}
