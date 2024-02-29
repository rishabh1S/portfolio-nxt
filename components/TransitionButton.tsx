"use client";

import { useRouter } from "next/navigation";
import { animatePageOut } from "@/utils/gsap-animations";

export default function TransitionButton({
  href,
  children,
  className,
  additional,
}: {
  href: string;
  children: React.ReactNode;
  className: string;
  additional?: () => void;
}) {
  const router = useRouter();
  return (
    <button
      className={className}
      onClick={() => animatePageOut(href, router, additional)}
    >
      {children}
    </button>
  );
}
