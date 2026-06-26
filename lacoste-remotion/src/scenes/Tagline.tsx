import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS } from "../Crocodile";

const WORDS = ["LIFE", "IS", "A", "BEAUTIFUL", "SPORT."];

export const Tagline: React.FC = () => {
  const frame = useCurrentFrame();
  const fadeOut = interpolate(frame, [70, 90], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.cream,
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
          gap: 16,
          maxWidth: "80%",
        }}
      >
        {WORDS.map((word, i) => {
          const start = i * 10;
          const opacity = interpolate(frame, [start, start + 14], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          const y = interpolate(frame, [start, start + 14], [24, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          return (
            <span
              key={word}
              style={{
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: 700,
                fontSize: 72,
                color: COLORS.green,
                opacity,
                transform: `translateY(${y}px)`,
              }}
            >
              {word}
            </span>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
