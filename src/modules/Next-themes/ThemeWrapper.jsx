"use client";

import { ThemeProvider } from "next-themes";

export default function ThemeWrapper({ children }) {
  return (
    <ThemeProvider attribute="class" enableColorScheme={false}>
      {children}
    </ThemeProvider>
  );
}
