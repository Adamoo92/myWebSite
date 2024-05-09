"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const list = [
  "about",
  "tools",
  "experience",
  "graphic",
  "UI/UX",
  "web design",
  "animation",
];

function Box({ style, className, key, setSize, children, onClick }) {
  const boxRef = React.useRef();

  React.useLayoutEffect(() => {
    if (!boxRef.current) return;
    const { width, height } = boxRef.current.getBoundingClientRect();
    setSize({ w: width, h: height });
  }, []);

  return (
    <li
      ref={boxRef}
      key={key}
      className={className}
      style={style}
      onClick={onClick}
    >
      {children}
    </li>
  );
}

function TestMenu(props) {
  const [selected, setSelected] = useState(0);
  const [size, setSize] = useState({ w: null, h: null });

  const containerRef = React.useRef();
  const [conSize, setConSize] = useState({ w: null, h: null });

  React.useLayoutEffect(() => {
    if (!containerRef.current) return;
    const { width, height } = containerRef.current.getBoundingClientRect();
    setConSize({ w: width, h: height });
  }, [selected]);

  return (
    <div
      className="h-max bg-ownBlack flex justify-center"
      style={{ width: 640 }}
    >
      <div style={{ width: size.w, height: size.h }}>
        <div style={{ width: conSize.w, height: conSize.h }}>
          <motion.div
            className="flex w-max h-max"
            animate={{ x: size.w - conSize.w }}
          >
            <ul className="flex" ref={containerRef}>
              {list.map((item, i) => (
                <>
                  {i <= selected ? (
                    i === selected ? (
                      <Box
                        style={{ color: i === selected ? "#FF4655" : "" }}
                        className="text-white text-sm font-medium px-4 py-2 cursor-pointer"
                        key={i}
                        setSize={setSize}
                        onClick={() => setSelected(i)}
                      >
                        {item}
                      </Box>
                    ) : (
                      <li
                        key={i}
                        className="text-white text-sm font-medium px-4 py-2 cursor-pointer"
                        style={{ color: i === selected ? "#FF4655" : "" }}
                        onClick={() => setSelected(i)}
                      >
                        {item}
                      </li>
                    )
                  ) : (
                    <></>
                  )}
                </>
              ))}
            </ul>
            <ul className="flex">
              {list.map((item, i) => (
                <>
                  {i > selected ? (
                    <li
                      key={i}
                      className="text-white text-sm font-medium px-4 py-2 cursor-pointer"
                      style={{ color: i === selected ? "#FF4655" : "" }}
                      onClick={() => setSelected(i)}
                    >
                      {item}
                    </li>
                  ) : (
                    <></>
                  )}
                </>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default TestMenu;
