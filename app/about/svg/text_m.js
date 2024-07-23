"use client";
import { motion } from "framer-motion";

export default function TextM() {
  return (
    <div className="w-max h-[200px] flex items-end overflow-hidden">
      <motion.div
        className="flex flex-col gap-2.5"
        initial={{ y: 40 }}
        animate={{ y: 250 }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0.6,
        }}
      >
        <TextMBase />
        <TextMBase />
        <TextMBase />
      </motion.div>
    </div>
  );
}

function TextMBase() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="135"
      height="200"
      viewBox="0 0 135 200"
      fill="none"
    >
      <path
        d="M30.5342 0H0V200H30V116.32L51.9659 200H83.0341L105 116.32V200H135V0H104.466L67.5 140.822L30.5342 0Z"
        fill="white"
      />
    </svg>
  );
}
