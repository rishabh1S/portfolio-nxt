import Image from "next/image";
import React from "react";
import { FaJava } from "react-icons/fa";
import {
  SiAngular,
  SiBootstrap,
  SiCss3,
  SiExpo,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGithub,
  SiGraphql,
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
} from "react-icons/si";
import { TbApi, TbBrandReactNative } from "react-icons/tb";
import { Button } from "./ui";

const Skill: React.FC<{
  Icon?: React.ElementType;
  logo?: string;
  name: string;
}> = ({ Icon, logo, name }) => {
  return (
    <Button
      borderRadius="1.75rem"
      className="bg-white dark:bg-slate-900 border-neutral-200 dark:border-slate-800"
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
    </Button>
  );
};

const SkillSection: React.FC<{
  title: string;
  skills: { Icon?: React.ElementType; name: string; logo?: string }[];
}> = ({ title, skills }) => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-sm tracking-tight text-zinc-600 dark:text-zinc-400">
        {title}
      </h1>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <Skill
            key={index}
            Icon={skill.Icon}
            logo={skill.logo}
            name={skill.name}
          />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="pt-16 sm:px-4">
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
          title="Mobile Development"
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
            { Icon: SiPython, name: "Python" },
            { Icon: TbApi, name: "Rest APIs" },
            { Icon: SiGraphql, name: "GraphQl" },
          ]}
        />
        <SkillSection
          title="Databases"
          skills={[
            { Icon: SiMongodb, name: "Mongo DB" },
            { Icon: SiMysql, name: "My SQL" },
            { Icon: SiFirebase, name: "Firebase" },
            { Icon: SiSupabase, name: "Supabase" },
          ]}
        />
        <SkillSection
          title="Other Tools"
          skills={[
            { Icon: SiGithub, name: "Github" },
            { Icon: SiStrapi, name: "Strapi" },
            { Icon: SiStripe, name: "Stripe" },
            { Icon: SiFigma, name: "Figma" },
            { Icon: SiPostman, name: "Postman" },
          ]}
        />
      </div>
    </div>
  );
};

export default Skills;
