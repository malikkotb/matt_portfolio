"use client";
import { Inter } from "next/font/google";
import { useScroll, useTransform, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Hero from "./home/components/Hero";
import Loader from "./home/components/Loader";
import Images from "./home/components/Images";
import Projects from "./home/components/Projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      // route to home page
    }, 3500);
  }, []);

  return (
    <main>
      <Hero />
      <div className="relative z-10 w-full">
        <Images />
        <Projects />
      </div>
    </main>
  );
}
