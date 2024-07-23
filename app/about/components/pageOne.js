"use client";
import { motion, useInView } from "framer-motion";

import React, { useRef } from "react";
import Image from "next/image";

import TextR from "../svg/text_r";
import TextE01 from "../svg/text_e_01";
import TextS from "../svg/text_s";
import TextU from "../svg/text_u";
import TextM from "../svg/text_m";
import TextE02 from "../svg/text_e_02";
import TextCategory from "../svg/text_category";
import TextTime from "../svg/text_time";
import CharacterPng from "@/public/image/about/firstScreen/character.png";

const btnColor = ["#FD594F", "#FFB828", "#30C44C"];

export default function PageOne() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section className="w-full h-screen pt-24 flex items-center relative">
      <motion.div
        className="absolute h-4/5 right-0 z-10"
        ref={ref}
        animate={{ opacity: isInView ? [0, 1, 0.5, 1, 0.7, 1] : 0 }}
      >
        <Image
          src={CharacterPng}
          alt="about-character"
          className="h-full w-auto"
        />
      </motion.div>
      <div className="w-full h-max bg-[#4E3BB7] flex flex-col p-5 pb-[90px] gap-[90px]">
        <div className="flex gap-4">
          {btnColor.map((backgroundColor, i) => (
            <span
              key={i}
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor }}
            />
          ))}
        </div>
        <div className="flex flex-col items-center">
          <div className="w-max text-resume flex gap-[30px]">
            <TextR />
            <TextE01 />
            <TextS />
            <TextU />
            <TextM />
            <TextE02 />
            <div className="w-[30px] h-[200px] overflow-hidden">
              <motion.div
                className="flex flex-col gap-5"
                initial={{ y: -65 }}
                animate={{ y: -155 }}
                transition={{
                  duration: 0.8,
                  repeatType: "reverse",
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 0.4,
                }}
              >
                <span className="w-[30px] h-[200px] bg-white" />
                <span className="w-[30px] h-[200px] bg-white" />
              </motion.div>
            </div>
          </div>
          <div className="w-max h-max mt-[30px] mb-[60px]">
            <TextCategory />
          </div>
          <div className="my-[60px]">
            <TextTime />
          </div>
        </div>
      </div>
    </section>
  );
}
