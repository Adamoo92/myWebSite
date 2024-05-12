"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./button";

const list = ["home", "about", "project", "article"];

const HeadShape = ({ left, right }) => {
  return (
    <Image
      src={`./image/header/shape_${
        left ? "left" : right ? "right" : "right"
      }.svg`}
      width={100}
      height={80}
      alt={`header-shape-${left ? "left" : right ? "right" : "right"}`}
      priority={true}
    />
  );
};

function Header() {
  const pathname = usePathname();
  const [selected, setSelected] = useState(pathname);
  const [hover, setHover] = useState("");

  useEffect(() => {
    setSelected(pathname === "/" ? "home" : `${pathname.replace("/", "")}`);
  }, [pathname]);

  return (
    <header className="header w-full h-max flex flex-row gap-4 text-base font-light fixed top-0 z-[9999]">
      <div className="header-left basis-1/4">
        <Link
          href="/"
          className="w-max h-max absolute"
          style={{ left: 88, bottom: 0 }}
        >
          <Image
            src="/image/logo.svg"
            width={170}
            height={48}
            alt="armoo-logo"
          />
        </Link>
      </div>
      <nav className="basis-1/2 flex overflow-hidden">
        <HeadShape left />
        <ul className="flex grow justify-center bg-ownBlack">
          {list.map((item, i) => (
            <Link
              href={`/${item === "home" ? "" : item}`}
              key={i}
              className="flex justify-center items-center"
              onPointerMove={() => setHover(item)}
              onPointerLeave={() => setHover("")}
            >
              {item === hover ? (
                <motion.span
                  layoutId="circle"
                  className="w-12 h-12 bg-ownRed-900 absolute rounded-full blur-2xl"
                />
              ) : (
                <></>
              )}
              <motion.li
                className="w-32 h-20 flex justify-center items-center capitalize relative"
                animate={{
                  opacity: item === selected ? 1 : 0.4,
                  color: item === selected ? "#FF4655" : "#FFFFFF",
                  fontWeight: item === selected ? 500 : 300,
                }}
                whileHover={{ opacity: item === selected ? 1 : 0.7 }}
              >
                {item}
              </motion.li>
            </Link>
          ))}
        </ul>
        <HeadShape right />
      </nav>
      <div className="header-right basis-1/4">
        <Button href="" style={{ right: 88, bottom: 0 }}>
          Contact Me
        </Button>
      </div>
    </header>
  );
}

export default Header;
