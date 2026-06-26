import { loadFont } from "@remotion/fonts";
import { staticFile } from "remotion";

export const fontFamily = "Space Grotesk";

loadFont({
  family: fontFamily,
  url: staticFile("SpaceGrotesk-Medium.woff2"),
  weight: "500",
});

loadFont({
  family: fontFamily,
  url: staticFile("SpaceGrotesk-Bold.woff2"),
  weight: "700",
});

export const colors = {
  cream: "#F0EBE3",
  black: "#0A0A0A",
  blue: "#2460E8",
  orange: "#F97316",
  yellow: "#FBBB21",
  red: "#EF4444",
  green: "#22C55E",
  purple: "#A855F7",
  white: "#FFFFFF",
};
