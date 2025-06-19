"use client";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="1100"
        id="contact"
        className="container p-4 w-[100%] my-10 overflow-hidden scrollHide"
      >
        <div className="   bg-white rounded-xl p-10">
          <div
            data-aos="fade-up-right"
            data-aos-duration="1200"
            className="flex  items-center  my-3"
          >
            <h2 className="text-4xl font-bold">Contact Me</h2>
            <span>
              <ArrowRight strokeWidth={2.25} size={36} />
            </span>
          </div>
          <div className="flex justify-center">
            <div
              data-aos="fade-up-left"
              data-aos-duration="1200"
              className="bg-background p-5 rounded-md shadow-2xl w-[100%] md:w-[60%] "
            >
              <form action="">
                <div className="space-y-4">
                  <div className="relative z-0">
                    <input
                      type="text"
                      id="name"
                      className="block py-2.5 px-1 w-full text-sm text-black bg-transparent border-1 rounded-md border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer "
                      placeholder=" "
                    />
                    <label
                      htmlFor="name"
                      className="absolute text-sm text-Black font-medium duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 peer-focus:start-2 bg-white"
                    >
                      Name
                    </label>
                  </div>

                  <div className="relative z-0">
                    <input
                      type="email"
                      id="email"
                      className="block py-2.5 px-1 w-full text-sm text-black bg-transparent border-1 rounded-md border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer "
                      placeholder=" "
                    />
                    <label
                      htmlFor="email"
                      className="absolute text-sm text-Black font-medium duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 peer-focus:start-2 bg-white"
                    >
                      Email
                    </label>
                  </div>
                  <div className="relative z-0">
                    <textarea
                      type="text"
                      id="name"
                      className="block py-1.5 px-1 w-full text-sm text-black bg-transparent border-1 rounded-md border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer resize-none"
                      placeholder=" "
                    />
                    <label
                      htmlFor="name"
                      className="absolute text-sm text-Black font-medium duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 peer-focus:start-2 bg-white"
                    >
                      Message
                    </label>
                  </div>
                  <Button type="submit">Submit</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
