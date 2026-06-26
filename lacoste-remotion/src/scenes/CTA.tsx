import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Logo } from "../Logo";
import { COLORS } from "../Crocodile";

export const CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const fadeIn = interpolate(frame, [0, 14], [0, 1], {
    extrapolateRight: "clamp",
  });
  const buttonScale = spring({
    frame: frame - 20,
    fps,
    config: { damping: 14, mass: 0.5 },
  });
  const buttonPulse = 1 + Math.sin(frame / 8) * 0.03;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.cream,
        justifyContent: "center",
        alignItems: "center",
        opacity: fadeIn,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 28,
        }}
      >
        <Logo color={COLORS.green} size={110} />
        <div
          style={{
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: 700,
            fontSize: 32,
            color: COLORS.green,
            textAlign: "center",
          }}
        >
          DISCOVER THE NEW COLLECTION
        </div>
        <div
          style={{
            transform: `scale(${buttonScale * (frame > 20 ? buttonPulse : 1)})`,
            backgroundColor: COLORS.green,
            color: COLORS.white,
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: 700,
            fontSize: 22,
            letterSpacing: 2,
            padding: "18px 48px",
            borderRadius: 40,
          }}
        >
          SHOP NOW
        </div>
        <div
          style={{
            fontFamily: "Helvetica, Arial, sans-serif",
            fontSize: 18,
            color: COLORS.greenDark,
            opacity: 0.8,
            marginTop: 6,
          }}
        >
          LACOSTE.COM
        </div>
      </div>
    </AbsoluteFill>
  );
};
