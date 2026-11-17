"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  CheckCircle2,
  MapPin,
  Calendar,
  Sparkles,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
              03 // LEADERSHIP, ORGANIZATION &amp; INDUSTRY TRACK
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Rekam Jejak Kepemimpinan &amp; Pengalaman Teknis
            </h2>
          </div>
          <p className="max-w-md text-xs text-[var(--text-secondary)] sm:text-sm">
            Dari magang industri &amp; <em>bug hunting</em> saat di SMK RPL hingga dipercaya memimpin divisi teknologi pada acara berskala besar di Universitas Sriwijaya.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative space-y-6 before:absolute before:top-4 before:bottom-4 before:left-4 before:w-px before:bg-gradient-to-b before:from-cyan-500/60 before:via-emerald-500/40 before:to-transparent md:before:left-8">
          {PORTFOLIO_DATA.experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="relative pl-11 md:pl-20"
            >
              {/* Timeline Dot */}
              <div className="absolute top-6 left-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-cyan-400 bg-[var(--bg-primary)] shadow-[0_0_12px_rgba(34,211,238,0.6)] md:left-6" />

              <SpotlightCard className="p-5 sm:p-6">
                <div className="flex flex-col justify-between gap-3 border-b border-[var(--border-subtle)] pb-4 sm:flex-row sm:items-start">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-md bg-cyan-500/15 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-cyan-400">
                        {exp.type}
                      </span>
                      {exp.badge && (
                        <span className="inline-flex items-center gap-1 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-400">
                          <Sparkles className="h-2.5 w-2.5" />
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-2 text-base font-bold text-[var(--text-primary)] sm:text-lg">
                      {exp.role}
                    </h3>
                    <p className="mt-0.5 flex items-center gap-1.5 text-xs font-semibold text-cyan-400">
                      <Briefcase className="h-3.5 w-3.5" />
                      <span>{exp.organization}</span>
                    </p>
                  </div>

                  <div className="flex flex-row items-center gap-3 text-[11px] text-[var(--text-muted)] sm:flex-col sm:items-end sm:gap-1">
                    <span className="inline-flex items-center gap-1 font-mono font-medium text-[var(--text-secondary)]">
                      <Calendar className="h-3 w-3 text-cyan-400" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-emerald-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm"
                    >
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Skill Pills */}
                <div className="mt-4 flex flex-wrap gap-1.5 pt-1">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-2.5 py-1 font-mono text-[10px] text-[var(--text-secondary)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
