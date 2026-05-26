"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

/* ─────────────────────────────────────────
   PHONE CONTENT — 5 rich app screens
───────────────────────────────────────── */

const PulseContent = ({ s }: { s: number }) => (
  <>
    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:`${6*s}px ${10*s}px ${2*s}px` }}>
      <span style={{ fontSize:6*s, fontWeight:700, color:"rgba(255,255,255,0.45)", letterSpacing:1 }}>NOW PLAYING</span>
      <span style={{ fontSize:9*s, color:"rgba(255,255,255,0.4)" }}>♡</span>
    </div>
    {/* Album art */}
    <div style={{ display:"flex", justifyContent:"center", margin:`${4*s}px 0 ${3*s}px` }}>
      <div style={{ position:"relative", width:78*s, height:78*s }}>
        <div style={{ position:"absolute", inset:-8*s, borderRadius:"50%", border:`${s}px solid rgba(52,211,153,0.1)` }} />
        <div style={{ position:"absolute", inset:-4*s, borderRadius:"50%", border:`${s}px solid rgba(52,211,153,0.18)` }} />
        <div style={{ width:78*s, height:78*s, borderRadius:"50%", background:"linear-gradient(135deg,#064e3b,#34d399,#065f46)", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:`0 0 ${18*s}px rgba(52,211,153,0.35)` }}>
          <span style={{ fontSize:28*s }}>🌿</span>
          <div style={{ position:"absolute", width:18*s, height:18*s, borderRadius:"50%", background:"rgba(0,0,0,0.55)", bottom:10*s, right:10*s, display:"flex", alignItems:"center", justifyContent:"center" }}>
            <div style={{ width:5*s, height:5*s, borderRadius:"50%", background:"#34d399" }} />
          </div>
        </div>
      </div>
    </div>
    {/* Song info */}
    <div style={{ textAlign:"center", padding:`0 ${12*s}px`, marginBottom:4*s }}>
      <div style={{ fontSize:10*s, fontWeight:800, color:"white" }}>Painting Forest</div>
      <div style={{ fontSize:7*s, color:"#6ee7b7", marginTop:s }}>Marimba with Waves</div>
    </div>
    {/* Waveform */}
    <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:1.5*s, margin:`0 ${12*s}px`, height:18*s }}>
      {[5,9,13,8,15,10,7,14,11,16,9,13,7,15,10,8,12,6,14,9,11,7,13,8,10].map((h,i)=>(
        <div key={i} style={{ width:2*s, height:h*s, borderRadius:s, background: i<14 ? "#34d399" : "rgba(255,255,255,0.15)" }} />
      ))}
    </div>
    {/* Progress */}
    <div style={{ padding:`${4*s}px ${12*s}px ${2*s}px` }}>
      <div style={{ height:2*s, background:"rgba(255,255,255,0.1)", borderRadius:s, position:"relative" }}>
        <div style={{ width:"55%", height:2*s, background:"#34d399", borderRadius:s }} />
        <div style={{ position:"absolute", top:-3*s, left:"55%", width:8*s, height:8*s, borderRadius:"50%", background:"#34d399", transform:"translateX(-50%)" }} />
      </div>
      <div style={{ display:"flex", justifyContent:"space-between", marginTop:s }}>
        <span style={{ fontSize:5*s, color:"rgba(255,255,255,0.35)" }}>1:23</span>
        <span style={{ fontSize:5*s, color:"rgba(255,255,255,0.35)" }}>3:45</span>
      </div>
    </div>
    {/* Controls */}
    <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:14*s }}>
      <span style={{ fontSize:11*s, color:"rgba(255,255,255,0.35)" }}>⏮</span>
      <div style={{ width:30*s, height:30*s, borderRadius:"50%", background:"#34d399", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:`0 0 ${14*s}px rgba(52,211,153,0.45)` }}>
        <span style={{ fontSize:13*s }}>⏸</span>
      </div>
      <span style={{ fontSize:11*s, color:"rgba(255,255,255,0.35)" }}>⏭</span>
    </div>
  </>
);

const BloomContent = ({ s }: { s: number }) => (
  <>
    <div style={{ padding:`${6*s}px ${10*s}px ${3*s}px` }}>
      <div style={{ fontSize:6*s, color:"rgba(255,255,255,0.45)" }}>Good morning 🌙</div>
      <div style={{ fontSize:12*s, fontWeight:800, color:"white" }}>Olivia</div>
    </div>
    {/* Streak */}
    <div style={{ display:"flex", justifyContent:"center", marginBottom:4*s }}>
      <div style={{ background:"rgba(167,139,250,0.15)", border:"1px solid rgba(167,139,250,0.3)", borderRadius:99, padding:`${2*s}px ${10*s}px`, display:"flex", alignItems:"center", gap:4*s }}>
        <span style={{ fontSize:8*s }}>🔥</span>
        <span style={{ fontSize:7*s, fontWeight:700, color:"#a78bfa" }}>84 Day Streak</span>
      </div>
    </div>
    {/* Breathe circle */}
    <div style={{ display:"flex", justifyContent:"center", marginBottom:5*s }}>
      <div style={{ position:"relative", width:58*s, height:58*s }}>
        <div style={{ position:"absolute", inset:0, borderRadius:"50%", background:"rgba(167,139,250,0.07)", border:"1px solid rgba(167,139,250,0.18)" }} />
        <div style={{ position:"absolute", inset:7*s, borderRadius:"50%", background:"rgba(167,139,250,0.12)", border:"1px solid rgba(167,139,250,0.28)" }} />
        <div style={{ position:"absolute", inset:14*s, borderRadius:"50%", background:"rgba(167,139,250,0.28)", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <span style={{ fontSize:6*s, fontWeight:700, color:"white", textAlign:"center" }}>Breathe</span>
        </div>
      </div>
    </div>
    {/* Sessions */}
    <div style={{ margin:`0 ${10*s}px` }}>
      <div style={{ fontSize:5.5*s, color:"rgba(255,255,255,0.35)", marginBottom:3*s, fontWeight:700, letterSpacing:0.5 }}>TODAY</div>
      {[
        { name:"Morning Calm", dur:"10 min", c:"#fb923c", done:true },
        { name:"Focus Flow",   dur:"20 min", c:"#34d399", done:false },
        { name:"Sleep Stories",dur:"30 min", c:"#60a5fa", done:false },
      ].map((s2,i)=>(
        <div key={i} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", background:"rgba(255,255,255,0.06)", borderRadius:7*s, padding:`${4*s}px ${6*s}px`, marginBottom:3*s, border:"1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ display:"flex", alignItems:"center", gap:5*s }}>
            <div style={{ width:20*s, height:20*s, borderRadius:5*s, background:s2.c+"22", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <div style={{ width:8*s, height:8*s, borderRadius:2*s, background:s2.c }} />
            </div>
            <div>
              <div style={{ fontSize:7*s, fontWeight:600, color:"white" }}>{s2.name}</div>
              <div style={{ fontSize:5*s, color:"rgba(255,255,255,0.35)" }}>{s2.dur}</div>
            </div>
          </div>
          <div style={{ width:14*s, height:14*s, borderRadius:"50%", background:s2.done?"#34d399":"rgba(255,255,255,0.08)", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <span style={{ fontSize:7*s, color:"white" }}>{s2.done?"✓":"▷"}</span>
          </div>
        </div>
      ))}
    </div>
    {/* Stats */}
    <div style={{ display:"flex", margin:`${4*s}px ${10*s}px 0`, gap:3*s }}>
      {[{v:"123",l:"Sessions"},{v:"108h",l:"Minutes"},{v:"16d",l:"Streak"}].map((st,i)=>(
        <div key={i} style={{ flex:1, background:"rgba(255,255,255,0.05)", borderRadius:6*s, padding:`${3*s}px ${2*s}px`, textAlign:"center" }}>
          <div style={{ fontSize:8*s, fontWeight:800, color:"#a78bfa" }}>{st.v}</div>
          <div style={{ fontSize:4.5*s, color:"rgba(255,255,255,0.35)" }}>{st.l}</div>
        </div>
      ))}
    </div>
  </>
);

const FitFlowContent = ({ s }: { s: number }) => (
  <>
    <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:`${6*s}px ${10*s}px ${3*s}px` }}>
      <div>
        <div style={{ fontSize:6*s, color:"#94a3b8" }}>Good morning 👋</div>
        <div style={{ fontSize:11*s, fontWeight:800, color:"white" }}>Alex</div>
      </div>
      <div style={{ width:22*s, height:22*s, borderRadius:"50%", background:"#6366f1", display:"flex", alignItems:"center", justifyContent:"center" }}>
        <span style={{ fontSize:10*s }}>⚡</span>
      </div>
    </div>
    {/* Ring + bars */}
    <div style={{ display:"flex", alignItems:"center", gap:8*s, margin:`${2*s}px ${10*s}px ${4*s}px` }}>
      <svg width={52*s} height={52*s} viewBox="0 0 52 52">
        <circle cx="26" cy="26" r="21" fill="none" stroke="#1e293b" strokeWidth="5"/>
        <circle cx="26" cy="26" r="21" fill="none" stroke="#6366f1" strokeWidth="5" strokeDasharray="132" strokeDashoffset="29" strokeLinecap="round" transform="rotate(-90 26 26)"/>
        <text x="26" y="30" textAnchor="middle" fontSize={9*s} fontWeight="bold" fill="white">78%</text>
      </svg>
      <div style={{ flex:1 }}>
        {[{l:"Steps",v:"7,812",c:"#6366f1",p:"78%"},{l:"Calories",v:"487 kcal",c:"#f97316",p:"60%"},{l:"Water",v:"1.4 L",c:"#0ea5e9",p:"70%"}].map((r,i)=>(
          <div key={i} style={{ marginBottom:3*s }}>
            <div style={{ display:"flex", justifyContent:"space-between", marginBottom:s }}>
              <span style={{ fontSize:5.5*s, color:"#94a3b8" }}>{r.l}</span>
              <span style={{ fontSize:5.5*s, color:"white", fontWeight:600 }}>{r.v}</span>
            </div>
            <div style={{ height:3*s, background:"#1e293b", borderRadius:2*s }}>
              <div style={{ height:3*s, width:r.p, background:r.c, borderRadius:2*s }} />
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* Weekly bars */}
    <div style={{ margin:`0 ${10*s}px ${4*s}px`, background:"#1e293b", borderRadius:8*s, padding:`${5*s}px ${7*s}px` }}>
      <div style={{ fontSize:5.5*s, color:"#94a3b8", marginBottom:4*s, fontWeight:700 }}>WEEKLY ACTIVITY</div>
      <div style={{ display:"flex", alignItems:"flex-end", gap:3*s, height:22*s }}>
        {[{d:"M",h:.7},{d:"T",h:.4},{d:"W",h:.9},{d:"T",h:.55},{d:"F",h:.8},{d:"S",h:1},{d:"S",h:.3}].map((b,i)=>(
          <div key={i} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:s }}>
            <div style={{ width:"100%", height:b.h*18*s, background:i===5?"#6366f1":"rgba(99,102,241,0.3)", borderRadius:2*s }} />
            <span style={{ fontSize:4.5*s, color:i===5?"white":"#475569" }}>{b.d}</span>
          </div>
        ))}
      </div>
    </div>
    {/* Workouts */}
    <div style={{ margin:`0 ${10*s}px` }}>
      {[{n:"Morning Run",d:"32 min · 4.2 km",e:"🏃",c:"#6366f1",done:true},{n:"Core Strength",d:"20 min · 180 kcal",e:"💪",c:"#f97316",done:false}].map((w,i)=>(
        <div key={i} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", background:"#1e293b", borderRadius:7*s, padding:`${4*s}px ${6*s}px`, marginBottom:3*s }}>
          <div style={{ display:"flex", alignItems:"center", gap:5*s }}>
            <div style={{ width:18*s, height:18*s, borderRadius:4*s, background:w.c+"22", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <span style={{ fontSize:9*s }}>{w.e}</span>
            </div>
            <div>
              <div style={{ fontSize:7*s, fontWeight:600, color:"white" }}>{w.n}</div>
              <div style={{ fontSize:5*s, color:"#64748b" }}>{w.d}</div>
            </div>
          </div>
          <div style={{ width:14*s, height:14*s, borderRadius:"50%", background:w.done?"#22c55e":"rgba(255,255,255,0.08)", display:"flex", alignItems:"center", justifyContent:"center" }}>
            {w.done && <span style={{ fontSize:7*s, color:"white" }}>✓</span>}
          </div>
        </div>
      ))}
    </div>
  </>
);

const MoneyContent = ({ s }: { s: number }) => (
  <>
    <div style={{ padding:`${6*s}px ${10*s}px ${3*s}px` }}>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <div>
          <div style={{ fontSize:6*s, color:"#a78bfa" }}>Total Balance</div>
          <div style={{ fontSize:16*s, fontWeight:800, color:"white", lineHeight:1.1 }}>$12,480<span style={{ fontSize:9*s, color:"#a78bfa" }}>.52</span></div>
          <div style={{ fontSize:6*s, color:"#22c55e", marginTop:s }}>▲ 3.2% this month</div>
        </div>
        <div style={{ width:28*s, height:28*s, borderRadius:8*s, background:"rgba(139,92,246,0.2)", border:"1px solid rgba(139,92,246,0.3)", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <span style={{ fontSize:12*s }}>💳</span>
        </div>
      </div>
    </div>
    {/* Quick actions */}
    <div style={{ display:"flex", gap:4*s, margin:`${3*s}px ${10*s}px` }}>
      {[{l:"Send",e:"↗"},{l:"Receive",e:"↙"},{l:"Pay",e:"⊕"}].map((a,i)=>(
        <div key={i} style={{ flex:1, background:"rgba(139,92,246,0.15)", borderRadius:7*s, padding:`${4*s}px`, textAlign:"center", border:"1px solid rgba(139,92,246,0.2)" }}>
          <div style={{ fontSize:10*s, color:"#a78bfa" }}>{a.e}</div>
          <div style={{ fontSize:5*s, color:"rgba(255,255,255,0.4)", marginTop:s }}>{a.l}</div>
        </div>
      ))}
    </div>
    {/* Chart */}
    <div style={{ margin:`0 ${10*s}px ${3*s}px`, background:"rgba(139,92,246,0.1)", borderRadius:9*s, padding:`${5*s}px ${7*s}px`, border:"1px solid rgba(139,92,246,0.2)" }}>
      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4*s }}>
        <span style={{ fontSize:6*s, color:"#a78bfa", fontWeight:600 }}>Spending</span>
        <span style={{ fontSize:6*s, color:"rgba(255,255,255,0.25)" }}>May 2025</span>
      </div>
      <svg width="100%" height={32*s} viewBox="0 0 120 32">
        <defs>
          <linearGradient id="mon" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity=".5"/>
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <path d="M0,28 L20,20 L40,14 L60,18 L80,8 L100,13 L120,4" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round"/>
        <path d="M0,28 L20,20 L40,14 L60,18 L80,8 L100,13 L120,4 L120,32 L0,32Z" fill="url(#mon)"/>
        <circle cx="120" cy="4" r="2.5" fill="#8b5cf6"/>
        <circle cx="120" cy="4" r="5" fill="#8b5cf6" fillOpacity=".2"/>
      </svg>
    </div>
    {/* Transactions */}
    <div style={{ margin:`0 ${10*s}px` }}>
      <div style={{ fontSize:5.5*s, color:"rgba(255,255,255,0.35)", marginBottom:3*s, fontWeight:700 }}>RECENT</div>
      {[{n:"Netflix",sub:"Entertainment",a:"-$15.99",e:"📺",c:"#ef4444"},{n:"Salary",sub:"Income",a:"+$3,200",e:"💼",c:"#22c55e"},{n:"Groceries",sub:"Shopping",a:"-$84.20",e:"🛒",c:"#f59e0b"}].map((t,i)=>(
        <div key={i} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", paddingBottom:4*s, borderBottom:i<2?"1px solid rgba(139,92,246,0.1)":"none", marginBottom:i<2?3*s:0 }}>
          <div style={{ display:"flex", alignItems:"center", gap:5*s }}>
            <div style={{ width:20*s, height:20*s, borderRadius:5*s, background:t.c+"22", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <span style={{ fontSize:10*s }}>{t.e}</span>
            </div>
            <div>
              <div style={{ fontSize:7*s, color:"white", fontWeight:600 }}>{t.n}</div>
              <div style={{ fontSize:5*s, color:"rgba(255,255,255,0.3)" }}>{t.sub}</div>
            </div>
          </div>
          <span style={{ fontSize:7*s, fontWeight:700, color:t.a.startsWith("+")?"#22c55e":"#f87171" }}>{t.a}</span>
        </div>
      ))}
    </div>
  </>
);

const FoodyContent = ({ s }: { s: number }) => (
  <>
    <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:`${6*s}px ${10*s}px ${3*s}px` }}>
      <div>
        <div style={{ fontSize:6*s, color:"#9ca3af" }}>Delivering to 📍</div>
        <div style={{ fontSize:8*s, fontWeight:700, color:"#111827" }}>Main Street, NYC</div>
      </div>
      <div style={{ width:22*s, height:22*s, borderRadius:"50%", background:"#fef3c7", border:"2px solid #f97316", display:"flex", alignItems:"center", justifyContent:"center" }}>
        <span style={{ fontSize:10*s }}>👤</span>
      </div>
    </div>
    {/* Search */}
    <div style={{ margin:`0 ${10*s}px ${4*s}px`, height:18*s, background:"#f3f4f6", borderRadius:8*s, display:"flex", alignItems:"center", paddingLeft:7*s }}>
      <span style={{ fontSize:6*s, color:"#9ca3af" }}>🔍  Search restaurants...</span>
    </div>
    {/* Banner */}
    <div style={{ margin:`0 ${10*s}px ${5*s}px`, background:"linear-gradient(135deg,#f97316,#ef4444)", borderRadius:10*s, padding:`${7*s}px ${10*s}px`, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
      <div>
        <div style={{ fontSize:5.5*s, color:"rgba(255,255,255,0.8)", fontWeight:700 }}>{"TODAY'S DEAL"}</div>
        <div style={{ fontSize:10*s, fontWeight:800, color:"white" }}>30% OFF</div>
        <div style={{ fontSize:5*s, color:"rgba(255,255,255,0.7)", marginTop:s }}>First order only</div>
      </div>
      <span style={{ fontSize:24*s }}>🍕</span>
    </div>
    {/* Categories */}
    <div style={{ display:"flex", gap:4*s, margin:`0 ${10*s}px ${4*s}px`, overflow:"hidden" }}>
      {["🍕 Pizza","🍔 Burgers","🍣 Sushi","🥗 Salads"].map((c,i)=>(
        <div key={i} style={{ flexShrink:0, background:i===0?"#f97316":"#f3f4f6", borderRadius:99, padding:`${2*s}px ${5*s}px` }}>
          <span style={{ fontSize:5.5*s, color:i===0?"white":"#374151", fontWeight:600 }}>{c}</span>
        </div>
      ))}
    </div>
    {/* Restaurants */}
    <div style={{ margin:`0 ${10*s}px` }}>
      <div style={{ fontSize:6*s, fontWeight:700, color:"#111827", marginBottom:4*s }}>Popular Near You</div>
      {[{name:"Mario's Pizza",tag:"Italian · 20 min",e:"🍕",c:"#fee2e2",r:"4.8"},{name:"Tokyo Ramen",tag:"Japanese · 30 min",e:"🍜",c:"#ede9fe",r:"4.9"}].map((r,i)=>(
        <div key={i} style={{ display:"flex", gap:6*s, background:"white", borderRadius:9*s, padding:`${5*s}px ${6*s}px`, marginBottom:4*s, boxShadow:"0 2px 8px rgba(0,0,0,0.06)", border:"1px solid rgba(0,0,0,0.04)" }}>
          <div style={{ width:34*s, height:34*s, borderRadius:8*s, background:r.c, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
            <span style={{ fontSize:18*s }}>{r.e}</span>
          </div>
          <div style={{ flex:1 }}>
            <div style={{ fontSize:7.5*s, fontWeight:700, color:"#111827" }}>{r.name}</div>
            <div style={{ fontSize:5.5*s, color:"#9ca3af", marginTop:s }}>{r.tag}</div>
            <div style={{ display:"flex", gap:8*s, marginTop:2*s }}>
              <span style={{ fontSize:5.5*s, color:"#f59e0b" }}>★ {r.r}</span>
              <span style={{ fontSize:5.5*s, color:"#f97316", fontWeight:600 }}>Free delivery</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
);

/* ─────────────────────────────────────────
   APP REGISTRY
───────────────────────────────────────── */
const apps = [
  {
    id: "pulse",
    label: "Pulse",
    category: "Music Streaming",
    bg: "linear-gradient(160deg,#071a10 0%,#0d3321 55%,#071a10 100%)",
    accent: "#34d399",
    textLight: true,
    Content: PulseContent,
  },
  {
    id: "bloom",
    label: "Bloom",
    category: "Wellness & Meditation",
    bg: "linear-gradient(160deg,#1e1b4b 0%,#312e81 45%,#1e3a5f 100%)",
    accent: "#a78bfa",
    textLight: true,
    Content: BloomContent,
  },
  {
    id: "fitflow",
    label: "FitFlow",
    category: "Fitness & Health",
    bg: "#0f172a",
    accent: "#6366f1",
    textLight: true,
    Content: FitFlowContent,
  },
  {
    id: "moneymind",
    label: "MoneyMind",
    category: "Finance & Banking",
    bg: "linear-gradient(160deg,#1a0533 0%,#2d1b69 50%,#1a0533 100%)",
    accent: "#8b5cf6",
    textLight: true,
    Content: MoneyContent,
  },
  {
    id: "foody",
    label: "Foody",
    category: "Food Delivery",
    bg: "#fffbf5",
    accent: "#f97316",
    textLight: false,
    Content: FoodyContent,
  },
];

type AppType = typeof apps[0];

/* ─────────────────────────────────────────
   PHONE SHELL
───────────────────────────────────────── */
function PhoneShell({ app, scale = 1, onClick }: { app: AppType; scale?: number; onClick?: () => void }) {
  const w = 148 * scale;
  const h = 292 * scale;
  const dark = app.textLight;

  return (
    <div
      onClick={onClick}
      style={{
        width: w, height: h, flexShrink: 0,
        borderRadius: 22 * scale,
        overflow: "hidden",
        background: app.bg,
        boxShadow: `0 ${16*scale}px ${48*scale}px rgba(0,0,0,0.35), 0 0 0 ${scale}px rgba(255,255,255,0.06)`,
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        position: "relative",
        cursor: onClick ? "pointer" : "default",
      }}
    >
      {/* Status bar */}
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:`${6*scale}px ${10*scale}px ${2*scale}px` }}>
        <span style={{ fontSize:7*scale, fontWeight:700, color: dark ? "rgba(255,255,255,0.55)" : "#64748b" }}>9:41</span>
        <div style={{ display:"flex", alignItems:"center", gap:2*scale }}>
          {[4,6,8].map((h2,i)=>(
            <div key={i} style={{ width:2*scale, height:h2*scale, borderRadius:scale, background: dark ? "rgba(255,255,255,0.4)" : "#94a3b8" }} />
          ))}
          <div style={{ width:9*scale, height:5*scale, borderRadius:1.5*scale, border:`1px solid ${dark ? "rgba(255,255,255,0.3)" : "#94a3b8"}`, marginLeft:2*scale, display:"flex", alignItems:"center", padding:`0 ${scale}px` }}>
            <div style={{ width:5*scale, height:3*scale, background:"#22c55e", borderRadius:0.5*scale }} />
          </div>
        </div>
      </div>

      {/* Content */}
      <app.Content s={scale} />

      {/* Bottom nav */}
      <div style={{
        position:"absolute", bottom:0, left:0, right:0,
        display:"flex", justifyContent:"space-around", alignItems:"center",
        padding:`${5*scale}px ${14*scale}px ${7*scale}px`,
        background: dark ? "rgba(0,0,0,0.45)" : "rgba(255,255,255,0.92)",
        borderTop:`1px solid ${dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)"}`,
        backdropFilter:"blur(8px)",
      }}>
        {["⊞","🔍","♡","👤"].map((icon,i)=>(
          <div key={i} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:scale }}>
            <span style={{ fontSize:10*scale, opacity: i===0 ? 1 : 0.3 }}>{icon}</span>
            {i===0 && <div style={{ width:12*scale, height:2*scale, background:app.accent, borderRadius:scale }} />}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   SHOWCASE SECTION
───────────────────────────────────────── */
export function Showcase() {
  const [active, setActive] = useState<AppType | null>(null);

  useEffect(() => {
    if (!active) return;
    const close = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [active]);

  return (
    <section className="overflow-hidden py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-400">Real Output</p>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Designs generated by VibeUI
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
            Describe any app — VibeUI generates complete, production-ready screens in seconds.
          </p>
          <p className="mt-2 text-sm text-slate-500">Click any screen to expand</p>
        </div>

        {/* Phone row */}
        <div className="relative">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10"
            style={{ background:"linear-gradient(to right,#020817,transparent)" }} />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10"
            style={{ background:"linear-gradient(to left,#020817,transparent)" }} />

          <div className="flex gap-5 overflow-x-auto px-10 pb-6 pt-4" style={{ scrollbarWidth:"none" }}>
            {apps.map((app) => (
              <div key={app.id} className="flex-shrink-0 flex flex-col items-center group">
                {/* Phone wrapper with hover */}
                <div className="relative transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-[1.03]">
                  <PhoneShell app={app} scale={1} onClick={() => setActive(app)} />
                  {/* Hover badge — only on hover */}
                  <div className="absolute inset-0 rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-center pb-16 pointer-events-none"
                    style={{ background:"linear-gradient(to top,rgba(99,102,241,0.25),transparent)" }}>
                    <div className="bg-violet-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg pointer-events-none">
                      Tap to expand
                    </div>
                  </div>
                </div>
                {/* Label */}
                <div className="mt-4 text-center">
                  <p className="text-xs font-semibold text-slate-200">{app.label}</p>
                  <p className="text-[11px] text-slate-500">{app.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category tags */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {apps.map((app) => (
            <span
              key={app.id}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-400 cursor-pointer hover:border-violet-500/40 hover:text-violet-300 transition-colors"
              onClick={() => setActive(app)}
            >
              {app.category}
            </span>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background:"rgba(0,0,0,0.85)", backdropFilter:"blur(12px)" }}
          onClick={() => setActive(null)}
        >
          <div className="relative flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            {/* Close */}
            <button
              onClick={() => setActive(null)}
              className="absolute -top-14 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Enlarged phone */}
            <div className="animate-in fade-in zoom-in-95 duration-200">
              <PhoneShell app={active} scale={1.75} />
            </div>

            {/* Label */}
            <div className="mt-6 text-center">
              <p className="text-lg font-bold text-white">{active.label}</p>
              <p className="text-sm text-white/50">{active.category}</p>
            </div>

            {/* Dot nav */}
            <div className="mt-5 flex gap-2">
              {apps.map((app) => (
                <button
                  key={app.id}
                  onClick={() => setActive(app)}
                  className={`h-2 rounded-full transition-all duration-200 ${app.id === active.id ? "w-7 bg-white" : "w-2 bg-white/25 hover:bg-white/40"}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
