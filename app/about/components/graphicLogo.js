"use client";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, transform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cx } from "@/app/utils";
import FramerLogo from "@/public/image/about/graphicLogo/frameUI/logo.svg";
import { menuRight, shape, tools } from "../data/graphic-logo-data";
import { logoPosition } from "../data/graphic-logo-data";
import useMeasure from "react-use-measure";
import { ResizeObserver } from "@juggle/resize-observer";

const MenuBar = (props) => {
  const { selected } = props;

  return (
    <div className="flex bg-[#111111] p-4 rounded-t-3xl">
      <div className="flex flex-1 gap-3">
        <div className="bg-[#343434] rounded-lg">
          <Image src={FramerLogo} alt="framer-logo" className="m-1.5" />
        </div>
        <div className="w-28 pl-3 flex gap-1 items-center border-l border-[#343434]">
          <Image
            src={tools[selected].src}
            className="w-[18px]"
            alt={tools[selected].name}
          />
          <span className="font-sans font-light text-sm text-[#A5A7AA]">
            {tools[selected].text}
          </span>
        </div>
        <div className="pl-3 flex items-center border-l border-[#343434] text-xs font-semibold">
          <Link href="#" className="opacity-30">
            armoo.deisgn /
          </Link>
          <span>Logo_Display.afdesign</span>
        </div>
      </div>
      <div className="flex gap-16">
        <div className="flex gap-1">
          {shape.map((src, i) => (
            <div
              key={i}
              className="p-1.5 bg-[#343434] hover:bg-[#282828] transition-all ease duration-200 rounded cursor-pointer"
            >
              <Image src={src} alt="icon" />
            </div>
          ))}
        </div>
        <div className="flex gap-2 font-semibold text-xs">
          {menuRight.map((src, i) => (
            <div
              key={i}
              className="bg-[#343434] p-1.5 rounded-lg cursor-pointer hover:bg-[#282828] transition-all ease duration-200"
            >
              <Image src={src} alt="icon" />
            </div>
          ))}
          <div className="bg-[#343434] p-1.5 rounded-lg cursor-pointer hover:bg-[#282828] transition-all ease duration-200 flex items-center px-2.5">
            Invite
          </div>
          <div className="bg-[#0099FF] p-1.5 rounded-lg cursor-pointer hover:bg-[#1188FF] transition-all ease duration-200 flex items-center px-2.5">
            Publish
          </div>
        </div>
      </div>
    </div>
  );
};

const ToolsBar = (props) => {
  const { selected, setSelected, className } = props;

  return (
    <div
      className={cx(
        "w-max h-max px-4 py-5 flex flex-col gap-1 rounded-lg bg-[#111111]",
        className
      )}
    >
      {tools.map((item, i) => (
        <div
          className={`p-1.5 rounded-md cursor-pointer ${
            selected === i
              ? "bg-[#333] hover:bg-[#333]"
              : "bg-transparent hover:bg-[#1F1F1F]"
          } `}
          key={i}
          onClick={() => setSelected(i)}
        >
          <Image src={item.src} alt="tools-icon" className="w-[18px]" />
        </div>
      ))}
    </div>
  );
};

const LogoTitle = ({ y, color }) => {
  return (
    <motion.div
      className="flex flex-col items-center select-none pointer-events-none absolute z-1 text-ownBlack"
      animate={{ y, color }}
      transition={{ ease: "linear", duration: 0 }}
    >
      <h1 className="text-8xl font-bold uppercase text-center ">
        logo
        <br />
        design
      </h1>
      <div className="text-xl font-normal flex gap-2 mt-3">
        <span>🥳</span>你可以随意拖动这些Logo
        <span>🤪</span>
      </div>
    </motion.div>
  );
};

const LogoDragCanvas = ({ dragConstraintsRef, show }) => {
  const [logoSelected, setLogoSelected] = useState(null);

  return (
    <div className="w-full h-full relative">
      <AnimatePresence>
        {show ? (
          <>
            {logoPosition.map((item, i) => (
              <motion.div
                key={i}
                drag
                dragConstraints={dragConstraintsRef}
                dragMomentum={false}
                className="absolute outline outline-2 cursor-pointer"
                style={{
                  width: item.width,
                  height: item.height,
                  top: item.top,
                  right: item.right,
                  bottom: item.bottom,
                  left: item.left,
                  background: `url(/image/about/graphicLogo/logo/${item.name}.svg)`,
                  outlineColor: "rgba(150, 67, 255, 0)",
                  rotate: item.rotate,
                  zIndex: logoSelected === i ? 2 : 0,
                }}
                whileHover={{ scale: 1.1 }}
                initial={{ scale: 1.4, opacity: 0 }}
                exit={{ scale: 1.4, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  outlineColor:
                    i === logoSelected
                      ? "rgba(150, 67, 255, 1)"
                      : "rgba(150, 67, 255, 0)",
                  rotate:
                    i === logoSelected
                      ? item.rotate > 0
                        ? item.rotate - 4
                        : item.rotate + 4
                      : item.rotate,
                }}
                transition={{
                  scale: { duration: 0.3, delay: i * 0.03 },
                  opacity: { duration: 0.3, delay: i * 0.03 },
                }}
                onPointerDown={() => setLogoSelected(i)}
                onPointerLeave={() => setLogoSelected(null)}
              >
                {i === logoSelected ? (
                  <>
                    <div
                      className="absolute h-5 border-r-2 border-[#9643FF]"
                      style={{ width: "calc(50% + 1px)", top: -20 }}
                    >
                      <span className="absolute w-2.5 h-2.5 bg-white border-2 border-[#9643FF] rounded-full right-[-6px] top-[-6px]" />
                    </div>
                    <span className="absolute w-2.5 h-2.5 bg-white border-2 border-[#9643FF] rounded-full left-[-6px] top-[-6px]" />
                    <span className="absolute w-2.5 h-2.5 bg-white border-2 border-[#9643FF] rounded-full left-[-6px] bottom-[-6px]" />
                    <span className="absolute w-2.5 h-2.5 bg-white border-2 border-[#9643FF] rounded-full right-[-6px] top-[-6px]" />
                    <span className="absolute w-2.5 h-2.5 bg-white border-2 border-[#9643FF] rounded-full right-[-6px] bottom-[-6px]" />
                    <span
                      className="absolute w-2.5 h-2.5 bg-white border-2 border-[#9643FF] rounded-full left-[-6px]"
                      style={{ top: "calc(50% - 5px)" }}
                    />
                    <span
                      className="absolute w-2.5 h-2.5 bg-white border-2 border-[#9643FF] rounded-full right-[-6px]"
                      style={{ top: "calc(50% - 5px)" }}
                    />
                    <span
                      className="absolute w-2.5 h-2.5 bg-white border-2 border-[#9643FF] rounded-full top-[-6px]"
                      style={{ left: "calc(50% - 5px)" }}
                    />
                    <span
                      className="absolute w-2.5 h-2.5 bg-white border-2 border-[#9643FF] rounded-full bottom-[-6px]"
                      style={{ left: "calc(50% - 5px)" }}
                    />
                  </>
                ) : (
                  <></>
                )}
              </motion.div>
            ))}
          </>
        ) : (
          <></>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function GraphicLogo() {
  const [selected, setSelected] = useState(0);
  const dragConstraintsRef = useRef(null);
  const [ref, bounds] = useMeasure({ scroll: true, polyfill: ResizeObserver });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (bounds.top < -bounds.height / 3) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [bounds]);

  const y = transform(
    [0, -bounds.height / 3],
    [-bounds.height / 3, 0]
  )(bounds.top);

  const color = transform(
    [-bounds.height / 6, -bounds.height / 3],
    ["#0E0E0F", "#FFFFFF"]
  )(bounds.top);

  return (
    <section className="w-full h-[300vh]" ref={ref}>
      <div className="w-full h-screen flex justify-center items-center"></div>
      <div className="w-full h-screen flex justify-center items-center sticky top-0 z-0">
        <div className="w-full h-[800px] flex flex-col bg-[#24272C] rounded-3xl relative">
          <MenuBar selected={selected} />
          <div
            className="flex-1 relative flex justify-center items-center"
            ref={dragConstraintsRef}
          >
            <LogoDragCanvas
              dragConstraintsRef={dragConstraintsRef}
              show={show}
            />
            <LogoTitle y={y} color={color} />
            <ToolsBar
              selected={selected}
              setSelected={setSelected}
              className="absolute left-4 top-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
