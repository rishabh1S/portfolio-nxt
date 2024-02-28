"use client";

import { Footer } from "@/components";
import useMediaQuery from "@/hooks/useMediaQuery";
import React from "react";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function Resume() {
  const isMobile = useMediaQuery(640);
  return (
    <>
      <div className="w-screen overflow-hidden">
        <div className="flex justify-center sm:pt-0 pt-20">
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
        </div>
      </div>
      <Footer />
    </>
  );
}
