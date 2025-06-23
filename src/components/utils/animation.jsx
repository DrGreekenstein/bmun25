"use client";

import React from "react";
import { motion } from "motion/react";
import "../styles/animation.css";

const FloatingBall = ({ className, duration, delay }) => {
  const xRange = Math.random() * 200 - 40;
  const yRange = Math.random() * 200 - 40;

  return (
    <motion.div
      className={`${className} absolute z-[-10]`}
      style={{
        top: `${Math.random() * 100}vh`,
        left: `${Math.random() * 100}vw`,
      }}
      initial={{ x: 0, y: 0 }}
      animate={{
        x: [0, xRange, -xRange, 0],
        y: [0, yRange, -yRange, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
    />
  );
};

const BGAnimation = () => {
  return (
    <div className="fixed bg-pinkish top-0 left-0 w-screen h-screen overflow-hidden pointer-events-none z-[-10]">
      {[...Array(2)].map((_, i) => (
        <FloatingBall key={`big-${i}`} className="bigBall" duration={10 + i * 3} delay={i * 2} />
      ))}
      {[...Array(2)].map((_, i) => (
        <FloatingBall key={`med-${i}`} className="medBall" duration={9 + i * 2} delay={i * 3} />
      ))}
      {[...Array(3)].map((_, i) => (
        <FloatingBall key={`small-${i}`} className="smallBall" duration={8 + i * 2} delay={i * 4} />
      ))}

    </div>
  );
};

export default BGAnimation;
