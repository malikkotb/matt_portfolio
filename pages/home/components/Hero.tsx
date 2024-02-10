import { useScroll, useTransform, motion, delay } from "framer-motion";
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

  const fadeUpAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
      // y: '100vh',
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.section
      style={{ opacity: opacity }}
      ref={targetRef}
      className="relative h-[250vh] w-screen justify-center "
    >
      <motion.div
        style={{ scale, position: position }}
        // variants={parentVariant}
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.3 }}
        className="flex flex-col text-center h-screen w-screen justify-center items-center "
      >
        <div className="text-[#4A4049] z-0">
          <motion.div
            transition={{ delay: 1.2, duration: 1.1 }}
            variants={fadeUpAnimation}
            className="text-[13vw] tracking-tighter leading-[10vw]"
          >
            MA<span className="">TT</span>EO
          </motion.div>
          <motion.div
            transition={{ delay: 1.5, duration: 1 }}
            variants={fadeUpAnimation}
            className="text-[13vw] tracking-tighter leading-[10vw]"
          >
            <span>
              <span className="italic">J</span>U
            </span>
            ST
          </motion.div>
        </div>
        <motion.div
          variants={fadeUpAnimation}
          transition={{ delay: 1.8, duration: 1 }}
          className={`${regular.className} text-[#4A4049] w-[35vw] text-[8px] break-words sm:text-xs text-center mt-3`}
        >
          HEYKHAGDYLJDBCF.KSDBCDKSCN.SKDCDNS.KCJN.SDCNDSY,CNYS.JYDSY.CNSD.CJNDSY.CNDSY.CJNDSY.CJDNSYC.,MDNM,SCNS,DMCNDSY,MCNYDS,MCNYSD
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
