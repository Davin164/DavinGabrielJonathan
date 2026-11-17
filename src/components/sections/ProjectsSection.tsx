"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Layers,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Shield,
  Database,
  Globe,
  X,
  Video,
  GitBranch,
  Github,
  Clock,
  Terminal,
  QrCode,
  Lock,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ProjectItem, ArchitectureNode } from "@/types/portfolio";

interface ProjectsSectionProps {
  selectedProject: ProjectItem | null;
  onSelectProject: (project: ProjectItem | null) => void;
}

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "featured", label: "Featured" },
  { id: "backend", label: "Backend & API" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "education", label: "Education" },
] as const;

function getNodeIcon(type: ArchitectureNode["type"]) {
  switch (type) {
    case "client":
      return Globe;
    case "security":
      return Shield;
    case "service":
      return Cpu;
    case "gateway":
      return GitBranch;
    case "database":
      return Database;
  }
}

function ProjectMockupPreview({ project }: { project: ProjectItem }) {
  // Special "ON PROGRESS......" visual inspired by atalaa-df.vercel.app (Screenshot 14)
  if (project.status === "Ongoing") {
    return (
      <div className="relative flex h-48 w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#1c1c20] to-[#141417] p-5 text-center">
        <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-[10px] font-medium text-zinc-200 backdrop-blur-md">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span>2026 - Ongoing</span>
        </div>
        <div className="absolute top-3 right-3 text-zinc-500">
          <Clock className="h-4 w-4" />
        </div>

        <p className="mt-3 text-lg font-extrabold tracking-wider text-white sm:text-xl">
          ON PROGRESS......
        </p>
        <p className="mt-1.5 max-w-[230px] text-[11px] leading-relaxed text-zinc-400">
          Backend Landing Page &amp; Admin Panel Penerbitan Buku Domus Fox sedang
          dikembangkan.
        </p>
        <span className="mt-3 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium text-zinc-300">
          Click for Architecture Preview
        </span>
      </div>
    );
  }

  // Visual theme per project ID so every card has a distinct, realistic UI preview banner (like ello-rabyndra & khalifaalhasan)
  const themes: Record<
    string,
    {
      gradient: string;
      badge: string;
      headline: string;
      sub: string;
      accent: string;
    }
  > = {
    "sifest-2026": {
      gradient: "from-sky-900/80 via-indigo-950 to-zinc-950",
      badge: "2026 - Tech Lead",
      headline: "SI FEST 2026 Ecosystem",
      sub: "Ticketing • Payment Gateway • Admin Panel • QR Scanner",
      accent: "border-sky-400/40 text-sky-300",
    },
    "gatekeeper-logic": {
      gradient: "from-emerald-950 via-teal-950/80 to-zinc-950",
      badge: "GDGoC 2026",
      headline: "The Gatekeeper Logic",
      sub: "SELECT ... FOR UPDATE • Zero Overselling Engine",
      accent: "border-emerald-400/40 text-emerald-300",
    },
    "docker-crud-api": {
      gradient: "from-blue-950 via-slate-900 to-zinc-950",
      badge: "GDGoC 2026",
      headline: "Dockerized Product API",
      sub: "Express MVC + PostgreSQL + Docker Compose",
      accent: "border-blue-400/40 text-blue-300",
    },
    "wazuh-siem-nac": {
      gradient: "from-amber-950/75 via-zinc-900 to-zinc-950",
      badge: "🏆 Best Project Q1",
      headline: "Wazuh SIEM Monitoring",
      sub: "Blue Team Real-Time Threat Detection vs Red Team",
      accent: "border-amber-400/40 text-amber-300",
    },
    "school-cms-api": {
      gradient: "from-purple-950/75 via-zinc-900 to-zinc-950",
      badge: "Gamelab Internship",
      headline: "School CMS REST API",
      sub: "Node.js + MongoDB Student Academic Data Service",
      accent: "border-purple-400/40 text-purple-300",
    },
    "bookshelf-api": {
      gradient: "from-teal-950/75 via-zinc-900 to-zinc-950",
      badge: "Dicoding Submission",
      headline: "Bookshelf RESTful API",
      sub: "Nanoid + ESLint Airbnb JavaScript Style Guide",
      accent: "border-teal-400/40 text-teal-300",
    },
    "simak-himsi": {
      gradient: "from-cyan-950/80 via-slate-900 to-zinc-950",
      badge: "🏆 Best Team Project",
      headline: "Portal Akademik SIMAK",
      sub: "University Academic Information System — PTI #1 HIMSI",
      accent: "border-cyan-400/40 text-cyan-300",
    },
    "laravel-library-finance": {
      gradient: "from-rose-950/70 via-zinc-900 to-zinc-950",
      badge: "Full-Stack Web",
      headline: "Library & Finance Suite",
      sub: "Laravel + Bootstrap + MySQL Full-Stack Applications",
      accent: "border-rose-400/40 text-rose-300",
    },
    "education-mentorship": {
      gradient: "from-zinc-800 via-zinc-900 to-zinc-950",
      badge: "Education & Mentor",
      headline: "Java Basic & Web Dev Mentor",
      sub: "Video Pembelajaran SI UNSRI & Mentoring Staff TID",
      accent: "border-zinc-400/40 text-zinc-200",
    },
  };

  const cfg = themes[project.id] || {
    gradient: "from-zinc-800 to-zinc-950",
    badge: "Website",
    headline: project.title,
    sub: project.subtitle,
    accent: "border-white/20 text-zinc-200",
  };

  return (
    <div
      className={`relative flex h-48 w-full flex-col justify-between overflow-hidden bg-gradient-to-br ${cfg.gradient} p-4 transition-transform duration-500 group-hover:scale-[1.03]`}
    >
      {/* Decorative grid overlay inside mockup */}
      <div className="bg-architectural-grid pointer-events-none absolute inset-0 opacity-40" />

      {/* Top Bar inside Preview */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="rounded-full border border-white/15 bg-black/55 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-md">
          {cfg.badge}
        </span>

        <div className="flex items-center gap-1 rounded-full bg-black/40 px-2 py-1 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-rose-400/80" />
          <span className="h-2 w-2 rounded-full bg-amber-400/80" />
          <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
        </div>
      </div>

      {/* Simulated Browser / System Card Window inside Preview */}
      <div className="relative z-10 my-auto rounded-xl border border-white/10 bg-black/45 p-3.5 shadow-xl backdrop-blur-md">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {project.id === "sifest-2026" ? (
              <QrCode className="h-4 w-4 text-sky-300" />
            ) : project.id === "gatekeeper-logic" ? (
              <Lock className="h-4 w-4 text-emerald-300" />
            ) : (
              <Terminal className="h-4 w-4 text-zinc-300" />
            )}
            <p className="text-xs font-extrabold tracking-tight text-white sm:text-sm">
              {cfg.headline}
            </p>
          </div>
          <span
            className={`rounded border px-1.5 py-0.5 font-mono text-[9px] font-semibold ${cfg.accent}`}
          >
            {project.period}
          </span>
        </div>
        <p className="mt-1 line-clamp-1 font-mono text-[10px] text-zinc-300">
          {cfg.sub}
        </p>
      </div>

      {/* Bottom Subtle Role Indicator */}
      <div className="relative z-10 flex items-center justify-between text-[10px] text-zinc-300/90">
        <span className="font-medium">{project.role}</span>
        {project.architecture && (
          <span className="inline-flex items-center gap-1 font-mono text-[9px] text-white/90">
            <Layers className="h-3 w-3" />
            System Flow Ready
          </span>
        )}
      </div>
    </div>
  );
}

export default function ProjectsSection({
  selectedProject,
  onSelectProject,
}: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProjects =
    activeCategory === "all"
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Large Gradient Heading (Exact match to ello-rabyndra Screenshot 2) */}
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

        {/* 3-Column Card Grid (Inspired by ello-rabyndra, khalifaalhasan & atalaa-df) */}
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
                onClick={() => onSelectProject(project)}
                className="bento-card group flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl"
              >
                {/* Top Mockup Visual Banner */}
                <div>
                  <div className="overflow-hidden border-b border-[var(--border-subtle)]">
                    <ProjectMockupPreview project={project} />
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

                {/* Bottom Action Buttons (Exact match to ello-rabyndra Screenshot 2: [Github] [View]) */}
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 border-t border-[var(--border-subtle)] px-5 py-3.5"
                >
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-3 py-1.5 text-xs font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-strong)]"
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
                      className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-3 py-1.5 text-xs font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-strong)]"
                    >
                      <Video className="h-3.5 w-3.5" />
                      <span>Drive Video</span>
                    </a>
                  )}

                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-3 py-1.5 text-xs font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-strong)]"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>{project.architecture ? "Architecture" : "View"}</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Interactive Project Detail Modal / Mobile Bottom Sheet */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => onSelectProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ type: "spring", damping: 26, stiffness: 280 }}
              className="relative z-10 max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6 shadow-2xl sm:rounded-2xl sm:p-7"
            >
              {/* Mobile Drag Handle Indicator */}
              <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-zinc-600/50 sm:hidden" />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-block rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-3 py-1 font-mono text-[11px] font-semibold text-[var(--text-primary)]">
                    {selectedProject.role} • {selectedProject.period}
                  </span>
                  <h3 className="mt-2.5 text-xl font-bold text-[var(--text-primary)] sm:text-2xl">
                    {selectedProject.title}
                  </h3>
                  <p className="mt-1 text-xs text-[var(--text-muted)]">
                    {selectedProject.subtitle}
                  </p>
                </div>

                <button
                  onClick={() => onSelectProject(null)}
                  className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-5 space-y-5">
                <p className="text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                  {selectedProject.summary}
                </p>

                {/* Full Highlights */}
                <div>
                  <h4 className="mb-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)]">
                    Key Highlights &amp; Engineering Impact
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/60 p-3 text-xs text-[var(--text-primary)]"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* System Architecture Diagram inside Modal */}
                {selectedProject.architecture && (
                  <div className="space-y-3 rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-primary)] p-4 sm:p-5">
                    <div className="flex items-center gap-2 text-xs font-bold text-[var(--text-primary)]">
                      <Layers className="h-4 w-4 text-emerald-400" />
                      <span>System Architecture Flow</span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)]">
                      {selectedProject.architecture.overview}
                    </p>
                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {selectedProject.architecture.nodes.map((node, i) => {
                        const Icon = getNodeIcon(node.type);
                        return (
                          <div
                            key={node.id}
                            className="flex items-center gap-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-3"
                          >
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)]">
                              <Icon className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-[var(--text-primary)]">
                                {i + 1}. {node.label}
                              </p>
                              <p className="text-[11px] text-[var(--text-muted)]">
                                {node.sublabel}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/10 p-3 text-xs text-emerald-300">
                      <strong>Engineering Decision:</strong>{" "}
                      {selectedProject.architecture.keyEngineeringDecision}
                    </div>
                  </div>
                )}

                {/* Tech Stack & External Links */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border-subtle)] pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.techStack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-3 py-1 font-mono text-xs text-[var(--text-primary)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {selectedProject.links?.drive && (
                      <a
                        href={selectedProject.links.drive}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-bold text-zinc-950 hover:opacity-90"
                      >
                        <Video className="h-3.5 w-3.5" />
                        <span>Watch Learning Videos</span>
                      </a>
                    )}
                    {selectedProject.links?.github && (
                      <a
                        href={selectedProject.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-bold text-zinc-950 hover:opacity-90"
                      >
                        <Github className="h-3.5 w-3.5" />
                        <span>View on GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
