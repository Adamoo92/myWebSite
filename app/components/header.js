"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuList = ["home", "about", "notes", "project"];

function Header() {
  const pathname = usePathname();

  return (
    <header className="header w-full h-max flex text-base font-light fixed top-4 z-[9999]">
      <div className="header-left flex-1 flex">
        <Link href="/" className="block w-max h-full pl-10 flex items-center">
          <Image src="image/logo.svg" width={150} height={48} alt="logo" />
        </Link>
      </div>
      <menu
        className="header-menu flex-none text-white flex px-20 rounded-full capitalize"
        style={{
          background: "rgba(14, 14, 15, 0.95)",
          backdropFilter: "blur(4px)",
        }}
      >
        {menuList.map((item, i) => (
          <motion.li
            key={i}
            className="w-32 h-20 flex justify-center items-center relative"
            style={{
              color:
                pathname.slice(1) === item ||
                (pathname.slice(1) === "" && i == 0)
                  ? "#191811"
                  : "rgba(255,255,255,0.5)",
              fontWeight:
                pathname.slice(1) === item ||
                (pathname.slice(1) === "" && i == 0)
                  ? 500
                  : 300,
            }}
            whileHover={{
              color:
                pathname.slice(1) === item ||
                (pathname.slice(1) === "" && i == 0)
                  ? "#191811"
                  : "rgba(255,255,255,1)",
            }}
          >
            {pathname.slice(1) === item ||
            (pathname.slice(1) === "" && i == 0) ? (
              <motion.span
                layoutId="item-bg"
                className="w-24 h-11 bg-ownRed-900 absolute rounded-full"
              />
            ) : (
              <></>
            )}
            <Link
              href={`/${item === "home" ? "" : item}`}
              className="block w-24 h-11 flex justify-center items-center relative"
            >
              {item}
            </Link>
          </motion.li>
        ))}
      </menu>
      <div className="header-right flex-1 flex items-center justify-end">
        {/* <Button /> */}
      </div>
    </header>
  );
}

export default Header;
