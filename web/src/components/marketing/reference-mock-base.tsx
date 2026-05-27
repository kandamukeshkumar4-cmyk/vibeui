import type { CSSProperties, ReactNode } from "react";
import { TAB_H } from "./mock-tokens";

const font = "var(--font-display), system-ui, -apple-system, sans-serif";

type S = CSSProperties;

export function RefScreen({
  children,
  tabs,
  bg,
}: {
  children: ReactNode;
  tabs: ReactNode;
  bg: string;
}) {
  return (
    <div style={{ position: "relative", height: "100%", background: bg, fontFamily: font, overflow: "hidden" }}>
      <div style={{ height: `calc(100% - ${TAB_H}px)`, overflow: "hidden" }}>{children}</div>
      {tabs}
    </div>
  );
}

export function RefTabs({
  items,
  active = 0,
  barBg,
  borderColor,
  activeColor,
  inactiveColor,
  activeGlow,
}: {
  items: { label: string; dot?: boolean }[];
  active?: number;
  barBg: string;
  borderColor: string;
  activeColor: string;
  inactiveColor: string;
  activeGlow?: string;
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
        background: barBg,
        borderTop: `1px solid ${borderColor}`,
        paddingTop: 4,
      }}
    >
      {items.map((item, i) => (
        <div key={item.label} style={{ textAlign: "center", position: "relative" }}>
          {activeGlow && i === active && (
            <div
              style={{
                position: "absolute",
                top: -8,
                left: "50%",
                transform: "translateX(-50%)",
                width: 20,
                height: 3,
                borderRadius: 2,
                background: activeGlow,
              }}
            />
          )}
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 5,
              margin: "0 auto 2px",
              background: i === active ? activeColor : inactiveColor,
              opacity: i === active ? 1 : 0.35,
            }}
          />
          <span style={{ fontSize: 5, fontWeight: i === active ? 600 : 500, color: i === active ? activeColor : inactiveColor, opacity: i === active ? 1 : 0.5 }}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function Txt({
  children,
  size = 7,
  weight = 500,
  color = "#fff",
  style,
}: {
  children: ReactNode;
  size?: number;
  weight?: number;
  color?: string;
  style?: S;
}) {
  return <span style={{ fontSize: size, fontWeight: weight, color, lineHeight: 1.3, ...style }}>{children}</span>;
}

export function Spark({ color = "#22c55e" }: { color?: string }) {
  return (
    <svg width="100%" height={18} viewBox="0 0 60 18" preserveAspectRatio="none">
      <path d="M0,14 L8,10 L16,12 L24,6 L32,8 L40,4 L48,7 L60,2" fill="none" stroke={color} strokeWidth="1.2" />
    </svg>
  );
}

export function CoinIcon({ letter, bg }: { letter: string; bg: string }) {
  return (
    <div
      style={{
        width: 22,
        height: 22,
        borderRadius: "50%",
        background: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 8,
        fontWeight: 700,
        color: "#fff",
        flexShrink: 0,
      }}
    >
      {letter}
    </div>
  );
}
