"use client";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./components/layout";
import { AnimatePresence } from "framer-motion";

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
    <AnimatePresence mode="wait">
      <Layout>
        <Component key={router.route} {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
}
