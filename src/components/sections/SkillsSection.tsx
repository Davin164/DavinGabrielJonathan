"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, Layout, Database, Sparkles, Wrench } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import SpotlightCard from "@/components/ui/SpotlightCard";

function getCategoryIcon(id: string) {
  switch (id) {
    case "backend":
      return Server;
    case "frontend":
      return Layout;
    default:
      return Database;
  }
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
              04 // ENGINEERING TOOLBOX &amp; TECHNICAL STACK
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Keahlian Teknis Berdasarkan Implementasi Nyata
            </h2>
          </div>
          <p className="max-w-md text-xs text-[var(--text-secondary)] sm:text-sm">
            Setiap teknologi dipetakan langsung ke proyek nyata yang pernah dibangun, mulai dari REST API &amp; Payment Gateway hingga SIEM Wazuh.
          </p>
        </div>

        {/* 3 Pillar Columns */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {PORTFOLIO_DATA.skillCategories.map((category, idx) => {
            const Icon = getCategoryIcon(category.id);
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
              >
                <SpotlightCard className="h-full p-5 sm:p-6">
                  <div className="flex h-full flex-col justify-between space-y-5">
                    <div>
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-3 text-lg font-bold text-[var(--text-primary)]">
                        {category.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-[var(--text-secondary)]">
                        {category.subtitle}
                      </p>
                    </div>

                    <div className="space-y-2.5">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className={`rounded-xl border p-3 transition-colors ${
                            skill.highlight
                              ? "border-cyan-500/25 bg-[var(--bg-secondary)]/90"
                              : "border-[var(--border-subtle)] bg-[var(--bg-secondary)]/50"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="flex items-center gap-1.5 text-xs font-bold text-[var(--text-primary)]">
                              {skill.highlight && (
                                <Sparkles className="h-3 w-3 text-cyan-400" />
                              )}
                              {skill.name}
                            </span>
                            <span className="rounded bg-emerald-500/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-400">
                              {skill.level}
                            </span>
                          </div>
                          <p className="mt-1 text-[11px] text-[var(--text-muted)]">
                            Implementasi: <span className="text-[var(--text-secondary)]">{skill.usedIn}</span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        {/* Supporting Workflow Strip */}
        <div className="mt-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/60 p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)]">
              <Wrench className="h-4 w-4 text-cyan-400" />
              <span>Daily Engineering Environment &amp; Tools:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Git & GitHub",
                "Docker & Docker Compose",
                "Postman API Testing",
                "Linux VPS Hosting",
                "Wazuh SIEM",
                "VS Code & Antigravity",
                "Figma UI/UX",
                "ESLint (Airbnb Style)",
              ].map((tool) => (
                <span
                  key={tool}
                  className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-2.5 py-1 font-mono text-[11px] text-[var(--text-secondary)]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
