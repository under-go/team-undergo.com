"use client";

import { motion, useScroll } from "framer-motion";

export default function ProgressYScroll() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="progress-bar dark:bg-zinc-200 transition-colors duration-300"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
