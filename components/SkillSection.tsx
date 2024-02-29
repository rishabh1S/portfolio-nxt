"use client";

import { fadeInAnimationVariantsSkill } from "@/utils/framer-animations";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const SkillSection: React.FC<{
  title: string;
  skills: { Icon?: React.ElementType; name: string; logo?: string }[];
}> = ({ title, skills }) => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-sm tracking-tight text-zinc-600 dark:text-zinc-400">
        {title}
      </h1>
      <ul className="flex flex-wrap gap-4">
        {skills.map(({ name, Icon, logo }, index) => (
          <motion.li
            key={index}
            className="px-3 sm:px-4 py-3 rounded-full border border-slate-400 dark:border-slate-800 bg-[linear-gradient(110deg,#94a3b8,45%,#e2e8f0,55%,#94a3b8)] dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] focus:outline-none flex items-center justify-center gap-3"
            variants={fadeInAnimationVariantsSkill}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <h2 className="font-medium text-sm tracking-tighter sm:inline hidden">
              {name}
            </h2>
            {Icon && <Icon size={22} />}
            {logo && (
              <Image
                src={logo}
                alt="Logo"
                height={22}
                width={22}
                className="rounded-md"
              />
            )}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default SkillSection;
