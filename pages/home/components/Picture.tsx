import { useScroll, useTransform, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Picture({ margin, inputRange, outputRange, src, height, align }) {
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
      <div ref={targetRef} className="h-[50vh] w-full">
        <div className={`top-[10vh] flex flex-col gap-28 items-start`}>
          <div className={`w-full flex ${align}`}>
            <motion.div
              style={{ rotate: rotate }}
              className={`ml-[0px] origin-top `}
            >
              <img
                className={`${height} w-auto`}
                src={src}
              ></img>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
