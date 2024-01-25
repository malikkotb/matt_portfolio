"use client";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { useRouter } from "next/router";
import AnimateCounter from "./components/AnimateCounter";
import Curve from "./components/Layout/Curve";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/home"); // route to home page
    }, 2500);
  }, []);

  return (
    <>
      <Curve>
        {/* <CustomCursor /> */}

        {/* <div className="h-screen overflow-x-hidden w-screen bg-[#011EF5] text-center items-center flex"> */}
        {/* <AnimateCounter /> */}
        {/* </div> */}
        <div></div>
      </Curve>
    </>
  );
}
