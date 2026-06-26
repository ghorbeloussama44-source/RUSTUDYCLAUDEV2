import React from "react";
import { colors } from "../theme";

const HEAD_SIZE = 210;
const TORSO_WIDTH = 156;
const TORSO_TOP = -148;
const TORSO_HEIGHT = 148;
const HEAD_TOP = TORSO_TOP - HEAD_SIZE + 16;

const CuteLimb: React.FC<{
  left: number;
  top: number;
  width: number;
  length: number;
  angle: number;
  color: string;
  cap: "hand" | "shoe";
  capColor: string;
}> = ({ left, top, width, length, angle, color, cap, capColor }) => (
  <div
    style={{
      position: "absolute",
      left,
      top,
      width,
      height: length,
      transformOrigin: "50% 0%",
      rotate: `${angle}deg`,
    }}
  >
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width,
        height: length,
        background: color,
        borderRadius: width / 2,
      }}
    />
    {cap === "hand" ? (
      <div
        style={{
          position: "absolute",
          left: width / 2,
          top: length - width * 0.6,
          width: width * 1.15,
          height: width * 1.15,
          translate: "-50% 0",
          borderRadius: "50%",
          background: capColor,
        }}
      />
    ) : (
      <div
        style={{
          position: "absolute",
          left: width / 2,
          top: length - width * 0.3,
          width: width * 1.5,
          height: width * 0.7,
          translate: "-50% 0",
          borderRadius: width,
          background: capColor,
        }}
      />
    )}
  </div>
);

const GraduationCap: React.FC = () => {
  const bandWidth = HEAD_SIZE * 0.56;
  const boardSize = bandWidth * 1.3;

  return (
    <div style={{ position: "absolute", left: "50%", top: HEAD_SIZE * 0.06 }}>
      <div
        style={{
          position: "absolute",
          left: 0,
          top: boardSize * 0.22,
          width: 3,
          height: HEAD_SIZE * 0.3,
          background: colors.yellow,
          translate: "46px 0",
          rotate: "6deg",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          top: boardSize * 0.22 + HEAD_SIZE * 0.3,
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: colors.yellow,
          translate: "48px -2px",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: boardSize,
          height: boardSize,
          translate: "-50% -50%",
          scale: "1 0.42",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: colors.black,
            rotate: "45deg",
            borderRadius: 6,
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: colors.yellow,
          translate: "-50% -50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          top: boardSize * 0.13,
          width: bandWidth,
          height: HEAD_SIZE * 0.13,
          background: colors.black,
          borderRadius: 6,
          translate: "-50% 0",
        }}
      />
    </div>
  );
};

const CuteHead: React.FC<{ tilt: number }> = ({ tilt }) => (
  <div
    style={{
      position: "absolute",
      left: -HEAD_SIZE / 2,
      top: HEAD_TOP,
      width: HEAD_SIZE,
      height: HEAD_SIZE,
      borderRadius: "50%",
      background: colors.cream,
      rotate: `${tilt}deg`,
      transformOrigin: "50% 100%",
    }}
  >
    <GraduationCap />

    <div
      style={{
        position: "absolute",
        left: HEAD_SIZE * 0.1,
        top: HEAD_SIZE * 0.56,
        width: HEAD_SIZE * 0.16,
        height: HEAD_SIZE * 0.1,
        borderRadius: "50%",
        background: colors.orange,
        opacity: 0.35,
      }}
    />
    <div
      style={{
        position: "absolute",
        right: HEAD_SIZE * 0.1,
        top: HEAD_SIZE * 0.56,
        width: HEAD_SIZE * 0.16,
        height: HEAD_SIZE * 0.1,
        borderRadius: "50%",
        background: colors.orange,
        opacity: 0.35,
      }}
    />

    <div
      style={{
        position: "absolute",
        left: HEAD_SIZE * 0.31,
        top: HEAD_SIZE * 0.44,
        width: HEAD_SIZE * 0.07,
        height: HEAD_SIZE * 0.09,
        borderRadius: "50%",
        background: colors.black,
      }}
    />
    <div
      style={{
        position: "absolute",
        right: HEAD_SIZE * 0.31,
        top: HEAD_SIZE * 0.44,
        width: HEAD_SIZE * 0.07,
        height: HEAD_SIZE * 0.09,
        borderRadius: "50%",
        background: colors.black,
      }}
    />

    <div
      style={{
        position: "absolute",
        left: "50%",
        top: HEAD_SIZE * 0.6,
        width: HEAD_SIZE * 0.22,
        height: HEAD_SIZE * 0.12,
        translate: "-50% 0",
        borderBottom: `${HEAD_SIZE * 0.045}px solid ${colors.black}`,
        borderRadius: "0 0 50% 50%",
      }}
    />
  </div>
);

const CuteTorso: React.FC<{ lean: number }> = ({ lean }) => (
  <div
    style={{
      position: "absolute",
      left: -TORSO_WIDTH / 2,
      top: TORSO_TOP,
      width: TORSO_WIDTH,
      height: TORSO_HEIGHT,
      background: colors.purple,
      borderRadius: "70px 70px 90px 90px",
      rotate: `${lean}deg`,
      transformOrigin: "50% 100%",
    }}
  >
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: -6,
        width: TORSO_WIDTH * 0.46,
        height: TORSO_HEIGHT * 0.18,
        translate: "-50% 0",
        background: colors.cream,
        borderRadius: "0 0 35px 35px",
      }}
    />
  </div>
);

export const CuteCharacter: React.FC<{
  hipX: number;
  bodyY: number;
  torsoLean: number;
  leftArmAngle: number;
  rightArmAngle: number;
  leftLegAngle: number;
  rightLegAngle: number;
  headTilt?: number;
}> = ({
  hipX,
  bodyY,
  torsoLean,
  leftArmAngle,
  rightArmAngle,
  leftLegAngle,
  rightLegAngle,
  headTilt = 0,
}) => (
  <div style={{ position: "absolute", left: hipX, top: bodyY }}>
    <CuteLimb
      left={-58}
      top={0}
      width={46}
      length={92}
      angle={leftLegAngle}
      color={colors.black}
      cap="shoe"
      capColor={colors.cream}
    />
    <CuteLimb
      left={12}
      top={0}
      width={46}
      length={92}
      angle={rightLegAngle}
      color={colors.black}
      cap="shoe"
      capColor={colors.cream}
    />

    <CuteTorso lean={torsoLean} />

    <CuteLimb
      left={-118}
      top={TORSO_TOP + 8}
      width={36}
      length={104}
      angle={leftArmAngle}
      color={colors.purple}
      cap="hand"
      capColor={colors.cream}
    />
    <CuteLimb
      left={82}
      top={TORSO_TOP + 8}
      width={36}
      length={104}
      angle={rightArmAngle}
      color={colors.purple}
      cap="hand"
      capColor={colors.cream}
    />

    <CuteHead tilt={headTilt + torsoLean * 0.4} />
  </div>
);
