import "./index.css";
import { Composition } from "remotion";
import { RusStudyVideo, TOTAL_DURATION } from "./RusStudyVideo";
import { FootballPersona } from "./scenes/FootballPersona";
import { LogoPersona } from "./scenes/LogoPersona";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="RusStudyVideo"
        component={RusStudyVideo}
        durationInFrames={TOTAL_DURATION}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="FootballPersona"
        component={FootballPersona}
        durationInFrames={150}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="LogoPersona"
        component={LogoPersona}
        durationInFrames={160}
        fps={30}
        width={1080}
        height={1080}
      />
    </>
  );
};
