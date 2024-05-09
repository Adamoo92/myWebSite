"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CloseButton from "./closeButton";
import "./components.css";

function Dialog({ children }) {
  return (
    <div className="fixed w-screen h-screen left-0 top-0 bg-[#0E0E0FF2] backdrop-blur-[2px] z-[999] flex justify-center items-center">
      <motion.div className="w-full max-w-7xl h-3/5 bg-ownBlack relative border border-ownRed-900">
        <CloseButton />
        <div
          className="dialog-container h-full py-0 pl-8 pr-14 overflow-y-scroll"
          style={{ width: "calc(100% + 24px)" }}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}

export default Dialog;
