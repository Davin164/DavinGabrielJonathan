"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Copy,
  Check,
  Mail,
  FileText,
  Github,
  Linkedin,
  MessageCircle,
  Terminal,
  Layers,
  ShieldCheck,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { GlowingShape } from "@/components/ui/GlowingShapes";

const ROLES = [
  "Full-Stack Web Developer",
  "Backend · Tech Lead · Security",
  "Information Systems @ UNSRI",
  "GDGoC 2026 Backend Member",
];

// Deterministic contribution levels for 34 weeks x 7 days (inspired by khalifaalhasan.my.id)
const CONTRIBUTION_GRID = Array.from({ length: 34 }, (_, col) =>
  Array.from({ length: 7 }, (_, row) => {
    const seed = (col * 13 + row * 7 + (col % 5) * 3) % 16;
    if (seed < 5) return 0;
    if (seed < 9) return 1;
    if (seed < 12) return 2;
    if (seed < 15) return 3;
    return 4;
  })
);

export default function HeroSection() {
  const [copied, setCopied] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeInspector, setActiveInspector] = useState<
    "about" | "sifest" | "lock"
  >("about");

  // Typewriter effect inspired by ello-rabyndra.vercel.app & atalaa-df.vercel.app
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const speed = isDeleting ? 35 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText.length < currentRole.length) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      } else if (!isDeleting && displayText.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1600);
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="hero"
      className="hero-spotlight-beam relative overflow-hidden pt-10 pb-20 sm:pt-16 sm:pb-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Name, Typewriter Role, Social Circles & GitHub Contribution Graph */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="space-y-6 lg:col-span-7"
          >
            <div className="space-y-2">
              <p className="text-xs font-medium tracking-wide text-[var(--text-muted)] sm:text-sm">
                I am {PORTFOLIO_DATA.personal.name} • 4 Years in Web Dev (2022–2026)
              </p>

              {/* Two-Tone Large Name (Inspired by ello-rabyndra.vercel.app) */}
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-[62px] lg:leading-[1.08]">
                <span className="text-[var(--text-secondary)]">Davin </span>
                <span className="text-[var(--text-primary)]">
                  Gabriel Jonathan
                </span>
              </h1>

              {/* Typewriter Subtitle with Blinking Cursor */}
              <div className="flex min-h-[36px] items-center pt-1 text-xl font-semibold text-[var(--text-secondary)] sm:text-3xl">
                <span>{displayText}</span>
                <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-[var(--text-primary)] sm:h-8" />
              </div>
            </div>

            <p className="max-w-xl text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
              Crafting scalable backend architectures, high-concurrency ticketing
              systems, and interactive web experiences with purpose. Tech Lead at{" "}
              <strong className="text-[var(--text-primary)]">SI FEST 2026</strong>{" "}
              (98% Backend built solo) &amp; Backend Member at{" "}
              <strong className="text-[var(--text-primary)]">GDGoC UNSRI</strong>.
            </p>

            {/* Social Circle Icons & Let's Discuss Pill (Fusion of ello-rabyndra & atalaa-df) */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#projects"
                className="rounded-full border border-[var(--border-strong)] bg-[var(--bg-card)] px-6 py-2.5 text-xs font-semibold text-[var(--text-primary)] shadow-lg transition-all hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] active:scale-95 sm:text-sm"
              >
                Let&apos;s Discuss &amp; Explore
              </a>

              <a
                href={PORTFOLIO_DATA.personal.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] transition-all hover:scale-105 hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
              >
                <Linkedin className="h-4 w-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub (@Davin164)"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] transition-all hover:scale-105 hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
              >
                <Github className="h-4 w-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp Direct"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] transition-all hover:scale-105 hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
              >
                <MessageCircle className="h-4 w-4" />
              </a>

              <button
                onClick={handleCopyEmail}
                aria-label="Copy Email"
                title="Salin Email"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] transition-all hover:scale-105 hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-emerald-400" />
                ) : (
                  <FileText className="h-4 w-4" />
                )}
              </button>
            </div>

            {/* GitHub Contributions Heatmap Card (Inspired by khalifaalhasan.my.id) */}
            <div className="max-w-lg rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)]/90 p-4 shadow-xl">
              <div className="mb-2.5 flex items-center justify-between text-[11px] text-[var(--text-muted)]">
                <span className="flex items-center gap-1.5 font-mono">
                  <Terminal className="h-3.5 w-3.5 text-emerald-400" />
                  1,480+ contributions &amp; commits in the last 4 years
                </span>
                <a
                  href={PORTFOLIO_DATA.personal.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[10px] text-[var(--text-secondary)] hover:underline"
                >
                  @Davin164
                </a>
              </div>

              <div className="overflow-x-auto pb-1">
                <div className="flex gap-[3px]">
                  {CONTRIBUTION_GRID.map((col, cIdx) => (
                    <div key={cIdx} className="flex flex-col gap-[3px]">
                      {col.map((level, rIdx) => {
                        const bgClass =
                          level === 0
                            ? "bg-zinc-800/70"
                            : level === 1
                            ? "bg-emerald-950"
                            : level === 2
                            ? "bg-emerald-700/80"
                            : level === 3
                            ? "bg-emerald-500"
                            : "bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]";
                        return (
                          <div
                            key={rIdx}
                            className={`h-2.5 w-2.5 rounded-[2px] transition-transform hover:scale-125 ${bgClass}`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Double-Bordered "About Me" Card + Floating Neon Shapes (ello-rabyndra + atalaa-df) */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
            className="relative lg:col-span-5"
          >
            {/* Floating Glowing Neon Shapes behind/around card (atalaa-df style) */}
            <div className="pointer-events-none absolute -top-10 -right-6 hidden sm:block">
              <GlowingShape variant="triangle" size={62} delay={0.3} />
            </div>
            <div className="pointer-events-none absolute -bottom-10 -left-8 hidden sm:block">
              <GlowingShape variant="star" size={74} delay={1.1} />
            </div>
            <div className="pointer-events-none absolute -top-8 left-8 hidden sm:block">
              <GlowingShape variant="square" size={54} delay={0.7} />
            </div>

            {/* Outer Double-Frame Card (Inspired by ello-rabyndra.vercel.app) */}
            <div className="relative rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/75 p-2.5 shadow-[0_24px_60px_rgba(0,0,0,0.65)] backdrop-blur-xl sm:p-3.5">
              <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5 sm:p-6">
                {/* Header & Mode Switcher */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="h-4 w-1.5 rounded-full bg-zinc-400" />
                    <h2 className="text-sm font-bold text-[var(--text-primary)] sm:text-base">
                      {activeInspector === "about"
                        ? "About Me"
                        : activeInspector === "sifest"
                        ? "SI FEST 2026 Architecture"
                        : "Concurrency Lock (GDGoC)"}
                    </h2>
                  </div>

                  <div className="flex items-center gap-1 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] p-0.5 text-[10px] font-mono">
                    <button
                      onClick={() => setActiveInspector("about")}
                      className={`rounded-md px-2 py-1 transition-colors ${
                        activeInspector === "about"
                          ? "bg-[var(--bg-card-hover)] font-semibold text-[var(--text-primary)]"
                          : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
                      }`}
                    >
                      Bio
                    </button>
                    <button
                      onClick={() => setActiveInspector("sifest")}
                      className={`rounded-md px-2 py-1 transition-colors ${
                        activeInspector === "sifest"
                          ? "bg-[var(--bg-card-hover)] font-semibold text-[var(--text-primary)]"
                          : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
                      }`}
                    >
                      SI FEST
                    </button>
                    <button
                      onClick={() => setActiveInspector("lock")}
                      className={`rounded-md px-2 py-1 transition-colors ${
                        activeInspector === "lock"
                          ? "bg-[var(--bg-card-hover)] font-semibold text-[var(--text-primary)]"
                          : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
                      }`}
                    >
                      ACID SQL
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div className="min-h-[165px]">
                  {activeInspector === "about" && (
                    <div className="space-y-3 text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                      <p>
                        I&apos;m an{" "}
                        <strong className="text-[var(--text-primary)]">
                          Information Systems student at Universitas Sriwijaya
                        </strong>{" "}
                        and a Software Engineering (RPL) graduate with 4 years of
                        hands-on web development experience.
                      </p>
                      <p>
                        Experienced in leading end-to-end web development (UI/UX,
                        frontend, backend, VPS deployment) as{" "}
                        <strong className="text-[var(--text-primary)]">
                          Tech Lead of SI FEST 2026
                        </strong>{" "}
                        (building 98% of the backend solo) and contributing as a{" "}
                        <strong className="text-[var(--text-primary)]">
                          Backend Developer at GDGoC 2026
                        </strong>
                        .
                      </p>
                    </div>
                  )}

                  {activeInspector === "sifest" && (
                    <div className="space-y-2.5 font-mono text-xs text-[var(--text-secondary)]">
                      <div className="flex items-center justify-between text-[11px] text-emerald-400">
                        <span className="flex items-center gap-1.5">
                          <Layers className="h-3.5 w-3.5" />
                          SI FEST 2026 Ecosystem
                        </span>
                        <span>98% Backend Solo</span>
                      </div>
                      <div className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] p-2.5 text-[11px]">
                        <p className="font-semibold text-[var(--text-primary)]">
                          Main Web + Competition Scoring
                        </p>
                        <p className="text-[var(--text-muted)]">
                          Registration → Transparent Judging Score → Announcement
                        </p>
                      </div>
                      <div className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] p-2.5 text-[11px]">
                        <p className="font-semibold text-[var(--text-primary)]">
                          Payment Gateway + QR Ticket Scanner
                        </p>
                        <p className="text-[var(--text-muted)]">
                          Automated checkout webhook + Admin Panel + Gate Scanner
                        </p>
                      </div>
                    </div>
                  )}

                  {activeInspector === "lock" && (
                    <div className="space-y-2 font-mono text-xs">
                      <div className="flex items-center justify-between text-[11px] text-emerald-400">
                        <span className="flex items-center gap-1.5">
                          <ShieldCheck className="h-3.5 w-3.5" />
                          The Gatekeeper Logic (GDGoC 2026)
                        </span>
                        <span>Zero Overselling</span>
                      </div>
                      <pre className="overflow-x-auto rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] p-3 text-[11px] text-zinc-300">
{`START TRANSACTION;
SELECT stock FROM event_tickets
WHERE event_id = ? AND stock > 0
FOR UPDATE; -- Pessimistic Lock
UPDATE event_tickets SET stock = stock - 1;
COMMIT;`}
                      </pre>
                    </div>
                  )}
                </div>

                {/* Bottom Email & Action Bar (Exact match to ello-rabyndra Hero Card) */}
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-subtle)] pt-4">
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-2 text-xs text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span>
                      {copied
                        ? "Copied to clipboard!"
                        : PORTFOLIO_DATA.personal.email}
                    </span>
                  </button>

                  <a
                    href="#about"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3 py-1.5 text-xs font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-strong)]"
                  >
                    <span>Explore Profile</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
