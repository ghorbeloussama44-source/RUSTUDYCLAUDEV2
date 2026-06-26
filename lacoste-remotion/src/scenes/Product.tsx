import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Polo } from "../Polo";
import { COLORS } from "../Crocodile";

const SWATCHES = [
  { color: "#FFFFFF", label: "Classic White" },
  { color: "#0B4D32", label: "Heritage Green" },
  { color: "#13315C", label: "Navy Blue" },
  { color: "#B3122A", label: "Bold Red" },
  { color: "#E8C547", label: "Sunny Yellow" },
];

export const Product: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const fadeOut = interpolate(frame, [70, 90], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const titleOpacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.green,
        justifyContent: "center",
        alignItems: "center",
        opacity: fadeOut,
      }}
    >
      <div
        style={{
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 700,
          fontSize: 40,
          letterSpacing: 4,
          color: COLORS.white,
          opacity: titleOpacity,
          marginBottom: 36,
        }}
      >
        THE CLASSIC POLO &middot; SINCE 1933
      </div>
      <div style={{ display: "flex", gap: 36 }}>
        {SWATCHES.map((s, i) => {
          const delay = 8 + i * 6;
          const pop = spring({
            frame: frame - delay,
            fps,
            config: { damping: 12, mass: 0.5 },
          });
          const labelOpacity = interpolate(
            frame,
            [delay + 14, delay + 24],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );
          return (
            <div
              key={s.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
                transform: `scale(${pop})`,
              }}
            >
              <div
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.08)",
                  border: "2px solid rgba(255,255,255,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Polo color={s.color} size={100} />
              </div>
              <div
                style={{
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontSize: 16,
                  color: COLORS.white,
                  opacity: labelOpacity,
                }}
              >
                {s.label}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
