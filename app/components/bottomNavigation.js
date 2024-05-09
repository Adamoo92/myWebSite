"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

const lists = [
  "about",
  "tools",
  "experience",
  "web design",
  "mobile",
  "animation",
];

function BottomNavigation(props) {
  const [selected, setSelected] = useState(0);

  return (
    <section className="text-sm font-medium capitalize text-ownBlack w-1/2 mx-auto h-max overflow-hidden relative before:block before:absolute before:w-full before:h-full before:bg-gradient-to-r before:from-ownRed-100 before:via-[#FFF2F300] before:to-ownRed-100 before:select-none before:pointer-events-none">
      <motion.ul
        className="flex w-max"
        initial={{ marginLeft: "calc(50% - 45px)" }}
        animate={{ marginLeft: `calc(50% - 45px - ${selected * 96}px)` }}
      >
        {lists.map((item, i) => (
          <Link href="" onClick={() => setSelected(i)} key={i}>
            <li
              className={`${
                i === selected
                  ? "font-bold text-ownRed-900"
                  : "font-medium text-ownBlack"
              } p-2 min-w-24 flex justify-center items-center`}
            >
              {item}
            </li>
          </Link>
        ))}
      </motion.ul>
    </section>
  );
}

export default BottomNavigation;
