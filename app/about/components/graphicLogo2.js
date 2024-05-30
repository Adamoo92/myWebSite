"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, transform, useMotionValue } from "framer-motion";
import Link from "next/link";
import useMeasure from "react-use-measure";
import { ResizeObserver } from "@juggle/resize-observer";
import { logoPosition } from "./logo-data";

const menuRight = ["localization", "settings", "preview"];
const tools = [
  { name: "move", text: "移动" },
  { name: "pen", text: "钢笔" },
  { name: "pencil", text: "铅笔" },
  { name: "fill", text: "填充" },
  { name: "image", text: "图像" },
  { name: "roundedRect", text: "矩形" },
  { name: "ellipse", text: "圆形" },
  { name: "text", text: "文字" },
  { name: "measure", text: "测量" },
  { name: "zoom", text: "缩放" },
];
const shape = ["add", "subtract", "intersect", "combine", "divide"];

const MenuBar = (props) => {
  const { selected } = props;

  return (
    <div className="flex bg-[#111111] p-4">
      <div className="menu-left flex flex-1 gap-3">
        <motion.div
          className="w-max h-max p-1.5 bg-[#343434] rounded-lg cursor-pointer"
          whileHover={{ backgroundColor: "#282828" }}
        >
          <Link href="#about-graphic-logo-container">
            <Image
              src="/image/about/graphicLogo/frameUI/logo.svg"
              width={18}
              height={18}
              alt="framerUI-logo"
            />
          </Link>
        </motion.div>
        <div className="w-28 h-full border-l-[1px] border-[#343434] pl-3 flex gap-1 items-center select-none">
          <Image
            src={`/image/about/graphicLogo/frameUI/${tools[selected].name}.png`}
            width={18}
            height={18}
            alt={`frameUI-${tools[selected].name}`}
          />
          <span className="font-sans text-sm font-light text-[#A5A7AA]">
            {tools[selected].text}工具
          </span>
        </div>
        <div className="h-full border-l-[1px] border-[#343434] pl-3 flex gap-1 items-center">
          <span className="h-full text-xs font-semibold text-white opacity-30">
            <Link href="/" className="w-full h-full flex items-center">
              armoo.deisgn /
            </Link>
          </span>
          <span className="h-full flex items-center text-xs font-semibold text-white select-none">
            Logo_Display.afdesign
          </span>
        </div>
      </div>
      <div className="menu-right flex gap-16">
        <div className="flex gap-1">
          {shape.map((item) => (
            <motion.div
              key={item}
              className="p-1.5 bg-[#343434] rounded-lg cursor-pointer"
              whileHover={{ backgroundColor: "#282828" }}
            >
              <Image
                src={`/image/about/graphicLogo/frameUI/${item}.svg`}
                width={18}
                height={18}
                alt={`frameUI-${item}`}
              />
            </motion.div>
          ))}
        </div>
        <div className="flex gap-2">
          {menuRight.map((item) => (
            <motion.div
              key={item}
              className="p-1.5 bg-[#343434] rounded-lg cursor-pointer"
              whileHover={{ backgroundColor: "#282828" }}
            >
              <Image
                src={`/image/about/graphicLogo/frameUI/${item}.svg`}
                width={18}
                height={18}
                alt={`frameUI-${item}`}
              />
            </motion.div>
          ))}
          <motion.div
            className="text-white px-2.5 h-full flex items-center bg-[#343434] text-xs font-semibold rounded-lg cursor-pointer"
            whileHover={{ backgroundColor: "#282828" }}
          >
            Invite
          </motion.div>
          <motion.div
            className="text-white px-2.5 h-full flex items-center bg-[#0099FF] text-xs font-semibold rounded-lg cursor-pointer"
            whileHover={{ backgroundColor: "#1188FF" }}
          >
            Share
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const FrameTools = (props) => {
  const { selected, setSelected } = props;
  const [fillColor, setFillColor] = useState(true);

  return (
    <div className="w-max h-max flex flex-col gap-1 px-4 py-5 rounded-lg bg-[#111111] absolute left-4 top-4 z-50">
      {tools.map((_item, i) => (
        <motion.div
          key={i}
          className="p-1.5 rounded-md cursor-pointer"
          style={{
            background: i === selected ? "#333333" : "#111111",
          }}
          whileHover={{
            background: i === selected ? "#333333" : "#1F1F1F",
          }}
          onClick={() => setSelected(i)}
        >
          <Image
            src={`/image/about/graphicLogo/frameUI/${tools[i].name}.png`}
            width={18}
            height={18}
            alt={`frameUI-${tools[i].name}`}
          />
        </motion.div>
      ))}
      <div
        className="flex flex-col pt-4"
        onClick={() => setFillColor(!fillColor)}
      >
        <Image
          src="/image/about/graphicLogo/frameUI/colorBorder.svg"
          width={30}
          height={30}
          alt="frameUI-colorBorder"
          className="cursor-pointer"
          style={{ zIndex: !fillColor ? 99 : 0 }}
        />
        <Image
          src="/image/about/graphicLogo/frameUI/colorFill.svg"
          width={30}
          height={30}
          alt="frameUI-colorFill"
          className="mt-[-16px] cursor-pointer"
          style={{ zIndex: fillColor ? 99 : 0 }}
        />
      </div>
    </div>
  );
};

const LogoGrounp = () => {
  return (
    <div className="w-full h-[740px] absolute">
      {logoPosition.map((item, i) => (
        <motion.div
          key={i}
          className="w-max h-max absolute cursor-pointer"
          style={{ left: item.left, top: item.top, rotate: item.rotate }}
          whileHover={{ scale: 1.1 }}
        >
          <Image
            src={`/image/about/graphicLogo/logo/${item.name}.svg`}
            width={item.width}
            height={item.height}
            alt={`logo-${item.name}`}
          />
        </motion.div>
      ))}
    </div>
  );
};

function GraphicLogo2(props) {
  const [selected, setSelected] = useState(0);
  const [ref, bounds] = useMeasure({ scroll: true, polyfill: ResizeObserver });
  const screenHeight = useMotionValue(0);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const height = entry.contentRect.height;
        screenHeight.set(height);
      }
    });
    resizeObserver.observe(document.body);
    return () => resizeObserver.observe(document.body);
  }, []);

  const y = transform(
    [
      (screenHeight.get() / 5) * 4,
      (screenHeight.get() - bounds.height) / 2 + 96,
    ],
    [-bounds.height / 2 - 50, 0]
  )(bounds.top);
  const color = transform(
    [
      (screenHeight.get() / 5) * 4,
      (screenHeight.get() - bounds.height) / 2 + 96,
    ],
    ["#000", "#fff"]
  )(bounds.top);
  const rotateX = transform(
    [
      (screenHeight.get() / 5) * 4,
      (screenHeight.get() - bounds.height) / 2 + 96,
    ],
    [10, 0]
  )(bounds.top);
  const opacity = transform(
    [
      (screenHeight.get() / 5) * 4,
      (screenHeight.get() - bounds.height) / 2 + 96,
    ],
    [1, 0]
  )(bounds.top);

  return (
    <section
      id="about-graphic-logo-container"
      ref={ref}
      className="about-graphic-logo-container w-full flex justify-center items-center relative"
      style={{
        height: "100vh",
        maxHeight: 1000,
        minHeight: 800,
        marginTop: 600,
        perspective: 1200,
      }}
    >
      <motion.div
        className="w-full h-full bg-[#24272C] rounded-3xl flex flex-col overflow-hidden"
        style={{
          originY: 1,
          rotateX,
        }}
      >
        <MenuBar selected={selected} />
        <div className="flex-1 relative">
          <FrameTools selected={selected} setSelected={setSelected} />
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col items-center text-8xl font-bold uppercase absolute w-max h-max select-none"
        style={{ marginTop: 62, y, color, zIndex: 52 }}
      >
        <h1>Logo</h1>
        <h1>Design.</h1>
      </motion.div>
      {opacity !== 0 ? (
        <motion.div
          className="w-full h-full absolute top-0 left-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 242, 243, 0.6) 0%, rgba(255, 242, 243, 0.00) 100%)",
            zIndex: 51,
            opacity,
          }}
        />
      ) : (
        <></>
      )}
      <LogoGrounp />
    </section>
  );
}

export default GraphicLogo2;
