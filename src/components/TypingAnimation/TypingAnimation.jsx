"use client";

import { TypeAnimation } from "react-type-animation";

export default function TypingAnimation() {
  return (
    <TypeAnimation
      sequence={["Developers.", 3000, "Engineers.", 3000, "Pioneers.", 3000]}
      speed={50}
      style={{ fontSize: "48px" }}
      repeat={Infinity}
    />
  );
}
