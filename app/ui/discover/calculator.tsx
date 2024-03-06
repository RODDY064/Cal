"use client";

import Image from "next/image";

export default function Calculator() {
  return (
    <div className="w-full h-[80%] relative flex items-center justify-center">
      <Image
        src="/images/cal_1.png"
        fill={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt="calculator"
        className="object-contain"
      />
    </div>
  );
}
