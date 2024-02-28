"use client";

import useMediaQuery from "@/hooks/useMediaQuery";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { MdArrowOutward } from "react-icons/md";
const VideoPlayer = dynamic(() => import("./VideoPlayer"), {
  ssr: false,
});
import { motion, useScroll, useTransform } from "framer-motion";

interface ProjectCardProps {
  number: string;
  imageSrc: string;
  videoUrl?: string;
  projectLink: string;
  description: string;
  techstack: string;
  sourceCode: string;
  isAlternate: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  number,
  imageSrc,
  videoUrl,
  projectLink,
  description,
  techstack,
  sourceCode,
  isAlternate,
}) => {
  const isMobile = useMediaQuery(640);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className={`sm:max-w-4xl flex sm:flex-row flex-col ${
        isAlternate ? "ml-auto" : "mr-auto"
      }`}
    >
      <div className="relative">
        <h1 className="text-xl font-bold leading-4 text-violet-700">
          {number}
        </h1>
        <div className="absolute sm:top-7 top-2 sm:left-2.5 left-7 sm:h-24 w-24 border-t-[1.5px] sm:border-t-0 sm:border-l-[1.5px] border-solid border-violet-700" />
      </div>
      <div className="sm:px-4 sm:py-0 py-3 flex flex-col gap-6">
        <Link href={projectLink} target="_blank" className="relative">
          {videoUrl ? (
            <VideoPlayer
              videoUrl={videoUrl}
              width={isMobile ? 280 : 800}
              height={isMobile ? 160 : 450}
              className="transition-all !duration-700 !delay-300 transform hover:scale-95 hover:opacity-55"
            />
          ) : (
            <Image
              src={imageSrc}
              alt="Project card"
              width={800}
              height={600}
              className="transition-all !duration-700 !delay-300 transform hover:scale-95 hover:opacity-55"
            />
          )}
        </Link>
        <div className="flex flex-col gap-2.5">
          <h2 className="sm:text-4xl text-xl tracking-tighter font-medium italic hover:text-violet-700">
            {description}
          </h2>
          <div className="flex">
            <h3 className="self-center text-neutral-600 dark:text-neutral-400 text-sm sm:text-xl font-light tracking-tighter">
              {techstack}
            </h3>
            <Link
              href={sourceCode}
              className="p-3 sm:ml-3 rounded-full border hover:bg-black/[0.2] dark:hover:bg-white/[0.2]"
            >
              <MdArrowOutward size={24} />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
