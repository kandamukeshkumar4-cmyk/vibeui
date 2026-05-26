import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

/* ─────────────────────────────────────────────────────
   8 rich phone screens — all dark themed
───────────────────────────────────────────────────── */

const phones = [
  /* 1 ─ Pulse (Music) */
  {
    bg: "linear-gradient(160deg,#071a10 0%,#0d3321 60%,#071a10 100%)",
    accent: "#34d399",
    content: (
      <>
        <div style={{ display:"flex", justifyContent:"space-between", padding:"6px 10px 2px" }}>
          <span style={{ fontSize:5.5, fontWeight:700, color:"rgba(255,255,255,0.4)", letterSpacing:1 }}>NOW PLAYING</span>
          <span style={{ fontSize:8, color:"rgba(255,255,255,0.35)" }}>♡</span>
        </div>
        <div style={{ display:"flex", justifyContent:"center", margin:"6px 0 4px" }}>
          <div style={{ position:"relative", width:70, height:70 }}>
            <div style={{ position:"absolute", inset:-6, borderRadius:"50%", border:"1px solid rgba(52,211,153,0.15)" }} />
            <div style={{ position:"absolute", inset:-2, borderRadius:"50%", border:"1px solid rgba(52,211,153,0.22)" }} />
            <div style={{ width:70, height:70, borderRadius:"50%", background:"linear-gradient(135deg,#064e3b,#34d399,#065f46)", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 0 18px rgba(52,211,153,0.3)" }}>
              <span style={{ fontSize:26 }}>🌿</span>
            </div>
          </div>
        </div>
        <div style={{ textAlign:"center", padding:"0 10px", marginBottom:5 }}>
          <div style={{ fontSize:9.5, fontWeight:800, color:"white" }}>Painting Forest</div>
          <div style={{ fontSize:6.5, color:"#6ee7b7", marginTop:1 }}>Marimba with Waves</div>
        </div>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:1.5, margin:"0 10px", height:16 }}>
          {[5,8,12,7,15,9,6,14,10,15,8,13,6,14,9,8,12,6,13,8,10,7,12,7,10].map((h,i)=>(
            <div key={i} style={{ width:1.8, height:h, borderRadius:1, background:i<14?"#34d399":"rgba(255,255,255,0.15)" }} />
          ))}
        </div>
        <div style={{ padding:"4px 12px 3px" }}>
          <div style={{ height:2, background:"rgba(255,255,255,0.1)", borderRadius:1, position:"relative" }}>
            <div style={{ width:"55%", height:2, background:"#34d399", borderRadius:1 }} />
            <div style={{ position:"absolute", top:-3, left:"55%", width:8, height:8, borderRadius:"50%", background:"#34d399", transform:"translateX(-50%)" }} />
          </div>
          <div style={{ display:"flex", justifyContent:"space-between", marginTop:1 }}>
            <span style={{ fontSize:4.5, color:"rgba(255,255,255,0.3)" }}>1:23</span>
            <span style={{ fontSize:4.5, color:"rgba(255,255,255,0.3)" }}>3:45</span>
          </div>
        </div>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:14 }}>
          <span style={{ fontSize:10, color:"rgba(255,255,255,0.3)" }}>⏮</span>
          <div style={{ width:28, height:28, borderRadius:"50%", background:"#34d399", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 0 12px rgba(52,211,153,0.4)" }}>
            <span style={{ fontSize:12 }}>⏸</span>
          </div>
          <span style={{ fontSize:10, color:"rgba(255,255,255,0.3)" }}>⏭</span>
        </div>
      </>
    ),
  },

  /* 2 ─ Bloom (Meditation) */
  {
    bg: "linear-gradient(160deg,#1e1b4b 0%,#312e81 45%,#1e3a5f 100%)",
    accent: "#a78bfa",
    content: (
      <>
        <div style={{ padding:"6px 10px 3px" }}>
          <div style={{ fontSize:5.5, color:"rgba(255,255,255,0.4)" }}>Good morning 🌙</div>
          <div style={{ fontSize:11, fontWeight:800, color:"white" }}>Olivia</div>
        </div>
        <div style={{ display:"flex", justifyContent:"center", marginBottom:4 }}>
          <div style={{ background:"rgba(167,139,250,0.15)", border:"1px solid rgba(167,139,250,0.3)", borderRadius:99, padding:"2px 10px", display:"flex", alignItems:"center", gap:4 }}>
            <span style={{ fontSize:8 }}>🔥</span>
            <span style={{ fontSize:6.5, fontWeight:700, color:"#a78bfa" }}>84 Day Streak</span>
          </div>
        </div>
        <div style={{ display:"flex", justifyContent:"center", marginBottom:5 }}>
          <div style={{ position:"relative", width:52, height:52 }}>
            <div style={{ position:"absolute", inset:0, borderRadius:"50%", background:"rgba(167,139,250,0.07)", border:"1px solid rgba(167,139,250,0.18)" }} />
            <div style={{ position:"absolute", inset:7, borderRadius:"50%", background:"rgba(167,139,250,0.12)", border:"1px solid rgba(167,139,250,0.28)" }} />
            <div style={{ position:"absolute", inset:14, borderRadius:"50%", background:"rgba(167,139,250,0.28)", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <span style={{ fontSize:5.5, fontWeight:700, color:"white" }}>Breathe</span>
            </div>
          </div>
        </div>
        <div style={{ margin:"0 10px" }}>
          {[{n:"Morning Calm",d:"10 min",c:"#fb923c",done:true},{n:"Focus Flow",d:"20 min",c:"#34d399",done:false},{n:"Sleep Stories",d:"30 min",c:"#60a5fa",done:false}].map((s,i)=>(
            <div key={i} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", background:"rgba(255,255,255,0.06)", borderRadius:7, padding:"4px 6px", marginBottom:3, border:"1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ display:"flex", alignItems:"center", gap:5 }}>
                <div style={{ width:16, height:16, borderRadius:4, background:s.c+"22", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <div style={{ width:7, height:7, borderRadius:2, background:s.c }} />
                </div>
                <div>
                  <div style={{ fontSize:6.5, fontWeight:600, color:"white" }}>{s.n}</div>
                  <div style={{ fontSize:4.5, color:"rgba(255,255,255,0.35)" }}>{s.d}</div>
                </div>
              </div>
              <div style={{ width:13, height:13, borderRadius:"50%", background:s.done?"#34d399":"rgba(255,255,255,0.08)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <span style={{ fontSize:6, color:"white" }}>{s.done?"✓":"▷"}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display:"flex", margin:"4px 10px 0", gap:3 }}>
          {[{v:"123",l:"Sessions"},{v:"108h",l:"Minutes"},{v:"16d",l:"Streak"}].map((st,i)=>(
            <div key={i} style={{ flex:1, background:"rgba(255,255,255,0.05)", borderRadius:5, padding:"3px 2px", textAlign:"center" }}>
              <div style={{ fontSize:7.5, fontWeight:800, color:"#a78bfa" }}>{st.v}</div>
              <div style={{ fontSize:4, color:"rgba(255,255,255,0.3)" }}>{st.l}</div>
            </div>
          ))}
        </div>
      </>
    ),
  },

  /* 3 ─ FitFlow (Fitness) */
  {
    bg: "#0f172a",
    accent: "#6366f1",
    content: (
      <>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"6px 10px 2px" }}>
          <div>
            <div style={{ fontSize:5.5, color:"#94a3b8" }}>Good morning 👋</div>
            <div style={{ fontSize:11, fontWeight:800, color:"white" }}>Alex</div>
          </div>
          <div style={{ width:20, height:20, borderRadius:"50%", background:"#6366f1", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <span style={{ fontSize:9 }}>⚡</span>
          </div>
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:7, margin:"3px 10px 4px" }}>
          <svg width="48" height="48" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="19" fill="none" stroke="#1e293b" strokeWidth="4.5"/>
            <circle cx="24" cy="24" r="19" fill="none" stroke="#6366f1" strokeWidth="4.5" strokeDasharray="119" strokeDashoffset="26" strokeLinecap="round" transform="rotate(-90 24 24)"/>
            <text x="24" y="28" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="white">78%</text>
          </svg>
          <div style={{ flex:1 }}>
            {[{l:"Steps",v:"7,812",c:"#6366f1",p:"78%"},{l:"Calories",v:"487 kcal",c:"#f97316",p:"60%"},{l:"Water",v:"1.4 L",c:"#0ea5e9",p:"70%"}].map((r,i)=>(
              <div key={i} style={{ marginBottom:3 }}>
                <div style={{ display:"flex", justifyContent:"space-between", marginBottom:1 }}>
                  <span style={{ fontSize:5, color:"#94a3b8" }}>{r.l}</span>
                  <span style={{ fontSize:5, color:"white", fontWeight:600 }}>{r.v}</span>
                </div>
                <div style={{ height:2.5, background:"#1e293b", borderRadius:2 }}>
                  <div style={{ height:2.5, width:r.p, background:r.c, borderRadius:2 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ margin:"0 10px 4px", background:"#1e293b", borderRadius:8, padding:"5px 7px" }}>
          <div style={{ fontSize:5, color:"#94a3b8", marginBottom:4, fontWeight:700 }}>WEEKLY</div>
          <div style={{ display:"flex", alignItems:"flex-end", gap:3, height:20 }}>
            {[{d:"M",h:.7},{d:"T",h:.4},{d:"W",h:.9},{d:"T",h:.55},{d:"F",h:.8},{d:"S",h:1},{d:"S",h:.3}].map((b,i)=>(
              <div key={i} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:1 }}>
                <div style={{ width:"100%", height:b.h*16, background:i===5?"#6366f1":"rgba(99,102,241,0.3)", borderRadius:2 }} />
                <span style={{ fontSize:4, color:i===5?"white":"#475569" }}>{b.d}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ margin:"0 10px" }}>
          {[{n:"Morning Run",d:"32 min · 4.2 km",e:"🏃",c:"#6366f1",done:true},{n:"Core Strength",d:"20 min",e:"💪",c:"#f97316",done:false}].map((w,i)=>(
            <div key={i} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", background:"#1e293b", borderRadius:7, padding:"4px 6px", marginBottom:3 }}>
              <div style={{ display:"flex", alignItems:"center", gap:5 }}>
                <div style={{ width:16, height:16, borderRadius:4, background:w.c+"22", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <span style={{ fontSize:8 }}>{w.e}</span>
                </div>
                <div>
                  <div style={{ fontSize:6.5, fontWeight:600, color:"white" }}>{w.n}</div>
                  <div style={{ fontSize:4.5, color:"#64748b" }}>{w.d}</div>
                </div>
              </div>
              <div style={{ width:13, height:13, borderRadius:"50%", background:w.done?"#22c55e":"rgba(255,255,255,0.08)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                {w.done && <span style={{ fontSize:6, color:"white" }}>✓</span>}
              </div>
            </div>
          ))}
        </div>
      </>
    ),
  },

  /* 4 ─ MoneyMind (Finance) */
  {
    bg: "linear-gradient(160deg,#1a0533 0%,#2d1b69 50%,#1a0533 100%)",
    accent: "#8b5cf6",
    content: (
      <>
        <div style={{ padding:"6px 10px 3px" }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
            <div>
              <div style={{ fontSize:5.5, color:"#a78bfa" }}>Total Balance</div>
              <div style={{ fontSize:15, fontWeight:800, color:"white", lineHeight:1.1 }}>$12,480<span style={{ fontSize:8, color:"#a78bfa" }}>.52</span></div>
              <div style={{ fontSize:5.5, color:"#22c55e", marginTop:1 }}>▲ 3.2% this month</div>
            </div>
            <div style={{ width:26, height:26, borderRadius:7, background:"rgba(139,92,246,0.2)", border:"1px solid rgba(139,92,246,0.3)", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <span style={{ fontSize:11 }}>💳</span>
            </div>
          </div>
        </div>
        <div style={{ display:"flex", gap:3, margin:"3px 10px" }}>
          {[{l:"Send",e:"↗"},{l:"Receive",e:"↙"},{l:"Pay",e:"⊕"}].map((a,i)=>(
            <div key={i} style={{ flex:1, background:"rgba(139,92,246,0.15)", borderRadius:7, padding:"4px", textAlign:"center", border:"1px solid rgba(139,92,246,0.2)" }}>
              <div style={{ fontSize:9, color:"#a78bfa" }}>{a.e}</div>
              <div style={{ fontSize:4.5, color:"rgba(255,255,255,0.4)", marginTop:1 }}>{a.l}</div>
            </div>
          ))}
        </div>
        <div style={{ margin:"0 10px 3px", background:"rgba(139,92,246,0.1)", borderRadius:8, padding:"5px 7px", border:"1px solid rgba(139,92,246,0.2)" }}>
          <svg width="100%" height="28" viewBox="0 0 110 28">
            <defs>
              <linearGradient id="hmon" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity=".5"/>
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M0,24 L18,18 L36,12 L55,16 L72,7 L90,12 L110,3" fill="none" stroke="#8b5cf6" strokeWidth="1.8" strokeLinecap="round"/>
            <path d="M0,24 L18,18 L36,12 L55,16 L72,7 L90,12 L110,3 L110,28 L0,28Z" fill="url(#hmon)"/>
            <circle cx="110" cy="3" r="2.5" fill="#8b5cf6"/>
          </svg>
        </div>
        <div style={{ margin:"0 10px" }}>
          {[{n:"Netflix",s:"Entertainment",a:"-$15.99",e:"📺",c:"#ef4444"},{n:"Salary",s:"Income",a:"+$3,200",e:"💼",c:"#22c55e"},{n:"Groceries",s:"Shopping",a:"-$84.20",e:"🛒",c:"#f59e0b"}].map((t,i)=>(
            <div key={i} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", paddingBottom:4, borderBottom:i<2?"1px solid rgba(139,92,246,0.1)":"none", marginBottom:i<2?3:0 }}>
              <div style={{ display:"flex", alignItems:"center", gap:5 }}>
                <div style={{ width:18, height:18, borderRadius:5, background:t.c+"22", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <span style={{ fontSize:9 }}>{t.e}</span>
                </div>
                <div>
                  <div style={{ fontSize:6.5, color:"white", fontWeight:600 }}>{t.n}</div>
                  <div style={{ fontSize:4.5, color:"rgba(255,255,255,0.3)" }}>{t.s}</div>
                </div>
              </div>
              <span style={{ fontSize:6.5, fontWeight:700, color:t.a.startsWith("+")?"#22c55e":"#f87171" }}>{t.a}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },

  /* 5 ─ TaskPro (Productivity) */
  {
    bg: "#080f1f",
    accent: "#3b82f6",
    content: (
      <>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"6px 10px 3px" }}>
          <div>
            <div style={{ fontSize:5.5, color:"#475569" }}>Mon, May 26</div>
            <div style={{ fontSize:10.5, fontWeight:800, color:"white" }}>TaskPro</div>
          </div>
          <div style={{ background:"rgba(59,130,246,0.2)", border:"1px solid rgba(59,130,246,0.3)", borderRadius:6, padding:"2px 6px" }}>
            <span style={{ fontSize:5.5, color:"#60a5fa", fontWeight:700 }}>7 / 12 Done</span>
          </div>
        </div>
        <div style={{ margin:"0 10px 4px" }}>
          <div style={{ height:4, background:"rgba(255,255,255,0.06)", borderRadius:2 }}>
            <div style={{ width:"58%", height:4, background:"linear-gradient(to right,#3b82f6,#6366f1)", borderRadius:2 }} />
          </div>
        </div>
        <div style={{ margin:"0 10px" }}>
          <div style={{ fontSize:5, color:"rgba(255,255,255,0.3)", marginBottom:3, fontWeight:700, letterSpacing:0.5 }}>TODAY</div>
          {[
            {t:"Morning standup",p:"",done:true,c:"#22c55e"},
            {t:"Review design specs",p:"",done:true,c:"#22c55e"},
            {t:"Update API docs",p:"HIGH",done:false,c:"#ef4444"},
            {t:"Deploy v2.1",p:"MED",done:false,c:"#f59e0b"},
            {t:"Team review call",p:"LOW",done:false,c:"#22c55e"},
          ].map((task,i)=>(
            <div key={i} style={{ display:"flex", alignItems:"center", gap:5, padding:"3.5px 5px", background:"rgba(255,255,255,0.03)", borderRadius:6, marginBottom:2.5, border:"1px solid rgba(255,255,255,0.04)" }}>
              <div style={{ width:12, height:12, borderRadius:3, background:task.done?"#3b82f6":"transparent", border:task.done?"none":"1px solid rgba(255,255,255,0.15)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                {task.done && <span style={{ fontSize:6, color:"white" }}>✓</span>}
              </div>
              <span style={{ fontSize:6.5, color:task.done?"rgba(255,255,255,0.3)":"white", flex:1, textDecoration:task.done?"line-through":"none" }}>{task.t}</span>
              {task.p && <span style={{ fontSize:4.5, background:task.c+"22", color:task.c, borderRadius:4, padding:"1px 4px", fontWeight:700, flexShrink:0 }}>{task.p}</span>}
            </div>
          ))}
        </div>
        <div style={{ margin:"5px 10px 0", background:"rgba(59,130,246,0.08)", borderRadius:7, padding:"4px 6px", border:"1px solid rgba(59,130,246,0.15)" }}>
          <div style={{ fontSize:5, color:"#60a5fa", marginBottom:3, fontWeight:700 }}>WEEK PROGRESS</div>
          <div style={{ display:"flex", alignItems:"flex-end", gap:3, height:14 }}>
            {[{d:"M",h:.5},{d:"T",h:.8},{d:"W",h:.6},{d:"T",h:1},{d:"F",h:.58},{d:"S",h:.3},{d:"S",h:.0}].map((b,i)=>(
              <div key={i} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:1 }}>
                <div style={{ width:"100%", height:b.h*11, background:i===3?"#3b82f6":"rgba(59,130,246,0.3)", borderRadius:2 }} />
                <span style={{ fontSize:3.5, color:"#475569" }}>{b.d}</span>
              </div>
            ))}
          </div>
        </div>
      </>
    ),
  },

  /* 6 ─ SnapDial (Social) */
  {
    bg: "#09090b",
    accent: "#ec4899",
    content: (
      <>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"6px 10px 4px" }}>
          <span style={{ fontSize:10.5, fontWeight:800, color:"white" }}>SnapDial</span>
          <div style={{ display:"flex", gap:8 }}>
            <span style={{ fontSize:10, color:"rgba(255,255,255,0.5)" }}>🔍</span>
            <span style={{ fontSize:10, color:"rgba(255,255,255,0.5)" }}>✉</span>
          </div>
        </div>
        {/* Stories */}
        <div style={{ display:"flex", gap:5, padding:"0 10px", marginBottom:5, overflow:"hidden" }}>
          {[{l:"You",c:"#6366f1"},{l:"SK",c:"#ec4899"},{l:"AD",c:"#3b82f6"},{l:"MR",c:"#f97316"},{l:"JK",c:"#8b5cf6"},{l:"TN",c:"#10b981"}].map((s,i)=>(
            <div key={i} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:2, flexShrink:0 }}>
              <div style={{ width:i===0?24:22, height:i===0?24:22, borderRadius:"50%", border:i===0?`2px dashed rgba(255,255,255,0.3)`:`2px solid ${s.c}`, padding:1, display:"flex", alignItems:"center", justifyContent:"center" }}>
                <div style={{ width:"100%", height:"100%", borderRadius:"50%", background:s.c+"44", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <span style={{ fontSize:i===0?9:7, color:s.c, fontWeight:800 }}>{i===0?"+":(s.l)}</span>
                </div>
              </div>
              <span style={{ fontSize:4, color:"rgba(255,255,255,0.4)" }}>{s.l}</span>
            </div>
          ))}
        </div>
        {/* Posts */}
        {[
          {user:"sarah_k",time:"2h",likes:"1.2k",c1:"#6366f1",c2:"#ec4899",text:"Design that inspires. ✨"},
          {user:"alex.dev",time:"5h",likes:"847",c1:"#0ea5e9",c2:"#6366f1",text:"Shipped v2.0 today! 🚀"},
        ].map((p,i)=>(
          <div key={i} style={{ margin:"0 10px 5px", background:"rgba(255,255,255,0.04)", borderRadius:9, overflow:"hidden", border:"1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ display:"flex", alignItems:"center", gap:5, padding:"5px 6px" }}>
              <div style={{ width:18, height:18, borderRadius:"50%", background:`linear-gradient(135deg,${p.c1},${p.c2})`, display:"flex", alignItems:"center", justifyContent:"center" }}>
                <span style={{ fontSize:6, fontWeight:800, color:"white" }}>{p.user[0].toUpperCase()}</span>
              </div>
              <div>
                <div style={{ fontSize:6.5, fontWeight:700, color:"white" }}>@{p.user}</div>
                <div style={{ fontSize:4.5, color:"rgba(255,255,255,0.3)" }}>{p.time}</div>
              </div>
            </div>
            <div style={{ height:38, background:`linear-gradient(135deg,${p.c1}33,${p.c2}33)`, display:"flex", alignItems:"center", justifyContent:"center" }}>
              <span style={{ fontSize:5.5, color:"rgba(255,255,255,0.5)" }}>{p.text}</span>
            </div>
            <div style={{ display:"flex", gap:10, padding:"4px 6px" }}>
              <span style={{ fontSize:5.5, color:"#ef4444" }}>❤ {p.likes}</span>
              <span style={{ fontSize:5.5, color:"rgba(255,255,255,0.3)" }}>💬 Share</span>
            </div>
          </div>
        ))}
      </>
    ),
  },

  /* 7 ─ Foody (Food Delivery) */
  {
    bg: "#0c0a07",
    accent: "#f97316",
    content: (
      <>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"6px 10px 3px" }}>
          <div>
            <div style={{ fontSize:5.5, color:"#78716c" }}>Delivering to 📍</div>
            <div style={{ fontSize:8.5, fontWeight:700, color:"white" }}>Main Street, NYC</div>
          </div>
          <div style={{ width:20, height:20, borderRadius:"50%", background:"rgba(249,115,22,0.2)", border:"1.5px solid #f97316", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <span style={{ fontSize:9 }}>👤</span>
          </div>
        </div>
        <div style={{ margin:"0 10px 4px", height:17, background:"rgba(255,255,255,0.05)", borderRadius:7, display:"flex", alignItems:"center", paddingLeft:7, border:"1px solid rgba(255,255,255,0.06)" }}>
          <span style={{ fontSize:5.5, color:"#78716c" }}>🔍  Search restaurants...</span>
        </div>
        <div style={{ margin:"0 10px 4px", background:"linear-gradient(135deg,#9a3412,#f97316)", borderRadius:9, padding:"6px 9px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <div>
            <div style={{ fontSize:5, color:"rgba(255,255,255,0.75)", fontWeight:700 }}>{"TODAY'S DEAL"}</div>
            <div style={{ fontSize:10, fontWeight:800, color:"white" }}>30% OFF</div>
            <div style={{ fontSize:4.5, color:"rgba(255,255,255,0.65)", marginTop:1 }}>First order only</div>
          </div>
          <span style={{ fontSize:22 }}>🍕</span>
        </div>
        <div style={{ display:"flex", gap:4, margin:"0 10px 4px", overflow:"hidden" }}>
          {["🍕 Pizza","🍔 Burgers","🍣 Sushi","🥗 Salads"].map((c,i)=>(
            <div key={i} style={{ flexShrink:0, background:i===0?"#f97316":"rgba(255,255,255,0.07)", borderRadius:99, padding:"2px 5px", border:i===0?"none":"1px solid rgba(255,255,255,0.08)" }}>
              <span style={{ fontSize:5.5, color:i===0?"white":"rgba(255,255,255,0.5)", fontWeight:600 }}>{c}</span>
            </div>
          ))}
        </div>
        <div style={{ margin:"0 10px" }}>
          {[{name:"Mario Pizza",tag:"Italian · 20 min",e:"🍕",c:"rgba(249,115,22,0.15)",r:"4.8"},{name:"Tokyo Ramen",tag:"Japanese · 30 min",e:"🍜",c:"rgba(139,92,246,0.15)",r:"4.9"}].map((r,i)=>(
            <div key={i} style={{ display:"flex", gap:6, background:"rgba(255,255,255,0.04)", borderRadius:9, padding:"5px 6px", marginBottom:4, border:"1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ width:30, height:30, borderRadius:7, background:r.c, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <span style={{ fontSize:15 }}>{r.e}</span>
              </div>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:7, fontWeight:700, color:"white" }}>{r.name}</div>
                <div style={{ fontSize:5, color:"#78716c", marginTop:1 }}>{r.tag}</div>
                <div style={{ display:"flex", gap:8, marginTop:2 }}>
                  <span style={{ fontSize:5, color:"#f59e0b" }}>★ {r.r}</span>
                  <span style={{ fontSize:5, color:"#f97316", fontWeight:600 }}>Free delivery</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    ),
  },

  /* 8 ─ ShopLux Dark (E-commerce) */
  {
    bg: "#070d1a",
    accent: "#f59e0b",
    content: (
      <>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"6px 10px 3px" }}>
          <span style={{ fontSize:10.5, fontWeight:800, color:"white" }}>ShopLux</span>
          <div style={{ position:"relative" }}>
            <div style={{ width:18, height:18, borderRadius:"50%", background:"rgba(255,255,255,0.08)", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <span style={{ fontSize:9 }}>🛍</span>
            </div>
            <div style={{ position:"absolute", top:-2, right:-2, width:7, height:7, borderRadius:"50%", background:"#ef4444", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <span style={{ fontSize:4, color:"white", fontWeight:700 }}>3</span>
            </div>
          </div>
        </div>
        <div style={{ margin:"0 10px 4px", height:17, background:"rgba(255,255,255,0.05)", borderRadius:7, display:"flex", alignItems:"center", paddingLeft:7, border:"1px solid rgba(255,255,255,0.06)" }}>
          <span style={{ fontSize:5.5, color:"rgba(255,255,255,0.25)" }}>🔍  Search products...</span>
        </div>
        <div style={{ margin:"0 10px 4px", background:"linear-gradient(135deg,#92400e,#f59e0b)", borderRadius:9, padding:"6px 9px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <div>
            <div style={{ fontSize:5, color:"rgba(255,255,255,0.75)", fontWeight:700 }}>FLASH SALE</div>
            <div style={{ fontSize:10, fontWeight:800, color:"white" }}>60% OFF</div>
            <div style={{ fontSize:4.5, color:"rgba(255,255,255,0.65)", marginTop:1 }}>Today only</div>
          </div>
          <span style={{ fontSize:22 }}>👟</span>
        </div>
        <div style={{ display:"flex", gap:4, margin:"0 10px 4px" }}>
          {["All","Shoes","Bags","Tops"].map((c,i)=>(
            <div key={i} style={{ flexShrink:0, background:i===0?"#f59e0b":"rgba(255,255,255,0.06)", borderRadius:99, padding:"2px 6px" }}>
              <span style={{ fontSize:5.5, color:i===0?"#000":"rgba(255,255,255,0.4)", fontWeight:600 }}>{c}</span>
            </div>
          ))}
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:4, margin:"0 10px" }}>
          {[{n:"Air Max Pro",p:"$149",e:"👟",c:"rgba(59,130,246,0.18)",badge:"Sale"},{n:"Canvas Tote",p:"$89",e:"👜",c:"rgba(236,72,153,0.18)",badge:""},{n:"Linen Shirt",p:"$65",e:"👕",c:"rgba(16,185,129,0.18)",badge:"New"},{n:"Slim Wallet",p:"$45",e:"👛",c:"rgba(245,158,11,0.18)",badge:""}].map((p,i)=>(
            <div key={i} style={{ background:"rgba(255,255,255,0.04)", borderRadius:7, overflow:"hidden", border:"1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ height:28, background:p.c, display:"flex", alignItems:"center", justifyContent:"center", position:"relative" }}>
                <span style={{ fontSize:14 }}>{p.e}</span>
                {p.badge && <div style={{ position:"absolute", top:2, right:3, background:"#f59e0b", borderRadius:3, padding:"1px 3px" }}><span style={{ fontSize:4, color:"#000", fontWeight:700 }}>{p.badge}</span></div>}
              </div>
              <div style={{ padding:"3px 5px" }}>
                <div style={{ fontSize:5.5, fontWeight:600, color:"rgba(255,255,255,0.6)" }}>{p.n}</div>
                <div style={{ fontSize:7.5, fontWeight:800, color:"white" }}>{p.p}</div>
              </div>
            </div>
          ))}
        </div>
      </>
    ),
  },
];

/* ── Bottom nav icons ── */
const navIcons = ["⊞","🔍","♡","👤"];

export function Hero() {
  /* triple the phones so no gap on any viewport */
  const marquee = [...phones, ...phones, ...phones];

  return (
    <section className="relative overflow-hidden">
      <style>{`
        @keyframes marqueeLeft {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(calc(-100% / 3), 0, 0); }
        }
        @keyframes floatY {
          0%   { transform: translateY(0px); }
          100% { transform: translateY(-12px); }
        }
        .hero-track {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: marqueeLeft 38s linear infinite;
          gap: 18px;
          align-items: flex-start;
        }
        .hero-track:hover { animation-play-state: paused; }
        .phone-bob {
          will-change: transform;
          animation: floatY 3s ease-in-out infinite alternate;
        }
      `}</style>

      {/* Glow orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[700px] w-[1000px] rounded-full opacity-25 blur-3xl"
        style={{ background:"radial-gradient(ellipse,#3730A3 0%,transparent 70%)" }} />
      <div className="pointer-events-none absolute top-1/2 -left-24 h-56 w-56 rounded-full opacity-20 blur-3xl"
        style={{ background:"#1D4ED8" }} />
      <div className="pointer-events-none absolute top-1/2 -right-24 h-56 w-56 rounded-full opacity-20 blur-3xl"
        style={{ background:"#7C3AED" }} />

      {/* Text + CTA */}
      <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-10 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300">
          <Sparkles className="h-3.5 w-3.5" />
          V2 Now Available
        </div>
        <h1 className="mx-auto max-w-3xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Design apps in{" "}
          <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">seconds</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-400">
          Generate beautiful mobile UIs with AI. Iterate instantly. Ship faster.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/signup" className="inline-flex h-12 items-center gap-2 rounded-xl bg-violet-600 px-7 text-sm font-semibold text-white shadow-lg shadow-violet-900/50 hover:bg-violet-500 transition-colors">
            Start Creating <ArrowRight className="h-4 w-4" />
          </Link>
          <a href="#demo" className="inline-flex h-12 items-center rounded-xl border border-white/20 bg-white/5 px-7 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
            Learn More
          </a>
        </div>
        {/* Prompt bar */}
        <div className="mx-auto mt-10 max-w-xl">
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 backdrop-blur-sm">
            <span className="flex-1 text-left text-sm text-slate-500">Design a sleek fitness tracking app with dark mode...</span>
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-violet-600">
              <ArrowRight className="h-4 w-4 text-white" />
            </div>
          </div>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {["Fitness App","Music Player","Food Delivery","Task Manager"].map((s) => (
              <span key={s} className="cursor-pointer rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-400 hover:border-violet-400/50 hover:text-violet-300 transition-colors">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Marquee ── */}
      <div className="relative overflow-hidden pb-24 pt-4">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-40 z-10"
          style={{ background:"linear-gradient(to right,#020817,transparent)" }} />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-40 z-10"
          style={{ background:"linear-gradient(to left,#020817,transparent)" }} />

        <div className="hero-track px-2">
          {marquee.map((phone, i) => (
            <div
              key={i}
              className="phone-bob flex-shrink-0"
              style={{ animationDelay:`${(i % phones.length) * 0.4}s` }}
            >
              <div style={{
                width: 138, height: 256,
                borderRadius: "1.4rem",
                overflow: "hidden",
                background: phone.bg,
                boxShadow: "0 20px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06)",
                fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
                position: "relative",
              }}>
                {/* Status bar */}
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"6px 10px 2px" }}>
                  <span style={{ fontSize:6.5, fontWeight:700, color:"rgba(255,255,255,0.55)" }}>9:41</span>
                  <div style={{ display:"flex", alignItems:"center", gap:2 }}>
                    {[3,5,7].map((h,j)=><div key={j} style={{ width:1.8, height:h, borderRadius:1, background:"rgba(255,255,255,0.4)" }} />)}
                    <div style={{ width:8, height:4.5, borderRadius:1.5, border:"1px solid rgba(255,255,255,0.3)", marginLeft:2, display:"flex", alignItems:"center", padding:"0 1px" }}>
                      <div style={{ width:4.5, height:2.5, background:"#22c55e", borderRadius:0.5 }} />
                    </div>
                  </div>
                </div>

                {phone.content}

                {/* Bottom nav */}
                <div style={{
                  position:"absolute", bottom:0, left:0, right:0,
                  display:"flex", justifyContent:"space-around", alignItems:"center",
                  padding:"5px 14px 6px",
                  background:"rgba(0,0,0,0.5)",
                  borderTop:"1px solid rgba(255,255,255,0.06)",
                  backdropFilter:"blur(8px)",
                }}>
                  {navIcons.map((icon,j)=>(
                    <div key={j} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:1 }}>
                      <span style={{ fontSize:9.5, opacity:j===0?1:0.3 }}>{icon}</span>
                      {j===0 && <div style={{ width:11, height:2, background:phone.accent, borderRadius:1 }} />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
