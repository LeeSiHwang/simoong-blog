"use client";

import { ThemeProvider } from "next-themes";

const CustomThemeProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default CustomThemeProviders