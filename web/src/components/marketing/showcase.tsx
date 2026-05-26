"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

/* ─── phone data ─── */
const apps = [
  {
    id: "fitflow",
    label: "FitFlow",
    category: "Fitness & Health",
    bg: "#0F172A",
    accent: "#6366F1",
    textLight: true,
    content: (scale: number) => (
      <>
        <div style={{ padding: `${8 * scale}px ${10 * scale}px ${4 * scale}px` }}>
          <div style={{ fontSize: 7 * scale, color: "#94A3B8", marginBottom: 2 * scale }}>Good morning 👋</div>
          <div style={{ fontSize: 13 * scale, fontWeight: 800, color: "white" }}>Alex</div>
        </div>
        <div style={{ margin: `${4 * scale}px ${10 * scale}px`, background: "#1E293B", borderRadius: 10 * scale, padding: `${7 * scale}px ${9 * scale}px` }}>
          <div style={{ fontSize: 6 * scale, color: "#94A3B8", marginBottom: 4 * scale }}>{"TODAY'S GOAL"}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 * scale }}>
            <svg width={44 * scale} height={44 * scale} viewBox="0 0 44 44">
              <circle cx="22" cy="22" r="18" fill="none" stroke="#1E3A5F" strokeWidth="4" />
              <circle cx="22" cy="22" r="18" fill="none" stroke="#6366F1" strokeWidth="4" strokeDasharray="113" strokeDashoffset="25" strokeLinecap="round" transform="rotate(-90 22 22)" />
              <text x="22" y="26" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white">78%</text>
            </svg>
            <div style={{ flex: 1 }}>
              {[{ l: "Steps", v: "7,812", c: "#6366F1", p: "78%" }, { l: "Cal", v: "487 kcal", c: "#F97316", p: "60%" }].map((r, i) => (
                <div key={i} style={{ marginBottom: i === 0 ? 4 * scale : 0 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: scale }}>
                    <span style={{ fontSize: 6 * scale, color: "#94A3B8" }}>{r.l}</span>
                    <span style={{ fontSize: 6 * scale, color: "white", fontWeight: 600 }}>{r.v}</span>
                  </div>
                  <div style={{ height: 3 * scale, background: "#334155", borderRadius: 2 * scale }}>
                    <div style={{ height: 3 * scale, width: r.p, background: r.c, borderRadius: 2 * scale }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ margin: `${4 * scale}px ${10 * scale}px 0` }}>
          <div style={{ fontSize: 6 * scale, color: "#94A3B8", marginBottom: 3 * scale }}>{"TODAY'S WORKOUTS"}</div>
          {[{ n: "Morning Run", d: "32 min", c: "#6366F1", done: true }, { n: "Core Strength", d: "20 min", c: "#F97316", done: false }].map((w, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#1E293B", borderRadius: 7 * scale, padding: `${5 * scale}px ${7 * scale}px`, marginBottom: 3 * scale }}>
              <div style={{ display: "flex", alignItems: "center", gap: 5 * scale }}>
                <div style={{ width: 16 * scale, height: 16 * scale, borderRadius: 4 * scale, background: w.c + "33" }} />
                <div>
                  <div style={{ fontSize: 7 * scale, fontWeight: 600, color: "white" }}>{w.n}</div>
                  <div style={{ fontSize: 6 * scale, color: "#64748B" }}>{w.d}</div>
                </div>
              </div>
              <div style={{ width: 12 * scale, height: 12 * scale, borderRadius: "50%", background: w.done ? "#22C55E" : "transparent", border: w.done ? "none" : "1px solid #334155", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {w.done && <div style={{ width: 5 * scale, height: 5 * scale, borderRadius: "50%", background: "white" }} />}
              </div>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "moneymind",
    label: "MoneyMind",
    category: "Finance & Banking",
    bg: "#1a0533",
    accent: "#8B5CF6",
    textLight: true,
    content: (scale: number) => (
      <>
        <div style={{ padding: `${8 * scale}px ${10 * scale}px ${4 * scale}px` }}>
          <div style={{ fontSize: 7 * scale, color: "#A78BFA" }}>Total Balance</div>
          <div style={{ fontSize: 18 * scale, fontWeight: 800, color: "white", lineHeight: 1.1 }}>$12,480<span style={{ fontSize: 9 * scale, color: "#A78BFA" }}>.52</span></div>
          <div style={{ fontSize: 6 * scale, color: "#22C55E", marginTop: scale }}>▲ 3.2% this month</div>
        </div>
        <div style={{ margin: `${4 * scale}px ${10 * scale}px`, background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.3)", borderRadius: 9 * scale, padding: `${6 * scale}px ${8 * scale}px` }}>
          <div style={{ fontSize: 6 * scale, color: "#A78BFA", marginBottom: 3 * scale }}>Spending</div>
          <svg width="100%" height={36 * scale} viewBox="0 0 120 36">
            <defs>
              <linearGradient id="mg2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,28 L20,20 L40,14 L60,18 L80,8 L100,13 L120,4" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
            <path d="M0,28 L20,20 L40,14 L60,18 L80,8 L100,13 L120,4 L120,36 L0,36 Z" fill="url(#mg2)" />
            <circle cx="120" cy="4" r="3" fill="#8B5CF6" />
          </svg>
        </div>
        <div style={{ margin: `${3 * scale}px ${10 * scale}px 0` }}>
          <div style={{ fontSize: 6 * scale, color: "#A78BFA", marginBottom: 3 * scale }}>RECENT</div>
          {[{ n: "Netflix", a: "-$15.99", c: "#EF4444" }, { n: "Salary", a: "+$3,200", c: "#22C55E" }, { n: "Groceries", a: "-$84.20", c: "#F59E0B" }].map((t, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: 4 * scale, borderBottom: "1px solid rgba(139,92,246,0.1)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 5 * scale }}>
                <div style={{ width: 16 * scale, height: 16 * scale, borderRadius: "50%", background: t.c + "22" }} />
                <span style={{ fontSize: 7 * scale, color: "white", fontWeight: 600 }}>{t.n}</span>
              </div>
              <span style={{ fontSize: 7 * scale, fontWeight: 700, color: t.a.startsWith("+") ? "#22C55E" : "#F87171" }}>{t.a}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "nutripal",
    label: "NutriPal",
    category: "Nutrition Tracking",
    bg: "#F0FDF4",
    accent: "#16A34A",
    textLight: false,
    content: (scale: number) => (
      <>
        <div style={{ padding: `${8 * scale}px ${10 * scale}px ${4 * scale}px` }}>
          <div style={{ fontSize: 10 * scale, fontWeight: 700, color: "#166534" }}>NutriPal</div>
          <div style={{ fontSize: 6 * scale, color: "#4ADE80" }}>Tuesday, May 26</div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 4 * scale }}>
          <svg width={70 * scale} height={70 * scale} viewBox="0 0 70 70">
            <circle cx="35" cy="35" r="28" fill="none" stroke="#DCFCE7" strokeWidth="6" />
            <circle cx="35" cy="35" r="28" fill="none" stroke="#16A34A" strokeWidth="6" strokeDasharray="176" strokeDashoffset="53" strokeLinecap="round" transform="rotate(-90 35 35)" />
            <text x="35" y="38" textAnchor="middle" fontSize={10 * scale} fontWeight="bold" fill="#166534">1,420</text>
            <text x="35" y="46" textAnchor="middle" fontSize={6 * scale} fill="#4ADE80">of 1,800 kcal</text>
          </svg>
        </div>
        <div style={{ display: "flex", gap: 4 * scale, margin: `0 ${10 * scale}px ${5 * scale}px` }}>
          {[{ l: "Carbs", v: "180g", c: "#F59E0B", p: "72%" }, { l: "Protein", v: "95g", c: "#3B82F6", p: "60%" }, { l: "Fat", v: "42g", c: "#EF4444", p: "55%" }].map((m, i) => (
            <div key={i} style={{ flex: 1, background: m.c + "15", borderRadius: 7 * scale, padding: `${4 * scale}px ${3 * scale}px`, textAlign: "center" }}>
              <div style={{ fontSize: 8 * scale, fontWeight: 700, color: "#166534" }}>{m.v}</div>
              <div style={{ fontSize: 5 * scale, color: "#4ADE80" }}>{m.l}</div>
              <div style={{ height: 2 * scale, background: "#BBF7D0", borderRadius: scale, marginTop: 2 * scale }}>
                <div style={{ height: 2 * scale, width: m.p, background: m.c, borderRadius: scale }} />
              </div>
            </div>
          ))}
        </div>
        <div style={{ margin: `0 ${10 * scale}px` }}>
          {[{ n: "Oatmeal & Berries", c: "320 kcal", e: "🥣" }, { n: "Grilled Chicken", c: "540 kcal", e: "🍗" }, { n: "Greek Salad", c: "280 kcal", e: "🥗" }].map((meal, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "white", borderRadius: 6 * scale, padding: `${4 * scale}px ${6 * scale}px`, marginBottom: 3 * scale, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 4 * scale }}>
                <span style={{ fontSize: 11 * scale }}>{meal.e}</span>
                <span style={{ fontSize: 7 * scale, fontWeight: 600, color: "#166534" }}>{meal.n}</span>
              </div>
              <span style={{ fontSize: 6 * scale, color: "#16A34A", fontWeight: 600 }}>{meal.c}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "zenspace",
    label: "ZenSpace",
    category: "Wellness & Meditation",
    bg: "linear-gradient(160deg,#0EA5E9,#6366F1)",
    accent: "#FFFFFF",
    textLight: true,
    content: (scale: number) => (
      <>
        <div style={{ padding: `${8 * scale}px ${10 * scale}px ${4 * scale}px` }}>
          <div style={{ fontSize: 10 * scale, fontWeight: 700, color: "white" }}>ZenSpace</div>
          <div style={{ fontSize: 6 * scale, color: "rgba(255,255,255,0.6)" }}>Find your calm</div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", margin: `${6 * scale}px 0` }}>
          <div style={{ position: "relative", width: 72 * scale, height: 72 * scale, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ position: "absolute", width: 72 * scale, height: 72 * scale, borderRadius: "50%", background: "rgba(255,255,255,0.1)", border: "1.5px solid rgba(255,255,255,0.3)" }} />
            <div style={{ position: "absolute", width: 50 * scale, height: 50 * scale, borderRadius: "50%", background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.4)" }} />
            <div style={{ width: 32 * scale, height: 32 * scale, borderRadius: "50%", background: "rgba(255,255,255,0.35)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 6 * scale, fontWeight: 700, color: "white" }}>Breathe</span>
            </div>
          </div>
        </div>
        <div style={{ margin: `0 ${10 * scale}px` }}>
          {[{ n: "Morning Calm", d: "10 min", c: "#FB923C" }, { n: "Deep Focus", d: "20 min", c: "#34D399" }, { n: "Sleep Well", d: "30 min", c: "#818CF8" }].map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(255,255,255,0.15)", borderRadius: 7 * scale, padding: `${5 * scale}px ${7 * scale}px`, marginBottom: 3 * scale }}>
              <div style={{ display: "flex", alignItems: "center", gap: 5 * scale }}>
                <div style={{ width: 16 * scale, height: 16 * scale, borderRadius: 4 * scale, background: s.c + "55" }} />
                <div>
                  <div style={{ fontSize: 8 * scale, fontWeight: 600, color: "white" }}>{s.n}</div>
                  <div style={{ fontSize: 5 * scale, color: "rgba(255,255,255,0.5)" }}>{s.d}</div>
                </div>
              </div>
              <div style={{ width: 0, height: 0, borderTop: `${4 * scale}px solid transparent`, borderBottom: `${4 * scale}px solid transparent`, borderLeft: `${6 * scale}px solid rgba(255,255,255,0.7)`, marginLeft: scale }} />
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "shoplux",
    label: "ShopLux",
    category: "E-Commerce",
    bg: "#FAFAFA",
    accent: "#0F172A",
    textLight: false,
    content: (scale: number) => (
      <>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: `${8 * scale}px ${10 * scale}px ${4 * scale}px` }}>
          <div style={{ fontSize: 10 * scale, fontWeight: 700, color: "#0F172A" }}>ShopLux</div>
          <div style={{ position: "relative" }}>
            <div style={{ width: 18 * scale, height: 18 * scale, borderRadius: "50%", background: "#0F172A", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 8 * scale, height: 8 * scale, border: "1.5px solid white", borderRadius: 2 * scale }} />
            </div>
            <div style={{ position: "absolute", top: -2 * scale, right: -2 * scale, width: 8 * scale, height: 8 * scale, borderRadius: "50%", background: "#EF4444", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 5 * scale, color: "white", fontWeight: 700 }}>3</span>
            </div>
          </div>
        </div>
        <div style={{ margin: `0 ${10 * scale}px ${4 * scale}px`, height: 18 * scale, background: "#F1F5F9", borderRadius: 6 * scale, display: "flex", alignItems: "center", paddingLeft: 7 * scale }}>
          <span style={{ fontSize: 6 * scale, color: "#94A3B8" }}>Search products...</span>
        </div>
        <div style={{ display: "flex", gap: 3 * scale, margin: `0 ${10 * scale}px ${4 * scale}px` }}>
          {["All", "Shoes", "Bags", "Tops"].map((c, i) => (
            <span key={c} style={{ borderRadius: 99, padding: `${2 * scale}px ${6 * scale}px`, fontSize: 6 * scale, fontWeight: 600, background: i === 0 ? "#0F172A" : "#F1F5F9", color: i === 0 ? "white" : "#64748B" }}>{c}</span>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5 * scale, margin: `0 ${10 * scale}px` }}>
          {[{ n: "Air Max Pro", p: "$149", c: "#DBEAFE" }, { n: "Canvas Tote", p: "$89", c: "#FCE7F3" }, { n: "Linen Shirt", p: "$65", c: "#D1FAE5" }, { n: "Slim Wallet", p: "$45", c: "#FEF3C7" }].map((p, i) => (
            <div key={i} style={{ background: "white", borderRadius: 8 * scale, overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
              <div style={{ height: 34 * scale, background: p.c, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 20 * scale, height: 13 * scale, background: "rgba(255,255,255,0.6)", borderRadius: 3 * scale }} />
              </div>
              <div style={{ padding: `${3 * scale}px ${5 * scale}px` }}>
                <div style={{ fontSize: 6 * scale, fontWeight: 600, color: "#0F172A" }}>{p.n}</div>
                <div style={{ fontSize: 8 * scale, fontWeight: 700, color: "#0F172A" }}>{p.p}</div>
              </div>
            </div>
          ))}
        </div>
      </>
    ),
  },
];

function PhoneMockup({ app, scale = 1, onClick }: {
  app: typeof apps[0];
  scale?: number;
  onClick?: () => void;
}) {
  const w = 150 * scale;
  const h = 290 * scale;
  const isLight = !app.textLight;

  return (
    <div
      onClick={onClick}
      className={onClick ? "cursor-pointer" : ""}
      style={{
        position: "relative",
        width: w,
        height: h,
        flexShrink: 0,
        borderRadius: 24 * scale,
        overflow: "hidden",
        background: app.bg,
        boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
        fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
        transition: onClick ? "transform 0.2s, box-shadow 0.2s" : undefined,
      }}
    >
      {/* Status bar */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: `${7 * scale}px ${12 * scale}px ${2 * scale}px` }}>
        <span style={{ fontSize: 8 * scale, fontWeight: 700, color: isLight ? "#64748B" : "rgba(255,255,255,0.7)" }}>9:41</span>
        <div style={{ display: "flex", gap: 2 * scale }}>
          {[4, 6, 8, 10].map((h, i) => (
            <div key={i} style={{ width: 2 * scale, height: h * scale, borderRadius: scale, background: isLight ? "#94A3B8" : "rgba(255,255,255,0.5)" }} />
          ))}
        </div>
      </div>
      {/* Content */}
      {app.content(scale)}
      {/* Bottom nav */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        display: "flex", justifyContent: "space-around", alignItems: "center",
        padding: `${6 * scale}px ${16 * scale}px ${8 * scale}px`,
        background: isLight ? "rgba(255,255,255,0.95)" : "rgba(0,0,0,0.3)",
        borderTop: `1px solid ${isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.08)"}`,
      }}>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 * scale }}>
            <div style={{ width: 14 * scale, height: 14 * scale, borderRadius: 4 * scale, background: i === 0 ? app.accent : (isLight ? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.2)") }} />
            {i === 0 && <div style={{ width: 14 * scale, height: 2 * scale, borderRadius: scale, background: app.accent }} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Showcase() {
  const [active, setActive] = useState<typeof apps[0] | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section className="overflow-hidden py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-400">Real Output</p>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Designs generated by VibeUI
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
            Describe any app — VibeUI generates complete, production-ready screens in seconds. No templates. No placeholders.
          </p>
          <p className="mt-2 text-sm text-slate-500">Click any screen to see it full size</p>
        </div>

        {/* Phone row */}
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10" style={{ background: "linear-gradient(to right, #020817, transparent)" }} />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10" style={{ background: "linear-gradient(to left, #020817, transparent)" }} />
          <div className="flex gap-6 overflow-x-auto pb-12 pt-4 px-8" style={{ scrollbarWidth: "none" }}>
            {apps.map((app) => (
              <div
                key={app.id}
                className="flex-shrink-0 group"
                style={{ position: "relative" }}
              >
                <div
                  onClick={() => setActive(app)}
                  className="transition-transform duration-200 group-hover:scale-105 group-hover:shadow-2xl cursor-pointer"
                  style={{ display: "block" }}
                >
                  <PhoneMockup app={app} scale={1} />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center"
                    style={{ background: "rgba(99,102,241,0.15)", border: "2px solid rgba(99,102,241,0.6)" }}>
                    <div className="bg-violet-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                      View full size
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-xs font-semibold text-slate-200">{app.label}</p>
                  <p className="text-xs text-slate-500">{app.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category tags */}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          {apps.map((app) => (
            <span key={app.id} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-400">
              {app.category}
            </span>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)" }}
          onClick={() => setActive(null)}
        >
          <div
            className="relative flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setActive(null)}
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Big phone */}
            <div className="transition-all duration-300 scale-100">
              <PhoneMockup app={active} scale={1.8} />
            </div>

            {/* Label */}
            <div className="mt-6 text-center">
              <p className="text-lg font-bold text-white">{active.label}</p>
              <p className="text-sm text-white/60">{active.category}</p>
            </div>

            {/* Nav between apps */}
            <div className="mt-4 flex gap-2">
              {apps.map((app) => (
                <button
                  key={app.id}
                  onClick={() => setActive(app)}
                  className={`h-2 rounded-full transition-all duration-200 ${app.id === active.id ? "w-6 bg-white" : "w-2 bg-white/30"}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
