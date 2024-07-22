"use client";
import React from "react";
import { motion } from "framer-motion";

export default function GraphicPackage2() {
  const handleClick = (i) => {};
  return (
    <div className="w-full h-screen flex flex-col justify-center gap-16">
      <div className="graphic-package-title text-ownBlack flex flex-col gap-3 mt-8 items-center select-none">
        <h1 className="text-8xl font-bold">Package</h1>
        <div className="flex gap-2 text-xl">
          <p>👉</p>
          <p>平面设计-包装</p>
          <p>👈</p>
        </div>
      </div>
      <div className="w-full grid grid-cols-4 gap-4">
        {Array(12)
          .fill(0)
          .map((_item, i) => (
            <motion.div
              key={i}
              id={`packing_${i}`}
              className="w-full aspect-square rounded-3xl overflow-hidden cursor-pointer"
              onClick={handleClick(i)}
            >
              <motion.div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('/image/about/graphicPackage/Packing_${i}.jpg')`,
                }}
                whileHover={{ scale: 1.1 }}
              />
            </motion.div>
          ))}
      </div>
    </div>
  );
}
