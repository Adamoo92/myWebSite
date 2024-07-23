"use client";
import { motion } from "framer-motion";

export default function TextU() {
  return (
    <div className="w-[95px] h-[200px] overflow-hidden">
      <motion.div
        className="w-max h-max flex flex-col gap-2.5"
        initial={{ y: -40 }}
        animate={{ y: -250 }}
        transition={{
          duration: 1.6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0.8,
        }}
      >
        <TextUBase />
        <TextUBase />
        <TextUBase />
      </motion.div>
    </div>
  );
}

function TextUBase() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="95"
      height="200"
      viewBox="0 0 95 200"
      fill="none"
    >
      <path
        d="M47.5 200C21.31 200 0 178.69 0 152.5V0H30V152.5C30 162.15 37.85 170 47.5 170C57.15 170 65 162.15 65 152.5V0H95V152.5C95 178.69 73.69 200 47.5 200Z"
        fill="white"
      />
    </svg>
  );
}
