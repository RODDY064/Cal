import Image from "next/image";

export default function Logo() {
  return (
    <>
     <div className="flex gap-[2px] items-center justify-center">
        <Image src="/icons/x.svg" width={12} height={12} alt="x" className="rotate-12"/>
        <Image src="/icons/square.svg" width={12} height={12} alt="square" className="rotate-12"/>
        <Image src="/icons/circle.svg" width={13} height={13} alt="circle" className="rotate-45"/>
     </div>
    </>
  )
}
