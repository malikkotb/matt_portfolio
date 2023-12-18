"use client";
import { Inter } from "next/font/google";
import { useState, useEffect, useRef } from "react";
import Hero from "./home/components/Hero";
import Images from "./home/components/Images";
import Projects from "./home/components/Projects";
import { useRouter } from 'next/router'
import AnimateCounter from "./components/AnimateCounter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
    router.push("/home")// route to home page
    }, 3500);
  }, []);

  return (
    <div className="h-screen w-screen bg-[#011EF5] text-center items-center flex">
      <AnimateCounter />
    </div>
  );
}
