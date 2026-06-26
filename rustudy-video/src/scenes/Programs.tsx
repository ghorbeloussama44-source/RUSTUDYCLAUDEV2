import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { colors, fontFamily } from "../theme";
import { fadeUp } from "../motion";

const programs = [
  { title: "Médecine Générale", meta: "6 ans · 3 500 €/an", bg: colors.blue, fg: colors.white },
  { title: "Ingénierie & Tech", meta: "5 ans · 2 800 €/an", bg: colors.orange, fg: colors.black },
  { title: "Pharmacie & Dentaire", meta: "5 ans · 3 200 €/an", bg: colors.yellow, fg: colors.black },
  { title: "Économie & Business", meta: "4-5 ans · 2 200 €/an", bg: colors.purple, fg: colors.white },
];

export const Programs: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        background: colors.cream,
        fontFamily,
        justifyContent: "center",
        alignItems: "center",
        padding: "0 110px",
      }}
    >
      <div style={{ ...fadeUp(frame, 0, 16, 26), marginBottom: 48 }}>
        <h2
          style={{
            fontSize: 60,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: colors.black,
            margin: 0,
            textAlign: "center",
          }}
        >
          Des filières qui ouvrent des portes.
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 28,
          width: "100%",
        }}
      >
        {programs.map((p, i) => (
          <div
            key={p.title}
            style={{
              background: p.bg,
              color: p.fg,
              borderRadius: 26,
              padding: "40px 44px",
              ...fadeUp(frame, 14 + i * 8, 18, 34),
            }}
          >
            <div
              style={{
                fontSize: 22,
                fontWeight: 600,
                opacity: 0.7,
                marginBottom: 12,
                letterSpacing: "0.03em",
              }}
            >
              {p.meta}
            </div>
            <h3 style={{ fontSize: 42, fontWeight: 700, letterSpacing: "-0.03em", margin: 0 }}>
              {p.title}
            </h3>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
