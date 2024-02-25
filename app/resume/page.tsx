"use client";

import React from "react";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function Resume() {
  return (
    <div className="flex justify-center">
      <Document file="resume.pdf" loading={<div className="w-full h-screen" />}>
        <Page
          pageNumber={1}
          scale={1.3}
          onClick={(e) => {
            window.open(e.target.href, "_blank");
            e.preventDefault();
          }}
        />
      </Document>
    </div>
  );
}
