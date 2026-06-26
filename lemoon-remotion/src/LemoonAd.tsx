import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Intro } from "./scenes/Intro";
import { Statement } from "./scenes/Statement";
import { Product } from "./scenes/Product";
import { CTA } from "./scenes/CTA";

export const SCENES = [
  { Component: Intro, duration: 90 },
  { Component: Statement, duration: 100 },
  { Component: Product, duration: 100 },
  { Component: CTA, duration: 110 },
];

export const TOTAL_DURATION = SCENES.reduce((sum, s) => sum + s.duration, 0);

export const LemoonAd: React.FC = () => {
  let cursor = 0;
  return (
    <AbsoluteFill>
      {SCENES.map(({ Component, duration }, i) => {
        const from = cursor;
        cursor += duration;
        return (
          <Sequence key={i} from={from} durationInFrames={duration}>
            <Component />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
