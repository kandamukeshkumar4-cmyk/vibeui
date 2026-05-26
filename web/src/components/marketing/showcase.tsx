"use client";

/* ─────────────────────────────────────────────────────────────
   Showcase — realistic generated-app phone mockups
   Shows visitors actual quality of AI output
───────────────────────────────────────────────────────────── */

function PhoneFitFlow() {
  return (
    <div className="relative flex-shrink-0 overflow-hidden rounded-[2rem] shadow-2xl" style={{ width: 220, height: 440, background: "#0F172A" }}>
      {/* Status bar */}
      <div className="flex items-center justify-between px-5 pt-4 pb-2">
        <span className="text-[10px] font-semibold text-slate-400">9:41</span>
        <div className="flex gap-1">
          <div className="h-2 w-3 rounded-sm bg-slate-500" />
          <div className="h-2 w-1 rounded-sm bg-green-400" />
        </div>
      </div>
      {/* Header */}
      <div className="px-5 pb-3">
        <p className="text-[10px] text-slate-500">Good morning,</p>
        <p className="text-sm font-bold text-white">Alex</p>
      </div>
      {/* Progress ring card */}
      <div className="mx-4 rounded-2xl p-3" style={{ background: "#1E293B" }}>
        <div className="flex items-center justify-between mb-2">
          <p className="text-[10px] font-semibold text-slate-400">TODAY'S GOAL</p>
          <span className="text-[10px] text-green-400 font-semibold">78%</span>
        </div>
        <div className="flex items-center gap-3">
          {/* SVG ring */}
          <svg width="48" height="48" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20" fill="none" stroke="#1E3A5F" strokeWidth="5" />
            <circle cx="24" cy="24" r="20" fill="none" stroke="#6366F1" strokeWidth="5"
              strokeDasharray="125.66" strokeDashoffset="27.6" strokeLinecap="round" transform="rotate(-90 24 24)" />
            <text x="24" y="28" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white">78%</text>
          </svg>
          <div className="flex-1 space-y-1.5">
            <div>
              <div className="flex justify-between mb-0.5">
                <span className="text-[9px] text-slate-400">Steps</span>
                <span className="text-[9px] text-white font-semibold">7,812</span>
              </div>
              <div className="h-1 rounded-full bg-slate-700">
                <div className="h-1 rounded-full bg-indigo-400" style={{ width: "78%" }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-0.5">
                <span className="text-[9px] text-slate-400">Cal</span>
                <span className="text-[9px] text-white font-semibold">487 kcal</span>
              </div>
              <div className="h-1 rounded-full bg-slate-700">
                <div className="h-1 rounded-full bg-orange-400" style={{ width: "62%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Workout cards */}
      <div className="px-4 mt-3 space-y-2">
        <p className="text-[10px] font-semibold text-slate-400 mb-1">TODAY'S WORKOUTS</p>
        {[
          { name: "Morning Run", dur: "32 min", color: "#6366F1", done: true },
          { name: "Core Strength", dur: "20 min", color: "#F59E0B", done: false },
        ].map((w) => (
          <div key={w.name} className="flex items-center justify-between rounded-xl px-3 py-2" style={{ background: "#1E293B" }}>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-lg flex items-center justify-center" style={{ background: w.color + "33" }}>
                <div className="h-3 w-3 rounded-full" style={{ background: w.color }} />
              </div>
              <div>
                <p className="text-[10px] font-semibold text-white">{w.name}</p>
                <p className="text-[9px] text-slate-500">{w.dur}</p>
              </div>
            </div>
            <div className={`h-4 w-4 rounded-full flex items-center justify-center ${w.done ? "bg-green-500" : "border border-slate-600"}`}>
              {w.done && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
            </div>
          </div>
        ))}
      </div>
      {/* Bottom nav */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-around px-4 py-3" style={{ background: "#0F172A", borderTop: "1px solid #1E293B" }}>
        {["⬜", "📊", "🏃", "👤"].map((icon, i) => (
          <div key={i} className="flex flex-col items-center gap-0.5">
            <span className="text-[10px]">{icon}</span>
            {i === 0 && <div className="h-0.5 w-3 rounded-full bg-indigo-500" />}
          </div>
        ))}
      </div>
      {/* Label */}
      <div className="absolute -bottom-7 left-0 right-0 text-center">
        <span className="text-xs font-semibold text-slate-600">FitFlow</span>
      </div>
    </div>
  );
}

function PhoneMoneyMind() {
  return (
    <div className="relative flex-shrink-0 overflow-hidden rounded-[2rem] shadow-2xl" style={{ width: 220, height: 440, background: "#1a0533" }}>
      <div className="flex items-center justify-between px-5 pt-4 pb-2">
        <span className="text-[10px] font-semibold text-purple-300">9:41</span>
        <div className="h-2 w-4 rounded-sm bg-purple-400" />
      </div>
      <div className="px-5 pb-2">
        <p className="text-[10px] text-purple-400">Total Balance</p>
        <p className="text-2xl font-bold text-white mt-0.5">$12,480<span className="text-sm text-purple-300">.52</span></p>
        <div className="flex gap-1 mt-1">
          <span className="text-[9px] text-green-400 font-semibold">▲ 3.2%</span>
          <span className="text-[9px] text-purple-400">this month</span>
        </div>
      </div>
      {/* Mini chart */}
      <div className="mx-4 rounded-2xl p-3" style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.3)" }}>
        <p className="text-[9px] text-purple-400 mb-2">Spending Overview</p>
        <svg width="100%" height="40" viewBox="0 0 180 40">
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,35 L30,28 L60,20 L90,25 L120,10 L150,18 L180,8" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
          <path d="M0,35 L30,28 L60,20 L90,25 L120,10 L150,18 L180,8 L180,40 L0,40 Z" fill="url(#chartGrad)" />
        </svg>
      </div>
      {/* Transactions */}
      <div className="px-4 mt-3">
        <p className="text-[9px] font-semibold text-purple-400 mb-2">RECENT</p>
        {[
          { name: "Netflix", cat: "Entertainment", amt: "-$15.99", color: "#EF4444" },
          { name: "Salary", cat: "Income", amt: "+$3,200", color: "#22C55E" },
          { name: "Groceries", cat: "Food", amt: "-$84.20", color: "#F59E0B" },
        ].map((t) => (
          <div key={t.name} className="flex items-center justify-between py-1.5">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full" style={{ background: t.color + "33", border: `1px solid ${t.color}55` }} />
              <div>
                <p className="text-[10px] font-semibold text-white">{t.name}</p>
                <p className="text-[9px] text-purple-400">{t.cat}</p>
              </div>
            </div>
            <span className="text-[10px] font-bold" style={{ color: t.amt.startsWith("+") ? "#22C55E" : "#F87171" }}>{t.amt}</span>
          </div>
        ))}
      </div>
      {/* Bottom nav */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-around px-4 py-3" style={{ background: "#1a0533", borderTop: "1px solid rgba(139,92,246,0.2)" }}>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-4 w-4 rounded-md" style={{ background: i === 0 ? "#8B5CF6" : "rgba(139,92,246,0.2)" }} />
        ))}
      </div>
      <div className="absolute -bottom-7 left-0 right-0 text-center">
        <span className="text-xs font-semibold text-slate-600">MoneyMind</span>
      </div>
    </div>
  );
}

function PhoneNutriPal() {
  return (
    <div className="relative flex-shrink-0 overflow-hidden rounded-[2rem] shadow-2xl" style={{ width: 220, height: 440, background: "#F0FDF4" }}>
      <div className="flex items-center justify-between px-5 pt-4 pb-2">
        <span className="text-[10px] font-semibold text-green-600">9:41</span>
        <div className="h-2 w-4 rounded-sm bg-green-400" />
      </div>
      <div className="px-5 pb-3">
        <p className="text-xs font-bold text-slate-800">NutriPal</p>
        <p className="text-[10px] text-slate-500">Tuesday, May 26</p>
      </div>
      {/* Calorie ring */}
      <div className="flex justify-center mb-3">
        <div className="relative">
          <svg width="90" height="90" viewBox="0 0 90 90">
            <circle cx="45" cy="45" r="38" fill="none" stroke="#DCFCE7" strokeWidth="8" />
            <circle cx="45" cy="45" r="38" fill="none" stroke="#16A34A" strokeWidth="8"
              strokeDasharray="238.76" strokeDashoffset="71.6" strokeLinecap="round" transform="rotate(-90 45 45)" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-lg font-bold text-slate-900">1,420</span>
            <span className="text-[9px] text-slate-500">of 1,800 kcal</span>
          </div>
        </div>
      </div>
      {/* Macros */}
      <div className="mx-4 grid grid-cols-3 gap-1.5 mb-3">
        {[
          { label: "Carbs", val: "180g", pct: "72%", color: "#F59E0B" },
          { label: "Protein", val: "95g", pct: "60%", color: "#3B82F6" },
          { label: "Fat", val: "42g", pct: "55%", color: "#EF4444" },
        ].map((m) => (
          <div key={m.label} className="rounded-xl p-2 text-center" style={{ background: m.color + "15" }}>
            <p className="text-[10px] font-bold text-slate-800">{m.val}</p>
            <p className="text-[9px] text-slate-500">{m.label}</p>
            <div className="mt-1 h-1 rounded-full bg-slate-200">
              <div className="h-1 rounded-full" style={{ width: m.pct, background: m.color }} />
            </div>
          </div>
        ))}
      </div>
      {/* Meal log */}
      <div className="px-4">
        <p className="text-[9px] font-semibold text-slate-500 mb-1.5">MEALS TODAY</p>
        {[
          { name: "Oatmeal & Berries", cal: "320 kcal", emoji: "🥣" },
          { name: "Grilled Chicken", cal: "540 kcal", emoji: "🍗" },
          { name: "Greek Salad", cal: "280 kcal", emoji: "🥗" },
        ].map((meal) => (
          <div key={meal.name} className="flex items-center justify-between rounded-xl px-3 py-2 mb-1.5" style={{ background: "white", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
            <div className="flex items-center gap-2">
              <span className="text-base">{meal.emoji}</span>
              <p className="text-[10px] font-semibold text-slate-800">{meal.name}</p>
            </div>
            <span className="text-[9px] text-green-600 font-semibold">{meal.cal}</span>
          </div>
        ))}
      </div>
      <div className="absolute -bottom-7 left-0 right-0 text-center">
        <span className="text-xs font-semibold text-slate-600">NutriPal</span>
      </div>
    </div>
  );
}

function PhoneZenSpace() {
  return (
    <div className="relative flex-shrink-0 overflow-hidden rounded-[2rem] shadow-2xl" style={{ width: 220, height: 440, background: "linear-gradient(160deg, #0EA5E9 0%, #6366F1 100%)" }}>
      <div className="flex items-center justify-between px-5 pt-4 pb-2">
        <span className="text-[10px] font-semibold text-white/70">9:41</span>
        <div className="h-2 w-4 rounded-sm bg-white/40" />
      </div>
      <div className="px-5 pb-2">
        <p className="text-xs font-bold text-white">ZenSpace</p>
        <p className="text-[10px] text-white/60">Find your calm</p>
      </div>
      {/* Breathing circle */}
      <div className="flex justify-center my-3">
        <div className="relative flex items-center justify-center">
          <div className="h-24 w-24 rounded-full" style={{ background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.3)" }} />
          <div className="absolute h-16 w-16 rounded-full" style={{ background: "rgba(255,255,255,0.2)", border: "2px solid rgba(255,255,255,0.4)" }} />
          <div className="absolute h-10 w-10 rounded-full" style={{ background: "rgba(255,255,255,0.35)" }} />
          <span className="absolute text-[9px] font-bold text-white">Breathe</span>
        </div>
      </div>
      {/* Session cards */}
      <div className="px-4 space-y-2">
        <p className="text-[9px] font-semibold text-white/60 mb-1">FEATURED SESSIONS</p>
        {[
          { name: "Morning Calm", dur: "10 min", tag: "Beginner" },
          { name: "Deep Focus", dur: "20 min", tag: "Intermediate" },
          { name: "Sleep Well", dur: "30 min", tag: "Advanced" },
        ].map((s, i) => (
          <div key={s.name} className="flex items-center justify-between rounded-xl px-3 py-2.5" style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)" }}>
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-xl" style={{ background: ["#FB923C", "#34D399", "#818CF8"][i] + "55" }} />
              <div>
                <p className="text-[10px] font-semibold text-white">{s.name}</p>
                <p className="text-[9px] text-white/50">{s.dur} · {s.tag}</p>
              </div>
            </div>
            <div className="h-5 w-5 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.25)" }}>
              <div className="h-0 w-0 border-y-[4px] border-l-[6px] border-y-transparent border-l-white ml-0.5" />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute -bottom-7 left-0 right-0 text-center">
        <span className="text-xs font-semibold text-slate-600">ZenSpace</span>
      </div>
    </div>
  );
}

function PhoneShopLux() {
  return (
    <div className="relative flex-shrink-0 overflow-hidden rounded-[2rem] shadow-2xl" style={{ width: 220, height: 440, background: "#FAFAFA" }}>
      <div className="flex items-center justify-between px-5 pt-4 pb-2">
        <span className="text-[10px] font-semibold text-slate-600">9:41</span>
        <div className="h-2 w-4 rounded-sm bg-slate-400" />
      </div>
      <div className="flex items-center justify-between px-4 pb-2">
        <p className="text-xs font-bold text-slate-900">ShopLux</p>
        <div className="relative">
          <div className="h-6 w-6 rounded-full bg-slate-900 flex items-center justify-center">
            <div className="h-3 w-3 border-2 border-white rounded-sm" />
          </div>
          <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500 flex items-center justify-center">
            <span className="text-[7px] text-white font-bold">3</span>
          </div>
        </div>
      </div>
      {/* Search bar */}
      <div className="mx-4 h-7 rounded-xl bg-slate-100 flex items-center px-3 mb-3">
        <span className="text-[9px] text-slate-400">Search products...</span>
      </div>
      {/* Category chips */}
      <div className="flex gap-1.5 px-4 mb-3 overflow-hidden">
        {["All", "Shoes", "Bags", "Tops"].map((c, i) => (
          <span key={c} className="flex-shrink-0 rounded-full px-2.5 py-0.5 text-[9px] font-semibold" style={{ background: i === 0 ? "#0F172A" : "#F1F5F9", color: i === 0 ? "white" : "#64748B" }}>{c}</span>
        ))}
      </div>
      {/* Product grid */}
      <div className="grid grid-cols-2 gap-2 px-4">
        {[
          { name: "Air Max Pro", price: "$149", color: "#DBEAFE" },
          { name: "Canvas Tote", price: "$89", color: "#FCE7F3" },
          { name: "Linen Shirt", price: "$65", color: "#D1FAE5" },
          { name: "Slim Wallet", price: "$45", color: "#FEF3C7" },
        ].map((p) => (
          <div key={p.name} className="rounded-2xl overflow-hidden" style={{ background: "white", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
            <div className="h-16 flex items-center justify-center" style={{ background: p.color }}>
              <div className="h-8 w-12 rounded-lg bg-white/50" />
            </div>
            <div className="p-2">
              <p className="text-[9px] font-semibold text-slate-800">{p.name}</p>
              <p className="text-[10px] font-bold text-slate-900">{p.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute -bottom-7 left-0 right-0 text-center">
        <span className="text-xs font-semibold text-slate-600">ShopLux</span>
      </div>
    </div>
  );
}

export function Showcase() {
  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-600">Real Output</p>
          <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Designs generated by VibeUI
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-500">
            Describe any app — VibeUI generates complete, production-ready screens in seconds. No templates. No placeholders.
          </p>
        </div>

        {/* Scrolling phone row */}
        <div className="relative">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10" style={{ background: "linear-gradient(to right, white, transparent)" }} />
          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10" style={{ background: "linear-gradient(to left, white, transparent)" }} />

          <div className="flex gap-8 overflow-x-auto pb-12 pt-4 px-6 scrollbar-hide" style={{ scrollbarWidth: "none" }}>
            <PhoneFitFlow />
            <PhoneMoneyMind />
            <PhoneNutriPal />
            <PhoneZenSpace />
            <PhoneShopLux />
            {/* Repeat first two for infinite feel */}
            <PhoneFitFlow />
            <PhoneMoneyMind />
          </div>
        </div>

        {/* Proof statement */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
          {[
            "Fitness & Health",
            "Finance & Banking",
            "Nutrition Tracking",
            "Wellness & Meditation",
            "E-Commerce",
            "Social & Lifestyle",
          ].map((tag) => (
            <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-medium text-slate-600">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
