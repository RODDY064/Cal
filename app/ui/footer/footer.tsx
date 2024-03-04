import Image from "next/image";
import Logo from "../logo";

export default function Footer() {
  const social_links: Array<{ name: string; icon: string }> = [
    {
      name: "twitter",
      icon: "/icons/twitter.svg",
    },
    {
      name: "instagram",
      icon: "/icons/instagram.svg",
    },
    {
      name: "tiktok",
      icon: "/icons/tiktok.svg",
    },
  ];

  return (
    <div className="w-full pb-10  mt-[10rem] sm:mt-[30rem]  h-screen px-4 sm:px-14 flex flex-col items-center justify-end">
      <div className="w-full min-h-[20rem] flex flex-col sm:flex-row sm:justify-between gap-4">
        <div className="w-full">
          <div className="flex items-baseline gap-2">
            <h1 className="text-2xl font-[600] font-custom">Cal</h1>
            <Logo />
          </div>
          <h2 className="text-black/40 font-[100] ">
            Your best electronic calculator for all projects!.
          </h2>
          <div className="my-6">
            <h2 className="font-[600] text-xl ">Social Media</h2>
            <div className="flex gap-4 my-2">
              {social_links.map((item) => (
                <div
                  key={item.name}
                  className="size-12 rounded-full bg-black flex items-center justify-center cursor-pointer">
                  <Image
                    src={item.icon}
                    width={25}
                    height={25}
                    alt={item.name}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20 sm:block hidden">
            <h2 className="text-black/30 font-[200] text-sm">
              2024 &copy; RODDY064. All rights reserved
            </h2>
          </div>
        </div>
        <div className="w-full mt-2 flex flex-col sm:flex-row gap-2">
          <div className="w-full grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-[600]">Products</h3>
              <ul className="my-2">
                {products.map((item) => (
                  <li key={item} className="text-black/70 cursor-pointer hover:text-amber-400">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-[600]">Company</h3>
              <ul className="my-2">
                {company.map((item) => (
                  <li key={item} className="text-black/70 cursor-pointer hover:text-amber-400">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full">
            <h3 className="text-lg font-[600] text-black/70">
              Join the waitlist
            </h3>
            <div className="w-full h-12 flex  bg-cream rounded-[25px] border border-black/30 relative p-1">
              <input
                className="w-[75%] bg-transparent h-full focus:outline-none p-2"
                placeholder="enter your email"
              ></input>
              <div className="w-[25%] h-full bg-black rounded-[20px] flex items-center justify-center cursor-pointer">
                <h4 className="text-sm text-white font-[400]">Submit</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const products: string[] = [
  "Keyboards",
  "Mice",
  "Headsets",
  "Monitors",
  "Accessories",
];

const company: string[] = ["Supports", "Customer", "About", "Terms", "Privacy"];
