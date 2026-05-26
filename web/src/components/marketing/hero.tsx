"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

/* ─────────────────────────────────────────
   Phone content (same rich designs as before)
───────────────────────────────────────── */
type PhoneDef = { bg: string; accent: string; content: React.ReactNode };

const phones: PhoneDef[] = [
  /* 0 · PULSE — Music */
  {
    bg: "#0f0f0f", accent: "#1DB954",
    content: (
      <>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"4px 10px 2px" }}>
          <span style={{ fontSize:5, color:"rgba(255,255,255,0.35)", letterSpacing:1.5, fontWeight:700 }}>NOW PLAYING</span>
          <span style={{ fontSize:9, color:"rgba(255,255,255,0.25)" }}>•••</span>
        </div>
        <div style={{ display:"flex", justifyContent:"center", margin:"3px 0 4px" }}>
          <div style={{ position:"relative", width:74, height:74 }}>
            {[74,60,48,36,26].map((sz,ri)=>(
              <div key={ri} style={{ position:"absolute", left:(74-sz)/2, top:(74-sz)/2, width:sz, height:sz, borderRadius:"50%",
                background: ri===0 ? "conic-gradient(#1a1a1a 0deg,#2a2a2a 30deg,#1a1a1a 60deg,#252525 90deg,#1a1a1a 120deg,#2a2a2a 150deg,#1a1a1a 180deg,#252525 210deg,#1a1a1a 240deg,#2a2a2a 270deg,#1a1a1a 300deg,#252525 330deg,#1a1a1a 360deg)"
                  : ri===2 ? "conic-gradient(#0a2e18 0deg,#1DB954 120deg,#0a3020 240deg,#0a2e18 360deg)" : ri===4 ? "#0f0f0f" : "#111",
                boxShadow: ri===0 ? "0 0 22px rgba(29,185,84,0.2)" : "none" }} />
            ))}
            <div style={{ position:"absolute", left:30, top:30, width:14, height:14, borderRadius:"50%", background:"radial-gradient(circle,#1DB954,#0a3020)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:10 }}>
              <div style={{ width:4, height:4, borderRadius:"50%", background:"#0f0f0f" }} />
            </div>
          </div>
        </div>
        <div style={{ textAlign:"center", padding:"0 14px", marginBottom:3 }}>
          <div style={{ fontSize:10, fontWeight:800, color:"white", letterSpacing:-0.3 }}>Blinding Lights</div>
          <div style={{ fontSize:6.5, color:"#1DB954", marginTop:1 }}>The Weeknd</div>
        </div>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:1.2, margin:"0 10px", height:16 }}>
          {[4,7,11,6,14,9,5,13,10,15,7,12,5,13,8,7,11,5,12,7,9,6,11,6,9].map((h,i)=>(
            <div key={i} style={{ width:1.8, height:h, borderRadius:1, background:i<14?"#1DB954":"rgba(255,255,255,0.12)" }} />
          ))}
        </div>
        <div style={{ padding:"3px 12px 2px" }}>
          <div style={{ height:2.5, background:"rgba(255,255,255,0.08)", borderRadius:2, position:"relative" }}>
            <div style={{ width:"42%", height:2.5, background:"#1DB954", borderRadius:2 }} />
            <div style={{ position:"absolute", top:-3, left:"42%", width:8, height:8, borderRadius:"50%", background:"white", transform:"translateX(-50%)" }} />
          </div>
          <div style={{ display:"flex", justifyContent:"space-between", marginTop:1.5 }}>
            <span style={{ fontSize:4.5, color:"rgba(255,255,255,0.3)" }}>1:38</span>
            <span style={{ fontSize:4.5, color:"rgba(255,255,255,0.3)" }}>3:53</span>
          </div>
        </div>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:13, marginTop:2 }}>
          <span style={{ fontSize:9, color:"rgba(255,255,255,0.22)" }}>⇄</span>
          <span style={{ fontSize:12, color:"rgba(255,255,255,0.45)" }}>⏮</span>
          <div style={{ width:32, height:32, borderRadius:"50%", background:"#1DB954", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 0 16px rgba(29,185,84,0.45)" }}>
            <span style={{ fontSize:13, marginLeft:1.5, color:"#000" }}>▶</span>
          </div>
          <span style={{ fontSize:12, color:"rgba(255,255,255,0.45)" }}>⏭</span>
          <span style={{ fontSize:9, color:"rgba(255,255,255,0.22)" }}>↺</span>
        </div>
        <div style={{ margin:"5px 10px 0", padding:"4px 7px", background:"rgba(255,255,255,0.04)", borderRadius:7, display:"flex", alignItems:"center", gap:6, border:"1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ width:18, height:18, borderRadius:4, background:"linear-gradient(135deg,#1a3a1a,#1DB954)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}><span style={{ fontSize:8 }}>♬</span></div>
          <div>
            <div style={{ fontSize:4.5, color:"rgba(255,255,255,0.3)", fontWeight:700, letterSpacing:0.5 }}>UP NEXT</div>
            <div style={{ fontSize:6, color:"rgba(255,255,255,0.65)" }}>Save Your Tears</div>
          </div>
        </div>
      </>
    ),
  },

  /* 1 · FLUX — Finance */
  {
    bg: "#07070f", accent: "#00d4aa",
    content: (
      <>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"4px 10px 3px" }}>
          <span style={{ fontSize:10.5, fontWeight:800, color:"white" }}>Portfolio</span>
          <span style={{ fontSize:9, color:"rgba(255,255,255,0.3)" }}>🔔</span>
        </div>
        <div style={{ padding:"0 10px", marginBottom:4 }}>
          <div style={{ fontSize:5, color:"rgba(255,255,255,0.4)", marginBottom:1 }}>Total Value</div>
          <div style={{ fontSize:19, fontWeight:900, color:"white", lineHeight:1, letterSpacing:-0.5 }}>$24,680<span style={{ fontSize:10, color:"rgba(255,255,255,0.5)", fontWeight:600 }}>.40</span></div>
          <div style={{ display:"flex", alignItems:"center", gap:4, marginTop:2 }}>
            <span style={{ fontSize:9, color:"#00d4aa" }}>▲</span>
            <span style={{ fontSize:6.5, color:"#00d4aa", fontWeight:700 }}>+$682.20</span>
            <span style={{ fontSize:5.5, color:"rgba(0,212,170,0.6)" }}>(+2.84%)</span>
          </div>
        </div>
        <div style={{ margin:"0 10px 4px", background:"rgba(255,255,255,0.03)", borderRadius:9, padding:"6px 7px 5px", border:"1px solid rgba(255,255,255,0.05)" }}>
          <svg width="100%" height="38" viewBox="0 0 110 38" preserveAspectRatio="none">
            <defs><linearGradient id="fluxGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#00d4aa" stopOpacity=".45"/><stop offset="100%" stopColor="#00d4aa" stopOpacity="0"/></linearGradient></defs>
            <path d="M0,34 C8,32 12,30 20,25 C28,20 31,23 40,17 C48,11 52,15 60,11 C68,7 73,9 82,5 C90,2 100,4 110,1" fill="none" stroke="#00d4aa" strokeWidth="1.6" strokeLinecap="round"/>
            <path d="M0,34 C8,32 12,30 20,25 C28,20 31,23 40,17 C48,11 52,15 60,11 C68,7 73,9 82,5 C90,2 100,4 110,1 L110,38 L0,38Z" fill="url(#fluxGrad)"/>
            <circle cx="110" cy="1" r="2.5" fill="#00d4aa"/>
          </svg>
          <div style={{ display:"flex", justifyContent:"space-between", marginTop:3 }}>
            {["1D","1W","1M","3M","1Y"].map((t,i)=>(
              <span key={i} style={{ fontSize:4.5, color:i===0?"#00d4aa":"rgba(255,255,255,0.3)", fontWeight:i===0?700:400, background:i===0?"rgba(0,212,170,0.12)":"none", borderRadius:3, padding:"1px 3px" }}>{t}</span>
            ))}
          </div>
        </div>
        <div style={{ margin:"0 10px" }}>
          {[{sym:"BTC",name:"Bitcoin",p:"$43,284",ch:"+4.2%",pos:true,col:"#f97316"},{sym:"ETH",name:"Ethereum",p:"$2,847",ch:"+1.8%",pos:true,col:"#6366f1"},{sym:"SOL",name:"Solana",p:"$142.30",ch:"-0.9%",pos:false,col:"#a855f7"}].map((c,i)=>(
            <div key={i} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"4.5px 0", borderBottom:i<2?"1px solid rgba(255,255,255,0.05)":"none" }}>
              <div style={{ display:"flex", alignItems:"center", gap:6 }}>
                <div style={{ width:22, height:22, borderRadius:"50%", background:c.col+"22", border:`1.5px solid ${c.col}44`, display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <span style={{ fontSize:8, fontWeight:900, color:c.col }}>{c.sym[0]}</span>
                </div>
                <div>
                  <div style={{ fontSize:7, fontWeight:700, color:"white" }}>{c.sym}</div>
                  <div style={{ fontSize:4.5, color:"rgba(255,255,255,0.3)" }}>{c.name}</div>
                </div>
              </div>
              <div style={{ textAlign:"right" }}>
                <div style={{ fontSize:7, fontWeight:700, color:"white" }}>{c.p}</div>
                <div style={{ fontSize:5.5, fontWeight:600, color:c.pos?"#00d4aa":"#f87171" }}>{c.ch}</div>
              </div>
            </div>
          ))}
        </div>
      </>
    ),
  },

  /* 2 · VITALS — Fitness (Apple Health rings) */
  {
    bg: "#000000", accent: "#30d158",
    content: (
      <>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"4px 10px 3px" }}>
          <div>
            <div style={{ fontSize:5, color:"rgba(255,255,255,0.4)", fontWeight:600, letterSpacing:0.5 }}>FRIDAY</div>
            <div style={{ fontSize:10.5, fontWeight:800, color:"white" }}>Activity</div>
          </div>
          <div style={{ width:22, height:22, borderRadius:6, background:"rgba(255,255,255,0.06)", display:"flex", alignItems:"center", justifyContent:"center" }}><span style={{ fontSize:10 }}>📊</span></div>
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:10, margin:"3px 10px 5px" }}>
          <svg width="68" height="68" viewBox="0 0 68 68">
            <circle cx="34" cy="34" r="30" fill="none" stroke="#3a0010" strokeWidth="5.5"/>
            <circle cx="34" cy="34" r="30" fill="none" stroke="#ff2d55" strokeWidth="5.5" strokeDasharray="188.5" strokeDashoffset="45" strokeLinecap="round" transform="rotate(-90 34 34)"/>
            <circle cx="34" cy="34" r="22" fill="none" stroke="#073018" strokeWidth="5.5"/>
            <circle cx="34" cy="34" r="22" fill="none" stroke="#30d158" strokeWidth="5.5" strokeDasharray="138.2" strokeDashoffset="30" strokeLinecap="round" transform="rotate(-90 34 34)"/>
            <circle cx="34" cy="34" r="14" fill="none" stroke="#001a38" strokeWidth="5.5"/>
            <circle cx="34" cy="34" r="14" fill="none" stroke="#0a84ff" strokeWidth="5.5" strokeDasharray="87.9" strokeDashoffset="28" strokeLinecap="round" transform="rotate(-90 34 34)"/>
          </svg>
          <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
            {[{l:"Move",v:"487",u:"CAL",c:"#ff2d55"},{l:"Exercise",v:"38",u:"MIN",c:"#30d158"},{l:"Stand",v:"10",u:"HRS",c:"#0a84ff"}].map((r,i)=>(
              <div key={i} style={{ display:"flex", alignItems:"center", gap:4 }}>
                <div style={{ width:7, height:7, borderRadius:"50%", background:r.c, flexShrink:0 }} />
                <div><span style={{ fontSize:9, fontWeight:800, color:"white" }}>{r.v}</span><span style={{ fontSize:5, color:r.c, marginLeft:2, fontWeight:600 }}>{r.u}</span></div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ margin:"0 10px 4px", background:"rgba(255,255,255,0.04)", borderRadius:10, padding:"6px 8px", border:"1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
            <div>
              <div style={{ fontSize:5, color:"rgba(255,255,255,0.4)", fontWeight:700, letterSpacing:0.5 }}>STEPS TODAY</div>
              <div style={{ fontSize:17, fontWeight:900, color:"white", lineHeight:1.1 }}>8,421</div>
              <div style={{ fontSize:5, color:"rgba(255,255,255,0.3)", marginTop:2 }}>Goal: 10,000 · 84%</div>
            </div>
            <div style={{ display:"flex", alignItems:"flex-end", gap:2, height:26 }}>
              {[0.4,0.6,0.5,0.8,0.7,0.9,1.0].map((h,i)=>(
                <div key={i} style={{ width:5, height:h*22, background:i===6?"#30d158":i===5?"rgba(48,209,88,0.5)":"rgba(48,209,88,0.2)", borderRadius:2 }} />
              ))}
            </div>
          </div>
          <div style={{ marginTop:5, height:3, background:"rgba(255,255,255,0.08)", borderRadius:2 }}>
            <div style={{ width:"84%", height:3, background:"linear-gradient(to right,#30d158,#34d399)", borderRadius:2 }} />
          </div>
        </div>
        {[{n:"Morning Run",d:"5.2km · 28 min",e:"🏃",c:"#ff2d55"},{n:"Yoga Flow",d:"30 min · Upcoming",e:"🧘",c:"#0a84ff"}].map((w,i)=>(
          <div key={i} style={{ display:"flex", alignItems:"center", gap:7, margin:"0 10px", padding:"4px 0", borderTop:"1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ width:22, height:22, borderRadius:6, background:w.c+"22", display:"flex", alignItems:"center", justifyContent:"center", border:`1px solid ${w.c}33`, flexShrink:0 }}><span style={{ fontSize:11 }}>{w.e}</span></div>
            <div>
              <div style={{ fontSize:6.5, fontWeight:700, color:"white" }}>{w.n}</div>
              <div style={{ fontSize:5, color:"rgba(255,255,255,0.35)", marginTop:1 }}>{w.d}</div>
            </div>
          </div>
        ))}
      </>
    ),
  },

  /* 3 · CALM — Meditation */
  {
    bg: "linear-gradient(180deg,#0b1120 0%,#0d1f3c 55%,#0b1829 100%)", accent: "#7dd3fc",
    content: (
      <>
        <div style={{ padding:"5px 10px 3px" }}>
          <div style={{ fontSize:5.5, color:"rgba(255,255,255,0.4)" }}>Good evening 🌙</div>
          <div style={{ fontSize:11, fontWeight:800, color:"white" }}>Find your calm</div>
        </div>
        <div style={{ padding:"0 10px", marginBottom:5 }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:4, background:"rgba(125,211,252,0.1)", border:"1px solid rgba(125,211,252,0.2)", borderRadius:99, padding:"2px 8px" }}>
            <span style={{ fontSize:8 }}>🔥</span>
            <span style={{ fontSize:6, fontWeight:700, color:"#7dd3fc" }}>21 Day Streak</span>
          </div>
        </div>
        <div style={{ margin:"0 10px 5px", borderRadius:10, overflow:"hidden", border:"1px solid rgba(125,211,252,0.12)" }}>
          <div style={{ height:52, background:"linear-gradient(135deg,#0c2340,#1e3f6e,#0c2a50)", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 10px", position:"relative", overflow:"hidden" }}>
            <div style={{ position:"absolute", right:-8, top:-12, width:55, height:55, borderRadius:"50%", background:"rgba(125,211,252,0.07)" }} />
            <div>
              <div style={{ fontSize:4.5, color:"rgba(255,255,255,0.45)", fontWeight:700, letterSpacing:1.2 }}>FEATURED</div>
              <div style={{ fontSize:9.5, fontWeight:800, color:"white" }}>Daily Calm</div>
              <div style={{ fontSize:5.5, color:"#7dd3fc", marginTop:1 }}>10 min · Beginners</div>
            </div>
            <div style={{ width:28, height:28, borderRadius:"50%", background:"rgba(125,211,252,0.18)", display:"flex", alignItems:"center", justifyContent:"center", border:"1.5px solid rgba(125,211,252,0.35)", flexShrink:0 }}>
              <span style={{ fontSize:11, marginLeft:1.5 }}>▶</span>
            </div>
          </div>
        </div>
        <div style={{ margin:"0 10px" }}>
          <div style={{ fontSize:4.5, color:"rgba(255,255,255,0.3)", fontWeight:700, letterSpacing:0.7, marginBottom:3 }}>{"TODAY'S PLAN"}</div>
          {[{n:"Morning Meditation",d:"5 min",done:true,c:"#7dd3fc"},{n:"Anxiety Relief",d:"12 min",done:false,c:"#c4b5fd"},{n:"Sleep Wind Down",d:"20 min",done:false,c:"#6ee7b7"}].map((s,i)=>(
            <div key={i} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"4px 6px", background:"rgba(255,255,255,0.04)", borderRadius:7, marginBottom:3, border:"1px solid rgba(255,255,255,0.04)" }}>
              <div style={{ display:"flex", alignItems:"center", gap:5 }}>
                <div style={{ width:14, height:14, borderRadius:4, background:s.done?"#7dd3fc":"rgba(125,211,252,0.1)", border:s.done?"none":`1px solid ${s.c}40`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  {s.done && <span style={{ fontSize:7, color:"#0b1120", fontWeight:900 }}>✓</span>}
                </div>
                <span style={{ fontSize:6.5, fontWeight:600, color:s.done?"rgba(255,255,255,0.3)":"rgba(255,255,255,0.85)", textDecoration:s.done?"line-through":"none" }}>{s.n}</span>
              </div>
              <span style={{ fontSize:5, color:"rgba(255,255,255,0.3)", background:"rgba(255,255,255,0.06)", borderRadius:4, padding:"1px 4px", flexShrink:0 }}>{s.d}</span>
            </div>
          ))}
        </div>
        <div style={{ display:"flex", gap:3, margin:"4px 10px 0" }}>
          {[{v:"21",l:"Day Streak"},{v:"4.2h",l:"This Week"},{v:"98",l:"Sessions"}].map((st,i)=>(
            <div key={i} style={{ flex:1, textAlign:"center", background:"rgba(125,211,252,0.06)", borderRadius:6, padding:"4px 2px", border:"1px solid rgba(125,211,252,0.1)" }}>
              <div style={{ fontSize:8.5, fontWeight:800, color:"#7dd3fc" }}>{st.v}</div>
              <div style={{ fontSize:4, color:"rgba(255,255,255,0.3)", marginTop:1 }}>{st.l}</div>
            </div>
          ))}
        </div>
      </>
    ),
  },

  /* 4 · SNAP — Social */
  {
    bg: "#0f0f0f", accent: "#e1306c",
    content: (
      <>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"4px 10px 4px" }}>
          <span style={{ fontSize:11, fontWeight:900, color:"white", fontStyle:"italic", letterSpacing:-0.5 }}>vibes</span>
          <div style={{ display:"flex", gap:9, alignItems:"center" }}>
            <span style={{ fontSize:10, color:"rgba(255,255,255,0.5)" }}>♡</span>
            <span style={{ fontSize:10, color:"rgba(255,255,255,0.5)" }}>✉</span>
          </div>
        </div>
        <div style={{ display:"flex", gap:6, padding:"0 10px 5px", overflow:"hidden" }}>
          {[{l:"Your Story",isAdd:true},{l:"sarah_k",ring:"linear-gradient(45deg,#f09433,#bc1888)"},{l:"alex.d",ring:"linear-gradient(45deg,#405de6,#833ab4)"},{l:"mia.r",ring:"linear-gradient(45deg,#f9a825,#e91e63)"},{l:"jun",ring:"linear-gradient(45deg,#00bcd4,#1976d2)"}].map((s,i)=>(
            <div key={i} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:2.5, flexShrink:0 }}>
              <div style={{ width:24, height:24, borderRadius:"50%", background:i===0?"transparent":(s as any).ring, padding:1.5 }}>
                <div style={{ width:"100%", height:"100%", borderRadius:"50%", background:i===0?"rgba(255,255,255,0.08)":"#1a1a1a", border:i===0?"2px dashed rgba(255,255,255,0.25)":"2px solid #0f0f0f", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <span style={{ fontSize:i===0?9:7.5, color:"white", fontWeight:800 }}>{i===0?"+":(s.l.slice(0,2).toUpperCase())}</span>
                </div>
              </div>
              <span style={{ fontSize:4, color:"rgba(255,255,255,0.4)" }}>{s.l.split("_")[0].slice(0,6)}</span>
            </div>
          ))}
        </div>
        <div style={{ margin:"0 10px 5px", background:"rgba(255,255,255,0.03)", borderRadius:10, overflow:"hidden", border:"1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ display:"flex", alignItems:"center", gap:5, padding:"5px 7px" }}>
            <div style={{ width:18, height:18, borderRadius:"50%", background:"linear-gradient(135deg,#f09433,#bc1888)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}><span style={{ fontSize:7.5, color:"white", fontWeight:900 }}>S</span></div>
            <span style={{ fontSize:6.5, fontWeight:700, color:"white" }}>sarah_k</span>
            <span style={{ fontSize:5, color:"rgba(255,255,255,0.25)", marginLeft:"auto" }}>2h</span>
          </div>
          <svg width="118" height="54" viewBox="0 0 118 54" style={{ display:"block", width:"100%" }}>
            <defs><linearGradient id="snapSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#0f0c29"/><stop offset="45%" stopColor="#4a2080"/><stop offset="75%" stopColor="#c05020"/><stop offset="100%" stopColor="#ff8040"/></linearGradient></defs>
            <rect width="118" height="54" fill="url(#snapSky)"/>
            <circle cx="59" cy="36" r="14" fill="#ffd700" opacity="0.18"/>
            <circle cx="59" cy="36" r="9" fill="#ffaa00" opacity="0.55"/>
            <circle cx="59" cy="36" r="5" fill="#fff8e0" opacity="0.9"/>
            <path d="M0,54 L18,28 L30,38 L48,18 L62,30 L78,22 L95,32 L108,20 L118,26 L118,54Z" fill="#0a061e"/>
            <path d="M0,54 L25,46 L60,50 L95,44 L118,48 L118,54Z" fill="#070414"/>
          </svg>
          <div style={{ display:"flex", gap:10, padding:"4px 7px" }}>
            <span style={{ fontSize:6, color:"#f87171" }}>❤ 2.4k</span>
            <span style={{ fontSize:6, color:"rgba(255,255,255,0.3)" }}>💬 89</span>
            <span style={{ fontSize:6, color:"rgba(255,255,255,0.3)" }}>↗</span>
          </div>
        </div>
        <div style={{ margin:"0 10px", background:"rgba(255,255,255,0.03)", borderRadius:10, overflow:"hidden", border:"1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ display:"flex", alignItems:"center", gap:5, padding:"5px 7px" }}>
            <div style={{ width:18, height:18, borderRadius:"50%", background:"linear-gradient(135deg,#405de6,#833ab4)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}><span style={{ fontSize:7.5, color:"white", fontWeight:900 }}>A</span></div>
            <span style={{ fontSize:6.5, fontWeight:700, color:"white" }}>alex.dev</span>
          </div>
          <div style={{ height:36, background:"linear-gradient(135deg,#0d1117,#1a2030)", display:"flex", alignItems:"center", justifyContent:"center", padding:"0 14px" }}>
            <span style={{ fontSize:7, color:"#7dd3fc", fontWeight:600 }}>Shipped v2.0 🚀</span>
          </div>
          <div style={{ display:"flex", gap:10, padding:"4px 7px" }}>
            <span style={{ fontSize:6, color:"rgba(255,255,255,0.6)" }}>❤ 847</span>
            <span style={{ fontSize:6, color:"rgba(255,255,255,0.3)" }}>💬 42</span>
          </div>
        </div>
      </>
    ),
  },

  /* 5 · EATS — Food Delivery */
  {
    bg: "#111111", accent: "#ff6900",
    content: (
      <>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"5px 10px 3px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:3 }}>
            <span style={{ fontSize:8, color:"#ff6900" }}>📍</span>
            <div>
              <div style={{ fontSize:4.5, color:"rgba(255,255,255,0.35)", fontWeight:600 }}>DELIVER TO</div>
              <div style={{ fontSize:7.5, fontWeight:700, color:"white" }}>Manhattan, NY</div>
            </div>
          </div>
          <div style={{ width:22, height:22, borderRadius:"50%", background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.08)", display:"flex", alignItems:"center", justifyContent:"center" }}><span style={{ fontSize:9 }}>👤</span></div>
        </div>
        <div style={{ margin:"0 10px 5px", height:19, background:"rgba(255,255,255,0.06)", borderRadius:8, display:"flex", alignItems:"center", paddingLeft:8, border:"1px solid rgba(255,255,255,0.06)" }}>
          <span style={{ fontSize:5.5, color:"rgba(255,255,255,0.22)" }}>🔍  Craving something...</span>
        </div>
        <div style={{ display:"flex", gap:4, padding:"0 10px 5px", overflow:"hidden" }}>
          {[{e:"🍕",l:"Pizza"},{e:"🍔",l:"Burgers"},{e:"🍜",l:"Ramen"},{e:"🥗",l:"Healthy"}].map((c,i)=>(
            <div key={i} style={{ flexShrink:0, display:"flex", alignItems:"center", gap:2.5, background:i===0?"#ff6900":"rgba(255,255,255,0.06)", borderRadius:99, padding:"2.5px 7px", border:i===0?"none":"1px solid rgba(255,255,255,0.06)" }}>
              <span style={{ fontSize:7 }}>{c.e}</span>
              <span style={{ fontSize:5, color:i===0?"white":"rgba(255,255,255,0.4)", fontWeight:i===0?700:400 }}>{c.l}</span>
            </div>
          ))}
        </div>
        <div style={{ margin:"0 10px 5px", borderRadius:10, overflow:"hidden", border:"1px solid rgba(255,255,255,0.07)" }}>
          <div style={{ height:50, background:"linear-gradient(135deg,#1a0800,#3d1800,#8b3a00)", position:"relative", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden" }}>
            <span style={{ fontSize:30, filter:"drop-shadow(0 2px 6px rgba(0,0,0,0.6))" }}>🍕</span>
            <div style={{ position:"absolute", top:5, left:7, background:"#ff6900", borderRadius:4, padding:"2px 5px" }}><span style={{ fontSize:4.5, color:"white", fontWeight:800 }}>30% OFF</span></div>
            <div style={{ position:"absolute", bottom:5, right:6, display:"flex", gap:3 }}>
              <span style={{ fontSize:5, background:"rgba(0,0,0,0.65)", color:"#fbbf24", padding:"1.5px 4px", borderRadius:3 }}>★ 4.9</span>
              <span style={{ fontSize:5, background:"rgba(0,0,0,0.65)", color:"rgba(255,255,255,0.75)", padding:"1.5px 4px", borderRadius:3 }}>18 min</span>
            </div>
          </div>
          <div style={{ padding:"5px 8px", background:"rgba(255,255,255,0.03)" }}>
            <div style={{ fontSize:7.5, fontWeight:700, color:"white" }}>Napoli Pizzeria</div>
            <div style={{ fontSize:5, color:"rgba(255,255,255,0.35)", marginTop:1 }}>Italian · Free delivery · Open now</div>
          </div>
        </div>
        {[{n:"Burger Palace",t:"American · 25 min",e:"🍔",r:"4.7"},{n:"Tokyo Ramen",t:"Japanese · 35 min",e:"🍜",r:"4.8"}].map((r,i)=>(
          <div key={i} style={{ display:"flex", gap:7, margin:"0 10px", padding:"4.5px 0", borderTop:"1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ width:30, height:30, borderRadius:8, background:"rgba(255,255,255,0.06)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}><span style={{ fontSize:16 }}>{r.e}</span></div>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:6.5, fontWeight:700, color:"white" }}>{r.n}</div>
              <div style={{ fontSize:5, color:"rgba(255,255,255,0.3)", marginTop:1 }}>{r.t}</div>
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:2 }}>
              <span style={{ fontSize:6, color:"#fbbf24" }}>★</span>
              <span style={{ fontSize:6, color:"rgba(255,255,255,0.5)", fontWeight:600 }}>{r.r}</span>
            </div>
          </div>
        ))}
      </>
    ),
  },

  /* 6 · TASKFLOW — Productivity */
  {
    bg: "#0d0f16", accent: "#5b6af7",
    content: (
      <>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"5px 10px 3px" }}>
          <div>
            <div style={{ fontSize:5.5, color:"rgba(255,255,255,0.3)" }}>Monday · May 26</div>
            <div style={{ fontSize:10.5, fontWeight:800, color:"white" }}>My Day</div>
          </div>
          <div style={{ width:20, height:20, borderRadius:6, background:"rgba(91,106,247,0.2)", display:"flex", alignItems:"center", justifyContent:"center", border:"1px solid rgba(91,106,247,0.3)" }}>
            <span style={{ fontSize:13, color:"#818cf8", lineHeight:1 }}>+</span>
          </div>
        </div>
        <div style={{ margin:"0 10px 5px", display:"flex", alignItems:"center", gap:6 }}>
          <div style={{ flex:1, height:4, background:"rgba(255,255,255,0.06)", borderRadius:2 }}>
            <div style={{ width:"58%", height:4, background:"linear-gradient(to right,#5b6af7,#818cf8)", borderRadius:2 }} />
          </div>
          <span style={{ fontSize:5, color:"rgba(255,255,255,0.3)", fontWeight:700 }}>7/12</span>
        </div>
        <div style={{ margin:"0 10px", marginBottom:5 }}>
          <div style={{ display:"flex", alignItems:"center", gap:4, marginBottom:3 }}>
            <div style={{ width:6, height:6, borderRadius:2, background:"#5b6af7" }} />
            <span style={{ fontSize:5, color:"rgba(255,255,255,0.4)", fontWeight:700, letterSpacing:0.5 }}>DESIGN SYSTEM</span>
          </div>
          {[{t:"Component audit",done:true},{t:"Update button variants",done:true},{t:"Dark mode tokens",done:false,p:"HIGH"}].map((task,ti)=>(
            <div key={ti} style={{ display:"flex", alignItems:"center", gap:5, padding:"3.5px 6px", background:"rgba(255,255,255,0.03)", borderRadius:5, marginBottom:2.5, borderLeft:"2.5px solid"+(task.done?"rgba(91,106,247,0.4)":"#5b6af7") }}>
              <div style={{ width:10, height:10, borderRadius:2.5, background:task.done?"#5b6af7":"transparent", border:task.done?"none":"1px solid rgba(255,255,255,0.2)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                {task.done && <span style={{ fontSize:5.5, color:"white" }}>✓</span>}
              </div>
              <span style={{ flex:1, fontSize:6, color:task.done?"rgba(255,255,255,0.25)":"rgba(255,255,255,0.8)", textDecoration:task.done?"line-through":"none" }}>{task.t}</span>
              {(task as any).p && <span style={{ fontSize:4, background:"rgba(248,113,113,0.15)", color:"#f87171", borderRadius:3, padding:"1px 3px", fontWeight:700 }}>{(task as any).p}</span>}
            </div>
          ))}
        </div>
        <div style={{ margin:"0 10px", marginBottom:4 }}>
          <div style={{ display:"flex", alignItems:"center", gap:4, marginBottom:3 }}>
            <div style={{ width:6, height:6, borderRadius:2, background:"#34d399" }} />
            <span style={{ fontSize:5, color:"rgba(255,255,255,0.4)", fontWeight:700, letterSpacing:0.5 }}>API V3</span>
          </div>
          {[{t:"Auth endpoints",p:"MED"},{t:"Rate limiting"}].map((task,ti)=>(
            <div key={ti} style={{ display:"flex", alignItems:"center", gap:5, padding:"3.5px 6px", background:"rgba(255,255,255,0.03)", borderRadius:5, marginBottom:2.5, borderLeft:"2.5px solid rgba(52,211,153,0.5)" }}>
              <div style={{ width:10, height:10, borderRadius:2.5, background:"transparent", border:"1px solid rgba(255,255,255,0.2)", flexShrink:0 }} />
              <span style={{ flex:1, fontSize:6, color:"rgba(255,255,255,0.8)" }}>{task.t}</span>
              {(task as any).p && <span style={{ fontSize:4, background:"rgba(251,191,36,0.15)", color:"#fbbf24", borderRadius:3, padding:"1px 3px", fontWeight:700 }}>{(task as any).p}</span>}
            </div>
          ))}
        </div>
        <div style={{ margin:"0 10px", background:"rgba(91,106,247,0.07)", borderRadius:7, padding:"4px 7px", border:"1px solid rgba(91,106,247,0.12)" }}>
          <div style={{ fontSize:4.5, color:"#818cf8", fontWeight:700, marginBottom:2 }}>DUE TODAY</div>
          <div style={{ display:"flex", alignItems:"center", gap:4 }}>
            <span style={{ fontSize:8 }}>📌</span>
            <span style={{ fontSize:6, color:"rgba(255,255,255,0.6)" }}>Deploy to staging · 6:00 PM</span>
          </div>
        </div>
      </>
    ),
  },

  /* 7 · LUXE — Shopping */
  {
    bg: "#0a0a0f", accent: "#d4af37",
    content: (
      <>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"5px 10px 3px" }}>
          <span style={{ fontSize:11, fontWeight:900, color:"white", letterSpacing:1.5 }}>LUXE</span>
          <div style={{ display:"flex", gap:9, alignItems:"center" }}>
            <span style={{ fontSize:10, color:"rgba(255,255,255,0.4)" }}>🔍</span>
            <div style={{ position:"relative" }}>
              <span style={{ fontSize:10, color:"rgba(255,255,255,0.4)" }}>🛍</span>
              <div style={{ position:"absolute", top:-2, right:-2, width:7, height:7, borderRadius:"50%", background:"#ef4444", display:"flex", alignItems:"center", justifyContent:"center" }}><span style={{ fontSize:3.5, color:"white", fontWeight:800 }}>2</span></div>
            </div>
          </div>
        </div>
        <div style={{ margin:"0 10px 5px", borderRadius:10, overflow:"hidden" }}>
          <div style={{ height:66, background:"linear-gradient(135deg,#1a1620,#2a1e38,#12102a)", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 12px", position:"relative", overflow:"hidden" }}>
            <div style={{ position:"absolute", top:-18, right:-10, width:72, height:72, borderRadius:"50%", background:"rgba(212,175,55,0.08)", filter:"blur(10px)" }} />
            <div style={{ position:"relative", zIndex:1 }}>
              <div style={{ fontSize:4.5, color:"rgba(212,175,55,0.75)", fontWeight:700, letterSpacing:1.5 }}>NEW ARRIVAL</div>
              <div style={{ fontSize:9.5, fontWeight:800, color:"white", lineHeight:1.2, marginTop:2 }}>Air Max Luxe</div>
              <div style={{ fontSize:9, fontWeight:800, color:"white", lineHeight:1.1 }}>Edition</div>
              <div style={{ fontSize:9, fontWeight:900, color:"#d4af37", marginTop:3 }}>$349</div>
            </div>
            <span style={{ fontSize:38, filter:"drop-shadow(0 4px 12px rgba(0,0,0,0.7))", position:"relative", zIndex:1 }}>👟</span>
          </div>
        </div>
        <div style={{ display:"flex", gap:4, padding:"0 10px", marginBottom:5 }}>
          {["All","Shoes","Bags","Apparel"].map((c,i)=>(
            <div key={i} style={{ flexShrink:0, background:i===0?"#d4af37":"rgba(255,255,255,0.06)", borderRadius:99, padding:"2.5px 7px" }}>
              <span style={{ fontSize:5, color:i===0?"#000":"rgba(255,255,255,0.4)", fontWeight:i===0?700:400 }}>{c}</span>
            </div>
          ))}
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:5, margin:"0 10px" }}>
          {[{n:"Canvas Tote",p:"$125",e:"👜",bg:"linear-gradient(135deg,#1a1030,#2a1860)",badge:""},{n:"Linen Blazer",p:"$280",e:"🥼",bg:"linear-gradient(135deg,#0a2018,#143828)",badge:"New"},{n:"Slim Wallet",p:"$89",e:"👛",bg:"linear-gradient(135deg,#2a1800,#3d2800)",badge:""},{n:"Sunglasses",p:"$195",e:"🕶",bg:"linear-gradient(135deg,#1a0a1a,#2a1030)",badge:"Sale"}].map((p,i)=>(
            <div key={i} style={{ background:"rgba(255,255,255,0.04)", borderRadius:9, overflow:"hidden", border:"1px solid rgba(255,255,255,0.07)" }}>
              <div style={{ height:34, background:p.bg, display:"flex", alignItems:"center", justifyContent:"center", position:"relative" }}>
                <span style={{ fontSize:18 }}>{p.e}</span>
                {p.badge && <div style={{ position:"absolute", top:3, right:4, background:p.badge==="Sale"?"#ef4444":"#d4af37", borderRadius:3, padding:"1.5px 3.5px" }}><span style={{ fontSize:3.5, color:"white", fontWeight:800 }}>{p.badge}</span></div>}
              </div>
              <div style={{ padding:"4px 6px 5px" }}>
                <div style={{ fontSize:5.5, color:"rgba(255,255,255,0.55)", marginBottom:1 }}>{p.n}</div>
                <div style={{ fontSize:8, fontWeight:900, color:"white" }}>{p.p}</div>
              </div>
            </div>
          ))}
        </div>
      </>
    ),
  },
];

/* ─────────────────────────────────────────
   Phone shell component (reusable)
───────────────────────────────────────── */
const navIcons = ["⊞","🔍","♡","👤"];

function PhoneMockup({ phone }: { phone: PhoneDef }) {
  return (
    <div style={{
      width:138, height:256, borderRadius:"1.5rem", overflow:"hidden",
      background:phone.bg,
      boxShadow:"0 24px 64px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.07)",
      fontFamily:"-apple-system,BlinkMacSystemFont,'SF Pro Display',sans-serif",
      position:"relative", flexShrink:0,
    }}>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"6px 10px 2px" }}>
        <span style={{ fontSize:6.5, fontWeight:700, color:"rgba(255,255,255,0.6)" }}>9:41</span>
        <div style={{ display:"flex", alignItems:"center", gap:2.5 }}>
          {[3,5,7].map((h,j)=><div key={j} style={{ width:2, height:h, borderRadius:1, background:"rgba(255,255,255,0.45)" }} />)}
          <div style={{ width:9, height:5, borderRadius:1.5, border:"1px solid rgba(255,255,255,0.3)", marginLeft:2, display:"flex", alignItems:"center", padding:"0 1px" }}>
            <div style={{ width:5, height:3, background:"#30d158", borderRadius:0.5 }} />
          </div>
        </div>
      </div>
      {phone.content}
      <div style={{ position:"absolute", bottom:0, left:0, right:0, display:"flex", justifyContent:"space-around", alignItems:"center", padding:"5px 14px 7px", background:"rgba(0,0,0,0.55)", borderTop:"1px solid rgba(255,255,255,0.07)", backdropFilter:"blur(12px)" }}>
        {navIcons.map((icon,j)=>(
          <div key={j} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:1.5 }}>
            <span style={{ fontSize:10, opacity:j===0?1:0.28 }}>{icon}</span>
            {j===0 && <div style={{ width:12, height:2.5, background:phone.accent, borderRadius:2 }} />}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   2x2 grid card definitions
───────────────────────────────────────── */
const gridCards = [
  { label:"Health & Fitness", dot:"#30d158", phones:[phones[2], phones[3]] },
  { label:"Finance & Crypto",  dot:"#00d4aa", phones:[phones[1], phones[6]] },
  { label:"Social & Lifestyle",dot:"#e1306c", phones:[phones[4], phones[5]] },
  { label:"Music & Shopping",  dot:"#1DB954", phones:[phones[0], phones[7]] },
];

/* ─────────────────────────────────────────
   Hero component — AppAlchemy layout
───────────────────────────────────────── */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full opacity-20 blur-3xl"
        style={{ background:"radial-gradient(ellipse,#3b82f6 0%,transparent 70%)" }} />

      {/* ── Hero text + CTA + prompt ── */}
      <div className="relative mx-auto max-w-4xl px-4 pt-20 pb-12 text-center">

        {/* V2 badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-sm font-semibold text-white"
          style={{ background:"rgba(255,255,255,0.08)" }}>
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

        {/* CTAs */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/signup"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/50 hover:bg-blue-500 transition-colors">
            Start Creating <ArrowRight className="h-4 w-4" />
          </Link>
          <a href="#demo"
            className="inline-flex items-center rounded-xl border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
            Learn More
          </a>
        </div>

        {/* Prompt input */}
        <div className="mx-auto mt-10 max-w-2xl">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
            <span className="flex-1 text-left text-sm text-slate-500">Design a sleek fitness tracking app with dark mode and animated charts...</span>
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-500 cursor-pointer transition-colors">
              <ArrowRight className="h-4 w-4 text-white" />
            </div>
          </div>
          {/* Prompt chips */}
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {["Fitness App","Habit Tracker","Digital Gallery","Journaling App"].map((s) => (
              <span key={s} className="cursor-pointer rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-400 hover:border-blue-400/50 hover:text-blue-300 transition-colors">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── 2×2 Phone Mockup Grid ── */}
      <div className="relative mx-auto max-w-5xl px-4 pb-24">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {gridCards.map((card) => (
            <div key={card.label}
              className="rounded-2xl border border-white/8 p-5"
              style={{ background:"rgba(255,255,255,0.04)", backdropFilter:"blur(8px)" }}>
              {/* Card label */}
              <div className="mb-5 flex items-center gap-2">
                <div style={{ width:8, height:8, borderRadius:"50%", background:card.dot, flexShrink:0 }} />
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">{card.label}</span>
              </div>
              {/* Phones row */}
              <div className="flex items-start justify-center gap-4">
                {card.phones.map((phone, i) => (
                  <PhoneMockup key={i} phone={phone} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
