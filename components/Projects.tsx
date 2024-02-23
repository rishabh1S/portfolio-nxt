import React from "react";
import { ProjectCard } from ".";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <div className="py-20 pl-48">
        <h1 className="text-6xl font-medium tracking-tighter px-4">
          My latest projects.
        </h1>
        <div className="py-14 flex flex-col gap-20">
          <ProjectCard
            number="01"
            imageSrc="https://res.cloudinary.com/dnp36kqdc/image/upload/v1705152988/CDN%20for%20portfolio/Muvo.png"
            projectLink="https://muvotv.vercel.app"
            description="Experience endless entertainment with our Netflix clone. Stream movies and TV shows seamlessly on any device, anywhere."
            techstack="Next.js, Typescript, Tailwind CSS, Prisma, NextAuth,TMDB API, Zustand, MongoDB"
            sourceCode="https://github.com/rishabh1S/muvo"
            isAlternate={false}
          />
          <ProjectCard
            number="02"
            imageSrc="https://res.cloudinary.com/dnp36kqdc/image/upload/v1708551058/CDN%20for%20portfolio/Nexly.png"
            projectLink="https://nexlyhub.vercel.app"
            description="Redefining the way you shop online, offering a personalized and sustainable E-commerce experience."
            techstack="Next.js, Typescript, Tailwind CSS, Strapi, Stripe, Clerk Auth"
            sourceCode="https://github.com/rishabh1S/nexly"
            isAlternate
          />
          <ProjectCard
            number="03"
            imageSrc="https://res.cloudinary.com/dnp36kqdc/image/upload/v1697388660/CDN%20for%20portfolio/Scribo-Docs_drqxf7.png"
            projectLink="https://scribodocs.vercel.app"
            description="A Google Docs clone that allows multiple users to collaborate and edit documents in real-time."
            techstack="React, Javascript, Quill Editor, Node.js, Socket.io, Supabase"
            sourceCode="https://github.com/rishabh1S/scribo-docs"
            isAlternate={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
