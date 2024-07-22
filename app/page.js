import Image from "next/image";
import designHigh from "/public/image/home/design_high.svg";
import moveNow from "/public/image/home/move_now.svg";
import RiveCatMotion from "./components/riveCatMotion";

export default function Home() {
  return (
    <div className="w-full h-full bg-[#3DB5C3] flex justify-center items-center">
      <Image
        src={designHigh}
        alt="design_high_text"
        className="absolute h-1/4 w-auto top-[20%] select-none"
      />
      <Image
        src={moveNow}
        alt="move_now_text"
        className="absolute h-1/7 w-auto top-[50%] ml-[50%] select-none"
      />
      <div className="w-screen h-screen relative select-none">
        <RiveCatMotion
          src="/image/home/cat.riv"
          artboard="cat"
          stateMachines="CatMotion"
        />
      </div>
    </div>
  );
}
