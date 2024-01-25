"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { motion, useScroll } from "framer-motion";
import Model from "./Model";
import { useRef } from "react";

export default function SceneCanvas({ source }: { source: string }) {
  const scene = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scene,

    offset: ["start end", "end start"],
  });

  return (
    <div className="flex justify-center items-center h-full">
      <Canvas ref={scene} dpr={[1, 2]} camera={{ position: [0, 0, 100] }}>
        {/* <color attach="background" /> */}
        {/* <OrbitControls
          autoRotate
          enableZoom={false}
          minPolarAngle={-Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        /> */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        {/* <Stage environment={"sunset"}> */}
        <Model source={source} scale={0.01} />
        {/* </Stage> */}
      </Canvas>
    </div>
  );
}
