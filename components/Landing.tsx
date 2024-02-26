"use client";

import React from "react";
import { Caveat } from "next/font/google";
import { useRouter } from "next/navigation";
import { WavyBackground } from "./ui";
import { MdArrowOutward } from "react-icons/md";

const caveat = Caveat({ subsets: ["latin"] });

const Landing = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen">
      <WavyBackground />
      <div className="py-28 pl-48 flex flex-col gap-14">
        <div className="relative">
          <h2
            className={`${caveat.className} absolute -top-16 -left-6 text-violet-700 text-4xl leading-7 transform origin-center -rotate-12`}
          >
            Hey, I’m <span className="block">Rishabh Singh</span>
          </h2>
          <h1 className="text-[120px] leading-[100px] tracking-tight font-medium">
            Full-Stack Explorer Unraveling the Wonders of the Code Universe.
          </h1>
        </div>
        <div className="flex justify-between">
          <button
            onClick={() => router.push("/contact")}
            className="flex self-end gap-3 items-center w-fit h-fit py-4 px-6 rounded-full border border-black dark:border-white uppercase hover:bg-black/[0.2] dark:hover:bg-white/[0.2] transition-all ease-in-out"
          >
            <h1 className="text-2xl tracking-tighter uppercase">
              Let’s connect
            </h1>
            <MdArrowOutward size={28} />
          </button>
          <h2 className="uppercase px-3 max-w-md">
            Crafting digital solutions with expertise in full stack Mern and
            Mean development, as well as mobile app using React Native, learning
            UI/UX design.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Landing;
