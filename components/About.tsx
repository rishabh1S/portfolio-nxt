import React from "react";
import { Skills } from ".";

const About = () => {
  return (
    <div className="min-h-screen">
      <div className="py-20 px-48">
        <div className="flex flex-col gap-20">
          <h1 className="text-7xl font-medium tracking-tighter px-4">
            Every great design begins with an even better story
          </h1>
          <div className="w-4/5 self-end text-xl flex flex-col gap-3 text-justify">
            <h2>
              I’m Rishabh Singh, a web developer fueled by a genuine passion for
              full-stack web development and design. I earned my Bachelor’s
              degree in Computer Science and Engineering from{" "}
              <a
                href="https://mituniversity.ac.in/"
                className="text-violet-700 hover:underline font-medium tracking-tight"
              >
                MIT ADT University.
              </a>{" "}
              My career goals are centered around translating my creativity into
              top-notch software and creating engaging user experiences.
            </h2>
            <h2>
              Beyond the digital landscape, I find joy in real-world activities
              like chess, cricket, and indulging in a good movie. When I’m not
              coding, you’ll likely catch me enjoying the beats of modern rock
              and pop music.
            </h2>
          </div>
        </div>
        <Skills />
      </div>
    </div>
  );
};

export default About;
