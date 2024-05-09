"use client";
import React, { useEffect, useState } from "react";
import { Anton, Noto_Sans_SC } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: "normal",
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  display: "swap",
  weight: "500",
  style: "normal",
});

const Time = (props) => {
  return (
    <div className={`${anton.className} flex gap-1 items-center`}>
      <div className="w-6 h-8 bg-ownBlack text-white text-base flex justify-center items-center">
        {props.children}
      </div>
      {props.dot ? (
        <div className="flex flex-col gap-1">
          {[0, 1].map((i) => (
            <div key={i} className="w-[3px] h-[3px] bg-ownBlack rounded-full" />
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

function Countdown(props) {
  const [time, setTime] = useState({ d: null, h: null, m: null, s: null });
  const countdowntime = new Date("2024-05-10T23:59:59");

  useEffect(() => {
    const time = setInterval(() => {
      const nowTime = new Date();

      const tt = (countdowntime - nowTime) / 1000;

      const d = parseInt(tt / 60 / 60 / 24);
      const h = parseInt((tt / 60 / 60) % 24);
      const m = parseInt((tt / 60) % 60);
      const s = parseInt(tt % 60);

      setTime({
        d: d > 9 ? d : "0" + d,
        h: h > 9 ? h : "0" + h,
        m: m > 9 ? m : "0" + m,
        s: s > 9 ? s : "0" + s,
      });
    }, 1000);
    return () => clearInterval(time);
  }, []);
  return (
    <div className="w-full max-w-7xl flex gap-1 justify-center items-center py-1">
      <span className={`${notoSansSC.className} text-sm text-ownBlack`}>
        页面显示倒计时:
      </span>
      <Time dot>{time.d}</Time>
      <Time dot>{time.h}</Time>
      <Time dot>{time.m}</Time>
      <Time>{time.s}</Time>
    </div>
  );
}

export default Countdown;
