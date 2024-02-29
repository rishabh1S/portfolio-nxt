"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { FaAnglesUp } from "react-icons/fa6";
import { MdOutlineChat, MdSunny } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";
import { Howl } from "howler";
import { SocialIcons } from "@/utils/socials";

const Sidebar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const sound = new Howl({
    src: ["click.mp3"],
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed z-40 flex flex-col items-center w-20 h-full overflow-hidden border-r border-zinc-300 dark:border-zinc-700 backdrop-blur-md">
      <Link href="/" className="flex items-center justify-center mt-3">
        <svg
          className="w-12 h-12 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
        </svg>
      </Link>
      <div className="flex flex-col gap-4 items-center mt-3 pt-2 border-t border-zinc-300 dark:border-zinc-700">
        <Link
          className="flex items-center justify-center w-12 h-12 rounded hover:text-violet-700"
          href="/#about"
        >
          <SiAboutdotme size={28} />
        </Link>
        <Link
          className="flex items-center justify-center w-12 h-12 rounded hover:text-violet-700"
          href="/#projects"
        >
          <GrProjects size={25} />
        </Link>
        <Link
          className="flex items-center justify-center w-12 h-12 rounded hover:text-violet-700"
          href="/#contact"
        >
          <MdOutlineChat size={28} />
        </Link>
        <button
          className="flex -rotate-12 items-center justify-center w-12 h-12 rounded"
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
            sound.play();
          }}
        >
          {theme === "dark" ? <FaMoon size={28} /> : <MdSunny size={28} />}
        </button>
      </div>

      <div className="mt-auto mb-2 flex flex-col gap-4 items-center">
        {SocialIcons.slice(0, 3).map((SocialIcon, index) => (
          <Link
            key={index}
            href={SocialIcon.link}
            target="_blank"
            className="flex items-center justify-center w-12 h-12 transition-all transform hover:scale-125 hover:text-violet-700"
          >
            <SocialIcon.icon size={28} />
          </Link>
        ))}
        <div className="border-t border-zinc-300 dark:border-zinc-700">
          <Link
            className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:text-violet-700"
            href="/#home"
          >
            <FaAnglesUp size={28} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
