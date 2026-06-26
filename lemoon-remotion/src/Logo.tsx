import React from "react";
import { CitrusSlice } from "./CitrusSlice";
import { COLORS } from "./colors";

export const Logo: React.FC<{
  color?: string;
  size?: number;
  progress?: number;
  showTagline?: boolean;
  taglineColor?: string;
}> = ({
  color = COLORS.black,
  size = 110,
  progress = 1,
  showTagline = true,
  taglineColor = COLORS.white,
}) => {
  const sliceSize = size * 0.82;
  const textStyle: React.CSSProperties = {
    fontFamily: "Helvetica, Arial, sans-serif",
    fontWeight: 800,
    fontSize: size,
    color,
    lineHeight: 1,
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: size * 0.22,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: size * 0.04,
          opacity: progress,
        }}
      >
        <span style={textStyle}>LEM</span>
        <CitrusSlice size={sliceSize} progress={progress} rotate={(1 - progress) * -90} />
        <CitrusSlice size={sliceSize} progress={progress} rotate={(1 - progress) * 90} />
        <span style={textStyle}>N</span>
      </div>
      {showTagline && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: size * 0.14,
            opacity: progress,
          }}
        >
          <span
            style={{
              width: size * 0.45,
              height: 1,
              background: taglineColor,
              opacity: 0.7,
            }}
          />
          <span
            style={{
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 600,
              fontSize: size * 0.16,
              letterSpacing: size * 0.04,
              color: taglineColor,
            }}
          >
            LUXURY STREETWEAR
          </span>
          <span
            style={{
              width: size * 0.45,
              height: 1,
              background: taglineColor,
              opacity: 0.7,
            }}
          />
        </div>
      )}
    </div>
  );
};
