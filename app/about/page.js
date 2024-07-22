import FirstScreen from "./components/firstScreen";
import Experience from "./components/experience";
import Graphic from "./components/graphic";
import GraphicPoster from "./components/graphicPoster";
import Tools from "./components/tools";
import GraphicLogo from "./components/graphicLogo";

import "./about.css";
import GraphicPackage2 from "./components/graphicPackage2";

export default function About() {
  return (
    <div className="about-container w-screen h-screen  bg-ownRed-100 overflow-y-scroll snap-y">
      <div className="w-full h-max max-w-5xl flex flex-col mx-auto relative">
        <FirstScreen />
        <Tools />
        <Experience />
        <Graphic />
        <GraphicLogo />
        <GraphicPoster />
        {/* <GraphicPackage /> */}
        <GraphicPackage2 />
        {/* <UserInterface /> */}
      </div>
      {/* <BottomNavigation /> */}
    </div>
  );
}
