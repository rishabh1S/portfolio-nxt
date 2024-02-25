import { SocialIcons } from "@/utils/socials";
import { Inter } from "next/font/google";
import Link from "next/link";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

const Footer = () => {
  return (
    <div className="px-20 py-10">
      <div className="grid grid-cols-2 grid-rows-1 gap-4 h-10">
        <div className="flex">
          <div className="w-1/4" />
          <div
            className={`${inter.className} tracking-tighter w-3/4 flex flex-col text-neutral-600 dark:text-neutral-400 font-light text-sm`}
          >
            <h2 className="h-1/2">{`© ${new Date().getFullYear()} Rishabh Singh, All Rights Reserved`}</h2>
            <h2 className="h-1/2">
              Passionate enthusiast of Next.js, Expo and modern development.
            </h2>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="h-1/2 flex justify-end items-center gap-8 mr-28">
            {SocialIcons.map((SocialIcon, index) => (
              <Link
                key={index}
                href={SocialIcon.link}
                target="_blank"
                className="transition-all transform hover:scale-125 hover:text-violet-700"
              >
                <SocialIcon.icon size={22} />
              </Link>
            ))}
          </div>
          <div className="h-1/2" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
