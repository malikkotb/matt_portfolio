"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

import SceneCanvas from "../components/Model_Interactive/SceneCanvas";
import { IoArrowDownSharp } from "react-icons/io5";

export default function index() {
  const cursorSize = 15;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e: { clientX: any; clientY: any }) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <>
      {/* custom cursor */}
      <motion.div
        animate={{ scale: isHovered ? 8 : 1 }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        style={{
          left: smoothMouse.x,
          mixBlendMode: "exclusion", // Apply blend mode here
          top: smoothMouse.y,
          backgroundColor: "white",
        }}
        className="fixed w-5 h-5 z-30 rounded-full pointer-events-none"
      ></motion.div>
      <div className="sticky top-0 h-[100vh] bg-[#E5E4E0] text-center">
        <div className="z-50 fixed text-[12vh] text-black font-medium top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 flex flex-col items-center">
          <span className="mb-4 ml-[-50vw]" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
            MINIJAM
          </span>
          <span className="mb-2 ml-[50vw]" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
            2023
          </span>
          <span className=" mt-12 ml-[-40vw]" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
            NOWLIVE
          </span>
        </div>
        <div className=" absolute w-screen h-screen z-50">
          <SceneCanvas source={"./yacht.glb"} />
        </div>
        <div className="absolute top-[95%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2 items-center z-20">
          SCROLL <IoArrowDownSharp />
        </div>
      </div>
      <div className="h-[100vh] relative bg-blue-500"></div>
    </>
  );
}
