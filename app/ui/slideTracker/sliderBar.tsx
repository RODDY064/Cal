"use client"

import { useScroll, useSpring , motion , useTransform , useMotionValueEvent } from "framer-motion"
import { useEffect, useRef } from "react";


export default function SliderBar() {


    const { scrollYProgress } = useScroll({})
    /*useMotionValueEvent(scrollYProgress, "change", (latest) => {
      console.log("Page scroll: ", latest)
    })

    */
     
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
    
    


  return (
<div>
<div className='w-12 flex-none h-screen fixed right-0 hidden md:flex items-center justify-center px-3'>
        <div className='w-full h-[50%] bg-black rounded-[42px] p-1'>
            <motion.div  style={{  y }} className='w-full h-[20%] bg-white rounded-[25px]'></motion.div>
        </div>
    </div>
</div>
  )
}
