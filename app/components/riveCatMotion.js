"use client";
import { useEffect, useState } from "react";
import {
  useRive,
  useStateMachineInput,
  Layout,
  Fit,
  Alignment,
} from "@rive-app/react-canvas";

export default function RiveCatMotion({ src, artboard, stateMachines }) {
  const { rive, RiveComponent } = useRive({
    src: src,
    autoplay: true,
    artboard: artboard,
    stateMachines: stateMachines,
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

  return <RiveComponent />;
}
