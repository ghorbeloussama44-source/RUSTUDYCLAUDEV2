import React from "react";
import { interpolate } from "remotion";
import { colors } from "../theme";

export const DustPuff: React.FC<{
  x: number;
  y: number;
  frame: number;
  triggerFrame: number;
  duration?: number;
}> = ({ x, y, frame, triggerFrame, duration = 16 }) => {
  const t = frame - triggerFrame;
  if (t < 0 || t > duration) return null;
  const progress = t / duration;

  return (
    <>
      {[0, 1, 2, 3, 4].map((i) => {
        const angle = (i / 5) * Math.PI * 2 + 0.3;
        const dist = progress * 34;
        const size = 16 * (1 - progress * 0.55);
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x + Math.cos(angle) * dist,
              top: y + Math.sin(angle) * dist * 0.55,
              width: size,
              height: size,
              translate: "-50% -50%",
              borderRadius: "50%",
              background: colors.cream,
              opacity: (1 - progress) * 0.85,
            }}
          />
        );
      })}
    </>
  );
};

export const ImpactBurst: React.FC<{
  x: number;
  y: number;
  frame: number;
  triggerFrame: number;
  duration?: number;
  color?: string;
  size?: number;
}> = ({ x, y, frame, triggerFrame, duration = 10, color = colors.yellow, size = 74 }) => {
  const t = frame - triggerFrame;
  if (t < 0 || t > duration) return null;
  const progress = t / duration;
  const scale = interpolate(progress, [0, 0.35, 1], [0.2, 1.3, 0.5], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const opacity = interpolate(progress, [0, 0.15, 1], [0, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: size,
        height: size,
        translate: "-50% -50%",
        scale: `${scale}`,
        opacity,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: color,
          clipPath:
            "polygon(50% 0%, 61% 35%, 100% 50%, 61% 65%, 50% 100%, 39% 65%, 0% 50%, 39% 35%)",
        }}
      />
    </div>
  );
};

export const useShake = (
  frame: number,
  triggerFrame: number,
  duration = 7,
  amplitude = 7,
) => {
  const t = frame - triggerFrame;
  if (t < 0 || t > duration) return { x: 0, y: 0 };
  const decay = 1 - t / duration;
  return {
    x: Math.sin(t * 3.4) * amplitude * decay,
    y: Math.cos(t * 4.1) * amplitude * 0.6 * decay,
  };
};

export const GlowPulse: React.FC<{
  frame: number;
  triggerFrame: number;
  duration?: number;
  color?: string;
}> = ({ frame, triggerFrame, duration = 30, color = colors.purple }) => {
  const t = frame - triggerFrame;
  if (t < 0 || t > duration) return null;
  const progress = t / duration;
  const intensity = Math.sin(progress * Math.PI);

  return (
    <div
      style={{
        position: "absolute",
        inset: -intensity * 26,
        borderRadius: 30,
        boxShadow: `0 0 ${30 * intensity}px ${10 * intensity}px ${color}66`,
        pointerEvents: "none",
      }}
    />
  );
};

export const SpeedLines: React.FC<{
  x: number;
  y: number;
  angleDeg: number;
  frame: number;
  startFrame: number;
  endFrame: number;
}> = ({ x, y, angleDeg, frame, startFrame, endFrame }) => {
  if (frame < startFrame || frame > endFrame) return null;
  const progress = (frame - startFrame) / Math.max(1, endFrame - startFrame);
  const opacity = interpolate(progress, [0, 0.2, 1], [0, 0.6, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        rotate: `${angleDeg}deg`,
      }}
    >
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: -60 - i * 22,
            top: i * 10 - 10,
            width: 38,
            height: 4,
            borderRadius: 2,
            background: colors.white,
            opacity: opacity * (1 - i * 0.25),
          }}
        />
      ))}
    </div>
  );
};
