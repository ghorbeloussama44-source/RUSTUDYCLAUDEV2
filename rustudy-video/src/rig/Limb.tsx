import React from "react";

export const Limb: React.FC<{
  left: number;
  top: number;
  width: number;
  length: number;
  angle: number;
  color: string;
  radius?: number;
}> = ({ left, top, width, length, angle, color, radius = 18 }) => (
  <div
    style={{
      position: "absolute",
      left,
      top,
      width,
      height: length,
      background: color,
      borderRadius: radius,
      transformOrigin: "50% 0%",
      rotate: `${angle}deg`,
    }}
  />
);
