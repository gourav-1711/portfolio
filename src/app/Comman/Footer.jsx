"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Footer() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <CardSpotlight>
      <div className="max-w-[100%] ">
        <div className="container overflow-hidden">
          <div className="w-[100%] sm:w-[80%] md:w-[60%] lg:w-[40%] mx-auto justify-center items-center grid text-background font-medium grid-cols-4 gap-2">
            <div
              data-aos="fade-down"
              data-aos-duration="1100"
              className="text-md click z-[55]"
            >
              <Link
                className="hover:bg-gray-600/50 duration-150 rounded-2xl px-3 py-1"
                href={"/"}
              >
                Home
              </Link>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1150"
              className="text-md click z-[55]"
            >
              <Link
                className="hover:bg-gray-600/50 duration-150 rounded-2xl px-3 py-1"
                href={"/#about"}
              >
                About
              </Link>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1200"
              className="text-md click z-[55]"
            >
              <Link
                className="hover:bg-gray-600/50 duration-150 rounded-2xl px-3 py-1"
                href={"/#skills"}
              >
                Skills
              </Link>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1250"
              className="text-md click z-[55]"
            >
              <Link
                className="hover:bg-gray-600/50 duration-150 rounded-2xl px-3 py-1"
                href={"/#contact"}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t w-full pb-3 z-[55]"></div>
        <div
          className="flex justify-center gap-4 w-[100%] sm:w-[80%] md:w-[60%] lg:w-[40%] mx-auto  items-center"
        >
          <div
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/gaurav-dadhich-92a571353/"
              );
            }}
            className="z-[55] border border-amber-50 rounded-full p-3 flex justify-center items-center "
          >
            <LinkedInLogoIcon
              fontSize={100}
              fontSizeAdjust={100}
              color="white"
              className="size-[30px] click "
            />
          </div>
          <div
            onClick={() => {
              window.open("https://github.com/gourav-1711/");
            }}
            className="z-[55] border border-amber-50 rounded-full p-3 flex justify-center items-center "
          >
            <GitHubLogoIcon
              fontSize={100}
              fontSizeAdjust={100}
              color="white"
              className="size-[30px] click "
            />
          </div>
        </div>
      </div>
    </CardSpotlight>
  );
}
