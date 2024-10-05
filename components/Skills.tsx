"use client";

import React from "react";
import { FaJava } from "react-icons/fa";
import {
  SiAngular,
  SiBootstrap,
  SiCss3,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNextui,
  SiNodedotjs,
  SiPostman,
  SiPython,
  SiReact,
  SiStrapi,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiShadcnui,
  SiSpringboot,
  SiPostgresql,
  SiDocker,
  SiApachemaven,
} from "react-icons/si";
import { TbApi, TbBrandReactNative } from "react-icons/tb";
import { SkillSection } from ".";
import { motion } from "framer-motion";
import { fadeInAnimationVariantsY } from "@/utils/framer-animations";

const Skills = () => {
  return (
    <motion.div
      variants={fadeInAnimationVariantsY}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      className="sm:px-4"
    >
      <div className="flex flex-col gap-4 py-4">
        <h1 className="sm:text-7xl text-4xl font-medium tracking-tighter">
          Tech Stack
        </h1>
        <h2 className="text-base sm:text-xl sm:w-3/4 text-justify">
          Embracing the inevitability of change, I consistently delve into
          emerging technologies, acquire a foundational understanding, and
          subsequently leverage my knowledge to create innovative solutions,
          determining my proficiency in the process.
        </h2>
      </div>
      <div className="flex flex-col gap-4 pt-4">
        <SkillSection
          title="Native App Development"
          skills={[
            { Icon: TbBrandReactNative, name: "React native" },
            { Icon: SiExpo, name: "Expo" },
          ]}
        />
        <SkillSection
          title="Frontend Web Development"
          skills={[
            { Icon: SiHtml5, name: "HTML" },
            { Icon: SiCss3, name: "CSS" },
            { Icon: SiJavascript, name: "Javascript" },
            { Icon: SiTypescript, name: "Typescript" },
            { Icon: SiReact, name: "React" },
            { Icon: SiNextdotjs, name: "Next.js" },
            { Icon: SiAngular, name: "Angular" },
          ]}
        />
        <SkillSection
          title="UI Libraries"
          skills={[
            { Icon: SiTailwindcss, name: "Tailwind CSS" },
            { Icon: SiBootstrap, name: "Bootstrap" },
            { Icon: SiShadcnui, name: "ShadCn" },
            { Icon: SiNextui, name: "NextUI" },
            { logo: "/tamagui.jpg", name: "Tamagui.dev" },
          ]}
        />
        <SkillSection
          title="Backend"
          skills={[
            { Icon: SiNodedotjs, name: "Node.js" },
            { Icon: SiExpress, name: "Express.js" },
            { Icon: FaJava, name: "Java" },
            { Icon: SiSpringboot, name: "SpringBoot" },
            { Icon: SiPython, name: "Python" },
            { Icon: TbApi, name: "Rest APIs" },
          ]}
        />
        <SkillSection
          title="Databases"
          skills={[
            { Icon: SiMongodb, name: "Mongo DB" },
            { Icon: SiMysql, name: "My SQL" },
            { Icon: SiPostgresql, name: "PostgreSQL" },
            { Icon: SiFirebase, name: "Firebase" },
          ]}
        />
        <SkillSection
          title="Others"
          skills={[
            { Icon: SiGithub, name: "Github" },
            { Icon: SiDocker, name: "Docker" },
            { Icon: SiStrapi, name: "Strapi" },
            { Icon: SiStripe, name: "Stripe" },
            { Icon: SiPostman, name: "Postman" },
            { Icon: SiApachemaven, name: "Maven" },
          ]}
        />
      </div>
    </motion.div>
  );
};

export default Skills;
