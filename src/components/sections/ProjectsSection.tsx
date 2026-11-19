"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Video,
  Github,
  Clock,
  ChevronDown,
  ArrowUpRight,
  Check,
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

function ProjectPreviewFrame({
  project,
  indexStr,
}: {
  project: ProjectItem;
  indexStr: string;
}) {
  if (project.status === "Ongoing") {
    return (
      <div className="group/frame relative overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[#141418] p-6 sm:p-8">
        {/* Tech corner accents */}
        <span className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-zinc-500/50" />
        <span className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-zinc-500/50" />
        <span className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-zinc-500/50" />
        <span className="pointer-events-none absolute right-3 bottom-3 h-3 w-3 border-r-2 border-b-2 border-zinc-500/50" />

        <div className="flex min-h-[210px] flex-col items-center justify-center text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span>{project.badge || "2026 - Ongoing"}</span>
            <Clock className="h-3.5 w-3.5" />
          </div>

          <p className="text-xl font-extrabold tracking-widest text-white sm:text-2xl">
            ON PROGRESS......
          </p>
          <p className="mt-2 max-w-xs text-xs leading-relaxed text-zinc-400">
            Pengembangan arsitektur backend &amp; admin panel penerbitan buku
            Domus Fox sedang berjalan.
          </p>
          <span className="mt-4 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 font-mono text-[10px] text-zinc-300">
            Active Development • #{indexStr}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="group/frame relative overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[#131317] p-3 sm:p-4">
      {/* Subtle ambient glow behind preview */}
      <div className="pointer-events-none absolute -inset-10 bg-gradient-to-tr from-white/5 via-transparent to-white/5 opacity-0 transition-opacity duration-500 group-hover/frame:opacity-100" />

      {/* Top metadata bar inside stage */}
      <div className="mb-2.5 flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-zinc-500">
            /{indexStr}
          </span>
          {project.badge && (
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold text-zinc-200">
              {project.badge}
            </span>
          )}
        </div>
        <span className="font-mono text-[10px] text-zinc-500">
          {project.period}
        </span>
      </div>

      {/* Angled / Floating Image Stage */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-[#0d0d10] shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image || "/projects/sifest-2026.svg"}
          alt={project.title}
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover/frame:scale-[1.04]"
        />
      </div>
    </div>
  );
}

export default function ProjectsSection(_props: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  // Default open item in the interactive expandable list so visitors immediately see its interactivity
  const [expandedId, setExpandedId] = useState<string | null>(
    "gatekeeper-logic"
  );

  const filteredProjects =
    activeCategory === "all"
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === activeCategory);

  // Split projects into Flagship Spotlights (top 3 when viewing 'all' or 'featured') and Interactive Expandable Archive Rows
  const spotlightProjects =
    activeCategory === "all"
      ? filteredProjects.slice(0, 3)
      : activeCategory === "featured"
      ? filteredProjects
      : filteredProjects.slice(0, 2);

  const archiveProjects =
    activeCategory === "all"
      ? filteredProjects.slice(3)
      : activeCategory === "featured"
      ? []
      : filteredProjects.slice(2);

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Heading & Category Filter Tabs */}
        <div className="mb-14 flex flex-col items-center text-center">
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
            Selected production systems, high-concurrency backend architectures,
            and full-stack web applications.
          </p>

          {/* Filter Pills */}
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

        {/* PART 1: Asymmetric Zigzag Editorial Spotlights (Anti-Monoton, Responsive di HP & Desktop) */}
        <div className="space-y-12 sm:space-y-16">
          <AnimatePresence mode="popLayout">
            {spotlightProjects.map((project, idx) => {
              const isReversed = idx % 2 === 1;
              const indexStr = String(idx + 1).padStart(2, "0");

              return (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  className="bento-card relative overflow-hidden rounded-3xl p-5 sm:p-8 lg:p-10"
                >
                  {/* Large Background Watermark Number */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-6 right-6 font-mono text-[84px] font-black leading-none text-white/[0.03] select-none sm:text-[120px]"
                  >
                    {indexStr}
                  </span>

                  <div className="relative z-10 grid grid-cols-1 items-center gap-7 lg:grid-cols-12 lg:gap-10">
                    {/* Preview Column (Alternates Left / Right on Desktop) */}
                    <div
                      className={`lg:col-span-6 ${
                        isReversed ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <ProjectPreviewFrame
                        project={project}
                        indexStr={indexStr}
                      />
                    </div>

                    {/* Details Column */}
                    <div
                      className={`space-y-4 lg:col-span-6 ${
                        isReversed ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-3 py-1 font-mono text-[11px] font-semibold text-[var(--text-primary)]">
                          {project.role}
                        </span>
                        <span className="font-mono text-xs text-[var(--text-muted)]">
                          • {project.period}
                        </span>
                      </div>

                      <h3 className="text-xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-2xl lg:text-3xl">
                        {project.title}
                      </h3>

                      <p className="text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                        {project.summary}
                      </p>

                      {/* Key Highlights List */}
                      <ul className="space-y-2 pt-1">
                        {project.highlights.slice(0, 3).map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-xs leading-relaxed text-[var(--text-secondary)]"
                          >
                            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[var(--text-primary)]">
                              <Check className="h-2.5 w-2.5" />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Pills & GitHub Action */}
                      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border-subtle)] pt-5">
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-3 py-1 text-[11px] font-medium text-[var(--text-secondary)]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-2">
                          {project.links?.github && (
                            <a
                              href={project.links.github}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 rounded-full bg-[var(--text-primary)] px-4 py-2 text-xs font-bold text-[var(--bg-primary)] shadow-md transition-all hover:opacity-90 active:scale-95"
                            >
                              <Github className="h-3.5 w-3.5" />
                              <span>Github</span>
                              <ArrowUpRight className="h-3.5 w-3.5" />
                            </a>
                          )}

                          {project.links?.drive && (
                            <a
                              href={project.links.drive}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 rounded-full bg-[var(--text-primary)] px-4 py-2 text-xs font-bold text-[var(--bg-primary)] shadow-md transition-all hover:opacity-90 active:scale-95"
                            >
                              <Video className="h-3.5 w-3.5" />
                              <span>Google Drive</span>
                              <ArrowUpRight className="h-3.5 w-3.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {/* PART 2: Interactive Expandable Engineering Index (Hemat Scroll di HP, Super Interaktif!) */}
        {archiveProjects.length > 0 && (
          <div className="mt-16 sm:mt-20">
            <div className="mb-6 flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
              <div>
                <h3 className="text-base font-bold text-[var(--text-primary)] sm:text-lg">
                  More Engineering &amp; Web Projects
                </h3>
                <p className="text-xs text-[var(--text-muted)]">
                  Tap / klik baris proyek untuk membuka preview &amp; detail
                  teknisnya
                </p>
              </div>
              <span className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] px-3 py-1 font-mono text-[11px] text-[var(--text-secondary)]">
                {archiveProjects.length} Projects
              </span>
            </div>

            <div className="space-y-3">
              {archiveProjects.map((project, idx) => {
                const indexStr = String(
                  spotlightProjects.length + idx + 1
                ).padStart(2, "0");
                const isExpanded = expandedId === project.id;

                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.04 }}
                    className={`bento-card overflow-hidden rounded-2xl transition-colors ${
                      isExpanded ? "border-[var(--border-strong)]" : ""
                    }`}
                  >
                    {/* Clickable Row Header */}
                    <button
                      onClick={() =>
                        setExpandedId(isExpanded ? null : project.id)
                      }
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                    >
                      <div className="flex min-w-0 items-center gap-3.5 sm:gap-5">
                        <span className="font-mono text-xs font-bold text-[var(--text-muted)] sm:text-sm">
                          {indexStr}
                        </span>
                        <div className="min-w-0">
                          <h4 className="truncate text-sm font-bold text-[var(--text-primary)] sm:text-base">
                            {project.title}
                          </h4>
                          <p className="mt-0.5 truncate text-xs text-[var(--text-muted)]">
                            {project.role} • {project.period}
                          </p>
                        </div>
                      </div>

                      <div className="flex shrink-0 items-center gap-3">
                        {/* Preview tech pills on desktop */}
                        <div className="hidden items-center gap-1.5 md:flex">
                          {project.techStack.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-2.5 py-0.5 text-[10px] font-medium text-[var(--text-secondary)]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-primary)] transition-transform duration-300 ${
                            isExpanded ? "rotate-180 bg-white text-zinc-950" : ""
                          }`}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </div>
                      </div>
                    </button>

                    {/* Expandable Content Drawer */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: "easeOut" }}
                          className="overflow-hidden border-t border-[var(--border-subtle)]"
                        >
                          <div className="grid grid-cols-1 items-center gap-6 p-5 sm:p-6 lg:grid-cols-12">
                            {/* Compact Visual Preview */}
                            <div className="lg:col-span-5">
                              <div className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-[#0d0d10]">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={
                                    project.image || "/projects/sifest-2026.svg"
                                  }
                                  alt={project.title}
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
                            </div>

                            {/* Description, Highlights & GitHub Button */}
                            <div className="space-y-4 lg:col-span-7">
                              <p className="text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                                {project.summary}
                              </p>

                              <ul className="space-y-1.5">
                                {project.highlights.map((item, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2 text-xs text-[var(--text-secondary)]"
                                  >
                                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>

                              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                                <div className="flex flex-wrap gap-1.5">
                                  {project.techStack.map((tech) => (
                                    <span
                                      key={tech}
                                      className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-2.5 py-1 text-[10px] font-medium text-[var(--text-secondary)]"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>

                                <div className="flex items-center gap-2">
                                  {project.links?.github && (
                                    <a
                                      href={project.links.github}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="inline-flex items-center gap-1.5 rounded-full bg-[var(--text-primary)] px-4 py-2 text-xs font-bold text-[var(--bg-primary)] transition-opacity hover:opacity-90"
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
                                      className="inline-flex items-center gap-1.5 rounded-full bg-[var(--text-primary)] px-4 py-2 text-xs font-bold text-[var(--bg-primary)] transition-opacity hover:opacity-90"
                                    >
                                      <Video className="h-3.5 w-3.5" />
                                      <span>Google Drive</span>
                                    </a>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
