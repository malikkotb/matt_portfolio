"use client";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";

import SceneCanvas from "../components/Model_Interactive/SceneCanvas";
import { IoArrowDownSharp } from "react-icons/io5";

const divStyles = [
  { top: "10vh", left: "10vw", width: "45vw", height: "25vh" },
  { top: "30vh", left: "40vw", width: "45vw", height: "25vh" },
  { top: "50vh", left: "5vw", width: "25vw", height: "25vh" },
  { top: "40vh", left: "40vw", width: "40vw", height: "25vh" },
  { top: "60vh", left: "60vw", width: "30vw", height: "25vh" },
  { top: "70vh", left: "15vw", width: "45vw", height: "25vh" },
  { top: "90vh", left: "50vw", width: "45vw", height: "25vh" },
  { top: "120vh", left: "10vw", width: "40vw", height: "25vh" },
];

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

  // Images Animation
  const containerRef = useRef(null)
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["0 1", "1.33 1"] });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])

  return (
    <main className="bg-[#E5E4E0] overflow-x-hidden">
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
      <div className="fixed w-screen h-screen z-20">
        <SceneCanvas source={"./yacht.glb"} />
      </div>
      <div className="h-[100vh] text-center">
        <div className="z-30 absolute text-[12vh] text-[#4A4049] font-medium top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 flex flex-col items-center">
          <span
            className="mb-4 ml-[-50vw]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            MINIJAM
          </span>
          <span
            className="mb-8 ml-[50vw]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            2023
          </span>
          <span
            className=" mt-24 ml-[-40vw]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            NOWLIVE
          </span>
        </div>
        <div className="absolute top-[95%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2 items-center z-20">
          SCROLL <IoArrowDownSharp /> {/* TODO: make text dissapear on scroll */}
        </div>
      </div>
      <div ref={targetRef} className="h-[320vh] relative">
        {divStyles.map((style, index) => (
          <motion.div key={index} className="relative z-30" style={{ scale: scaleProgress, top: style.top, left: style.left, width: style.width, height: style.height }}>
            <img src={`./${index + 1}.jpg`} alt={`${index + 1}`} className="" />
          </motion.div>
        ))}
      </div>
    </main>
  );
}
