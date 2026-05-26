import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const suggestions = ["Fitness App", "Habit Tracker", "Digital Gallery", "Journaling App"];

/* ── Detailed phone screens for the marquee ── */
const phoneScreens = [
  {
    bg: "#0F172A", accent: "#6366F1",
    label: "FitFlow",
    content: (
      <>
        <div style={{ padding: "8px 10px 4px" }}>
          <div style={{ fontSize: 7, color: "#94A3B8", marginBottom: 2 }}>Good morning 👋</div>
          <div style={{ fontSize: 10, fontWeight: 700, color: "white" }}>Alex</div>
        </div>
        <div style={{ margin: "4px 10px", background: "#1E293B", borderRadius: 8, padding: "6px 8px" }}>
          <div style={{ fontSize: 6, color: "#94A3B8", marginBottom: 3 }}>TODAY&apos;S GOAL</div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <svg width="30" height="30" viewBox="0 0 30 30">
              <circle cx="15" cy="15" r="12" fill="none" stroke="#1E3A5F" strokeWidth="3" />
              <circle cx="15" cy="15" r="12" fill="none" stroke="#6366F1" strokeWidth="3"
                strokeDasharray="75.4" strokeDashoffset="17" strokeLinecap="round" transform="rotate(-90 15 15)" />
              <text x="15" y="19" textAnchor="middle" fontSize="7" fontWeight="bold" fill="white">78%</text>
            </svg>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
                <span style={{ fontSize: 6, color: "#94A3B8" }}>Steps</span>
                <span style={{ fontSize: 6, color: "white", fontWeight: 600 }}>7,812</span>
              </div>
              <div style={{ height: 3, background: "#334155", borderRadius: 2, marginBottom: 3 }}>
                <div style={{ height: 3, width: "78%", background: "#6366F1", borderRadius: 2 }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
                <span style={{ fontSize: 6, color: "#94A3B8" }}>Cal</span>
                <span style={{ fontSize: 6, color: "white", fontWeight: 600 }}>487 kcal</span>
              </div>
              <div style={{ height: 3, background: "#334155", borderRadius: 2 }}>
                <div style={{ height: 3, width: "60%", background: "#F97316", borderRadius: 2 }} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ margin: "4px 10px 0" }}>
          <div style={{ fontSize: 6, color: "#94A3B8", marginBottom: 3 }}>WORKOUTS</div>
          {[{ n: "Morning Run", d: "32 min", c: "#6366F1", done: true }, { n: "Core Strength", d: "20 min", c: "#F97316", done: false }].map((w, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#1E293B", borderRadius: 6, padding: "4px 6px", marginBottom: 3 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <div style={{ width: 14, height: 14, borderRadius: 4, background: w.c + "33", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: w.c }} />
                </div>
                <div>
                  <div style={{ fontSize: 7, fontWeight: 600, color: "white" }}>{w.n}</div>
                  <div style={{ fontSize: 6, color: "#64748B" }}>{w.d}</div>
                </div>
              </div>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: w.done ? "#22C55E" : "transparent", border: w.done ? "none" : "1px solid #334155", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {w.done && <div style={{ width: 4, height: 4, borderRadius: "50%", background: "white" }} />}
              </div>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    bg: "#1a0533", accent: "#8B5CF6",
    label: "MoneyMind",
    content: (
      <>
        <div style={{ padding: "8px 10px 4px" }}>
          <div style={{ fontSize: 7, color: "#A78BFA" }}>Total Balance</div>
          <div style={{ fontSize: 14, fontWeight: 800, color: "white", lineHeight: 1.2 }}>$12,480<span style={{ fontSize: 8, color: "#A78BFA" }}>.52</span></div>
          <div style={{ fontSize: 6, color: "#22C55E", marginTop: 1 }}>▲ 3.2% this month</div>
        </div>
        <div style={{ margin: "4px 10px", background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.3)", borderRadius: 8, padding: "5px 7px" }}>
          <div style={{ fontSize: 6, color: "#A78BFA", marginBottom: 3 }}>Spending Overview</div>
          <svg width="100%" height="28" viewBox="0 0 100 28">
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,22 L16,18 L32,12 L48,16 L64,6 L80,11 L100,4" fill="none" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M0,22 L16,18 L32,12 L48,16 L64,6 L80,11 L100,4 L100,28 L0,28 Z" fill="url(#g1)" />
          </svg>
        </div>
        <div style={{ margin: "3px 10px 0" }}>
          <div style={{ fontSize: 6, color: "#A78BFA", marginBottom: 3 }}>RECENT</div>
          {[{ n: "Netflix", a: "-$15.99", c: "#EF4444" }, { n: "Salary", a: "+$3,200", c: "#22C55E" }, { n: "Groceries", a: "-$84.20", c: "#F59E0B" }].map((t, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: 4 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <div style={{ width: 14, height: 14, borderRadius: "50%", background: t.c + "22", border: `1px solid ${t.c}44` }} />
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
    bg: "#F0FDF4", accent: "#16A34A",
    label: "NutriPal",
    content: (
      <>
        <div style={{ padding: "8px 10px 4px" }}>
          <div style={{ fontSize: 9, fontWeight: 700, color: "#166534" }}>NutriPal</div>
          <div style={{ fontSize: 6, color: "#4ADE80" }}>Tuesday, May 26</div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", margin: "2px 0" }}>
          <svg width="56" height="56" viewBox="0 0 56 56">
            <circle cx="28" cy="28" r="22" fill="none" stroke="#DCFCE7" strokeWidth="5" />
            <circle cx="28" cy="28" r="22" fill="none" stroke="#16A34A" strokeWidth="5"
              strokeDasharray="138.2" strokeDashoffset="41" strokeLinecap="round" transform="rotate(-90 28 28)" />
            <text x="28" y="31" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#166534">1,420</text>
            <text x="28" y="39" textAnchor="middle" fontSize="5" fill="#4ADE80">kcal</text>
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
    bg: "linear-gradient(160deg,#0EA5E9,#6366F1)", accent: "#FFFFFF",
    label: "ZenSpace",
    content: (
      <>
        <div style={{ padding: "8px 10px 4px" }}>
          <div style={{ fontSize: 9, fontWeight: 700, color: "white" }}>ZenSpace</div>
          <div style={{ fontSize: 6, color: "rgba(255,255,255,0.6)" }}>Find your calm</div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", margin: "6px 0" }}>
          <div style={{ position: "relative", width: 60, height: 60, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ position: "absolute", width: 60, height: 60, borderRadius: "50%", background: "rgba(255,255,255,0.1)", border: "1.5px solid rgba(255,255,255,0.3)" }} />
            <div style={{ position: "absolute", width: 42, height: 42, borderRadius: "50%", background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.4)" }} />
            <div style={{ width: 26, height: 26, borderRadius: "50%", background: "rgba(255,255,255,0.35)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 6, fontWeight: 700, color: "white" }}>Breathe</span>
            </div>
          </div>
        </div>
        <div style={{ margin: "0 10px" }}>
          <div style={{ fontSize: 6, color: "rgba(255,255,255,0.5)", marginBottom: 4 }}>SESSIONS</div>
          {[{ n: "Morning Calm", d: "10 min", c: "#FB923C" }, { n: "Deep Focus", d: "20 min", c: "#34D399" }, { n: "Sleep Well", d: "30 min", c: "#818CF8" }].map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(255,255,255,0.12)", borderRadius: 6, padding: "5px 7px", marginBottom: 3 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <div style={{ width: 14, height: 14, borderRadius: 4, background: s.c + "44" }} />
                <div>
                  <div style={{ fontSize: 7, fontWeight: 600, color: "white" }}>{s.n}</div>
                  <div style={{ fontSize: 5, color: "rgba(255,255,255,0.5)" }}>{s.d}</div>
                </div>
              </div>
              <div style={{ width: 14, height: 14, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 0, height: 0, borderTop: "3px solid transparent", borderBottom: "3px solid transparent", borderLeft: "5px solid white", marginLeft: 1 }} />
              </div>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    bg: "#FAFAFA", accent: "#0F172A",
    label: "ShopLux",
    content: (
      <>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 10px 4px" }}>
          <div style={{ fontSize: 9, fontWeight: 700, color: "#0F172A" }}>ShopLux</div>
          <div style={{ width: 16, height: 16, borderRadius: "50%", background: "#0F172A", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 7, height: 7, border: "1.5px solid white", borderRadius: 2 }} />
          </div>
        </div>
        <div style={{ margin: "0 10px 4px", height: 18, background: "#F1F5F9", borderRadius: 6, display: "flex", alignItems: "center", paddingLeft: 7 }}>
          <span style={{ fontSize: 6, color: "#94A3B8" }}>Search products...</span>
        </div>
        <div style={{ display: "flex", gap: 3, margin: "0 10px 4px" }}>
          {["All", "Shoes", "Bags"].map((c, i) => (
            <span key={c} style={{ borderRadius: 99, padding: "2px 6px", fontSize: 6, fontWeight: 600, background: i === 0 ? "#0F172A" : "#F1F5F9", color: i === 0 ? "white" : "#64748B" }}>{c}</span>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5, margin: "0 10px" }}>
          {[{ n: "Air Max", p: "$149", c: "#DBEAFE" }, { n: "Tote Bag", p: "$89", c: "#FCE7F3" }, { n: "Linen Shirt", p: "$65", c: "#D1FAE5" }, { n: "Wallet", p: "$45", c: "#FEF3C7" }].map((p, i) => (
            <div key={i} style={{ background: "white", borderRadius: 7, overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
              <div style={{ height: 28, background: p.c, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 18, height: 12, background: "rgba(255,255,255,0.6)", borderRadius: 3 }} />
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
    bg: "#1C1917", accent: "#F97316",
    label: "HabitStack",
    content: (
      <>
        <div style={{ padding: "8px 10px 4px" }}>
          <div style={{ fontSize: 9, fontWeight: 700, color: "white" }}>HabitStack</div>
          <div style={{ fontSize: 6, color: "#78716C" }}>🔥 14 day streak!</div>
        </div>
        <div style={{ margin: "4px 10px", background: "#292524", borderRadius: 8, padding: "5px 7px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 5, color: "#78716C", marginBottom: 2 }}>{d}</div>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: i < 5 ? "#F97316" : "#292524", border: i < 5 ? "none" : "1px solid #44403C" }} />
              </div>
            ))}
          </div>
        </div>
        <div style={{ margin: "4px 10px 0" }}>
          <div style={{ fontSize: 6, color: "#78716C", marginBottom: 3 }}>TODAY</div>
          {[{ n: "Morning Run", done: true }, { n: "Read 20 min", done: true }, { n: "Meditate", done: false }, { n: "No Sugar", done: false }].map((h, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, padding: "3px 0", borderBottom: "1px solid #292524" }}>
              <div style={{ width: 12, height: 12, borderRadius: 3, background: h.done ? "#F97316" : "transparent", border: h.done ? "none" : "1px solid #44403C", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {h.done && <span style={{ fontSize: 7, color: "white", fontWeight: 700 }}>✓</span>}
              </div>
              <span style={{ fontSize: 7, color: h.done ? "white" : "#78716C", textDecoration: h.done ? "line-through" : "none" }}>{h.n}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
];

function PhoneCard({ screen, floatDelay }: { screen: typeof phoneScreens[0]; floatDelay: number }) {
  return (
    <div
      className="relative flex-shrink-0 overflow-hidden rounded-[1.5rem] shadow-2xl cursor-pointer select-none"
      style={{
        width: 130,
        height: 240,
        background: screen.bg,
        animation: `phoneFloat 3s ease-in-out ${floatDelay}s infinite alternate`,
      }}
    >
      {/* Status bar */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "6px 10px 2px" }}>
        <span style={{ fontSize: 7, fontWeight: 700, color: screen.bg.includes("F0FDF4") || screen.bg.includes("FAFAFA") ? "#64748B" : "rgba(255,255,255,0.7)" }}>9:41</span>
        <div style={{ display: "flex", gap: 2 }}>
          {[4, 6, 8, 10].map((h, i) => (
            <div key={i} style={{ width: 2, height: h, borderRadius: 1, background: screen.bg.includes("F0FDF4") || screen.bg.includes("FAFAFA") ? "#94A3B8" : "rgba(255,255,255,0.5)" }} />
          ))}
        </div>
      </div>
      {/* Screen content */}
      <div style={{ flex: 1 }}>
        {screen.content}
      </div>
      {/* Bottom nav */}
      <div
        className="absolute bottom-0 left-0 right-0 flex justify-around items-center px-4 py-1.5"
        style={{ background: screen.bg.includes("F0FDF4") || screen.bg.includes("FAFAFA") ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.25)", borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col items-center gap-0.5">
            <div style={{ width: 12, height: 12, borderRadius: 3, background: i === 0 ? screen.accent : "rgba(128,128,128,0.3)" }} />
            {i === 0 && <div style={{ width: 12, height: 2, borderRadius: 1, background: screen.accent }} />}
          </div>
        ))}
      </div>
      {/* App label */}
      <div className="absolute -bottom-6 left-0 right-0 text-center">
        <span className="text-[10px] font-semibold text-slate-500">{screen.label}</span>
      </div>
    </div>
  );
}

export function Hero() {
  const doubled = [...phoneScreens, ...phoneScreens];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
      <style>{`
        @keyframes phoneFloat {
          from { transform: translateY(0px); }
          to   { transform: translateY(-12px); }
        }
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeScroll 28s linear infinite;
          gap: 24px;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)", backgroundSize: "40px 40px" }}
      />
      {/* Purple glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-200 opacity-20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-8 text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700">
          <Sparkles className="h-3.5 w-3.5" />
          V2 Now Available
        </div>

        {/* Headline */}
        <h1 className="mx-auto max-w-3xl text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
          Design apps in{" "}
          <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">seconds</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-500">
          Generate beautiful app UIs with AI and iterate on your ideas instantly.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/signup"
            className="inline-flex h-12 items-center gap-2 rounded-xl bg-violet-600 px-6 text-sm font-semibold text-white shadow-md shadow-violet-200 hover:bg-violet-700 transition-colors"
          >
            Start Creating <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="#demo"
            className="inline-flex h-12 items-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Learn More
          </a>
        </div>

        {/* Prompt input mockup */}
        <div className="mx-auto mt-10 max-w-xl">
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 shadow-sm">
            <span className="flex-1 text-left text-sm text-slate-400">Design a sleek fitness tracking app with workout rou...</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600">
              <ArrowRight className="h-4 w-4 text-white" />
            </div>
          </div>
          {/* Suggestion chips */}
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {suggestions.map((s) => (
              <span key={s} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 hover:border-violet-300 hover:text-violet-700 cursor-pointer transition-colors">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Infinite scrolling phone marquee ── */}
      <div className="relative overflow-hidden pb-20 pt-4">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10" style={{ background: "linear-gradient(to right, white, transparent)" }} />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10" style={{ background: "linear-gradient(to left, white, transparent)" }} />

        <div className="marquee-track px-6">
          {doubled.map((screen, i) => (
            <PhoneCard
              key={i}
              screen={screen}
              floatDelay={(i % phoneScreens.length) * 0.45}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
