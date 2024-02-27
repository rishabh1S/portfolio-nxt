import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
const VideoPlayer = dynamic(() => import("./VideoPlayer"), {
  ssr: false,
});

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
  return (
    <div className={`max-w-4xl flex ${isAlternate ? "ml-auto" : "mr-auto"}`}>
      <div className="relative">
        <h1 className="text-xl font-bold leading-4 text-violet-700">
          {number}
        </h1>
        <div className="absolute top-7 left-2.5 h-24 border-l-[1.5px] border-solid border-violet-700" />
      </div>
      <div className="px-4 flex flex-col gap-6">
        <Link href={projectLink} target="_blank" className="relative">
          {videoUrl ? (
            <VideoPlayer
              videoUrl={videoUrl}
              width={800}
              height={450}
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
          <h2 className="text-4xl tracking-tighter font-medium italic hover:text-violet-700">
            {description}
          </h2>
          <div className="flex">
            <h3 className="self-center text-neutral-600 dark:text-neutral-400 text-xl font-light tracking-tight">
              {techstack}
            </h3>
            <Link
              href={sourceCode}
              className="p-3 ml-3 rounded-full border hover:bg-black/[0.2] dark:hover:bg-white/[0.2]"
            >
              <MdArrowOutward size={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
