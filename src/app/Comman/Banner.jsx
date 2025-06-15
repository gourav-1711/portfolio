"use client";
import React, { useEffect, useRef } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowBigDown, ArrowDown } from "lucide-react";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import Image from "next/image";

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
        className="w-full mb-10 mt-4 max-w-[1200px]   mx-auto "
      >
        <CardContainer className=" inter-var w-full h-full">
          <CardBody className="block bg-gray-50 relative group/card   border-black/[0.1] h-auto w-full rounded-xl p-6 border  ">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-evenly  relative h-auto w-full ">
              <CardItem
                data-aos="fade-right"
                className="text-xl font-bold text-black px-5 md:px-16"
              >
                {/* name */}
                <div className="">
                  <h2 className="text-5xl md:text-7xl text-left flex gap-3">
                    <span className="">Hi</span>
                    <span>I'm </span>
                    <span
                      data-aos="fade-down"
                      data-aos-duration="1000"
                      className="from-blue-300 via-blue-400 to-blue-600  bg-gradient-to-b bg-clip-text text-transparent"
                    >
                      Gaurav
                    </span>
                  </h2>
                </div>
                {/* developer */}
                <div className="mt-4">
                  <h4 className="heading flex items-center  font-medium gap-1 md:gap-2 text-5xl">
                    <span
                      data-aos="fade-right"
                      data-aos-duration="1100"
                      className=" text-[29px] md:text-4xl"
                    >
                      A Frontend
                    </span>
                    <span
                      data-aos="fade-left"
                      data-aos-duration="1100"
                      className="text-primary ms-2 linear-wipe  text-[29px] md:text-4xl"
                    >
                      Developer
                    </span>
                  </h4>
                </div>

                {/* skilled in */}
                <div className="flex flex-col  rounded-md mt-4  justify-center  gap-3 ">
                  <h6 className="flex items-center ">
                    <span
                      data-aos="fade-up-left"
                      data-aos-duration="1200"
                      className="text-3xl md:text-4xl from-gray-600 via-black to-blue-600 bg-gradient-to-b bg-clip-text text-transparent"
                    >
                      Skilled In
                      
                    </span>
                    <span>
                      <ArrowDown size={40} />
                    </span>
                  </h6>
                  <div
                    className=""
                    data-aos="fade-up-right"
                    data-aos-duration="1200"
                  >
                    <ContainerTextFlip
                      className=" card "
                      words={["Next.js", "React", "Tailwind", "Animations"]}
                    ></ContainerTextFlip>
                  </div>
                </div>
              </CardItem>

              <CardItem translateZ={50} className="w-full mt-4 group ">
                <div className="relative ">
                  <div className="absolute  "></div>
                  <div className="relative flex  items-center justify-center rounded-lg">
                    <Image
                      data-aos="zoom-in-up"
                      data-aos-duration="1500"
                      src="/img/banner.webp"
                      height="1000"
                      width="1000"
                      className=" w-[80%] md:w-[70%] object-cover rounded-full group-hover:shadow-xl shadow-2xl    "
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
