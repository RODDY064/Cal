"use client";

const Links:Array<{ name:string, link:string}> = [
    {
        name:"Home",
        link:"/"
    },
    {
        name:"Keyboards",
        link:"/keyboards"
    },
    {
        name:'Accessories',
        link:'/accessories'
    },
    {
        name:'Shop',
        link:'/shop'
    },
    {
        name:"Support",
        link:'/support'
    }

]

import Link from "next/link";
import Logo from "./logo";

export default function Nav() {
  return (
    <div className="absolute flex justify-between items-center w-[92%] ">
      <div className="w-full min-h-14 p-4  bg-cream/80 rounded-[25px] flex items-center justify-between">
         <Logo/>
         <div className="flex items-center gap-6 md:gap-[2rem]">
            {Links.map((item)=>(
             <Link href={item.link} key={item.name} className="font-[600] hidden md:block">{item.name}</Link>
            ))}
         </div>
         <div className="opacity-0 hidden md:block">m</div>
      </div>
      <div className="ml-4">hello</div>
    </div>
  );
}


