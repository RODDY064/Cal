"use client";

import { motion, useMotionValueEvent, useScroll, useAnimation } from "framer-motion";
import { Ref, useEffect, useRef, useState } from "react";
import { Swing } from "./animation";
import Words from "./words";
import Tabs from "./tabs";
import SlideUp from "./slideUp";

export default function Discover() {

  const [isAnimated, setIsAnimated] = useState<{first:boolean,second:boolean}>({ first:false, second:false});
  const targetRef = useRef(null);

  const controls = useAnimation();
  const { scrollY } = useScroll({
    target: targetRef,
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log(latest)
    switch (true) {
      case latest >= 400:
        setIsAnimated((prev)=>({...prev,first:true}));
        break;
      case latest >= 700: 
       setIsAnimated((prev)=>({...prev,second:true }));
      break;
      default:
        setIsAnimated((prev)=>({...prev,first:false,second:false}));
        break;
    }
  });


  useEffect(()=>{
    controls.start(isAnimated.second ? "show": "hide")
    console.log(isAnimated.second, "second")
  },[isAnimated.second])

  useEffect(()=>{
     console.log(isAnimated.first , "first")
  },[isAnimated.first])



  return (
    <div className="w-full flex flex-col items-center  h-screen snap-y snap-mandatory">
      <motion.div
        ref={targetRef}
        variants={Swing}
        animate={isAnimated.first ? "show" : "hide"}
        className="w-full h-full text-center  pt-10 xl:pt-[7rem] px-2 sm:px-0  snap-always snap-center">
        <Words />
        <div className="w-full  flex flex-col  items-center gap-4  pt-5 pb-2 md:px-12 xl:px-20">
          <Tabs control={controls} />
          <SlideUp/>
        </div>
      </motion.div>
    </div>
  );
}
