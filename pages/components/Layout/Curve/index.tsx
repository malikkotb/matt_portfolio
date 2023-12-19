"use client";
import { animate, motion } from "framer-motion";
import Link from "next/link";
import { text, curve, translate } from "./anim";
import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
import style from "./style.module.scss";

type props = {
  children: React.ReactNode;
};

const routes = {
  "/": "Home",
  "/about": "About",
  "/contact": "Contact",
};

const anim = (variants: any) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  };
};

export default function Curve({ children }: props) {
  // const router = useRouter();

  // store dimensions of the window inside state bc. u cant use window.innerHeight with SSR
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    const resize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };
    resize();
    window.addEventListener("resize", resize);
    // cleanup event listener
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className={style.curve}>
      <div
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
        className={style.background}
      />

      {dimensions.width > 0 && <SVG {...dimensions} />}
      {children}
    </div>
  );
}

type Dimensions = {
  width: number;
  height: number;
};

const SVG = ({ width, height }: Dimensions) => {
  // svg path for quadratic bezier curve
  const initialPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 300
    `;

  const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 300
    `;

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: {
        duration: .75,
        delay: 0.3,
        ease: [0.76, 0, 0.24, 1],
      }
    },
  };

  const slide = {
    initial: {
      top: "-300px",
    },
    enter: {
      top: "-100vh",
      transition: {
        duration: .75,
        delay: 0.3,
        ease: [0.76, 0, 0.24, 1],
      }
    },
  };

  return (
    <motion.svg className={style.curveSvg} {...anim(slide)}>
      <motion.path {...anim(curve)}></motion.path>
    </motion.svg>
  );
};

// const SVG = ({ height, width }: Dimensions) => {
//   const initialPath = `
//       M0 300
//       Q${width / 2} 0 ${width} 300
//       L${width} ${height + 300}
//       Q${width / 2} ${height + 600} 0 ${height + 300}
//       L0 0
//   `;

//   const targetPath = `
//       M0 300
//       Q${width / 2} 0 ${width} 300
//       L${width} ${height}
//       Q${width / 2} ${height} 0 ${height}
//       L0 0
//   `;

//   return (
//     <motion.svg className={style.curveSvg} {...anim(translate)}>
//       <motion.path {...anim(curve(initialPath, targetPath))} />
//     </motion.svg>
//   );
// };
