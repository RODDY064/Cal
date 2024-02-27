"use client";

import { Parallax } from "react-scroll-parallax";
import Discover from "../discover/discover";


export default function ParallaxDiv() {
  return (
    <Parallax speed={-15}>
    <div className="w-full pt-10">
      <Discover/>
     <div className="w-full my-[10rem]  h-[700px] bg-black"></div>
   </div>
    </Parallax>
  )
}
