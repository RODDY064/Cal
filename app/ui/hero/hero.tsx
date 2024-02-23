import Image from "next/image";

export default function Hero() {
  return (
    <>
    <div className="w-full h-full overflow-hidden relative">
        <Image src="/images/cal_2.jpg"  fill={true}  alt="hero" className="object-contain"/>
    </div>
    </>
  )
}
