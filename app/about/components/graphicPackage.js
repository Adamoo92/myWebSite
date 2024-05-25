"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

const grid = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
];

const initialGridTemplateColumns = ["1fr", "1fr", "1fr", "1fr"];
const initialGridTemplateRows = ["1fr", "1fr", "1fr"];

function GraphicPackage(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [selected, setSelected] = useState(null);
  const [gridTemplateColumns, setGridTemplateColumns] = useState(
    initialGridTemplateColumns
  );
  const [gridTemplateRows, setGridTemplateRows] = useState(
    initialGridTemplateRows
  );

  const handleClick = (rowIndex, colIndex, item) => {
    if (item !== selected) {
      const newRows = gridTemplateRows.map((_item, i) => {
        if (i === rowIndex) {
          return "3fr";
        } else {
          return "1fr";
        }
      });
      const newColumns = gridTemplateColumns.map((_item, i) => {
        if (i === colIndex) {
          return "3fr";
        } else {
          return "1fr";
        }
      });
      setGridTemplateRows(newRows);
      setGridTemplateColumns(newColumns);
      setSelected(item);
    } else {
      setSelected(null);
      setGridTemplateColumns(initialGridTemplateColumns);
      setGridTemplateRows(initialGridTemplateRows);
    }
  };

  return (
    <section
      className="graphic-package w-full h-max text-ownBlack flex flex-col gap-16 mt-56"
      ref={ref}
    >
      <div className="graphic-package-title text-ownBlack flex flex-col gap-3 mt-8 items-center select-none">
        <h1 className="text-8xl font-bold">Package</h1>
        <div className="flex gap-2">
          <p className="text-xl">👉</p>
          <p className="text-xl">平面设计-包装</p>
          <p className="text-xl">👈</p>
        </div>
      </div>
      <motion.div
        className="graphic-package-container w-full p-5 grid gap-5"
        style={{
          height: 965,
        }}
        animate={{
          gridTemplateColumns: gridTemplateColumns
            .toString()
            .replaceAll(",", " "),
          gridTemplateRows: gridTemplateRows.toString().replaceAll(",", " "),
        }}
      >
        {grid.map((row, rowIndex) =>
          row.map((item, colIndex) => (
            <motion.div
              key={item}
              className={`graphic-package-${item} overflow-hidden rounded-3xl cursor-pointer relative`}
              onClick={() => handleClick(rowIndex, colIndex, item)}
              initial={{ opacity: 0, scale: 1.6 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 1.6 }}
              transition={{
                duration: 0.4,
                delay: item * 0.1 + 0.4,
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: item === selected ? 1 : 1.1 }}
                style={{
                  background: `url('/image/about/graphicPackage/Packing_${item}.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              ></motion.div>
              <AnimatePresence>
                {item === selected ? (
                  <motion.div
                    className="w-max h-max absolute top-3 right-3"
                    key={item}
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.4, opacity: 0 }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <Image
                      src="/image/about/graphicPackage/closeIcon.svg"
                      width={32}
                      height={32}
                      alt="graphic-package-close"
                    />
                  </motion.div>
                ) : selected === null ? (
                  <></>
                ) : (
                  <motion.div
                    className="w-full h-full absolute top-0 left-0"
                    style={{ background: "#0E0E0F" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ))
        )}
      </motion.div>
    </section>
  );
}

export default GraphicPackage;
