"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Contact = () => {
  const router = useRouter();
  return (
    <div className="w-screen overflow-hidden">
      <div className="sm:py-28 py-16 sm:pl-20 px-4">
        <div className="flex flex-col gap-12 sm:gap-20">
          <div className="flex flex-col gap-6 sm:gap-10">
            <h1 className="text-center text-4xl sm:text-[110px] sm:leading-[100px] tracking-tight font-medium break-words">
              Communication matters to start good things
            </h1>
            <h2 className="text-center text-lg sm:text-xl tracking-tight sm:mx-48">
              I’m currently open to freelance opportunities globally. Feel free
              to reach out if you’re interested in collaborating on future
              projects or just want to have a casual chat.
            </h2>
          </div>
          <button
            onClick={() => router.push("/contact")}
            className="flex justify-center items-center gap-5 sm:mx-48 py-2 sm:py-8 rounded-full border border-black dark:border-white hover:bg-black/[0.2] dark:hover:bg-white/[0.2] transition-all ease-in-out"
          >
            <h1 className="text-xl sm:text-4xl uppercase tracking-tighter">
              Let’s connect
            </h1>
            <MdArrowOutward size={48} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
