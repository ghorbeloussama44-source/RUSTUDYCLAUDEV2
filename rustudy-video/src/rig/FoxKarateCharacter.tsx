import React from "react";
import { colors } from "../theme";

const HEAD_SIZE = 210;
const TORSO_WIDTH = 156;
const TORSO_TOP = -148;
const TORSO_HEIGHT = 148;
const HEAD_TOP = TORSO_TOP - HEAD_SIZE + 16;

const FUR = colors.orange;
const GI = colors.white;
const BELT = colors.black;
const PAW = "#FCE5C8";

const FoxLimb: React.FC<{
  left: number;
  top: number;
  width: number;
  length: number;
  angle: number;
}> = ({ left, top, width, length, angle }) => (
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
        background: GI,
        borderRadius: width / 2,
      }}
    />
    <div
      style={{
        position: "absolute",
        left: width / 2,
        top: length - width * 0.55,
        width: width * 1.1,
        height: width * 1.1,
        translate: "-50% 0",
        borderRadius: "50%",
        background: PAW,
      }}
    />
  </div>
);

const FoxTail: React.FC<{ angle: number }> = ({ angle }) => (
  <div
    style={{
      position: "absolute",
      left: -TORSO_WIDTH * 0.3,
      top: TORSO_TOP + TORSO_HEIGHT * 0.5,
      width: 40,
      height: 130,
      transformOrigin: "50% 0%",
      rotate: `${angle}deg`,
      zIndex: -1,
    }}
  >
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 40,
        height: 100,
        background: FUR,
        borderRadius: 20,
      }}
    />
    <div
      style={{
        position: "absolute",
        left: 20,
        top: 82,
        width: 44,
        height: 44,
        translate: "-50% 0",
        borderRadius: "50%",
        background: colors.cream,
      }}
    />
  </div>
);

const FoxEar: React.FC<{ side: "left" | "right" }> = ({ side }) => {
  const mirror = side === "left" ? 1 : -1;
  return (
    <div
      style={{
        position: "absolute",
        left: side === "left" ? HEAD_SIZE * 0.04 : undefined,
        right: side === "right" ? HEAD_SIZE * 0.04 : undefined,
        top: -HEAD_SIZE * 0.24,
        width: HEAD_SIZE * 0.34,
        height: HEAD_SIZE * 0.46,
        rotate: `${mirror * -16}deg`,
        transformOrigin: "50% 100%",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: FUR,
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "40%",
          width: "46%",
          height: "48%",
          translate: "-50% 0",
          background: colors.cream,
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        }}
      />
    </div>
  );
};

const Headband: React.FC = () => {
  const bandWidth = HEAD_SIZE * 0.94;
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: HEAD_SIZE * 0.2,
        width: bandWidth,
        height: HEAD_SIZE * 0.14,
        translate: "-50% 0",
        background: colors.red,
        borderRadius: 5,
        zIndex: 2,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: -4,
          top: "50%",
          width: 16,
          height: 16,
          translate: "-50% -50%",
          borderRadius: "50%",
          background: colors.black,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: -2,
          top: "100%",
          width: 12,
          height: HEAD_SIZE * 0.34,
          background: colors.red,
          borderRadius: 4,
          rotate: "14deg",
          transformOrigin: "50% 0%",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 8,
          top: "100%",
          width: 12,
          height: HEAD_SIZE * 0.28,
          background: colors.red,
          borderRadius: 4,
          rotate: "-6deg",
          transformOrigin: "50% 0%",
        }}
      />
    </div>
  );
};

const FoxHead: React.FC<{ tilt: number }> = ({ tilt }) => (
  <div
    style={{
      position: "absolute",
      left: -HEAD_SIZE / 2,
      top: HEAD_TOP,
      width: HEAD_SIZE,
      height: HEAD_SIZE,
      borderRadius: "50%",
      background: FUR,
      rotate: `${tilt}deg`,
      transformOrigin: "50% 100%",
    }}
  >
    <FoxEar side="left" />
    <FoxEar side="right" />
    <Headband />

    <div
      style={{
        position: "absolute",
        left: HEAD_SIZE * 0.12,
        top: HEAD_SIZE * 0.5,
        width: HEAD_SIZE * 0.15,
        height: HEAD_SIZE * 0.1,
        borderRadius: "50%",
        background: colors.red,
        opacity: 0.3,
      }}
    />
    <div
      style={{
        position: "absolute",
        right: HEAD_SIZE * 0.12,
        top: HEAD_SIZE * 0.5,
        width: HEAD_SIZE * 0.15,
        height: HEAD_SIZE * 0.1,
        borderRadius: "50%",
        background: colors.red,
        opacity: 0.3,
      }}
    />

    <div
      style={{
        position: "absolute",
        left: HEAD_SIZE * 0.3,
        top: HEAD_SIZE * 0.42,
        width: HEAD_SIZE * 0.07,
        height: HEAD_SIZE * 0.09,
        borderRadius: "50%",
        background: colors.black,
      }}
    />
    <div
      style={{
        position: "absolute",
        right: HEAD_SIZE * 0.3,
        top: HEAD_SIZE * 0.42,
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
        top: HEAD_SIZE * 0.56,
        width: HEAD_SIZE * 0.52,
        height: HEAD_SIZE * 0.4,
        translate: "-50% 0",
        background: colors.cream,
        borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: HEAD_SIZE * 0.04,
          width: HEAD_SIZE * 0.1,
          height: HEAD_SIZE * 0.08,
          translate: "-50% 0",
          borderRadius: "50%",
          background: colors.black,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: HEAD_SIZE * 0.16,
          width: HEAD_SIZE * 0.2,
          height: HEAD_SIZE * 0.1,
          translate: "-50% 0",
          borderBottom: `${HEAD_SIZE * 0.04}px solid ${colors.black}`,
          borderRadius: "0 0 50% 50%",
        }}
      />
    </div>
  </div>
);

const FoxTorso: React.FC<{ lean: number }> = ({ lean }) => (
  <div
    style={{
      position: "absolute",
      left: -TORSO_WIDTH / 2,
      top: TORSO_TOP,
      width: TORSO_WIDTH,
      height: TORSO_HEIGHT,
      background: GI,
      borderRadius: "70px 70px 90px 90px",
      rotate: `${lean}deg`,
      transformOrigin: "50% 100%",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: -4,
        width: TORSO_WIDTH * 0.36,
        height: TORSO_HEIGHT * 0.62,
        translate: "-96% 0",
        background: BELT,
        clipPath: "polygon(0% 0%, 100% 0%, 28% 100%)",
        rotate: "4deg",
      }}
    />
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: -4,
        width: TORSO_WIDTH * 0.36,
        height: TORSO_HEIGHT * 0.62,
        translate: "-4% 0",
        background: BELT,
        clipPath: "polygon(0% 0%, 100% 0%, 72% 100%)",
        rotate: "-4deg",
      }}
    />
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: TORSO_HEIGHT * 0.6,
        width: TORSO_WIDTH * 1.04,
        height: TORSO_HEIGHT * 0.17,
        translate: "-50% 0",
        background: BELT,
      }}
    />
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: TORSO_HEIGHT * 0.58,
        width: TORSO_WIDTH * 0.22,
        height: TORSO_HEIGHT * 0.24,
        translate: "-50% 0",
        background: BELT,
        borderRadius: 6,
      }}
    />
  </div>
);

export const FoxKarateCharacter: React.FC<{
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
    <FoxTail angle={150 - torsoLean * 1.2} />

    <FoxLimb left={-58} top={0} width={46} length={92} angle={leftLegAngle} />
    <FoxLimb left={12} top={0} width={46} length={92} angle={rightLegAngle} />

    <FoxTorso lean={torsoLean} />

    <FoxLimb
      left={-118}
      top={TORSO_TOP + 8}
      width={36}
      length={104}
      angle={leftArmAngle}
    />
    <FoxLimb
      left={82}
      top={TORSO_TOP + 8}
      width={36}
      length={104}
      angle={rightArmAngle}
    />

    <FoxHead tilt={headTilt + torsoLean * 0.4} />
  </div>
);
