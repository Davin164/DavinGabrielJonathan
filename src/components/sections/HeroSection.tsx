"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Copy,
  Check,
  ShieldCheck,
  Server,
  Layers,
  ExternalLink,
  Award,
  Code2,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"profile" | "sifest" | "concurrency">(
    "profile"
  );

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24"
    >
      {/* Ambient Background Glows */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-cyan-500/15 blur-[110px]" />
      <div className="pointer-events-none absolute top-20 right-1/4 h-72 w-72 rounded-full bg-emerald-500/10 blur-[110px]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* Left Column: Headline & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-6 lg:col-span-7"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>{PORTFOLIO_DATA.personal.availability}</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <p className="font-mono text-xs uppercase tracking-widest text-cyan-400 sm:text-sm">
                {PORTFOLIO_DATA.personal.name} • 4 Years in Web Dev (2022–2026)
              </p>
              <h1 className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-[52px] lg:leading-[1.12]">
                Engineering End-to-End Web Systems &amp;{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                  Scalable Backends.
                </span>
              </h1>
            </div>

            {/* Bio Summary */}
            <p className="max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
              Mahasiswa{" "}
              <strong className="text-[var(--text-primary)]">
                S1 Sistem Informasi Universitas Sriwijaya
              </strong>{" "}
              &amp; lulusan{" "}
              <strong className="text-[var(--text-primary)]">
                SMK Rekayasa Perangkat Lunak
              </strong>
              . Berpengalaman memimpin pengembangan web secara <em>end-to-end</em>{" "}
              (UI/UX, Frontend, Backend, VPS Deployment) sebagai{" "}
              <span className="font-medium text-cyan-400">
                Tech Lead Web Dev SI FEST 2026
              </span>{" "}
              (98% arsitektur backend dibangun mandiri) serta aktif di{" "}
              <span className="font-medium text-emerald-400">
                Backend GDGoC 2026
              </span>
              .
            </p>

            {/* Highlight Role Chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-3 py-1.5 text-xs font-medium text-[var(--text-primary)]">
                <Server className="h-3.5 w-3.5 text-cyan-400" />
                Tech Lead SI FEST 2026
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-3 py-1.5 text-xs font-medium text-[var(--text-primary)]">
                <Code2 className="h-3.5 w-3.5 text-emerald-400" />
                Backend GDGoC 2026
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-3 py-1.5 text-xs font-medium text-[var(--text-primary)]">
                <Award className="h-3.5 w-3.5 text-amber-400" />
                Best Project Q1 NAC &amp; PTI #1 HIMSI
              </span>
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-5 py-3 text-xs font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:brightness-110 active:scale-95 sm:text-sm"
              >
                <span>Lihat Proyek &amp; Arsitektur</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-4 py-3 text-xs font-semibold text-[var(--text-primary)] transition-colors hover:border-cyan-500/40 hover:bg-cyan-500/10 active:scale-95 sm:text-sm"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span className="text-emerald-400">Email Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-cyan-400" />
                    <span>Salin Email</span>
                  </>
                )}
              </button>

              <a
                href={PORTFOLIO_DATA.personal.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-3.5 py-3 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:border-cyan-500/40 hover:text-[var(--text-primary)] sm:text-sm"
              >
                <span>GitHub</span>
                <ExternalLink className="h-3.5 w-3.5 opacity-70" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-3.5 py-3 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:border-cyan-500/40 hover:text-[var(--text-primary)] sm:text-sm"
              >
                <span>LinkedIn</span>
                <ExternalLink className="h-3.5 w-3.5 opacity-70" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Engineering Inspector */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <SpotlightCard className="border-cyan-500/20 p-1">
              <div className="rounded-xl bg-[var(--bg-primary)]/90 p-4 sm:p-5">
                {/* Window Header & Interactive File Tabs */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>

                  <div className="flex items-center gap-1 rounded-lg bg-[var(--bg-secondary)] p-1">
                    <button
                      onClick={() => setActiveTab("profile")}
                      className={`rounded-md px-2.5 py-1 font-mono text-[11px] transition-colors ${
                        activeTab === "profile"
                          ? "bg-cyan-500/20 font-semibold text-cyan-400"
                          : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                      }`}
                    >
                      engineer.ts
                    </button>
                    <button
                      onClick={() => setActiveTab("sifest")}
                      className={`rounded-md px-2.5 py-1 font-mono text-[11px] transition-colors ${
                        activeTab === "sifest"
                          ? "bg-cyan-500/20 font-semibold text-cyan-400"
                          : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                      }`}
                    >
                      sifest26.arch
                    </button>
                    <button
                      onClick={() => setActiveTab("concurrency")}
                      className={`rounded-md px-2.5 py-1 font-mono text-[11px] transition-colors ${
                        activeTab === "concurrency"
                          ? "bg-cyan-500/20 font-semibold text-cyan-400"
                          : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                      }`}
                    >
                      lock.sql
                    </button>
                  </div>
                </div>

                {/* Tab Content */}
                <div className="mt-4 min-h-[235px] font-mono text-xs leading-relaxed">
                  {activeTab === "profile" && (
                    <div className="space-y-2 text-[var(--text-secondary)]">
                      <p className="text-[var(--text-muted)]">
                        {"// 4 Tahun Perjalanan Web Dev (SMK RPL → S1 SI UNSRI)"}
                      </p>
                      <p>
                        <span className="text-cyan-400">const</span>{" "}
                        <span className="text-emerald-400">davin</span> = {"{"}
                      </p>
                      <p className="pl-4">
                        role:{" "}
                        <span className="text-amber-300">
                          &quot;Full-Stack &amp; Backend Engineer&quot;
                        </span>
                        ,
                      </p>
                      <p className="pl-4">
                        leadership:{" "}
                        <span className="text-amber-300">
                          &quot;Tech Lead OC TID SI FEST 2026&quot;
                        </span>
                        ,
                      </p>
                      <p className="pl-4">
                        community:{" "}
                        <span className="text-amber-300">
                          &quot;Backend Member @ GDGoC 2026&quot;
                        </span>
                        ,
                      </p>
                      <p className="pl-4">
                        coreStack: [
                        <span className="text-cyan-300">
                          &quot;Node.js&quot;, &quot;Express&quot;, &quot;Laravel&quot;, &quot;MySQL/PG&quot;, &quot;Docker&quot;
                        </span>
                        ],
                      </p>
                      <p className="pl-4">
                        security: [
                        <span className="text-emerald-300">
                          &quot;Wazuh SIEM (Best Project)&quot;, &quot;Bug Hunter&quot;
                        </span>
                        ],
                      </p>
                      <p>{"};"}</p>
                    </div>
                  )}

                  {activeTab === "sifest" && (
                    <div className="space-y-2.5 text-[var(--text-secondary)]">
                      <div className="flex items-center justify-between text-[11px] text-cyan-400">
                        <span className="flex items-center gap-1.5">
                          <Layers className="h-3.5 w-3.5" />
                          SI FEST 2026 Ecosystem
                        </span>
                        <span className="rounded bg-emerald-500/15 px-1.5 py-0.5 text-emerald-400">
                          98% Backend Solo
                        </span>
                      </div>
                      <div className="space-y-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-2.5 text-[11px]">
                        <p className="font-semibold text-[var(--text-primary)]">
                          1. Main Web &amp; Kompetisi
                        </p>
                        <p className="text-[var(--text-muted)]">
                          Registrasi → Transparansi Nilai Penjurian → Pengumuman
                        </p>
                      </div>
                      <div className="space-y-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-2.5 text-[11px]">
                        <p className="font-semibold text-[var(--text-primary)]">
                          2. Payment Gateway &amp; QR Ticket Scanner
                        </p>
                        <p className="text-[var(--text-muted)]">
                          Checkout tiket otomatis + Admin Panel + Scanner validasi gate
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === "concurrency" && (
                    <div className="space-y-2 text-[var(--text-secondary)]">
                      <div className="flex items-center justify-between text-[11px] text-emerald-400">
                        <span className="flex items-center gap-1.5">
                          <ShieldCheck className="h-3.5 w-3.5" />
                          The Gatekeeper Logic (GDGoC 2026)
                        </span>
                        <span>Zero Overselling</span>
                      </div>
                      <pre className="overflow-x-auto rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-3 text-[11px] text-cyan-300">
{`START TRANSACTION;
-- Pessimistic Row-Level Lock
SELECT stock FROM event_tickets
WHERE event_id = ? AND stock > 0
FOR UPDATE;

UPDATE event_tickets
SET stock = stock - 1
WHERE event_id = ?;
COMMIT; -- ACID Guaranteed`}
                      </pre>
                    </div>
                  )}
                </div>

                {/* Bottom Metric Strip inside Hero Card */}
                <div className="mt-4 grid grid-cols-3 gap-2 border-t border-[var(--border-subtle)] pt-3 text-center">
                  <div>
                    <p className="text-base font-extrabold text-cyan-400">4+ Thn</p>
                    <p className="text-[10px] text-[var(--text-muted)]">RPL → S1 SI</p>
                  </div>
                  <div>
                    <p className="text-base font-extrabold text-emerald-400">98%</p>
                    <p className="text-[10px] text-[var(--text-muted)]">BE SI FEST 26</p>
                  </div>
                  <div>
                    <p className="text-base font-extrabold text-amber-400">2× Winner</p>
                    <p className="text-[10px] text-[var(--text-muted)]">Best Project</p>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
