"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function Book({ icon, bgColor, onClick }) {
  const [hover, setHover] = useState(false);

  return (
    <div className="noteBook w-64 h-64 px-12 py-4 relative">
      <div
        className="w-full h-full flex justify-end relative cursor-pointer"
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
        style={{ perspective: 800 }}
        onClick={onClick}
      >
        <motion.div
          className="noteBook-bottom w-36 h-full border border-white rounded-xl p-3 absolute"
          style={{
            background: bgColor
              ? `linear-gradient(0deg, rgba(0, 0, 0, 0.06) 0%, rgba(0, 0, 0, 0.06) 100%), ${bgColor}`
              : "linear-gradient(0deg, rgba(0, 0, 0, 0.06) 0%, rgba(0, 0, 0, 0.06) 100%), #FADED7",
            backgroundBlendMode: "color-burn, normal",
          }}
          animate={{ x: hover ? 16 : 0 }}
        >
          <div className="w-full h-full bg-white" />
        </motion.div>
        <motion.div
          className="noteBook-cover w-full h-full rounded-xl border-white outline outline-1 outline-[#1A181633] relative flex flex-col gap-6 justify-center items-center select-none"
          style={{
            backgroundColor: bgColor || "#FADED7",
            borderWidth: 6,
            originX: 0,
          }}
          animate={{ rotateY: hover ? -20 : 0 }}
        >
          {icon ? (
            <Image
              src={`/image/notes/icons/${icon}.svg`}
              width={60}
              height={60}
              alt={icon}
            />
          ) : (
            <div className="bg-black/10" style={{ width: 60, height: 60 }} />
          )}
          <p className="capitalize text-center text-base font-normal">
            {icon ? icon : "title"}
            <br />
            notes
          </p>
        </motion.div>
      </div>
    </div>
  );
}
