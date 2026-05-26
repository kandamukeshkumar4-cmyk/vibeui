import { ArrowRight, Image, LayoutTemplate, Wand2 } from "lucide-react";
import Link from "next/link";

/* ── Phone 1: AI-generated crypto app ── */
const CryptoPhone = () => (
  <>
    <div style={{ padding: "6px 10px 2px" }}>
      <div style={{ fontSize: 6, color: "#94A3B8" }}>Portfolio</div>
      <div style={{ fontSize: 15, fontWeight: 800, color: "white", lineHeight: 1.1 }}>
        $48,291<span style={{ fontSize: 8, color: "#A78BFA" }}>.40</span>
      </div>
      <div style={{ fontSize: 6, color: "#22C55E", marginTop: 1 }}>▲ 12.4% this week</div>
    </div>
    {/* Chart */}
    <div style={{ margin: "4px 8px 3px", background: "rgba(99,102,241,0.12)", borderRadius: 8, padding: "5px 6px" }}>
      <svg width="100%" height="34" viewBox="0 0 110 34">
        <defs>
          <linearGradient id="cg1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,30 L15,24 L28,27 L42,14 L56,20 L72,9 L88,15 L110,4" fill="none" stroke="#6366F1" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M0,30 L15,24 L28,27 L42,14 L56,20 L72,9 L88,15 L110,4 L110,34 L0,34Z" fill="url(#cg1)" />
        <circle cx="110" cy="4" r="2.5" fill="#6366F1" />
        <circle cx="110" cy="4" r="4.5" fill="#6366F1" fillOpacity="0.2" />
      </svg>
    </div>
    {/* Coin list */}
    <div style={{ margin: "0 8px" }}>
      {[
        { sym: "BTC", name: "Bitcoin", val: "$44,210", chg: "+8.2%", c: "#F97316" },
        { sym: "ETH", name: "Ethereum", val: "$2,840", chg: "+5.1%", c: "#6366F1" },
        { sym: "SOL", name: "Solana", val: "$182", chg: "+14.7%", c: "#8B5CF6" },
      ].map((coin, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "4px 0", borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <div style={{ width: 18, height: 18, borderRadius: "50%", background: coin.c + "25", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 7, fontWeight: 800, color: coin.c }}>{coin.sym[0]}</span>
            </div>
            <div>
              <div style={{ fontSize: 7, fontWeight: 700, color: "white" }}>{coin.sym}</div>
              <div style={{ fontSize: 5, color: "#64748B" }}>{coin.name}</div>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 7, fontWeight: 600, color: "white" }}>{coin.val}</div>
            <div style={{ fontSize: 6, fontWeight: 700, color: "#22C55E" }}>{coin.chg}</div>
          </div>
        </div>
      ))}
    </div>
  </>
);

/* ── Phone 2: Social feed (dark) ── */
const SocialPhone = () => (
  <>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "5px 10px 4px" }}>
      <span style={{ fontSize: 10, fontWeight: 800, color: "white" }}>Feed</span>
      <div style={{ display: "flex", gap: 6 }}>
        <div style={{ width: 14, height: 14, borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 7, color: "white" }}>🔔</span>
        </div>
        <div style={{ width: 14, height: 14, borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 7, color: "white" }}>✉</span>
        </div>
      </div>
    </div>
    {[
      {
        user: "sarah_k", handle: "@sarah_k", time: "2m",
        avatar: "SK", ac: "#EC4899",
        text: "Just shipped v2.0 🚀 The new dark mode looks incredible. Users are loving it!",
        likes: "1.2k", comments: "84", tag: "Design",
      },
      {
        user: "alex.dev", handle: "@alex.dev", time: "18m",
        avatar: "AD", ac: "#6366F1",
        text: "Hot take: the best UI is invisible. Your users should feel the app, not see it.",
        likes: "847", comments: "52", tag: "Dev",
      },
    ].map((post, i) => (
      <div key={i} style={{ margin: "0 8px 5px", background: "rgba(255,255,255,0.05)", borderRadius: 9, padding: "6px 7px", border: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ display: "flex", gap: 5, marginBottom: 4 }}>
          <div style={{ width: 20, height: 20, borderRadius: "50%", background: post.ac + "33", border: `1.5px solid ${post.ac}`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 6, fontWeight: 800, color: post.ac }}>{post.avatar}</span>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ fontSize: 7, fontWeight: 700, color: "white" }}>{post.user}</span>
              <span style={{ fontSize: 5, color: "#475569" }}>· {post.time}</span>
              <span style={{ marginLeft: "auto", fontSize: 5, background: post.ac + "20", color: post.ac, borderRadius: 4, padding: "1px 4px", fontWeight: 600 }}>{post.tag}</span>
            </div>
            <p style={{ fontSize: 6, color: "#94A3B8", lineHeight: 1.4, marginTop: 2 }}>{post.text}</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: 10, paddingTop: 3, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <span style={{ fontSize: 6, color: "#EF4444" }}>♥ {post.likes}</span>
          <span style={{ fontSize: 6, color: "#64748B" }}>💬 {post.comments}</span>
          <span style={{ fontSize: 6, color: "#64748B", marginLeft: "auto" }}>↗ Share</span>
        </div>
      </div>
    ))}
  </>
);

/* ── Phone 3: E-commerce (dark) ── */
const ShopPhone = () => (
  <>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "5px 10px 3px" }}>
      <span style={{ fontSize: 10, fontWeight: 800, color: "white" }}>ShopLux</span>
      <div style={{ position: "relative" }}>
        <div style={{ width: 16, height: 16, borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 8 }}>🛍</span>
        </div>
        <div style={{ position: "absolute", top: -2, right: -2, width: 7, height: 7, borderRadius: "50%", background: "#EF4444", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 4, color: "white", fontWeight: 700 }}>3</span>
        </div>
      </div>
    </div>
    {/* Search */}
    <div style={{ margin: "0 8px 5px", height: 16, background: "rgba(255,255,255,0.06)", borderRadius: 6, display: "flex", alignItems: "center", paddingLeft: 6, border: "1px solid rgba(255,255,255,0.08)" }}>
      <span style={{ fontSize: 5, color: "#475569" }}>🔍  Search products...</span>
    </div>
    {/* Featured banner */}
    <div style={{ margin: "0 8px 5px", background: "linear-gradient(135deg,#4F46E5,#7C3AED)", borderRadius: 8, padding: "6px 8px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div>
        <div style={{ fontSize: 5, color: "rgba(255,255,255,0.7)", fontWeight: 600, letterSpacing: 0.5 }}>SUMMER SALE</div>
        <div style={{ fontSize: 9, fontWeight: 800, color: "white" }}>40% OFF</div>
        <div style={{ fontSize: 5, color: "rgba(255,255,255,0.6)" }}>Limited time</div>
      </div>
      <span style={{ fontSize: 22 }}>👟</span>
    </div>
    {/* Products */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4, margin: "0 8px" }}>
      {[
        { n: "Air Max Pro", p: "$149", e: "👟", c: "#3B82F6", badge: "New" },
        { n: "Canvas Tote", p: "$89", e: "👜", c: "#EC4899", badge: "" },
        { n: "Linen Shirt", p: "$65", e: "👕", c: "#10B981", badge: "Sale" },
        { n: "Slim Wallet", p: "$45", e: "👛", c: "#F59E0B", badge: "" },
      ].map((p, i) => (
        <div key={i} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 7, overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)" }}>
          <div style={{ height: 28, background: p.c + "18", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
            <span style={{ fontSize: 14 }}>{p.e}</span>
            {p.badge && (
              <div style={{ position: "absolute", top: 2, right: 3, background: p.c, borderRadius: 3, padding: "1px 3px" }}>
                <span style={{ fontSize: 4, color: "white", fontWeight: 700 }}>{p.badge}</span>
              </div>
            )}
          </div>
          <div style={{ padding: "3px 5px" }}>
            <div style={{ fontSize: 5.5, fontWeight: 600, color: "#CBD5E1" }}>{p.n}</div>
            <div style={{ fontSize: 7, fontWeight: 800, color: "white" }}>{p.p}</div>
          </div>
        </div>
      ))}
    </div>
  </>
);

const demos = [
  {
    Icon: Wand2,
    title: "Design from scratch",
    description:
      "Type any app idea — VibeUI generates complete polished screens in real-time. No templates, no starting points.",
    tag: "Most popular",
    PhoneContent: CryptoPhone,
    phoneBg: "#0A0F1E",
  },
  {
    Icon: Image,
    title: "Design from screenshots",
    description:
      "Upload screenshots of an existing app — VibeUI recreates and improves the design, giving you a version you own.",
    tag: "Unique feature",
    PhoneContent: SocialPhone,
    phoneBg: "#0F172A",
  },
  {
    Icon: LayoutTemplate,
    title: "Clone from template",
    description:
      "Start from one of our curated templates — e-commerce, social, productivity — then customize with natural language.",
    tag: "Fastest start",
    PhoneContent: ShopPhone,
    phoneBg: "#0A0F1E",
  },
];

export function SeeInAction() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-400">See it in action</p>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Three ways to generate
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
            Whether you&apos;re starting from an idea, a screenshot, or a template — VibeUI has a generation mode for you.
          </p>
        </div>

        {/* Demo cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {demos.map(({ Icon, title, description, tag, PhoneContent, phoneBg }) => (
            <article
              key={title}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-900/20"
            >
              {/* Phone preview */}
              <div className="mb-6 rounded-xl p-3 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div
                  style={{
                    width: 130,
                    height: 210,
                    borderRadius: 18,
                    overflow: "hidden",
                    background: phoneBg,
                    fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
                    position: "relative",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)",
                  }}
                >
                  {/* Status bar */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 10px 2px" }}>
                    <span style={{ fontSize: 6, fontWeight: 700, color: "rgba(255,255,255,0.6)" }}>9:41</span>
                    <div style={{ display: "flex", gap: 2, alignItems: "flex-end" }}>
                      {[4, 6, 8].map((h, i) => (
                        <div key={i} style={{ width: 2, height: h, borderRadius: 1, background: "rgba(255,255,255,0.4)" }} />
                      ))}
                      <div style={{ width: 8, height: 5, borderRadius: 1, border: "1px solid rgba(255,255,255,0.4)", marginLeft: 2, display: "flex", alignItems: "center", paddingLeft: 1 }}>
                        <div style={{ width: 4, height: 3, background: "#22C55E", borderRadius: 0.5 }} />
                      </div>
                    </div>
                  </div>
                  <PhoneContent />
                  {/* Bottom nav */}
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    display: "flex", justifyContent: "space-around", alignItems: "center",
                    padding: "5px 16px 6px",
                    background: "rgba(0,0,0,0.5)",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    backdropFilter: "blur(8px)",
                  }}>
                    {["⊞", "🔍", "♡", "👤"].map((icon, i) => (
                      <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
                        <span style={{ fontSize: 9, opacity: i === 0 ? 1 : 0.35 }}>{icon}</span>
                        {i === 0 && <div style={{ width: 12, height: 2, background: "#6366F1", borderRadius: 1 }} />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tag */}
              <span className="mb-3 inline-flex self-start rounded-full bg-violet-500/20 border border-violet-500/30 px-2.5 py-0.5 text-xs font-semibold text-violet-300">
                {tag}
              </span>

              {/* Icon + title */}
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/20 border border-violet-500/20">
                  <Icon className="h-4 w-4 text-violet-400" />
                </div>
                <h3 className="text-base font-semibold text-white">{title}</h3>
              </div>

              <p className="flex-1 text-sm leading-6 text-slate-400">{description}</p>

              <Link
                href="/signup"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors"
              >
                Try it free <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
