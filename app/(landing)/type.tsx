"use client";
import { TypewriterEffectSmooth } from "@/components/ui/land/typewriter-effect";
import Link from "next/link";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Get",
    },
    {
      text: "Better",
    },
    {
      text: "Solutions",
    },
    {
      text: "with",
    },
    {
      text: "Ai fusion",
      className: "text-pink-500 dark:text-pink-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <div>
          <Link href="/sign-in">
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        </Link>
        </div>
        <div>
          <Link href="/sign-up">
         <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
        </Link>
        </div>
       
      </div>
    </div>
  );
}
