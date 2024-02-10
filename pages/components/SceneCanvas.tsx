"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion-3d";
import Model from "./Model";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";


export default function SceneCanvas({ source }: { source: string }) {
  const sceneCanvas = useRef(null);
  // const { scene } = useGLTF(source);

  const { scrollYProgress } = useScroll({
    target: sceneCanvas,

    offset: ["start end", "end start"],
  });

  return (
    <div className="flex justify-center items-center h-full">
      <Canvas ref={sceneCanvas} dpr={[1, 2]}>
        {/* <color attach="background" /> */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        {/* <motion.Stage environment={"sunset"}> */}
        {/* <motion.primitive object={scene} scale={0.01} /> */}
        <Model source={source} scale={0.01} />
        {/* </motion.Stage> */}
      </Canvas>
    </div>
  );
}
