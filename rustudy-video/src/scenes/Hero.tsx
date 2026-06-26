import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { colors, fontFamily } from "../theme";
import { fadeUp } from "../motion";
import { Logo } from "../Logo";

export const Hero: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(circle at 50% 15%, #1a3a8f 0%, #0a1a4a 55%, #050d28 100%)",
        justifyContent: "center",
        alignItems: "center",
        fontFamily,
      }}
    >
      {/* stars */}
      {Array.from({ length: 60 }).map((_, i) => {
        const x = (i * 137.5) % 100;
        const y = (i * 71.3) % 70;
        const twinkle = 0.3 + 0.7 * Math.abs(Math.sin(frame / 20 + i));
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${x}%`,
              top: `${y}%`,
              width: 3,
              height: 3,
              borderRadius: "50%",
              background: "#fff",
              opacity: twinkle,
            }}
          />
        );
      })}

      <div style={{ position: "absolute", top: 70, ...fadeUp(frame, 0, 20, 20) }}>
        <Logo size={48} />
      </div>

      <div
        style={{
          textAlign: "center",
          padding: "0 140px",
          ...fadeUp(frame, 14, 22, 36),
        }}
      >
        <h1
          style={{
            color: colors.white,
            fontWeight: 700,
            fontSize: 108,
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            textShadow: "0 4px 40px rgba(0,0,0,0.45)",
            margin: 0,
          }}
        >
          Étudie en Russie.
          <br />
          Change ta vie.
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: 34,
            fontWeight: 500,
            marginTop: 28,
            ...fadeUp(frame, 40, 20, 24),
          }}
        >
          Universités de rang mondial · Frais abordables · Accompagnement total
        </p>
      </div>
    </AbsoluteFill>
  );
};
