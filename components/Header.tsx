"use client";

import React from "react";
import { Topbar, Sidebar } from "@/components";
import useMediaQuery from "@/hooks/useMediaQuery";

const Header = () => {
  const isMobile = useMediaQuery(568);

  return <>{isMobile ? <Topbar /> : <Sidebar />}</>;
};

export default Header;
