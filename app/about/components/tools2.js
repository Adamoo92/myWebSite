"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
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

const titleColor = ["#0E0E0F", "#FFFFFF", "#06F7F2", "#FF014C"];

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

function Tools2(props) {
  const [selected, setSelected] = useState(0);
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    setProgress(Math.round(iconLists[selected].rate * 3));
  }, [selected]);

  return (
    <section
      ref={ref}
      className="about-tools-container flex flex-col gap-16 justify-center items-center bg-white rounded-3xl"
      style={{ marginTop: 120, maxHeight: 1200, minHeight: 900 }}
    >
      <div className="tools-2-title flex flex-col items-center gap-2">
        <div className="relative">
          {titleColor.map((item, i) => (
            <motion.h1
              key={i}
              className="text-9xl font-bold w-max h-max"
              style={{
                WebkitTextStrokeWidth: 2,
                WebkitTextStrokeColor: "#0E0E0F",
                color: `${item}`,
                position: i === 0 ? "relative" : "absolute",
                left: i === 0 ? null : 0,
                top: i === 0 ? null : 0,
                zIndex: 4 - i,
              }}
              initial={{ x: 40 }}
              animate={{ x: isInView ? 0 : 40 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
            >
              Tools
            </motion.h1>
          ))}
        </div>
        <h4 className="font-sans text-2xl text-ownBlack">常用工具</h4>
      </div>
      <div className="tools-2-progress w-max h-max flex flex-col gap-3 items-center">
        <div
          className="border-2 border-[#552A19] rounded-lg flex gap-1 p-1 relative"
          style={{ width: 488, height: 40 }}
        >
          <h2
            className="absolute w-14 text-right font-mono text-xl text-ownBlack"
            style={{ right: -66 }}
          >
            {iconLists[selected].rate * 10}%
          </h2>
          {Array(progress)
            .fill(0)
            .map((item, i) => (
              <span
                key={i}
                className="w-3 h-7 rounded-sm"
                style={{ backgroundColor: `${iconLists[selected].color}` }}
              />
            ))}
        </div>
        <h3 className="font-mono text-lg text-ownBlack capitalize">
          {iconLists[selected].name}
        </h3>
      </div>
      <div className="flex gap-8">
        {iconLists.map((item, i) => (
          <div className={`w-max h-max ${i}`} key={i}>
            <ToolsButton
              src={item.name}
              bg={item.color}
              alt={item.name}
              onClick={() => setSelected(i)}
              show={selected === i ? true : false}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tools2;
