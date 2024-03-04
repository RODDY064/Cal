"use client";

import { Parallax } from "react-scroll-parallax";
import Discover from "../discover/discover";
import Footer from "../footer/footer";



export default function ParallaxDiv() {
  return (
    <Parallax speed={-15}>
    <div className="w-full pt-10">
      <Discover/>
      <Footer/>
       </div>
    </Parallax>
  )
}
