import React from "react";
import { colors } from "../theme";

const HEAD_SIZE = 210;
const TORSO_WIDTH = 156;
const TORSO_TOP = -148;
const TORSO_HEIGHT = 148;
const HEAD_TOP = TORSO_TOP - HEAD_SIZE + 16;

const gradient = (light: string, base: string, dark: string) =>
  `linear-gradient(135deg, ${light} 0%, ${base} 55%, ${dark} 100%)`;

const FUR = colors.orange;
const FUR_GRADIENT = gradient("#FFA45C", FUR, "#C2520A");
const GI_GRADIENT = gradient("#FFFFFF", colors.white, "#D9D4C8");
const BELT = colors.black;
const PAW_GRADIENT = gradient("#FFF1DC", "#FCE5C8", "#E8C49C");

const FoxLimb: React.FC<{
  left: number;
  top: number;
  upperWidth: number;
  upperLength: number;
  lowerWidth: number;
  lowerLength: number;
  angle: number;
  bend: number;
}> = ({ left, top, upperWidth, upperLength, lowerWidth, lowerLength, angle, bend }) => (
  <div
    style={{
      position: "absolute",
      left,
      top,
      width: upperWidth,
      height: upperLength,
      transformOrigin: "50% 0%",
      rotate: `${angle}deg`,
    }}
  >
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: upperWidth,
        height: upperLength,
        background: GI_GRADIENT,
        borderRadius: upperWidth / 2,
      }}
    />
    <div
      style={{
        position: "absolute",
        left: (upperWidth - lowerWidth) / 2,
        top: upperLength - lowerWidth * 0.5,
        width: lowerWidth,
        height: lowerLength,
        transformOrigin: "50% 0%",
        rotate: `${bend}deg`,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: lowerWidth,
          height: lowerLength,
          background: GI_GRADIENT,
          borderRadius: lowerWidth / 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: lowerWidth / 2,
          top: lowerLength - lowerWidth * 0.5,
          width: lowerWidth * 1.15,
          height: lowerWidth * 1.15,
          translate: "-50% 0",
          borderRadius: "50%",
          background: PAW_GRADIENT,
        }}
      />
    </div>
    <div
      style={{
        position: "absolute",
        left: upperWidth / 2,
        top: upperLength - upperWidth * 0.4,
        width: upperWidth * 0.82,
        height: upperWidth * 0.82,
        translate: "-50% -50%",
        borderRadius: "50%",
        background: GI_GRADIENT,
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
        background: FUR_GRADIENT,
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
          background: FUR_GRADIENT,
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
      background: FUR_GRADIENT,
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

    <div
      style={{
        position: "absolute",
        left: "50%",
        top: HEAD_SIZE * 0.93,
        width: HEAD_SIZE * 0.5,
        height: HEAD_SIZE * 0.12,
        translate: "-50% 0",
        background: colors.black,
        opacity: 0.15,
        borderRadius: "50%",
        filter: "blur(6px)",
      }}
    />
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
      background: GI_GRADIENT,
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
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: TORSO_HEIGHT * 0.96,
        width: TORSO_WIDTH * 0.7,
        height: 18,
        translate: "-50% 0",
        background: colors.black,
        opacity: 0.15,
        borderRadius: "50%",
        filter: "blur(5px)",
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
  leftArmBend?: number;
  rightArmBend?: number;
  leftLegBend?: number;
  rightLegBend?: number;
  headTilt?: number;
  squashX?: number;
  squashY?: number;
  tailAngle?: number;
}> = ({
  hipX,
  bodyY,
  torsoLean,
  leftArmAngle,
  rightArmAngle,
  leftLegAngle,
  rightLegAngle,
  leftArmBend = 0,
  rightArmBend = 0,
  leftLegBend = 0,
  rightLegBend = 0,
  headTilt = 0,
  squashX = 1,
  squashY = 1,
  tailAngle,
}) => (
  <div
    style={{
      position: "absolute",
      left: hipX,
      top: bodyY,
      scale: `${squashX} ${squashY}`,
      transformOrigin: "0px 96px",
    }}
  >
    <FoxTail angle={tailAngle ?? 150 - torsoLean * 1.2} />

    <FoxLimb
      left={-58}
      top={0}
      upperWidth={46}
      upperLength={50}
      lowerWidth={38}
      lowerLength={54}
      angle={leftLegAngle}
      bend={leftLegBend}
    />
    <FoxLimb
      left={12}
      top={0}
      upperWidth={46}
      upperLength={50}
      lowerWidth={38}
      lowerLength={54}
      angle={rightLegAngle}
      bend={rightLegBend}
    />

    <FoxTorso lean={torsoLean} />

    <FoxLimb
      left={-118}
      top={TORSO_TOP + 8}
      upperWidth={36}
      upperLength={56}
      lowerWidth={30}
      lowerLength={58}
      angle={leftArmAngle}
      bend={leftArmBend}
    />
    <FoxLimb
      left={82}
      top={TORSO_TOP + 8}
      upperWidth={36}
      upperLength={56}
      lowerWidth={30}
      lowerLength={58}
      angle={rightArmAngle}
      bend={rightArmBend}
    />

    <FoxHead tilt={headTilt + torsoLean * 0.4} />
  </div>
);
