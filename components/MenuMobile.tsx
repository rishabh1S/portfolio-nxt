"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { GrProjects } from "react-icons/gr";
import { HiOutlineHome } from "react-icons/hi2";
import { MdOutlineChat } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";

interface MenuMobileProps {
  setMenuOpen: (show: boolean) => void;
}

const MenuMobile: React.FC<MenuMobileProps> = ({ setMenuOpen }) => {
  const router = useRouter();
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <div className="z-30 fixed top-40 h-full w-full bg-[#F8EEEC] dark:bg-[#0E0C0A] overflow-hidden">
      <div className="mt-80">
        <div className="flex flex-col gap-36 items-center">
          <button
            className="uppercase text-9xl font-bold tracking-tighter hover:text-violet-700"
            onClick={() => {
              router.push("/#about");
              setMenuOpen(false);
            }}
          >
            About
          </button>
          <button
            className="uppercase text-9xl font-bold tracking-tighter hover:text-violet-700"
            onClick={() => {
              router.push("/#projects");
              setMenuOpen(false);
            }}
          >
            Projects
          </button>
          <button
            className="flex items-center justify-center rounded hover:text-violet-700"
            onClick={() => {
              router.push("/contact");
              setMenuOpen(false);
            }}
          >
            <h1 className="uppercase text-9xl font-bold tracking-tighter">
              Contact me
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
