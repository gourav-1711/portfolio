"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import {
  House,
  LinkedinIcon,
} from "lucide-react";
import Navigation from "./Navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import MobileNavigation from "./MobileNavigation";

export default function Header() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <header
        data-aos="fade-down"
        className="container mx-auto sticky top-0 z-50 "
      >
        <nav
          data-aos="fade-down"
          className="sticky top-0 grid grid-cols-[20%_auto] sm:grid-cols-[15%_auto_15%] justify-between  px-4 py-1 items-center w-[99%] xsm:w-[90%] md:w-[65%] lg:w-[50%]  mx-auto rounded-full bg-background/40 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-400  shadow-xl "
        >
          {/* home */}
          <div className="border-r border-foreground  pr-2 justify-self-start">
            <Link
              href="/"
              className="hover:bg-background/50 hover:text-foreground rounded-full p-1 sm:p-2 flex items-center gap-2 justify-self-start text-sm"
            >
              <span className="text-foreground">
                <House />
              </span>
            </Link>
          </div>
          {/* navigation */}
          <div className="hidden sm:block">
          <Navigation />
          </div>
          
          

          {/* linkedIn */}
          <div className="hidden sm:block justify-self-end border-l border-foreground  pl-2 ">
            <div
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/gaurav-dadhich-92a571353/?trk=opento_sprofile_topcard"
                );
              }}
              // href={"https://www.linkedin.com/in/gaurav-dadhich-92a571353/?trk=opento_sprofile_topcard"}

              className="rounded-full bg-transparent p-1 sm:p-2 h-auto hover:bg-background/50 click hover:text-foreground duration-200"
            >
              <LinkedinIcon size={20} className="size-full" />
            </div>
          </div>

          <div className="block sm:hidden justify-self-end ">
            <MobileNavigation />
          </div>
        </nav>
      </header>
    </>
  );
}
