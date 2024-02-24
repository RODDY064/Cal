"use client"

import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Ref, useRef, useState } from 'react'
import { Swing } from './animation'
import Words from './words'
import Tabs from './tabs'

export default function Discover() {
    const [isAnimated, setIsAnimated] = useState<boolean>(false)
    const targetRef = useRef(null)

    const { scrollY } = useScroll({
        target:targetRef,
    })

    useMotionValueEvent(scrollY,'change',(latest)=>{
        switch(true){
            case latest > 400: setIsAnimated(true);
            break;
            default: setIsAnimated(false);
            break
        }
    })

  return (
    <div className="w-full flex flex-col items-center  h-screen snap-y snap-mandatory">
     <motion.div 
      ref={targetRef}
      variants={Swing}
      animate={isAnimated ? 'show' : 'hide'}
     className="w-full h-full text-center  pt-10 xl:pt-[7rem] snap-always snap-center">
      <Words/>
      <Tabs/>
     </motion.div>
    </div>
  )
}
