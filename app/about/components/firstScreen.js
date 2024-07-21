"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, transform, useInView } from "framer-motion";
import useMeasure from "react-use-measure";
import { ResizeObserver } from "@juggle/resize-observer";
import { mergeRefs } from "react-merge-refs";

function FirstScreen() {
  const [ref, bounds] = useMeasure({ scroll: true, polyfill: ResizeObserver });
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { once: false });

  const bgAlpha = transform([0, 0 - bounds.height / 3], [0, 1])(bounds.top);
  const rotateX = transform([0, 0 - bounds.height / 3], [0, 20])(bounds.top);

  return (
    <section
      className="first-screen w-full h-screen relative pt-28 pb-4"
      ref={mergeRefs([ref, inViewRef])}
    >
      <div className="w-full h-full relative" style={{ perspective: 1200 }}>
        <motion.div
          className="w-full h-full bg-[#EBE5DC] rounded-2xl flex justify-center items-center relative overflow-hidden"
          initial={{ backgroundColor: "rgba(235,229,220,0)" }}
          animate={{
            backgroundColor: `rgba(235,229,220,${bgAlpha})`,
            rotateX,
          }}
          transition={{ duration: 0 }}
          style={{ originY: 1 }}
        >
          <motion.div
            className="h-[72%] w-auto absolute aspect-[4/5]"
            style={{ x: 80, y: "120%", rotate: 0, opacity: 0 }}
            animate={{ y: isInView ? 0 : "120%", rotate: 6, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <Image
              src="/image/about/firstScreen/newspaper.svg"
              fill
              quality={100}
              alt="newspaper"
            />
          </motion.div>
          <motion.div
            className="h-[32%] w-auto absolute aspect-[52/35]"
            style={{ x: -920, y: -60, rotate: 0, opacity: 0 }}
            animate={{ x: isInView ? -340 : -920, rotate: -8, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <Image
              src="/image/about/firstScreen/idcard.svg"
              fill
              quality={100}
              alt="idcard"
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="h-full w-auto absolute top-0 right-0 aspect-[21/55]"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.2, duration: 1.2 }}
        >
          <Image
            src="/image/about/firstScreen/character.png"
            fill
            quality={100}
            alt="character"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default FirstScreen;
