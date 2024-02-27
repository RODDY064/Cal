
import Image from "next/image";
import { poppins } from "./ui/fonts/font";
import AnimatedText from "./ui/animatedText/animatedText";
import Hero from "./ui/hero/hero";
import Discover from "./ui/discover/discover";
import { Parallax } from "react-scroll-parallax";
import ParallaxDiv from "./ui/parallax/parallax";


export default function Home() {

  return (
    <>
    
        <main className="flex flex-col items-center  py-[4rem]  h-screen md:px-10 xl:px-0">
          <div className="w-full h-[90%] flex flex-col md:items-center  sm:flex-row">
            <div className="w-full h-full md:h-[60%]  lg:justify-normal lg:h-full flex-shrink md:w-[50%] md:flex-none p-2 relative">
              <Hero />
            </div>
            <div className="w-full h-full flex shrink md:justify-center md:shrink-0 flex-col  md:flex-none md:w-[50%] py-4 md:py-[6rem]">
              <div className="flex gap-4 text-base  items-end">
                <h1
                  className={`font-[200] tracking-tighter text-black/60 text-[3rem]   xl:text-[4rem] ${poppins.className}`}>
                  BIG
                </h1>
                <div>
                  <Image
                    src="/icons/command.svg"
                    width={25}
                    height={25}
                    alt="command"
                    className="pt-2"
                  />
                </div>
              </div>
              <h1
                className={`font-[200] text-[3rem] pt-1 md:pt-0  shrink xl:text-[4.1rem] tracking-tighter ${poppins.className}  text-black`}>
                SHORTCUTS
              </h1>
              <AnimatedText />
            </div>
          </div>
        </main>
      <ParallaxDiv/>
    </>
  );
}
