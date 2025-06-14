"use client";
import React, { useEffect, useRef } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { projects } from "../project";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Briefcase,
  Brain,
  NotebookPen,
  Phone,
  User,
  Menu,
  LinkedinIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function MobileNavigation() {
  const router = useRouter();

  const scrollToSection = (sectionId) => {
    // if(router.pathname !== "/") {
    //   router.push("/")
    //   scroll:false
    // }
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
          className={
            "bg-background/40 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-400  shadow-xl rounded-md flex justify-center items-center w-fit "
          }
        >
          <div className="grid grid-cols-1 gap-1 xsm:gap-2 w-fit">
            {/* about */}
            <Link
              href="/#about"
              onClick={() => scrollToSection("about")}
              className="cursor-pointer hover:bg-background/50 hover:text-foreground rounded-full p-2 flex flex-col lg:flex-row items-center gap-2 justify-center text-sm card "
            >
             
              <span className="text-foreground">
                <User size={18} />
              </span>
              <span className="text-foreground ">About</span>
            </Link>

            {/* skills */}
            <Link
              href="/#skills"
              onClick={() => scrollToSection("skills")}
              className="cursor-pointer hover:bg-background/50 hover:text-foreground rounded-full p-2 flex flex-col lg:flex-row items-center gap-2 justify-center text-sm card"
            >
             
              <span className="text-foreground">
                <NotebookPen size={18} />
              </span>
              <span className="text-foreground ">Skills</span>
            </Link>
            {/* projects */}
            <Link
              href="/projects"
              className="cursor-pointer hover:bg-background/50 hover:text-foreground rounded-full p-2 flex flex-col lg:flex-row items-center gap-2 justify-evenly lg:justify-center text-sm card"
            >
             
              <span className="text-foreground">
                <Briefcase size={18} />
              </span>
              <span className="text-foreground ">Projects</span>
            </Link>
            {/* contact */}
            <Link
              href="/#contact"
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer hover:bg-background/50 hover:text-foreground rounded-full p-2 flex flex-col lg:flex-row items-center gap-2 justify-center text-sm card"
            >
             
              <span className="text-foreground">
                <Phone size={18} />
              </span>
              <span className="text-foreground ">Contact</span>
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

                className="rounded-full bg-transparent p-1 sm:p-2 h-auto hover:bg-background/50 click hover:text-foreground duration-200 flex flex-col justify-center items-center"
              >
                <LinkedinIcon size={20} className="" />
                <span className="text-foreground text-sm ">Linkedin</span>
              </div>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
