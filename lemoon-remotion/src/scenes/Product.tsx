import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Hoodie } from "../Hoodie";
import { COLORS } from "../colors";

const SWATCHES = [
  { color: COLORS.black, label: "Blackout", outline: true },
  { color: COLORS.white, label: "Off White" },
  { color: COLORS.yellow, label: "Citrus" },
  { color: COLORS.orange, label: "Sunset" },
  { color: COLORS.grey, label: "Smoke" },
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
        backgroundColor: COLORS.black,
        justifyContent: "center",
        alignItems: "center",
        opacity: fadeOut,
      }}
    >
      <div
        style={{
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 800,
          fontSize: 40,
          letterSpacing: 4,
          color: COLORS.white,
          opacity: titleOpacity,
          marginBottom: 36,
        }}
      >
        THE DROP &middot; SEASON 01
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
                  background: "rgba(255,255,255,0.06)",
                  border: "2px solid rgba(255,255,255,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Hoodie color={s.color} size={100} />
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
