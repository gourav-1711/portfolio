"use client";
import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FocusCards } from "@/components/ui/focus-cards";
import { ArrowBigRight, ArrowRight, ArrowRightIcon } from "lucide-react";


export default function page() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Pin the base section
    ScrollTrigger.create({
      trigger: ".pinned",
      start: "top 15%",
      end: "+=300%", // pin duration for 3 sections
      pin: true,
      pinSpacing: false,
    });
  }, [])


  const sectionRef = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const element = sectionRef.current;
    const horizontal = horizontalRef.current;

    const totalWidth = horizontal.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollLength = totalWidth - viewportWidth;

    console.log(horizontal.scrollWidth);
    if (!horizontal || !element) return;

    const totalScroll = horizontal.scrollWidth - window.innerWidth;

    gsap.to(horizontal, {
      x: -scrollLength - 300,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top 16%',
        // end: () => `+=${totalWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        markers: true,
      },
    });
  }, [])


  return (
    <>
      <div className=" fixed top-0 left-0 -z-[1] w-full h-screen bg-white">
        
      </div>

      <div className="max-w-[1200px] w-[95%] md:w-full mx-auto    overflow-hidden bg-black rounded-2xl mb-5  ">
        <div className="text-4xl font-bold text-center   ">
          <div className="">
            <h3 className="main-title flex items-center "><span>My Projects</span><span><ArrowRightIcon color="white" /></span></h3>
          </div>
        </div>
        <div ref={sectionRef} className="horizontal-section h-screen overflow-hidden ps-10 flex items-center ">
          <div ref={horizontalRef} className="horizontal-container  w-max h-full flex items-center">
            <FocusCardsDemo />
          </div>

        </div>
      </div>
    </>
  );
}

export function FocusCardsDemo() {
  const cards = [
    {
      id: 1,
      title: "ADMIN PANEL ",
      src: "/img/projects/admin-panel (2)-main.png",
      link: "https://admin-panel-9tak.vercel.app/"
    },
    {
      id: 2,
      title: "Blinkit Clone",
      src: "/img/projects/blinkit-main.png",
      link: "https://blinkit-lake.vercel.app/"
    },
    {
      id: 3,
      title: "Spotify Design Clone",
      src: "/img/projects/spotify-main.png",
      link: "https://spotify-ten-opal-97.vercel.app/"
    },
    {
      id: 4,
      title: "React CURD Api Method ",
      src: "/img/projects/react-form-api-main.png",
      link: "https://react-form-data-hazel.vercel.app/"
    },

  ];

  return <FocusCards cards={cards} />;
}
