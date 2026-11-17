"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlowingShapeProps {
  variant: "cross" | "square" | "star" | "circle" | "triangle";
  size?: number;
  className?: string;
  delay?: number;
}

export function GlowingShape({
  variant,
  size = 84,
  className = "",
  delay = 0,
}: GlowingShapeProps) {
  return (
    <motion.div
      initial={{ opacity: 0.75, y: 0, rotate: 0 }}
      animate={{
        y: [0, -12, 0, 8, 0],
        rotate:
          variant === "circle"
            ? [0, 0, 0]
            : [0, 6, -4, 3, 0],
        scale: [1, 1.04, 0.98, 1],
      }}
      transition={{
        duration: 7 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      whileHover={{ scale: 1.15, rotate: 12 }}
      className={`neon-shape-glow inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full stroke-zinc-100/90"
      >
        {variant === "cross" && (
          <path
            d="M42 14H58V42H86V58H58V86H42V58H14V42H42V14Z"
            strokeWidth="3.2"
            strokeLinejoin="round"
          />
        )}
        {variant === "square" && (
          <rect
            x="16"
            y="16"
            width="68"
            height="68"
            rx="12"
            strokeWidth="3.2"
          />
        )}
        {variant === "star" && (
          <path
            d="M50 10C52 36 64 48 90 50C64 52 52 64 50 90C48 64 36 52 10 50C36 48 48 36 50 10Z"
            strokeWidth="3.2"
            strokeLinejoin="round"
          />
        )}
        {variant === "circle" && (
          <circle cx="50" cy="50" r="36" strokeWidth="3.2" />
        )}
        {variant === "triangle" && (
          <path
            d="M50 16L86 80H14L50 16Z"
            strokeWidth="3.2"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </motion.div>
  );
}

export default function GlowingShapesCluster({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      aria-hidden="true"
    >
      {/* Central ambient glow */}
      <div className="pointer-events-none absolute h-56 w-56 rounded-full bg-white/15 blur-[70px] sm:h-72 sm:w-72" />

      <div className="relative h-[280px] w-[280px] sm:h-[340px] sm:w-[340px]">
        {/* Top Left Square */}
        <div className="absolute top-6 left-6 sm:top-8 sm:left-8">
          <GlowingShape variant="square" size={82} delay={0.2} />
        </div>
        {/* Top Right Triangle */}
        <div className="absolute top-2 right-12 sm:top-3 sm:right-14">
          <GlowingShape variant="triangle" size={68} delay={1.1} />
        </div>
        {/* Bottom Left Circle */}
        <div className="absolute bottom-8 left-2 sm:bottom-10 sm:left-4">
          <GlowingShape variant="circle" size={88} delay={0.6} />
        </div>
        {/* Bottom Center 4-Point Star */}
        <div className="absolute right-16 bottom-4 sm:right-20 sm:bottom-6">
          <GlowingShape variant="star" size={92} delay={1.5} />
        </div>
        {/* Far Right Cross */}
        <div className="absolute top-24 right-0 sm:top-28 sm:right-2">
          <GlowingShape variant="cross" size={80} delay={0.9} />
        </div>
      </div>
    </div>
  );
}
