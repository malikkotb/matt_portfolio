"use client";

import SceneCanvas from "../components/Model_Scroll/SceneCanvas";
import gsap from "gsap";
import React, { useRef, useEffect } from "react";
import styles from "./page.module.css";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Curve from "../components/Layout/Curve";

export default function index() {
  return (
    <Curve>
      <div className="p-4">
        <div className="text-2xl">Projects</div>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          repellendus eos, illum aliquid numquam, suscipit vel beatae esse
          doloremque minima laboriosam explicabo cupiditate accusamus maxime
          impedit cum? Sequi, quidem eveniet?
        </p>
      </div>
    </Curve>
  );
}
// import Curve from "../components/Layout/Curve";
// import SceneCanvas from "../components/SceneCanvas";
// export default function index() {
//   return (
//     <Curve>
//       <main className="flex flex-col justify-between h-screen">
//         <div className="h-2/4 grid grid-cols-4">
//           <SceneCanvas source={"/bmw_m4"} />
//           <SceneCanvas source={"/mini.glb"} />
//           <SceneCanvas source={"/rossa.glb"} />
//           <SceneCanvas source={"/yacht.glb"} />
//         </div>

//         <div className="h-1/4">Description</div>
//       </main>
//     </Curve>
//   );
// }
