"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function Button(props) {
  const [hover, setHover] = useState(false);

  return (
    <div className="w-max h-max bg-ownBlack rounded-full font-medium mr-10">
      <Link href="" className="block px-6 py-3">
        Contack Me
      </Link>
    </div>
  );
}

export default Button;
