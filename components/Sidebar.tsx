"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdOutlineChat } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { HiOutlineHome } from "react-icons/hi2";
import { SiAboutdotme } from "react-icons/si";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed flex flex-col items-center w-20 h-full overflow-hidden border-r border-zinc-300 dark:border-zinc-700 backdrop-blur-md">
      <a className="flex items-center justify-center mt-3">
        <svg
          className="w-12 h-12 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
        </svg>
      </a>
      <div className="flex flex-col gap-4 items-center mt-3 pt-2 border-t border-zinc-300 dark:border-zinc-700">
        <Link
          className="flex items-center justify-center w-12 h-12 rounded hover:text-violet-700"
          href="/"
        >
          <HiOutlineHome size={28} />
        </Link>
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
          <GrProjects size={28} />
        </Link>
        <button
          className="flex items-center justify-center w-12 h-12 rounded"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <FaMoon size={28} /> : <MdSunny size={28} />}
        </button>
      </div>
      <div className="flex flex-col items-center mt-auto mb-2 border-t border-zinc-300 dark:border-zinc-700">
        <Link
          className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:text-violet-700"
          href="/contact"
        >
          <MdOutlineChat size={28} />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
