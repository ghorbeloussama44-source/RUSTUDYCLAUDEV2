import React from "react";

export const Polo: React.FC<{ color: string; size?: number }> = ({
  color,
  size = 160,
}) => {
  const w = size;
  const h = size * 1.1;
  return (
    <svg width={w} height={h} viewBox="0 0 100 110">
      <path
        d="M30,8 L20,18 L4,28 L12,46 L24,40 L24,100 C24,104 28,106 32,106
           L68,106 C72,106 76,104 76,100 L76,40 L88,46 L96,28 L80,18 L70,8
           C70,8 62,16 50,16 C38,16 30,8 30,8 Z"
        fill={color}
        stroke="rgba(255,255,255,0.5)"
        strokeWidth={1.5}
      />
      <path d="M44,8 L50,20 L56,8 L50,2 Z" fill="rgba(0,0,0,0.18)" />
      <circle cx="62" cy="34" r="3" fill="rgba(0,0,0,0.22)" />
      <line x1="50" y1="22" x2="50" y2="40" stroke="rgba(0,0,0,0.12)" strokeWidth={1} />
    </svg>
  );
};
