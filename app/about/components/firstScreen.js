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
    setBgAlpha(transform([165, 165 - bounds.height / 3], [0, 40])(bounds.top));
    setRotateX(transform([165, 165 - bounds.height / 3], [0, 40])(bounds.top));
  }, [bounds]);

  return (
    <div
      className="first-screen w-full h-full relative"
      style={{ perspective: 1200 }}
      ref={mergeRefs([ref, inViewRef])}
    >
      <motion.div
        className="w-full h-full rounded-3xl overflow-hidden"
        initial={{
          rotateX: 0,
        }}
        style={{
          originY: 1,
          background: `linear-gradient(180deg, rgba(210, 199, 181, 0.00) 0%, rgba(210, 199, 181, ${bgAlpha}) 100%)`,
          rotateX,
        }}
      >
        <motion.div
          className="absolute left-[440px] top-[68px]"
          style={{ originY: 0, originX: 0 }}
          initial={{ y: 792, rotate: 0 }}
          animate={{ y: isInView ? 0 : 792, rotate: isInView ? 6 : 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <Image
            src="/image/newspaper.svg"
            width={640}
            height={792}
            alt="newspaper"
          />
        </motion.div>
        <motion.div
          className="absolute left-0 top-[310px]"
          style={{ originY: 0, originX: 0 }}
          initial={{ x: -512, rotate: 0 }}
          animate={{ x: isInView ? 0 : -512, rotate: isInView ? -8 : 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <Image
            src="/image/idcard.svg"
            width={512}
            height={348}
            alt="idcard"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default FirstScreen;
