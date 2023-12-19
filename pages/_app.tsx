"use client";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Layout/Header";

export default function MyApp({ Component, pageProps, router }: AppProps) {
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
      <Header />
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
