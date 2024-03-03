"use client";

import Image from "next/image";
import { poppins } from "../fonts/font";

export default function CalText() {
  return (
    <div className="w-full h-full text-start">
      <div className="w-full flex justify-start">
        <div className="flex gap-[2px] items-center justify-center">
          <Image src="/icons/x_w.svg" width={20} height={20} alt="x" className="rotate-12"/>
          <Image src="/icons/square_w.svg" width={18} height={18} alt="square" className="rotate-12" />
          <Image src="/icons/circle_w.svg" width={22} height={22}  alt="circle" className="rotate-45 mt-2"/>
        </div>
      </div>
      <h2 className={`mt-2 font-[100] text-white/60 ${poppins.className}`}>
        IN PRODUCTION
      </h2>
      <h1 className={`font-[200] ${poppins.className} text-4xl text-white/70`}>
        SHIPS IN <span className="font-custom font-[600] text-white">Q2</span>
      </h1>
      <h1  className="font-custom font-[600] text-[3.5rem] text-white">2024</h1>
      <div className="w-32 h-12 my-2 rounded-[25px] border-white/70 border flex items-center justify-center">
        <h4>White <span className={`font-[100] text-white/40 ${poppins.className}} `}>(tricky)</span></h4>
      </div>
      <div className="mt-2">
        <h3 className={`font-[100] text-white/40 ${poppins.className}} `}>PRICE</h3>
        <div className="flex gap-4 items-center ">
            <h1 className="font-custom font-[600] text-white text-3xl">$139<span className="text-white/40">.00</span></h1>
            <div className="w-[7rem] font-[600] text-lg h-12 rounded-[25px] bg-white text-black p-2 flex items-center justify-center">
                Pre Order
            </div>
        </div>
      </div>
    </div>
  );
}
