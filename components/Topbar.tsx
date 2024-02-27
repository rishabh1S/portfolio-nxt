"use client";

import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { MdSunny } from "react-icons/md";
import { Howl } from "howler";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MenuMobile } from ".";
import { useRouter } from "next/navigation";

const Topbar = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const sound = new Howl({
    src: ["click.mp3"],
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className="fixed z-40 h-20 w-screen py-3 overflow-hidden backdrop-blur-2xl">
        <div className="flex items-center justify-between px-5">
          <div
            onClick={() => {
              router.push("/");
              setMenuOpen(false);
            }}
          >
            <svg
              className="w-12 h-12 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
            </svg>
          </div>
          <div className="flex gap-4">
            <button
              className="flex -rotate-12 items-center justify-center w-10 h-10 rounded"
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
                sound.play();
              }}
            >
              {theme === "dark" ? <FaMoon size={24} /> : <MdSunny size={24} />}
            </button>
            <button
              className="flex items-center justify-center w-10 h-10 rounded hover:text-violet-700"
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              {menuOpen ? <GrClose size={24} /> : <RxHamburgerMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {menuOpen && <MenuMobile setMenuOpen={setMenuOpen} />}
    </>
  );
};

export default Topbar;
