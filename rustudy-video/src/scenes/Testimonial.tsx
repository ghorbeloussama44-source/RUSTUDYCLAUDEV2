import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { colors, fontFamily } from "../theme";
import { fadeUp } from "../motion";

export const Testimonial: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        background: colors.purple,
        fontFamily,
        justifyContent: "center",
        alignItems: "center",
        padding: "0 160px",
      }}
    >
      <div style={{ ...fadeUp(frame, 0, 18, 30), textAlign: "center", maxWidth: 1300 }}>
        <div style={{ fontSize: 44, marginBottom: 24, letterSpacing: 6 }}>★★★★★</div>
        <p
          style={{
            fontSize: 46,
            fontWeight: 500,
            fontStyle: "italic",
            lineHeight: 1.4,
            color: colors.black,
            margin: 0,
          }}
        >
          « Je suis en 3ème année de médecine à Moscou et je ne regrette
          absolument rien. »
        </p>

        <div
          style={{
            marginTop: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 18,
            ...fadeUp(frame, 24, 18, 24),
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: "rgba(0,0,0,0.18)",
              display: "grid",
              placeItems: "center",
              fontSize: 28,
              fontWeight: 700,
              color: colors.black,
            }}
          >
            A
          </div>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontWeight: 700, fontSize: 26, color: colors.black }}>
              Ayoub Mansouri
            </div>
            <div style={{ fontSize: 20, opacity: 0.65, color: colors.black }}>
              Médecine — Moscou, 3ème année
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
