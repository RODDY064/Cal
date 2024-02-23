"use client"

import { useScroll, useSpring , motion } from "framer-motion"


export default function SliderBar() {

    const { scrollY } = useScroll()
    const Y = useSpring(scrollY)
    




  return (
    <div className='w-12 flex-none h-screen absolute right-0 hidden md:flex items-center justify-center px-3'>
        <div className='w-full h-[50%] bg-black rounded-[40px] p-1'>
            <motion.div  style={{ y: Y }} className='w-full h-[20%] bg-white rounded-[25px]'></motion.div>
        </div>

    </div>
  )
}
