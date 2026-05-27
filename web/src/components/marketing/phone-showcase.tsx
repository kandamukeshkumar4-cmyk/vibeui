import type { ReactNode } from "react";
import {
  BankingMintScreen,
  GroceryBrowseScreen,
  GroceryDetailScreen,
  GroceryHomeScreen,
  JewelryAIScanScreen,
  JewelryHomeScreen,
  JewelrySearchScreen,
  RealEstateDetailScreen,
  RealEstateHomeScreen,
  RealEstateMapScreen,
  SportsHomeScreen,
  SportsNewsScreen,
  SportsTeamScreen,
} from "./reference-app-mocks";
import { mock } from "./mock-tokens";

const { charcoal, border, offWhite } = mock;

export type PhoneShowcaseDef = {
  id: string;
  label: string;
  category: string;
  darkBezel?: boolean;
  screenBg: string;
  content: ReactNode;
};

/** All reference mockups from product-style designs (phone content only). */
export const SHOWCASE_PHONES: PhoneShowcaseDef[] = [
  { id: "jewelry-home",   label: "Lustre",    category: "Jewelry",     screenBg: "#f5f0e8",  content: <JewelryHomeScreen /> },
  { id: "sports-home",    label: "Matchday",  category: "Sports",      darkBezel: true, screenBg: "#0f0f0f", content: <SportsHomeScreen /> },
  { id: "estate-home",    label: "Dwello",    category: "Real estate", screenBg: "#f0f4f8",  content: <RealEstateHomeScreen /> },
  { id: "banking-mint",   label: "Spenny",    category: "Banking",     screenBg: "#e8faf3",  content: <BankingMintScreen /> },
  { id: "grocery-home",   label: "FreshCart", category: "Grocery",     screenBg: "#ffffff",  content: <GroceryHomeScreen /> },
  { id: "grocery-browse", label: "FreshCart", category: "Collections", screenBg: "#ffffff",  content: <GroceryBrowseScreen /> },
  { id: "grocery-detail", label: "FreshCart", category: "Product",     screenBg: "#ffffff",  content: <GroceryDetailScreen /> },
  { id: "sports-news",    label: "Matchday",  category: "Highlights",  darkBezel: true, screenBg: "#0f0f0f", content: <SportsNewsScreen /> },
  { id: "sports-team",    label: "Matchday",  category: "Team",        darkBezel: true, screenBg: "#0f0f0f", content: <SportsTeamScreen /> },
  { id: "estate-map",     label: "Dwello",    category: "Map search",  screenBg: "#dce8f5",  content: <RealEstateMapScreen /> },
  { id: "estate-detail",  label: "Dwello",    category: "Property",    screenBg: "#f8f9fb",  content: <RealEstateDetailScreen /> },
  { id: "jewelry-search", label: "Lustre",    category: "Shop",        screenBg: "#f5f0e8",  content: <JewelrySearchScreen /> },
  { id: "jewelry-scan",   label: "Lustre",    category: "AI Scan",     screenBg: "#f5f0e8",  content: <JewelryAIScanScreen /> },
];

export const MARQUEE_PHONES = [...SHOWCASE_PHONES, ...SHOWCASE_PHONES];

type PhoneFrameProps = {
  phone: PhoneShowcaseDef;
  width?: number;
  height?: number;
};

export function PhoneFrame({ phone, width = 200, height }: PhoneFrameProps) {
  const h = height ?? Math.round(width * (360 / 200));
  const scale = width / 200;
  const bezel = phone.darkBezel ? "#0a0a0a" : "#d4d0c8";
  const island = phone.darkBezel ? "#000" : charcoal;

  return (
    <div
      className="flex-shrink-0"
      style={{
        width,
        height: h,
        borderRadius: 40 * scale,
        border: `${8 * scale}px solid ${bezel}`,
        background: phone.screenBg,
        overflow: "hidden",
        position: "relative",
        boxShadow:
          "0 32px 64px rgba(28,28,28,0.18), 0 8px 24px rgba(28,28,28,0.08), inset 0 1px 0 rgba(255,255,255,0.35)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 10 * scale,
          left: "50%",
          transform: "translateX(-50%)",
          width: 78 * scale,
          height: 24 * scale,
          borderRadius: 20,
          background: island,
          zIndex: 30,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 40 * scale,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          padding: `0 ${18 * scale}px ${6 * scale}px`,
          zIndex: 25,
          fontFamily: mock.font,
          pointerEvents: "none",
        }}
      >
        <span style={{ fontSize: 8 * scale, fontWeight: 600, color: phone.darkBezel ? offWhite : charcoal }}>
          9:41
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 3 * scale }}>
          <svg width={12 * scale} height={8 * scale} viewBox="0 0 11 7" aria-hidden>
            {[0, 1, 2].map((i) => (
              <rect key={i} x={i * 3.5} y={7 - (i + 1) * 2} width={2.5} height={(i + 1) * 2} rx="0.5" fill={phone.darkBezel ? offWhite : charcoal} opacity={0.8} />
            ))}
          </svg>
          <svg width={15 * scale} height={8 * scale} viewBox="0 0 14 7" aria-hidden>
            <rect x="0" y="1" width="11.5" height="5" rx="1.5" fill="none" stroke={phone.darkBezel ? offWhite : charcoal} strokeWidth="0.8" opacity={0.45} />
            <rect x="1" y="2" width="8" height="3" rx="1" fill={charcoal} />
          </svg>
        </div>
      </div>

      <div style={{ position: "absolute", top: 40 * scale, left: 0, right: 0, bottom: 10 * scale, overflow: "hidden" }}>
        {phone.content}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 6 * scale,
          left: "50%",
          transform: "translateX(-50%)",
          width: 56 * scale,
          height: 4 * scale,
          borderRadius: 2,
          background: phone.darkBezel ? "rgba(255,255,255,0.25)" : "rgba(28,28,28,0.2)",
          zIndex: 35,
        }}
      />
    </div>
  );
}

export function PhoneCaption({ phone }: { phone: PhoneShowcaseDef }) {
  return (
    <div className="mt-4 text-center">
      <div className="text-sm font-semibold tracking-tight text-foreground">{phone.label}</div>
      <div className="text-xs text-muted">{phone.category}</div>
    </div>
  );
}

export function PhoneWithCaption({ phone, width }: PhoneFrameProps) {
  return (
    <div className="flex flex-col items-center">
      <PhoneFrame phone={phone} width={width} />
      <PhoneCaption phone={phone} />
    </div>
  );
}

export function PhoneFrameCompact({ phone, width = 168 }: { phone: PhoneShowcaseDef; width?: number }) {
  return <PhoneFrame phone={phone} width={width} />;
}

export function PhonePreviewStage({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center rounded-2xl border border-border bg-white/60 p-6 shadow-[0_8px_32px_rgba(28,28,28,0.06)] ${className}`}>
      {children}
    </div>
  );
}

export function HeroFeaturedPhone({ phone }: { phone: PhoneShowcaseDef }) {
  return (
    <div className="marketing-reveal relative z-10">
      <PhoneFrame phone={phone} width={220} />
    </div>
  );
}
