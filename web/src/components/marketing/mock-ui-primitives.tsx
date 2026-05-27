import type { CSSProperties, ReactNode } from "react";
import { mock, TAB_H } from "./mock-tokens";

const { charcoal, muted, border, white, offWhite, charcoal4, charcoal12, font } = mock;

type S = CSSProperties;

export function Screen({
  children,
  tabs,
  bg = white,
}: {
  children: ReactNode;
  tabs: ReactNode;
  bg?: string;
}) {
  return (
    <div
      style={{
        position: "relative",
        height: "100%",
        background: bg,
        fontFamily: font,
        overflow: "hidden",
      }}
    >
      <div style={{ height: `calc(100% - ${TAB_H}px)`, overflow: "hidden" }}>{children}</div>
      {tabs}
    </div>
  );
}

export function TabBar({
  items,
  active = 0,
  dark = false,
}: {
  items: { icon: ReactNode; label: string }[];
  active?: number;
  dark?: boolean;
}) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: TAB_H,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        paddingTop: 6,
        background: dark ? "rgba(28,28,28,0.94)" : "rgba(255,255,255,0.94)",
        backdropFilter: "blur(16px)",
        borderTop: `1px solid ${dark ? "rgba(255,255,255,0.08)" : border}`,
        zIndex: 40,
      }}
    >
      {items.map((item, i) => (
        <div
          key={item.label}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            opacity: i === active ? 1 : 0.4,
          }}
        >
          {item.icon}
          <span
            style={{
              fontSize: 5,
              fontWeight: i === active ? 600 : 500,
              color: dark ? offWhite : charcoal,
            }}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

const iconProps = { width: 14, height: 14, strokeWidth: 1.6, fill: "none" as const };

export function Ico({ d, color = charcoal }: { d: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" {...iconProps} stroke={color}>
      <path d={d} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const Icons = {
  home: "M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z",
  card: "M3 7h18v10H3z M3 10h18",
  chart: "M4 18V8 M10 18V5 M16 18v-7 M22 18V3",
  user: "M20 21a8 8 0 1 0-16 0 M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8",
  map: "M12 2 4 6v14l8-4 8 4V6z M12 6v14",
  car: "M5 17h14l-1.5-5H6.5L5 17z M7 17a1.5 1.5 0 1 0 0 .01 M17 17a1.5 1.5 0 1 0 0 .01 M5 12h14",
  plane: "M2 12h20 M12 2l4 10-4 10-4-10z",
  utensils: "M6 3v8 M10 3v8 M6 7h4 M14 3v5a4 4 0 0 0 4 4",
  heart: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z",
  mail: "M4 6h16v12H4z M4 7l8 6 8-6",
  search: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z M21 21l-4.3-4.3",
};

export function T({
  children,
  size = 7,
  weight = 500,
  color = muted,
  style,
}: {
  children: ReactNode;
  size?: number;
  weight?: number;
  color?: string;
  style?: S;
}) {
  return (
    <span style={{ fontSize: size, fontWeight: weight, color, lineHeight: 1.35, ...style }}>
      {children}
    </span>
  );
}

export function H({ children, size = 12, style }: { children: ReactNode; size?: number; style?: S }) {
  return (
    <div
      style={{
        fontSize: size,
        fontWeight: 600,
        color: charcoal,
        letterSpacing: -0.35,
        lineHeight: 1.15,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function ImageHero({
  gradient,
  height = 72,
  overlay,
  children,
}: {
  gradient: string;
  height?: number;
  overlay?: string;
  children?: ReactNode;
}) {
  return (
    <div style={{ position: "relative", height, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: gradient }} />
      {overlay && <div style={{ position: "absolute", inset: 0, background: overlay }} />}
      <div
        style={{
          position: "absolute",
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.12)",
          top: 12,
          right: 20,
        }}
      />
      {children && <div style={{ position: "relative", zIndex: 2, height: "100%" }}>{children}</div>}
    </div>
  );
}

export function TxRow({
  brand,
  brandColor,
  title,
  sub,
  amount,
  positive,
}: {
  brand: string;
  brandColor: string;
  title: string;
  sub: string;
  amount: string;
  positive?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "7px 0",
        borderBottom: `1px solid ${border}`,
      }}
    >
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: 8,
          background: brandColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <span style={{ fontSize: 8, fontWeight: 700, color: white, fontFamily: font }}>{brand}</span>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <T size={6.5} weight={600} color={charcoal}>
          {title}
        </T>
        <T size={5}>{sub}</T>
      </div>
      <T size={6.5} weight={600} color={positive ? mock.success : charcoal}>
        {amount}
      </T>
    </div>
  );
}

export function QuickAction({ label, icon }: { label: string; icon: ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 12,
          background: white,
          border: `1px solid ${border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 8px rgba(28,28,28,0.06)",
        }}
      >
        {icon}
      </div>
      <T size={5} weight={600} color={charcoal}>
        {label}
      </T>
    </div>
  );
}

export function CreditCardVisual() {
  return (
    <div
      style={{
        margin: "0 12px",
        padding: 12,
        borderRadius: 14,
        background: "linear-gradient(135deg, #1c1c1c 0%, #3d3d3d 48%, #1c1c1c 100%)",
        boxShadow: "0 12px 28px rgba(28,28,28,0.28)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: -20,
          top: -20,
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.06)",
        }}
      />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div
          style={{
            width: 22,
            height: 16,
            borderRadius: 3,
            background: "linear-gradient(135deg, #d4af37, #f5e6a8)",
          }}
        />
        <T size={6} weight={700} color="rgba(255,255,255,0.9)">
          VISA
        </T>
      </div>
      <div
        style={{
          marginTop: 14,
          fontSize: 9,
          fontWeight: 500,
          color: "rgba(255,255,255,0.85)",
          letterSpacing: 1.2,
        }}
      >
        •••• •••• •••• 4291
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
        <T size={5} color="rgba(255,255,255,0.55)">
          ALEX MORGAN
        </T>
        <T size={5} color="rgba(255,255,255,0.55)">
          09/28
        </T>
      </div>
    </div>
  );
}

export function MapCanvas() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 200 240" preserveAspectRatio="xMidYMid slice">
      <rect width="200" height="240" fill={mock.mapLand} />
      {[
        [0, 0, 70, 50],
        [80, 0, 120, 40],
        [0, 60, 50, 80],
        [60, 50, 90, 70],
        [155, 45, 45, 90],
        [0, 150, 80, 90],
        [90, 130, 110, 110],
      ].map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} fill="#ddd8cf" rx="2" />
      ))}
      <path d="M0,55 L200,55 M0,125 L200,125 M75,0 L75,240 M130,0 L130,240" stroke={mock.mapRoad} strokeWidth="6" />
      <path
        d="M40,200 Q80,160 100,120 T160,50"
        fill="none"
        stroke={mock.mapRoute}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="40" cy="200" r="6" fill={charcoal} stroke="white" strokeWidth="2" />
      <circle cx="160" cy="50" r="5" fill={offWhite} stroke={charcoal} strokeWidth="2" />
      <g transform="translate(95, 108)">
        <rect x="-8" y="-4" width="16" height="8" rx="2" fill={charcoal} />
        <circle cx="-4" cy="5" r="2" fill="#333" />
        <circle cx="4" cy="5" r="2" fill="#333" />
      </g>
    </svg>
  );
}

export function ActivityRings() {
  return (
    <svg width={72} height={72} viewBox="0 0 72 72">
      <circle cx="36" cy="36" r="30" fill="none" stroke={charcoal12} strokeWidth="5" />
      <circle
        cx="36"
        cy="36"
        r="30"
        fill="none"
        stroke={charcoal}
        strokeWidth="5"
        strokeDasharray="188"
        strokeDashoffset="40"
        strokeLinecap="round"
        transform="rotate(-90 36 36)"
      />
      <circle cx="36" cy="36" r="22" fill="none" stroke={charcoal12} strokeWidth="5" />
      <circle
        cx="36"
        cy="36"
        r="22"
        fill="none"
        stroke="#5f5f5d"
        strokeWidth="5"
        strokeDasharray="138"
        strokeDashoffset="55"
        strokeLinecap="round"
        transform="rotate(-90 36 36)"
      />
      <circle cx="36" cy="36" r="14" fill="none" stroke={charcoal12} strokeWidth="5" />
      <circle
        cx="36"
        cy="36"
        r="14"
        fill="none"
        stroke={mock.success}
        strokeWidth="5"
        strokeDasharray="88"
        strokeDashoffset="20"
        strokeLinecap="round"
        transform="rotate(-90 36 36)"
      />
    </svg>
  );
}

export function Stars({ rating = 4.9, light }: { rating?: number; light?: boolean }) {
  return (
    <div style={{ display: "flex", gap: 1, alignItems: "center" }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width={8} height={8} viewBox="0 0 10 10">
          <path
            d="M5 1l1.2 2.4 2.7.4-2 1.9.5 2.7L5 7.2 3.6 8.4l.5-2.7-2-1.9 2.7-.4z"
            fill={i <= Math.floor(rating) ? (light ? "#f5e6c8" : "#c4a574") : border}
          />
        </svg>
      ))}
      <T size={5} weight={600} color={light ? offWhite : charcoal} style={{ marginLeft: 3 }}>
        {rating}
      </T>
    </div>
  );
}

export function Pill({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: 5,
        fontWeight: 600,
        padding: "3px 7px",
        borderRadius: 99,
        background: dark ? charcoal : white,
        color: dark ? offWhite : charcoal,
        border: dark ? "none" : `1px solid ${border}`,
      }}
    >
      {children}
    </span>
  );
}
