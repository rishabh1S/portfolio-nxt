"use client";

import useMediaQuery from "@/hooks/useMediaQuery";
import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const isMobile = useMediaQuery(640);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      if (isMobile) return;

      const posX = event.clientX;
      const posY = event.clientY;

      if (cursorDotRef.current && cursorOutlineRef.current) {
        cursorDotRef.current.style.left = `${posX}px`;
        cursorDotRef.current.style.top = `${posY}px`;

        cursorOutlineRef.current.animate(
          [{ left: `${posX}px`, top: `${posY}px` }],
          {
            duration: 800,
            fill: "forwards",
          }
        );
      }
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, [isMobile]);

  return (
    <>
      {!isMobile && (
        <>
          <div
            ref={cursorDotRef}
            className="w-2 h-2 bg-zinc-400 fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          />
          <div
            ref={cursorOutlineRef}
            className="w-24 h-24 border border-zinc-400 fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          />
        </>
      )}
    </>
  );
};

export default CustomCursor;
