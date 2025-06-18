import React from "react";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="max-w-[100%] bg-gray-900">
      <div className="container ">
        <div className="w-[100%] sm:w-[80%] md:w-[60%] lg:w-[40%] mx-auto justify-center items-center grid text-background font-medium grid-cols-4 gap-2">
          <div className="text-md click"><Link href={"/"}>Home</Link></div>
          <div className="text-md click"><Link href={"/#about"}>About</Link></div>
          <div className="text-md click"><Link href={"/#skills"}>Skills</Link></div>
          <div className="text-md click"><Link href={"/#contact"}>Contact</Link></div>
        </div>
      </div>
      <div className="border-t w-full pb-3"></div>
      
      
    </div>
  );
}
