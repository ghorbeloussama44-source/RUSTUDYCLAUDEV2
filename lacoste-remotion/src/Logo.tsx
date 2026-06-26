import React from "react";
import { Crocodile, COLORS } from "./Crocodile";

export const Logo: React.FC<{
  color?: string;
  size?: number;
  withWordmark?: boolean;
  progress?: number;
}> = ({ color = COLORS.white, size = 140, withWordmark = true, progress = 1 }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 18,
      }}
    >
      <Crocodile color={color} size={size} progress={progress} />
      {withWordmark && (
        <div
          style={{
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: 700,
            fontSize: size * 0.34,
            letterSpacing: size * 0.07,
            color,
            opacity: progress,
          }}
        >
          LACOSTE
        </div>
      )}
    </div>
  );
};
