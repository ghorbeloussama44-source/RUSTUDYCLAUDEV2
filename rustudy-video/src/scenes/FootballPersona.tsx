import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, Easing } from "remotion";
import { colors, fontFamily } from "../theme";
import { CuteCharacter } from "../rig/CuteCharacter";

const LOOP = 150;

const ease = Easing.bezier(0.45, 0, 0.55, 1);

const Ball: React.FC<{ x: number; y: number; size: number; rotate: number; opacity: number }> = ({
  x,
  y,
  size,
  rotate,
  opacity,
}) => (
  <div
    style={{
      position: "absolute",
      left: x - size / 2,
      top: y - size / 2,
      width: size,
      height: size,
      borderRadius: "50%",
      background: "radial-gradient(circle at 35% 30%, #ffffff 0%, #e8e8e8 70%, #cfcfcf 100%)",
      boxShadow: "0 6px 18px rgba(0,0,0,0.3)",
      rotate: `${rotate}deg`,
      opacity,
    }}
  >
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        width: size * 0.42,
        height: size * 0.42,
        translate: "-50% -50%",
        background: colors.black,
        clipPath:
          "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
      }}
    />
    {[0, 72, 144, 216, 288].map((deg) => (
      <div
        key={deg}
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: size * 0.34,
          height: 3,
          background: colors.black,
          translate: "0% -50%",
          rotate: `${deg}deg`,
          transformOrigin: "0% 50%",
        }}
      />
    ))}
  </div>
);

export const FootballPersona: React.FC = () => {
  const rawFrame = useCurrentFrame();
  const frame = rawFrame % LOOP;

  // Hip anchor point (pivot for legs, reference for everything else)
  const hipX = 430;
  const hipY = 720;

  // idle bob before/after the kick sequence
  const idleBob = Math.sin((rawFrame / 14) * Math.PI) * 6;

  const jumpY = interpolate(
    frame,
    [0, 95, 108, 122, 150],
    [0, 0, -110, 0, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: ease },
  );

  const bodyY = hipY + jumpY - (frame < 95 ? idleBob : 0);

  const torsoLean = interpolate(
    frame,
    [18, 36, 48, 58, 95],
    [0, -10, 14, 4, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: ease },
  );

  // kicking leg (right)
  const rightLegAngle = interpolate(
    frame,
    [0, 18, 36, 48, 58, 78, 95, 150],
    [0, 0, -48, 78, 60, 20, 0, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: ease },
  );

  // planted leg (left)
  const leftLegAngle = interpolate(
    frame,
    [0, 18, 36, 48, 95, 108, 122, 150],
    [0, 0, 8, -6, 0, -30, 0, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: ease },
  );

  const rightArmAngle = interpolate(
    frame,
    [0, 36, 48, 95, 108, 122, 150],
    [10, -30, 30, 10, -170, -150, 10],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: ease },
  );

  const leftArmAngle = interpolate(
    frame,
    [0, 36, 48, 95, 108, 122, 150],
    [-10, 30, -25, -10, 170, 150, -10],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: ease },
  );

  // ball: rests at right foot, launches on contact (~frame 48), exits top-right
  const footX = hipX + 60;
  const footY = hipY + 100;

  const ballX = interpolate(
    frame,
    [0, 47, 50, 60, 75, 95],
    [footX, footX, footX + 30, footX + 230, footX + 480, footX + 760],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const ballY = interpolate(
    frame,
    [0, 47, 50, 60, 75, 95],
    [footY, footY, footY - 30, footY - 220, footY - 360, footY - 430],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: ease },
  );

  const ballRotate = interpolate(frame, [0, 50, 95], [0, 0, 900], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const ballOpacity = interpolate(frame, [0, 90, 95], [1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background:
          "repeating-linear-gradient(90deg, #1f8a4c 0px, #1f8a4c 120px, #1c7e45 120px, #1c7e45 240px)",
        fontFamily,
        overflow: "hidden",
      }}
    >
      {/* pitch lines */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 60,
          height: 4,
          background: "rgba(255,255,255,0.55)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 60,
          width: 4,
          height: 960,
          background: "rgba(255,255,255,0.55)",
          translate: "-50% 0",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 480,
          width: 280,
          height: 280,
          border: "4px solid rgba(255,255,255,0.55)",
          borderRadius: "50%",
          translate: "-50% -50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 220,
          background: "rgba(0,0,0,0.12)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 56,
          left: "50%",
          translate: "-50% 0",
          color: "rgba(255,255,255,0.85)",
          fontWeight: 700,
          fontSize: 40,
          letterSpacing: "-0.03em",
        }}
      >
        Rus<span style={{ color: colors.yellow }}>Study</span>.
      </div>

      <Ball x={ballX} y={ballY} size={64} rotate={ballRotate} opacity={ballOpacity} />

      <CuteCharacter
        hipX={hipX}
        bodyY={bodyY}
        torsoLean={torsoLean}
        leftArmAngle={leftArmAngle}
        rightArmAngle={rightArmAngle}
        leftLegAngle={leftLegAngle}
        rightLegAngle={rightLegAngle}
      />
    </AbsoluteFill>
  );
};
