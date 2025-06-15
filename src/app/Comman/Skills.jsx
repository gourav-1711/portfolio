import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import {SkillData} from "../SkillData"
import Image from "next/image";


export default function Skills() {
  console.log(SkillData);
  
  useEffect(()=>{
    AOS.init({
      once:true
    })
  })

  return (
    <>
      <div className=" container mx-auto" id="skills">
        <div className="grid grid-cols-1 md:grid-cols-2 py-16">
          <div
            data-aos="fade-up-right"
            className="flex  items-center justify-center order-2"
          >
            <h2 className="text-4xl font-bold">Skills</h2>
            <span>
              <ArrowRight strokeWidth={2.25} size={36} />
            </span>
          </div>
          <div className=" order-1">
            <Swiper
              effect={"cards"}
              navigation={false}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              {
                SkillData.map((v,i)=>{
                  return(
                    <SwiperSlide className="">
                      <div style={{background:`${v.color}`}}>
                        <Image 
                        width={100}
                        height={100}
                        src={v.img}
                        alt="skills"
                        />
                      </div>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

const skillCard = () => {
  return <></>;
};
