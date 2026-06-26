import React from "react";
import { Composition } from "remotion";
import { LacosteAd, TOTAL_DURATION } from "./LacosteAd";

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="LacosteAd"
        component={LacosteAd}
        durationInFrames={TOTAL_DURATION}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="LacosteAdVertical"
        component={LacosteAd}
        durationInFrames={TOTAL_DURATION}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
