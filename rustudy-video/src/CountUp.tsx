import React from "react";
import { interpolate, useCurrentFrame, Easing } from "remotion";

export const CountUp: React.FC<{
  to: number;
  suffix?: string;
  startFrame?: number;
  durationInFrames?: number;
}> = ({ to, suffix = "", startFrame = 0, durationInFrames = 40 }) => {
  const frame = useCurrentFrame();

  const value = interpolate(
    frame,
    [startFrame, startFrame + durationInFrames],
    [0, to],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    },
  );

  return (
    <>
      {Math.round(value).toLocaleString("fr-FR")}
      {suffix}
    </>
  );
};
