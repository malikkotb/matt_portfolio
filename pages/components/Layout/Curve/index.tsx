import { animate, motion } from "framer-motion";
import Link from "next/link";
import { text, curve, translate } from './anim';
import { useEffect, useState } from "react";

type props = {
  children: React.ReactNode;
};

export default function Curve({ children }: props) {

    // store dimensions of the window inside state bc. u cant use window.innerHeight with SSR 
    const [dimensions, setDimensions] = useState({
        height: 0,
        width: 0
    })

    useEffect(() => {
        const resize = () => {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth,
            })
        }
        resize();
        window.addEventListener("resize", resize)
        // cleanup event listener
        return () => window.removeEventListener("resize", resize);
    }, [])

    const anim = (variants: any) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            variants
        }
    }


    return <div className="page curve">{children}</div>;
}

const SVG = () => {
    return (
        <svg>
            <path d=""></path>
        </svg>
    )
}