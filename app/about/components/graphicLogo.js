"use client";
import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
  wrap,
} from "framer-motion";
import Image from "next/image";

function GraphicLogoTitleTop() {
  return (
    <div className="graphic-logo-title-top flex gap-3 w-max">
      <motion.div className="w-max h-max">
        <Image
          src="image/about/graphicLogo/title/L.svg"
          width={54}
          height={94}
          alt="graphic-logo-title-L"
        />
      </motion.div>
      <motion.div className="w-max h-max">
        <Image
          src="image/about/graphicLogo/title/O.svg"
          width={94}
          height={94}
          alt="graphic-logo-title-L"
        />
      </motion.div>
      <motion.div className="w-max h-max">
        <Image
          src="image/about/graphicLogo/title/G.svg"
          width={92}
          height={94}
          alt="graphic-logo-title-L"
        />
      </motion.div>
      <motion.div className="w-max h-max">
        <Image
          src="image/about/graphicLogo/title/O.svg"
          width={94}
          height={94}
          alt="graphic-logo-title-L"
        />
      </motion.div>
    </div>
  );
}

function GraphicLogoTitleBottom() {
  return (
    <div
      className="graphic-logo-title-bottom flex p-3 w-max h-max"
      style={{
        gap: 26,
        backgroundImage: "url('/image/about/graphicLogo/title/table.svg')",
      }}
    >
      {Array(8)
        .fill(0)
        .map((item, i) => (
          <motion.div
            key={i}
            animate={{ rotate: [0, 360, 360, 0] }}
            transition={{
              duration: 5,
              times: [0, 0.4, 0.6, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            <Image
              src="image/about/graphicLogo/title/wheel.svg"
              width={50}
              height={50}
              alt="graphic-logo-title-wheel"
            />
          </motion.div>
        ))}
    </div>
  );
}

const logoOne = [
  "aishunyou",
  "aihuxi",
  "qifeng",
  "senlinmofang_1",
  "vicmk",
  "senlinmofang_2",
  "delin",
  "dilongxinbao",
];

const logoTwo = [
  "aikayou",
  "yanyu",
  "senlinmofang_3",
  "chengxin",
  "junbijing",
  "nvixs",
  "zavos",
  "paimu",
];

function ParallaxIcon({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const mouseX = useRef(1);

  const x = useTransform(baseX, (v) => wrap(0, -1456, v));

  useAnimationFrame((t, delta) => {
    let moveBy = baseVelocity * mouseX.current * (delta / 1000);

    moveBy += moveBy;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <motion.div
      className="scroller flex gap-8"
      style={{ x }}
      onPointerMove={() => (mouseX.current = 0)}
      onPointerLeave={() => (mouseX.current = 1)}
    >
      {Array(2)
        .fill(0)
        .map((item, i) => (
          <motion.div className="flex gap-8" key={i}>
            {children}
          </motion.div>
        ))}
    </motion.div>
  );
}

function GraphicLogo(props) {
  return (
    <section
      id="graphic-logo"
      className="graphic-logo-container w-full mt-56 text-black"
      style={{ height: 800 }}
    >
      <div className="graphic-logo-title flex flex-col items-center mt-4">
        <GraphicLogoTitleTop />
        <GraphicLogoTitleBottom />
      </div>
      <div
        className="graphic-logo-content w-full mt-24"
        style={{
          padding: "170px 90px 0px",
          backgroundImage: "url('image/about/graphicLogo/contentBg.svg')",
        }}
      >
        <div
          className="w-full py-2.5 overflow-hidden flex flex-col place-content-between"
          style={{ height: 280 }}
        >
          <ParallaxIcon baseVelocity={20}>
            {logoOne.map((item, i) => (
              <motion.div
                key={i}
                className="w-max h-max cursor-pointer overflow-hidden rounded-lg"
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={`image/about/graphicLogo/logo/${item}.svg`}
                  width={150}
                  height={100}
                  alt={`graphic-logo-${item}`}
                />
              </motion.div>
            ))}
          </ParallaxIcon>
          <ParallaxIcon baseVelocity={-20}>
            {logoTwo.map((item, i) => (
              <motion.div
                key={i}
                className="w-max h-max cursor-pointer overflow-hidden rounded-lg"
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={`image/about/graphicLogo/logo/${item}.svg`}
                  width={150}
                  height={100}
                  alt={`graphic-logo-${item}`}
                />
              </motion.div>
            ))}
          </ParallaxIcon>
        </div>
      </div>
    </section>
  );
}

export default GraphicLogo;
