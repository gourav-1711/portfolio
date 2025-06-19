import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { ArrowRight } from "lucide-react";

export default function Skills() {

  useEffect(() => {
    AOS.init({
      once: true,
    });
  });

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="1100"
        className=" container  scrollHide overflow-hidden"
        id="skills"
      >
        {/* <SkillsCard /> */}
        <div className="bg-white rounded-xl">
          <div
            data-aos="fade-up"
            data-aos-duration="1200"
            className="flex  items-center justify-center"
          >
            <h2 className="text-4xl font-bold pt-3">My Skills</h2>
            <span>
              <ArrowRight strokeWidth={2.25} size={36} />
            </span>
          </div>
          <AnimatedTestimonialsDemo className="" />
        </div>
      </div>
    </>
  );
}

export function AnimatedTestimonialsDemo() {
  const testimonial = [
    {
      quote:
        "I have hands-on experience with Next.js for frontend development, using it to build fast, SEO-friendly, and scalable web applications.",
      name: "Next.Js",
      designation: "A FullStack React FrameWork",
      src: "/img/skills/nextjs.svg",
      invert: true,
    },
    {
      quote:
        "Proficient in React for building dynamic and responsive user interfaces using components, hooks, and state management.",
      name: "React Js",
      designation: "A JavaScript Library",
      src: "/img/skills/React.png",
    },
    {
      quote:
        "Strong understanding of JavaScript, including ES6+, DOM manipulation, and asynchronous programming.",
      name: "Java Script",
      designation: "A Programming Language Built To Make Website",
      src: "/img/skills/Java-Script.png",
    },
    {
      quote:
        "Advanced in Tailwind CSS, skilled at building fully responsive and customizable UI with utility-first approach.",
      name: "Tailwind",
      designation: "A Utility Css Framwork",
      src: "/img/skills/Tailwind.png",
    },
    {
      quote:
        "Proficient in Bootstrap for creating responsive and mobile-first web designs efficiently.",
      name: "Bootstrap",
      designation: "A HTML , Css , JS Library",
      src: "/img/skills/bootstrap.png",
    },
    {
      quote:
        "Advanced in CSS, with in-depth knowledge of layouts , animations, transitions, and creating responsive, cross-browser compatible designs.",
      name: "Css",
      designation: "CSS is a language used to style and layout web pages.",
      src: "/img/skills/CSS-Logo-PNG-Symbol-for-Web-Development-Transparent.png",
    },
    {
      quote:
        "Advanced in HTML with strong knowledge of semantic tags, accessibility, and SEO-friendly structure.",
      name: "HTML",
      designation: "HTML is used to create and structure the web.",
      src: "/img/skills/HTMl.png",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonial} />;
}
