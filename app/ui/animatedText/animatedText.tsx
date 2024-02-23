"use client";

import Image from "next/image";

export default function AnimatedText() {
  return (
    <>
      <div className="flex gap-2 items-center">
        <div className="flex gap-2 items-center ">
          <Image
            src="/icons/square.svg"
            width={21}
            height={21}
            alt="square"
            className="rotate-12"
          />
          <Image
            src="/icons/circle.svg"
            width={26}
            height={26}
            alt="circle"
            className="rotate-45 pt-2"
          />
        </div>
        <div>
          <h1 className="font-[600] text-6xl lg:text-8xl">L<span>0</span>UDER</h1>
        </div>
      </div>
  
    <div>
        <h1 className="font-[600] text-6xl lg:text-8xl tracking-tighter">WORKFLOW.</h1>
    </div>
    </>
  );
}
