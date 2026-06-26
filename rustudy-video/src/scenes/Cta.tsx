import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { colors, fontFamily } from "../theme";
import { fadeUp } from "../motion";
import { Logo } from "../Logo";

export const Cta: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        background: colors.black,
        fontFamily,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "center", ...fadeUp(frame, 0, 18, 30) }}>
        <div
          style={{
            display: "inline-block",
            border: "2px solid rgba(168,85,247,0.5)",
            color: colors.purple,
            borderRadius: 50,
            padding: "10px 26px",
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Postuler
        </div>
        <h2
          style={{
            fontSize: 84,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: colors.white,
            margin: 0,
          }}
        >
          Prêt à changer ta vie ?
        </h2>
        <p style={{ fontSize: 30, opacity: 0.5, color: colors.white, marginTop: 18 }}>
          Consultation 100% gratuite. Réponse sous 24h.
        </p>
      </div>

      <div style={{ marginTop: 70, ...fadeUp(frame, 30, 18, 24) }}>
        <Logo size={56} />
      </div>

      <div
        style={{
          marginTop: 22,
          color: "rgba(255,255,255,0.4)",
          fontSize: 24,
          fontWeight: 500,
          ...fadeUp(frame, 40, 18, 20),
        }}
      >
        +7 996 433 4489 · contact@russieeetudes.com
      </div>
    </AbsoluteFill>
  );
};
