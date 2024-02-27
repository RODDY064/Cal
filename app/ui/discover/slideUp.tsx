"use client"

import { motion } from "framer-motion"
import { Expand } from "./animation"

export default function SlideUp({ control}:{ control:any} ) {


  return (
    <motion.div
    variants={Expand}
    animate={control}
    className="w-full md:w-[92%] 2xl:w-[80%] flex flex-col items-center sm:items-start  sm:flex-row  py-2 
    h-[12rem] md:h-[15rem] lg:h-[10rem] bg-black  rounded-[30px] p-4 text-white">
    <div className="w-full h-full"></div>
   </motion.div>
  )
}
