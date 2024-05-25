"use client";
import { useRef, useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const list = [
  "about",
  "tools",
  "experience",
  "graphic",
  "UI/UX",
  "web design",
  "animation",
];

function SplitLine() {
  return (
    <div className="w-full h-[13px] relative flex justify-center items-end bg-ownRed-100 border-t-2 border-t-ownBlack">
      <Image
        src="image/about/menu/splitLineShapeBottom.svg"
        width={64}
        height={24}
        alt="about-menu-splitLine"
        className="absolute"
      />
    </div>
  );
}

function Item({ style, className, key, setSize, children, onClick }) {
  const boxRef = useRef();

  useLayoutEffect(() => {
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

function Menu(props) {
  const containerRef = useRef();
  const [selected, setSelected] = useState(0);
  const [size, setSize] = useState({ w: null, h: null });
  const [conSize, setConSize] = useState({ w: null, h: null });

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const { width, height } = containerRef.current.getBoundingClientRect();
    setConSize({ w: width, h: height });
  }, [selected]);

  return (
    <div
      className="w-full h-max bg-ownRed-100 text-ownBlack text-sm font-medium capitalize flex justify-center"
      style={{ maxWidth: 1280 }}
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
                      <Item
                        style={{ color: i === selected ? "#FF4655" : "" }}
                        className="px-4 py-2 cursor-pointer"
                        key={i}
                        setSize={setSize}
                        onClick={() => setSelected(i)}
                      >
                        {item}
                      </Item>
                    ) : (
                      <li
                        key={i}
                        className="px-4 py-2 cursor-pointer"
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
                      className="px-4 py-2 cursor-pointer"
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

function BottomNavigation(props) {
  return (
    <section className="bottom-navigation absolute bottom-0 text-ownBlack w-full">
      <div className="mx-auto" style={{ maxWidth: 1280 }}>
        <SplitLine />
        <Menu />
      </div>
    </section>
  );
}

export default BottomNavigation;
