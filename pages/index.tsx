"use client";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { useRouter } from "next/router";
import AnimateCounter from "./components/AnimateCounter";
import Curve from "./components/Layout/Curve";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const router = useRouter();

  // useEffect(() => {
  //   setTimeout(() => {
  //   router.push("/home")// route to home page
  //   }, 3500);
  // }, []);

  return (
    <>
      <Curve>
        <div className="h-screen w-screen bg-[#011EF5] text-center items-center flex">
          <AnimateCounter />
        </div>
      </Curve>
    </>
  );
}
