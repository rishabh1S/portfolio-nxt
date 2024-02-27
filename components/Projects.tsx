"use client";

import React from "react";
import { ProjectCard } from ".";
import { useRouter } from "next/navigation";
import { projectsData } from "@/utils/projects";

const Projects = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen">
      <div className="py-16 pl-48">
        <h1 className="text-7xl font-medium tracking-tighter px-4">
          My latest projects
        </h1>
        <div className="py-14 flex flex-col gap-20">
          {projectsData.slice(0, 5).map((project, index) => (
            <ProjectCard
              key={project.number}
              number={project.number}
              imageSrc={project.imageSrc}
              videoUrl={project.videoUrl}
              projectLink={project.projectLink}
              description={project.description}
              techstack={project.techstack}
              sourceCode={project.sourceCode}
              isAlternate={index % 2 !== 0}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <div className="relative group">
            <button
              onClick={() => router.push("/projects")}
              className="relative z-10 px-3 uppercase text-center tracking-tight bg-[#F8EEEC] dark:bg-[#0E0C0A]"
            >
              View All Projects
            </button>
            <span className="absolute top-3 -left-24 w-60 border-t-[1.5px] border-solid border-violet-700 transform transition-transform !duration-700 origin-left group-hover:translate-x-32" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
