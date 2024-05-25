import FirstScreen from "./components/firstScreen";
import Experience from "./components/experience";
import Graphic from "./components/graphic";
import UserInterface from "./components/userInterface";
import Tools2 from "./components/tools2";

import "./about.css";
import BottomNavigation from "./components/bottomNavigation";
import GraphicLogo from "./components/graphicLogo";
import GraphicPoster from "./components/graphicPoster";
import GraphicPackage from "./components/graphicPackage";

export default function About() {
  return (
    <div className="about-container w-screen h-screen bg-ownRed-100 overflow-y-scroll">
      <div className="w-full h-max max-w-7xl flex flex-col mx-auto relative">
        <FirstScreen />
        <Tools2 />
        <Experience />
        <Graphic />
        <GraphicLogo />
        <GraphicPoster />
        <GraphicPackage />
        {/* <UserInterface /> */}
      </div>
      {/* <BottomNavigation /> */}
    </div>
  );
}
