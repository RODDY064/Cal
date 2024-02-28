"use client";

import { motion } from "framer-motion";
import { Expand } from "./animation";
import Image from "next/image";

export default function SlideUp({
  control,
}: {
  control: any;
}) {
  return (
    <motion.div
      variants={Expand}
      animate={control}
      className="w-full md:w-[92%] 2xl:w-[80%] flex flex-col items-center justify-center  
          h-[12rem] md:h-[15rem] lg:h-[10rem] bg-black  rounded-[30px]  text-white overflow-hidden">
          <div className="w-full h-full overflow-hidden relative">
          <Image src="/images/cal_7.jpg" fill={true} alt=""/> 
        </div>
    </motion.div>
  );
}
