"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import {
  Briefcase,
  NotebookPen,
  Phone,
  User,
} from "lucide-react";

export default function Navigation() {


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

  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove);
    });

    function handleMouseMove(e) {
      const rect = this.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;

      let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

      angle = (angle + 360) % 360;

      this.style.setProperty("--start", angle + 60);
    }


    
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 gap-1 xsm:gap-2 w-fit ">
        {/* about */}
        <Link 
         href="/#about"
         ref={(el) => (cardRefs.current[1] = el)}
          onClick={() => scrollToSection("about")}
          className="cursor-pointer hover:bg-background/50 hover:text-foreground rounded-full p-2 flex flex-col lg:flex-row items-center gap-2 justify-center text-sm card "
        >
          <div className="glow"></div>
          <span className="text-foreground">
            <User size={18} />
          </span>
          <span className="text-foreground ">About</span>
        </Link>

        {/* skills */}
        <Link
         href="/#skills"
         ref={(el) => (cardRefs.current[2] = el)}
          onClick={() => scrollToSection("skills")}
          className="cursor-pointer hover:bg-background/50 hover:text-foreground rounded-full p-2 flex flex-col lg:flex-row items-center gap-2 justify-center text-sm card"
        >
          <div className="glow"></div>
          <span className="text-foreground">
            <NotebookPen size={18} />
          </span>
          <span className="text-foreground ">Skills</span>
        </Link>
        {/* projects */}
        <Link
         ref={(el) => (cardRefs.current[3] = el)}
          href="/projects"
          className="cursor-pointer hover:bg-background/50 hover:text-foreground rounded-full p-2 flex flex-col lg:flex-row items-center gap-2 justify-evenly lg:justify-center text-sm card"
        >
          <div className="glow"></div>
          <span className="text-foreground">
            <Briefcase size={18} />
          </span>
          <span className="text-foreground ">Projects</span>
        </Link>
        {/* contact */}
        <Link
         href="/#contact"
         ref={(el) => (cardRefs.current[4] = el)}
          onClick={() => scrollToSection("contact")}
          className="cursor-pointer hover:bg-background/50 hover:text-foreground rounded-full p-2 flex flex-col lg:flex-row items-center gap-2 justify-center text-sm card"
        >
          <div className="glow"></div>
          <span className="text-foreground">
            <Phone size={18} />
          </span>
          <span className="text-foreground ">Contact</span>
        </Link>
      </div>
    </>
  );
}
