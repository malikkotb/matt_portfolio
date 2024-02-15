"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

import SceneCanvas from "../components/Model_Interactive/SceneCanvas";
import { IoArrowDownSharp } from "react-icons/io5";
import { useScroll } from "framer-motion";

export default function index() {

  // custom Cursor
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

  // Images Animation (useScroll)

  return (
    <main className="bg-[#E5E4E0]">
      {/* custom cursor */}
      <motion.div
        animate={{ scale: isHovered ? 8 : 1 }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        style={{
          left: smoothMouse.x,
          mixBlendMode: "exclusion", // Apply blend mode here
          top: smoothMouse.y,
          backgroundColor: "#d398e5",
        }}
        className="fixed w-5 h-5 z-50 rounded-full pointer-events-none"
      ></motion.div>
      {/* 3D Model */}
      <div className="fixed w-screen h-screen z-20">
        <SceneCanvas source={"./yacht.glb"} />
      </div>
      <div className="h-[100vh] text-center">
        <div className="z-30 absolute text-[12vh] text-[#4A4049] font-medium top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 flex flex-col items-center">
          <span className="mb-4 ml-[-50vw]" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            MINIJAM
          </span>
          <span className="mb-8 ml-[50vw]" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            2023
          </span>
          <span className=" mt-24 ml-[-40vw]" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            NOWLIVE
          </span>
        </div>
        <div className="absolute top-[95%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2 items-center z-20">
            {/* TODO: make the scroll text dissappear on scroll */}
          SCROLL <IoArrowDownSharp />
        </div>
      </div>
      <div className="h-[100vh] w-screen">
        <div className="absolute z-30">
          <img src="./1.jpg" alt="1" className="w-[45vw] ml-20 mt-48" />
        </div>
      </div>
      <div className="h-[100vh] w-screen">
        <div className="absolute z-30">
          <img src="./2.jpg" alt="1" className="w-[25vw] ml-[50vw] mt-24" />
        </div>
      </div>
      <div className="h-[100vh] w-screen">
        <div className="absolute z-30">
          <img src="./3.jpg" alt="1" className="w-[20vw] h-[70vh] ml-40 mt-24" />
        </div>
        <div className="absolute z-30">
          <img src="./6.jpg" alt="1" className="w-[25vw] ml-[40vw] mt-12" />
        </div>
      </div>
      <div className="h-[100vh] w-screen">
        <div className="absolute z-30">
          <img src="./4.jpg" alt="1" className="w-[45vw] ml-20 mt-24" />
        </div>
      </div>
      <div className="h-[100vh] w-screen">
        <div className="absolute z-30">
          <img src="./5.jpg" alt="1" className="w-[45vw] ml-[50vw] mt-48" />
        </div>
      </div>
    </main>
  );
}
