'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Banner from '../Comman/Banner';
import Skills from '../Comman/Skills';
import Contact from '../Comman/Contact';

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollWrapper() {
    const containerRef = useRef(null);
    const sectionOneRef = useRef(null);
    const sectionTwoRef = useRef(null);
    const sectionThreeRef = useRef(null);

    useEffect(() => {
        const sections = [sectionOneRef.current, sectionTwoRef.current, sectionThreeRef.current];

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                end: () => "+=" + containerRef.current.offsetWidth,
            },
        });
    }, []);

    return (
        <div className="overflow-hidden">
            <div
                ref={containerRef}
                className="flex w-[300vw] h-[90vh]"
            >
               
            </div>
        </div>
    );
}
