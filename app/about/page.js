import Experience from "./components/experience";
import Graphic from "./components/graphic";
import GraphicPoster from "./components/graphicPoster";
import Tools from "./components/tools";
import GraphicLogo from "./components/graphicLogo";

import "./about.css";
import GraphicPackage2 from "./components/graphicPackage2";
import PageOne from "./components/pageOne";
import Intro from "./components/intro";

export default function About() {
  return (
    <div className="about-container w-screen h-screen  bg-ownRed-100 overflow-y-scroll snap-y">
      <div className="w-full h-max max-w-5xl flex flex-col mx-auto relative">
        <PageOne />
        <Intro />
        <Tools />
        <Experience />
        <Graphic />
        <GraphicLogo />
        <GraphicPoster />
        <GraphicPackage2 />
      </div>
    </div>
  );
}
