import React from "react";
import { Composition } from "remotion";
import { LemoonAd, TOTAL_DURATION } from "./LemoonAd";

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="LemoonAd"
        component={LemoonAd}
        durationInFrames={TOTAL_DURATION}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="LemoonAdVertical"
        component={LemoonAd}
        durationInFrames={TOTAL_DURATION}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
