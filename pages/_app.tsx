"use client"
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './components/layout'
 
export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
