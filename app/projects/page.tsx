import { Contact, Footer, ProjectItem } from "@/components";
import { projectsData } from "@/utils/projects";
import React from "react";

export default function Projects() {
  return (
    <>
      <div className="min-h-screen w-screen overflow-hidden">
        <div className="pt-32 sm:pt-20 py-16 sm:pl-48 px-4">
          <div className="relative inline-block">
            <h1 className="sm:text-6xl text-4xl font-medium tracking-tighter sm:px-4">
              Project Archive
            </h1>
            <span className="absolute sm:top-9 top-10 sm:-right-32 right-0 w-32 border-t-[1.5px] border-solid border-violet-700" />
          </div>
          <div className="py-3 sm:py-8 flex flex-col">
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
        <Contact />
      </div>
      <Footer />
    </>
  );
}
