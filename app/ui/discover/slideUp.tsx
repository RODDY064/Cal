"use client";

import { motion } from "framer-motion";
import { MoveDown, MoveFromTop } from "./animation";
import Image from "next/image";
import Calculator from "./calculator";
import CalText from "./calText";
import { useEffect, useState } from "react";

export default function SlideUp({
  control,
  reshape,
}: {
  control: any;
  reshape: boolean;
}) {

    
   const [size , setSize ]  = useState({
    height:"30rem",
    y:'-20rem'
   })

  useEffect(() => {
    if (window.innerWidth < 760) {
      setSize((prev)=>({...prev, height:"45rem",y:"-35rem"}))
    }
  }, []);

  const Expand = {
    show: {
      height: size.height,
      y: size.y, // Start expanding from the bottom
      transition: {
        type: "tween",
        duration: 3,
        delay: 1.2,
      },
    },
    hide: {
      height: "10rem",
      y: 0, // Expand from bottom to top
      transition: {
        type: "tween",
        duration: 3,
      },
    },
  };

  return (
    <motion.div
      variants={Expand}
      animate={control}
      style={{ backgroundColor: !reshape ? "#08A85E" : "#000" }}
      className="w-full md:w-[92%] 2xl:w-[80%] flex flex-col items-center justify-center  
          h-[12rem] md:h-[15rem] lg:h-[10rem] bg-[#08A85E]  rounded-[30px]  text-white overflow-hidden">
      <div className="w-full h-full overflow-hidden relative">
        <motion.div
          variants={MoveFromTop}
          animate={control}
          initial="hide"
          className="w-full h-full absolute flex items-center justify-center">
          <div className="w-full flex gap-2 flex-col items-center justify-center sm:flex-row sm:w-[80%] h-full p-4">
            <div className="w-full sm:w-[50%] h-[50%] sm:h-full flex items-center justify-center">
              <Calculator />
            </div>
            <div className="w-full sm:w-[50%] h-[50%] sm:h-full py-2 sm:py-[4rem] px-4 sm:px-14 flex items-center justify-center">
              <CalText />
            </div>
          </div>
        </motion.div>
        <motion.div
          animate={control}
          variants={MoveDown}
          className="w-full h-full overflow-hidden absolute">
          <Image
            src="/images/cal_7.png"
            fill={true}
            alt=""
            className="object-cover"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
