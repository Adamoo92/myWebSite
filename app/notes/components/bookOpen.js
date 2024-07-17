"use client";
import { motion } from "framer-motion";

export default function BookOpen(props) {
  const { item, onClick, initial, animate, exit, transition } = props;

  return (
    <motion.div
      className="w-full h-full pb-8 flex gap-2 relative"
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
    >
      <div
        className="w-72 h-full rounded-r-2xl py-8 pr-2 overflow-hidden"
        style={{ backgroundColor: item ? item.color_950 : "#155e75" }}
      >
        <div className="bg-white w-full h-full rounded-r-lg" style={style}>
          left
        </div>
      </div>
      <div
        className="flex-1 rounded-2xl p-8 pl-2"
        style={{ backgroundColor: item ? item.color_950 : "#155e75" }}
      >
        <div className="bg-white w-full h-full rounded-lg" style={style}>
          right
        </div>
      </div>
      <div
        className="px-5 py-1.5 bg-ownBlack w-max h-max text-white absolute right-8 top-[-36px] select-none cursor-pointer rounded-t text-base"
        onClick={onClick}
      >
        Close
      </div>
    </motion.div>
  );
}

const style = {
  boxShadow: "0px 4px 0px 4px rgba(8, 51, 68, 0.50)",
};
