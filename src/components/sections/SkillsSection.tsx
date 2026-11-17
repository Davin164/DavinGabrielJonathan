"use client";

import React from "react";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/ui/SpotlightCard";

const SKILL_PILL_COLUMNS = [
  {
    title: "Languages & Frameworks",
    pills: [
      "JavaScript",
      "TypeScript",
      "PHP",
      "Java",
      "Node.js",
      "Express.js",
      "Laravel",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Bootstrap",
      "GSAP",
    ],
  },
  {
    title: "Backend & Architecture",
    pills: [
      "REST API",
      "MVC Architecture",
      "Payment Gateway",
      "Middleware Auth",
      "Pessimistic Locking",
      "ACID Transaction",
      "Concurrency Control",
      "QR Ticket Scanner",
    ],
  },
  {
    title: "Data & Databases",
    pills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "SQLite",
      "Row-Level Locking",
      "Schema Design",
    ],
  },
  {
    title: "DevOps, Security & Tools",
    pills: [
      "Docker",
      "Docker Compose",
      "Linux VPS Host",
      "Wazuh SIEM",
      "Blue / Red Team",
      "Bug Hunting",
      "Git & GitHub",
      "Postman",
      "Google Antigravity",
      "VS Code",
      "Figma",
    ],
  },
];

const MARQUEE_ITEMS = [
  "Node.js",
  "Express.js",
  "Laravel",
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Docker Compose",
  "Payment Gateway",
  "Pessimistic Locking",
  "Wazuh SIEM",
  "Tailwind CSS",
  "GSAP Animation",
  "Google Antigravity",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Centered Heading (Exact match to khalifaalhasan.my.id Screenshot 8) */}
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-5xl"
          >
            Skills
          </motion.h2>
          <p className="mt-2 text-xs text-[var(--text-muted)] sm:text-sm">
            Crafting Scalable Infrastructure And Clean Code
          </p>
        </div>

        {/* 4 Dark Pillar Cards with Pill Badges (Exact match to khalifaalhasan Screenshot 8) */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_PILL_COLUMNS.map((col, idx) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
            >
              <SpotlightCard className="h-full p-6">
                <h3 className="text-base font-bold leading-snug text-[var(--text-primary)] sm:text-lg">
                  {col.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {col.pills.map((pill) => (
                    <span
                      key={pill}
                      className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Infinite Tech Stack Marquee Ticker */}
        <div className="relative mt-10 overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] py-4">
          <div className="animate-marquee flex items-center gap-4">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-4 py-1.5 font-mono text-xs text-[var(--text-secondary)]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
