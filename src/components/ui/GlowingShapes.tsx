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
      initial={{ opacity: 0.8, y: 0, rotate: 0 }}
      animate={{
        y: [0, -10, 0, 7, 0],
        rotate: [0, 4, -3, 2, 0],
        scale: [1, 1.04, 0.98, 1],
      }}
      transition={{
        duration: 7 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      whileHover={{ scale: 1.14, rotate: 6 }}
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
          <g strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M34 32L14 50L34 68" />
            <path d="M66 32L86 50L66 68" />
            <path d="M56 24L44 76" />
          </g>
        )}

        {variant === "square" && (
          <g strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="14" y="18" width="72" height="64" rx="12" />
            <path d="M30 42L42 52L30 62" />
            <path d="M48 62H66" />
          </g>
        )}

        {variant === "star" && (
          <g strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M38 22C28 22 28 30 28 38C28 45 22 50 18 50C22 50 28 55 28 62C28 70 28 78 38 78" />
            <path d="M62 22C72 22 72 30 72 38C72 45 78 50 82 50C78 50 72 55 72 62C72 70 72 78 62 78" />
          </g>
        )}

        {variant === "circle" && (
          <g strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="50" cy="26" rx="28" ry="11" />
            <path d="M22 26V50C22 56.075 34.536 61 50 61C65.464 61 78 56.075 78 50V26" />
            <path d="M22 50V74C22 80.075 34.536 85 50 85C65.464 85 78 80.075 78 74V50" />
          </g>
        )}

        {variant === "triangle" && (
          <g strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="30" cy="26" r="8" />
            <circle cx="30" cy="74" r="8" />
            <circle cx="72" cy="38" r="8" />
            <path d="M30 34V66" />
            <path d="M64 38H48C38 38 30 46 30 56" />
          </g>
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
      <div className="pointer-events-none absolute h-56 w-56 rounded-full bg-white/15 blur-[70px] sm:h-72 sm:w-72" />

      <div className="relative h-[280px] w-[280px] sm:h-[340px] sm:w-[340px]">
        <div className="absolute top-6 left-6 sm:top-8 sm:left-8">
          <GlowingShape variant="square" size={82} delay={0.2} />
        </div>
        <div className="absolute top-2 right-12 sm:top-3 sm:right-14">
          <GlowingShape variant="triangle" size={68} delay={1.1} />
        </div>
        <div className="absolute bottom-8 left-2 sm:bottom-10 sm:left-4">
          <GlowingShape variant="circle" size={88} delay={0.6} />
        </div>
        <div className="absolute right-16 bottom-4 sm:right-20 sm:bottom-6">
          <GlowingShape variant="star" size={92} delay={1.5} />
        </div>
        <div className="absolute top-24 right-0 sm:top-28 sm:right-2">
          <GlowingShape variant="cross" size={80} delay={0.9} />
        </div>
      </div>
    </div>
  );
}
