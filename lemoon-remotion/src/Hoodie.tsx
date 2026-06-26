import React from "react";

export const Hoodie: React.FC<{ color: string; size?: number }> = ({
  color,
  size = 160,
}) => {
  const w = size;
  const h = size * 1.1;
  return (
    <svg width={w} height={h} viewBox="0 0 100 110">
      <path
        d="M50,4 C36,4 28,12 26,20 L8,28 L14,46 L24,42 L24,96
           C24,102 30,106 38,106 L62,106 C70,106 76,102 76,96
           L76,42 L86,46 L92,28 L74,20 C72,12 64,4 50,4 Z"
        fill={color}
        stroke="rgba(255,255,255,0.45)"
        strokeWidth={1.5}
      />
      <path
        d="M38,20 C40,30 44,36 50,36 C56,36 60,30 62,20"
        fill="none"
        stroke="rgba(0,0,0,0.25)"
        strokeWidth={1.5}
      />
      <line x1="50" y1="40" x2="50" y2="62" stroke="rgba(0,0,0,0.18)" strokeWidth={1} />
      <circle cx="46" cy="56" r="1.6" fill="rgba(0,0,0,0.3)" />
      <circle cx="54" cy="56" r="1.6" fill="rgba(0,0,0,0.3)" />
    </svg>
  );
};
