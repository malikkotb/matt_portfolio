"use client";
import { Inter } from "next/font/google";
import Hero from "./components/Hero";
import Images from "./components/Images";
import Projects from "./components/Projects";
import Header from "../components/Layout/header/Header";
import Footer from "../components/Layout/Footer";
import Curve from "../components/Layout/Curve";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Curve>
      <main>
        <Hero />
        <div className="relative">
          <Images />
          <Projects />
        </div>
      </main>
    </Curve>
  );
}
