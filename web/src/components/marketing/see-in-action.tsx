import { ArrowRight, Image, LayoutTemplate, Wand2 } from "lucide-react";
import Link from "next/link";

const demos = [
  {
    Icon: Wand2,
    title: "Design from scratch",
    description:
      "Type any app idea — VibeUI generates complete polished screens in real-time. No templates, no starting points.",
    tag: "Most popular",
    tagColor: "bg-violet-100 text-violet-700",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    phone: {
      bg: "#0F172A",
      content: (
        <>
          <div style={{ padding: "6px 8px 3px" }}>
            <div style={{ fontSize: 6, color: "#94A3B8" }}>Crypto Portfolio</div>
            <div style={{ fontSize: 13, fontWeight: 800, color: "white", lineHeight: 1.1 }}>$48,291<span style={{ fontSize: 7, color: "#A78BFA" }}>.40</span></div>
            <div style={{ fontSize: 6, color: "#22C55E", marginTop: 1 }}>▲ 12.4% this week</div>
          </div>
          <div style={{ margin: "4px 8px", background: "rgba(99,102,241,0.15)", borderRadius: 7, padding: "5px 6px" }}>
            <svg width="100%" height="32" viewBox="0 0 120 32">
              <defs>
                <linearGradient id="cryptoGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366F1" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,28 L20,22 L35,25 L50,12 L65,18 L80,8 L100,14 L120,4" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
              <path d="M0,28 L20,22 L35,25 L50,12 L65,18 L80,8 L100,14 L120,4 L120,32 L0,32 Z" fill="url(#cryptoGrad)" />
              <circle cx="120" cy="4" r="3" fill="#6366F1" />
            </svg>
          </div>
          <div style={{ margin: "3px 8px 0" }}>
            {[{ s: "BTC", v: "+8.2%", c: "#F97316" }, { s: "ETH", v: "+5.1%", c: "#6366F1" }, { s: "SOL", v: "+14.7%", c: "#8B5CF6" }].map((coin, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "3px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <div style={{ width: 14, height: 14, borderRadius: "50%", background: coin.c + "33" }} />
                  <span style={{ fontSize: 7, fontWeight: 700, color: "white" }}>{coin.s}</span>
                </div>
                <span style={{ fontSize: 7, fontWeight: 700, color: "#22C55E" }}>{coin.v}</span>
              </div>
            ))}
          </div>
        </>
      ),
    },
  },
  {
    Icon: Image,
    title: "Design from screenshots",
    description:
      "Upload screenshots of an existing app — VibeUI recreates and improves the design, giving you a version you own.",
    tag: "Unique feature",
    tagColor: "bg-sky-100 text-sky-700",
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
    phone: {
      bg: "#F8FAFC",
      content: (
        <>
          <div style={{ padding: "6px 8px 3px" }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: "#0F172A" }}>Social Feed</div>
          </div>
          {[
            { user: "sarah_k", time: "2m ago", likes: "1.2k", c: "#EC4899" },
            { user: "alex.dev", time: "15m ago", likes: "847", c: "#6366F1" },
          ].map((post, i) => (
            <div key={i} style={{ margin: "3px 8px", background: "white", borderRadius: 8, padding: "6px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 5 }}>
                <div style={{ width: 18, height: 18, borderRadius: "50%", background: post.c + "33", border: `2px solid ${post.c}` }} />
                <div>
                  <div style={{ fontSize: 7, fontWeight: 700, color: "#0F172A" }}>@{post.user}</div>
                  <div style={{ fontSize: 5, color: "#94A3B8" }}>{post.time}</div>
                </div>
              </div>
              <div style={{ height: 36, background: post.c + "18", borderRadius: 6, marginBottom: 4 }} />
              <div style={{ display: "flex", gap: 8 }}>
                <span style={{ fontSize: 6, color: "#EF4444" }}>♥ {post.likes}</span>
                <span style={{ fontSize: 6, color: "#94A3B8" }}>💬 Share</span>
              </div>
            </div>
          ))}
        </>
      ),
    },
  },
  {
    Icon: LayoutTemplate,
    title: "Clone from template",
    description:
      "Start from one of our curated templates — e-commerce, social, productivity — then customize with natural language.",
    tag: "Fastest start",
    tagColor: "bg-emerald-100 text-emerald-700",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    phone: {
      bg: "#FAFAFA",
      content: (
        <>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "6px 8px 3px" }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: "#0F172A" }}>ShopLux</div>
            <div style={{ fontSize: 7, color: "#6366F1", fontWeight: 600 }}>Cart (3)</div>
          </div>
          <div style={{ margin: "0 8px 4px", height: 16, background: "#F1F5F9", borderRadius: 5, display: "flex", alignItems: "center", paddingLeft: 6 }}>
            <span style={{ fontSize: 5, color: "#94A3B8" }}>Search products...</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4, margin: "0 8px" }}>
            {[
              { n: "Air Max", p: "$149", c: "#DBEAFE" },
              { n: "Tote Bag", p: "$89", c: "#FCE7F3" },
              { n: "Linen Shirt", p: "$65", c: "#D1FAE5" },
              { n: "Slim Wallet", p: "$45", c: "#FEF3C7" },
            ].map((p, i) => (
              <div key={i} style={{ background: "white", borderRadius: 6, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.07)" }}>
                <div style={{ height: 30, background: p.c, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 16, height: 10, background: "rgba(255,255,255,0.5)", borderRadius: 2 }} />
                </div>
                <div style={{ padding: "3px 4px" }}>
                  <div style={{ fontSize: 5, fontWeight: 600, color: "#0F172A" }}>{p.n}</div>
                  <div style={{ fontSize: 6, fontWeight: 700, color: "#0F172A" }}>{p.p}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      ),
    },
  },
];

export function SeeInAction() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-600">See it in action</p>
          <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Three ways to generate
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-500">
            Whether you&apos;re starting from an idea, a screenshot, or a template — VibeUI has a generation mode for you.
          </p>
        </div>

        {/* Demo cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {demos.map(({ Icon, title, description, tag, tagColor, iconBg, iconColor, phone }) => (
            <article
              key={title}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all hover:border-violet-200 hover:shadow-lg hover:shadow-violet-50"
            >
              {/* Real phone preview */}
              <div className="mb-6 rounded-xl bg-white p-4 shadow-sm flex items-center justify-center">
                <div
                  className="relative overflow-hidden rounded-2xl shadow-lg"
                  style={{ width: 130, height: 200, background: phone.bg, fontFamily: "-apple-system, sans-serif" }}
                >
                  {/* Status bar */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 8px 2px" }}>
                    <span style={{ fontSize: 6, fontWeight: 700, color: phone.bg === "#F8FAFC" || phone.bg === "#FAFAFA" ? "#64748B" : "rgba(255,255,255,0.7)" }}>9:41</span>
                    <div style={{ display: "flex", gap: 2 }}>
                      {[4, 6, 8].map((h, i) => (
                        <div key={i} style={{ width: 2, height: h, borderRadius: 1, background: phone.bg === "#F8FAFC" || phone.bg === "#FAFAFA" ? "#94A3B8" : "rgba(255,255,255,0.5)" }} />
                      ))}
                    </div>
                  </div>
                  {phone.content}
                  {/* Bottom nav */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-around items-center px-4 py-1.5"
                    style={{ background: phone.bg === "#F8FAFC" || phone.bg === "#FAFAFA" ? "rgba(255,255,255,0.95)" : "rgba(0,0,0,0.3)", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                    {[0, 1, 2, 3].map((i) => (
                      <div key={i} style={{ width: 12, height: 12, borderRadius: 3, background: i === 0 ? "#6366F1" : "rgba(148,163,184,0.3)" }} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Tag */}
              <span className={`mb-3 inline-flex self-start rounded-full px-2.5 py-0.5 text-xs font-semibold ${tagColor}`}>
                {tag}
              </span>

              {/* Icon + title */}
              <div className="flex items-center gap-3 mb-3">
                <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${iconBg}`}>
                  <Icon className={`h-4 w-4 ${iconColor}`} />
                </div>
                <h3 className="text-base font-semibold text-slate-950">{title}</h3>
              </div>

              <p className="flex-1 text-sm leading-6 text-slate-500">{description}</p>

              <Link
                href="/signup"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 hover:text-violet-700 transition-colors"
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
