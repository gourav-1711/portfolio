"use client";
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FocusCards } from "@/components/ui/focus-cards";
import { ArrowRight } from "lucide-react";

export default function page() {
  useEffect(() => {
    // aos scrolls
    AOS.init({
      once: true,
    });

    // gsap
    gsap.registerPlugin(ScrollTrigger);

    const text = document.querySelector(".rightText");
    console.log(text);

    gsap.from(text, {
      x: -80,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    // Pin the base section
    gsap.fromTo(
      text,
      {
        x: 80,
        y: 10,
        opacity: 1,
      },
      {
        x: 0, // move right by 100px
        y: -15,
        opacity: 0,
        scrollTrigger: {
          trigger: text,
          start: "top 17%", // trigger when top of element reaches 85% of viewport height
          end: "top top",
          scrub: true, // smooth animation tied to scroll
          markers: true, // optional, for debugging
        },
      }
    );
  }, []);

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
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top 16%",
        // end: () => `+=${totalWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        markers: false,
      },
    });
  }, []);

  return (
    <>
      <div className=" w-[95%] md:w-full mx-auto    rounded-2xl mb-5  ">
        <div className="text-4xl font-bold text-center   ">
          <div className=" my-2 md:my-5 py-1 md:py-3 max-w-[1200px] mx-auto">
            <h3 className=" flex items-center  rightText">
              <span className=" text-[8vw] sm:text-[6vw] md:text-[5vw]">
                My WEB Projects
              </span>
              <ArrowRight
                size={50}
                strokeWidth={4.75}
                absoluteStrokeWidth
                className="mt-1 text-[8vw] sm:text-[6vw] md:text-[5vw]"
              />
            </h3>
          </div>
        </div>
        <div
          ref={sectionRef}
          className="horizontal-section h-screen overflow-hidden ps-10 flex items-center snap-x snap-mandatory  "
        >
          <div
            ref={horizontalRef}
            className="horizontal-container  w-max h-full flex items-start  "
          >
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
      link: "https://admin-panel-9tak.vercel.app/",
    },
    {
      id: 2,
      title: "Blinkit Clone",
      src: "/img/projects/blinkit-main.png",
      link: "https://blinkit-lake.vercel.app/",
    },
    {
      id: 3,
      title: "Spotify Design Clone",
      src: "/img/projects/spotify-main.png",
      link: "https://spotify-ten-opal-97.vercel.app/",
    },
    {
      id: 4,
      title: "React CURD Api Method ",
      src: "/img/projects/react-form-api-main.png",
      link: "https://react-form-data-hazel.vercel.app/",
    },
  ];

  return <FocusCards cards={cards} />;
}
