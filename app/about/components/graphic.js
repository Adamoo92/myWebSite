"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, transform } from "framer-motion";
import Link from "next/link";
import LogoSvg from "../../../public/image/about/graphic/cover/logo.svg";
import PosterSvg from "../../../public/image/about/graphic/cover/poster.svg";
import PackageSvg from "../../../public/image/about/graphic/cover/package.svg";
import FontSvg from "../../../public/image/about/graphic/cover/fonts.svg";

const cardList = [
  { name: "logo", src: LogoSvg, bg: "#EC5D4D", href: "#graphic-logo" },
  {
    name: "poster",
    src: PosterSvg,
    bg: "#FDCA49",
    href: "#graphic-poster",
  },
  {
    name: "package",
    src: PackageSvg,
    bg: "#7EB964",
    href: "",
  },
  { name: "fonts", src: FontSvg, bg: "#4FBDEE", href: "" },
];

const Card = (props) => {
  const { src, name, backgroundColor, href } = props;

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
    setRotateY(
      transform([-element.offsetWidth / 2, element.offsetWidth / 2], [-8, 8])(x)
    );
    setRotateX(
      transform(
        [-element.offsetHeight / 2, element.offsetHeight / 2],
        [8, -8]
      )(y)
    );
  };

  const handlePointerLeave = () => {
    setRotateY(0);
    setRotateX(0);
  };

  return (
    <div
      className="flex-1 h-max flex flex-col items-center gap-8"
      style={{ perspective: 800 }}
    >
      <motion.div
        ref={ref}
        className="w-full rounded-2xl overflow-hidden cursor-pointer"
        style={{
          height: 300,
          backgroundColor,
          rotateX,
          rotateY,
        }}
        whileHover={{
          boxShadow: `0px 40px 60px -28px ${backgroundColor}`,
          scale: 1.05,
        }}
        transition={{ duration: 0.4 }}
        onPointerMove={handlePointer}
        onPointerLeave={handlePointerLeave}
      >
        <Link href={href || ""}>
          <Image src={src} alt="graphic-cover" className="h-full" />
        </Link>
      </motion.div>
      <h2 className="font-sans font-semibold text-xl text-ownBlack capitalize">
        {name}
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
        style={{ right: 232, bottom: 20, transform: "rotate(-60deg)" }}
      />
      <Image
        src="./image/about/graphic/adorn/division.svg"
        width={42}
        height={42}
        alt="graphic-adorn-division"
        className="absolute"
        style={{ right: 133, bottom: 36, transform: "rotate(30deg)" }}
      />
      <Image
        src="./image/about/graphic/adorn/multiply.svg"
        width={42}
        height={42}
        alt="graphic-adorn-multiply"
        className="absolute"
        style={{ right: 40, bottom: 26, transform: "rotate(60deg)" }}
      />
      <Image
        src="./image/about/graphic/adorn/add.svg"
        width={42}
        height={42}
        alt="graphic-adorn-add"
        className="absolute"
        style={{ right: 15, bottom: 92, transform: "rotate(20deg)" }}
      />
    </div>
  );
};

function Title() {
  return (
    <div className="graphic-title-all flex items-center gap-8">
      <div className="graphic-title  w-max h-max px-1 py-4 pb-8 border-4 border-indigo-500 relative">
        <span className="absolute w-4 h-4 bg-white border-4 border-indigo-500 left-[-10px] top-[-10px]" />
        <span className="absolute w-4 h-4 bg-white border-4 border-indigo-500 right-[-10px] top-[-10px]" />
        <span className="absolute w-4 h-4 bg-white border-4 border-indigo-500 right-[-10px] bottom-[-10px]" />
        <span className="absolute w-4 h-4 bg-white border-4 border-indigo-500 left-[-10px] bottom-[-10px]" />
        <span className="font-bold text-8xl text-ownBlack">Graphic</span>
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
  );
}

export default function Graphic() {
  return (
    <div
      className="about-graphic w-full h-max border-4 border-ownDarkPurple p-8 pb-10 relative"
      style={{
        background:
          "linear-gradient(to right,#E7E7E7 2px, transparent 2px),linear-gradient(to bottom,#E7E7E7 2px, transparent 2px)",
        backgroundRepeat: "repeat",
        backgroundSize: "32px 32px",
      }}
    >
      <Adorn />
      <Title />
      <div className="graphic-card-all flex justify-center gap-8 my-20">
        {cardList.map((card, i) => (
          <Card
            key={i}
            src={card.src}
            backgroundColor={card.bg}
            name={card.name}
            href={card.href}
          />
        ))}
      </div>
    </div>
  );
}
