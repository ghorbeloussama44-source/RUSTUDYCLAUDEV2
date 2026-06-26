import React from "react";

export const COLORS = {
  green: "#0B4D32",
  greenDark: "#06311F",
  cream: "#F6F1E7",
  white: "#FFFFFF",
};

export const Crocodile: React.FC<{
  color?: string;
  size?: number;
  progress?: number;
}> = ({ color = COLORS.white, size = 200, progress = 1 }) => {
  const spineBumps = [
    { x: 78, y: 32, h: 8 },
    { x: 93, y: 30, h: 11 },
    { x: 108, y: 29, h: 13 },
    { x: 123, y: 30, h: 11 },
    { x: 138, y: 32, h: 8 },
  ];
  const legs = [
    { x: 72, y: 66 },
    { x: 92, y: 68 },
    { x: 112, y: 68 },
    { x: 132, y: 66 },
  ];

  return (
    <svg
      width={size}
      height={size * 0.5}
      viewBox="0 0 220 100"
      style={{ overflow: "visible" }}
    >
      <g opacity={progress}>
        {/* tail */}
        <path d="M2,50 L42,36 L42,64 Z" fill={color} />
        {/* legs */}
        {legs.map((p, i) => (
          <ellipse key={i} cx={p.x} cy={p.y} rx={9} ry={6} fill={color} />
        ))}
        {/* body */}
        <ellipse cx={100} cy={50} rx={58} ry={20} fill={color} />
        {/* head */}
        <ellipse cx={168} cy={46} rx={24} ry={14} fill={color} />
        {/* snout */}
        <path d="M180,38 L214,43 L180,54 Z" fill={color} />
        {/* eye */}
        <circle cx={162} cy={34} r={6} fill={color} />
        <circle cx={163} cy={33} r={2.4} fill={COLORS.greenDark} />
      </g>
      {/* spine bumps reveal progressively */}
      {spineBumps.map((p, i) => {
        const reveal = Math.min(
          1,
          Math.max(0, progress * spineBumps.length - i)
        );
        return (
          <polygon
            key={i}
            points={`${p.x - 7},${p.y} ${p.x + 7},${p.y} ${p.x},${
              p.y - p.h * reveal
            }`}
            fill={color}
          />
        );
      })}
    </svg>
  );
};
