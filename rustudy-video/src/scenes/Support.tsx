import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { colors, fontFamily } from "../theme";
import { fadeUp, floatY, popIn } from "../motion";

const items = [
  "3 000 Tunisiens déjà là-bas",
  "Suivi WhatsApp 24/7",
  "Chambre prête à l'arrivée",
];

export const Support: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        background: colors.green,
        fontFamily,
        justifyContent: "center",
        alignItems: "center",
        padding: "0 140px",
      }}
    >
      <div style={{ ...fadeUp(frame, 0, 18, 30), textAlign: "center" }}>
        <div
          style={{
            display: "inline-block",
            border: "2px solid rgba(0,0,0,0.25)",
            borderRadius: 50,
            padding: "10px 26px",
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: colors.black,
            marginBottom: 26,
          }}
        >
          Accompagnement total
        </div>
        <h2
          style={{
            fontSize: 66,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: colors.black,
            margin: 0,
          }}
        >
          On gère tout. Toi, tu te concentres sur tes études.
        </h2>
      </div>

      <div style={{ display: "flex", gap: 24, marginTop: 56 }}>
        {items.map((item, i) => {
          const start = 20 + i * 10;
          return (
            <div
              key={item}
              style={{
                ...fadeUp(frame, start, 18, 28),
                scale: popIn(frame, start, 20).scale,
              }}
            >
              <div
                style={{
                  background: colors.black,
                  color: colors.white,
                  borderRadius: 50,
                  padding: "20px 36px",
                  fontSize: 26,
                  fontWeight: 600,
                  translate: `0px ${floatY(frame - start, 4, 22)}px`,
                }}
              >
                {item}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
