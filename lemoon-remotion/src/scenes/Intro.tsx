import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Logo } from "../Logo";
import { COLORS } from "../colors";

export const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({ frame, fps, config: { damping: 200, mass: 0.6 }, durationInFrames: 30 });
  const drawProgress = interpolate(frame, [0, 26], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [62, 80], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const flash = interpolate(frame, [0, 10, 22], [0, 0.18, 0], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.black,
        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(243,178,42,${flash}) 0%, rgba(0,0,0,0) 60%)`,
        justifyContent: "center",
        alignItems: "center",
        opacity: fadeOut,
      }}
    >
      <div style={{ transform: `scale(${scale})` }}>
        <Logo color={COLORS.white} size={120} progress={drawProgress} taglineColor={COLORS.yellow} />
      </div>
    </AbsoluteFill>
  );
};
