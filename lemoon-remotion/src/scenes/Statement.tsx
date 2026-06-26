import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS } from "../colors";

const WORDS = [
  { text: "STREET", color: COLORS.white },
  { text: "ROOTS.", color: COLORS.yellow },
  { text: "LUXURY", color: COLORS.white },
  { text: "EDGE.", color: COLORS.orange },
];

export const Statement: React.FC = () => {
  const frame = useCurrentFrame();
  const fadeOut = interpolate(frame, [70, 90], [1, 0], {
    extrapolateLeft: "clamp",
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
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 20,
          maxWidth: "82%",
        }}
      >
        {WORDS.map((word, i) => {
          const start = i * 10;
          const opacity = interpolate(frame, [start, start + 14], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          const y = interpolate(frame, [start, start + 14], [26, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          return (
            <span
              key={word.text}
              style={{
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: 800,
                fontSize: 76,
                color: word.color,
                opacity,
                transform: `translateY(${y}px)`,
              }}
            >
              {word.text}
            </span>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
