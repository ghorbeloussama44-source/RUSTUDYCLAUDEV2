import React from "react";
import { COLORS } from "./colors";

export const CitrusSlice: React.FC<{
  size?: number;
  rotate?: number;
  progress?: number;
}> = ({ size = 100, rotate = 0, progress = 1 }) => {
  const spokes = Array.from({ length: 8 }, (_, i) => i * 45);

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        position: "relative",
        transform: `rotate(${rotate}deg) scale(${progress})`,
        opacity: Math.min(1, progress + 0.4),
        background: `repeating-conic-gradient(${COLORS.yellow} 0deg 22.5deg, ${COLORS.orange} 22.5deg 45deg)`,
        boxShadow: `inset 0 0 0 ${Math.max(2, size * 0.045)}px ${COLORS.white}`,
        overflow: "hidden",
      }}
    >
      {spokes.map((deg) => (
        <div
          key={deg}
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            width: Math.max(1, size * 0.018),
            height: "100%",
            background: COLORS.white,
            transform: `translateX(-50%) rotate(${deg}deg)`,
            transformOrigin: "50% 50%",
          }}
        />
      ))}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: size * 0.16,
          height: size * 0.16,
          borderRadius: "50%",
          background: COLORS.white,
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};
