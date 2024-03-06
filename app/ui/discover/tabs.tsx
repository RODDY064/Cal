"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Leave } from "./animation";


export default function Tabs({ control}:{ control:any }) {

  const [isMobile, setIsMobile] = useState<boolean>(false)
  useEffect(()=>{
    if(window.innerWidth < 760){
      setIsMobile(true)
    }

  },[])

  
  return (
      <div className="w-full 2xl:w-[80%]  flex flex-col items-center justify-center  md:flex-row gap-4 md:gap-6">
        <motion.div
           variants={Leave}
           animate={control}
           whileInView={!isMobile ? { width: ["30%", "60%", "30%"] } : ""}
           transition={{
            type: "tween",
            duration: 6,
            repeat: Infinity,
            times: [0, 0.3, 1],
            delay: 0.5,
          }}
          className="w-full md:w-[50%] h-[17rem]  md:h-[20rem] overflow-hidden relative rounded-[35px]">
          <motion.div
            whileInView={!isMobile ? { scale: [1, 1.05, 1] } : ""}
            initial={{ scale: 1 }}
            transition={{
              type: "tween",
              duration: 6,
              repeat: Infinity,
              times: [0, 0.3, 1],
              delay: 0.5,
            }}
            className="relative w-full h-full overflow-hidden">
            <Image 
            src="/images/cal_4.jpg" 
            fill={true} 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="discover_1" />
          </motion.div>
        </motion.div>
        <motion.div
          variants={Leave}
          animate={control}
          whileInView={!isMobile ? { width: ["60%", "30%", "60%"] } : ""}
          transition={{
            type: "tween",
            duration: 6,
            repeat: Infinity,
            times: [0, 0.3, 1],
            delay: 0.5,
          }}
          className="w-full md:w-[50%] h-[17rem] md:h-[20rem] overflow-hidden relative  rounded-[35px]">
          <motion.div
            whileInView={!isMobile ? { scale: [1, 1.08, 1] } : ""}
            initial={{ scale: 1 }}
            transition={{
              type: "tween",
              duration: 6,
              repeat: Infinity,
              times: [0, 0.3, 1],
              delay: 0.5,
            }}
            className="relative w-full h-full">
            <Image 
            src="/images/cal_3.jpg" 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill={true} 
            alt="discover_2" />
          </motion.div>
        </motion.div>
      </div>

  );
}
