"use client";

import { MotionValue, motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const fontSize = 30;
const padding = 15;
// const height = fontSize + padding;

export default function AnimateCounter() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
        setCount(100)
    }, 200)
  }, [])

  return (
    <div>
      <Counter value={count} />
    </div>
  );
}

type Counter = {
  value: number
}

function Counter({ value }: Counter) {
  let animatedValue = useSpring(value, { stiffness: 50, damping: 20, duration: 2 });
  useEffect(() => {
    animatedValue.set(value);
  }, [animatedValue, value]);

  return (
    <div className="flex h-32 text-black text-9xl font-medium overflow-hidden">
      <div className="relative w-20">
        {[...Array(10).keys()].map((i) => (
          <Number place={100} mv={animatedValue} number={i} key={i} />
        ))}
      </div>
      <div className="relative w-20">
        {[...Array(10).keys()].map((i) => (
          <Number place={10} mv={animatedValue} number={i} key={i} />
        ))}
      </div>
      <div className="relative w-24">
        {[...Array(10).keys()].map((i) => (
          <Number place={1} mv={animatedValue} number={i} key={i} />
        ))}
      </div>
    </div>
  );
}

// type Digit = {
//   place: number,
//   value: number
// }
// function Digit({ place, value }: Digit) {
//   let valueRoundedToPlace = Math.floor(value / place);
//     let animatedValue = useSpring(valueRoundedToPlace);
  
//     useEffect(() => {
//       animatedValue.set(valueRoundedToPlace);
//     }, [animatedValue, valueRoundedToPlace]);
  
//     return (
//       <div style={{ height }} className="relative w-32 tabular-nums">
//         {[...Array(10).keys()].map((i) => (
//           <Number key={i} mv={animatedValue} number={i} />
//         ))}
//       </div>
//     );
//   }
  
  type Number = {
    place: number,
    mv: MotionValue,
    number: number
  }

function Number({ place, mv, number }: Number) {

  let y = useTransform(mv, (latest) => {
    let height = 128; // height of box -> TODO: change to height of text in page
    let placeValue = (latest / place) % 10;
    let offset = (10 + number - placeValue) % 10;

    let memo = offset * height;

    if (offset > 5) {
      memo -= 10 * height;
    }

    return memo;
  });

  return (
    <motion.span style={{ y }} className="absolute inset-0 flex justify-center">
      {number}
    </motion.span>
  );
}