"use client";
import Hero from "./components/Hero";
import Images from "./components/Images";
import Projects from "./components/Projects";
import Curve from "../components/Layout/Curve";

export default function Home() {
  return (
    <Curve>
      <main className="bg-black">
        <Hero />
        <div className="relative">
          <Images />
          <Projects />
        </div>
      </main>
    </Curve>
  );
}
