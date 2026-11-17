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
  ArrowRight,
  X,
  Video,
  Sparkles,
  GitBranch,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ProjectItem, ArchitectureNode } from "@/types/portfolio";
import SpotlightCard from "@/components/ui/SpotlightCard";

interface ProjectsSectionProps {
  selectedProject: ProjectItem | null;
  onSelectProject: (project: ProjectItem | null) => void;
}

const CATEGORIES = [
  { id: "all", label: "Semua Proyek" },
  { id: "featured", label: "Proyek Utama" },
  { id: "backend", label: "Backend & API" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "education", label: "Edukasi & Mentor" },
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

export default function ProjectsSection({
  selectedProject,
  onSelectProject,
}: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [cardViewMode, setCardViewMode] = useState<
    Record<string, "overview" | "arch">
  >({});

  const filteredProjects =
    activeCategory === "all"
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === activeCategory);

  const toggleCardMode = (
    id: string,
    mode: "overview" | "arch",
    e: React.MouseEvent
  ) => {
    e.stopPropagation();
    setCardViewMode((prev) => ({ ...prev, [id]: mode }));
  };

  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
              02 // FEATURED PROJECTS &amp; SYSTEM ARCHITECTURE
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Karya Nyata, Arsitektur Backend &amp; Studi Kasus
            </h2>
          </div>

          {/* Filter Tabs (Scrollable horizontally on small phones) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {CATEGORIES.map((cat) => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`shrink-0 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all ${
                    active
                      ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-md shadow-cyan-500/20"
                      : "border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:border-cyan-500/30 hover:text-[var(--text-primary)]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const mode = cardViewMode[project.id] || "overview";
              const isFeatured = project.id === "sifest-2026";

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, delay: idx * 0.03 }}
                  className={
                    isFeatured && activeCategory === "all" ? "md:col-span-2" : ""
                  }
                >
                  <SpotlightCard
                    onClick={() => onSelectProject(project)}
                    className="h-full p-5 sm:p-6"
                  >
                    <div className="flex h-full flex-col justify-between space-y-5">
                      {/* Top Header: Badge, Period & View Switcher */}
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex flex-wrap items-center gap-2">
                            {project.badge && (
                              <span className="inline-flex items-center gap-1 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 font-mono text-[11px] font-semibold text-cyan-400">
                                <Sparkles className="h-3 w-3" />
                                {project.badge}
                              </span>
                            )}
                            <span className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-2.5 py-1 font-mono text-[11px] text-[var(--text-muted)]">
                              {project.period}
                            </span>
                          </div>

                          {/* Architecture Interactive Toggle if available */}
                          {project.architecture && (
                            <div
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] p-0.5"
                            >
                              <button
                                onClick={(e) =>
                                  toggleCardMode(project.id, "overview", e)
                                }
                                className={`rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors ${
                                  mode === "overview"
                                    ? "bg-cyan-500/20 text-cyan-400"
                                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                                }`}
                              >
                                Ringkasan
                              </button>
                              <button
                                onClick={(e) =>
                                  toggleCardMode(project.id, "arch", e)
                                }
                                className={`flex items-center gap-1 rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors ${
                                  mode === "arch"
                                    ? "bg-emerald-500/20 text-emerald-400"
                                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                                }`}
                              >
                                <Layers className="h-3 w-3" />
                                Arsitektur
                              </button>
                            </div>
                          )}
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-[var(--text-primary)] sm:text-xl">
                            {project.title}
                          </h3>
                          <p className="mt-0.5 text-xs font-medium text-emerald-400">
                            {project.role} —{" "}
                            <span className="text-[var(--text-muted)]">
                              {project.subtitle}
                            </span>
                          </p>
                        </div>
                      </div>

                      {/* Body: Overview Mode vs Architecture Flow Mode */}
                      {mode === "overview" || !project.architecture ? (
                        <div className="space-y-3">
                          <p className="text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                            {project.summary}
                          </p>
                          <ul className="space-y-1.5">
                            {project.highlights
                              .slice(0, isFeatured ? 4 : 2)
                              .map((h, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-xs text-[var(--text-secondary)]"
                                >
                                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-400" />
                                  <span>{h}</span>
                                </li>
                              ))}
                          </ul>
                        </div>
                      ) : (
                        <div
                          onClick={(e) => e.stopPropagation()}
                          className="space-y-3 rounded-xl border border-emerald-500/25 bg-[var(--bg-primary)]/85 p-4"
                        >
                          <p className="text-xs text-[var(--text-secondary)]">
                            {project.architecture.overview}
                          </p>
                          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                            {project.architecture.nodes.map((node, nIdx) => {
                              const Icon = getNodeIcon(node.type);
                              return (
                                <div
                                  key={node.id}
                                  className="flex items-start gap-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-2.5"
                                >
                                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-cyan-500/15 text-cyan-400">
                                    <Icon className="h-3.5 w-3.5" />
                                  </div>
                                  <div className="min-w-0">
                                    <p className="text-[11px] font-bold text-[var(--text-primary)]">
                                      {nIdx + 1}. {node.label}
                                    </p>
                                    <p className="text-[10px] text-[var(--text-muted)]">
                                      {node.sublabel}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                          <div className="rounded-lg border border-cyan-500/20 bg-cyan-500/5 px-3 py-2 text-[11px] text-cyan-300">
                            <strong>Keputusan Teknis:</strong>{" "}
                            {project.architecture.keyEngineeringDecision}
                          </div>
                        </div>
                      )}

                      {/* Footer: Tech Tags & Detail Trigger */}
                      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-subtle)] pt-4">
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md bg-[var(--bg-secondary)] px-2 py-1 font-mono text-[10px] font-medium text-[var(--text-secondary)]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400">
                          <span>Bedah Detail</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
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
              className="fixed inset-0 bg-black/75 backdrop-blur-sm"
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
                  <span className="inline-block rounded-md bg-cyan-500/15 px-2.5 py-1 font-mono text-[11px] font-semibold text-cyan-400">
                    {selectedProject.role} • {selectedProject.period}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-[var(--text-primary)] sm:text-2xl">
                    {selectedProject.title}
                  </h3>
                  <p className="mt-1 text-xs text-emerald-400">
                    {selectedProject.subtitle}
                  </p>
                </div>

                <button
                  onClick={() => onSelectProject(null)}
                  className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
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
                  <h4 className="mb-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
                    Kontribusi &amp; Pencapaian Teknis
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
                  <div className="space-y-3 rounded-2xl border border-cyan-500/25 bg-[var(--bg-primary)] p-4 sm:p-5">
                    <div className="flex items-center gap-2 text-xs font-bold text-cyan-400">
                      <Layers className="h-4 w-4" />
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
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-400">
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
                        className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-2.5 py-1 font-mono text-xs text-[var(--text-primary)]"
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
                        className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-500 px-4 py-2 text-xs font-bold text-slate-950 hover:brightness-110"
                      >
                        <Video className="h-3.5 w-3.5" />
                        <span>Tonton Video Pembelajaran</span>
                      </a>
                    )}
                    {selectedProject.links?.github && (
                      <a
                        href={selectedProject.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl bg-cyan-500 px-4 py-2 text-xs font-bold text-slate-950 hover:brightness-110"
                      >
                        <span>Lihat di GitHub</span>
                        <ExternalLink className="h-3.5 w-3.5" />
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
