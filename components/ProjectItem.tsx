"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

interface ProjectItemProps {
  title: string;
  imageSrc: string;
  projectLink: string;
  techstack: string;
  sourceCode: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  techstack,
  imageSrc,
  projectLink,
  sourceCode,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      className="relative border-b border-zinc-300 dark:border-zinc-700 py-12 pr-2"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div className="flex justify-between items-center px-4">
        <h1 className="text-4xl font-bold tracking-tighter">{title}</h1>
        <h3 className="text-neutral-600 dark:text-neutral-400">{techstack}</h3>
      </div>
      {isVisible && (
        <div className="flex flex-row-reverse gap-6 absolute bottom-0 right-0 px-4">
          <Link
            href={sourceCode}
            className="p-4 h-fit self-end rounded-full border hover:bg-black/[0.2] dark:hover:bg-white/[0.2]"
          >
            <MdArrowOutward size={32} />
          </Link>
          <Link href={projectLink} target="_blank">
            <Image
              src={imageSrc}
              alt="Project card"
              width={450}
              height={300}
              className="hover:scale-105"
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProjectItem;
