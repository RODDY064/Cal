"use client";

const Links:Array<{ name:string, link:string}> = [
    {
        name:"Home",
        link:"/"
    },
    {
        name:"Keyboards",
        link:"/"
    },
    {
        name:'Accessories',
        link:'/'
    },
    {
        name:'Shop',
        link:'/'
    },
    {
        name:"Support",
        link:'/'
    }

]

import Link from "next/link";
import Logo from "./logo";
import Image from "next/image";

export default function Nav() {
  return (
    <div id="nav" className="fixed top-0  flex justify-between items-center w-[95%] z-20 bg-white/20 pt-2 px-3 sm:pt-4 lg:pt-6  backdrop-blur-xl">
      <div className="w-full min-h-14 p-4  bg-cream/80 rounded-[25px] flex items-center justify-between">
         <Logo/>
         <div className="flex items-center gap-6 md:gap-[2rem]">
            {Links.map((item)=>(
             <Link href={item.link} key={item.name} className="font-[600] hidden md:block">{item.name}</Link>
            ))}
         </div>
         <div className="opacity-0 hidden md:block">m</div>
      </div>
      <div className="ml-4">
        <div className="w-12 h-12 rounded-full bg-amber-200 cursor-pointer flex items-center justify-center">
          <Image src="/icons/store.svg" width={20} height={20} alt="store" />
        </div>
      </div>
    </div>
  );
}


