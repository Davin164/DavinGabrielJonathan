"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Video, Github, Clock } from "lucide-react";
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

function ProjectThumbnail({ project }: { project: ProjectItem }) {
  // Clean "ON PROGRESS......" state for ongoing projects (atalaa-df Screenshot 14)
  if (project.status === "Ongoing") {
    return (
      <div className="relative flex h-48 w-full flex-col items-center justify-center overflow-hidden bg-[#161619] p-5 text-center">
        <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-[10px] font-medium text-zinc-200 backdrop-blur-md">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span>{project.badge || "2026 - Ongoing"}</span>
        </div>
        <div className="absolute top-3 right-3 text-zinc-500">
          <Clock className="h-4 w-4" />
        </div>

        <p className="mt-2 text-lg font-extrabold tracking-wider text-white sm:text-xl">
          ON PROGRESS......
        </p>
        <p className="mt-1.5 max-w-[240px] text-[11px] leading-relaxed text-zinc-400">
          Proyek pengembangan backend &amp; admin panel penerbitan buku sedang
           dalam tahap pengerjaan.
        </p>
        <span className="mt-3 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium text-zinc-300">
          Coming Soon
        </span>
      </div>
    );
  }

  return (
    <div className="relative h-48 w-full overflow-hidden bg-[#141417]">
      {/* Top-Left Category Badge (like ello-rabyndra Screenshot 2) */}
      {project.badge && (
        <span className="absolute top-3 left-3 z-10 rounded-full border border-white/10 bg-black/65 px-3 py-1 text-[10px] font-semibold text-zinc-100 backdrop-blur-md">
          {project.badge}
        </span>
      )}

      {/* Project Thumbnail Image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project.image || "/projects/sifest-2026.svg"}
        alt={project.title}
        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
}

export default function ProjectsSection(_props: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProjects =
    activeCategory === "all"
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Large Gradient Heading (ello-rabyndra Screenshot 2) */}
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

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="bento-card group flex flex-col justify-between overflow-hidden rounded-2xl"
              >
                {/* Top Thumbnail Banner */}
                <div>
                  <div className="overflow-hidden border-b border-[var(--border-subtle)]">
                    <ProjectThumbnail project={project} />
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    <h3 className="text-base font-bold text-[var(--text-primary)] sm:text-lg">
                      {project.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-[var(--text-secondary)]">
                      {project.summary}
                    </p>

                    {/* Tech Pill Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-2.5 py-0.5 text-[10px] font-medium text-[var(--text-secondary)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Row: ONLY GitHub (or Drive Video for Java course) */}
                <div className="flex items-center gap-2 border-t border-[var(--border-subtle)] px-5 py-3.5">
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-3.5 py-1.5 text-xs font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-strong)]"
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
                      className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-3.5 py-1.5 text-xs font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-strong)]"
                    >
                      <Video className="h-3.5 w-3.5" />
                      <span>Google Drive</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
