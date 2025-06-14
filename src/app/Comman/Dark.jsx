"use client"
import { Button } from '@/components/ui/button';
import { SunIcon, MoonIcon } from 'lucide-react';
import React, { useState } from 'react'

export default function Dark() {
    const [darkMode, setDarkMode] = useState(false);
  return (
        <div>
            <Button
            variant="ghost"
            className="p-2 h-auto rounded-full hover:bg-background/50 click hover:text-foreground border border-border"
            onClick={() => {
            const body = document.body;
            body.classList.toggle("dark");
            setDarkMode(!darkMode);
            }}
        >
            {darkMode ? <SunIcon /> : <MoonIcon />}
        </Button>
        </div>
  )
}
