import FirstScreen from "./components/firstScreen";
import Experience from "./components/experience";
import Graphic from "./components/graphic";
import UserInterface from "./components/userInterface";

import "./about.css";
import BottomNavigation from "./components/bottomNavigation";
import GraphicPoster from "./components/graphicPoster";
import GraphicPackage from "./components/graphicPackage";
import Tools from "./components/tools";
import GraphicLogo2 from "./components/graphicLogo2";

export default function About() {
  return (
    <div className="about-container w-screen h-screen bg-ownRed-100 overflow-y-scroll snap-y">
      <div className="w-full h-max max-w-7xl flex flex-col mx-auto relative">
        <FirstScreen />
        <Tools />
        <Experience />
        <Graphic />
        <GraphicLogo2 />
        <GraphicPoster />
        <GraphicPackage />
        {/* <UserInterface /> */}
      </div>
      {/* <BottomNavigation /> */}
    </div>
  );
}
