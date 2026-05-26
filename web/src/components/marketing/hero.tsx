"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const FF =
  "-apple-system,BlinkMacSystemFont,'SF Pro Display','Helvetica Neue',sans-serif";

/* ═══════════════════════════════════════════════════════
   App screen contents — light & dark themed
═══════════════════════════════════════════════════════ */

function VitalsContent() {
  return (
    <div style={{ background: "#fff", height: "100%", fontFamily: FF }}>
      <div
        style={{
          padding: "6px 13px 4px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              fontSize: 5,
              color: "#8e8e93",
              fontWeight: 600,
              letterSpacing: 0.5,
            }}
          >
            FRIDAY · MAY 26
          </div>
          <div style={{ fontSize: 13, fontWeight: 800, color: "#1c1c1e" }}>
            Activity
          </div>
        </div>
        <div
          style={{
            width: 22,
            height: 22,
            borderRadius: 7,
            background: "#f2f2f7",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: 10 }}>📋</span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          margin: "4px 13px 8px",
        }}
      >
        <svg width="64" height="64" viewBox="0 0 64 64">
          <circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="#ffe0e4"
            strokeWidth="5"
          />
          <circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="#ff2d55"
            strokeWidth="5"
            strokeDasharray="176"
            strokeDashoffset="38"
            strokeLinecap="round"
            transform="rotate(-90 32 32)"
          />
          <circle
            cx="32"
            cy="32"
            r="20"
            fill="none"
            stroke="#d9f7de"
            strokeWidth="5"
          />
          <circle
            cx="32"
            cy="32"
            r="20"
            fill="none"
            stroke="#30d158"
            strokeWidth="5"
            strokeDasharray="126"
            strokeDashoffset="20"
            strokeLinecap="round"
            transform="rotate(-90 32 32)"
          />
          <circle
            cx="32"
            cy="32"
            r="12"
            fill="none"
            stroke="#d6eaff"
            strokeWidth="5"
          />
          <circle
            cx="32"
            cy="32"
            r="12"
            fill="none"
            stroke="#0a84ff"
            strokeWidth="5"
            strokeDasharray="75"
            strokeDashoffset="25"
            strokeLinecap="round"
            transform="rotate(-90 32 32)"
          />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
          {[
            { c: "#ff2d55", l: "Move", v: "482 CAL" },
            { c: "#30d158", l: "Exercise", v: "35 MIN" },
            { c: "#0a84ff", l: "Stand", v: "10 HRS" },
          ].map((r, i) => (
            <div
              key={i}
              style={{ display: "flex", alignItems: "center", gap: 4 }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: r.c,
                  flexShrink: 0,
                }}
              />
              <div>
                <div
                  style={{ fontSize: 4.5, color: "#8e8e93", fontWeight: 600 }}
                >
                  {r.l}
                </div>
                <div
                  style={{ fontSize: 7.5, fontWeight: 800, color: "#1c1c1e" }}
                >
                  {r.v}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          margin: "0 12px 7px",
          background: "#f2f2f7",
          borderRadius: 12,
          padding: "7px 10px",
        }}
      >
        <div
          style={{
            fontSize: 4.5,
            color: "#8e8e93",
            fontWeight: 700,
            letterSpacing: 0.5,
          }}
        >
          STEPS TODAY
        </div>
        <div
          style={{ fontSize: 17, fontWeight: 900, color: "#1c1c1e" }}
        >
          8,421
        </div>
        <div
          style={{
            marginTop: 4,
            height: 3,
            background: "#e5e5ea",
            borderRadius: 2,
          }}
        >
          <div
            style={{ width: "84%", height: 3, background: "#30d158", borderRadius: 2 }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 2,
          }}
        >
          <span style={{ fontSize: 4.5, color: "#8e8e93" }}>Goal: 10,000</span>
          <span
            style={{ fontSize: 4.5, color: "#30d158", fontWeight: 700 }}
          >
            84%
          </span>
        </div>
      </div>

      <div style={{ margin: "0 12px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: 3,
            height: 26,
          }}
        >
          {[55, 78, 65, 90, 100, 72, 40].map((h, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: h * 0.24,
                background: i === 4 ? "#30d158" : "#d1f5de",
                borderRadius: "2px 2px 0 0",
              }}
            />
          ))}
        </div>
        <div style={{ display: "flex", marginTop: 3 }}>
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <span
              key={i}
              style={{
                flex: 1,
                textAlign: "center",
                fontSize: 4.5,
                color: i === 4 ? "#30d158" : "#8e8e93",
                fontWeight: i === 4 ? 700 : 400,
              }}
            >
              {d}
            </span>
          ))}
        </div>
      </div>

      <div
        style={{ margin: "6px 12px 0", display: "flex", gap: 5 }}
      >
        {[
          { l: "Calories", v: "482", c: "#ff2d55" },
          { l: "Distance", v: "5.2km", c: "#0a84ff" },
          { l: "Active", v: "38m", c: "#30d158" },
        ].map((s, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              background: "#f2f2f7",
              borderRadius: 10,
              padding: "5px 4px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 4, color: "#8e8e93", fontWeight: 600 }}>
              {s.l}
            </div>
            <div
              style={{ fontSize: 7.5, fontWeight: 800, color: s.c, marginTop: 1 }}
            >
              {s.v}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FluxContent() {
  return (
    <div style={{ background: "#fff", height: "100%", fontFamily: FF }}>
      <div
        style={{
          padding: "6px 13px 6px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: 13, fontWeight: 800, color: "#1c1c1e" }}>
          Dashboard
        </div>
        <span style={{ fontSize: 9, color: "#8e8e93" }}>🔔</span>
      </div>

      <div
        style={{
          margin: "0 12px 8px",
          borderRadius: 14,
          padding: "10px 12px",
          background: "linear-gradient(135deg,#0a84ff,#0055d4)",
        }}
      >
        <div
          style={{
            fontSize: 4.5,
            color: "rgba(255,255,255,0.7)",
            fontWeight: 600,
          }}
        >
          Total Balance
        </div>
        <div
          style={{
            fontSize: 20,
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1.1,
            marginTop: 2,
          }}
        >
          $24,680
        </div>
        <div
          style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 3 }}
        >
          <span
            style={{
              fontSize: 5.5,
              color: "rgba(255,255,255,0.9)",
              background: "rgba(255,255,255,0.15)",
              borderRadius: 4,
              padding: "1px 5px",
              fontWeight: 700,
            }}
          >
            ▲ +2.4%
          </span>
          <span style={{ fontSize: 5, color: "rgba(255,255,255,0.55)" }}>
            vs last month
          </span>
        </div>
      </div>

      <div style={{ display: "flex", gap: 6, margin: "0 12px 8px" }}>
        {[
          { l: "Income", v: "$5,420", c: "#30d158" },
          { l: "Expense", v: "$1,890", c: "#ff2d55" },
        ].map((s, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              background: "#f2f2f7",
              borderRadius: 12,
              padding: "7px 9px",
            }}
          >
            <div
              style={{ fontSize: 4.5, color: "#8e8e93", fontWeight: 600 }}
            >
              {s.l}
            </div>
            <div
              style={{ fontSize: 10, fontWeight: 800, color: s.c, marginTop: 2 }}
            >
              {s.v}
            </div>
          </div>
        ))}
      </div>

      <div style={{ margin: "0 12px 7px" }}>
        <div
          style={{
            fontSize: 4.5,
            color: "#8e8e93",
            fontWeight: 700,
            marginBottom: 5,
          }}
        >
          SPENDING
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: 4,
            height: 32,
          }}
        >
          {[40, 65, 50, 80, 60, 90, 55].map((h, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: h * 0.32,
                borderRadius: "3px 3px 0 0",
                background: i === 5 ? "#0a84ff" : "#d6eaff",
              }}
            />
          ))}
        </div>
        <div style={{ display: "flex", marginTop: 3 }}>
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <span
              key={i}
              style={{
                flex: 1,
                textAlign: "center",
                fontSize: 4.5,
                color: i === 5 ? "#0a84ff" : "#8e8e93",
                fontWeight: i === 5 ? 700 : 400,
              }}
            >
              {d}
            </span>
          ))}
        </div>
      </div>

      <div style={{ margin: "0 12px" }}>
        <div
          style={{
            fontSize: 4.5,
            color: "#8e8e93",
            fontWeight: 700,
            marginBottom: 4,
          }}
        >
          RECENT
        </div>
        {[
          { n: "Spotify", a: "Subscriptions", v: "-$9.99", c: "#1DB954" },
          { n: "Amazon", a: "Shopping", v: "-$47.20", c: "#ff9f0a" },
          { n: "Salary", a: "Income", v: "+$5,420", c: "#30d158" },
        ].map((t, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "4px 0",
              borderBottom: i < 2 ? "1px solid #f2f2f7" : "none",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", gap: 6 }}
            >
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 6,
                  background: t.c + "22",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{ fontSize: 8, fontWeight: 900, color: t.c }}
                >
                  {t.n[0]}
                </span>
              </div>
              <div>
                <div
                  style={{ fontSize: 6.5, fontWeight: 700, color: "#1c1c1e" }}
                >
                  {t.n}
                </div>
                <div style={{ fontSize: 4.5, color: "#8e8e93" }}>{t.a}</div>
              </div>
            </div>
            <span
              style={{
                fontSize: 7,
                fontWeight: 800,
                color: t.v[0] === "+" ? "#30d158" : "#1c1c1e",
              }}
            >
              {t.v}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DreamContent() {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg,#1a0533 0%,#2d0a5e 50%,#1a0533 100%)",
        height: "100%",
        fontFamily: FF,
      }}
    >
      <div
        style={{
          padding: "6px 14px 4px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: 5,
            color: "rgba(191,90,242,0.7)",
            fontWeight: 700,
            letterSpacing: 0.8,
          }}
        >
          LAST NIGHT
        </div>
        <span style={{ fontSize: 9, color: "rgba(255,255,255,0.3)" }}>
          ···
        </span>
      </div>

      <div style={{ padding: "0 14px 8px" }}>
        <div style={{ fontSize: 13, fontWeight: 800, color: "#fff" }}>
          Sleep Report
        </div>
        <div style={{ marginTop: 6 }}>
          <div
            style={{ fontSize: 5, color: "rgba(255,255,255,0.45)" }}
          >
            TIME ASLEEP
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1,
            }}
          >
            7h{" "}
            <span style={{ fontSize: 20 }}>42m</span>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 5, margin: "0 13px 8px" }}>
        {[
          { l: "Quality", v: "87%", c: "#bf5af2" },
          { l: "Deep", v: "1h 24m", c: "#30b0ff" },
          { l: "REM", v: "2h 8m", c: "#ff6b81" },
        ].map((s, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              background: "rgba(255,255,255,0.06)",
              borderRadius: 10,
              padding: "6px 4px",
              textAlign: "center",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              style={{ fontSize: 4, color: "rgba(255,255,255,0.4)", fontWeight: 600 }}
            >
              {s.l}
            </div>
            <div
              style={{ fontSize: 7.5, fontWeight: 800, color: s.c, marginTop: 2 }}
            >
              {s.v}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          margin: "0 13px 8px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: 12,
          padding: "8px 10px",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div
          style={{
            fontSize: 4.5,
            color: "rgba(255,255,255,0.4)",
            fontWeight: 700,
            marginBottom: 6,
          }}
        >
          SLEEP STAGES
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {[
            { l: "Awake", w: "8%", c: "#ff6b81" },
            { l: "Light", w: "45%", c: "#30b0ff" },
            { l: "Deep", w: "22%", c: "#0a84ff" },
            { l: "REM", w: "25%", c: "#bf5af2" },
          ].map((s, i) => (
            <div
              key={i}
              style={{ display: "flex", alignItems: "center", gap: 5 }}
            >
              <span
                style={{
                  fontSize: 4.5,
                  color: "rgba(255,255,255,0.4)",
                  width: 22,
                }}
              >
                {s.l}
              </span>
              <div
                style={{
                  flex: 1,
                  height: 6,
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: 3,
                }}
              >
                <div
                  style={{
                    width: s.w,
                    height: 6,
                    background: s.c,
                    borderRadius: 3,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ margin: "0 13px", display: "flex", gap: 6 }}>
        <div
          style={{
            flex: 1,
            background: "rgba(191,90,242,0.12)",
            borderRadius: 10,
            padding: "7px 8px",
            border: "1px solid rgba(191,90,242,0.2)",
          }}
        >
          <div
            style={{
              fontSize: 4.5,
              color: "rgba(191,90,242,0.7)",
              fontWeight: 700,
            }}
          >
            SCORE
          </div>
          <div style={{ fontSize: 18, fontWeight: 900, color: "#bf5af2" }}>
            87
          </div>
          <div style={{ fontSize: 4, color: "rgba(255,255,255,0.35)" }}>
            Excellent
          </div>
        </div>
        <div
          style={{
            flex: 1,
            background: "rgba(255,255,255,0.05)",
            borderRadius: 10,
            padding: "7px 8px",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div
            style={{
              fontSize: 4.5,
              color: "rgba(255,255,255,0.4)",
              fontWeight: 700,
            }}
          >
            BEDTIME
          </div>
          <div style={{ fontSize: 11, fontWeight: 800, color: "#fff" }}>
            10:48
          </div>
          <div style={{ fontSize: 4, color: "rgba(255,255,255,0.3)" }}>PM</div>
        </div>
      </div>
    </div>
  );
}

function ZenContent() {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg,#fff5f0 0%,#ffe8e0 100%)",
        height: "100%",
        fontFamily: FF,
      }}
    >
      <div
        style={{
          padding: "6px 14px 4px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: 5,
            color: "rgba(255,107,129,0.7)",
            fontWeight: 700,
            letterSpacing: 1,
          }}
        >
          MINDFUL
        </div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 3,
            background: "rgba(255,107,129,0.1)",
            borderRadius: 99,
            padding: "2px 7px",
            border: "1px solid rgba(255,107,129,0.2)",
          }}
        >
          <span style={{ fontSize: 7 }}>🔥</span>
          <span
            style={{ fontSize: 5.5, fontWeight: 700, color: "#ff6b81" }}
          >
            21 Days
          </span>
        </div>
      </div>

      <div style={{ textAlign: "center", padding: "6px 14px 8px" }}>
        <div style={{ fontSize: 6, color: "rgba(0,0,0,0.4)" }}>
          Breathe &amp; Focus
        </div>
        <div
          style={{ fontSize: 13, fontWeight: 800, color: "#1c1c1e", marginTop: 2 }}
        >
          Daily Calm
        </div>
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", margin: "0 0 10px" }}
      >
        <div style={{ position: "relative", width: 82, height: 82 }}>
          {[82, 64, 48].map((sz, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: (82 - sz) / 2,
                top: (82 - sz) / 2,
                width: sz,
                height: sz,
                borderRadius: "50%",
                background: `rgba(255,107,129,${0.07 + i * 0.06})`,
                border: `1px solid rgba(255,107,129,${0.15 + i * 0.1})`,
              }}
            />
          ))}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ fontSize: 8, fontWeight: 900, color: "#ff6b81" }}>
              06:41
            </div>
            <div style={{ fontSize: 4.5, color: "rgba(255,107,129,0.6)" }}>
              remaining
            </div>
          </div>
        </div>
      </div>

      <div style={{ margin: "0 13px 8px" }}>
        <div
          style={{
            background: "rgba(255,107,129,0.08)",
            borderRadius: 12,
            padding: "7px 10px",
            border: "1px solid rgba(255,107,129,0.12)",
          }}
        >
          <div
            style={{
              fontSize: 5,
              color: "rgba(0,0,0,0.4)",
              fontWeight: 700,
              marginBottom: 5,
            }}
          >
            {"TODAY'S PLAN"}
          </div>
          {[
            { n: "Morning Breathe", d: "5 min", done: true },
            { n: "Anxiety Relief", d: "10 min", done: false },
            { n: "Sleep Wind Down", d: "20 min", done: false },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: i < 2 ? 5 : 0,
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: 5 }}
              >
                <div
                  style={{
                    width: 13,
                    height: 13,
                    borderRadius: 4,
                    background: s.done
                      ? "#ff6b81"
                      : "rgba(255,107,129,0.12)",
                    border: s.done
                      ? "none"
                      : "1px solid rgba(255,107,129,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {s.done && (
                    <span style={{ fontSize: 7, color: "#fff", fontWeight: 900 }}>
                      ✓
                    </span>
                  )}
                </div>
                <span
                  style={{
                    fontSize: 6,
                    color: s.done ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.7)",
                    textDecoration: s.done ? "line-through" : "none",
                  }}
                >
                  {s.n}
                </span>
              </div>
              <span style={{ fontSize: 5, color: "rgba(0,0,0,0.3)" }}>
                {s.d}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", gap: 5, margin: "0 13px" }}>
        {[
          { v: "21", l: "Day Streak" },
          { v: "4.2h", l: "This Week" },
          { v: "98", l: "Sessions" },
        ].map((s, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              textAlign: "center",
              background: "rgba(255,107,129,0.08)",
              borderRadius: 10,
              padding: "5px 3px",
              border: "1px solid rgba(255,107,129,0.1)",
            }}
          >
            <div
              style={{ fontSize: 9, fontWeight: 800, color: "#ff6b81" }}
            >
              {s.v}
            </div>
            <div
              style={{ fontSize: 4, color: "rgba(0,0,0,0.4)", marginTop: 1 }}
            >
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TaskContent() {
  return (
    <div
      style={{ background: "#f8f7ff", height: "100%", fontFamily: FF }}
    >
      <div
        style={{
          padding: "6px 13px 6px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{ fontSize: 5, color: "#8e8e93", fontWeight: 600 }}
          >
            MONDAY · MAY 26
          </div>
          <div
            style={{ fontSize: 13, fontWeight: 800, color: "#1c1c1e" }}
          >
            {"Today's Tasks"}
          </div>
        </div>
        <div
          style={{
            width: 22,
            height: 22,
            borderRadius: 7,
            background: "#5e5ce6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: 15,
              color: "#fff",
              lineHeight: 1,
              fontWeight: 300,
            }}
          >
            +
          </span>
        </div>
      </div>

      <div
        style={{
          margin: "0 12px 7px",
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        <div
          style={{
            flex: 1,
            height: 4,
            background: "#e5e4f7",
            borderRadius: 2,
          }}
        >
          <div
            style={{
              width: "58%",
              height: 4,
              background: "linear-gradient(to right,#5e5ce6,#9b99f5)",
              borderRadius: 2,
            }}
          />
        </div>
        <span
          style={{ fontSize: 5, color: "#8e8e93", fontWeight: 700 }}
        >
          7/12
        </span>
      </div>

      <div style={{ margin: "0 12px 6px" }}>
        <div
          style={{
            fontSize: 4.5,
            color: "#8e8e93",
            fontWeight: 700,
            marginBottom: 4,
          }}
        >
          DESIGN
        </div>
        {[
          { t: "Component audit", done: true },
          { t: "Update button styles", done: true },
          { t: "Dark mode tokens", done: false, p: "HIGH" as const },
        ].map((task, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              padding: "4px 7px",
              background: task.done ? "rgba(94,92,230,0.04)" : "#fff",
              borderRadius: 8,
              marginBottom: 3,
              borderLeft: `2.5px solid ${task.done ? "rgba(94,92,230,0.3)" : "#5e5ce6"}`,
              boxShadow: task.done ? "none" : "0 1px 4px rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                width: 11,
                height: 11,
                borderRadius: 3,
                background: task.done ? "#5e5ce6" : "transparent",
                border: task.done ? "none" : "1.5px solid #d1d1d6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {task.done && (
                <span style={{ fontSize: 6, color: "#fff" }}>✓</span>
              )}
            </div>
            <span
              style={{
                flex: 1,
                fontSize: 6.5,
                color: task.done ? "rgba(0,0,0,0.3)" : "#1c1c1e",
                textDecoration: task.done ? "line-through" : "none",
              }}
            >
              {task.t}
            </span>
            {task.p && (
              <span
                style={{
                  fontSize: 4,
                  background: "rgba(255,59,48,0.1)",
                  color: "#ff3b30",
                  borderRadius: 3,
                  padding: "1px 4px",
                  fontWeight: 700,
                }}
              >
                {task.p}
              </span>
            )}
          </div>
        ))}
      </div>

      <div style={{ margin: "0 12px 6px" }}>
        <div
          style={{
            fontSize: 4.5,
            color: "#8e8e93",
            fontWeight: 700,
            marginBottom: 4,
          }}
        >
          DEVELOPMENT
        </div>
        {[
          { t: "Auth endpoints", p: "MED" as const },
          { t: "Rate limiting", p: undefined },
        ].map((task, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              padding: "4px 7px",
              background: "#fff",
              borderRadius: 8,
              marginBottom: 3,
              borderLeft: "2.5px solid #30d158",
              boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                width: 11,
                height: 11,
                borderRadius: 3,
                background: "transparent",
                border: "1.5px solid #d1d1d6",
                flexShrink: 0,
              }}
            />
            <span
              style={{ flex: 1, fontSize: 6.5, color: "#1c1c1e" }}
            >
              {task.t}
            </span>
            {task.p && (
              <span
                style={{
                  fontSize: 4,
                  background: "rgba(255,159,10,0.1)",
                  color: "#ff9f0a",
                  borderRadius: 3,
                  padding: "1px 4px",
                  fontWeight: 700,
                }}
              >
                {task.p}
              </span>
            )}
          </div>
        ))}
      </div>

      <div
        style={{
          margin: "0 12px",
          background: "rgba(94,92,230,0.08)",
          borderRadius: 10,
          padding: "6px 8px",
          border: "1px solid rgba(94,92,230,0.15)",
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        <span style={{ fontSize: 11 }}>📌</span>
        <div>
          <div
            style={{ fontSize: 5, color: "#5e5ce6", fontWeight: 700 }}
          >
            DUE TODAY
          </div>
          <div style={{ fontSize: 6, color: "rgba(0,0,0,0.6)" }}>
            Deploy to staging · 6:00 PM
          </div>
        </div>
      </div>
    </div>
  );
}

function EatsContent() {
  return (
    <div style={{ background: "#fff", height: "100%", fontFamily: FF }}>
      <div
        style={{
          padding: "6px 13px 5px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              fontSize: 5,
              color: "#8e8e93",
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <span>📍</span> Deliver to
          </div>
          <div
            style={{ fontSize: 9, fontWeight: 800, color: "#1c1c1e" }}
          >
            Manhattan, NY
          </div>
        </div>
        <div
          style={{
            width: 22,
            height: 22,
            borderRadius: "50%",
            background: "#f2f2f7",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: 9 }}>👤</span>
        </div>
      </div>

      <div
        style={{
          margin: "0 12px 6px",
          height: 22,
          background: "#f2f2f7",
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          paddingLeft: 9,
          gap: 4,
        }}
      >
        <span style={{ fontSize: 8 }}>🔍</span>
        <span style={{ fontSize: 6, color: "#8e8e93" }}>
          Craving something...
        </span>
      </div>

      <div
        style={{
          display: "flex",
          gap: 5,
          padding: "0 12px 7px",
          overflow: "hidden",
        }}
      >
        {[
          { e: "🍕", l: "Pizza" },
          { e: "🍔", l: "Burgers" },
          { e: "🍜", l: "Ramen" },
          { e: "🥗", l: "Salads" },
        ].map((c, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              gap: 3,
              background: i === 0 ? "#ff9f0a" : "#f2f2f7",
              borderRadius: 99,
              padding: "3px 8px",
            }}
          >
            <span style={{ fontSize: 7 }}>{c.e}</span>
            <span
              style={{
                fontSize: 5,
                color: i === 0 ? "#fff" : "#1c1c1e",
                fontWeight: i === 0 ? 700 : 400,
              }}
            >
              {c.l}
            </span>
          </div>
        ))}
      </div>

      <div
        style={{
          margin: "0 12px 6px",
          borderRadius: 14,
          overflow: "hidden",
          border: "1px solid #f2f2f7",
        }}
      >
        <div
          style={{
            height: 52,
            background: "linear-gradient(135deg,#ff9f0a,#ff6b00)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 12px",
            position: "relative",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 4.5,
                color: "rgba(255,255,255,0.8)",
                fontWeight: 700,
              }}
            >
              FEATURED
            </div>
            <div
              style={{ fontSize: 10, fontWeight: 800, color: "#fff" }}
            >
              Napoli Pizza
            </div>
            <div
              style={{
                fontSize: 5,
                color: "rgba(255,255,255,0.8)",
                marginTop: 1,
              }}
            >
              🍕 ★ 4.9 · 18 min
            </div>
          </div>
          <div
            style={{
              fontSize: 26,
              filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.25))",
            }}
          >
            🍕
          </div>
          <div
            style={{
              position: "absolute",
              top: 6,
              left: 8,
              background: "#fff",
              borderRadius: 4,
              padding: "2px 5px",
            }}
          >
            <span
              style={{ fontSize: 4.5, color: "#ff9f0a", fontWeight: 800 }}
            >
              30% OFF
            </span>
          </div>
        </div>
        <div style={{ padding: "5px 10px" }}>
          <div style={{ fontSize: 6.5, fontWeight: 600, color: "#8e8e93" }}>
            Italian · Free Delivery · Open Now
          </div>
        </div>
      </div>

      {[
        { n: "Burger Palace", t: "American · 25 min", e: "🍔", r: "4.7" },
        { n: "Tokyo Ramen", t: "Japanese · 35 min", e: "🍜", r: "4.8" },
      ].map((r, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            gap: 8,
            margin: "0 12px",
            padding: "5px 0",
            borderTop: "1px solid #f2f2f7",
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 10,
              background: "#f2f2f7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span style={{ fontSize: 16 }}>{r.e}</span>
          </div>
          <div style={{ flex: 1 }}>
            <div
              style={{ fontSize: 7, fontWeight: 700, color: "#1c1c1e" }}
            >
              {r.n}
            </div>
            <div
              style={{ fontSize: 5, color: "#8e8e93", marginTop: 1 }}
            >
              {r.t}
            </div>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", gap: 2 }}
          >
            <span style={{ fontSize: 6, color: "#ff9f0a" }}>★</span>
            <span
              style={{ fontSize: 6, fontWeight: 700, color: "#1c1c1e" }}
            >
              {r.r}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function PulseContent() {
  return (
    <div
      style={{ background: "#0f0f0f", height: "100%", fontFamily: FF }}
    >
      <div
        style={{
          padding: "6px 14px 3px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontSize: 5,
            color: "rgba(255,255,255,0.35)",
            letterSpacing: 1.5,
            fontWeight: 700,
          }}
        >
          NOW PLAYING
        </span>
        <span style={{ fontSize: 9, color: "rgba(255,255,255,0.3)" }}>
          ···
        </span>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "6px 0 8px",
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: 18,
            background:
              "linear-gradient(135deg,#1a3a1a,#1DB954,#0a2010)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 10px 36px rgba(29,185,84,0.45)",
          }}
        >
          <span style={{ fontSize: 36 }}>🎵</span>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          padding: "0 14px",
          marginBottom: 7,
        }}
      >
        <div
          style={{
            fontSize: 11,
            fontWeight: 800,
            color: "#fff",
            letterSpacing: -0.3,
          }}
        >
          Blinding Lights
        </div>
        <div style={{ fontSize: 7, color: "#1DB954", marginTop: 1 }}>
          The Weeknd
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          margin: "0 14px",
          height: 20,
        }}
      >
        {[4, 7, 11, 6, 14, 9, 5, 13, 10, 15, 7, 12, 5, 13, 8, 7, 11, 5, 12, 7].map(
          (h, i) => (
            <div
              key={i}
              style={{
                width: 2,
                height: h,
                borderRadius: 1,
                background:
                  i < 12 ? "#1DB954" : "rgba(255,255,255,0.15)",
              }}
            />
          )
        )}
      </div>

      <div style={{ padding: "5px 14px 4px" }}>
        <div
          style={{
            height: 3,
            background: "rgba(255,255,255,0.1)",
            borderRadius: 2,
            position: "relative",
          }}
        >
          <div
            style={{
              width: "42%",
              height: 3,
              background: "#1DB954",
              borderRadius: 2,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: -3,
              left: "42%",
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: "#fff",
              transform: "translateX(-50%)",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 3,
          }}
        >
          <span style={{ fontSize: 4.5, color: "rgba(255,255,255,0.3)" }}>
            1:38
          </span>
          <span style={{ fontSize: 4.5, color: "rgba(255,255,255,0.3)" }}>
            3:53
          </span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 14,
          marginTop: 4,
        }}
      >
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>⇄</span>
        <span style={{ fontSize: 14, color: "rgba(255,255,255,0.55)" }}>
          ⏮
        </span>
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: "#1DB954",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 20px rgba(29,185,84,0.5)",
          }}
        >
          <span style={{ fontSize: 14, marginLeft: 2, color: "#000" }}>▶</span>
        </div>
        <span style={{ fontSize: 14, color: "rgba(255,255,255,0.55)" }}>
          ⏭
        </span>
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>↺</span>
      </div>

      <div
        style={{
          margin: "8px 13px 0",
          background: "rgba(255,255,255,0.05)",
          borderRadius: 10,
          padding: "6px 9px",
          border: "1px solid rgba(255,255,255,0.07)",
          display: "flex",
          alignItems: "center",
          gap: 7,
        }}
      >
        <div
          style={{
            width: 22,
            height: 22,
            borderRadius: 6,
            background: "linear-gradient(135deg,#1a3a1a,#1DB954)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <span style={{ fontSize: 9 }}>♬</span>
        </div>
        <div>
          <div
            style={{
              fontSize: 4.5,
              color: "rgba(255,255,255,0.3)",
              fontWeight: 700,
            }}
          >
            UP NEXT
          </div>
          <div style={{ fontSize: 6.5, color: "rgba(255,255,255,0.7)" }}>
            Save Your Tears
          </div>
        </div>
      </div>
    </div>
  );
}

function SnapContent() {
  return (
    <div style={{ background: "#fff", height: "100%", fontFamily: FF }}>
      <div
        style={{
          padding: "6px 12px 5px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontSize: 12,
            fontWeight: 900,
            color: "#1c1c1e",
            fontStyle: "italic",
          }}
        >
          vibes
        </span>
        <div style={{ display: "flex", gap: 10 }}>
          <span style={{ fontSize: 11, color: "rgba(0,0,0,0.5)" }}>♡</span>
          <span style={{ fontSize: 11, color: "rgba(0,0,0,0.5)" }}>✉</span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: 7,
          padding: "0 12px 7px",
          overflow: "hidden",
        }}
      >
        {[
          { l: "You", add: true, g: "" },
          { l: "sarah_k", add: false, g: "linear-gradient(45deg,#f09433,#bc1888)" },
          { l: "alex.d", add: false, g: "linear-gradient(45deg,#405de6,#833ab4)" },
          { l: "mia.r", add: false, g: "linear-gradient(45deg,#f9a825,#e91e63)" },
        ].map((s, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: s.add ? "transparent" : s.g,
                padding: s.add ? 0 : 1.5,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background: s.add ? "rgba(0,0,0,0.06)" : "#fff",
                  border: s.add
                    ? "2px dashed rgba(0,0,0,0.2)"
                    : "2px solid #fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontSize: s.add ? 11 : 7.5,
                    color: "rgba(0,0,0,0.4)",
                    fontWeight: 800,
                  }}
                >
                  {s.add ? "+" : s.l.slice(0, 2).toUpperCase()}
                </span>
              </div>
            </div>
            <span style={{ fontSize: 4, color: "rgba(0,0,0,0.5)" }}>
              {s.l.slice(0, 6)}
            </span>
          </div>
        ))}
      </div>

      <div
        style={{
          margin: "0 12px 6px",
          borderRadius: 14,
          overflow: "hidden",
          border: "1px solid #f2f2f7",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            padding: "5px 8px",
            borderBottom: "1px solid #f2f2f7",
          }}
        >
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: "linear-gradient(135deg,#f09433,#bc1888)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: 7, color: "#fff", fontWeight: 900 }}>
              S
            </span>
          </div>
          <span style={{ fontSize: 6.5, fontWeight: 700, color: "#1c1c1e" }}>
            sarah_k
          </span>
          <span style={{ fontSize: 5, color: "#8e8e93", marginLeft: "auto" }}>
            2h
          </span>
        </div>
        <div
          style={{
            height: 58,
            background:
              "linear-gradient(135deg,#0f0c29,#302b63,#c05020)",
            display: "flex",
            alignItems: "flex-end",
            padding: "0 10px 6px",
          }}
        >
          <span
            style={{
              fontSize: 6,
              color: "rgba(255,255,255,0.85)",
              fontWeight: 600,
            }}
          >
            Golden hour ✨
          </span>
        </div>
        <div
          style={{ padding: "4px 8px", display: "flex", gap: 8 }}
        >
          <span style={{ fontSize: 6, color: "#e1306c" }}>❤ 2.4k</span>
          <span style={{ fontSize: 6, color: "#8e8e93" }}>💬 89</span>
        </div>
      </div>

      <div
        style={{
          margin: "0 12px",
          borderRadius: 14,
          overflow: "hidden",
          border: "1px solid #f2f2f7",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            padding: "5px 8px",
            borderBottom: "1px solid #f2f2f7",
          }}
        >
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: "linear-gradient(135deg,#405de6,#833ab4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: 7, color: "#fff", fontWeight: 900 }}>
              A
            </span>
          </div>
          <span style={{ fontSize: 6.5, fontWeight: 700, color: "#1c1c1e" }}>
            alex.dev
          </span>
        </div>
        <div
          style={{
            padding: "8px",
            background: "#f8f8ff",
            display: "flex",
            alignItems: "center",
            gap: 5,
          }}
        >
          <span style={{ fontSize: 7, color: "#5e5ce6", fontWeight: 700 }}>
            Shipped v2.0 🚀
          </span>
        </div>
        <div
          style={{ padding: "4px 8px", display: "flex", gap: 8 }}
        >
          <span style={{ fontSize: 6, color: "#8e8e93" }}>❤ 847</span>
          <span style={{ fontSize: 6, color: "#8e8e93" }}>💬 42</span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   Phone definitions
═══════════════════════════════════════════════════════ */
type PhoneDef = {
  name: string;
  category: string;
  accent: string;
  dark: boolean;
  content: React.ReactNode;
};

const PHONES: PhoneDef[] = [
  {
    name: "VITALS",
    category: "Activity Tracker",
    accent: "#30d158",
    dark: false,
    content: <VitalsContent />,
  },
  {
    name: "FLUX",
    category: "Finance Dashboard",
    accent: "#0a84ff",
    dark: false,
    content: <FluxContent />,
  },
  {
    name: "DREAM",
    category: "Sleep Tracker",
    accent: "#bf5af2",
    dark: true,
    content: <DreamContent />,
  },
  {
    name: "ZEN",
    category: "Mindfulness",
    accent: "#ff6b81",
    dark: false,
    content: <ZenContent />,
  },
  {
    name: "TASK",
    category: "Productivity",
    accent: "#5e5ce6",
    dark: false,
    content: <TaskContent />,
  },
  {
    name: "EATS",
    category: "Food Delivery",
    accent: "#ff9f0a",
    dark: false,
    content: <EatsContent />,
  },
  {
    name: "PULSE",
    category: "Music Player",
    accent: "#1DB954",
    dark: true,
    content: <PulseContent />,
  },
  {
    name: "SNAP",
    category: "Social Feed",
    accent: "#e1306c",
    dark: false,
    content: <SnapContent />,
  },
];

const MARQUEE: PhoneDef[] = [...PHONES, ...PHONES];

/* ═══════════════════════════════════════════════════════
   Phone frame — light or dark variant
═══════════════════════════════════════════════════════ */
function PhoneFrame({ phone }: { phone: PhoneDef }) {
  return (
    <div
      style={{
        width: 160,
        height: 322,
        borderRadius: 36,
        border: phone.dark ? "7px solid #2c2c2e" : "7px solid #d1d1d6",
        background: phone.dark ? "#1c1c1e" : "#fff",
        overflow: "hidden",
        position: "relative",
        flexShrink: 0,
        boxShadow: phone.dark
          ? "0 28px 70px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.04)"
          : "0 20px 56px rgba(0,0,0,0.22), 0 0 0 1px rgba(0,0,0,0.05)",
      }}
    >
      {/* Dynamic Island */}
      <div
        style={{
          position: "absolute",
          top: 9,
          left: "50%",
          transform: "translateX(-50%)",
          width: 74,
          height: 22,
          borderRadius: 20,
          background: phone.dark ? "#000" : "#1c1c1e",
          zIndex: 30,
        }}
      />

      {/* Status bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 36,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          padding: "0 16px 4px",
          zIndex: 20,
        }}
      >
        <span
          style={{
            fontSize: 7.5,
            fontWeight: 700,
            color: phone.dark ? "rgba(255,255,255,0.9)" : "#1c1c1e",
          }}
        >
          9:41
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
          <svg width="11" height="7" viewBox="0 0 11 7">
            {[0, 1, 2].map((i) => (
              <rect
                key={i}
                x={i * 3.5}
                y={7 - (i + 1) * 2}
                width={2.5}
                height={(i + 1) * 2}
                rx="0.5"
                fill={
                  phone.dark ? "rgba(255,255,255,0.8)" : "#1c1c1e"
                }
              />
            ))}
          </svg>
          <svg width="14" height="7" viewBox="0 0 14 7">
            <rect
              x="0"
              y="1"
              width="11.5"
              height="5"
              rx="1.5"
              fill="none"
              stroke={phone.dark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.35)"}
              strokeWidth="0.8"
            />
            <rect
              x="12"
              y="2.5"
              width="2"
              height="2"
              rx="0.5"
              fill={phone.dark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.25)"}
            />
            <rect
              x="1"
              y="2"
              width="8"
              height="3"
              rx="1"
              fill={phone.dark ? "#30d158" : "#30d158"}
            />
          </svg>
        </div>
      </div>

      {/* Scrollable content area */}
      <div
        style={{
          position: "absolute",
          top: 36,
          left: 0,
          right: 0,
          bottom: 20,
          overflow: "hidden",
        }}
      >
        {phone.content}
      </div>

      {/* Home bar */}
      <div
        style={{
          position: "absolute",
          bottom: 6,
          left: "50%",
          transform: "translateX(-50%)",
          width: 50,
          height: 4,
          borderRadius: 2,
          background: phone.dark
            ? "rgba(255,255,255,0.25)"
            : "rgba(0,0,0,0.18)",
          zIndex: 20,
        }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   Hero section
═══════════════════════════════════════════════════════ */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(ellipse,#3b82f6 0%,transparent 70%)",
        }}
      />

      {/* ── Hero text + CTAs + prompt ── */}
      <div className="relative mx-auto max-w-4xl px-4 pt-20 pb-14 text-center">
        <div
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-sm font-semibold text-white"
          style={{ background: "rgba(255,255,255,0.08)" }}
        >
          <Sparkles className="h-3.5 w-3.5 text-blue-400" />
          V2 Now Available
        </div>

        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Design apps in seconds
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-400">
          Generate beautiful app UIs with AI and iterate on your ideas instantly
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/50 hover:bg-blue-500 transition-colors"
          >
            Start Creating <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="#demo"
            className="inline-flex items-center rounded-xl border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            See it live
          </a>
        </div>

        {/* ── Trust signals ── */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Star rating */}
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} width="13" height="13" viewBox="0 0 13 13" aria-hidden>
                    <path
                      d="M6.5 1l1.54 3.13 3.46.5-2.5 2.44.59 3.43L6.5 9l-3.09 1.5.59-3.43L1.5 4.63l3.46-.5z"
                      fill="#f59e0b"
                    />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-slate-400">
                <span className="font-semibold text-white">4.9</span> · 120 reviews
              </span>
            </div>
            <span className="hidden h-4 w-px bg-white/10 sm:block" />
            <span className="text-sm text-slate-400">
              <span className="font-semibold text-white">2,400+</span> apps generated
            </span>
            <span className="hidden h-4 w-px bg-white/10 sm:block" />
            <span className="text-sm text-slate-400">
              <span className="font-semibold text-white">Free</span> to get started
            </span>
          </div>
          {/* Trusted-by strip */}
          <p className="mt-1 text-xs font-medium uppercase tracking-widest text-slate-600">
            Trusted at&nbsp;
            <span className="text-slate-500">Stripe · Notion · Linear · Vercel · Arc</span>
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-2xl">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
            <span className="flex-1 text-left text-sm text-slate-500">
              Design a sleek fitness tracking app with dark mode and animated
              charts...
            </span>
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-500 cursor-pointer transition-colors">
              <ArrowRight className="h-4 w-4 text-white" />
            </div>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {[
              "Fitness App",
              "Habit Tracker",
              "Digital Gallery",
              "Journaling App",
            ].map((chip) => (
              <span
                key={chip}
                className="cursor-pointer rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-400 hover:border-blue-400/50 hover:text-blue-300 transition-colors"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scrolling phone marquee ── */}
      <div className="relative pb-28 overflow-hidden">
        {/* Left fade */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10"
          style={{
            background: "linear-gradient(to right, rgb(2,8,23), transparent)",
          }}
        />
        {/* Right fade */}
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10"
          style={{
            background: "linear-gradient(to left, rgb(2,8,23), transparent)",
          }}
        />

        <div
          className="marquee-track"
          style={{ display: "flex", gap: 20, width: "max-content" }}
        >
          {MARQUEE.map((phone, i) => (
            <PhoneFrame key={i} phone={phone} />
          ))}
        </div>
      </div>
    </section>
  );
}
