import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { colors, fontFamily } from "../theme";
import { fadeUp } from "../motion";
import { CountUp } from "../CountUp";

const stats: { value: number; suffix: string; label: string; color: string }[] = [
  { value: 1200, suffix: "+", label: "Étudiants placés", color: colors.purple },
  { value: 40, suffix: "+", label: "Universités partenaires", color: colors.yellow },
  { value: 10, suffix: " ans", label: "D'expérience", color: colors.green },
];

export const Stats: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        background: colors.cream,
        fontFamily,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ ...fadeUp(frame, 0, 18, 30), marginBottom: 64 }}>
        <h2
          style={{
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: colors.black,
            margin: 0,
            textAlign: "center",
          }}
        >
          La confiance de milliers d'étudiants tunisiens.
        </h2>
      </div>

      <div style={{ display: "flex", gap: 36 }}>
        {stats.map((s, i) => (
          <div
            key={s.label}
            style={{
              background: colors.black,
              borderRadius: 28,
              padding: "48px 56px",
              textAlign: "center",
              width: 360,
              ...fadeUp(frame, 16 + i * 10, 20, 36),
            }}
          >
            <div
              style={{
                fontSize: 76,
                fontWeight: 700,
                letterSpacing: "-0.04em",
                color: s.color,
              }}
            >
              <CountUp to={s.value} suffix={s.suffix} startFrame={16 + i * 10} durationInFrames={45} />
            </div>
            <div
              style={{
                fontSize: 24,
                opacity: 0.55,
                color: colors.white,
                marginTop: 10,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontWeight: 500,
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
