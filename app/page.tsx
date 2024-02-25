import { About, Contact, Footer, Landing, Projects } from "@/components";
import React from "react";

export default function Home() {
  return (
    <main>
      <Landing />
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <Contact />
      <Footer />
    </main>
  );
}
