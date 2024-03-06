import Image from "next/image";

export default function Hero() {
  return (
    <>
    <div className="w-full h-full overflow-hidden relative">
        <Image 
        src="/images/cal_2.jpg" 
         fill={true}  alt="hero" 
         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
         className="object-contain"/>
    </div>
    </>
  )
}
