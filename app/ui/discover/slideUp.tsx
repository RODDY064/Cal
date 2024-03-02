"use client";




import { motion } from "framer-motion";
import { Expand, MoveDown, MoveFromTop } from "./animation";
import Image from "next/image";
import Calculator from "./calculator";

export default function SlideUp({
  control,
  reshape,
}: {
  control: any;
  reshape: boolean;
}) {
  return (
    <motion.div
      variants={Expand}
      animate={control}
      style={{ backgroundColor: !reshape ? "#08A85E" : "#000" }}
      className="w-full md:w-[92%] 2xl:w-[80%] flex flex-col items-center justify-center  
          h-[12rem] md:h-[15rem] lg:h-[10rem] bg-[#08A85E]  rounded-[30px]  text-white overflow-hidden" >
      <div className="w-full h-full overflow-hidden relative">
        <motion.div
          variants={MoveFromTop}
          animate={control}
          initial="hide"
          className="w-full h-full absolute flex items-center justify-center" >
          <div className="w-full flex gap-2 flex-col items-center justify-center sm:flex-row sm:w-[80%] h-full p-4">
            <div className="w-full sm:w-[50%] h-[50%] sm:h-full flex items-center justify-center">
             <Calculator/>
            </div>
            <div className="w-full sm:w-[50%] h-[50%] sm:h-full">
              {/* Content */}
            </div>
          </div>
        </motion.div>
        <motion.div
          animate={control}
          variants={MoveDown}
          className="w-full h-full overflow-hidden absolute">
          <Image
            src="/images/cal_7.png"
            fill={true}
            alt=""
            className="object-cover"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
