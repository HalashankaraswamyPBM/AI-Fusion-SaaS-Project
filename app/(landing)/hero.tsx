"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/land/wavy-background";
import { TypewriterEffectSmoothDemo } from "./type";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
        <main>
        <TypewriterEffectSmoothDemo/>

        </main>
      
    </WavyBackground>
  );
}
