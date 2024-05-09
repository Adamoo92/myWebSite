"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Rethink_Sans } from "next/font/google";

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "800",
  style: "italic",
});

function Button(props) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`${rethinkSans.className} text-base w-max text-white px-12 py-3 relative cursor-pointer overflow-hidden bg-ownBlack`}
      onPointerMove={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <AnimatePresence>
        {hover && (
          <motion.div
            className="absolute w-full h-full bg-[#FF4655] top-0"
            initial={{ left: "-120%", skewX: -30 }}
            animate={{ left: hover ? 0 : "-120%", skewX: hover ? 0 : -40 }}
            exit={{ left: "-120%", skewX: -30 }}
            transition={{ duration: 0.4 }}
          />
        )}
      </AnimatePresence>
      <span className="relative select-none">{props.children}</span>
    </div>
  );
}

export default Button;
