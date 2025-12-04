"use client";

import React from "react";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { HiOutlineDownload } from "react-icons/hi";
import useMediaQuery from "@/hooks/useMediaQuery";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function ResumeViewer() {
  const isMobile = useMediaQuery(640);

  return (
    <div className="flex justify-center sm:pt-0 pt-20">
      <div className="relative">
        <Document file="resume.pdf" loading={<div className="h-screen" />}>
          <Page
            pageNumber={1}
            scale={isMobile ? 0.6 : 1.2}
            onClick={(e) => {
              if (e.target.tagName.toLowerCase() === "a") {
                window.open(e.target.href, "_blank");
                e.preventDefault();
              }
            }}
          />
        </Document>
        <a
          href="/resume.pdf"
          download
          className="absolute top-0 right-0 z-10"
        >
          <button className="p-2 bg-violet-600 text-white hover:bg-violet-700 transition">
            <HiOutlineDownload size={24} />
          </button>
        </a>
      </div>
    </div>
  );
}