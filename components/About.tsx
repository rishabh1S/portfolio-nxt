"use client";

import React from "react";
import { Skills } from ".";
import { useRouter } from "next/navigation";
import { MdArrowOutward } from "react-icons/md";

const About = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen w-screen overflow-hidden">
      <div className="py-16 sm:px-48 px-4">
        <div className="flex flex-col gap-8 sm:gap-20">
          <h1 className="sm:text-7xl text-[32px] font-medium tracking-tighter sm:px-4">
            ‘Every great design begins with an even better story’
          </h1>
          <div className="sm:w-4/5 self-end text-xl flex flex-col gap-3 text-justify">
            <h2 className="text-base sm:text-xl">
              I’m Rishabh Singh, a web developer fueled by a genuine passion for
              full-stack web development and design. I earned my Bachelor’s
              degree in Computer Science and Engineering from{" "}
              <a
                href="https://mituniversity.ac.in/"
                className="text-violet-700 hover:underline font-medium tracking-tight"
              >
                MIT ADT University.
              </a>{" "}
              My career goals are centered around translating my creativity into
              top-notch software and creating engaging user experiences.
            </h2>
            <h2 className="text-base sm:text-xl">
              Beyond the digital landscape, I find joy in real-world activities
              like chess, cricket, and indulging in a good movie. When I’m not
              coding, you’ll likely catch me enjoying the beats of modern rock
              and pop music.
            </h2>
          </div>
          <button
            onClick={() => router.push("/resume")}
            className="flex sm:self-end gap-3 items-center justify-center sm:w-fit h-fit py-4 px-6 rounded-full border border-black dark:border-white hover:bg-black/[0.2] dark:hover:bg-white/[0.2] transition-all ease-in-out"
          >
            <h1 className="text-xl sm:text-2xl tracking-tighter uppercase">
              Grab my Resume
            </h1>
            <MdArrowOutward size={28} />
          </button>
        </div>
        <Skills />
      </div>
    </div>
  );
};

export default About;
