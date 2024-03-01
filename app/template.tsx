"use client";

import { useEffect } from "react";
import { animatePageIn } from "@/utils/gsap-animations";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <>
      <div
        id="transition-element"
        className="w-screen min-h-screen bg-violet-100 dark:bg-zinc-900 z-[999] fixed top-0 left-0"
      />
      {children}
    </>
  );
}
