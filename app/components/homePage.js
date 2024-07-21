"use client";

import Image from "next/image";
import designHigh from "/public/image/home/design_high.svg";
import moveNow from "/public/image/home/move_now.svg";
import {
  useRive,
  useStateMachineInput,
  Layout,
  Fit,
  Alignment,
} from "@rive-app/react-canvas-lite";
import { useEffect, useState } from "react";

export default function HomePage() {
  const { rive, RiveComponent } = useRive({
    src: "/image/home/cat.riv",
    autoplay: true,
    artboard: "cat",
    stateMachines: "CatMotion",
    layout: new Layout({
      fit: Fit.FitHeight,
      alignment: Alignment.Center,
    }),
  });

  const [screenSize, setScreenSize] = useState({});

  const xAxisInput = useStateMachineInput(rive, "CatMotion", "xAxis");
  const yAxisInput = useStateMachineInput(rive, "CatMotion", "yAxis");

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      const bodyRect = body.getBoundingClientRect();
      setScreenSize({ w: bodyRect.width, h: bodyRect.height });
    }
  }, []);

  useEffect(() => {
    const update = (e) => {
      if (screenSize && xAxisInput && yAxisInput) {
        xAxisInput.value = (e.clientX / screenSize.w) * 100;
        yAxisInput.value = (e.clientY / screenSize.h) * 100;
      }
    };
    window.addEventListener("mousemove", update);
    return () => {
      window.addEventListener("mousemove", update);
    };
  }, [screenSize.w, screenSize.h, xAxisInput, yAxisInput]);

  return (
    <section className="w-screen h-screen flex justify-center bg-[#3DB5C3] relative">
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
        <RiveComponent />
      </div>
    </section>
  );
}
