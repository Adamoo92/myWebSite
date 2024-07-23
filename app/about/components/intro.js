"use client";
import { useEffect, useRef, useState } from "react";
import { motion, transform, useInView, useTransform } from "framer-motion";
import useMeasure from "react-use-measure";
import { ResizeObserver } from "@juggle/resize-observer";

export default function Intro() {
  return (
    <section className="w-full py-24 flex flex-col gap-20">
      <h1 className="text-6xl font-light text-[#4E3BB7]">Portfolio</h1>
      <TextTop />
      <div className="w-full aspect-square relative">
        <BigArrow />
        <div className="flex flex-col gap-10 absolute left-0 top-[440px]">
          <TextInView>Profile</TextInView>
          <TextInView>Tools</TextInView>
          <TextInView>Experience</TextInView>
          <TextInView>UI</TextInView>
          <TextInView>Graphic</TextInView>
        </div>
      </div>
      <TextBottom />
    </section>
  );
}

// Components
function TextTop() {
  return (
    <div className="flex flex-col gap-20">
      <div className="w-7 h-7 flex justify-center items-center">
        <span className="w-1 h-8 bg-ownBlack rotate-45" />
      </div>
      <div className="flex flex-col gap-1 font-sans text-lg text-ownBlack font-medium">
        <div>姓名：代常乐 性别：男 生日：1992/01/05</div>
        <div>学校：齐鲁工业大学 学历：大专</div>
        <div>电话：132 4987 1235</div>
        <div>邮箱：daichangle1203@gmail.com</div>
      </div>
      <span className="w-8 h-1 bg-ownBlack" />
    </div>
  );
}

function BigArrow() {
  const [height, setHeight] = useState();
  const [ref, bounds] = useMeasure({ polyfill: ResizeObserver, scroll: true });

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      const bodyRect = body.getBoundingClientRect();
      setHeight(bodyRect.height);
    }
  }, []);

  const scale1 = transform([(height / 4) * 3, 0], [0, 1])(bounds.top);
  const scale2 = transform([(height / 4) * 3 - 80, 0], [0, 1])(bounds.top);
  const scale3 = transform([(height / 4) * 3 - 560, 0], [0, 1])(bounds.top);

  return (
    <div
      className="w-full aspect-square flex justify-center items-center relative"
      ref={ref}
    >
      <BaseDiv w={400} h={40} left={0} top={0} scaleX={scale1} />
      <BaseDiv w={40} h={400} left={0} top={0} scaleY={scale1} />
      <BaseDiv w={40} h={1360} rotate={-45} scaleY={scale2} />
      <BaseDiv w={400} h={40} right={0} bottom={0} scaleX={scale3} />
      <BaseDiv w={40} h={400} right={0} bottom={0} scaleY={scale3} />
    </div>
  );
}

function BaseDiv(props) {
  const { w, h, left, right, top, bottom, rotate, scaleX, scaleY } = props;

  return (
    <motion.div
      className="absolute"
      style={{
        width: w || 400,
        height: h || 40,
        left,
        right,
        top,
        bottom,
        rotate,
      }}
    >
      <motion.div
        className="w-full h-full"
        style={{
          backgroundColor: "#4E3BB7",
          originX: 0,
          originY: 0,
          scaleX,
          scaleY,
        }}
      />
    </motion.div>
  );
}

function TextBottom() {
  return (
    <div className="flex flex-col gap-20 items-end text-ownBlack ">
      <div className="w-7 h-7 flex justify-center items-center">
        <span className="w-1 h-8 bg-ownBlack -rotate-45" />
      </div>
      <div className="flex flex-col items-end gap-2 font-sans text-lg font-normal ">
        <h3 className="uppercase font-semibold text-2xl">before</h3>
        <p>
          LOGO设计、VIS设计、物料设计、KV设计、画册设计...
          <br />
          活动页面设计、商品页面设计...
        </p>
        <h3 className="uppercase font-semibold text-2xl mt-4">current</h3>
        <p className="w-[440px] text-justify">
          Apps页面设计、Web页面设计、Web后台页面设计、小程序设计、设计组件规范、页面交互设计、组件交互设计、动效设计及输出。
        </p>
      </div>
      <span className="w-8 h-1 bg-ownBlack" />
    </div>
  );
}

function TextInView({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.h1
      ref={ref}
      className="capitalize text-[#4E3BB7] text-5xl font-light select-none"
      initial={{ opacity: 0, x: "-50%" }}
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : "-50%" }}
      transition={{ duration: 0.8 }}
    >
      {children || "text"}
    </motion.h1>
  );
}
