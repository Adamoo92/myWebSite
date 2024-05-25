"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, transform, useInView } from "framer-motion";
import useMeasure from "react-use-measure";
import { ResizeObserver } from "@juggle/resize-observer";
import { mergeRefs } from "react-merge-refs";

function FirstScreen(props) {
  const [ref, bounds] = useMeasure({ scroll: true, polyfill: ResizeObserver });
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { once: false });
  const [bgAlpha, setBgAlpha] = useState(0);
  const [rotateX, setRotateX] = useState(0);

  useEffect(() => {
    setBgAlpha(transform([0, 0 - bounds.height / 3], [0, 40])(bounds.top));
    setRotateX(transform([0, 0 - bounds.height / 3], [0, 40])(bounds.top));
  }, [bounds]);

  return (
    <section
      className="first-screen w-full h-screen relative pt-24"
      style={{ perspective: 1200 }}
      ref={mergeRefs([ref, inViewRef])}
    >
      <motion.div
        className="w-full h-full rounded-3xl overflow-hidden relative"
        initial={{
          rotateX: 0,
        }}
        style={{
          originY: 1,
          backgroundColor: `rgba(235, 225, 220, ${bgAlpha})`,
          rotateX,
        }}
      >
        <motion.div
          className="absolute"
          style={{
            originY: 0,
            originX: 0,
            top: "calc(50% - 396px)",
            right: 240,
          }}
          initial={{ y: "100%", rotate: 0, opacity: 0 }}
          animate={{
            y: isInView ? 0 : 792,
            rotate: isInView ? 6 : 0,
            opacity: isInView ? 1 : 0,
          }}
          transition={{ duration: 1, type: "spring" }}
        >
          <Image
            src="/image/about/firstScreen/newspaper.svg"
            width={640}
            height={792}
            alt="newspaper"
          />
        </motion.div>
        <motion.div
          className="absolute"
          style={{ originY: 0, originX: 0, left: 20, top: "calc(50% - 174px)" }}
          initial={{ x: -512, rotate: 0, opacity: 0 }}
          animate={{
            x: isInView ? 0 : -512,
            rotate: isInView ? -8 : 0,
            opacity: isInView ? 1 : 0,
          }}
          transition={{ duration: 1, type: "spring" }}
        >
          <Image
            src="/image/about/firstScreen/idcard.svg"
            width={512}
            height={348}
            alt="idcard"
          />
        </motion.div>
      </motion.div>
      <motion.div className="w-max h-max absolute bottom-0 right-0">
        <Image
          src="/image/about/firstScreen/character.png"
          width={413}
          height={1100}
          alt="about-firstScreen-character"
        />
      </motion.div>
    </section>
  );
}

export default FirstScreen;
