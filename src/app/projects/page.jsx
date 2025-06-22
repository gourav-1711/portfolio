"use client";
import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FocusCards } from "@/components/ui/focus-cards";


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
      x: -scrollLength -300 ,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top 16%',
        // end: () => `+=${totalWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        markers:true,
      },
    });
  }, [])


  return (
    <>
    <div className="bg-black container block md:hidden">
            <h3 className="main-title ">My Projects</h3>
          </div>
      <div className="container grid md:grid-cols-[25%_auto]   overflow-hidden ">
        <div className="text-4xl font-bold text-center hidden md:block pb-10 h-[50vh] md:h-screen "> 
          <div className="bg-black">
            <h3 className="main-title ">My Projects</h3>
          </div>
        </div>
        <div ref={sectionRef}  className="horizontal-section h-screen ">
          <div ref={horizontalRef} className="horizontal-container  w-max h-full">
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
