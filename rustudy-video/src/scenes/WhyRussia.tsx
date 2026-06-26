import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { colors, fontFamily } from "../theme";
import { slideIn } from "../motion";

const cards = [
  {
    label: "Pourquoi la Russie",
    title: "Diplômes reconnus dans 100+ pays.",
    bg: colors.blue,
    fg: colors.white,
  },
  {
    label: "Coût",
    title: "Dès 2 200 €/an.",
    bg: colors.yellow,
    fg: colors.black,
  },
  {
    label: "Bourses",
    title: "Bourses d'état disponibles.",
    bg: colors.orange,
    fg: colors.black,
  },
];

export const WhyRussia: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        background: colors.cream,
        fontFamily,
        justifyContent: "center",
        alignItems: "center",
        padding: "0 120px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 28, width: "100%" }}>
        {cards.map((c, i) => (
          <div
            key={c.title}
            style={{
              background: c.bg,
              color: c.fg,
              borderRadius: 28,
              padding: "44px 56px",
              ...slideIn(frame, i * 14, 22, 90, i % 2 === 0 ? "left" : "right"),
            }}
          >
            <div
              style={{
                display: "inline-block",
                border: `2px solid ${c.fg}55`,
                borderRadius: 50,
                padding: "8px 22px",
                fontSize: 22,
                fontWeight: 600,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              {c.label}
            </div>
            <h2
              style={{
                fontSize: 58,
                fontWeight: 700,
                letterSpacing: "-0.04em",
                margin: 0,
              }}
            >
              {c.title}
            </h2>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
