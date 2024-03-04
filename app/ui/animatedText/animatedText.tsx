"use client";

import Image from "next/image";
import { motion } from "framer-motion";


export default function AnimatedText() {
  return (
    <>
      <div className="flex gap-2 items-center">
        <div className="flex gap-2 items-center ">
          <motion.div 
           animate={{
            scale:[1,0.7,1],
            rotate:[0,90,180],
            borderRadius:['0%','30%','40%']
           }}

          transition={{ type:'tween' , duration:1.5 ,repeat:Infinity, repeatType:'reverse'}}
          className="overflow-hidden"
          >
          <Image
            src="/icons/square.svg"
            width={21}
            height={21}
            alt="square"
            className="rotate-12"
          />
          </motion.div>
          <Image
            src="/icons/circle.svg"
            width={26}
            height={26}
            alt="circle"
            className="rotate-45 pt-2"
          />
        </div>
        <div>
          <h1 id="text_word" className="font-[600] text-6xl lg:text-8xl">L<span>0</span>UDER</h1>
        </div>
      </div>
     <div className="relative flex md:w-[90%]">
     <motion.div 
    animate={{ width: ['0%', '100%', '0%'] }}
    initial={{ width: '0%'}} 
    transition={{ type: 'tween', duration: 3, ease: 'easeOut', repeat: Infinity, repeatType: 'loop', repeatDelay: 2 }}
    className="h-full absolute bg-dark_cream rounded-[5px] "
     ></motion.div>
     <h1 id="text_word" className="font-[600] text-6xl lg:text-8xl tracking-tighter z-10">WORKFLOW.</h1>
     </div>
    </>
  );
}
