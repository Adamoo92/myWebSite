"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const menuList = ["home", "about", "notes", "project"];

function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (pathname) {
      if (pathname == "/") {
        setSelected("home");
      } else {
        setSelected(pathname.slice(1));
      }
    }
  }, [pathname]);

  return (
    <header className="header w-full h-20 flex fixed top-4 z-[9999]">
      <div className="header-logo flex-1">
        <Image
          src="/image/logo.svg"
          width={150}
          height={48}
          alt="header-logo"
          priority
          className="ml-10 my-4 cursor-pointer"
          onClick={() => router.push("/")}
        />
      </div>
      <menu className="header-menu flex-none px-8 flex bg-[#0E0E0FF2] backdrop-blur-sm rounded-full">
        {menuList.map((item, i) => (
          <li
            key={i}
            className="w-28 h-full flex justify-center items-center relative selected-none cursor-pointer"
            onClick={() => router.push(i == 0 ? "/" : `/${item}`)}
          >
            {selected === item && (
              <motion.span
                className="w-24 h-11 absolute bg-ownRed-900 rounded-full"
                layoutId="item-bg"
              />
            )}
            <span
              className="relative capitalize text-white/50 hover:text-white/70"
              style={{
                fontWeight: item == selected ? 500 : 300,
                color: item === selected && "rgba(0,0,0,1)",
              }}
            >
              {item}
            </span>
          </li>
        ))}
      </menu>
      <div className="flex-1"></div>
    </header>
  );
}

export default Header;
