"use client";

import { motion, useScroll } from "framer-motion";

export default function ProgressYScroll() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
  );
}