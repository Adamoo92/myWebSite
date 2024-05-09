"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion, transform } from "framer-motion";

function UserInterface() {
  const ref = useRef();
  const [left, setLeft] = useState(0);
  const [rotate, setRotate] = useState(-20);
  const [scale, setScale] = useState(1);
  const [y, setY] = useState(0);

  const handleWheel = () => {
    const containerRef = ref.current.getBoundingClientRect();

    setLeft(
      transform(
        [165, 165 - (containerRef.height / 5) * 2],
        [-480, 258]
      )(containerRef.top)
    );
    setRotate(
      transform(
        [165, 165 - (containerRef.height / 5) * 2],
        [-20, 0]
      )(containerRef.top)
    );
    setRotate(
      transform(
        [
          165 - (containerRef.height / 5) * 2,
          165 - (containerRef.height / 5) * 4,
        ],
        [0, 20]
      )(containerRef.top)
    );
    setScale(
      transform(
        [165 - containerRef.height / 5, 165 - (containerRef.height / 5) * 2],
        [1, 0]
      )(containerRef.top)
    );
  };

  return (
    <div
      ref={ref}
      className="user-interface text-ownBlack w-full relative"
      style={{ height: "500%" }}
      onWheel={handleWheel}
    >
      <div
        className="user-interface-firstScreen sticky top-0 bg-white flex justify-center items-center overflow-hidden"
        style={{ height: "20%" }}
      >
        <motion.div
          className="flex flex-col items-center gap-1"
          style={{ scale }}
        >
          <h1 className="font-sans text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#EC5D4D] via-[#FDCA49] via-[#7EB964] to-[#4FBDEE]">
            UI · UX
          </h1>
          <span className="font-sans text-lg font-normal text-ownBlack">
            User Interface and User Experience
          </span>
        </motion.div>
        <motion.div
          className="absolute"
          style={{ width: 350, height: 725, left: -460, rotate, left }}
        >
          <Image
            src="/image/about/ui/cover/display_1.png"
            width={350}
            height={725}
            alt="ui-cover-display-1"
          />
        </motion.div>
        <motion.div
          className="absolute"
          style={{
            width: 350,
            height: 725,
            right: -460,
            rotate,
            right: left,
          }}
        >
          <Image
            src="/image/about/ui/cover/display_2.png"
            width={350}
            height={725}
            alt="ui-cover-display-2"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default UserInterface;
