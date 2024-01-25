"use client";
import SceneCanvas from "../components/SceneCanvas";
import gsap from "gsap";
import React, { useRef, useEffect } from "react";
import styles from "./page.module.css";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Curve from "../components/Layout/Curve";
// export default function index() {
//   return (
//     <Curve>
//       <div className="p-4">
//         <div className="text-2xl">Mini</div>
//         <p className="">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
//           repellendus eos, illum aliquid numquam, suscipit vel beatae esse
//           doloremque minima laboriosam explicabo cupiditate accusamus maxime
//           impedit cum? Sequi, quidem eveniet?
//         </p>
//       </div>
//     </Curve>
//   );
// }

export default function page() {
  const imageContainer = useRef(null);
  const pinContainerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: imageContainer.current,
        start: "top top",
        end: "bottom bottom",
        // markers: true,
        pin: pinContainerRef.current,
      });
    });

    return () => ctx.revert();
  }, []);

  const phrase =
    "The Modern Mini - It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more orless normal distribution of letters.";

  //   let refs = useRef([]);
  let refs = useRef<(HTMLSpanElement | null)[]>([]);

  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `top top`,
        end: `+=${window.innerHeight / 1.5}`,
        // markers: true,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    });
  };

  const splitWords = (phrase: string): React.ReactNode[] => {
    let body: React.ReactNode[] = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + "_" + i}>{letters}</p>);
    });
    return body;
  };

  const splitLetters = (word: string) => {
    let letters: React.ReactNode[] = [];

    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={letter + "_" + i}
          ref={(el) => {
            if (el) {
              refs.current.push(el);
            }
          }}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };

  return (
    <Curve>
      <div className="bg-black" ref={container}>
        {" "}
        {/* container of opacity animation = entire window */}
        <div className="w-screen h-[30vh] grid place-content-center">
          <div className="text-6xl font-bold ">Mini 2023</div>
        </div>
        <div ref={imageContainer} className="flex ">
          <div className="w-[50%]">
            <div className="m-auto w-[80%]">
              <div
                // ref={container}
                className="h-screen flex flex-col justify-center "
              >
                <div className={styles.body}>{splitWords(phrase)}</div>
              </div>
              <div className="h-screen flex flex-col justify-center ">
                {/* <div className={styles.body}>{splitWords(phrase)}</div> */}

                <div className={styles.body}>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more orless normal distribution of letters.
                  </p>
                </div>
                <div></div>
              </div>

              <div className="h-screen flex flex-col justify-center text-white">
                {/* <div className={styles.body}>{splitWords(phrase)}</div> */}
                {/* <div className="w-full font-bold text-3xl"></div> */}
                <div className={styles.body}>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more orless normal distribution of letters.
                  </p>
                </div>
                <div></div>
              </div>
            </div>
          </div>

          <div
            ref={pinContainerRef}
            className=" w-[50%] h-screen items-center justify-center"
          >
            {/* <div className="rounded-xl w-[40vw] h-[40vw] bg-orange-500"></div> */}
            <SceneCanvas source={"/mini.glb"} />
          </div>
        </div>
        <div className="w-screen h-[50vh] bg-black grid place-content-center">
          <div className=" text-9xl text-white font-bold">MATTEO JUST</div>
        </div>
      </div>
    </Curve>
  );
}
