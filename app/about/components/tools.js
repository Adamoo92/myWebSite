"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";
import { Player } from "@lottiefiles/react-lottie-player";
import { useRive } from "@rive-app/react-canvas";
import {
  iconLists,
  topBarRightBtn,
  otherSkillsList,
  topBarBtnColor,
} from "../data/tools-icon-data";

export default function Tools() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.4 });

  return (
    <section className="about-tools-container w-full flex flex-col items-center py-24">
      <ToolsTitle />
      <TopBar />
      <div
        className="w-full p-28 pb-40 bg-white flex flex-col gap-8 mt-4 rounded-lg"
        style={{ boxShadow: "0px 8px 16px 2px #E5CFD0" }}
        ref={ref}
      >
        <AnimatePresence>
          {isInView && (
            <>
              {iconLists.map((item, i) => (
                <motion.div
                  key={`btn-animation-${i}`}
                  className="w-full h-max"
                  initial={{ x: -60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -60, opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + 0.1 * i }}
                >
                  <ToolsButton key={i} item={item} />
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>
      </div>
      <OtherSkills />
    </section>
  );
}

// components
function ToolsTitle() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const { rive, RiveComponent } = useRive({
    src: "/image/about/tools/rive/tools.riv",
    stateMachines: "State Machine",
    autoplay: true,
  });

  useEffect(() => {
    if (isInView && rive) {
      const interval = setInterval(() => {
        rive.play();
      }, 400);
      return () => clearInterval(interval);
    }
  }, [isInView, rive]);

  return (
    <div className="flex gap-12 w-full h-max justify-center z-10" ref={ref}>
      <AnimatePresence>
        <div
          key="rive-aniamtion-container"
          className="w-80 h-80 bg-transparent relative cursor-pointer"
        >
          {isInView ? (
            <motion.div
              key="rive-animation"
              className="w-full h-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <RiveComponent
                onPointerEnter={() => rive && rive.pause()}
                onPointerLeave={() => rive && rive.play()}
              />
            </motion.div>
          ) : (
            <></>
          )}
        </div>
        <div key="lottie-animation-container" className="w-80 h-80">
          {isInView && (
            <motion.div
              key="lottie-animation"
              className="w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Player
                autoplay
                loop
                src="https://lottie.host/a9279429-9a45-42fe-8c1d-b2896fdfb7e6/GBiRtbmp7P.json"
                style={{ width: 320, height: 320 }}
                className="flex-none h-max"
              />
            </motion.div>
          )}
        </div>
      </AnimatePresence>
    </div>
  );
}

function TopBar() {
  return (
    <div className="flex w-full h-[84px] -mt-[84px] relative">
      <div className="w-24 h-full pb-6 z-10">
        <motion.div
          className="w-full h-full flex gap-2 justify-center items-center bg-white rounded-lg cursor-pointer"
          style={{ boxShadow: "0px 16px 24px 2px #E5CFD0" }}
          whileHover={{ scale: 1.15, rotate: -10 }}
        >
          {topBarBtnColor.map((backgroundColor, i) => (
            <span
              key={i}
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor }}
            />
          ))}
        </motion.div>
      </div>
      <div className="flex-1 h-full pt-4 relative">
        <div
          className="w-full h-full bg-white -ml-8 rounded-lg"
          style={{
            width: "calc(100% + 64px)",
            boxShadow: "0px 8px 16px 2px #E5CFD0",
          }}
        />
      </div>
      <div
        className="px-2 py-2.5 bg-white rounded-lg flex gap-2 mb-6 z-10"
        style={{ boxShadow: "0px 16px 24px 2px #E5CFD0" }}
      >
        {topBarRightBtn.map((item, i) => (
          <motion.div
            key={i}
            className="p-1.5 w-max h-max rounded-lg bg-transparent hover:bg-white cursor-pointer"
            style={{
              boxShadow: "0px 0px 0px 0px #E5CFD0",
            }}
            whileHover={{
              boxShadow: "0px 16px 24px 2px #E5CFD0",
              y: -12,
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const ToolsButton = (props) => {
  const { item } = props;
  return (
    <div className="flex gap-8 w-full">
      <div className="btn-container flex justify-center pt-2.5 relative">
        <div className="btn-bg w-[100px] h-[100px] rounded-2xl border-2 border-[#552A19] bg-[#F3CC7E] pb-2.5">
          <span className="inline-block box-content -ml-0.5 -mt-0.5 w-full h-full rounded-2xl border-2 border-[#552A19] bg-[#FAEEC4]" />
        </div>
        <div
          className="btn-toggle w-20 h-20 bg-[#5EC9FA] border-2 border-[#552A19] rounded-xl absolute top-2"
          style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), ${
              item ? item.background : "#5EC9FA"
            }`,
          }}
        >
          <motion.div
            className="w-full aspect-square bg-[#5EC9FA] box-content -mt-2.5 -ml-0.5 border-2 border-[#552A19] rounded-xl relative cursor-pointer"
            style={{
              backgroundColor: `${item ? item.background : "#5EC9FA"}`,
            }}
            whileTap={{ y: 4 }}
          >
            <Image
              src={item ? item.src : "/image/about/tools/icon/photoshop.svg"}
              width={item ? null : 80}
              height={item ? null : 80}
              alt={item ? item.name : "icon"}
            />
            <div className="absolute top-2 right-2 flex gap-1 h-1.5">
              <span className="w-5 h-full rounded-full border-2 border-[#552A19] bg-white"></span>
              <span className="w-1.5 h-full rounded-full border-2 border-[#552A19] bg-white"></span>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3 text-ownBlack font-mono capitalize text-lg font-normal">
        <h2 className="">{item ? item.name : "photoshop"}</h2>
        <div className="flex gap-4">
          <div className="flex-1 h-6 p-1 border-2 border-[#58261D] rounded-full">
            <motion.span
              className="block w-full h-full rounded-full bg-[#5EC9FA]"
              style={{
                backgroundColor: item ? item.background : "#5EC9FA",
                originX: 0,
                scaleX: 0,
              }}
              animate={{ scaleX: item && item.rate / 10 }}
            />
          </div>
          <span className="w-12">{item ? item.rate * 10 : 90}%</span>
        </div>
      </div>
    </div>
  );
};

function OtherSkills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className="w-full h-max -mt-16 flex justify-end" ref={ref}>
      <AnimatePresence>
        {isInView ? (
          <motion.div
            key="other-skills-animation"
            className="text-lg font-mono font-normal text-ownBlack w-[440px] bg-white px-10 py-8 flex flex-col gap-6 mr-28"
            style={{
              boxShadow: "0px 12px 24px 4px rgba(229, 207, 208, 0.90)",
              opacity: 0,
              scale: 1.4,
              y: 60,
            }}
            initial={{ opacity: 0, scale: 1.4, y: 60 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.4, y: 60 }}
            transition={{ duration: 0.4, delay: 0.4, type: "spring" }}
          >
            <h1 className="py-2 bg-[#FFEBEC] text-center">Other skills</h1>
            <>
              {otherSkillsList.map((item, i) => (
                <div key={i} className="flex">
                  <p className="flex-1">{item.name}</p>
                  <div className="flex gap-2">
                    <>
                      {Array(item.rate)
                        .fill(0)
                        .map((_black, j) => (
                          <span
                            key={j}
                            className="w-2 h-2 rounded-full bg-ownBlack"
                          />
                        ))}
                      {Array(10 - item.rate)
                        .fill(0)
                        .map((_white, k) => (
                          <span
                            key={k}
                            className="w-2 h-2 rounded-full bg-white border border-ownBlack"
                          />
                        ))}
                    </>
                  </div>
                </div>
              ))}
            </>
          </motion.div>
        ) : (
          <></>
        )}
      </AnimatePresence>
    </div>
  );
}
