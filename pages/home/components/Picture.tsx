import { useScroll, useTransform, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

type Picture = {
  margin: string,
  inputRange: number[],
  outputRange: number[],
  src: string,
  height: string,
  align: string
}
export default function Picture({ margin, inputRange, outputRange, src, height, align }: Picture) {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

//   const scale = useTransform(
//     scrollYProgress,
//     [0.1, 0.15, 0.2, 0.25],
//     [1, 1.3, 1.2, 1]
//   );
  const rotate = useTransform(scrollYProgress, inputRange, outputRange);

  return (
    <section className={`mt-[${margin}]`}>
      <div ref={targetRef} className="h-auto w-full">
        <div className={`top-[10vh] items-start`}>
          <div className={`w-full flex ${align}`}>
            <motion.div
              style={{ rotate: rotate }}
              className={`ml-[0px] origin-top `}
            >
              <img
                className={`${height} cursor-pointer w-auto shadow-2xl rounded-3xl transition-transform transform hover:scale-105 duration-300`}
                src={src}
              ></img>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
