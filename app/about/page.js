import BottomNavigation from "../components/bottomNavigation";
import Countdown from "./components/countdown";
import SplitLine from "../components/splitLine";
import FirstScreen from "./components/firstScreen";
import Experience from "./components/experience";
import "./about.css";
import Graphic from "./components/graphic";
import UserInterface from "./components/userInterface";
import Tools2 from "./components/tools2";

export default function About() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-ownRed-100">
      <div className="w-full h-full max-w-7xl flex flex-col">
        <div className="countDown w-full max-w-7xl mt-20 flex flex-col gap-4 z-50">
          <Countdown />
          <SplitLine top />
        </div>
        <div className="about-container flex-1 overflow-y-scroll pr-3">
          <FirstScreen />
          <Tools2 />
          <Experience />
          <Graphic />
          <UserInterface />
        </div>
        <div className="about-bottom flex flex-col gap-2 mb-2 z-50">
          <SplitLine bottom />
          <BottomNavigation />
        </div>
      </div>
    </div>
  );
}
