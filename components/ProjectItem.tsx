"use client";

import useMediaQuery from "@/hooks/useMediaQuery";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
const VideoPlayer = dynamic(() => import("./VideoPlayer"), {
  ssr: false,
});
interface ProjectItemProps {
  title: string;
  imageSrc: string;
  videoUrl?: string | undefined;
  projectLink: string;
  techstack: string;
  sourceCode: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  techstack,
  imageSrc,
  videoUrl,
  projectLink,
  sourceCode,
}) => {
  const isMobile = useMediaQuery(640);
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      className="relative border-b border-zinc-300 dark:border-zinc-700 sm:py-12 py-6 sm:pr-2 group"
      onMouseEnter={!isMobile ? () => setIsVisible(true) : undefined}
      onMouseLeave={!isMobile ? () => setIsVisible(false) : undefined}
    >
      <div className="flex sm:flex-row flex-col justify-between sm:items-center sm:px-4 gap-4">
        <h1 className="text-4xl font-bold tracking-tighter group-hover:text-violet-700 transition-transform ease-in-out duration-300 group-hover:translate-x-4">
          {title}
        </h1>
        <h3 className="text-neutral-600 dark:text-neutral-400 sm:text-lg text-sm">
          {techstack}
        </h3>
        {isMobile && (
          <Link
            href={sourceCode}
            target="_blank"
            className="p-3 w-fit rounded-full border"
          >
            <MdArrowOutward size={22} />
          </Link>
        )}
      </div>
      {isVisible && (
        <div className="flex flex-row-reverse gap-6 absolute bottom-0 right-0 px-4">
          <Link
            href={sourceCode}
            target="_blank"
            className="p-4 h-fit self-end rounded-full border hover:bg-black/[0.2] dark:hover:bg-white/[0.2] transition-all ease-in-out"
          >
            <MdArrowOutward size={32} />
          </Link>
          <Link href={projectLink} target="_blank">
            {videoUrl ? (
              <VideoPlayer
                videoUrl={videoUrl}
                width={450}
                height={250}
                className="transition !duration-500 !delay-300 transform hover:scale-95"
              />
            ) : (
              <Image
                src={imageSrc}
                alt="Project card"
                width={450}
                height={300}
                className="transition !duration-500 !delay-300 transform hover:scale-95"
              />
            )}
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProjectItem;
