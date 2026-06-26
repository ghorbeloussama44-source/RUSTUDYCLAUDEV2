import React from "react";
import { TransitionSeries, linearTiming, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { Hero } from "./scenes/Hero";
import { Stats } from "./scenes/Stats";
import { WhyRussia } from "./scenes/WhyRussia";
import { Programs } from "./scenes/Programs";
import { Support } from "./scenes/Support";
import { Testimonial } from "./scenes/Testimonial";
import { Cta } from "./scenes/Cta";

const TRANSITION = 15;

export const SCENE_DURATIONS = {
  hero: 150,
  stats: 180,
  whyRussia: 180,
  programs: 210,
  support: 150,
  testimonial: 150,
  cta: 180,
};

export const TOTAL_DURATION =
  Object.values(SCENE_DURATIONS).reduce((a, b) => a + b, 0) - TRANSITION * 6;

export const RusStudyVideo: React.FC = () => {
  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={SCENE_DURATIONS.hero}>
        <Hero />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide({ direction: "from-right" })}
        timing={linearTiming({ durationInFrames: TRANSITION })}
      />
      <TransitionSeries.Sequence durationInFrames={SCENE_DURATIONS.stats}>
        <Stats />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: TRANSITION })}
      />
      <TransitionSeries.Sequence durationInFrames={SCENE_DURATIONS.whyRussia}>
        <WhyRussia />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide({ direction: "from-left" })}
        timing={linearTiming({ durationInFrames: TRANSITION })}
      />
      <TransitionSeries.Sequence durationInFrames={SCENE_DURATIONS.programs}>
        <Programs />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: TRANSITION })}
      />
      <TransitionSeries.Sequence durationInFrames={SCENE_DURATIONS.support}>
        <Support />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide({ direction: "from-bottom" })}
        timing={springTiming({
          config: { damping: 200 },
          durationInFrames: TRANSITION,
        })}
      />
      <TransitionSeries.Sequence durationInFrames={SCENE_DURATIONS.testimonial}>
        <Testimonial />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: TRANSITION })}
      />
      <TransitionSeries.Sequence durationInFrames={SCENE_DURATIONS.cta}>
        <Cta />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
