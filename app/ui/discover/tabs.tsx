"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Expand } from "./animation";

export default function Tabs() {
  const [isAnimated, setIsAnimated] = useState<{
    first: boolean;
    second: boolean;
  }>({
    first: true,
    second: false,
  });


  return (
    <div className="w-full  flex flex-col items-center gap-4  pt-5 md:px-12 xl:px-14">
        <div className="w-full 2xl:w-[80%]  flex flex-col items-center justify-between  md:flex-row gap-4 md:gap-12">
            <motion.div 
             variants={Expand}
             initial={{ width:'50%'}}
             animate= 'show'
             
            className="w-full md:w-[50%] h-[17rem]  md:h-[20rem] overflow-hidden relative rounded-[35px]">
                <Image src="/images/cal_4.jpg" fill={true} alt="discover_1" />
            </motion.div>
            <motion.div 
             variants={Expand}
             initial={{ width:'50%'}}
             animate= 'hide'
            className=" w-full md:w-[50%] h-[17rem] md:h-[20rem] overflow-hidden relative  rounded-[35px]">
            <Image src="/images/cal_3.jpg" fill={true} alt="discover_2" />
            </motion.div>
        </div>
        <div className="w-full py-2 h-[10rem] bg-black rounded-[30px]">

        </div>

    </div>
  );
}
