"use client";
import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
  wrap,
} from "framer-motion";
import Image from "next/image";

const imageSize = [300, 240, 252, 252, 304, 285, 240, 303, 303];

function ParallaxPoster({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const mouseX = useRef(1);

  const x = useTransform(baseX, (v) => wrap(0, -2839, v));

  useAnimationFrame((t, delta) => {
    let moveBy = baseVelocity * mouseX.current * (delta / 1000);

    moveBy += moveBy;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <motion.div
      className="scroller flex gap-10"
      style={{ x }}
      onPointerMove={() => (mouseX.current = 0)}
      onPointerLeave={() => (mouseX.current = 1)}
    >
      {Array(2)
        .fill(0)
        .map((item, i) => (
          <motion.div className="flex gap-10" key={i}>
            {children}
          </motion.div>
        ))}
    </motion.div>
  );
}

function GraphicPoster() {
  return (
    <section
      id="graphic-poster"
      className="w-full text-ownBlack rounded-2xl flex flex-col mt-56"
      style={{ height: 800, backgroundColor: "#C5DBDD" }}
    >
      <div className="graphic-poster-title text-ownBlack flex flex-col gap-3 mt-8 items-center select-none">
        <h1 className="text-8xl font-bold">Poster</h1>
        <div className="flex gap-2">
          <p className="text-xl">👉</p>
          <p className="text-xl">平面设计-海报</p>
          <p className="text-xl">👈</p>
        </div>
      </div>
      <div className="graphic-poster-content w-full flex-1 px-10 overflow-hidden flex items-center">
        <ParallaxPoster baseVelocity={20}>
          {imageSize.map((item, i) => (
            <motion.div
              key={i}
              className="w-max h-max relative cursor-pointer rounded-lg overflow-hidden"
              style={{ width: item, height: 430 }}
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src={`/image/about/graphicPoster/Poster-${i + 1}.jpg`}
                fill
                alt={`graphic-poster-${i + 1}`}
              />
            </motion.div>
          ))}
        </ParallaxPoster>
      </div>
    </section>
  );
}

export default GraphicPoster;
