"use client";

import React from "react";
import { Footer } from "@/components";
import dynamic from "next/dynamic";

const ResumeViewer = dynamic(() => import("@/components/ResumeViewer"), {
  ssr: false,
  loading: () => <div className="h-screen w-full flex items-center justify-center">Loading PDF...</div>,
});

export default function Resume() {
  return (
    <>
      <div className="w-screen overflow-hidden">
        <ResumeViewer />
      </div>
      <Footer />
    </>
  );
}
