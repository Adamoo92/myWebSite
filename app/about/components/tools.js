"use client";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";

const iconLists = [
  { name: "photoshop", color: "#0EA5E9", rate: 9 },
  { name: "illustrator", color: "#F97316", rate: 9 },
  { name: "after effect", color: "#7C3AED", rate: 7.5 },
  { name: "figma", color: "#E11D48", rate: 9.5 },
  { name: "framer", color: "#84CC16", rate: 9.2 },
  { name: "blender", color: "#FBBF24", rate: 7.5 },
  { name: "affinity", color: "#14B8A6", rate: 8.8 },
];

const ToolsButton = (props) => {
  return (
    <div
      className="tools-button relative flex justify-center"
      style={{ width: 100, height: 106 }}
    >
      <span
        className="absolute border-2 rounded-2xl bottom-0"
        style={{
          width: 100,
          height: 90,
          backgroundColor: "#F3CC7E",
          borderColor: "#552A19",
        }}
      />
      <span
        className="absolute border-2 rounded-2xl bottom-2"
        style={{
          width: 100,
          height: 90,
          backgroundColor: "#FAEEC4",
          borderColor: "#552A19",
        }}
      />
      <span
        className="absolute border-2 rounded-xl"
        style={{
          width: 80,
          height: 80,
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), ${
            props.bg || "#0EA5E9"
          }`,
          borderColor: "#552A19",
          top: 10,
        }}
      />
      <motion.div
        className="absolute border-2 rounded-xl cursor-pointer"
        style={{
          width: 80,
          height: 80,
          backgroundColor: `${props.bg || "#0EA5E9"}`,
          borderColor: "#552A19",
          top: 0,
        }}
        whileTap={{ y: 5 }}
        onClick={props.onClick}
      >
        <Image
          src={`/image/about/tools/icon/${props.src || "photoshop"}.svg`}
          width={80}
          height={80}
          alt={`about-tools-icon-${props.alt}`}
          className="absolute"
        />
        <span
          className="absolute border-2 bg-white rounded-full"
          style={{
            borderColor: "#552A19",
            width: 20,
            height: 6,
            top: 4,
            right: 13,
          }}
        />
        <span
          className="absolute border-2 bg-white rounded-full"
          style={{
            borderColor: "#552A19",
            width: 7,
            height: 6,
            top: 4,
            right: 4,
          }}
        />
      </motion.div>
      {props.show ? (
        <motion.div
          className="absolute w-max h-max"
          layoutId="tools-arrow"
          style={{ bottom: -40 }}
        >
          <Image
            src="/image/about/tools/arrow.svg"
            width={28}
            height={28}
            alt="about-tools-icon-arrow"
          />
        </motion.div>
      ) : (
        <></>
      )}
    </div>
  );
};

function Tools() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.4 });
  const [selected, setSelected] = useState(0);

  const handleClick = (index) => {
    setSelected(index);
  };

  return (
    <section
      className="about-tools-container w-full h-screen pt-28 flex items-center"
      ref={ref}
    >
      <div
        className="about-tools-content w-full flex flex-col justify-between items-center snap-center"
        style={{ height: 600, minHeight: 500 }}
      >
        <div
          className="about-tools-title relative"
          style={{ width: 272, height: 208, color: "#58261D" }}
        >
          <AnimatePresence>
            {isInView && (
              <>
                <motion.div
                  key="about-tools-title-1"
                  className="text-7xl font-bold pt-4 flex justify-center absolute top-0 left-0"
                  style={{
                    width: 240,
                    height: 138,
                    backgroundImage: "url('/image/about/tools/bubble_1.svg')",
                    originX: 0,
                    originY: 1,
                  }}
                  initial={{ rotate: -20, x: -200 }}
                  animate={{ rotate: 0, x: 0 }}
                  exit={{ rotate: -20, x: -200 }}
                  duration={{ duration: 0.8, delay: 0.2 }}
                >
                  Tools
                </motion.div>
                <motion.div
                  key="about-tools-title-2"
                  className="font-sans text-xl font-semibold pt-4 flex justify-center absolute right-0 bottom-0 "
                  style={{
                    width: 120,
                    height: 82,
                    backgroundImage: "url('/image/about/tools/bubble_2.svg')",
                    originX: 1,
                    originY: 1,
                  }}
                  initial={{ rotate: 20, x: 100 }}
                  animate={{ rotate: 0, x: 0 }}
                  exit={{ rotate: 20, x: 100 }}
                  duration={{ duration: 0.8, delay: 0.2 }}
                >
                  常用工具
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
        <div className="about-tools-progress-container flex flex-col gap-3 items-center">
          <AnimatePresence>
            {isInView && (
              <>
                <motion.div
                  key="about-tools-progress"
                  className="about-tools-progress rounded-full flex gap-1 p-2"
                  style={{
                    width: 500,
                    height: 40,
                    border: "2px solid #58261D",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    animate={{
                      width: (iconLists[selected].rate / 10) * 484,
                      backgroundColor: iconLists[selected].color,
                    }}
                    transition={{ duration: iconLists[selected].rate / 20 }}
                  />
                </motion.div>
                <motion.div
                  key="about-tools-progress-text"
                  className="about-tools-progress-text flex gap-3 text-lg text-ownBlack font-mono capitalize select-none"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <p>{iconLists[selected].name} /</p>
                  <motion.div>{iconLists[selected].rate * 10}%</motion.div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
        <div className="about-tools-button-group flex gap-8">
          <AnimatePresence>
            {isInView && (
              <>
                {iconLists.map((item, i) => (
                  <motion.div
                    className={`w-max h-max about-tools-button-${i}`}
                    key={i}
                    initial={{ scale: 1.2, y: -20, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 1.2, y: -20, opacity: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 * i }}
                  >
                    <ToolsButton
                      src={item.name}
                      bg={item.color}
                      alt={item.name}
                      onClick={() => handleClick(i)}
                      show={selected === i ? true : false}
                    />
                  </motion.div>
                ))}
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Tools;
