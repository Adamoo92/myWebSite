"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function Button(props) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={props.href || ""}
      className="absolute text-ownBlack font-medium w-max h-max px-6 py-3 bg-white border-2 border-ownBlack rounded-full overflow-hidden"
      style={{
        ...props.style,
        paddingLeft: props.px,
        paddingRight: props.px,
        paddingTop: props.py,
        paddingBottom: props.py,
      }}
      onPointerMove={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <motion.span
        className="absolute h-full bg-ownRed-900 top-0 rounded-full"
        style={{ left: "-200%", width: "200%" }}
        animate={{ left: hover ? "-50%" : "-200%" }}
      />
      <span className="relative">{props.children}</span>
    </Link>
  );
}

export default Button;
