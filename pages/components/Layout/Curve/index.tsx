"use client";
// import { animate, motion } from "framer-motion";
// import Link from "next/link";
// import { text, curve, translate } from "./anim";
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

  const anim = (variants: any) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  return (
    <div className={style.curve}>
      <div className={style.background}>
        {dimensions.width > 0 && <SVG {...dimensions} />}
        {children}
      </div>
    </div>
  );
}

type Dimensions = {
  width: number;
  height: number;
};

const SVG = ({ width, height }: Dimensions) => {
  const d = width + height;
  // svg path for quadratic bezier curve
  const initialPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 300} 0 ${height + 300}
        L0 300
    `;

  return (
    <svg>
      <path d={initialPath}></path>
    </svg>
  );
};
