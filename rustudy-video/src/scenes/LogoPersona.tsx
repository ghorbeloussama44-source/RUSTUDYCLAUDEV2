import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { colors, fontFamily } from "../theme";
import { FoxKarateCharacter } from "../rig/FoxKarateCharacter";
import { Logo } from "../Logo";

const ease = Easing.bezier(0.45, 0, 0.55, 1);

export const LogoPersona: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const hipX = 540;
  const hipY = 640;

  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, mass: 0.6, stiffness: 120 },
    durationInFrames: 26,
  });
  const entranceY = interpolate(entrance, [0, 1], [260, 0]);
  const idleBob = Math.sin((frame / 16) * Math.PI) * 4;

  const bodyY = hipY + entranceY - idleBob;

  const torsoLean = interpolate(frame, [45, 70, 95, 160], [0, -9, -5, -5], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });

  const rightArmAngle = interpolate(
    frame,
    [0, 25, 45, 70, 95, 160],
    [12, 12, 58, -165, -158, -158],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: ease },
  );

  const leftArmAngle = interpolate(
    frame,
    [0, 25, 45, 70, 95, 160],
    [-12, -12, -58, 165, 158, 158],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: ease },
  );

  const legSway = Math.sin((frame / 40) * Math.PI) * 2;

  // plaque: the logo sign the persona lifts overhead
  const liftSpring = spring({
    frame: frame - 45,
    fps,
    config: { damping: 11, mass: 0.7, stiffness: 130 },
    durationInFrames: 32,
  });

  const groundY = hipY + 130;
  const overheadY = hipY - 440;

  const plaqueY = interpolate(liftSpring, [0, 1], [groundY, overheadY]);
  const plaqueScale = interpolate(liftSpring, [0, 1], [0.82, 1.22]);

  const plaqueOpacity = interpolate(frame, [10, 24], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const plaqueSpin = interpolate(frame, [45, 78], [0, 360], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const plaqueIdleWiggle =
    frame > 95 ? Math.sin(((frame - 95) / 20) * Math.PI) * 4 : 0;

  const groundWobble =
    frame >= 24 && frame < 45 ? Math.sin((frame / 6) * Math.PI) * 3 : 0;

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at 50% 38%, ${colors.cream} 0%, #e7e0d4 55%, #d9d0c1 100%)`,
        fontFamily,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 360,
          width: 760,
          height: 760,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${colors.purple}22 0%, transparent 70%)`,
          translate: "-50% -50%",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: hipX,
          top: hipY + 130,
          width: 260,
          height: 36,
          borderRadius: "50%",
          background: "rgba(10,10,10,0.18)",
          translate: "-50% -50%",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: hipX,
          top: plaqueY,
          width: 380,
          height: 156,
          translate: "-50% -50%",
          scale: plaqueScale,
          rotate: `${plaqueSpin + plaqueIdleWiggle + groundWobble}deg`,
          opacity: plaqueOpacity,
          background: colors.white,
          borderRadius: 28,
          boxShadow: "0 18px 40px rgba(0,0,0,0.22)",
          border: `4px solid ${colors.purple}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Logo size={56} light={false} />
      </div>

      <FoxKarateCharacter
        hipX={hipX}
        bodyY={bodyY}
        torsoLean={torsoLean}
        leftArmAngle={leftArmAngle}
        rightArmAngle={rightArmAngle}
        leftLegAngle={legSway}
        rightLegAngle={legSway}
      />
    </AbsoluteFill>
  );
};
