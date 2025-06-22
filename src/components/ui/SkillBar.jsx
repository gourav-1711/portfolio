"use client";
import React from "react";

export default function SkillBar({ name, percentage }) {
  return (
    <div className="w-full mb-4 py-5">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-foreground uppercase">{name}</span>
        <span className="text-sm font-medium text-foreground">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-800/70 rounded-full h-3">
        <div
          className="h-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
