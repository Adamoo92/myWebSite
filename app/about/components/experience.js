"use client";
import { useRef } from "react";
import Image from "next/image";
import { useInView, motion, AnimatePresence } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import Line1 from "../../../public/image/about/experience/line/line_1.svg";
import Line2 from "../../../public/image/about/experience/line/line_2.svg";
import Line3 from "../../../public/image/about/experience/line/line_3.svg";
import Line4 from "../../../public/image/about/experience/line/line_4.svg";
import RudderSvg from "../../../public/image/about/experience/rudder.svg";

// title
const ExperTitle = () => {
  const titleRef = useRef();
  const titleIsInView = useInView(titleRef);

  return (
    <div
      className="experience-title w-full flex justify-center mb-16"
      style={{ height: 256 }}
      ref={titleRef}
    >
      <div
        className="w-max flex flex-col items-start gap-2 relative"
        style={{ color: "#27043E", perspective: 800 }}
      >
        <AnimatePresence>
          {titleIsInView && (
            <>
              <motion.h1
                className="font-bold text-8xl uppercase"
                initial={{ rotateY: 70, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: 70, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                key="title-work"
              >
                Work
              </motion.h1>
              <motion.h1
                className="font-bold text-8xl uppercase"
                initial={{ rotateY: -70, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -70, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                key="title-experience"
              >
                Experience
              </motion.h1>
              <motion.div
                className="w-max h-max"
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -40, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                key="title-button-rightArrow"
              >
                <Image
                  src="/image/about/experience/rightBottomArrow.svg"
                  width={72}
                  height={48}
                  alt="experience-rightBottom-arrow"
                />
              </motion.div>
              <motion.div
                className="font-sans text-2xl font-semibold px-6 py-4 border-2 rounded-full absolute left-0 top-16"
                style={{
                  borderColor: "#27043E",
                  backgroundColor: "#F3A5FB",
                }}
                initial={{ rotate: 0, y: -64, opacity: 0 }}
                animate={{ rotate: -10, y: 0, opacity: 1 }}
                exit={{ rotate: 0, y: -64, opacity: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.8,
                  opacity: { delay: 0.8, duration: 0.1 },
                }}
                key="title-work-experience"
              >
                工作经历
              </motion.div>
              <motion.div
                className="text-2xl font-bold px-6 py-4 border-2 rounded-full absolute right-0 top-4"
                style={{
                  borderColor: "#27043E",
                  backgroundColor: "#D1EDA0",
                }}
                initial={{ rotate: 0, y: -64, opacity: 0 }}
                animate={{ rotate: 8, y: 0, opacity: 1 }}
                exit={{ rotate: 0, y: -64, opacity: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.8,
                  opacity: { delay: 0.8, duration: 0.1 },
                }}
                key="title-time"
              >
                2013-2024
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// windwill
const Windmill = () => {
  return (
    <div className="relative" style={{ width: 440, height: 360 }}>
      <Image
        src="./image/about/experience/windmill/room.svg"
        width={250}
        height={250}
        alt="windmill-room"
        className="absolute"
        style={{ left: 32, bottom: 0 }}
      />
      <motion.div
        className="absolute w-max h-max"
        style={{ left: 8, top: 35 }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <Image
          src="./image/about/experience/windmill/blade.svg"
          width={246}
          height={246}
          alt="windmill-blade"
        />
      </motion.div>
      <motion.div
        className="absolute w-max h-max"
        style={{ right: 130, top: 90 }}
        animate={{ x: [0, -30, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        <Image
          src="./image/about/experience/cloud_2.svg"
          width={33}
          height={18}
          alt="windmill-cloud-2"
        />
      </motion.div>
      <motion.div
        className="absolute w-max h-max"
        style={{ right: 64, top: 48 }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      >
        <Image
          src="./image/about/experience/windmill/hotAirBalloon.svg"
          width={56}
          height={90}
          alt="windmill-hot air balloon"
        />
      </motion.div>
      <motion.div
        className="absolute w-max h-max"
        style={{ right: 30, top: 60 }}
        animate={{ x: [0, 15, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <Image
          src="./image/about/experience/cloud_1.svg"
          width={50}
          height={26}
          alt="windmill-cloud-1"
        />
      </motion.div>
    </div>
  );
};

// Run Circle
const RunCircle = () => {
  return (
    <div
      className="run-circle relative flex justify-center items-center overflow-hidden"
      style={{ width: 120, height: 120 }}
    >
      <motion.div
        className="rounded-full"
        style={{ width: 60, height: 60, backgroundColor: "#93D7EE" }}
      />
      <motion.div
        className="absolute w-max h-max"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <Image
          src="./image/about/experience/half dot circle.svg"
          width={112}
          height={112}
          alt="half dot circle"
        />
      </motion.div>
    </div>
  );
};

// Car Play
const CarPlay = () => {
  return (
    <div
      className="relative flex justify-center"
      style={{ width: 520, height: 360 }}
    >
      <div
        className="car-building absolute flex justify-center border-b-2 border-b-[#27043E] overflow-hidden"
        style={{ left: 0, top: 50, width: 520, height: 250 }}
      >
        <div
          className="car-building-mask relative overflow-hidden"
          style={{ width: 436, height: 250 }}
        >
          <motion.div
            className="w-max h-max flex"
            animate={{ x: "-50%" }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          >
            <Image
              src="./image/about/experience/car/building.svg"
              width={615}
              height={248}
              alt="car-building"
            />
            <Image
              src="./image/about/experience/car/building.svg"
              width={615}
              height={248}
              alt="car-building"
            />
          </motion.div>
        </div>
        <Image
          src="./image/about/experience/car/tree_1.svg"
          width={120}
          height={250}
          alt="car-tree-1"
          className="absolute left-0"
        />
        <Image
          src="./image/about/experience/car/tree_2.svg"
          width={90}
          height={250}
          alt="car-tree-2"
          className="absolute right-0"
        />
      </div>
      <div
        className="car-all absolute bottom-0 overflow-hidden"
        style={{ width: 150, height: 84 }}
      >
        <motion.div
          className="w-max h-max absolute"
          style={{ left: 46, top: 64 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <Image
            src="./image/about/experience/car/wheel.svg"
            width={20}
            height={20}
            alt="car-wheel"
          />
        </motion.div>
        <motion.div
          className="w-max h-max absolute"
          style={{ left: 111, top: 64 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <Image
            src="./image/about/experience/car/wheel.svg"
            width={20}
            height={20}
            alt="car-wheel"
          />
        </motion.div>
        <motion.div
          className="car-body w-max h-max absolute"
          style={{
            width: 110,
            height: 50,
            left: 30,
            top: 27,
            originX: 0.532,
            originY: 1,
          }}
          initial={{ rotate: -2 }}
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            className="car-exhaust w-8 h-8 absolute"
            style={{ left: -25, top: 20 }}
          >
            <motion.div
              className="absolute border-2 border-[#27043E] rounded-full"
              style={{ width: 6, height: 6 }}
              initial={{ right: 0, top: 19, opacity: 1 }}
              animate={{ left: 0, top: 0, width: 12, height: 12, opacity: 0 }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            />
            <motion.div
              className="absolute border-2 border-[#27043E] rounded-full"
              style={{ width: 6, height: 6 }}
              initial={{ right: 0, top: 22, opacity: 1 }}
              animate={{ left: 0, top: 14, width: 12, height: 12, opacity: 0 }}
              transition={{ duration: 1, delay: 0.5, repeat: Infinity }}
            />
          </div>
          <motion.div
            className="w-max h-max absolute"
            style={{ left: 47, top: -27, originX: 0, originY: 1 }}
            initial={{ x: -3, rotate: -2 }}
            animate={{ x: [-3, 2, -3], rotate: [-8, 0, -8] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="./image/about/experience/car/bag_2.svg"
              width={20}
              height={31}
              alt="car-bag-2"
            />
          </motion.div>
          <motion.div
            className="w-max h-max absolute"
            style={{ left: 25, top: -16 }}
            animate={{ x: [-2, 3, -2] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="./image/about/experience/car/bag_1.svg"
              width={31}
              height={20}
              alt="car-bag-1"
            />
          </motion.div>
          <Image
            src="./image/about/experience/car/body.svg"
            width={110}
            height={50}
            alt="car-body"
            className="absolute left-0 top-0"
          />
        </motion.div>
      </div>
    </div>
  );
};

// hand code
const HandCode = () => {
  return (
    <div
      className="experience-hand-and-code flex justify-center relative overflow-hidden"
      style={{ width: 164, height: 164 }}
    >
      <Image
        src="./image/about/experience/handAndCode/code.svg"
        width={90}
        height={60}
        alt="experience-hand-and-code-code"
        className="absolute top-0"
      />
      <motion.div
        className="absolute w-max h-max"
        style={{ top: 26 }}
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="./image/about/experience/handAndCode/hand.svg"
          width={46}
          height={60}
          alt="experience-hand-and-code-code"
        />
      </motion.div>
      <div className="absolute w-20 h-20 bottom-0 flex flex-col justify-center items-center gap-0.5">
        <motion.div
          className="w-max h-max"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1.6 }}
        >
          <Image
            src="./image/about/experience/handAndCode/triangle-blue.svg"
            width={32}
            height={22}
            alt="triangle-blue"
          />
        </motion.div>
        <motion.div
          className="w-max h-max"
          animate={{ opacity: [1, 0, 1] }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            repeat: Infinity,
            repeatDelay: 1.6,
          }}
        >
          <Image
            src="./image/about/experience/handAndCode/triangle-orange.svg"
            width={32}
            height={22}
            alt="triangle-orange"
          />
        </motion.div>
        <motion.div
          className="w-max h-max"
          animate={{ opacity: [1, 0, 1] }}
          transition={{
            duration: 0.8,
            delay: 1.6,
            repeat: Infinity,
            repeatDelay: 1.6,
          }}
        >
          <Image
            src="./image/about/experience/handAndCode/triangle-blue.svg"
            width={32}
            height={22}
            alt="triangle-blue"
          />
        </motion.div>
      </div>
    </div>
  );
};

// hard work
const HardWork = () => {
  return (
    <div
      className="hard-work flex justify-center relative overflow-hidden"
      style={{ width: 520, height: 360 }}
    >
      <motion.div
        className="work-mail w-max h-max absolute"
        style={{ left: 0, top: 130 }}
        animate={{ x: 190, opacity: [0, 1, 1, 1] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="./image/about/experience/work/mail.svg"
          width={66}
          height={26}
          alt="experience-work-mail"
        />
      </motion.div>
      <Image
        src="./image/about/experience/work/bg.svg"
        width={440}
        height={300}
        alt="experience-work-bg"
        className="absolute bottom-0"
      />
      <motion.div
        className="work-magnifier w-max h-max absolute"
        style={{ left: 120, top: 230, originX: 0.44, originY: 0.44 }}
        animate={{ rotate: [0, -20, 0], x: [0, -15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Image
          src="./image/about/experience/work/magnifier.svg"
          width={70}
          height={70}
          alt="experience-work-magnifier"
        />
      </motion.div>
      <Image
        src="./image/about/experience/work/arrow.svg"
        width={50}
        height={50}
        alt="experience-work-arrow"
        className="work-arrow absolute"
        style={{ left: 110, top: 300 }}
      />
      <motion.div
        className="work-checked w-max h-max absolute"
        style={{ left: 300, top: 237 }}
        animate={{ scale: [0, 1, 1, 0], rotate: [0, 360, 360, 0] }}
        transition={{
          duration: 2,
          type: "tween",
          times: [0, 0.25, 0.75, 1],
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      >
        <Image
          src="./image/about/experience/work/checked.svg"
          width={38}
          height={38}
          alt="experience-work-checked"
        />
      </motion.div>
      <div
        className="work-coffee absolute"
        style={{ width: 36, height: 90, left: 345, bottom: 0 }}
      >
        <div className="work-coffee-smoke">
          <motion.svg width="36" height="46" viewBox="0 0 36 46" fill="none">
            <motion.path
              d="M21.9623 43C21.9623 33.6492 11.3962 32.6103 11.3962 36.7663C11.3962 41.961 26.717 39.3552 26.717 30.0129C26.717 20.6706 4 14.9482 4 21.7012C4 28.4543 32 23.2596 32 13.3894C32 7.15583 21.9623 3 4 3"
              stroke="#47277C"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{
                pathLength: [0, 0.5, 1, 1],
                pathOffset: [0, 0, 0.5, 1],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 1,
              }}
            />
          </motion.svg>
        </div>
        <Image
          src="./image/about/experience/work/coffee-cup.svg"
          width={36}
          height={44}
          alt="work-coffee-cup"
        />
      </div>
      <div
        className="work-head absolute flex justify-center"
        style={{ width: 100, height: 130, left: 165, top: 103 }}
      >
        <motion.div
          className="absolute w-max h-max"
          style={{ top: 0 }}
          animate={{ x: [2, -2, 2] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="./image/about/experience/work/head-hair.svg"
            width={100}
            height={122}
            alt="work-head-hair"
          />
        </motion.div>
        <motion.div
          className="absolute w-max h-max"
          style={{ top: 79 }}
          animate={{ x: [1, -1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="./image/about/experience/work/head-ear.svg"
            width={98}
            height={18}
            alt="work-head-ear"
          />
        </motion.div>
        <Image
          src="./image/about/experience/work/head-face.svg"
          width={80}
          height={86}
          alt="work-head-face"
          className="absolute"
          style={{ top: 44 }}
        />
        <motion.div
          className="absolute w-max h-max"
          style={{ top: 37 }}
          animate={{ x: [-5, 5, -5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="./image/about/experience/work/head-face-move.svg"
            width={90}
            height={80}
            alt="work-head-face-move"
          />
        </motion.div>
      </div>
      <div
        className="work-message absolute  p-2 overflow-hidden"
        style={{ width: 108, height: 86, left: 310, top: 120 }}
      >
        <motion.ul
          className="message-container w-full"
          animate={{ y: [0, 0, -26, -26, -52, -52] }}
          transition={{
            duration: 4,
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.li
            className="message-1 border-2 border-[#47277C] bg-[#87C6FF] rounded-full"
            style={{ width: 76, height: 18 }}
            animate={{ opacity: [1, 1, 0, 0, 0, 0] }}
            transition={{
              duration: 4,
              times: [0, 0.2, 0.4, 0.6, 0.8, 1],
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.li
            className="message-2 border-2 border-[#47277C] bg-[#C6EE94] rounded-full"
            style={{ width: 76, height: 18, marginLeft: 16, marginTop: 8 }}
            animate={{ opacity: [1, 1, 1, 1, 0, 0] }}
            transition={{
              duration: 4,
              times: [0, 0.2, 0.4, 0.6, 0.8, 1],
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <li
            className="message-3 border-2 border-[#47277C] bg-[#87C6FF] rounded-full"
            style={{ width: 76, height: 18, marginTop: 8 }}
          />
          <motion.li
            className="message-4 border-2 border-[#47277C] bg-[#C6EE94] rounded-full"
            style={{ width: 76, height: 18, marginLeft: 16, marginTop: 8 }}
            animate={{ opacity: [0, 0, 1, 1, 1, 1] }}
            transition={{
              duration: 4,
              times: [0, 0.2, 0.4, 0.6, 0.8, 1],
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.li
            className="message-5 border-2 border-[#47277C] bg-[#87C6FF] rounded-full"
            style={{ width: 76, height: 18, marginTop: 8 }}
            animate={{ opacity: [0, 0, 0, 0, 1, 1] }}
            transition={{
              duration: 4,
              times: [0, 0.2, 0.4, 0.6, 0.8, 1],
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.ul>
      </div>
    </div>
  );
};

const WorkOne = () => {
  return (
    <div className="w-full relative h-[480px] flex items-end">
      <div className="w-full h-max flex items-center gap-8">
        <Player
          autoplay
          loop
          src="https://lottie.host/53d6814b-59b4-4b85-a6dc-695fd9125c64/veQeIUCEoT.json"
          style={{ width: 440, height: 360 }}
          className="flex-none h-max"
        />
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex flex-col gap-1 text-[#F97316]">
            <h1 className="font-sans text-3xl font-bold">麦凯莱</h1>
            <span className="text-sm font-medium">2019.11 - Now</span>
          </div>
          <div className="w-full flex flex-col gap-0.5 text-ownBlack font-sans">
            <h3 className="font-bold text-lg">UI/UX</h3>
            <p className="text-base font-normal">
              MegaLab商城 - App页面设计、小程序页面设计、后台页面设计。
              <br />
              吉时到 - Apps页面设计、页面交互设计、动效设计。
            </p>
          </div>
          <div className="w-full flex flex-col gap-0.5 text-ownBlack font-sans">
            <h3 className="font-bold text-lg">电商</h3>
            <p className="text-base font-normal text-justify">
              ultraDEX / smilelab / Dentyl / Braun -
              首页设计、活动页面设计、详情页设计。
            </p>
          </div>
        </div>
      </div>
      <Image
        src={Line1}
        className="absolute top-0 left-0 select-none pointer-events-none"
        alt="about-experience-line1"
      />
    </div>
  );
};

const WorkTwo = () => {
  return (
    <div className="w-full relative h-[400px] flex items-end">
      <div className="w-full h-max flex items-center gap-8">
        <div className="flex-1 flex flex-col items-end gap-3">
          <div className="flex flex-col gap-1 items-end text-[#65A30D]">
            <h1 className="font-sans text-3xl font-bold">艾舜优</h1>
            <span className="text-sm font-medium">2018.03 - 2019.10</span>
          </div>
          <div className="w-full flex flex-col gap-0.5 text-ownBlack font-sans">
            <p className="text-base font-normal text-justify">
              工作内容：品牌LOGO、VIS视觉应用、产品包装设计、宣传海报设计
              主要品牌：森林魔方、爱呼吸、艾舜优...
            </p>
          </div>
        </div>
        <Windmill />
      </div>
      <Image
        src={Line2}
        className="absolute -top-0.5 left-0 select-none pointer-events-none"
        alt="about-experience-line2"
      />
    </div>
  );
};

const WorkThree = () => {
  return (
    <div className="w-full relative h-[400px] flex items-end">
      <div className="w-full h-max flex items-center gap-8 ml-12">
        <CarPlay />
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex flex-col gap-1 text-[#6366F1]">
            <h1 className="font-sans text-3xl font-bold">旗丰</h1>
            <span className="text-sm font-medium">2016.06 - 2018.03</span>
          </div>
          <div className="w-full flex flex-col gap-0.5 text-ownBlack font-sans">
            <p className="text-base font-normal text-justify">
              工作内容：企业VIS视觉系统更新、产品包装设计、设备外观设计、产品宣传广告设计、企业网站改版、微信商城设计、宣传PPT制作、公众号定期更新、H5设计。
            </p>
          </div>
        </div>
      </div>
      <Image
        src={Line3}
        className="absolute -top-5 left-0 select-none pointer-events-none"
        alt="about-experience-line3"
      />
    </div>
  );
};

const WorkFour = () => {
  return (
    <div className="w-full relative h-[520px] flex items-end pb-2">
      <div className="w-full h-max flex items-center gap-8 mb-28">
        <div className="flex-1 flex flex-col items-end gap-3">
          <div className="flex flex-col gap-1 items-end text-[#EC4899]">
            <h1 className="font-sans text-3xl font-bold">共赢策划</h1>
            <span className="text-sm font-medium">2013.05 - 2016.05</span>
          </div>
          <div className="w-full flex flex-col gap-0.5 text-ownBlack font-sans">
            <p className="text-base font-normal text-justify">
              工作内容：品牌LOGO、VI视觉系统、企业宣传画册、展厅设计、产品包装设计、营销活动主KV设计、会议物料设计制作。
              服务品牌：龙升有机食品、冷链物流、派慕蛋糕、缤纷五洲地产、央视诚信档案节目、地龙芯宝（保健）、沃佳饮料、沂蒙小山村（白酒）、中国邮政...
            </p>
          </div>
        </div>
        <HardWork />
      </div>
      <Image
        src={Line4}
        className="absolute -top-0.5 left-0 select-none pointer-events-none"
        alt="about-experience-line4"
      />
    </div>
  );
};

const Rudder = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <motion.div className="w-max p-2.5 border-4 border-[#27043E] rounded-full">
        <Image src={RudderSvg} alt="rubber" />
      </motion.div>
      <div className="w-1/2 h-32 border-r-4 border-[#27043E] -translate-x-1/2"></div>
    </div>
  );
};

// Export Experience
function Experience() {
  return (
    <section className="about-experience w-full mt-28 flex flex-col items-center">
      <ExperTitle />
      <HandCode />
      <WorkOne />
      <WorkTwo />
      <WorkThree />
      <WorkFour />
      <Rudder />
    </section>
  );
}

export default Experience;
