import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Logo, } from "../Logo";
import { COLORS } from "../Crocodile";

export const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({ frame, fps, config: { damping: 200, mass: 0.6 }, durationInFrames: 30 });
  const drawProgress = interpolate(frame, [0, 26], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [60, 78], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const glow = interpolate(frame, [0, 40], [0, 0.5], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.green,
        backgroundImage: `radial-gradient(circle at 50% 45%, rgba(255,255,255,${glow}) 0%, rgba(255,255,255,0) 60%)`,
        justifyContent: "center",
        alignItems: "center",
        opacity: fadeOut,
      }}
    >
      <div style={{ transform: `scale(${scale})` }}>
        <Logo color={COLORS.white} size={170} progress={drawProgress} />
      </div>
    </AbsoluteFill>
  );
};
