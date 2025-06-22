"use client";
import Banner from "./Comman/Banner";
import Contact from "./Comman/Contact";
import Skills from "./Comman/Skills";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* banner */}
      <section className="pinned">
        <Banner />
      </section>
      {/* skills */}

      <section className="overlap-section">
        <Skills />
      </section>

      <section className="overlap-section">
        <Contact />
      </section>

     
    </>
  );
}
