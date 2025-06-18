"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function page() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <div className="container">
        <h1 className="text-4xl font-bold text-center pb-10">Projects</h1>
        <div data-aos="fade-up" data-aos-durartion="1200" className="">
          <FocusCardsDemo />
        </div>
      </div>
    </>
  );
}
import { FocusCards } from "@/components/ui/focus-cards";

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
      title: "ADMIN PANEL 2",
      src: "/img/projects/admin-panel (2)-main.png",
      link: "https://admin-panel-9tak.vercel.app/"
    },
    {
      id: 3,
      title: "ADMIN PANEL 3",
      src: "/img/projects/admin-panel (2)-main.png",
      link: "https://admin-panel-9tak.vercel.app/"
    },
    {
      id: 4,
      title: "ADMIN PANEL 4 ",
      src: "/img/projects/admin-panel (2)-main.png",
      link: "https://admin-panel-9tak.vercel.app/"
    },
    {
      id: 5,
      title: "ADMIN PANEL 5",
      src: "/img/projects/admin-panel (2)-main.png",
      link: "https://admin-panel-9tak.vercel.app/"
    },
    {
      id: 6,
      title: "ADMIN PANEL 6",
      src: "/img/projects/admin-panel (2)-main.png",
      link: "https://admin-panel-9tak.vercel.app/"
    },
  ];

  return <FocusCards cards={cards} />;
}
