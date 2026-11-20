"use client";

import React from "react";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/ui/SpotlightCard";

function TechIcon({ name, color }: { name: string; color: string }) {
  switch (name) {
    case "JavaScript":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path
            d="M10.5 17.5V11M10.5 17.5C10.5 18.8 9.4 19.2 8.5 18.5M14.5 16.8C15.2 17.8 16.5 18.2 17.8 17.8C18.8 17.4 19 16.2 18 15.6L16.2 14.8C15 14.2 14.8 12.8 15.8 12C16.8 11.4 18 11.6 18.6 12.4"
            stroke="#000"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "TypeScript":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path
            d="M7 11H13M10 11V18.5M15 17.5C15.8 18.3 17.2 18.5 18.3 18C19.2 17.5 19.2 16.3 18.2 15.7L16.5 14.9C15.4 14.3 15.3 13 16.2 12.3C17.1 11.7 18.3 11.9 19 12.6"
            stroke="#fff"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "PHP":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none">
          <ellipse cx="12" cy="12" rx="11" ry="7" fill="#777BB4" />
          <path
            d="M6.5 14.5L7.5 9.5H9.8C10.8 9.5 11.2 10.2 11 11.2C10.8 12.2 10.1 12.7 9 12.7H7M12.2 14.5L13.2 9.5M12.7 12H15.2M15.7 9.5L14.7 14.5"
            stroke="#fff"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      );
    case "Java":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none">
          <path
            d="M12 3C10 5 14 6.5 12 9M9 6C7.5 7.5 10.5 8.5 9 10.5"
            stroke="#F89820"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="M6 13H16V15.5C16 17.985 13.761 20 11 20C8.239 20 6 17.985 6 15.5V13Z"
            stroke="#5382A1"
            strokeWidth="1.7"
          />
          <path
            d="M16 14H17.5C18.6 14 19.5 14.9 19.5 16C19.5 17.1 18.6 18 17.5 18H16"
            stroke="#5382A1"
            strokeWidth="1.7"
          />
        </svg>
      );
    case "React":
    case "TanStack Query":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none">
          <circle cx="12" cy="12" r="2.2" fill={color} />
          <ellipse
            cx="12"
            cy="12"
            rx="9.5"
            ry="3.8"
            stroke={color}
            strokeWidth="1.4"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9.5"
            ry="3.8"
            transform="rotate(60 12 12)"
            stroke={color}
            strokeWidth="1.4"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9.5"
            ry="3.8"
            transform="rotate(120 12 12)"
            stroke={color}
            strokeWidth="1.4"
          />
        </svg>
      );
    case "Next.js":
    case "Next.js / TS Backend":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none">
          <circle cx="12" cy="12" r="10" fill="#18181b" stroke="#fff" strokeWidth="1.5" />
          <path
            d="M8.5 16V8L16.5 18.5M15.5 8V13"
            stroke="#fff"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "Prisma ORM":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none">
          <path
            d="M12.8 3L4.5 16.5L10.8 21L19.5 17.2L12.8 3Z"
            stroke={color}
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M12.8 3L10.8 21"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "Supabase":
    case "Vite":
    case "3D GSAP Animation":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none">
          <path
            d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z"
            stroke={color}
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "AI Chatbot & Gemini AI":
    case "Antigravity":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none">
          <path
            d="M12 3C12.8 8.2 15.8 11.2 21 12C15.8 12.8 12.8 15.8 12 21C11.2 15.8 8.2 12.8 3 12C8.2 11.2 11.2 8.2 12 3Z"
            stroke={color}
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "Tailwind CSS":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none">
          <path
            d="M12 6C9.33 6 7.67 7.33 7 10C8 8.67 9.17 8.17 10.5 8.5C11.26 8.69 11.8 9.24 12.4 9.85C13.38 10.85 14.52 12 17 12C19.67 12 21.33 10.67 22 8C21 9.33 19.83 9.83 18.5 9.5C17.74 9.31 17.2 8.76 16.6 8.15C15.62 7.15 14.48 6 12 6ZM7 12C4.33 12 2.67 13.33 2 16C3 14.67 4.17 14.17 5.5 14.5C6.26 14.69 6.8 15.24 7.4 15.85C8.38 16.85 9.52 18 12 18C14.67 18 16.33 16.67 17 14C16 15.33 14.83 15.83 13.5 15.5C12.74 15.31 12.2 14.76 11.6 14.15C10.62 13.15 9.48 12 7 12Z"
            fill="#38BDF8"
          />
        </svg>
      );
    case "Node.js":
    case "Express.js":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none">
          <path
            d="M12 2L20.5 6.9V17.1L12 22L3.5 17.1V6.9L12 2Z"
            stroke={color}
            strokeWidth="1.8"
          />
          <path
            d="M9 9.5V14.5L13 17L15.5 15.5V9.5"
            stroke={color}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "Laravel":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none">
          <path
            d="M4 7.5L9 4.5L14 7.5V13.5L19 10.5L21 11.8V16.5L14 20.5L4 14.5V7.5Z"
            stroke="#FF2D20"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "Docker":
    case "Docker Compose":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none">
          <rect x="5" y="10" width="3" height="2.5" fill="#2496ED" />
          <rect x="8.5" y="10" width="3" height="2.5" fill="#2496ED" />
          <rect x="12" y="10" width="3" height="2.5" fill="#2496ED" />
          <rect x="8.5" y="7" width="3" height="2.5" fill="#2496ED" />
          <rect x="12" y="7" width="3" height="2.5" fill="#2496ED" />
          <path
            d="M3 13.5H18.5C19.5 13 20.5 12 21 11C21.5 12.2 21.2 14 19.8 14.8C18.5 18 14.5 19.5 10 19.5C5.5 19.5 3 17 3 13.5Z"
            stroke="#2496ED"
            strokeWidth="1.6"
          />
        </svg>
      );
    case "PostgreSQL":
    case "MySQL":
    case "MongoDB":
    case "SQLite":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none">
          <ellipse
            cx="12"
            cy="6.5"
            rx="7"
            ry="3"
            stroke={color}
            strokeWidth="1.7"
          />
          <path
            d="M5 6.5V12C5 13.66 8.13 15 12 15C15.87 15 19 13.66 19 12V6.5"
            stroke={color}
            strokeWidth="1.7"
          />
          <path
            d="M5 12V17.5C5 19.16 8.13 20.5 12 20.5C15.87 20.5 19 19.16 19 17.5V12"
            stroke={color}
            strokeWidth="1.7"
          />
        </svg>
      );
    case "2FA & Middleware Auth":
    case "Wazuh SIEM":
    case "Pessimistic Locking & ACID":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none">
          <path
            d="M12 3L19 6V11.5C19 16.2 15.9 20.3 12 21.5C8.1 20.3 5 16.2 5 11.5V6L12 3Z"
            stroke={color}
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 12L11.2 13.8L15 10"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "Payment Gateway":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none">
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="3"
            stroke={color}
            strokeWidth="1.8"
          />
          <path d="M3 10H21" stroke={color} strokeWidth="1.8" />
          <path
            d="M7 15H11"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "Git & GitHub":
    case "REST API & OpenAPI":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none">
          <circle cx="7" cy="6" r="2.5" stroke={color} strokeWidth="1.7" />
          <circle cx="7" cy="18" r="2.5" stroke={color} strokeWidth="1.7" />
          <circle cx="17" cy="12" r="2.5" stroke={color} strokeWidth="1.7" />
          <path
            d="M7 8.5V15.5M14.5 12H11C8.8 12 7 10.2 7 8.5"
            stroke={color}
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
    case "Figma":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none">
          <circle cx="14.5" cy="12" r="2.5" stroke={color} strokeWidth="1.7" />
          <path
            d="M9.5 4.5H14.5C15.9 4.5 17 5.6 17 7C17 8.4 15.9 9.5 14.5 9.5H9.5C8.1 9.5 7 8.4 7 7C7 5.6 8.1 4.5 9.5 4.5Z"
            stroke={color}
            strokeWidth="1.7"
          />
          <path
            d="M9.5 9.5H12V14.5H9.5C8.1 14.5 7 13.4 7 12C7 10.6 8.1 9.5 9.5 9.5Z"
            stroke={color}
            strokeWidth="1.7"
          />
          <path
            d="M9.5 14.5H12V17C12 18.4 10.9 19.5 9.5 19.5C8.1 19.5 7 18.4 7 17C7 15.6 8.1 14.5 9.5 14.5Z"
            stroke={color}
            strokeWidth="1.7"
          />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none">
          <path
            d="M8 8L4 12L8 16M16 8L20 12L16 16M13.5 6L10.5 18"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

const SKILL_PILL_COLUMNS: {
  title: string;
  items: { name: string; color: string }[];
}[] = [
  {
    title: "Languages & Frontend",
    items: [
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "PHP", color: "#777BB4" },
      { name: "Java", color: "#F89820" },
      { name: "React", color: "#61DAFB" },
      { name: "Next.js", color: "#FFFFFF" },
      { name: "Vite", color: "#A855F7" },
      { name: "Tailwind CSS", color: "#38BDF8" },
      { name: "TanStack Query", color: "#FF4154" },
      { name: "3D GSAP Animation", color: "#88CE02" },
      { name: "Bootstrap", color: "#7952B3" },
      { name: "HTML5 & CSS3", color: "#E34F26" },
    ],
  },
  {
    title: "Backend & Architecture",
    items: [
      { name: "Node.js", color: "#5FA04E" },
      { name: "Express.js", color: "#E4E4E7" },
      { name: "Next.js / TS Backend", color: "#38BDF8" },
      { name: "Laravel", color: "#FF2D20" },
      { name: "Prisma ORM", color: "#2DD4BF" },
      { name: "REST API & OpenAPI", color: "#38BDF8" },
      { name: "Payment Gateway", color: "#10B981" },
      { name: "2FA & Middleware Auth", color: "#A855F7" },
      { name: "AI Chatbot & Gemini AI", color: "#60A5FA" },
      { name: "Pessimistic Locking & ACID", color: "#F59E0B" },
    ],
  },
  {
    title: "Data & Databases",
    items: [
      { name: "PostgreSQL", color: "#336791" },
      { name: "MySQL", color: "#4479A1" },
      { name: "MongoDB", color: "#47A248" },
      { name: "Supabase", color: "#3ECF8E" },
      { name: "Prisma ORM", color: "#2DD4BF" },
      { name: "SQLite", color: "#38BDF8" },
    ],
  },
  {
    title: "DevOps, Security & Tools",
    items: [
      { name: "Git & GitHub", color: "#F05032" },
      { name: "Docker", color: "#2496ED" },
      { name: "Docker Compose", color: "#2496ED" },
      { name: "Linux VPS Host", color: "#FCC624" },
      { name: "Wazuh SIEM", color: "#00A9E0" },
      { name: "Postman", color: "#FF6C37" },
      { name: "Figma", color: "#F24E1E" },
      { name: "VS Code", color: "#007ACC" },
      { name: "Antigravity", color: "#A78BFA" },
    ],
  },
];

const ALL_SKILLS = SKILL_PILL_COLUMNS.flatMap((c) => c.items);

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-5xl"
          >
            Skills &amp; Technologies
          </motion.h2>
          <p className="mt-2 text-xs text-[var(--text-muted)] sm:text-sm">
            Crafting Scalable Infrastructure And Clean Code
          </p>
        </div>

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
                  {col.items.map((item) => (
                    <span
                      key={item.name}
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] transition-all hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
                    >
                      <TechIcon name={item.name} color={item.color} />
                      <span>{item.name}</span>
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        <div className="relative mt-10 overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] py-4">
          <div className="animate-marquee flex items-center gap-4">
            {[...ALL_SKILLS, ...ALL_SKILLS].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-4 py-1.5 font-mono text-xs text-[var(--text-secondary)]"
              >
                <TechIcon name={item.name} color={item.color} />
                <span>{item.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
