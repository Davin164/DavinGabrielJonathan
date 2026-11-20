"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Settings, ListFilter, LayoutList } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function ExperienceSection() {
  const [viewMode, setViewMode] = useState<"timeline" | "editorial">(
    "timeline"
  );

  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="heading-gradient text-3xl font-extrabold tracking-tight sm:text-5xl"
          >
            Experience I have
          </motion.h2>

          <div className="mt-5 inline-flex items-center gap-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] p-1">
            <button
              onClick={() => setViewMode("timeline")}
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                viewMode === "timeline"
                  ? "bg-[var(--text-primary)] font-semibold text-[var(--bg-primary)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              }`}
            >
              <LayoutList className="h-3.5 w-3.5" />
              <span>Timeline Cards</span>
            </button>
            <button
              onClick={() => setViewMode("editorial")}
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                viewMode === "editorial"
                  ? "bg-[var(--text-primary)] font-semibold text-[var(--bg-primary)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              }`}
            >
              <ListFilter className="h-3.5 w-3.5" />
              <span>Compact Index</span>
            </button>
          </div>
        </div>

        {viewMode === "timeline" ? (
          <div className="relative space-y-6 before:absolute before:top-6 before:bottom-6 before:left-3 before:w-[1px] before:bg-zinc-700/70 sm:before:left-6">
            {PORTFOLIO_DATA.experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="relative pl-10 sm:pl-16"
              >
                <div className="absolute top-8 left-[6px] h-3.5 w-3.5 rounded-full border-2 border-zinc-400 bg-[var(--bg-primary)] sm:left-[18px]" />

                <SpotlightCard className="p-6 sm:p-7">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-base font-bold text-[var(--text-primary)] sm:text-lg">
                        {exp.organization}
                      </h3>
                      <p className="mt-0.5 text-xs font-semibold text-[var(--text-secondary)] sm:text-sm">
                        {exp.role}
                      </p>
                    </div>

                    <span className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-3 py-1 font-mono text-[11px] font-medium text-[var(--text-primary)]">
                      <Calendar className="h-3 w-3 text-zinc-400" />
                      {exp.period}
                    </span>
                  </div>

                  <div className="mt-4 space-y-2 text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                    {exp.highlights.map((item, i) => (
                      <p key={i}>{item}</p>
                    ))}
                  </div>

                  <div className="mt-5 border-t border-[var(--border-subtle)] pt-4">
                    <p className="mb-2.5 flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                      <Settings className="h-3 w-3" />
                      <span>TECHNOLOGIES &amp; SCOPE</span>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-3 py-1 text-[11px] font-medium text-[var(--text-secondary)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-12">
            <div>
              <h3 className="mb-6 border-b border-[var(--border-subtle)] pb-3 text-lg font-extrabold uppercase tracking-wider text-[var(--text-primary)]">
                WORK, LEADERSHIP &amp; COMMUNITY EXPERIENCE
              </h3>
              <div className="divide-y divide-[var(--border-subtle)]">
                {PORTFOLIO_DATA.experiences.map((exp, idx) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.04 }}
                    className="flex flex-col justify-between gap-2 py-5 sm:flex-row sm:items-center"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-[var(--text-primary)] sm:text-base">
                        {exp.organization}
                      </h4>
                      <p className="text-xs text-[var(--text-secondary)]">
                        {exp.role}{" "}
                        {exp.badge && (
                          <span className="ml-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] px-2.5 py-0.5 text-[10px] text-[var(--text-primary)]">
                            {exp.badge}
                          </span>
                        )}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-[var(--text-muted)]">
                      {exp.period}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-6 border-b border-[var(--border-subtle)] pb-3 text-lg font-extrabold uppercase tracking-wider text-[var(--text-primary)]">
                EDUCATION
              </h3>
              <div className="divide-y divide-[var(--border-subtle)]">
                {PORTFOLIO_DATA.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col justify-between gap-2 py-5 sm:flex-row sm:items-center"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-[var(--text-primary)] sm:text-base">
                        {edu.institution}
                      </h4>
                      <p className="text-xs text-[var(--text-secondary)]">
                        {edu.degree}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-[var(--text-muted)]">
                      {edu.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
