import React from "react";
import { colors, fontFamily } from "./theme";

export const Logo: React.FC<{ size?: number; light?: boolean }> = ({
  size = 56,
  light = true,
}) => {
  return (
    <div
      style={{
        fontFamily,
        fontWeight: 700,
        fontSize: size,
        letterSpacing: "-0.04em",
        color: light ? colors.white : colors.black,
        display: "flex",
      }}
    >
      Rus
      <span style={{ color: colors.purple }}>Study</span>.
    </div>
  );
};
