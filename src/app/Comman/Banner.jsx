"use client";
import React, { useEffect, useRef } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowBigDown, ArrowDown } from "lucide-react";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";

export default function Banner() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      <div
        data-aos="fade-up"
        id="about"
        className="w-full mb-10 max-w-[95vw] mx-auto "
      >
        <CardContainer className=" inter-var w-full">
          <CardBody className="block bg-gray-50 relative group/card   border-black/[0.1] h-auto w-full rounded-xl p-6 border  ">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-evenly  relative h-auto w-full ">
              <CardItem className="text-xl font-bold text-neutral-600 dark:text-white px-16">
                <div className="">
                  <h2 className="text-4xl flex gap-3">
                    <span className="">Hi</span>
                    <span>I'm </span>
                    <span >Gaurav</span>
                  </h2>
                </div>

                <div className="">
                  <h4
                    data-aos="fade-right"
                    className="heading flex items-center justify-center gap-5 "
                  >
                    <span>
                      A Frontend
                      <span className="text-primary ms-2">Developer</span>
                    </span>
                  </h4>
                </div>

                <div className="flex flex-col  rounded-md mt-4 p-4 justify-center items-center gap-3 ">
                  <h6 className="flex items-center ">
                    <span className="text-2xl from-gray-600 via-black to-blue-600 bg-gradient-to-b bg-clip-text text-transparent">Skilled In</span>
                    <span>
                      <ArrowDown />
                    </span>
                  </h6>
                  <ContainerTextFlip
                    className=" card "
                    words={["Next.js", "React", "Tailwind", "Animations"]}
                  ></ContainerTextFlip>
                </div>
              </CardItem>

              <CardItem className="w-full mt-4 group ">
                <div className="relative ">
                  <div className="absolute  "></div>
                  <div className="relative flex  items-center justify-center rounded-lg">
                    <img
                      src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      height="1000"
                      width="1000"
                      className=" w-full object-cover rounded-xl group-hover:shadow-xl shadow-2xl shadow-gradient   "
                      alt="thumbnail"
                    />
                  </div>
                </div>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </>
  );
}
