import type { Metadata } from "next";
import "@styles/globals.css";
import Nav from "./ui/nav";
import SliderBar from "./ui/slideTracker/sliderBar";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'font-custom py-2 px-3 sm:py-4 sm:px-6 lg:px-10 lg:py-6 h-screen overflow-x-hidden w-screen relative'}>
        <Nav/>
        <SliderBar/>
        {children}
        </body>
    </html>
  );
}
