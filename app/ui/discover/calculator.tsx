"use client"

import Image from "next/image"

export default function Calculator() {
  return (
    <div className="w-full h-[80%] relative flex items-center justify-center">
      <Image src="/images/cal_1.png" fill={true} alt="calculator" className="object-contain"/>
    </div>
  )
}
