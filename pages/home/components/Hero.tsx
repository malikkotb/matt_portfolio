import { useScroll, useTransform, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { regular } from "../../fonts/fonts";

export default function Hero() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
    // container: , // by default is the current window
  });

  const opacity = useTransform(scrollYProgress, [0.6, 1], [1, 0]); // fade out a section
  const scale = useTransform(scrollYProgress, [0.6, 1], [1, 0.3]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed";
  });

  return (
    <motion.section
      style={{ opacity: opacity }}
      ref={targetRef}
      className="relative h-[250vh] w-screen justify-center "
    >
      <motion.div
        style={{ scale, position: position }}
        className="flex flex-col text-center h-screen w-screen justify-center items-center "
      >
        <div className="text-[#4A4049]">
          <div className="text-[13vw] tracking-tighter leading-[10vw]">
            MA<span className="">TT</span>EO
          </div>
          <div className="text-[13vw] tracking-tighter leading-[10vw]">
            <span>
              <span className="italic">J</span>U
            </span>
            ST
          </div>
        </div>
        <div
          className={`${regular.className} text-[#4A4049] w-[35vw] text-[8px] break-words sm:text-xs text-center mt-6`}
        >
          HEYKHAGDYLJDBCF.KSDBCDKSCN.SKDCDNS.KCJN.SDCNDSY,CNYS.JYDSY.CNSD.CJNDSY.CNDSY.CJNDSY.CJDNSYC.,MDNM,SCNS,DMCNDSY,MCNYDS,MCNYSD
        </div>
      </motion.div>
    </motion.section>
  );
}
