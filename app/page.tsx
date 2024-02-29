import { About, Contact, Footer, Landing, Projects } from "@/components";
import React from "react";

export default function Home() {
  return (
    <main>
      <div id="home">
        <Landing />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
