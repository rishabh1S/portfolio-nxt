"use client";

import {
  fadeInAnimationVariantsXl,
  fadeInAnimationVariantsXr,
} from "@/utils/framer-animations";
import { SocialIcons } from "@/utils/socials";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import Link from "next/link";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

const Footer = () => {
  return (
    <div className="w-screen overflow-hidden">
      <div className="px-2 sm:px-20 py-10">
        <div className="sm:grid grid-cols-2 grid-rows-1 flex flex-col-reverse gap-8 sm:gap-4">
          <div className="flex">
            <div className="sm:w-1/4" />
            <motion.div
              variants={fadeInAnimationVariantsXl}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className={`${inter.className} tracking-tighter sm:w-3/4 w-full flex flex-col text-neutral-600 dark:text-neutral-400 font-light text-xs sm:text-sm text-center sm:items-start break-words`}
            >
              <h2 className="h-1/2">{`© ${new Date().getFullYear()} Rishabh Singh, All Rights Reserved`}</h2>
              <h2 className="h-1/2">
                Passionate enthusiast of Next.js, Expo and modern development.
              </h2>
            </motion.div>
          </div>
          <div className="flex flex-col items-center sm:items-end">
            <motion.div
              variants={fadeInAnimationVariantsXr}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className="h-1/2 flex justify-end items-center gap-5 sm:gap-8 sm:mr-28"
            >
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
            </motion.div>
            <div className="h-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
