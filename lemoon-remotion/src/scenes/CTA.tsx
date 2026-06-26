import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Logo } from "../Logo";
import { COLORS } from "../colors";

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
        <Logo color={COLORS.black} size={100} taglineColor={COLORS.orange} />
        <div
          style={{
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: 800,
            fontSize: 32,
            color: COLORS.black,
            textAlign: "center",
          }}
        >
          NEW DROP. LIMITED RUN.
        </div>
        <div
          style={{
            transform: `scale(${buttonScale * (frame > 20 ? buttonPulse : 1)})`,
            backgroundColor: COLORS.black,
            color: COLORS.yellow,
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: 800,
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
            color: COLORS.grey,
            opacity: 0.85,
            marginTop: 6,
          }}
        >
          LEMOON.COM &nbsp;&middot;&nbsp; @LEMOON
        </div>
      </div>
    </AbsoluteFill>
  );
};
