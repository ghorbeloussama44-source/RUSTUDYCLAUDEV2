import { Easing, interpolate } from "remotion";

export const fadeUp = (
  frame: number,
  start: number,
  duration = 18,
  distance = 40,
) => {
  const progress = interpolate(frame, [start, start + duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return {
    opacity: progress,
    translate: `0px ${distance * (1 - progress)}px`,
  };
};

export const fadeOutUp = (
  frame: number,
  end: number,
  duration = 15,
  distance = 30,
) => {
  const progress = interpolate(frame, [end - duration, end], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 1, 1),
  });

  return {
    opacity: 1 - progress,
    translate: `0px ${-distance * progress}px`,
  };
};
