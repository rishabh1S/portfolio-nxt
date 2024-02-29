"use client";

import { useRouter } from "next/navigation";
import { TransitionButton } from ".";
interface MenuMobileProps {
  setMenuOpen: (show: boolean) => void;
}

const MobileMenu: React.FC<MenuMobileProps> = ({ setMenuOpen }) => {
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
          <TransitionButton
            href="/projects"
            className="uppercase text-4xl font-bold tracking-tighter hover:text-violet-700"
            additional={() => {
              setMenuOpen(false);
            }}
          >
            Projects
          </TransitionButton>
          <TransitionButton
            href="/resume"
            className="uppercase text-4xl font-bold tracking-tighter hover:text-violet-700"
            additional={() => {
              setMenuOpen(false);
            }}
          >
            Resume
          </TransitionButton>
          <TransitionButton
            href="/contact"
            className="flex items-center justify-center rounded hover:text-violet-700"
            additional={() => {
              setMenuOpen(false);
            }}
          >
            <h1 className="uppercase text-4xl font-bold tracking-tighter">
              Contact me
            </h1>
          </TransitionButton>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
