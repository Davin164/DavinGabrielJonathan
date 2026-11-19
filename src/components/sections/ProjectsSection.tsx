"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Video,
  Github,
  Clock,
  ChevronLeft,
  ChevronRight,
  Check,
  Sparkles,
  Layers,
  Terminal,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ProjectItem } from "@/types/portfolio";

interface ProjectsSectionProps {
  selectedProject?: ProjectItem | null;
  onSelectProject?: (project: ProjectItem | null) => void;
}

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "featured", label: "Featured" },
  { id: "backend", label: "Backend & API" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "education", label: "Education" },
] as const;

// Custom dynamic aura & accent per project for the 3D Stage
const PROJECT_AURAS: Record<
  string,
  { glow: string; accentText: string; accentBorder: string; pillBg: string }
> = {
  "sifest-2026": {
    glow: "from-sky-500/25 via-indigo-500/15 to-transparent",
    accentText: "text-sky-400",
    accentBorder: "border-sky-500/40",
    pillBg: "bg-sky-500/10 text-sky-300 border-sky-500/30",
  },
  "domus-fox": {
    glow: "from-emerald-500/25 via-teal-500/15 to-transparent",
    accentText: "text-emerald-400",
    accentBorder: "border-emerald-500/40",
    pillBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
  },
  "gatekeeper-logic": {
    glow: "from-teal-500/25 via-emerald-500/15 to-transparent",
    accentText: "text-teal-400",
    accentBorder: "border-teal-500/40",
    pillBg: "bg-teal-500/10 text-teal-300 border-teal-500/30",
  },
  "docker-crud-api": {
    glow: "from-blue-500/25 via-cyan-500/15 to-transparent",
    accentText: "text-blue-400",
    accentBorder: "border-blue-500/40",
    pillBg: "bg-blue-500/10 text-blue-300 border-blue-500/30",
  },
  "wazuh-siem-nac": {
    glow: "from-amber-500/25 via-orange-500/15 to-transparent",
    accentText: "text-amber-400",
    accentBorder: "border-amber-500/40",
    pillBg: "bg-amber-500/10 text-amber-300 border-amber-500/30",
  },
  "school-cms-api": {
    glow: "from-purple-500/25 via-fuchsia-500/15 to-transparent",
    accentText: "text-purple-400",
    accentBorder: "border-purple-500/40",
    pillBg: "bg-purple-500/10 text-purple-300 border-purple-500/30",
  },
  "bookshelf-api": {
    glow: "from-cyan-500/25 via-sky-500/15 to-transparent",
    accentText: "text-cyan-400",
    accentBorder: "border-cyan-500/40",
    pillBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
  },
  "simak-himsi": {
    glow: "from-indigo-500/25 via-blue-500/15 to-transparent",
    accentText: "text-indigo-400",
    accentBorder: "border-indigo-500/40",
    pillBg: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
  },
  "laravel-library-finance": {
    glow: "from-rose-500/25 via-pink-500/15 to-transparent",
    accentText: "text-rose-400",
    accentBorder: "border-rose-500/40",
    pillBg: "bg-rose-500/10 text-rose-300 border-rose-500/30",
  },
  "education-mentorship": {
    glow: "from-zinc-400/20 via-zinc-500/10 to-transparent",
    accentText: "text-zinc-200",
    accentBorder: "border-zinc-400/40",
    pillBg: "bg-white/10 text-zinc-200 border-white/20",
  },
};

export default function ProjectsSection({
  selectedProject,
}: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Sync when a project is chosen via Ctrl+K Command Palette
  useEffect(() => {
    if (!selectedProject) return;
    setActiveCategory("all");
    const idx = PORTFOLIO_DATA.projects.findIndex(
      (p) => p.id === selectedProject.id
    );
    if (idx !== -1) {
      setActiveIndex(idx);
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedProject]);

  const filteredProjects =
    activeCategory === "all"
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === activeCategory);

  // Reset active index when switching category
  useEffect(() => {
    setActiveIndex(0);
  }, [activeCategory]);

  const safeIndex =
    activeIndex >= filteredProjects.length ? 0 : Math.max(0, activeIndex);
  const activeProject = filteredProjects[safeIndex] || PORTFOLIO_DATA.projects[0];
  const aura = PROJECT_AURAS[activeProject.id] || PROJECT_AURAS["sifest-2026"];

  // 3D Tilt Motion Values for the Interactive Stage (Desktop Pointer)
  const stageRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), {
    stiffness: 220,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), {
    stiffness: 220,
    damping: 24,
  });

  const handleStageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleStageMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const goPrev = () => {
    setActiveIndex((prev) =>
      prev <= 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setActiveIndex((prev) =>
      prev >= filteredProjects.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="projects" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top Heading & Category Filter */}
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
          <p className="mt-2.5 max-w-lg text-xs text-[var(--text-muted)] sm:text-sm">
            Interactive 3D Project Deck — Pilih dari daftar di kiri atau geser
            kartu untuk menjelajahi setiap sistem.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
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
        </div>

        {/* Mobile Quick Horizontal Filmstrip Scrubber (Thumb-Friendly di HP!) */}
        <div className="mb-5 flex items-center gap-2 overflow-x-auto pb-2 lg:hidden">
          {filteredProjects.map((proj, idx) => {
            const isSelected = idx === safeIndex;
            const num = String(idx + 1).padStart(2, "0");
            return (
              <button
                key={proj.id}
                onClick={() => setActiveIndex(idx)}
                className={`flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-semibold transition-all ${
                  isSelected
                    ? "border-white bg-white text-zinc-950 shadow-lg"
                    : "border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)]"
                }`}
              >
                <span className="font-mono text-[10px] opacity-70">{num}</span>
                <span className="max-w-[140px] truncate">{proj.title}</span>
              </button>
            );
          })}
        </div>

        {/* MAIN INTERACTIVE SHOWCASE DECK: Left Selector Rail (Desktop) + Right 3D Perspective Stage */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
          {/* LEFT COLUMN (Desktop): Kinetic Numbered Project Rail */}
          <div className="hidden space-y-2 lg:col-span-5 lg:block">
            <div className="mb-3 flex items-center justify-between px-2 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1.5 font-mono uppercase tracking-wider">
                <Layers className="h-3.5 w-3.5" />
                Project Index ({safeIndex + 1}/{filteredProjects.length})
              </span>
              <span className="font-mono text-[11px]">Click to switch</span>
            </div>

            <div className="max-h-[560px] space-y-2 overflow-y-auto pr-1">
              {filteredProjects.map((proj, idx) => {
                const isSelected = idx === safeIndex;
                const num = String(idx + 1).padStart(2, "0");

                return (
                  <button
                    key={proj.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`group relative flex w-full items-center justify-between gap-3 overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 ${
                      isSelected
                        ? "border-[var(--border-strong)] bg-[var(--bg-card-hover)] shadow-xl"
                        : "border-[var(--border-subtle)] bg-[var(--bg-card)]/60 opacity-75 hover:border-white/15 hover:bg-[var(--bg-card)] hover:opacity-100"
                    }`}
                  >
                    {/* Active Left Indicator Bar */}
                    {isSelected && (
                      <motion.span
                        layoutId="activeProjectRailBar"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                        className="absolute top-3 bottom-3 left-0 w-1 rounded-r-full bg-white"
                      />
                    )}

                    <div className="flex min-w-0 items-center gap-3.5 pl-1">
                      <span
                        className={`font-mono text-xs font-bold transition-colors ${
                          isSelected
                            ? "text-white"
                            : "text-[var(--text-muted)] group-hover:text-[var(--text-secondary)]"
                        }`}
                      >
                        {num}
                      </span>
                      <div className="min-w-0">
                        <p
                          className={`truncate text-sm font-bold transition-colors ${
                            isSelected
                              ? "text-[var(--text-primary)]"
                              : "text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]"
                          }`}
                        >
                          {proj.title}
                        </p>
                        <p className="mt-0.5 truncate text-[11px] text-[var(--text-muted)]">
                          {proj.role} • {proj.techStack.slice(0, 2).join(" · ")}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`shrink-0 rounded-full border px-2.5 py-0.5 font-mono text-[10px] transition-colors ${
                        isSelected
                          ? "border-white/25 bg-white/10 text-white"
                          : "border-transparent bg-white/5 text-[var(--text-muted)]"
                      }`}
                    >
                      {proj.period}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: 3D Perspective Interactive Showcase Stage (Works with Touch Swipe on HP & 3D Tilt on Desktop!) */}
          <div
            ref={stageRef}
            onMouseMove={handleStageMouseMove}
            onMouseLeave={handleStageMouseLeave}
            style={{ perspective: 1200 }}
            className="relative lg:col-span-7"
          >
            {/* Dynamic Ambient Color Aura that morphs per project */}
            <div
              className={`pointer-events-none absolute -inset-6 rounded-[36px] bg-gradient-to-br ${aura.glow} blur-2xl transition-all duration-700`}
            />

            <motion.div
              style={{ rotateX, rotateY }}
              className="bento-card relative overflow-hidden rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-card)]/95 p-5 shadow-[0_28px_80px_rgba(0,0,0,0.85)] backdrop-blur-2xl sm:p-7"
            >
              {/* Top Stage Bar: Counter, Role Badge & Prev/Next Controls */}
              <div className="mb-5 flex items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-white px-3 py-1 font-mono text-xs font-extrabold text-zinc-950">
                    #{String(safeIndex + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`rounded-full border px-3 py-1 font-mono text-xs font-semibold ${aura.pillBg}`}
                  >
                    {activeProject.role}
                  </span>
                  {activeProject.badge && (
                    <span className="hidden rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-zinc-300 sm:inline-block">
                      {activeProject.badge}
                    </span>
                  )}
                </div>

                {/* Prev / Next Navigation Buttons */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={goPrev}
                    aria-label="Previous project"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-primary)] transition-all hover:border-[var(--border-strong)] hover:scale-105 active:scale-95"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={goNext}
                    aria-label="Next project"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-primary)] transition-all hover:border-[var(--border-strong)] hover:scale-105 active:scale-95"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Animated Project Stage Body */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, y: 18, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -14, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.18}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -60) goNext();
                    else if (info.offset.x > 60) goPrev();
                  }}
                  className="space-y-6"
                >
                  {/* Visual Preview Window with Floating 3D Parallax Badges */}
                  {activeProject.status === "Ongoing" ? (
                    <div className="relative flex aspect-[16/9] w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-[#171b19] to-[#111315] p-6 text-center shadow-2xl">
                      <span className="pointer-events-none absolute top-3 left-3 h-3.5 w-3.5 border-t-2 border-l-2 border-emerald-400/50" />
                      <span className="pointer-events-none absolute top-3 right-3 h-3.5 w-3.5 border-t-2 border-r-2 border-emerald-400/50" />
                      <span className="pointer-events-none absolute bottom-3 left-3 h-3.5 w-3.5 border-b-2 border-l-2 border-emerald-400/50" />
                      <span className="pointer-events-none absolute right-3 bottom-3 h-3.5 w-3.5 border-r-2 border-b-2 border-emerald-400/50" />

                      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                        <span>2026 - Ongoing Development</span>
                        <Clock className="h-3.5 w-3.5" />
                      </div>

                      <p className="text-2xl font-black tracking-widest text-white sm:text-3xl">
                        ON PROGRESS......
                      </p>
                      <p className="mt-2 max-w-md text-xs leading-relaxed text-zinc-400 sm:text-sm">
                        Pengembangan sisi backend landing page dan admin panel
                        pengajuan naskah buku Domus Fox sedang berjalan.
                      </p>
                    </div>
                  ) : (
                    <div className="group/preview relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/15 bg-[#0b0b0e] shadow-2xl">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={
                          activeProject.image || "/projects/sifest-2026.svg"
                        }
                        alt={activeProject.title}
                        className="h-full w-full object-cover object-center transition-transform duration-700 group-hover/preview:scale-105"
                      />

                      {/* Floating Bottom HUD Overlay inside Image */}
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 pt-10">
                        <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-zinc-200">
                          <Terminal className="h-3.5 w-3.5 text-emerald-400" />
                          {activeProject.subtitle}
                        </span>
                        <span className="rounded-full border border-white/15 bg-black/60 px-2.5 py-0.5 font-mono text-[10px] text-zinc-300 backdrop-blur-md">
                          {activeProject.period}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Title & Summary */}
                  <div className="space-y-2.5">
                    <h3 className="text-xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-2xl">
                      {activeProject.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                      {activeProject.summary}
                    </p>
                  </div>

                  {/* Interactive Key Highlights Bento Sub-Cards */}
                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {activeProject.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className={`flex items-start gap-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/75 p-3 text-xs leading-relaxed text-[var(--text-secondary)] ${
                          idx === 0 && activeProject.highlights.length % 2 === 1
                            ? "sm:col-span-2"
                            : ""
                        }`}
                      >
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/10 text-[var(--text-primary)]">
                          <Check className="h-2.5 w-2.5" />
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Footer: Tech Stack Pills + GitHub Button */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border-subtle)] pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-3 py-1 text-[11px] font-medium text-[var(--text-primary)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      {activeProject.links?.github && (
                        <a
                          href={activeProject.links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-[var(--text-primary)] px-5 py-2.5 text-xs font-bold text-[var(--bg-primary)] shadow-lg transition-all hover:scale-105 active:scale-95"
                        >
                          <Github className="h-4 w-4" />
                          <span>Github</span>
                        </a>
                      )}

                      {activeProject.links?.drive && (
                        <a
                          href={activeProject.links.drive}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-[var(--text-primary)] px-5 py-2.5 text-xs font-bold text-[var(--bg-primary)] shadow-lg transition-all hover:scale-105 active:scale-95"
                        >
                          <Video className="h-4 w-4" />
                          <span>Google Drive</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress Dot Bar at the very bottom of the 3D Stage */}
              <div className="mt-6 flex items-center justify-between border-t border-[var(--border-subtle)] pt-3.5 text-[11px] text-[var(--text-muted)]">
                <div className="flex items-center gap-1.5">
                  {filteredProjects.map((p, i) => (
                    <button
                      key={p.id}
                      onClick={() => setActiveIndex(i)}
                      aria-label={`Select project ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === safeIndex
                          ? "w-7 bg-[var(--text-primary)]"
                          : "w-1.5 bg-zinc-600/60 hover:bg-zinc-400"
                      }`}
                    />
                  ))}
                </div>
                <span className="flex items-center gap-1 font-mono text-[10px]">
                  <Sparkles className="h-3 w-3" />
                  Swipe or click arrows to switch
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
