"use client";

import { useRouter } from "next/navigation";
interface MenuMobileProps {
  setMenuOpen: (show: boolean) => void;
}

const MenuMobile: React.FC<MenuMobileProps> = ({ setMenuOpen }) => {
  const router = useRouter();

  return (
    <div className="z-30 fixed top-20 h-full w-full backdrop-blur-2xl overflow-hidden">
      <div className="mt-32">
        <div className="flex flex-col gap-14 items-center">
          <button
            className="uppercase text-4xl font-bold tracking-tighter hover:text-violet-700"
            onClick={() => {
              router.push("/#about");
              setMenuOpen(false);
            }}
          >
            About
          </button>
          <button
            className="uppercase text-4xl font-bold tracking-tighter hover:text-violet-700"
            onClick={() => {
              router.push("/#projects");
              setMenuOpen(false);
            }}
          >
            Projects
          </button>
          <button
            className="uppercase text-4xl font-bold tracking-tighter hover:text-violet-700"
            onClick={() => {
              router.push("/resume");
              setMenuOpen(false);
            }}
          >
            Resume
          </button>
          <button
            className="flex items-center justify-center rounded hover:text-violet-700"
            onClick={() => {
              router.push("/contact");
              setMenuOpen(false);
            }}
          >
            <h1 className="uppercase text-4xl font-bold tracking-tighter">
              Contact me
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
