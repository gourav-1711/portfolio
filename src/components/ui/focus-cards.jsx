"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import AOS from "aos";
import "aos/dist/aos.css";
export const Card = React.memo(({ card, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-lg relative  overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}
  >
    <img
      data-aos="fade-up"
      data-aos-durartion="1200"
      src={card.src}
      alt={card.title}
      className="object-cover absolute inset-0"
    />
    <div
      className={`block lg:hidden absolute top-[40%] left-[40%] bg-background/50 font-bold shadow-2xl rounded-full px-2 py-[1px] ${
        hovered === index ? "opacity-0" : "opacity-100"
      } `}
    >
      Click To View
    </div>
    <div
      className={cn(
        "absolute inset-0 bg-black/50 flex flex-col gap-2.5 justify-end py-8 px-4 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
        {card.title}
      </div>
      <div className="">
        <Button>View</Button>
      </div>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
