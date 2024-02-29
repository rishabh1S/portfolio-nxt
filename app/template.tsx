"use client";

import { useEffect } from "react";
import { animatePageIn } from "@/utils/gsap-animations";
import Lottie from "lottie-react";
import animationData from "../public/cube_loader.json";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <>
      <div
        id="transition-element"
        className="w-screen min-h-screen bg-neutral-100 dark:bg-neutral-900 z-[999] fixed top-0 left-0 flex justify-center items-center"
      >
        <Lottie
          animationData={animationData}
          className="flex justify-center items-center"
          loop={true}
        />
      </div>
      {children}
    </>
  );
}
