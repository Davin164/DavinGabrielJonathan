"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Video,
  Github,
  Clock,
  Check,
  Terminal,
  ChevronRight,
  FolderGit2,
  MousePointerClick,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ProjectItem } from "@/types/portfolio";

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "featured", label: "Featured" },
  { id: "backend", label: "Backend & API" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "education", label: "Education" },
] as const;

const FOLDER_THEMES: Record<
  string,
  {
    accent: string;
    tabBorder: string;
    glow: string;
    dot: string;
    badgeBg: string;
  }
> = {
  "sifest-2026": {
    accent: "#38bdf8",
    tabBorder: "border-sky-500/40",
    glow: "from-sky-500/20 via-indigo-500/10 to-transparent",
    dot: "bg-sky-400 shadow-[0_0_10px_#38bdf8]",
    badgeBg: "border-sky-500/30 bg-sky-500/10 text-sky-300",
  },
  "domus-fox": {
    accent: "#10b981",
    tabBorder: "border-emerald-500/40",
    glow: "from-emerald-500/20 via-teal-500/10 to-transparent",
    dot: "bg-emerald-400 shadow-[0_0_10px_#10b981]",
    badgeBg: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  },
  "gatekeeper-logic": {
    accent: "#2dd4bf",
    tabBorder: "border-teal-500/40",
    glow: "from-teal-500/20 via-emerald-500/10 to-transparent",
    dot: "bg-teal-400 shadow-[0_0_10px_#2dd4bf]",
    badgeBg: "border-teal-500/30 bg-teal-500/10 text-teal-300",
  },
  "docker-crud-api": {
    accent: "#60a5fa",
    tabBorder: "border-blue-500/40",
    glow: "from-blue-500/20 via-sky-500/10 to-transparent",
    dot: "bg-blue-400 shadow-[0_0_10px_#60a5fa]",
    badgeBg: "border-blue-500/30 bg-blue-500/10 text-blue-300",
  },
  "wazuh-siem-nac": {
    accent: "#fbbf24",
    tabBorder: "border-amber-500/40",
    glow: "from-amber-500/20 via-orange-500/10 to-transparent",
    dot: "bg-amber-400 shadow-[0_0_10px_#fbbf24]",
    badgeBg: "border-amber-500/30 bg-amber-500/10 text-amber-300",
  },
  "school-cms-api": {
    accent: "#c084fc",
    tabBorder: "border-purple-500/40",
    glow: "from-purple-500/20 via-fuchsia-500/10 to-transparent",
    dot: "bg-purple-400 shadow-[0_0_10px_#c084fc]",
    badgeBg: "border-purple-500/30 bg-purple-500/10 text-purple-300",
  },
  "bookshelf-api": {
    accent: "#22d3ee",
    tabBorder: "border-cyan-500/40",
    glow: "from-cyan-500/20 via-sky-500/10 to-transparent",
    dot: "bg-cyan-400 shadow-[0_0_10px_#22d3ee]",
    badgeBg: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
  },
  "simak-himsi": {
    accent: "#818cf8",
    tabBorder: "border-indigo-500/40",
    glow: "from-indigo-500/20 via-blue-500/10 to-transparent",
    dot: "bg-indigo-400 shadow-[0_0_10px_#818cf8]",
    badgeBg: "border-indigo-500/30 bg-indigo-500/10 text-indigo-300",
  },
  "laravel-library-finance": {
    accent: "#fb7185",
    tabBorder: "border-rose-500/40",
    glow: "from-rose-500/20 via-pink-500/10 to-transparent",
    dot: "bg-rose-400 shadow-[0_0_10px_#fb7185]",
    badgeBg: "border-rose-500/30 bg-rose-500/10 text-rose-300",
  },
  "education-mentorship": {
    accent: "#e4e4e7",
    tabBorder: "border-zinc-400/40",
    glow: "from-zinc-400/20 via-zinc-500/10 to-transparent",
    dot: "bg-zinc-200 shadow-[0_0_10px_#ffffff]",
    badgeBg: "border-white/25 bg-white/10 text-zinc-200",
  },
};

function ProjectVisualGraphic({
  project,
  accent,
}: {
  project: ProjectItem;
  accent: string;
}) {
  const [imgFailed, setImgFailed] = useState(false);
  const hasCustomPhoto =
    project.image && !project.image.endsWith(".svg") && !imgFailed;

  if (project.status === "Ongoing") {
    return (
      <div className="relative flex aspect-[16/10] w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-emerald-500/30 bg-[#111513] p-5 text-center shadow-2xl">
        <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold text-emerald-400">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span>2026 | Ongoing</span>
          <Clock className="h-3 w-3" />
        </div>
        <p className="mt-1 text-xl font-black tracking-widest text-white">
          ON PROGRESS...
        </p>
        <p className="mt-1.5 text-[11px] leading-relaxed text-zinc-400">
          Pengembangan backend landing page &amp; admin panel penerbitan buku
          Domus Fox sedang berjalan.
        </p>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#0c0c10] p-2.5 shadow-2xl">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#111318]">
        {hasCustomPhoto ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImgFailed(true)}
            className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
          />
        ) : (
          <svg
            viewBox="0 0 640 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
          >
            <rect width="640" height="400" fill="#0d1016" />
            <circle
              cx="520"
              cy="70"
              r="180"
              fill={accent}
              fillOpacity="0.12"
            />
            <circle
              cx="110"
              cy="340"
              r="160"
              fill={accent}
              fillOpacity="0.08"
            />
            <rect
              x="36"
              y="32"
              width="568"
              height="336"
              rx="14"
              fill="#141821"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1.5"
            />
            <rect
              x="36"
              y="32"
              width="568"
              height="36"
              rx="14"
              fill="#1b202c"
            />
            <circle cx="58" cy="50" r="5" fill="#3f3f46" />
            <circle cx="74" cy="50" r="5" fill="#3f3f46" />
            <circle cx="90" cy="50" r="5" fill="#3f3f46" />
            <rect
              x="116"
              y="42"
              width="210"
              height="16"
              rx="8"
              fill="#0d1016"
            />

            <rect
              x="64"
              y="96"
              width="240"
              height="22"
              rx="6"
              fill="#f4f4f5"
            />
            <rect
              x="64"
              y="130"
              width="190"
              height="12"
              rx="4"
              fill="#71717a"
            />
            <rect
              x="64"
              y="150"
              width="155"
              height="12"
              rx="4"
              fill="#52525b"
            />

            <rect
              x="64"
              y="186"
              width="115"
              height="34"
              rx="8"
              fill={accent}
              fillOpacity="0.85"
            />
            <rect
              x="190"
              y="186"
              width="95"
              height="34"
              rx="8"
              fill="#27272a"
            />

            <rect
              x="64"
              y="246"
              width="240"
              height="92"
              rx="10"
              fill="#0d1016"
              stroke="rgba(255,255,255,0.07)"
            />
            <rect
              x="82"
              y="266"
              width="110"
              height="12"
              rx="4"
              fill={accent}
            />
            <rect
              x="82"
              y="288"
              width="180"
              height="10"
              rx="3"
              fill="#52525b"
            />
            <rect
              x="82"
              y="306"
              width="145"
              height="10"
              rx="3"
              fill="#3f3f46"
            />

            <rect
              x="334"
              y="96"
              width="242"
              height="242"
              rx="12"
              fill="#0d1016"
              stroke="rgba(255,255,255,0.08)"
            />
            <rect
              x="354"
              y="116"
              width="202"
              height="105"
              rx="8"
              fill="#181d27"
            />
            <path
              d="M374 195 L415 162 L455 176 L500 138 L536 152"
              stroke={accent}
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              x="354"
              y="238"
              width="135"
              height="14"
              rx="4"
              fill="#e4e4e7"
            />
            <rect
              x="354"
              y="260"
              width="95"
              height="10"
              rx="3"
              fill="#71717a"
            />
            <rect
              x="354"
              y="288"
              width="202"
              height="30"
              rx="6"
              fill={accent}
              fillOpacity="0.22"
            />
          </svg>
        )}
      </div>

      <div className="mt-2 flex items-center justify-between gap-2 px-1 font-mono text-[11px] text-zinc-400">
        <span className="flex items-center gap-1.5 truncate">
          <Terminal className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
          <span className="truncate">{project.role}</span>
        </span>
        <span className="shrink-0">{project.period}</span>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [deckPage, setDeckPage] = useState<0 | 1>(0);
  const [activeId, setActiveId] = useState<string>(
    PORTFOLIO_DATA.projects[0].id
  );

  const filteredProjects =
    activeCategory === "all"
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === activeCategory);

  const hasTwoDecks = activeCategory === "all" && filteredProjects.length > 5;
  const visibleProjects = hasTwoDecks
    ? deckPage === 0
      ? filteredProjects.slice(0, 5)
      : filteredProjects.slice(5, 10)
    : filteredProjects;

  useEffect(() => {
    if (
      visibleProjects.length > 0 &&
      !visibleProjects.some((p) => p.id === activeId)
    ) {
      setActiveId(visibleProjects[0].id);
    }
  }, [activeCategory, deckPage, visibleProjects, activeId]);

  return (
    <section id="projects" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="heading-gradient text-3xl font-extrabold tracking-tight sm:text-5xl"
          >
            Projects I worked on
          </motion.h2>

          <p className="mt-2.5 inline-flex items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] px-3.5 py-1 text-xs text-[var(--text-secondary)]">
            <MousePointerClick className="h-3.5 w-3.5 text-emerald-400" />
            <span>Klik atau tekan tab folder untuk membuka detail proyek</span>
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setDeckPage(0);
                  }}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                    active
                      ? "bg-[var(--text-primary)] text-[var(--bg-primary)] shadow-md"
                      : "border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {hasTwoDecks && (
            <div className="mt-4 inline-flex items-center gap-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] p-1">
              <button
                onClick={() => {
                  setDeckPage(0);
                  setActiveId(filteredProjects[0].id);
                }}
                className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 font-mono text-xs font-semibold transition-all ${
                  deckPage === 0
                    ? "bg-white text-zinc-950 shadow"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                <FolderGit2 className="h-3.5 w-3.5" />
                <span>Deck 01 to 05</span>
              </button>
              <button
                onClick={() => {
                  setDeckPage(1);
                  if (filteredProjects[5]) {
                    setActiveId(filteredProjects[5].id);
                  }
                }}
                className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 font-mono text-xs font-semibold transition-all ${
                  deckPage === 1
                    ? "bg-white text-zinc-950 shadow"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                <FolderGit2 className="h-3.5 w-3.5" />
                <span>Deck 06 to 10</span>
              </button>
            </div>
          )}
        </div>

        <div className="hidden h-[580px] w-full items-stretch gap-3 lg:flex">
          {visibleProjects.map((project, idx) => {
            const globalIndex =
              hasTwoDecks && deckPage === 1 ? idx + 6 : idx + 1;
            const numStr = String(globalIndex).padStart(2, "0");
            const isExpanded = project.id === activeId;
            const theme =
              FOLDER_THEMES[project.id] || FOLDER_THEMES["sifest-2026"];

            return (
              <div
                key={project.id}
                onClick={() => setActiveId(project.id)}
                style={{
                  flex: isExpanded ? "5.6 1 0%" : "0.85 1 0%",
                }}
                className="group relative flex h-full min-w-[74px] cursor-pointer flex-col transition-[flex] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[flex]"
              >
                <div className="flex h-9 shrink-0 items-end">
                  <div
                    className={`relative flex h-9 items-center gap-2 rounded-t-2xl border-t border-l px-4 transition-colors duration-300 ${
                      isExpanded
                        ? `${theme.tabBorder} bg-[#1a1a20] text-white`
                        : "border-[var(--border-subtle)] bg-[#141418] text-[var(--text-muted)] group-hover:text-[var(--text-primary)]"
                    }`}
                  >
                    <span className={`h-2 w-2 rounded-full ${theme.dot}`} />
                    <span className="font-mono text-xs font-extrabold tracking-wider">
                      {numStr}
                    </span>
                    {isExpanded && (
                      <span className="ml-1 truncate font-mono text-[11px] uppercase tracking-widest text-zinc-400">
                        | {project.badge || project.category}
                      </span>
                    )}

                    <svg
                      viewBox="0 0 24 36"
                      className="absolute -right-[23px] bottom-0 h-9 w-6 overflow-visible"
                      fill="none"
                    >
                      <path
                        d="M0 0 L24 36 L0 36 Z"
                        fill={isExpanded ? "#1a1a20" : "#141418"}
                      />
                      <path
                        d="M0 0 L24 36"
                        stroke={
                          isExpanded
                            ? theme.accent
                            : "rgba(255, 255, 255, 0.08)"
                        }
                        strokeOpacity={isExpanded ? "0.45" : "1"}
                        strokeWidth="1.2"
                      />
                    </svg>
                  </div>

                  <div
                    className={`ml-[23px] h-[1px] flex-1 transition-colors duration-300 ${
                      isExpanded ? "bg-white/20" : "bg-[var(--border-subtle)]"
                    }`}
                  />
                </div>

                <div
                  className={`relative flex flex-1 overflow-hidden rounded-tr-2xl rounded-b-2xl border-r border-b border-l transition-colors duration-300 ${
                    isExpanded
                      ? `${theme.tabBorder} bg-[#18181d] shadow-[0_25px_70px_rgba(0,0,0,0.85)]`
                      : "border-[var(--border-subtle)] bg-[#131317]/90 hover:border-white/20 hover:bg-[#17171c]"
                  }`}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${theme.glow} transition-opacity duration-500 ${
                      isExpanded ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {isExpanded && (
                    <>
                      <span
                        style={{ borderColor: theme.accent }}
                        className="pointer-events-none absolute top-3 right-3 h-3.5 w-3.5 border-t-2 border-r-2 opacity-60"
                      />
                      <span
                        style={{ borderColor: theme.accent }}
                        className="pointer-events-none absolute bottom-3 left-3 h-3.5 w-3.5 border-b-2 border-l-2 opacity-60"
                      />
                    </>
                  )}

                  {!isExpanded ? (
                    <div className="relative z-10 flex h-full w-full flex-col items-center justify-between py-5">
                      <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-zinc-400">
                        {project.period}
                      </span>

                      <div className="flex flex-1 items-center justify-center overflow-hidden py-3">
                        <p
                          style={{
                            writingMode: "vertical-rl",
                            transform: "rotate(180deg)",
                          }}
                          className="max-h-[320px] truncate text-sm font-bold tracking-wide text-zinc-300 transition-colors group-hover:text-white"
                        >
                          {project.title}
                        </p>
                      </div>

                      <div className="flex flex-col items-center gap-1.5">
                        <span className="font-mono text-[9px] font-semibold uppercase tracking-wider text-zinc-400 group-hover:text-white">
                          Klik
                        </span>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition-all group-hover:scale-110 group-hover:border-white/30 group-hover:bg-white group-hover:text-zinc-950">
                          <ChevronRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative z-10 flex h-full w-full min-w-[580px] flex-col justify-between p-6 xl:min-w-[660px] xl:p-7">
                      <div className="grid grid-cols-12 items-center gap-6">
                        <div className="col-span-5">
                          <ProjectVisualGraphic
                            project={project}
                            accent={theme.accent}
                          />
                        </div>

                        <div className="col-span-7 space-y-2.5">
                          <div className="flex flex-wrap items-center gap-2">
                            <span
                              className={`rounded-full border px-3 py-0.5 font-mono text-[11px] font-semibold ${theme.badgeBg}`}
                            >
                              {project.role}
                            </span>
                            <span className="font-mono text-xs text-zinc-400">
                              | {project.period}
                            </span>
                          </div>

                          <h3 className="text-xl font-extrabold tracking-tight text-white xl:text-2xl">
                            {project.title}
                          </h3>

                          <p className="text-xs leading-relaxed text-zinc-300">
                            {project.summary}
                          </p>

                          <ul className="space-y-1.5 pt-1">
                            {project.highlights.slice(0, 3).map((h, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-xs leading-relaxed text-zinc-300/90"
                              >
                                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                                  <Check className="h-2.5 w-2.5" />
                                </span>
                                <span className="line-clamp-2">{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-3.5"
                      >
                        <div className="flex flex-wrap items-center gap-1.5">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] font-medium text-zinc-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex shrink-0 items-center gap-2">
                          {project.links?.github && (
                            <a
                              href={project.links.github}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-zinc-950 shadow-lg transition-transform hover:scale-105 active:scale-95"
                            >
                              <Github className="h-3.5 w-3.5" />
                              <span>Github</span>
                            </a>
                          )}

                          {project.links?.drive && (
                            <a
                              href={project.links.drive}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-zinc-950 shadow-lg transition-transform hover:scale-105 active:scale-95"
                            >
                              <Video className="h-3.5 w-3.5" />
                              <span>Google Drive</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="space-y-3.5 lg:hidden">
          {visibleProjects.map((project, idx) => {
            const globalIndex =
              hasTwoDecks && deckPage === 1 ? idx + 6 : idx + 1;
            const numStr = String(globalIndex).padStart(2, "0");
            const isExpanded = project.id === activeId;
            const theme =
              FOLDER_THEMES[project.id] || FOLDER_THEMES["sifest-2026"];

            return (
              <div key={project.id} className="flex flex-col">
                <div className="flex items-end">
                  <button
                    onClick={() => setActiveId(project.id)}
                    className={`relative flex h-8 items-center gap-2 rounded-t-xl border-t border-l px-3.5 text-left transition-colors ${
                      isExpanded
                        ? `${theme.tabBorder} bg-[#1a1a20] text-white`
                        : "border-[var(--border-subtle)] bg-[#141418] text-[var(--text-muted)]"
                    }`}
                  >
                    <span className={`h-2 w-2 rounded-full ${theme.dot}`} />
                    <span className="font-mono text-xs font-extrabold">
                      {numStr}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                      | {project.badge || project.period}
                    </span>

                    <svg
                      viewBox="0 0 20 32"
                      className="absolute -right-[19px] bottom-0 h-8 w-5"
                      fill="none"
                    >
                      <path
                        d="M0 0 L20 32 L0 32 Z"
                        fill={isExpanded ? "#1a1a20" : "#141418"}
                      />
                      <path
                        d="M0 0 L20 32"
                        stroke={
                          isExpanded
                            ? theme.accent
                            : "rgba(255, 255, 255, 0.08)"
                        }
                        strokeOpacity={isExpanded ? "0.45" : "1"}
                        strokeWidth="1.2"
                      />
                    </svg>
                  </button>
                  <div
                    className={`ml-[19px] h-[1px] flex-1 ${
                      isExpanded ? "bg-white/20" : "bg-[var(--border-subtle)]"
                    }`}
                  />
                </div>

                <div
                  onClick={() => setActiveId(project.id)}
                  className={`relative overflow-hidden rounded-tr-2xl rounded-b-2xl border-r border-b border-l transition-all ${
                    isExpanded
                      ? `${theme.tabBorder} bg-[#18181d] p-5 shadow-2xl`
                      : "border-[var(--border-subtle)] bg-[#131317] px-4 py-3.5"
                  }`}
                >
                  {isExpanded && (
                    <div
                      className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${theme.glow}`}
                    />
                  )}

                  <div className="relative z-10 flex items-center justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-bold text-white sm:text-base">
                        {project.title}
                      </h3>
                      <p className="text-[11px] text-zinc-400">
                        {project.role} | {project.period}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {!isExpanded && (
                        <span className="font-mono text-[10px] text-zinc-400">
                          Tekan
                        </span>
                      )}
                      <ChevronRight
                        className={`h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-300 ${
                          isExpanded ? "rotate-90 text-white" : ""
                        }`}
                      />
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative z-10 overflow-hidden"
                      >
                        <div className="mt-4 space-y-4 border-t border-white/10 pt-4">
                          <ProjectVisualGraphic
                            project={project}
                            accent={theme.accent}
                          />

                          <p className="text-xs leading-relaxed text-zinc-300">
                            {project.summary}
                          </p>

                          <ul className="space-y-1.5">
                            {project.highlights.slice(0, 3).map((h, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-xs text-zinc-300"
                              >
                                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>

                          <div
                            onClick={(e) => e.stopPropagation()}
                            className="flex flex-wrap items-center justify-between gap-3 pt-2"
                          >
                            <div className="flex flex-wrap gap-1.5">
                              {project.techStack.map((tech) => (
                                <span
                                  key={tech}
                                  className="rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] text-zinc-200"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>

                            {project.links?.github && (
                              <a
                                href={project.links.github}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-bold text-zinc-950"
                              >
                                <Github className="h-3.5 w-3.5" />
                                <span>Github</span>
                              </a>
                            )}

                            {project.links?.drive && (
                              <a
                                href={project.links.drive}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-bold text-zinc-950"
                              >
                                <Video className="h-3.5 w-3.5" />
                                <span>Google Drive</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
