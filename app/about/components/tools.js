"use client";
import { Anton } from "next/font/google";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const anton = Anton({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: "normal",
});

const ToolsTitle = ({ isInView }) => {
  return (
    <div
      className="about-tools-title absolute flex gap-4 items-center"
      style={{ top: -100 }}
    >
      <motion.h1
        className={`${anton.className} text-[#171718] text-9xl w-max`}
        animate={{ x: isInView ? 0 : "-100%", skewX: isInView ? 0 : -30 }}
        transition={{ duration: 0.6 }}
      >
        Tools
      </motion.h1>
      <div className="w-max h-max overflow-hidden">
        <motion.div
          className="flex mt-4 w-max h-max text-white"
          animate={{ y: isInView ? 0 : "100%" }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <Image
            src="./image/about/close-dark.svg"
            width={28}
            height={28}
            alt="icon-close-dark"
          />
          <h3 className="font-sans text-black text-xl">常用工具</h3>
        </motion.div>
      </div>
    </div>
  );
};

const ToolsCenter = () => {
  return (
    <div className="tools-center w-40 h-40 relative">
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="20" />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
          />
        </filter>
      </svg>
      <div
        className="tools-center-main w-40 h-40 flex justify-center items-center"
        style={{ filter: "url(#blur)" }}
      >
        <div
          className="tools-center-circle bg-white rounded-full relative"
          style={{ width: 140, height: 140 }}
        />
        <motion.div
          className="tools-center-first-move-circle absolute bg-white rounded-full"
          style={{ width: 130, height: 130, right: 0, originX: 0.4 }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 4, ease: "linear", repeat: Infinity }}
        />
        <motion.div
          className="tools-center-second-move-circle absolute bg-white rounded-full"
          style={{
            width: 100,
            height: 100,
            left: 5,
            top: 5,
            originX: 0.7,
            originY: 0.7,
          }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 5, ease: "linear", repeat: Infinity }}
        />
        <motion.div
          className="tools-center-third-move-circle absolute bg-white rounded-full"
          style={{
            width: 90,
            height: 90,
            left: 10,
            bottom: 10,
            originX: 0.75,
            originY: 0.25,
          }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 4, ease: "linear", repeat: Infinity }}
        />
      </div>
      <div className="tools-center-text absolute w-full h-full left-0 top-0 flex justify-center items-center font-sans text-2xl text-[#171718] font-black">
        Tools
      </div>
    </div>
  );
};

const ToolsInner = () => {
  return (
    <motion.div
      className="circle-outer absolute"
      style={{ width: 560, height: 560 }}
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      <motion.div
        className="absolute w-max h-max"
        style={{ top: 220 }}
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Image
          src="./image/about/toolsIcon/figma.svg"
          width={120}
          height={120}
          alt="icon-figma"
        />
      </motion.div>
      <motion.div
        className="absolute w-max h-max"
        style={{ bottom: 40, right: 120 }}
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Image
          src="./image/about/toolsIcon/photoshop.svg"
          width={100}
          height={100}
          alt="icon-photoshop"
        />
      </motion.div>
      <motion.div
        className="absolute w-max h-max"
        style={{ top: 135, right: 60 }}
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Image
          src="./image/about/toolsIcon/after effect.svg"
          width={90}
          height={90}
          alt="icon-after effect"
        />
      </motion.div>
    </motion.div>
  );
};

const ToolsOuter = () => {
  return (
    <motion.div
      className="absolute"
      style={{ width: 680, height: 680 }}
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    >
      <motion.div
        className="absolute w-max h-max"
        style={{ top: 23, left: 75 }}
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <Image
          src="./image/about/toolsIcon/framer.svg"
          width={80}
          height={80}
          alt="icon-framer"
        />
      </motion.div>
      <motion.div
        className="absolute w-max h-max"
        style={{ top: 24, right: 142 }}
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <Image
          src="./image/about/toolsIcon/blender.svg"
          width={70}
          height={70}
          alt="icon-blender"
        />
      </motion.div>
      <motion.div
        className="absolute w-max h-max"
        style={{ bottom: 190, right: 0 }}
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <Image
          src="./image/about/toolsIcon/illustrator.svg"
          width={70}
          height={70}
          alt="icon-illustrator"
        />
      </motion.div>
      <motion.div
        className="absolute w-max h-max"
        style={{ bottom: 88, left: 0 }}
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <Image
          src="./image/about/toolsIcon/affinity.svg"
          width={60}
          height={60}
          alt="icon-affinity"
        />
      </motion.div>
    </motion.div>
  );
};

const ToolsDot = () => {
  return (
    <motion.div
      className="absolute"
      style={{ width: 980, height: 980 }}
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
    >
      <motion.div
        className="absolute w-6 h-6 border-[6px] border-violet-600 rounded-full"
        style={{ left: 210, bottom: 110 }}
      />
      <motion.div
        className="absolute w-3 h-3 bg-lime-500 rounded-full"
        style={{ left: 60, top: 360 }}
      />
      <motion.div
        className="absolute w-3 h-3 bg-amber-400 rounded-full"
        style={{ left: 590, top: 570 }}
      />
      <motion.div
        className="absolute w-3 h-3 bg-rose-600 rounded-full"
        style={{ right: 80, bottom: 230 }}
      />
      <motion.div
        className="absolute w-4 h-4 border-4 border-rose-600 rounded-full"
        style={{ right: 0, top: 360 }}
      />
      <motion.div
        className="absolute w-7 h-7 border-[6px] border-white rounded-full"
        style={{ right: 140, top: 170 }}
      />
    </motion.div>
  );
};

function Tools() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div
      className="about-tools w-full h-full flex flex-col mt-36 relative"
      ref={ref}
      style={{ backgroundColor: "#171718" }}
    >
      <ToolsTitle isInView={isInView} />
      <div className="about-tools-content w-full h-full overflow-hidden flex justify-center items-center relative">
        <ToolsDot />
        <div
          className="absolute border-2 border-white rounded-full"
          style={{ width: 448, height: 448, opacity: 0.3 }}
        />
        <ToolsCenter />
        <ToolsInner />
        <ToolsOuter />
      </div>
    </div>
  );
}

export default Tools;
