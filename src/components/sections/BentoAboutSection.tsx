"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  ShieldAlert,
  GraduationCap,
  Award,
  Server,
  Users,
  MapPin,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function BentoAboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
              01 // ABOUT ME &amp; ENGINEERING DNA
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              4 Tahun Membangun dari Fundamental hingga Produksi
            </h2>
          </div>
          <p className="max-w-md text-xs text-[var(--text-secondary)] sm:text-sm">
            Kombinasi fondasi Rekayasa Perangkat Lunak (SMK RPL) dan S1 Sistem Informasi UNSRI dengan fokus pada arsitektur backend tangguh &amp; kepemimpinan tim.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {/* Card 1: Main Story (Span 7 on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45 }}
            className="md:col-span-7"
          >
            <SpotlightCard className="h-full p-6 sm:p-7">
              <div className="flex h-full flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 rounded-lg bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                    <Terminal className="h-3.5 w-3.5" />
                    <span>Perjalanan 2022 – 2026</span>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] sm:text-2xl">
                    Generalis End-to-End dengan Kekuatan Inti di Backend Architecture
                  </h3>
                  <p className="text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                    {PORTFOLIO_DATA.personal.bio}
                  </p>
                </div>

                {/* Key Pillars */}
                <div className="grid grid-cols-1 gap-2.5 pt-2 sm:grid-cols-2">
                  {[
                    "Tech Lead Web Dev SI FEST 2026 (98% Backend Solo)",
                    "Integrasi Payment Gateway & Sistem Ticketing QR",
                    "Anggota Backend GDGoC 2026 (Docker & Concurrency)",
                    "Mentor Teknis untuk Staff & Freelancer Web Dev",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/60 p-2.5 text-xs text-[var(--text-primary)]"
                    >
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 2: Security & Awards (Span 5 on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="md:col-span-5"
          >
            <SpotlightCard
              spotlightColor="rgba(16, 185, 129, 0.14)"
              className="h-full p-6 sm:p-7"
            >
              <div className="flex h-full flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                    <ShieldAlert className="h-3.5 w-3.5" />
                    <span>Security-First &amp; Award Winner</span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] sm:text-xl">
                    Blue/Red Team SIEM, Bug Hunting &amp; High-Integrity Systems
                  </h3>
                  <p className="text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                    Tidak hanya membangun fitur, tetapi juga memastikan sistem aman dari celah keamanan dan bebas dari <em>race condition</em> saat trafik tinggi.
                  </p>
                </div>

                <div className="space-y-2.5">
                  <div className="rounded-xl border border-amber-500/25 bg-amber-500/5 p-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                      <Award className="h-4 w-4" />
                      <span>Best Project Quarter 1 — NAC UNSRI</span>
                    </div>
                    <p className="mt-1 text-[11px] text-[var(--text-secondary)]">
                      Membangun sistem SIEM berbasis <strong>Wazuh</strong> (Blue Team) untuk memonitor serangan Red Team secara real-time.
                    </p>
                  </div>

                  <div className="rounded-xl border border-cyan-500/25 bg-cyan-500/5 p-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-cyan-400">
                      <Award className="h-4 w-4" />
                      <span>Best Team Project — PTI #1 HIMSI</span>
                    </div>
                    <p className="mt-1 text-[11px] text-[var(--text-secondary)]">
                      Merancang prototipe portal akademik <strong>Website SIMAK</strong> terpadu untuk universitas.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/70 p-3">
                    <p className="text-xs font-semibold text-[var(--text-primary)]">
                      🛡️ Bug Hunter Website PPDB SMK Bukit Asam (2024)
                    </p>
                    <p className="mt-0.5 text-[11px] text-[var(--text-muted)]">
                      Dipercaya mengaudit celah keamanan portal PPDB Yayasan Bukit Asam Foundation &amp; menyusun laporan remediasi.
                    </p>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 3: Education Journey (Span 5 on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="md:col-span-5"
          >
            <SpotlightCard className="h-full p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-lg bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                    <GraduationCap className="h-3.5 w-3.5" />
                    <span>Pendidikan Formal</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] text-[var(--text-muted)]">
                    <MapPin className="h-3 w-3 text-cyan-400" />
                    Sumatera Selatan
                  </span>
                </div>

                <div className="space-y-3">
                  {PORTFOLIO_DATA.education.map((edu, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/60 p-3.5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-xs font-bold text-[var(--text-primary)] sm:text-sm">
                          {edu.institution}
                        </h4>
                        <span className="shrink-0 rounded-md bg-cyan-500/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-cyan-400">
                          {edu.period}
                        </span>
                      </div>
                      <p className="mt-0.5 text-xs font-medium text-emerald-400">
                        {edu.degree}
                      </p>
                      <p className="mt-1.5 text-[11px] leading-relaxed text-[var(--text-secondary)]">
                        {edu.highlights}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 4: Leadership, Mentorship & End-to-End Scope (Span 7 on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="md:col-span-7"
          >
            <SpotlightCard className="h-full p-6">
              <div className="flex h-full flex-col justify-between space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                    <Users className="h-3.5 w-3.5" />
                    <span>Kepemimpinan Teknis &amp; Kapabilitas End-to-End</span>
                  </div>
                  <span className="font-mono text-[11px] text-[var(--text-muted)]">
                    UI/UX → FE → BE → VPS Host
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/60 p-3.5">
                    <Server className="h-4 w-4 text-cyan-400" />
                    <h4 className="mt-2 text-xs font-bold text-[var(--text-primary)]">
                      Backend &amp; Payment
                    </h4>
                    <p className="mt-1 text-[11px] leading-relaxed text-[var(--text-secondary)]">
                      REST API (Node/Express &amp; Laravel), Middleware Auth, Payment Gateway, &amp; Pessimistic Locking.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/60 p-3.5">
                    <Sparkles className="h-4 w-4 text-emerald-400" />
                    <h4 className="mt-2 text-xs font-bold text-[var(--text-primary)]">
                      Frontend &amp; Animasi
                    </h4>
                    <p className="mt-1 text-[11px] leading-relaxed text-[var(--text-secondary)]">
                      Antarmuka responsif dengan Tailwind CSS, React/Next.js, Bootstrap, dan animasi interaktif GSAP.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/60 p-3.5">
                    <Users className="h-4 w-4 text-amber-400" />
                    <h4 className="mt-2 text-xs font-bold text-[var(--text-primary)]">
                      Tech Lead &amp; Mentor
                    </h4>
                    <p className="mt-1 text-[11px] leading-relaxed text-[var(--text-secondary)]">
                      Membimbing staff &amp; freelancer TID, PO pengabdian IT, serta membuat seri video edukasi Java Basic.
                    </p>
                  </div>
                </div>

                {/* Bottom Metric Row */}
                <div className="grid grid-cols-2 gap-3 pt-1 sm:grid-cols-4">
                  {PORTFOLIO_DATA.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)]/60 px-3 py-2.5"
                    >
                      <p className="text-base font-extrabold text-cyan-400 sm:text-lg">
                        {m.value}
                      </p>
                      <p className="text-[11px] font-semibold text-[var(--text-primary)]">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
