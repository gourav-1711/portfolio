import { LampContainer } from "@/components/ui/lamp";
import React from "react";
import { motion } from "motion/react";
export default function Footer() {
  return (
    <div className="max-w-[100%] bg-gray-900">
      <div className="container border">
        <div className="w-[50%] mx-auto justify-center items-center grid grid-cols-1 text-background font-medium md:grid-cols-2 lg:grid-cols-4">
          <div className="text-2xl">Home</div>
          <div className="text-2xl">About</div>
          <div className="text-2xl">Skills</div>
          <div className="text-2xl">Contact</div>
        </div>
      </div>
      
    </div>
  );
}
