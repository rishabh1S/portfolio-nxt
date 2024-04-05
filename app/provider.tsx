"use client";

import React from "react";
import { ThemeProvider } from "next-themes";
import { CustomCursor } from "@/components";
import NextTopLoader from "nextjs-toploader";
import { Analytics } from "@vercel/analytics/react";

export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      themes={["light", "dark"]}
    >
      <CustomCursor />
      <NextTopLoader showSpinner={false} color="#8b5cf6" zIndex={999} />
      {children}
      <Analytics />
    </ThemeProvider>
  );
};
