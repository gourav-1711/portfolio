"use client";
import React, {   useState } from "react";
import { cn } from "@/lib/utils";

import Image from "next/image";
export const Card = React.memo(({ card, index, hovered, setHovered }) => (


  
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-lg relative  overflow-hidden min-w-[100vw] sm:min-w-[90vw] md:min-w-[40vw] h-[80vh] flex-shrink-0 transition-all duration-300 ease-out flex justify-center ",
      hovered !== null && hovered !== index && "blur-[4px] scale-[0.90] ",
      hovered !== null && hovered == index && " scale-[1.01] saturate-[1.05] z-[99999]"
    )}
  >
   
    <Image
      width={400}
      height={400}
      src={card.src}
      alt={card.title}
      className=" object-fill absolute inset-0 h-full w-full object-top-left rounded-lg"
    />
    <div
      className={`block lg:hidden absolute top-[40%] left-[40%] bg-background/50 font-bold shadow-2xl rounded-full px-2 py-[1px] ${
        hovered === index ? "opacity-0 " : "opacity-100 "
      } `}
    >
      Click To View
    </div>
    <div
      className={cn(
        "absolute inset-0 bg-black/50 flex flex-col gap-2.5 justify-end py-8 px-4 transition-opacity duration-300",
        hovered === index ? "opacity-100 visible" : "opacity-0 invisible"
      )}
    >
      <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-100">
        {card.title}
      </div>
      <div className="">
        <button
          onClick={() => window.open("https://admin-panel-9tak.vercel.app/")}
          className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-md font-semibold leading-6  text-white inline-block"
        >
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
            <span>VIEW</span>
            <svg
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
      </div>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex gap-10  mx-auto space-y-3 md:px-8 w-full h-full ">
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
