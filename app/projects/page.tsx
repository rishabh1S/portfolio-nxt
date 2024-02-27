import { ProjectItem } from "@/components";
import { projectsData } from "@/utils/projects";
import React from "react";

export default function Projects() {
  return (
    <div className="min-h-screen">
      <div className="py-20 pl-48">
        <div className="relative inline-block">
          <h1 className="text-6xl font-medium tracking-tighter px-4">
            Project Archive
          </h1>
          <span className="absolute top-9 -right-32 w-32 border-t-[1.5px] border-solid border-violet-700" />
        </div>
        <div className="py-8 flex flex-col">
          {projectsData.map((project) => (
            <ProjectItem
              key={project.number}
              title={project.title}
              imageSrc={project.imageSrc}
              videoUrl={project.videoUrl}
              projectLink={project.projectLink}
              techstack={project.techstack}
              sourceCode={project.sourceCode}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
