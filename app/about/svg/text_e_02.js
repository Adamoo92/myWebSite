"use client";
import { motion } from "framer-motion";

export default function TextE02() {
  return (
    <div className="w-max h-[200px] overflow-hidden">
      <motion.div
        className="flex flex-col gap-2.5"
        initial={{ y: -40 }}
        animate={{ y: -165 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0.3,
        }}
      >
        <TextEBase />
        <TextEBase />
        <TextEBase />
      </motion.div>
    </div>
  );
}

function TextEBase() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="90"
      height="115"
      viewBox="0 0 90 115"
      fill="none"
    >
      <rect width="90" height="30" fill="white" />
      <rect y="85" width="90" height="30" fill="white" />
      <rect width="30" height="115" fill="white" />
    </svg>
  );
}
