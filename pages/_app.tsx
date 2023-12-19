"use client";
import Lenis from "@studio-freight/lenis";
import { useEffect, useState } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Layout/header/Header";
import Menu from "./components/Layout/menu/Menu";
export default function MyApp({ Component, pageProps, router }: AppProps) {
  const [menuIsActive, setMenuIsActive] = useState(false);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);
  return (
    <div>
      <Header menuIsActive={menuIsActive} setMenuIsActive={setMenuIsActive}/>
      <Menu menuIsActive={menuIsActive} setMenuIsActive={setMenuIsActive}/>
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
