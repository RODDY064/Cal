
import { poppins } from "../fonts/font"
import Image from "next/image"

export default function Words() {
  return (
    <div className="flex items-center flex-col md:flex-row md:justify-between md:px-12 xl:px-10 ">
       <Image src="/icons/square.svg" width={30} height={30} alt="square" className="rotate-12 hidden md:block"/>
       <div className="flex flex-col items-center">
        <div className="flex gap-2 items-center">
        <Image src="/icons/x.svg" width={30} height={30} alt="x" className="rotate-[20deg] "/>
        <h1
         className={`font-[200] text-[1.6rem] text-black/60 pt-1 md:pt-0  xl:text-[4rem] tracking-tighter ${poppins.className}  text-black`}>
                LET'S DISCOVER THE
        </h1>
        <Image src="/icons/circle.svg" width={30} height={30} alt="circle" className="rotate-[-90deg]"/>
        </div>
        <h1 className="font-[600] text-4xl lg:text-6xl tracking-tighter ">FIGMA CREATOR MICRO</h1>
       </div>
       <Image src="/icons/x.svg" width={30} height={30} alt="x" className="rotate-[25deg] hidden md:block"/>
    </div>
  )
}
