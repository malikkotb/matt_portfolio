import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
const anim = {
  // TODO: maybe increase duartion for animation
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

type HeaderProps = {
  menuIsActive: boolean;
  setMenuIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Menu({ menuIsActive, setMenuIsActive }: HeaderProps) {
  return (
    <motion.div
      className="fixed flex flex-col items-center bg-black justify-center h-[100vh] w-full z-10"
      variants={anim}
      initial="initial"
      animate={menuIsActive ? "open" : "closed"}
    >
      <Link
        href={"/home"}
        onClick={() => setMenuIsActive(!menuIsActive)}
        className="cursor-pointer m-[5px] text-[5vw] text-white transition-transform transform opacity-70 hover:opacity-100 hover:scale-105 duration-300"
      >
        Home
      </Link>
      <Link
        href={"/about"}
        onClick={() => setMenuIsActive(!menuIsActive)}
        className="cursor-pointer m-[5px] text-[5vw] text-white transition-transform transform opacity-70 hover:opacity-100 hover:scale-105 duration-300"
      >
        About
      </Link>
      <Link
        href={"/projects"}
        onClick={() => setMenuIsActive(!menuIsActive)}
        className="cursor-pointer m-[5px] text-[5vw] text-white transition-transform transform opacity-70 hover:opacity-100 hover:scale-105 duration-300"
      >
        Projects
      </Link>
      <Link
        href={"/mini"}
        onClick={() => setMenuIsActive(!menuIsActive)}
        className="cursor-pointer m-[5px] text-[5vw] text-white transition-transform transform opacity-70 hover:opacity-100 hover:scale-105 duration-300"
      >
        Mini
      </Link>
    </motion.div>
  );
}