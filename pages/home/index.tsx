"use client";
import { Inter } from "next/font/google";
import Hero from "./components/Hero";
import Images from "./components/Images";
import Projects from "./components/Projects";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Curve from "../components/Layout/Curve";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Curve>
      <Header />
      <main>
        <Hero />
        <div className="relative z-10 w-full">
          <Images />
          <Projects />
        </div>
      </main>
      <Footer />
    </Curve>
  );
}
