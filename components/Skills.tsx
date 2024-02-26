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

const Skill: React.FC<{
  Icon?: React.ElementType;
  logo?: string;
  name: string;
}> = ({ Icon, logo, name }) => {
  return (
    <div className="py-2 px-3 flex gap-2 items-center bg-violet-400 dark:bg-violet-600 transition-all ease-in-out hover:bg-violet-500 hover:scale-110 rounded-xl">
      <h2 className="font-medium tracking-tighter">{name}</h2>
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
    </div>
  );
};

const Skills = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-32 px-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-6xl font-medium tracking-tighter">Tech Stack</h1>
          <h2 className="text-xl w-3/4">
            Embracing the inevitability of change, I consistently delve into
            emerging technologies, acquire a foundational understanding, and
            subsequently leverage my knowledge to create innovative solutions,
            determining my proficiency in the process.
          </h2>
        </div>
        <div className="flex flex-col gap-4 pt-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-sm tracking-tight">Mobile Development</h1>
            <div className="flex gap-4">
              <Skill Icon={TbBrandReactNative} name="React native" />
              <Skill Icon={SiExpo} name="Expo" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-sm tracking-tight">Frontend Web Development</h1>
            <div className="flex gap-4">
              <Skill Icon={SiHtml5} name="HTML" />
              <Skill Icon={SiCss3} name="CSS" />
              <Skill Icon={SiJavascript} name="Javascript" />
              <Skill Icon={SiTypescript} name="Typescript" />
              <Skill Icon={SiReact} name="React" />
              <Skill Icon={SiNextdotjs} name="Next.js" />
              <Skill Icon={SiAngular} name="Angular" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-sm tracking-tight">UI Libraries</h1>
            <div className="flex gap-4">
              <Skill Icon={SiTailwindcss} name="Tailwind CSS" />
              <Skill Icon={SiBootstrap} name="Bootstrap" />
              <Skill Icon={SiNextui} name="NextUI" />
              <Skill logo="/tamagui.jpg" name="Tamagui.dev" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-sm tracking-tight">Backend</h1>
            <div className="flex gap-4">
              <Skill Icon={SiNodedotjs} name="Node.js" />
              <Skill Icon={SiExpress} name="Express.js" />
              <Skill Icon={FaJava} name="Java" />
              <Skill Icon={SiPython} name="Python" />
              <Skill Icon={TbApi} name="Rest APIs" />
              <Skill Icon={SiGraphql} name="GraphQl" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-sm tracking-tight">Databases</h1>
            <div className="flex gap-4">
              <Skill Icon={SiMongodb} name="Mongo DB" />
              <Skill Icon={SiMysql} name="My SQL" />
              <Skill Icon={SiFirebase} name="Firebase" />
              <Skill Icon={SiSupabase} name="Supabase" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-sm tracking-tight">Other Tools</h1>
            <div className="flex gap-4">
              <Skill Icon={SiGithub} name="Github" />
              <Skill Icon={SiStrapi} name="Strapi" />
              <Skill Icon={SiStripe} name="Stripe" />
              <Skill Icon={SiFigma} name="Figma" />
              <Skill Icon={SiPostman} name="Postman" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
