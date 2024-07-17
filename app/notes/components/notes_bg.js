"use client";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import Image from "next/image";

import paper_1 from "/public/image/notes/paper/paper_1.svg";
import paper_2 from "/public/image/notes/paper/paper_2.svg";
import paper_3 from "/public/image/notes/paper/paper_3.svg";
import paper_4 from "/public/image/notes/paper/paper_4.svg";

export default function NotesBg() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <div
      className="notes-bg absolute left-0 top-0 w-full h-full select-none"
      ref={ref}
    >
      <motion.div
        className="absolute w-max h-max"
        style={{ left: 200, top: -560, rotate: -12 }}
        animate={{ y: isInView ? 260 : 0 }}
        whileHover={{ rotate: -10 }}
        transition={{
          y: {
            duration: 0.8,
            delay: 0.4,
            type: "spring",
          },
          rotate: {
            duration: 0.2,
            delay: 0,
            ease: "easeInOut",
          },
        }}
      >
        <Image src={paper_1} alt="paper_1" width={404} height={514} />
      </motion.div>
      <motion.div
        className="absolute w-max h-max"
        style={{ right: -88 - 480, bottom: -90, rotate: 8 }}
        animate={{ x: isInView ? -480 : 0 }}
        whileHover={{ rotate: 10 }}
        transition={{
          x: { duration: 0.8, delay: 0.6, type: "spring" },
          rotate: {
            duration: 0.2,
            delay: 0,
            ease: "easeInOut",
          },
        }}
      >
        <Image src={paper_2} alt="paper_2" width={520} height={600} />
      </motion.div>
      <motion.div
        className="absolute w-max h-max"
        style={{ left: 150 - 330, bottom: 120, rotate: 12 }}
        animate={{ x: isInView ? 330 : 0 }}
        whileHover={{ rotate: 14 }}
        transition={{
          x: { duration: 0.8, delay: 0.5, type: "spring" },
          rotate: {
            duration: 0.2,
            delay: 0,
            ease: "easeInOut",
          },
        }}
      >
        <Image src={paper_3} alt="paper_3" width={160} height={160} />
      </motion.div>
      <motion.div
        className="absolute w-max h-max"
        style={{ right: 142, top: 170 - 360, rotate: -4 }}
        animate={{ y: isInView ? 360 : 0 }}
        whileHover={{ rotate: -6 }}
        transition={{
          y: { duration: 0.8, delay: 0.5, type: "spring" },
          rotate: {
            duration: 0.2,
            delay: 0,
            ease: "easeInOut",
          },
        }}
      >
        <Image src={paper_4} alt="paper_4" width={160} height={180} />
      </motion.div>
    </div>
  );
}
