"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useAnimation,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Swing } from "./animation";
import Words from "./words";
import Tabs from "./tabs";
import SlideUp from "./slideUp";

export default function Discover() {
  const [isAnimated, setIsAnimated] = useState<{
    first: boolean;
    second: boolean;
  }>({ first: false, second: false });
  const targetRef = useRef<HTMLDivElement>(null);
  const unsubscribeScroll = useRef<(() => void) | null>(null); // Ref to hold the unsubscribe function

  const controls = useAnimation();
  const { scrollY } = useScroll({
    target: targetRef,
  });

  const updateAnimationState = (latest: number) => {
    setIsAnimated((prev) => ({
      ...prev,
      first: latest >= 400,
      second: latest >= 820,
    }));
  };

  const handleScrollChange = (latest: number) => {
    updateAnimationState(latest);
  };

  useMotionValueEvent(scrollY, "change", handleScrollChange);

  useEffect(() => {
    handleScrollChange(scrollY.get());
    return () => {
      if (unsubscribeScroll.current) {
        unsubscribeScroll.current();
      }
    };
  }, [scrollY]);

  useEffect(() => {
    controls.start(isAnimated.second ? "show" : "hide");
  }, [isAnimated.second]);

  return (
 <div className="w-full min-h-screen">
      <div className="w-full flex flex-col items-center  h-screen snap-y snap-mandatory">
      <motion.div
        ref={targetRef}
        variants={Swing}
        animate={isAnimated.first ? "show" : "hide"}
        className="w-full h-full text-center  pt-10 xl:pt-[7rem] px-2 sm:px-0  snap-always snap-center">
        <Words />
        <div className="w-full py-5">
          <div className="w-full  flex flex-col  items-center gap-4  md:px-12 xl:pt-20">
            <Tabs control={controls} />
            <SlideUp control={controls} reshape={isAnimated.second} />
          </div>
        </div>
      </motion.div>
    </div>
 </div>
  );
}

