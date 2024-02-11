"use client";

import { useScroll } from "framer-motion";
import { motion } from "framer-motion-3d";
import Model from "./Model";

import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Stage } from "@react-three/drei";
import { useState } from "react";
import { useEffect } from "react";

export default function SceneCanvas({ source }: { source: string }) {
  const sceneCanvas = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sceneCanvas,

    offset: ["start end", "end start"],
  });

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.pageYOffset);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Convert scroll position to rotation (you might need to adjust the divisor to control the speed of rotation)
  const rotationY = scrollY * 0.001;

  return (
    <div className="flex justify-center items-center h-full">
      <Canvas ref={sceneCanvas}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Stage environment={"night"}>
          <motion.group rotation={[0, rotationY, 0]}>
            <Model source={source} />
          </motion.group>
        </Stage>
      </Canvas>
    </div>
  );
}
