"use client";
import React, { useState, useRef } from "react";
import { Anton } from "next/font/google";
import Image from "next/image";
import { motion, transform } from "framer-motion";

const anton = Anton({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: "normal",
});

const Card = ({ src, title, bg }) => {
  const ref = useRef();

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handlePointer = ({ clientX, clientY }) => {
    const element = ref.current;

    const x =
      clientX -
      (element.getBoundingClientRect().left + element.offsetWidth / 2);
    const y =
      clientY -
      (element.getBoundingClientRect().top + element.offsetHeight / 2);
    setRotateY(transform([-130, 130], [-8, 8])(x));
    setRotateX(transform([-180, 180], [8, -8])(y));
  };

  const handlePointerLeave = () => {
    setRotateY(0);
    setRotateX(0);
  };

  return (
    <div
      className="w-max h-max flex flex-col items-center gap-8"
      style={{ perspective: 800 }}
    >
      <motion.div
        ref={ref}
        className="rounded-2xl overflow-hidden"
        style={{
          width: 260,
          height: 360,
          backgroundColor: bg,
          cursor: "pointer",
          rotateX,
          rotateY,
        }}
        whileHover={{
          boxShadow: `0px 40px 60px -28px ${bg}`,
          scale: 1.05,
        }}
        transition={{ duration: 0.4 }}
        onPointerMove={handlePointer}
        onPointerLeave={handlePointerLeave}
      >
        <Image src={src} width={260} height={360} alt="graphic-cover" />
      </motion.div>

      <h2 className="font-sans font-semibold text-xl text-ownBlack capitalize">
        {title}
      </h2>
    </div>
  );
};

const Adorn = () => {
  return (
    <div className="graphic-adorn absolute w-full h-full top-0 left-0 overflow-hidden">
      <Image
        src="./image/about/graphic/adorn/calculator.svg"
        width={103}
        height={134}
        alt="graphic-adorn-calculator"
        className="absolute"
        style={{ right: 46, top: 70, transform: "rotate(-28deg)" }}
      />
      <Image
        src="./image/about/graphic/adorn/protractor.svg"
        width={122}
        height={79}
        alt="graphic-adorn-protractor"
        className="absolute"
        style={{ right: 190, top: 13, transform: "rotate(27deg)" }}
      />
      <Image
        src="./image/about/graphic/adorn/eraser.svg"
        width={42}
        height={72}
        alt="graphic-adorn-eraser"
        className="absolute"
        style={{ right: 4, top: -11, transform: "rotate(-150deg)" }}
      />
      <Image
        src="./image/about/graphic/adorn/minus.svg"
        width={42}
        height={42}
        alt="graphic-adorn-minus"
        className="absolute"
        style={{ right: 526, top: 19, transform: "rotate(-60deg)" }}
      />
      <Image
        src="./image/about/graphic/adorn/division.svg"
        width={42}
        height={42}
        alt="graphic-adorn-division"
        className="absolute"
        style={{ right: 440, top: 14, transform: "rotate(30deg)" }}
      />
      <Image
        src="./image/about/graphic/adorn/multiply.svg"
        width={42}
        height={42}
        alt="graphic-adorn-multiply"
        className="absolute"
        style={{ right: 420, top: 73, transform: "rotate(60deg)" }}
      />
      <Image
        src="./image/about/graphic/adorn/add.svg"
        width={42}
        height={42}
        alt="graphic-adorn-add"
        className="absolute"
        style={{ right: 359, top: 17, transform: "rotate(20deg)" }}
      />
    </div>
  );
};

function Graphic(props) {
  return (
    <div
      className="w-full h-max border-4 border-ownBlack p-8 relative"
      style={{
        background:
          "linear-gradient(to right,#E7E7E7 2px, transparent 2px),linear-gradient(to bottom,#E7E7E7 2px, transparent 2px)",
        backgroundRepeat: "repeat",
        backgroundSize: "32px 32px",
      }}
    >
      <Adorn />
      <div className="graphic-title-all flex items-center gap-8">
        <div
          className={`graphic-title ${anton.className} text-9xl text-ownBlack w-max h-max px-1 py-3 border-4 border-indigo-500 relative`}
        >
          <span className="absolute w-4 h-4 bg-white border-4 border-indigo-500 left-[-10px] top-[-10px]" />
          <span className="absolute w-4 h-4 bg-white border-4 border-indigo-500 right-[-10px] top-[-10px]" />
          <span className="absolute w-4 h-4 bg-white border-4 border-indigo-500 right-[-10px] bottom-[-10px]" />
          <span className="absolute w-4 h-4 bg-white border-4 border-indigo-500 left-[-10px] bottom-[-10px]" />
          <span>Graphic</span>
        </div>
        <div className="graphic-subtitle flex h-max">
          <div className="p-1 bg-indigo-500 w-max h-max">
            <Image
              src="./image/about/close-light.svg"
              width={28}
              height={28}
              alt="icon-close-light"
            />
          </div>
          <div className="w-2 h-9 bg-[#FDCA49]" />
          <div className="bg-indigo-500 text-white font-sans font-normal text-2xl px-1 py-0.5">
            平面设计
          </div>
        </div>
      </div>
      <div className="graphic-card-all flex justify-center gap-10 mt-28 mb-20">
        <Card
          src="./image/about/graphic/cover/logo.svg"
          bg="#EC5D4D"
          title="logo"
        />
        <Card
          src="./image/about/graphic/cover/poster.svg"
          bg="#FDCA49"
          title="poster"
        />
        <Card
          src="./image/about/graphic/cover/package.svg"
          bg="#7EB964"
          title="package"
        />
        <Card
          src="./image/about/graphic/cover/fonts.svg"
          bg="#4FBDEE"
          title="fonts"
        />
      </div>
    </div>
  );
}

export default Graphic;
