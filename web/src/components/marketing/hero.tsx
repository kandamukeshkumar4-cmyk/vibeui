import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const suggestions = ["Fitness App", "Habit Tracker", "Digital Gallery", "Journaling App"];

const phoneScreens = [
  {
    label: "FitFlow", bg: "#0F172A", accent: "#6366F1", textLight: true,
    content: (
      <>
        <div style={{ padding: "8px 10px 4px" }}>
          <div style={{ fontSize: 7, color: "#94A3B8", marginBottom: 2 }}>Good morning 👋</div>
          <div style={{ fontSize: 13, fontWeight: 800, color: "white" }}>Alex</div>
        </div>
        <div style={{ margin: "4px 10px", background: "#1E293B", borderRadius: 10, padding: "6px 8px" }}>
          <div style={{ fontSize: 6, color: "#94A3B8", marginBottom: 3 }}>{"TODAY'S GOAL"}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <svg width="40" height="40" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="16" fill="none" stroke="#1E3A5F" strokeWidth="3.5" />
              <circle cx="20" cy="20" r="16" fill="none" stroke="#6366F1" strokeWidth="3.5" strokeDasharray="100" strokeDashoffset="22" strokeLinecap="round" transform="rotate(-90 20 20)" />
              <text x="20" y="24" textAnchor="middle" fontSize="8" fontWeight="bold" fill="white">78%</text>
            </svg>
            <div style={{ flex: 1 }}>
              {[{ l: "Steps", v: "7,812", c: "#6366F1", p: "78%" }, { l: "Cal", v: "487 kcal", c: "#F97316", p: "60%" }].map((r, i) => (
                <div key={i} style={{ marginBottom: i === 0 ? 3 : 0 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 1 }}>
                    <span style={{ fontSize: 6, color: "#94A3B8" }}>{r.l}</span>
                    <span style={{ fontSize: 6, color: "white", fontWeight: 600 }}>{r.v}</span>
                  </div>
                  <div style={{ height: 3, background: "#334155", borderRadius: 2 }}>
                    <div style={{ height: 3, width: r.p, background: r.c, borderRadius: 2 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ margin: "4px 10px 0" }}>
          <div style={{ fontSize: 6, color: "#94A3B8", marginBottom: 3 }}>WORKOUTS</div>
          {[{ n: "Morning Run", d: "32 min", c: "#6366F1", done: true }, { n: "Core Strength", d: "20 min", c: "#F97316", done: false }].map((w, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#1E293B", borderRadius: 7, padding: "5px 6px", marginBottom: 3 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <div style={{ width: 14, height: 14, borderRadius: 4, background: w.c + "33" }} />
                <div>
                  <div style={{ fontSize: 7, fontWeight: 600, color: "white" }}>{w.n}</div>
                  <div style={{ fontSize: 6, color: "#64748B" }}>{w.d}</div>
                </div>
              </div>
              <div style={{ width: 11, height: 11, borderRadius: "50%", background: w.done ? "#22C55E" : "transparent", border: w.done ? "none" : "1px solid #334155" }} />
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    label: "MoneyMind", bg: "#1a0533", accent: "#8B5CF6", textLight: true,
    content: (
      <>
        <div style={{ padding: "8px 10px 4px" }}>
          <div style={{ fontSize: 7, color: "#A78BFA" }}>Total Balance</div>
          <div style={{ fontSize: 16, fontWeight: 800, color: "white", lineHeight: 1.1 }}>$12,480<span style={{ fontSize: 8, color: "#A78BFA" }}>.52</span></div>
          <div style={{ fontSize: 6, color: "#22C55E", marginTop: 1 }}>▲ 3.2% this month</div>
        </div>
        <div style={{ margin: "4px 10px", background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.3)", borderRadius: 9, padding: "5px 7px" }}>
          <div style={{ fontSize: 6, color: "#A78BFA", marginBottom: 2 }}>Spending</div>
          <svg width="100%" height="30" viewBox="0 0 120 30">
            <defs>
              <linearGradient id="hg1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,24 L20,18 L40,12 L60,16 L80,6 L100,11 L120,3" fill="none" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M0,24 L20,18 L40,12 L60,16 L80,6 L100,11 L120,3 L120,30 L0,30 Z" fill="url(#hg1)" />
            <circle cx="120" cy="3" r="2.5" fill="#8B5CF6" />
          </svg>
        </div>
        <div style={{ margin: "3px 10px 0" }}>
          {[{ n: "Netflix", a: "-$15.99", c: "#EF4444" }, { n: "Salary", a: "+$3,200", c: "#22C55E" }, { n: "Groceries", a: "-$84.20", c: "#F59E0B" }].map((t, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: 4, borderBottom: "1px solid rgba(139,92,246,0.1)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <div style={{ width: 14, height: 14, borderRadius: "50%", background: t.c + "22" }} />
                <span style={{ fontSize: 7, color: "white", fontWeight: 600 }}>{t.n}</span>
              </div>
              <span style={{ fontSize: 7, fontWeight: 700, color: t.a.startsWith("+") ? "#22C55E" : "#F87171" }}>{t.a}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    label: "NutriPal", bg: "#F0FDF4", accent: "#16A34A", textLight: false,
    content: (
      <>
        <div style={{ padding: "8px 10px 4px" }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: "#166534" }}>NutriPal</div>
          <div style={{ fontSize: 6, color: "#4ADE80" }}>Tuesday, May 26</div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 4 }}>
          <svg width="62" height="62" viewBox="0 0 62 62">
            <circle cx="31" cy="31" r="24" fill="none" stroke="#DCFCE7" strokeWidth="5" />
            <circle cx="31" cy="31" r="24" fill="none" stroke="#16A34A" strokeWidth="5" strokeDasharray="150" strokeDashoffset="45" strokeLinecap="round" transform="rotate(-90 31 31)" />
            <text x="31" y="34" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#166534">1,420</text>
            <text x="31" y="41" textAnchor="middle" fontSize="5" fill="#4ADE80">kcal</text>
          </svg>
        </div>
        <div style={{ display: "flex", gap: 4, margin: "0 10px 4px" }}>
          {[{ l: "Carbs", v: "180g", c: "#F59E0B" }, { l: "Protein", v: "95g", c: "#3B82F6" }, { l: "Fat", v: "42g", c: "#EF4444" }].map((m, i) => (
            <div key={i} style={{ flex: 1, background: m.c + "18", borderRadius: 6, padding: "4px 3px", textAlign: "center" }}>
              <div style={{ fontSize: 7, fontWeight: 700, color: "#166534" }}>{m.v}</div>
              <div style={{ fontSize: 5, color: "#4ADE80" }}>{m.l}</div>
              <div style={{ height: 2, background: "#BBF7D0", borderRadius: 1, marginTop: 2 }}>
                <div style={{ height: 2, width: "70%", background: m.c, borderRadius: 1 }} />
              </div>
            </div>
          ))}
        </div>
        <div style={{ margin: "0 10px" }}>
          {[{ n: "Oatmeal", c: "320 kcal", e: "🥣" }, { n: "Grilled Chicken", c: "540 kcal", e: "🍗" }].map((meal, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "white", borderRadius: 6, padding: "4px 6px", marginBottom: 3, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <span style={{ fontSize: 10 }}>{meal.e}</span>
                <span style={{ fontSize: 7, fontWeight: 600, color: "#166534" }}>{meal.n}</span>
              </div>
              <span style={{ fontSize: 6, color: "#16A34A", fontWeight: 600 }}>{meal.c}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    label: "ZenSpace", bg: "linear-gradient(160deg,#0EA5E9,#6366F1)", accent: "#FFFFFF", textLight: true,
    content: (
      <>
        <div style={{ padding: "8px 10px 4px" }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: "white" }}>ZenSpace</div>
          <div style={{ fontSize: 6, color: "rgba(255,255,255,0.6)" }}>Find your calm</div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", margin: "6px 0" }}>
          <div style={{ position: "relative", width: 64, height: 64, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ position: "absolute", width: 64, height: 64, borderRadius: "50%", background: "rgba(255,255,255,0.08)", border: "1.5px solid rgba(255,255,255,0.25)" }} />
            <div style={{ position: "absolute", width: 45, height: 45, borderRadius: "50%", background: "rgba(255,255,255,0.12)", border: "1.5px solid rgba(255,255,255,0.35)" }} />
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(255,255,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 6, fontWeight: 700, color: "white" }}>Breathe</span>
            </div>
          </div>
        </div>
        <div style={{ margin: "0 10px" }}>
          {[{ n: "Morning Calm", d: "10 min", c: "#FB923C" }, { n: "Deep Focus", d: "20 min", c: "#34D399" }, { n: "Sleep Well", d: "30 min", c: "#818CF8" }].map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(255,255,255,0.12)", borderRadius: 7, padding: "5px 7px", marginBottom: 3 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <div style={{ width: 14, height: 14, borderRadius: 4, background: s.c + "55" }} />
                <div>
                  <div style={{ fontSize: 7, fontWeight: 600, color: "white" }}>{s.n}</div>
                  <div style={{ fontSize: 5, color: "rgba(255,255,255,0.5)" }}>{s.d}</div>
                </div>
              </div>
              <div style={{ width: 0, height: 0, borderTop: "3.5px solid transparent", borderBottom: "3.5px solid transparent", borderLeft: "5px solid rgba(255,255,255,0.6)" }} />
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    label: "ShopLux", bg: "#FAFAFA", accent: "#0F172A", textLight: false,
    content: (
      <>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 10px 4px" }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: "#0F172A" }}>ShopLux</div>
          <div style={{ width: 16, height: 16, borderRadius: "50%", background: "#0F172A", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 7, height: 7, border: "1.5px solid white", borderRadius: 2 }} />
          </div>
        </div>
        <div style={{ margin: "0 10px 4px", height: 17, background: "#F1F5F9", borderRadius: 6, display: "flex", alignItems: "center", paddingLeft: 7 }}>
          <span style={{ fontSize: 6, color: "#94A3B8" }}>Search products...</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5, margin: "0 10px" }}>
          {[{ n: "Air Max", p: "$149", c: "#DBEAFE" }, { n: "Tote Bag", p: "$89", c: "#FCE7F3" }, { n: "Linen Shirt", p: "$65", c: "#D1FAE5" }, { n: "Wallet", p: "$45", c: "#FEF3C7" }].map((p, i) => (
            <div key={i} style={{ background: "white", borderRadius: 7, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.07)" }}>
              <div style={{ height: 28, background: p.c, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 16, height: 10, background: "rgba(255,255,255,0.6)", borderRadius: 2 }} />
              </div>
              <div style={{ padding: "3px 5px" }}>
                <div style={{ fontSize: 6, fontWeight: 600, color: "#0F172A" }}>{p.n}</div>
                <div style={{ fontSize: 7, fontWeight: 700, color: "#0F172A" }}>{p.p}</div>
              </div>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    label: "HabitStack", bg: "#1C1917", accent: "#F97316", textLight: true,
    content: (
      <>
        <div style={{ padding: "8px 10px 4px" }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: "white" }}>HabitStack</div>
          <div style={{ fontSize: 6, color: "#78716C" }}>🔥 14 day streak!</div>
        </div>
        <div style={{ margin: "4px 10px", background: "#292524", borderRadius: 8, padding: "5px 7px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 5, color: "#78716C", marginBottom: 2 }}>{d}</div>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: i < 5 ? "#F97316" : "transparent", border: i < 5 ? "none" : "1px solid #44403C" }} />
              </div>
            ))}
          </div>
        </div>
        <div style={{ margin: "4px 10px 0" }}>
          {[{ n: "Morning Run", done: true }, { n: "Read 20 min", done: true }, { n: "Meditate", done: false }, { n: "No Sugar", done: false }].map((h, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, padding: "3px 0", borderBottom: "1px solid #292524" }}>
              <div style={{ width: 12, height: 12, borderRadius: 3, background: h.done ? "#F97316" : "transparent", border: h.done ? "none" : "1px solid #44403C", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {h.done && <span style={{ fontSize: 7, color: "white", fontWeight: 700 }}>✓</span>}
              </div>
              <span style={{ fontSize: 7, color: h.done ? "white" : "#78716C" }}>{h.n}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
];

export function Hero() {
  const doubled = [...phoneScreens, ...phoneScreens];

  return (
    <section className="relative overflow-hidden">
      <style>{`
        @keyframes floatUp {
          0%   { transform: translate3d(0, 0px, 0); }
          100% { transform: translate3d(0, -14px, 0); }
        }
        @keyframes marqueeLeft {
          0%   { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .hero-marquee {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: marqueeLeft 32s linear infinite;
          gap: 20px;
        }
        .hero-marquee:hover {
          animation-play-state: paused;
        }
        .phone-float {
          will-change: transform;
          animation: floatUp 2.8s ease-in-out infinite alternate;
        }
      `}</style>

      {/* Blue glow orbs */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(ellipse, #3730A3 0%, transparent 70%)" }} />
      <div className="pointer-events-none absolute top-1/2 -left-32 h-64 w-64 rounded-full opacity-20 blur-3xl"
        style={{ background: "#1D4ED8" }} />
      <div className="pointer-events-none absolute top-1/2 -right-32 h-64 w-64 rounded-full opacity-20 blur-3xl"
        style={{ background: "#7C3AED" }} />

      <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-10 text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300">
          <Sparkles className="h-3.5 w-3.5" />
          V2 Now Available
        </div>

        {/* Headline */}
        <h1 className="mx-auto max-w-3xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Design apps in{" "}
          <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">seconds</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-400">
          Generate beautiful app UIs with AI and iterate on your ideas instantly.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/signup"
            className="inline-flex h-12 items-center gap-2 rounded-xl bg-violet-600 px-6 text-sm font-semibold text-white shadow-lg shadow-violet-900/50 hover:bg-violet-500 transition-colors"
          >
            Start Creating <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="#demo"
            className="inline-flex h-12 items-center rounded-xl border border-white/20 bg-white/5 px-6 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Learn More
          </a>
        </div>

        {/* Prompt mockup */}
        <div className="mx-auto mt-10 max-w-xl">
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 backdrop-blur-sm">
            <span className="flex-1 text-left text-sm text-slate-500">Design a sleek fitness tracking app with workout rou...</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600">
              <ArrowRight className="h-4 w-4 text-white" />
            </div>
          </div>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {suggestions.map((s) => (
              <span key={s} className="cursor-pointer rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-400 hover:border-violet-400/50 hover:text-violet-300 transition-colors">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Marquee ── */}
      <div className="relative overflow-hidden pb-24 pt-6">
        {/* Fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-40 z-10"
          style={{ background: "linear-gradient(to right, #020817, transparent)" }} />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-40 z-10"
          style={{ background: "linear-gradient(to left, #020817, transparent)" }} />

        <div className="hero-marquee px-4">
          {doubled.map((screen, i) => {
            const delay = (i % phoneScreens.length) * 0.5;
            const isLight = !screen.textLight;
            return (
              <div
                key={i}
                className="phone-float flex-shrink-0"
                style={{
                  animationDelay: `${delay}s`,
                  position: "relative",
                  width: 130,
                  height: 248,
                  borderRadius: "1.5rem",
                  overflow: "hidden",
                  background: screen.bg,
                  boxShadow: "0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)",
                  fontFamily: "-apple-system, sans-serif",
                }}
              >
                {/* Status bar */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "7px 10px 2px" }}>
                  <span style={{ fontSize: 7, fontWeight: 700, color: isLight ? "#64748B" : "rgba(255,255,255,0.6)" }}>9:41</span>
                  <div style={{ display: "flex", gap: 2 }}>
                    {[4, 6, 8, 10].map((h, j) => (
                      <div key={j} style={{ width: 2, height: h, borderRadius: 1, background: isLight ? "#94A3B8" : "rgba(255,255,255,0.45)" }} />
                    ))}
                  </div>
                </div>
                {screen.content}
                {/* Bottom nav */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  display: "flex", justifyContent: "space-around", alignItems: "center",
                  padding: "5px 16px 7px",
                  background: isLight ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.3)",
                  borderTop: `1px solid ${isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.06)"}`,
                }}>
                  {[0, 1, 2, 3].map((j) => (
                    <div key={j} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                      <div style={{ width: 12, height: 12, borderRadius: 3, background: j === 0 ? screen.accent : (isLight ? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.2)") }} />
                      {j === 0 && <div style={{ width: 12, height: 2, borderRadius: 1, background: screen.accent }} />}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
