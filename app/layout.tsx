import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import { CustomCursor, Header, Footer } from "@/components";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rishabh Singh",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-[#F8EEEC] dark:bg-[#0E0C0A]`}
      >
        <Providers>
          <CustomCursor />
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
