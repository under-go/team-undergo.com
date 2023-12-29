"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { BsMoonFill, BsSunFill } from "react-icons/bs";

import { motion } from "framer-motion";

export default function Darkmode() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.button
      whileTap={{ rotate: 180 }}
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      {theme === "dark" ? <BsSunFill /> : <BsMoonFill />}
    </motion.button>
  );
}
