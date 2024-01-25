import { useEffect, useState } from "react";
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
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (menuIsActive) {
      setTimeout(() => {
        console.log("hide menu");
        setHidden(true);
      }, 500);
    }
  }, [menuIsActive]);

  const handleClick = () => {
    setMenuIsActive(false);
  };

  return (
    <>
      {menuIsActive && (
        <motion.div
          className={`fixed flex flex-col items-center bg-[#241d24] justify-center h-screen w-full z-10`}
          variants={anim}
          initial="initial"
          animate={menuIsActive ? "open" : "closed"}
        >
          <Link
            href={"/home"}
            onClick={() => handleClick()}
            className="cursor-pointer m-[5px] text-[5vw] text-white transition-transform transform opacity-80 hover:opacity-100 hover:scale-105 duration-300"
          >
            Home
          </Link>
          <Link
            href={"/about"}
            onClick={() => setMenuIsActive(false)}
            className="cursor-pointer m-[5px] text-[5vw] text-white transition-transform transform opacity-80 hover:opacity-100 hover:scale-105 duration-300"
          >
            About
          </Link>
          <Link
            href={"/projects"}
            onClick={() => setMenuIsActive(false)}
            className="cursor-pointer m-[5px] text-[5vw] text-white transition-transform transform opacity-80 hover:opacity-100 hover:scale-105 duration-300"
          >
            Projects
          </Link>
          <Link
            href={"/mini"}
            onClick={() => setMenuIsActive(false)}
            className="cursor-pointer m-[5px] text-[5vw] text-white transition-transform transform opacity-80 hover:opacity-100 hover:scale-105 duration-300"
          >
            Mini
          </Link>
        </motion.div>
      )}
    </>
  );
}
