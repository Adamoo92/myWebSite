"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Schoolbell } from "next/font/google";

const schoolbell = Schoolbell({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const markColor = [
  "#97C9D2",
  "#FF9D64",
  "#F9C452",
  "#B7E1E0",
  "#F8A16C",
  "#FEE49A",
];

export default function Book({ list, onClick }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="w-64 h-64 flex justify-center items-center relative cursor-pointer"
      style={{ perspective: 800 }}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      onClick={onClick}
    >
      <motion.div
        className="book_bottom w-[140px] h-48 rounded-xl p-2 pl-0 absolute ml-1"
        style={{ backgroundColor: list.color_800 }}
        animate={{ x: hover ? 8 : 0 }}
      >
        <div className="h-full flex flex-col justify-center gap-4 absolute top-0 right-[-14px]">
          {markColor.map((backgroundColor, i) => (
            <span key={i} className="w-6 h-2.5" style={{ backgroundColor }} />
          ))}
        </div>
        <div className="w-full h-full rounded bg-white relative" />
      </motion.div>
      <motion.div
        className="book_cover w-36 h-48 rounded-xl flex flex-col gap-8 pl-3 pt-3 justify-center items-center relative"
        style={{ backgroundColor: list.color_700, originX: 0 }}
        animate={{ rotateY: hover ? -20 : 0 }}
      >
        <div className="absolute left-0 top-0 flex flex-col justify-center gap-4 pl-2 h-full">
          {Array(7)
            .fill(0)
            .map((_, i) => (
              <span
                key={i}
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: list.color_950 }}
              />
            ))}
        </div>
        <>
          {list.logo}
          <p
            className={`${schoolbell.className} text-xl capitalize select-none`}
            style={{ color: list.color_500 }}
          >
            {list.name + " notes"}
          </p>
        </>
      </motion.div>
      <div className="flex flex-col gap-5 absolute left-10 pl-0.5">
        {Array(7)
          .fill(0)
          .map((_, i) => (
            <span
              key={i}
              className="w-7 h-1 rounded-full bg-gradient-to-r from-zinc-400 via-zinc-50 to-zinc-400"
            />
          ))}
      </div>
    </div>
  );
}
