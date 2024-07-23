"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { cx } from "@/app/utils";

export default function Book(props) {
  const { src, style, onClick, Num, title1, title2, time, className } = props;
  const [hover, setHover] = useState(false);

  return (
    <div
      className={cx(
        "noteBook-cover h-48 p-4 rounded-xl bg-[#FAE7E2] flex flex-col justify-between cursor-pointer",
        className
      )}
      style={{ ...style }}
      onClick={onClick}
    >
      <div className="bg-ownBlack text-white text-xs font-semibold py-0.5 px-2 w-max rounded-md">
        {Num || "20"}
      </div>
      <div className="flex flex-col gap-2 font-semibold">
        {src ? (
          <Image
            src={src}
            width={32}
            height={32}
            alt={`${title1}` + `${title2}` || "icon"}
          />
        ) : (
          <div className="w-8 h-8 bg-ownBlack/10" />
        )}
        <h2 className="text-base capitalize">{title1 || "title1"}</h2>
        <h2 className="text-base capitalize -mt-2">{title2 || "title2"}</h2>
        <span className="text-xs opacity-40">{time || "last time"}</span>
      </div>
    </div>
  );
}
