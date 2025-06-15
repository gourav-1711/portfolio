"use client";
import React, { useEffect, useRef } from "react";

import Link from "next/link";
import {
  Briefcase,
  NotebookPen,
  Phone,
  User,
  Menu,
  LinkedinIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function MobileNavigation() {
  const scrollToSection = (sectionId) => {
    
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          sideOffset={10}
          align={"center"}
          className={
            "bg-foreground/70 rounded-md flex justify-center items-center w-fit "
          }
        >
          <div className="grid grid-cols-1 gap-1 xsm:gap-2 w-fit">
            {/* about */}
            <Link
              href="/#about"
              onClick={() => scrollToSection("about")}
              className="cursor-pointer  text-background rounded-full p-2 flex flex-col lg:flex-row items-center gap-2 justify-center text-sm  "
            >
              <span className="">
                <User size={18} />
              </span>
              <span className=" ">About</span>
            </Link>

            {/* skills */}
            <Link
              href="/#skills"
              onClick={() => scrollToSection("skills")}
              className="cursor-pointer  text-background rounded-full p-2 flex flex-col lg:flex-row items-center gap-2 justify-center text-sm "
            >
              <span className="">
                <NotebookPen size={18} />
              </span>
              <span className=" ">Skills</span>
            </Link>
            {/* projects */}
            <Link
              href="/projects"
              className="cursor-pointer  text-background rounded-full p-2 flex flex-col lg:flex-row items-center gap-2 justify-evenly lg:justify-center text-sm "
            >
              <span className="">
                <Briefcase size={18} />
              </span>
              <span className=" ">Projects</span>
            </Link>
            {/* contact */}
            <Link
              href="/#contact"
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer  text-background rounded-full p-2 flex flex-col lg:flex-row items-center gap-2 justify-center text-sm "
            >
              <span className="">
                <Phone size={18} />
              </span>
              <span className=" ">Contact</span>
            </Link>
            {/* linkedin */}
            <div className="   ">
              <div
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/gaurav-dadhich-92a571353/?trk=opento_sprofile_topcard"
                  );
                }}
                // href={"https://www.linkedin.com/in/gaurav-dadhich-92a571353/?trk=opento_sprofile_topcard"}

                className="rounded-full  p-1 sm:p-2 h-auto  click text-background duration-200 flex flex-col justify-center items-center"
              >
                <LinkedinIcon size={20} className="" />
                <span className=" text-sm ">Linkedin</span>
              </div>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
