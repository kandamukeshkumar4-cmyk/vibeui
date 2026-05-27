import { CoinIcon, RefScreen, RefTabs, Spark, Txt } from "./reference-mock-base";

/* ─── 1. Crypto wallet (dark blue) ─── */
const CRYPTO = { bg: "#080c18", card: "#121a2e", accent: "#3b82f6", green: "#22c55e", muted: "#6b7a99" };

export function CryptoDashboardScreen() {
  return (
    <RefScreen bg={CRYPTO.bg} tabs={<RefTabs items={[{ label: "Home" }, { label: "Card" }, { label: "Wallet" }, { label: "Accounts" }]} active={0} barBg="#0a1020" borderColor="#1e2a45" activeColor={CRYPTO.accent} inactiveColor="#fff" activeGlow={CRYPTO.accent} />}>
      <div style={{ padding: "2px 10px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <div style={{ width: 22, height: 22, borderRadius: "50%", background: "linear-gradient(135deg,#6366f1,#8b5cf6)" }} />
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ width: 18, height: 18, borderRadius: 6, background: CRYPTO.card, border: "1px solid #1e2a45" }} />
            <div style={{ width: 18, height: 18, borderRadius: 6, background: CRYPTO.card, border: "1px solid #1e2a45", position: "relative" }}>
              <div style={{ position: "absolute", top: 2, right: 2, width: 4, height: 4, borderRadius: "50%", background: "#ef4444" }} />
            </div>
          </div>
        </div>
        <div style={{ background: `linear-gradient(145deg, ${CRYPTO.card}, #1a2540)`, borderRadius: 14, padding: 10, border: "1px solid #1e2a45" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Txt size={5} color={CRYPTO.muted}>Total Balance</Txt>
            <span style={{ fontSize: 5, fontWeight: 600, color: CRYPTO.green, background: "rgba(34,197,94,0.15)", padding: "2px 6px", borderRadius: 99 }}>+5.54%</span>
          </div>
          <Txt size={16} weight={700} color="#fff" style={{ display: "block", marginTop: 4, letterSpacing: -0.5 }}>
            $122,245.55
          </Txt>
          <div style={{ display: "flex", gap: 6, marginTop: 10 }}>
            {["Deposit", "Withdraw", "Transfer", "Exchange"].map((a) => (
              <div key={a} style={{ flex: 1, textAlign: "center" }}>
                <div style={{ width: 28, height: 28, borderRadius: 10, background: "rgba(59,130,246,0.2)", margin: "0 auto 3px", border: "1px solid rgba(59,130,246,0.3)" }} />
                <Txt size={4.5} color={CRYPTO.muted}>{a}</Txt>
              </div>
            ))}
          </div>
        </div>
        <Txt size={5} weight={600} color="#fff" style={{ display: "block", margin: "10px 0 6px" }}>Favorites</Txt>
        <div style={{ display: "flex", gap: 6 }}>
          {[
            { n: "ETH", p: "$29,732", c: "+0.35%", bg: "#627eea" },
            { n: "BTC", p: "$45,232", c: "+22.3%", bg: "#f7931a" },
          ].map((c) => (
            <div key={c.n} style={{ flex: 1, background: CRYPTO.card, borderRadius: 10, padding: 8, border: "1px solid #1e2a45" }}>
              <CoinIcon letter={c.n[0]} bg={c.bg} />
              <Txt size={6} weight={600} color="#fff" style={{ display: "block", marginTop: 4 }}>{c.n}</Txt>
              <Txt size={5} color="#fff">{c.p}</Txt>
              <Txt size={5} color={CRYPTO.green}>{c.c}</Txt>
            </div>
          ))}
        </div>
        <Txt size={5} weight={600} color="#fff" style={{ display: "block", margin: "8px 0 4px" }}>All Cryptos</Txt>
        {[
          { n: "Bitcoin", sym: "BTC", p: "$29,732.54", bg: "#f7931a" },
          { n: "Ethereum", sym: "ETH", p: "$2,022.30", bg: "#627eea" },
          { n: "XRP", sym: "XRP", p: "$0.62", bg: "#23292f" },
        ].map((row) => (
          <div key={row.sym} style={{ display: "flex", alignItems: "center", gap: 8, padding: "5px 0", borderBottom: "1px solid #1e2a45" }}>
            <CoinIcon letter={row.sym[0]} bg={row.bg} />
            <div style={{ flex: 1 }}>
              <Txt size={6} weight={600} color="#fff">{row.n}</Txt>
              <Txt size={5} color={CRYPTO.muted}>{row.sym}</Txt>
            </div>
            <div style={{ width: 36 }}><Spark color={CRYPTO.green} /></div>
            <Txt size={6} weight={600} color="#fff">{row.p}</Txt>
          </div>
        ))}
      </div>
    </RefScreen>
  );
}

export function CryptoEthScreen() {
  return (
    <RefScreen bg={CRYPTO.bg} tabs={<RefTabs items={[{ label: "Home" }, { label: "Trade" }, { label: "Wallet" }]} active={1} barBg="#0a1020" borderColor="#1e2a45" activeColor={CRYPTO.accent} inactiveColor="#fff" />}>
      <div style={{ padding: "4px 10px" }}>
        <Txt size={6} weight={600} color="#fff">ETH</Txt>
        <Txt size={12} weight={700} color="#fff" style={{ display: "block" }}>$2,022.30</Txt>
        <Txt size={5} color={CRYPTO.green}>▲ $26.60 (2.05%)</Txt>
        <div style={{ marginTop: 8, height: 70, background: CRYPTO.card, borderRadius: 10, padding: 6, border: "1px solid #1e2a45" }}>
          <svg width="100%" height="100%" viewBox="0 0 140 50" preserveAspectRatio="none">
            <defs><linearGradient id="cg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={CRYPTO.accent} stopOpacity="0.4" /><stop offset="100%" stopColor={CRYPTO.accent} stopOpacity="0" /></linearGradient></defs>
            <path d="M0,40 L20,35 L40,38 L60,22 L80,28 L100,15 L120,20 L140,8 L140,50 L0,50Z" fill="url(#cg)" />
            <path d="M0,40 L20,35 L40,38 L60,22 L80,28 L100,15 L120,20 L140,8" fill="none" stroke={CRYPTO.accent} strokeWidth="1.5" />
          </svg>
        </div>
        <div style={{ display: "flex", gap: 3, marginTop: 6, flexWrap: "wrap" }}>
          {["1D", "1W", "1M", "1Y", "All"].map((t, i) => (
            <span key={t} style={{ fontSize: 5, padding: "3px 6px", borderRadius: 4, border: i === 3 ? "1px solid #fff" : "1px solid #1e2a45", color: "#fff", fontWeight: 600 }}>{t}</span>
          ))}
        </div>
        <div style={{ display: "flex", gap: 6, marginTop: 10 }}>
          <div style={{ flex: 1, padding: 10, borderRadius: 10, background: "#1a2035", textAlign: "center" }}><Txt size={6} weight={600} color="#fff">Buy</Txt></div>
          <div style={{ flex: 1, padding: 10, borderRadius: 10, background: CRYPTO.accent, textAlign: "center" }}><Txt size={6} weight={600} color="#fff">Sell</Txt></div>
        </div>
      </div>
    </RefScreen>
  );
}

/* ─── 2. Grocery (green / white) ─── */
const GROCERY = { green: "#22a559", bg: "#fff", muted: "#888" };

export function GroceryHomeScreen() {
  return (
    <RefScreen bg={GROCERY.bg} tabs={<RefTabs items={[{ label: "Home" }, { label: "Shop" }, { label: "Saved" }, { label: "Profile" }]} active={0} barBg="#fff" borderColor="#eee" activeColor={GROCERY.green} inactiveColor="#333" />}>
      <div style={{ background: GROCERY.green, padding: "8px 10px 28px", borderRadius: "0 0 16px 16px" }}>
        <div style={{ display: "flex", gap: 6, alignItems: "center", background: "#fff", borderRadius: 10, padding: "6px 8px" }}>
          <div style={{ width: 12, height: 12, borderRadius: "50%", border: "2px solid #ccc" }} />
          <Txt size={5} color="#aaa">Search groceries...</Txt>
        </div>
        <Txt size={8} weight={700} color="#fff" style={{ display: "block", marginTop: 8 }}>Find Your Daily Grocery</Txt>
        <div style={{ height: 36, marginTop: 6, borderRadius: 8, background: "linear-gradient(90deg,#4ade80,#86efac)", opacity: 0.9 }} />
      </div>
      <div style={{ padding: "0 10px", marginTop: -18 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 5 }}>
          {[
            { n: "Beef", c: "#fee2e2", badge: "" },
            { n: "Pepper", c: "#fef3c7", badge: "New" },
            { n: "Ginger", c: "#ffedd5", badge: "" },
            { n: "Apple", c: "#fce7f3", badge: "" },
          ].map((p) => (
            <div key={p.n} style={{ background: p.c, borderRadius: 10, padding: 6, textAlign: "center", position: "relative" }}>
              {p.badge && <span style={{ position: "absolute", top: 3, right: 3, fontSize: 4, background: "#ef4444", color: "#fff", padding: "1px 3px", borderRadius: 3 }}>{p.badge}</span>}
              <div style={{ height: 22, borderRadius: 6, background: "rgba(255,255,255,0.6)", marginBottom: 3 }} />
              <Txt size={5} weight={600} color="#333">{p.n}</Txt>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 8, background: "#14532d", borderRadius: 10, padding: 8, display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg,#4ade80,#22c55e)" }} />
          <Txt size={6} weight={600} color="#fff">Healthy & Fresh VEGETABLE</Txt>
        </div>
      </div>
    </RefScreen>
  );
}

export function GroceryBrowseScreen() {
  return (
    <RefScreen bg={GROCERY.bg} tabs={<RefTabs items={[{ label: "Home" }, { label: "Shop" }, { label: "Cart" }]} active={1} barBg="#fff" borderColor="#eee" activeColor={GROCERY.green} inactiveColor="#333" />}>
      <div style={{ padding: "6px 10px" }}>
        <Txt size={7} weight={700} color="#111">Groceries Collections</Txt>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginTop: 8 }}>
          {[
            { t: "Fresh Fruits", c: "#dcfce7", price: "$07.00" },
            { t: "Bakery", c: "#fef9c3", price: "$12.00" },
            { t: "Meat", c: "#fee2e2", price: "$24.00" },
            { t: "Dairy", c: "#e0f2fe", price: "$05.00" },
          ].map((cat) => (
            <div key={cat.t} style={{ background: cat.c, borderRadius: 12, padding: 8, position: "relative" }}>
              <div style={{ height: 40, borderRadius: 8, background: "rgba(255,255,255,0.7)", marginBottom: 6 }} />
              <Txt size={5.5} weight={600} color="#222">{cat.t}</Txt>
              <Txt size={5} color={GROCERY.green}>{cat.price}</Txt>
              <div style={{ position: "absolute", bottom: 8, right: 8, width: 16, height: 16, borderRadius: "50%", background: "#111", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Txt size={7} color="#fff">+</Txt>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RefScreen>
  );
}

/* ─── 3. Sports (dark + lime) ─── */
const SPORT = { bg: "#0f0f0f", card: "#1a1a1a", lime: "#c8ff00", muted: "#888" };

export function SportsHomeScreen() {
  return (
    <RefScreen bg={SPORT.bg} tabs={<RefTabs items={[{ label: "Home" }, { label: "Cal" }, { label: "Live" }, { label: "News" }, { label: "Profile" }]} active={0} barBg="#141414" borderColor="#2a2a2a" activeColor={SPORT.lime} inactiveColor="#fff" activeGlow={SPORT.lime} />}>
      <div style={{ padding: "2px 10px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <div style={{ width: 24, height: 24, borderRadius: "50%", background: "linear-gradient(135deg,#6366f1,#ec4899)" }} />
          <div><Txt size={5} color={SPORT.muted}>Hi Welcome 👋</Txt><Txt size={6.5} weight={600} color="#fff">Arisha Ireen</Txt></div>
        </div>
        <div style={{ display: "flex", gap: 4, marginBottom: 8, overflow: "hidden" }}>
          {[1, 2, 3, 4, 5].map((d) => (
            <div key={d} style={{ minWidth: 28, padding: "4px 6px", borderRadius: 8, background: d === 2 ? SPORT.lime : SPORT.card, textAlign: "center" }}>
              <Txt size={4.5} weight={600} color={d === 2 ? "#000" : SPORT.muted}>{d === 2 ? "Mon" : "Tue"}</Txt>
              <Txt size={5} weight={700} color={d === 2 ? "#000" : "#fff"}>{d + 2}</Txt>
            </div>
          ))}
        </div>
        <div style={{ background: SPORT.card, borderRadius: 14, padding: 10, border: "1px solid #2a2a2a", position: "relative" }}>
          <span style={{ position: "absolute", top: 8, right: 8, fontSize: 4, color: "#ef4444", fontWeight: 700 }}>● LIVE</span>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ textAlign: "center" }}><div style={{ width: 28, height: 28, borderRadius: "50%", background: "#6cabdd" }} /><Txt size={5} color="#fff">Man City</Txt></div>
            <Txt size={8} weight={700} color="#fff">2 : 1</Txt>
            <div style={{ textAlign: "center" }}><div style={{ width: 28, height: 28, borderRadius: "50%", background: "#ef0107" }} /><Txt size={5} color="#fff">Arsenal</Txt></div>
          </div>
          <div style={{ marginTop: 8, background: SPORT.lime, borderRadius: 8, padding: 6, textAlign: "center" }}><Txt size={6} weight={700} color="#000">Watch Now</Txt></div>
        </div>
        <div style={{ display: "flex", gap: 4, marginTop: 8 }}>
          {["Soccer", "NBA", "Tennis"].map((s, i) => (
            <span key={s} style={{ fontSize: 5, padding: "4px 8px", borderRadius: 99, background: i === 0 ? SPORT.lime : SPORT.card, color: i === 0 ? "#000" : "#fff", fontWeight: 600 }}>{s}</span>
          ))}
        </div>
      </div>
    </RefScreen>
  );
}

export function SportsNewsScreen() {
  return (
    <RefScreen bg={SPORT.bg} tabs={<RefTabs items={[{ label: "Home" }, { label: "Live" }, { label: "News" }]} active={2} barBg="#141414" borderColor="#2a2a2a" activeColor={SPORT.lime} inactiveColor="#fff" />}>
      <div style={{ padding: "4px 10px" }}>
        <Txt size={6} weight={600} color="#fff">Best Highlights</Txt>
        <div style={{ display: "flex", gap: 6, marginTop: 6 }}>
          {[1, 2].map((i) => (
            <div key={i} style={{ flex: 1, height: 56, borderRadius: 10, background: "linear-gradient(180deg, rgba(30,58,95,0.3) 0%, #0f0f0f 70%)", position: "relative", overflow: "hidden" }}>
              <span style={{ position: "absolute", top: 4, left: 4, fontSize: 4, background: "rgba(0,0,0,0.5)", color: "#fff", padding: "2px 4px", borderRadius: 4 }}>24k views</span>
              <Txt size={5} weight={600} color="#fff" style={{ position: "absolute", bottom: 4, left: 4, right: 4 }}>Final whistle fight!</Txt>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 8, background: SPORT.lime, borderRadius: 10, padding: 8 }}><Txt size={5.5} weight={700} color="#000">Subscribe Now — latest info →</Txt></div>
        <div style={{ display: "flex", gap: 4, marginTop: 8 }}>
          {["Premier League", "La Liga"].map((l, i) => (
            <span key={l} style={{ fontSize: 5, padding: "3px 8px", borderRadius: 99, background: i === 0 ? SPORT.lime : SPORT.card, color: i === 0 ? "#000" : "#fff", fontWeight: 600 }}>{l}</span>
          ))}
        </div>
        <div style={{ marginTop: 6, display: "flex", gap: 8, padding: 6, background: SPORT.card, borderRadius: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: "#333" }} />
          <div><Txt size={5.5} weight={600} color="#fff">Liverpool: Will Arne Slot&apos;s side win...</Txt><Txt size={4.5} color={SPORT.muted}>ESPN · 12h</Txt></div>
        </div>
      </div>
    </RefScreen>
  );
}

/* ─── 4. Real estate (light blue glass) ─── */
const ESTATE = { bg: "#f0f4f8", blue: "#4a9eff", card: "#fff" };

export function RealEstateHomeScreen() {
  return (
    <RefScreen bg={ESTATE.bg} tabs={<RefTabs items={[{ label: "Home" }, { label: "Saved" }, { label: "Discover" }, { label: "Profile" }]} active={0} barBg="rgba(255,255,255,0.9)" borderColor="#e5e7eb" activeColor={ESTATE.blue} inactiveColor="#333" />}>
      <div style={{ padding: "4px 10px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#cbd5e1" }} />
          <div><Txt size={5} color="#888">Hello, Alex</Txt><Txt size={7} weight={700} color="#111">Find Your Next Home</Txt></div>
        </div>
        <div style={{ display: "flex", gap: 4, marginTop: 8, background: "#e2e8f0", borderRadius: 8, padding: 3 }}>
          <span style={{ flex: 1, textAlign: "center", fontSize: 5, fontWeight: 600, background: ESTATE.blue, color: "#fff", padding: "4px 0", borderRadius: 6 }}>Rent</span>
          <span style={{ flex: 1, textAlign: "center", fontSize: 5, color: "#666", padding: "4px 0" }}>Buy</span>
        </div>
        <div style={{ marginTop: 6, display: "flex", gap: 6 }}>
          <div style={{ flex: 1, background: "#fff", borderRadius: 10, padding: "8px 10px", border: "1px solid #e5e7eb" }}><Txt size={5} color="#aaa">Search location...</Txt></div>
          <div style={{ width: 32, height: 32, borderRadius: 10, background: "#fff", border: "1px solid #e5e7eb" }} />
        </div>
        <Txt size={6} weight={600} color="#111" style={{ display: "block", margin: "10px 0 6px" }}>Available Properties</Txt>
        <div style={{ background: ESTATE.card, borderRadius: 14, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
          <div style={{ height: 56, background: "linear-gradient(135deg,#94a3b8,#64748b)", position: "relative" }}>
            <span style={{ position: "absolute", top: 6, left: 6, fontSize: 4, background: ESTATE.blue, color: "#fff", padding: "2px 6px", borderRadius: 4, fontWeight: 600 }}>Apartment</span>
            <span style={{ position: "absolute", top: 6, right: 6, fontSize: 8 }}>♥</span>
          </div>
          <div style={{ padding: 8 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Txt size={6.5} weight={700} color="#111">Lakeside Luxury Home</Txt>
              <Txt size={6.5} weight={700} color="#111">$897.5K</Txt>
            </div>
            <Txt size={4.5} color="#888">Washington Square South, NYC</Txt>
            <Txt size={4.5} color="#666" style={{ marginTop: 4 }}>5 Bed · 3 Bath · 2,400 sqft</Txt>
          </div>
        </div>
      </div>
    </RefScreen>
  );
}

export function RealEstateMapScreen() {
  return (
    <RefScreen bg="#dce8f5" tabs={<RefTabs items={[{ label: "Home" }, { label: "Map" }, { label: "Profile" }]} active={1} barBg="rgba(255,255,255,0.95)" borderColor="#e5e7eb" activeColor={ESTATE.blue} inactiveColor="#333" />}>
      <div style={{ padding: 6, height: "100%", position: "relative" }}>
        <div style={{ background: "#fff", borderRadius: 10, padding: "6px 10px", marginBottom: 6 }}><Txt size={5} color="#aaa">Search location...</Txt></div>
        <svg width="100%" height="55%" viewBox="0 0 200 120">
          <rect width="200" height="120" fill="#c5d9eb" />
          {[0, 1, 2, 3].map((i) => <rect key={i} x={i * 50} y={20} width="40" height="30" fill="#b8cce0" rx="2" />)}
          <path d="M30,100 Q80,60 150,30" stroke={ESTATE.blue} strokeWidth="3" fill="none" />
          <circle cx="150" cy="30" r="6" fill={ESTATE.blue} stroke="#fff" strokeWidth="2" />
        </svg>
        <div style={{ position: "absolute", bottom: 4, left: 8, right: 8, background: "#fff", borderRadius: 12, padding: 8, display: "flex", gap: 8, boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }}>
          <div style={{ width: 40, height: 40, borderRadius: 8, background: "linear-gradient(135deg,#94a3b8,#64748b)" }} />
          <div style={{ flex: 1 }}>
            <Txt size={6} weight={700} color="#111">Lakeside View</Txt>
            <Txt size={4.5} color="#888">320 Boulder, Colorado</Txt>
            <Txt size={6} weight={700} color="#111">$875,000</Txt>
          </div>
        </div>
      </div>
    </RefScreen>
  );
}

/* ─── 5. Banking mint (Spenny) ─── */
export function BankingMintScreen() {
  return (
    <RefScreen bg="linear-gradient(180deg,#e8faf3,#f8fffc)" tabs={<RefTabs items={[{ label: "Home" }, { label: "Stats" }, { label: "Wallet" }]} active={0} barBg="#fff" borderColor="#e5e7eb" activeColor="#10b981" inactiveColor="#333" />}>
      <div style={{ padding: "4px 10px" }}>
        <Txt size={7} weight={700} color="#111">Welcome</Txt>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg,#6ee7b7,#34d399)" }} />
          <div><Txt size={6} weight={600} color="#111">Hi, Akbha!</Txt><Txt size={4.5} color="#888">akbha@gmail.com</Txt></div>
        </div>
        <div style={{ marginTop: 8, borderRadius: 16, padding: 12, background: "linear-gradient(135deg,#a7f3d0,#6ee7b7)", position: "relative", overflow: "hidden" }}>
          <Txt size={5} weight={600} color="#065f46">Spenny</Txt>
          <Txt size={8} weight={600} color="#064e3b" style={{ display: "block", marginTop: 8, letterSpacing: 1 }}>6789 4567 5432 8903</Txt>
          <Txt size={5} color="#065f46" style={{ display: "block", marginTop: 8 }}>Current balance</Txt>
          <Txt size={14} weight={700} color="#064e3b">$5,000.14</Txt>
          <Txt size={6} weight={700} color="#065f46" style={{ position: "absolute", bottom: 10, right: 10 }}>MC</Txt>
        </div>
        <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
          <div style={{ flex: 1, background: "#fff", borderRadius: 99, padding: "8px 0", textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}><Txt size={5.5} weight={600} color="#111">Send</Txt></div>
          <div style={{ flex: 1, background: "#fff", borderRadius: 99, padding: "8px 0", textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}><Txt size={5.5} weight={600} color="#111">Request</Txt></div>
        </div>
        <Txt size={5} weight={600} color="#111" style={{ display: "block", margin: "10px 0 4px" }}>Latest Transaction</Txt>
        {[
          { n: "FastOrder", a: "-$45.80", c: "#ef4444" },
          { n: "Apple Meal", a: "-$9.70", c: "#111" },
        ].map((tx) => (
          <div key={tx.n} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0", borderBottom: "1px solid #eee" }}>
            <div style={{ width: 24, height: 24, borderRadius: "50%", background: tx.c }} />
            <div style={{ flex: 1 }}><Txt size={5.5} weight={600} color="#111">{tx.n}</Txt><Txt size={4.5} color="#888">15 Sep · 4:20 pm</Txt></div>
            <Txt size={5.5} weight={600} color="#111">{tx.a}</Txt>
          </div>
        ))}
      </div>
    </RefScreen>
  );
}

/* ─── 6. Airline (glass white) ─── */
export function AirlineSearchScreen() {
  return (
    <RefScreen bg="#eef1f5" tabs={<RefTabs items={[{ label: "Search" }, { label: "Trips" }, { label: "Profile" }]} active={0} barBg="#fff" borderColor="#e5e7eb" activeColor="#111" inactiveColor="#333" />}>
      <div style={{ padding: "4px 10px" }}>
        <Txt size={8} weight={700} color="#111">Prepare for Takeoff</Txt>
        <div style={{ marginTop: 8, background: "#fff", borderRadius: 14, padding: 10, boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
          <Txt size={5} color="#888">From</Txt><Txt size={6} weight={600} color="#111">Tokyo, JP</Txt>
          <Txt size={5} color="#888" style={{ marginTop: 4 }}>To</Txt><Txt size={6} weight={600} color="#111">TYO NRT</Txt>
          <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
            <Txt size={5} color="#666">Aug, 6 Sep · 3 people</Txt>
          </div>
          <div style={{ marginTop: 8, background: "#111", borderRadius: 99, padding: 8, textAlign: "center" }}><Txt size={6} weight={600} color="#fff">Search for Flights</Txt></div>
        </div>
        <Txt size={5.5} weight={600} color="#111" style={{ display: "block", margin: "10px 0 6px" }}>Select your Airplane</Txt>
        <div style={{ background: "#fff", borderRadius: 12, padding: 8, boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div><Txt size={6} weight={700} color="#111">07:47</Txt><Txt size={4.5} color="#888">CGK</Txt></div>
            <div style={{ textAlign: "center" }}><Txt size={4.5} color="#888">5h 43m</Txt><div style={{ width: 40, height: 1, background: "#ccc", margin: "2px auto" }} /></div>
            <div style={{ textAlign: "right" }}><Txt size={6} weight={700} color="#111">14:30</Txt><Txt size={4.5} color="#888">NRT</Txt></div>
          </div>
          <Txt size={5} weight={600} color="#111" style={{ marginTop: 4 }}>$500 – $600</Txt>
        </div>
      </div>
    </RefScreen>
  );
}

export function AirlineSeatScreen() {
  return (
    <RefScreen bg="#eef1f5" tabs={<RefTabs items={[{ label: "Seats" }, { label: "Pay" }]} active={0} barBg="#fff" borderColor="#e5e7eb" activeColor="#111" inactiveColor="#333" />}>
      <div style={{ padding: "4px 10px" }}>
        <Txt size={7} weight={700} color="#111">Pick Your Seat</Txt>
        <Txt size={5} color="#666">SFO → JFK · Economy</Txt>
        <div style={{ marginTop: 8, display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 3, justifyItems: "center" }}>
          {Array.from({ length: 24 }).map((_, i) => {
            const sel = i === 7 || i === 8;
            const taken = i === 2 || i === 14;
            return (
              <div
                key={i}
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 4,
                  background: sel ? "#111" : taken ? "#d1d5db" : "#fff",
                  border: "1px solid #ccc",
                }}
              />
            );
          })}
        </div>
        <div style={{ marginTop: 10, background: "#111", borderRadius: 99, padding: 8, textAlign: "center" }}><Txt size={6} weight={600} color="#fff">Download Ticket</Txt></div>
      </div>
    </RefScreen>
  );
}

/* ─── 7. Jewelry (beige + orange) ─── */
const JEWEL = { bg: "#f5f0e8", orange: "#e85d04" };

export function JewelryHomeScreen() {
  return (
    <RefScreen bg={JEWEL.bg} tabs={<RefTabs items={[{ label: "Home" }, { label: "Liked" }, { label: "AI" }, { label: "Profile" }]} active={0} barBg="#1c1c1c" borderColor="#333" activeColor={JEWEL.orange} inactiveColor="#fff" />}>
      <div style={{ padding: "4px 10px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#d4a574" }} />
            <Txt size={6} weight={600} color="#111">Hi Masud A.</Txt>
          </div>
          <div style={{ width: 20, height: 20, borderRadius: 6, background: "#fff" }} />
        </div>
        <div style={{ marginTop: 8, display: "flex", alignItems: "center", background: "#fff", borderRadius: 99, padding: "6px 8px" }}>
          <div style={{ width: 22, height: 22, borderRadius: "50%", background: JEWEL.orange, marginRight: 6 }} />
          <Txt size={5} color="#aaa">Search jewelry...</Txt>
        </div>
        <div style={{ display: "flex", gap: 6, marginTop: 8, overflow: "hidden" }}>
          {["Necklaces", "Earrings", "Rings"].map((c, i) => (
            <div key={c} style={{ textAlign: "center", minWidth: 44 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: ["#fce7f3", "#fef3c7", "#e0e7ff"][i], border: "2px solid #fff" }} />
              <Txt size={4.5} color="#555">{c}</Txt>
            </div>
          ))}
        </div>
        <Txt size={6} weight={600} color="#111" style={{ marginTop: 8 }}>Popular Products</Txt>
        <div style={{ display: "flex", gap: 6, marginTop: 6 }}>
          {[
            { n: "Necklaces", p: "$220", g: "linear-gradient(180deg,#1a1a1a,#333)" },
            { n: "Earrings", p: "$189", g: "linear-gradient(180deg,#fef3c7,#fde68a)" },
          ].map((p) => (
            <div key={p.n} style={{ flex: 1, borderRadius: 14, overflow: "hidden", background: "#fff" }}>
              <div style={{ height: 52, background: p.g, position: "relative" }}>
                <div style={{ position: "absolute", bottom: 6, right: 6, width: 18, height: 18, borderRadius: "50%", background: "#111" }} />
              </div>
              <div style={{ padding: 6 }}>
                <Txt size={5.5} weight={600} color="#111">{p.n}</Txt>
                <Txt size={6} weight={700} color={JEWEL.orange}>{p.p}</Txt>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RefScreen>
  );
}

export function JewelrySearchScreen() {
  return (
    <RefScreen bg={JEWEL.bg} tabs={<RefTabs items={[{ label: "Home" }, { label: "Search" }]} active={1} barBg="#1c1c1c" borderColor="#333" activeColor={JEWEL.orange} inactiveColor="#fff" />}>
      <div style={{ padding: "6px 10px" }}>
        <Txt size={7} weight={700} color="#111">Searching</Txt>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginTop: 8 }}>
          {[121, 98, 220, 156].map((price, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 12, padding: 6 }}>
              <div style={{ height: 44, borderRadius: 8, background: "linear-gradient(135deg,#f5f5f4,#e7e5e4)", position: "relative" }}>
                <span style={{ position: "absolute", top: 4, right: 4, fontSize: 6 }}>♡</span>
              </div>
              <Txt size={5.5} weight={600} color="#111">Necklace</Txt>
              <Txt size={6} weight={700} color={JEWEL.orange}>${price}</Txt>
              <div style={{ marginTop: 4, background: JEWEL.orange, borderRadius: 99, padding: "4px 0", textAlign: "center" }}><Txt size={4.5} weight={600} color="#fff">Add to Cart</Txt></div>
            </div>
          ))}
        </div>
      </div>
    </RefScreen>
  );
}

/* ─── 8. Jewelry AI Scan ─── */
export function JewelryAIScanScreen() {
  return (
    <RefScreen bg={JEWEL.bg} tabs={<RefTabs items={[{ label: "Home" }, { label: "Liked" }, { label: "AI" }, { label: "Profile" }]} active={2} barBg="#1c1c1c" borderColor="#333" activeColor={JEWEL.orange} inactiveColor="#fff" />}>
      <div style={{ padding: "6px 10px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <div style={{ width: 20, height: 20, borderRadius: 6, background: "rgba(0,0,0,0.08)" }} />
          <Txt size={7} weight={700} color="#111">AI Scan</Txt>
          <div style={{ width: 20, height: 20, borderRadius: 6, background: "rgba(0,0,0,0.08)" }} />
        </div>
        {/* Camera viewfinder */}
        <div style={{ height: 116, borderRadius: 14, overflow: "hidden", background: "linear-gradient(160deg,#c9956a,#8b5e3c,#c49a6c)", position: "relative" }}>
          {/* Head silhouette */}
          <div style={{ position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)", width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg,#d4a574,#b07848)" }} />
          {/* Shoulders */}
          <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: 62, height: 70, background: "linear-gradient(180deg,#c49a6c,#a07550)", borderRadius: "40% 40% 0 0" }} />
          {/* Necklace hint */}
          <div style={{ position: "absolute", top: 50, left: "36%", right: "36%", height: 2, background: "rgba(255,210,100,0.8)", borderRadius: 1 }} />
          {/* TL corner bracket */}
          <div style={{ position: "absolute", top: 8, left: 8, width: 14, height: 14, borderTop: "2.5px solid rgba(255,255,255,0.85)", borderLeft: "2.5px solid rgba(255,255,255,0.85)" }} />
          {/* TR corner bracket */}
          <div style={{ position: "absolute", top: 8, right: 8, width: 14, height: 14, borderTop: "2.5px solid rgba(255,255,255,0.85)", borderRight: "2.5px solid rgba(255,255,255,0.85)" }} />
          {/* BL corner bracket */}
          <div style={{ position: "absolute", bottom: 8, left: 8, width: 14, height: 14, borderBottom: "2.5px solid rgba(255,255,255,0.85)", borderLeft: "2.5px solid rgba(255,255,255,0.85)" }} />
          {/* BR corner bracket */}
          <div style={{ position: "absolute", bottom: 8, right: 8, width: 14, height: 14, borderBottom: "2.5px solid rgba(255,255,255,0.85)", borderRight: "2.5px solid rgba(255,255,255,0.85)" }} />
          {/* Scan line */}
          <div style={{ position: "absolute", top: "54%", left: 14, right: 14, height: 1, background: "rgba(232,93,4,0.7)" }} />
        </div>
        {/* Circular progress arc — 70% */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
          <div style={{ position: "relative", width: 56, height: 56 }}>
            <svg width="56" height="56" viewBox="0 0 56 56">
              <circle cx="28" cy="28" r="22" fill="none" stroke="#e5ddd0" strokeWidth="3" />
              {/* 70% of circumference 2π×22≈138.2 → 96.7 */}
              <circle cx="28" cy="28" r="22" fill="none" stroke={JEWEL.orange} strokeWidth="3" strokeDasharray="96.7 138.2" strokeLinecap="round" transform="rotate(-90 28 28)" />
            </svg>
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Txt size={8} weight={700} color={JEWEL.orange}>70%</Txt>
            </div>
          </div>
        </div>
        <Txt size={5.5} weight={600} color="#555" style={{ display: "block", textAlign: "center", marginTop: 6 }}>Please, hold your phone</Txt>
        <Txt size={4.5} color="#aaa" style={{ display: "block", textAlign: "center", marginTop: 2 }}>Identifying jewelry...</Txt>
      </div>
    </RefScreen>
  );
}

/* ─── 9. Real estate detail ─── */
export function RealEstateDetailScreen() {
  return (
    <RefScreen bg="#f8f9fb" tabs={<RefTabs items={[{ label: "Home" }, { label: "Saved" }, { label: "Detail" }, { label: "Profile" }]} active={2} barBg="rgba(255,255,255,0.9)" borderColor="#e5e7eb" activeColor={ESTATE.blue} inactiveColor="#333" />}>
      <div style={{ padding: "4px 10px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
          <div style={{ width: 18, height: 18, borderRadius: 5, background: "#e5e7eb" }} />
          <Txt size={7} weight={700} color="#111">Appartment 48</Txt>
        </div>
        <Txt size={4.5} color="#888" style={{ display: "block", marginBottom: 6 }}>12 Floor · Premium Residence</Txt>
        {/* Photo */}
        <div style={{ height: 70, borderRadius: 12, background: "linear-gradient(135deg,#94a3b8,#64748b)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,transparent 55%,rgba(0,0,0,0.28))" }} />
          <div style={{ position: "absolute", top: 6, right: 6, background: "rgba(255,255,255,0.92)", borderRadius: 5, padding: "2px 6px" }}>
            <Txt size={4.5} weight={600} color="#111">1 / 6</Txt>
          </div>
          <div style={{ position: "absolute", bottom: 6, left: 8 }}>
            <Txt size={5} weight={600} color="#fff">Master Bedroom</Txt>
          </div>
        </div>
        {/* Valuation */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: 8 }}>
          <div>
            <Txt size={4.5} color="#888" style={{ display: "block" }}>Property Value</Txt>
            <Txt size={14} weight={700} color="#111">$6.49M</Txt>
          </div>
          <div style={{ background: "#f0f4f8", borderRadius: 8, padding: "4px 8px", textAlign: "right" }}>
            <Txt size={4.5} color="#888" style={{ display: "block" }}>Floor Plan</Txt>
            <Txt size={5} weight={700} color={ESTATE.blue}>Exclusive</Txt>
          </div>
        </div>
        {/* Room tags */}
        <div style={{ display: "flex", gap: 4, marginTop: 6 }}>
          {["Kitchen", "Common Space", "Bedroom"].map((tag, i) => (
            <span key={tag} style={{ fontSize: 4.5, padding: "3px 7px", borderRadius: 99, background: i === 0 ? ESTATE.blue : "#f0f4f8", color: i === 0 ? "#fff" : "#555", fontWeight: 600 }}>{tag}</span>
          ))}
        </div>
        {/* Amenity row */}
        <div style={{ display: "flex", gap: 5, marginTop: 8 }}>
          {[["3", "Bedrooms"], ["2", "Bathrooms"], ["1,840", "sqft"]].map(([val, label]) => (
            <div key={label} style={{ flex: 1, background: "#f0f4f8", borderRadius: 8, padding: "5px 0", textAlign: "center" }}>
              <Txt size={6} weight={700} color="#111">{val}</Txt>
              <Txt size={4} color="#888" style={{ display: "block" }}>{label}</Txt>
            </div>
          ))}
        </div>
      </div>
    </RefScreen>
  );
}

/* ─── 10. Sports – Arsenal team screen ─── */
export function SportsTeamScreen() {
  return (
    <RefScreen bg={SPORT.bg} tabs={<RefTabs items={[{ label: "Home" }, { label: "Cal" }, { label: "Live" }, { label: "News" }, { label: "Team" }]} active={4} barBg="#141414" borderColor="#2a2a2a" activeColor={SPORT.lime} inactiveColor="#fff" activeGlow={SPORT.lime} />}>
      <div style={{ padding: "2px 10px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          <div style={{ width: 18, height: 18, borderRadius: 5, background: SPORT.card }} />
          <Txt size={7} weight={700} color="#fff">Arsenal</Txt>
        </div>
        {/* Club card */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, padding: "6px 8px", background: SPORT.card, borderRadius: 12, border: "1px solid #2a2a2a" }}>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#ef0107", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <div style={{ width: 16, height: 16, borderRadius: "50%", background: "rgba(255,255,255,0.18)", border: "1.5px solid rgba(255,255,255,0.4)" }} />
          </div>
          <div>
            <Txt size={6} weight={700} color="#fff">Arsenal F.C.</Txt>
            <Txt size={4.5} color={SPORT.muted} style={{ display: "block" }}>Premier League · London</Txt>
          </div>
        </div>
        {/* Inner tab strip */}
        <div style={{ display: "flex", background: SPORT.card, borderRadius: 8, padding: 2, marginBottom: 8, border: "1px solid #2a2a2a" }}>
          {["Overview", "Matches", "Players", "News"].map((t, i) => (
            <div key={t} style={{ flex: 1, textAlign: "center", padding: "4px 0", borderRadius: 6, background: i === 1 ? SPORT.lime : "transparent" }}>
              <Txt size={4} weight={600} color={i === 1 ? "#000" : SPORT.muted}>{t}</Txt>
            </div>
          ))}
        </div>
        {/* Live match card */}
        <div style={{ background: SPORT.card, borderRadius: 12, padding: "8px 10px", border: "1px solid #2a2a2a", marginBottom: 6 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }}>
            <Txt size={4.5} color={SPORT.muted}>Premier League</Txt>
            <span style={{ fontSize: 4, color: "#ef4444", fontWeight: 700, background: "rgba(239,68,68,0.12)", padding: "2px 5px", borderRadius: 4 }}>● LIVE 56:19</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#ef0107" }} />
              <Txt size={5.5} weight={600} color="#fff">Arsenal</Txt>
            </div>
            <Txt size={10} weight={700} color="#fff">2:0</Txt>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <Txt size={5.5} weight={600} color="#fff">Leicester</Txt>
              <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#0053a0" }} />
            </div>
          </div>
        </div>
        {/* Recent result */}
        <div style={{ background: SPORT.card, borderRadius: 10, padding: "6px 8px", display: "flex", alignItems: "center", gap: 8, border: "1px solid #2a2a2a" }}>
          <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#ef0107", flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <Txt size={5} weight={600} color="#fff">Arsenal 3 – 1 Tottenham</Txt>
            <Txt size={4} color={SPORT.muted}>Premier League · 14 May</Txt>
          </div>
          <span style={{ fontSize: 5, color: SPORT.lime, fontWeight: 700, background: "rgba(200,255,0,0.12)", padding: "2px 5px", borderRadius: 4 }}>W</span>
        </div>
      </div>
    </RefScreen>
  );
}

/* ─── 11. Grocery detail ─── */
export function GroceryDetailScreen() {
  return (
    <RefScreen bg={GROCERY.bg} tabs={<RefTabs items={[{ label: "Home" }, { label: "Shop" }, { label: "Cart" }, { label: "Profile" }]} active={1} barBg="#fff" borderColor="#eee" activeColor={GROCERY.green} inactiveColor="#333" />}>
      <div style={{ padding: "4px 10px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
          <div style={{ width: 18, height: 18, borderRadius: 5, background: "#f3f4f6" }} />
          <Txt size={7} weight={700} color="#111">Details</Txt>
        </div>
        {/* Product image */}
        <div style={{ height: 88, borderRadius: 14, background: "linear-gradient(135deg,#bbf7d0,#86efac)", position: "relative", overflow: "hidden", marginBottom: 8 }}>
          <div style={{ position: "absolute", top: 7, right: 7, background: GROCERY.green, borderRadius: 6, padding: "3px 7px" }}>
            <Txt size={5} weight={700} color="#fff">10% Off</Txt>
          </div>
          {/* Vegetable shapes */}
          <div style={{ position: "absolute", bottom: -4, left: "50%", transform: "translateX(-50%)", width: 44, height: 66, background: "linear-gradient(170deg,#15803d,#22c55e)", borderRadius: "50% 50% 30% 30%" }} />
          <div style={{ position: "absolute", bottom: 28, left: "36%", width: 12, height: 34, background: "#15803d", borderRadius: 6, transform: "rotate(-22deg)" }} />
        </div>
        {/* Title + price */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Txt size={7.5} weight={700} color="#111">Fresh Vegetables</Txt>
          <Txt size={9} weight={700} color={GROCERY.green}>$08.00</Txt>
        </div>
        {/* Stats */}
        <div style={{ display: "flex", gap: 5, marginTop: 7 }}>
          {[["32g", "Active"], ["129g", "Total"], ["4", "Servings"], ["52", "Calories"]].map(([val, label]) => (
            <div key={label} style={{ flex: 1, background: "#f9fafb", borderRadius: 8, padding: "5px 0", textAlign: "center", border: "1px solid #f0f0f0" }}>
              <Txt size={5.5} weight={700} color="#111">{val}</Txt>
              <Txt size={4} color={GROCERY.muted} style={{ display: "block" }}>{label}</Txt>
            </div>
          ))}
        </div>
        {/* Description */}
        <Txt size={4.5} color="#888" style={{ display: "block", marginTop: 6, lineHeight: 1.5 }}>Farm-fresh organic produce packed with vitamins and minerals. Ideal for healthy meals.</Txt>
        {/* Buy Now */}
        <div style={{ marginTop: 8, background: GROCERY.green, borderRadius: 99, padding: "9px 0", textAlign: "center" }}>
          <Txt size={6} weight={700} color="#fff">Buy Now</Txt>
        </div>
      </div>
    </RefScreen>
  );
}
