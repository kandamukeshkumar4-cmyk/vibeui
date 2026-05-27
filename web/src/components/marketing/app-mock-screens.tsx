import { mock } from "./mock-tokens";
import {
  ActivityRings,
  CreditCardVisual,
  H,
  Ico,
  Icons,
  ImageHero,
  MapCanvas,
  Pill,
  QuickAction,
  Screen,
  Stars,
  TabBar,
  T,
  TxRow,
} from "./mock-ui-primitives";

const { cream, charcoal, muted, white, offWhite, charcoal4, border, font } = mock;

const financeTabs = [
  { icon: <Ico d={Icons.home} />, label: "Home" },
  { icon: <Ico d={Icons.card} />, label: "Cards" },
  { icon: <Ico d={Icons.chart} />, label: "Insights" },
  { icon: <Ico d={Icons.user} />, label: "Profile" },
];

export function FinanceScreen() {
  return (
    <Screen bg={cream} tabs={<TabBar items={financeTabs} active={0} />}>
      <div style={{ padding: "4px 0 0" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 12px 8px",
          }}
        >
          <div>
            <T size={5} weight={600}>
              MERIDIAN
            </T>
            <H size={11}>Good morning, Alex</H>
          </div>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 14,
              background: `linear-gradient(135deg, ${charcoal}, #444)`,
              border: `2px solid ${white}`,
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            }}
          />
        </div>

        <CreditCardVisual />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "12px 16px 8px",
          }}
        >
          <QuickAction label="Send" icon={<Ico d="M5 12h14M12 5l7 7-7 7" />} />
          <QuickAction label="Request" icon={<Ico d="M12 5v14M5 12h14" />} />
          <QuickAction label="Pay" icon={<Ico d={Icons.card} />} />
          <QuickAction label="More" icon={<Ico d="M6 12h.01M12 12h.01M18 12h.01" />} />
        </div>

        <div style={{ padding: "0 12px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 4,
            }}
          >
            <T size={5} weight={600}>
              RECENT
            </T>
            <T size={5} weight={600} color={charcoal}>
              See all
            </T>
          </div>
          <div
            style={{
              background: white,
              borderRadius: 12,
              border: `1px solid ${border}`,
              padding: "2px 10px",
              boxShadow: "0 4px 16px rgba(28,28,28,0.05)",
            }}
          >
            <TxRow brand="WF" brandColor="#1a7f4b" title="Whole Foods" sub="Groceries · Today" amount="-$84.20" />
            <TxRow brand="ST" brandColor="#635bff" title="Stripe Payout" sub="Income · Yesterday" amount="+$3,200" positive />
            <TxRow brand="SB" brandColor="#00704a" title="Starbucks" sub="Food · Mon" amount="-$6.40" />
          </div>
        </div>
      </div>
    </Screen>
  );
}

export function MobilityScreen() {
  return (
    <Screen
      bg={charcoal}
      tabs={
        <TabBar
          dark
          active={0}
          items={[
            { icon: <Ico d={Icons.map} color={offWhite} />, label: "Ride" },
            { icon: <Ico d={Icons.car} color={offWhite} />, label: "Activity" },
            { icon: <Ico d={Icons.user} color={offWhite} />, label: "Account" },
          ]}
        />
      }
    >
      <div style={{ position: "relative", height: "100%" }}>
        <div style={{ height: "55%" }}>
          <MapCanvas />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: white,
            borderRadius: "16px 16px 0 0",
            padding: "10px 12px 12px",
            boxShadow: "0 -8px 32px rgba(0,0,0,0.2)",
          }}
        >
          <div style={{ width: 32, height: 3, background: border, borderRadius: 2, margin: "0 auto 8px" }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Pill dark>4 min</Pill>
            <T size={5} weight={600} color={muted}>
              Lane Black · 4.98 ★
            </T>
          </div>
          <H size={10} style={{ marginTop: 4 }}>
            Union Square → JFK T4
          </H>
          <div style={{ marginTop: 10, height: 4, borderRadius: 2, background: charcoal4, overflow: "hidden" }}>
            <div style={{ width: "72%", height: "100%", background: charcoal, borderRadius: 2 }} />
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 10, alignItems: "center" }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: "linear-gradient(145deg, #e8e4dc, #c4bfb6)",
                border: `1px solid ${border}`,
              }}
            />
            <div style={{ flex: 1 }}>
              <T size={6.5} weight={600} color={charcoal}>
                Tesla Model Y
              </T>
              <T size={5}>Silver · ABC-2847</T>
            </div>
            <div
              style={{
                padding: "8px 12px",
                background: charcoal,
                color: offWhite,
                borderRadius: 8,
                fontSize: 6,
                fontWeight: 600,
                fontFamily: font,
              }}
            >
              Contact
            </div>
          </div>
        </div>
      </div>
    </Screen>
  );
}

export function TravelScreen() {
  return (
    <Screen
      bg={cream}
      tabs={
        <TabBar
          active={1}
          items={[
            { icon: <Ico d={Icons.plane} />, label: "Trips" },
            { icon: <Ico d={Icons.search} />, label: "Explore" },
            { icon: <Ico d={Icons.user} />, label: "Profile" },
          ]}
        />
      }
    >
      <ImageHero
        height={78}
        gradient="linear-gradient(160deg, #87CEEB 0%, #E8B89D 55%, #D4A574 100%)"
        overlay="linear-gradient(180deg, transparent 40%, rgba(28,28,28,0.35) 100%)"
      >
        <div style={{ position: "absolute", bottom: 10, left: 10 }}>
          <Pill>Trip to Tokyo</Pill>
        </div>
      </ImageHero>
      <div style={{ padding: "8px 12px 0" }}>
        <div
          style={{
            background: white,
            borderRadius: 12,
            border: `1px solid ${border}`,
            overflow: "hidden",
            boxShadow: "0 8px 24px rgba(28,28,28,0.08)",
          }}
        >
          <div
            style={{
              background: charcoal,
              padding: "8px 10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <T size={5} weight={600} color={offWhite}>
              JAPAN AIRLINES
            </T>
            <T size={5} color="rgba(255,255,255,0.6)">
              JL 001
            </T>
          </div>
          <div style={{ padding: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div>
                <H size={14}>SFO</H>
                <T size={5}>11:40 AM</T>
              </div>
              <T size={5}>11h 20m</T>
              <div style={{ textAlign: "right" }}>
                <H size={14}>NRT</H>
                <T size={5}>3:00 PM+1</T>
              </div>
            </div>
            <div
              style={{
                marginTop: 8,
                paddingTop: 8,
                borderTop: `1px dashed ${border}`,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <T size={5}>Gate B12 · Seat 14A</T>
              <Pill>On time</Pill>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
          {[
            { t: "Hotel", sub: "Park Hyatt", c: "#8b7355" },
            { t: "Car", sub: "SUV", c: charcoal },
            { t: "eSIM", sub: "5GB", c: mock.success },
          ].map((x) => (
            <div
              key={x.t}
              style={{
                flex: 1,
                background: white,
                borderRadius: 10,
                border: `1px solid ${border}`,
                padding: 8,
              }}
            >
              <div style={{ width: "100%", height: 24, borderRadius: 6, background: x.c, opacity: 0.85, marginBottom: 4 }} />
              <T size={5} weight={600} color={charcoal}>
                {x.t}
              </T>
              <T size={5}>{x.sub}</T>
            </div>
          ))}
        </div>
      </div>
    </Screen>
  );
}

export function DiningScreen() {
  return (
    <Screen
      bg={white}
      tabs={
        <TabBar
          active={0}
          items={[
            { icon: <Ico d={Icons.utensils} />, label: "Dine" },
            { icon: <Ico d={Icons.heart} />, label: "Saved" },
            { icon: <Ico d={Icons.search} />, label: "Search" },
          ]}
        />
      }
    >
      <ImageHero
        height={88}
        gradient="linear-gradient(180deg, #2c1810 0%, #5c3d2e 40%, #8b6914 100%)"
        overlay="linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.55) 100%)"
      >
        <div style={{ position: "absolute", bottom: 10, left: 10, right: 10 }}>
          <H size={13} style={{ color: white }}>
            Carbone
          </H>
          <Stars rating={4.9} light />
        </div>
      </ImageHero>
      <div style={{ padding: "8px 12px" }}>
        <div style={{ display: "flex", gap: 6, marginBottom: 8 }}>
          <Pill>Tonight</Pill>
          <Pill>7:30 PM</Pill>
          <Pill>2 guests</Pill>
        </div>
        <T size={5}>Greenwich Village · Italian · $$$$</T>
        <div style={{ marginTop: 10, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 5 }}>
          {["Dining room", "Menu", "Photos"].map((label, i) => (
            <div key={label}>
              <div
                style={{
                  height: 36,
                  borderRadius: 8,
                  background: `linear-gradient(135deg, ${["#3d2b1f", "#5c4033", "#2a2520"][i]}, ${border})`,
                  border: `1px solid ${border}`,
                }}
              />
              <T size={5} style={{ marginTop: 3 }}>
                {label}
              </T>
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: 10,
            background: charcoal,
            color: offWhite,
            textAlign: "center",
            padding: 10,
            borderRadius: 8,
            fontSize: 7,
            fontWeight: 600,
            fontFamily: font,
            boxShadow: "0 4px 12px rgba(28,28,28,0.2)",
          }}
        >
          Modify reservation
        </div>
      </div>
    </Screen>
  );
}

export function HealthScreen() {
  return (
    <Screen
      bg={cream}
      tabs={
        <TabBar
          active={0}
          items={[
            { icon: <Ico d={Icons.heart} />, label: "Today" },
            { icon: <Ico d={Icons.chart} />, label: "Trends" },
            { icon: <Ico d={Icons.user} />, label: "You" },
          ]}
        />
      }
    >
      <div style={{ padding: "4px 12px 0" }}>
        <T size={5} weight={600}>
          FORM
        </T>
        <H size={11}>Tuesday, May 26</H>
        <div
          style={{
            marginTop: 8,
            background: white,
            borderRadius: 12,
            border: `1px solid ${border}`,
            padding: 10,
            display: "flex",
            gap: 12,
            alignItems: "center",
            boxShadow: "0 4px 16px rgba(28,28,28,0.05)",
          }}
        >
          <ActivityRings />
          <div>
            <H size={16}>84</H>
            <T size={5}>Recovery</T>
            <T size={5} weight={600} color={mock.success} style={{ marginTop: 2 }}>
              Optimal
            </T>
          </div>
        </div>
        <T size={5} weight={600} style={{ margin: "8px 0 4px" }}>
          TODAY&apos;S WORKOUTS
        </T>
        {[
          { name: "Morning Run", meta: "5.2 mi · 42 min", g: "linear-gradient(135deg,#4a6741,#7d9b76)" },
          { name: "Strength", meta: "Upper body · 38 min", g: "linear-gradient(135deg,#3d3d3d,#6b6b6b)" },
        ].map((w) => (
          <div
            key={w.name}
            style={{
              display: "flex",
              gap: 8,
              padding: 8,
              background: white,
              borderRadius: 10,
              border: `1px solid ${border}`,
              marginBottom: 5,
            }}
          >
            <div style={{ width: 36, height: 36, borderRadius: 8, background: w.g }} />
            <div>
              <T size={6.5} weight={600} color={charcoal}>
                {w.name}
              </T>
              <T size={5}>{w.meta}</T>
            </div>
          </div>
        ))}
      </div>
    </Screen>
  );
}

export function InboxScreen() {
  const msgs = [
    { from: "Sarah Chen", preview: "Q2 roadmap — attached the deck from yesterday's sync...", time: "9:41", unread: true, c: "#8b5a5a" },
    { from: "Notion", preview: "Your weekly workspace digest is ready", time: "8:12", unread: true, c: "#1c1c1c" },
    { from: "Stripe", preview: "Payout of $4,280.00 initiated to Mercury", time: "Yday", unread: false, c: "#635bff" },
    { from: "Figma", preview: "Alex commented on Mobile v3: 'Spacing looks tight on...'", time: "Mon", unread: false, c: "#a259ff" },
  ];
  return (
    <Screen
      bg={white}
      tabs={
        <TabBar
          active={0}
          items={[
            { icon: <Ico d={Icons.mail} />, label: "Inbox" },
            { icon: <Ico d={Icons.search} />, label: "Search" },
            { icon: <Ico d={Icons.user} />, label: "Me" },
          ]}
        />
      }
    >
      <div style={{ padding: "2px 12px 0", borderBottom: `1px solid ${border}` }}>
        <H size={13}>Inbox</H>
        <T size={5}>12 unread</T>
      </div>
      <div style={{ padding: "0 12px" }}>
        {msgs.map((m) => (
          <div
            key={m.from}
            style={{
              display: "flex",
              gap: 8,
              padding: "8px 0",
              borderBottom: `1px solid ${border}`,
            }}
          >
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: 9,
                background: m.c,
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: 8, fontWeight: 700, color: white, fontFamily: font }}>
                {m.from[0]}
              </span>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <T size={6.5} weight={m.unread ? 600 : 500} color={charcoal}>
                  {m.from}
                </T>
                <T size={5}>{m.time}</T>
              </div>
              <T
                size={5}
                color={m.unread ? charcoal : muted}
                style={{
                  display: "block",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {m.preview}
              </T>
            </div>
            {m.unread && (
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#3b82f6",
                  marginTop: 4,
                  flexShrink: 0,
                }}
              />
            )}
          </div>
        ))}
      </div>
    </Screen>
  );
}

export function EditorialScreen() {
  return (
    <Screen
      bg={cream}
      tabs={
        <TabBar
          active={0}
          items={[
            { icon: <Ico d={Icons.home} />, label: "Home" },
            { icon: <Ico d={Icons.search} />, label: "Discover" },
            { icon: <Ico d={Icons.user} />, label: "Library" },
          ]}
        />
      }
    >
      <ImageHero height={100} gradient="linear-gradient(165deg, #1c1c1c 0%, #4a4a4a 50%, #8b7355 100%)" />
      <div style={{ padding: "10px 12px" }}>
        <Pill>Design</Pill>
        <H size={11} style={{ marginTop: 6, lineHeight: 1.2 }}>
          The quiet return of editorial UI
        </H>
        <T size={5} style={{ marginTop: 4 }}>
          8 min read · James Rutherford
        </T>
        <div style={{ marginTop: 10, height: 3, width: 40, background: charcoal, borderRadius: 1 }} />
        <T size={6} color={charcoal} style={{ marginTop: 8, lineHeight: 1.45 }}>
          Product teams are borrowing magazine layouts — asymmetric grids, serif headlines, and restrained palettes...
        </T>
      </div>
    </Screen>
  );
}
