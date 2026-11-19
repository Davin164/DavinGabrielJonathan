"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  FileText,
  Github,
  Linkedin,
  MessageCircle,
  MapPin,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { GlowingShape } from "@/components/ui/GlowingShapes";

const ROLES = [
  "Full-Stack Web Developer",
  "Backend · Tech Lead · Security",
  "Information Systems | UNSRI",
  "Network & CyberSecurity enthusiast",
  "UI/UX Design",
];

export default function HeroSection() {
  const [copied, setCopied] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [imgError, setImgError] = useState(false);

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
          {/* Left Column: Name, Typewriter Role & Social Circles */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="space-y-6 lg:col-span-7"
          >
            <div className="space-y-2">
              <p className="text-xs font-medium tracking-wide text-[var(--text-muted)] sm:text-sm">
                I am {PORTFOLIO_DATA.personal.name} • Full-Stack Web Dev
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
              I don&apos;t just build features — I own outcomes. From database
              locking &amp; payment gateways to shipped end-to-end web products.
              Tech Lead at{" "}
              <strong className="text-[var(--text-primary)]">
                SI FEST 2026
              </strong>{" "}
              (98% Backend built solo) &amp; Backend Member at{" "}
              <strong className="text-[var(--text-primary)]">
                GDGoC UNSRI
              </strong>
              .
            </p>

            {/* Social Circle Icons & Let's Discuss Pill */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#about"
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
          </motion.div>

          {/* Right Column: Portrait Photo Frame (Inspired by khalifaalhasan.my.id Screenshot 4) */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
            className="relative flex justify-center lg:col-span-5"
          >
            {/* Subtle Floating Neon Shapes around Portrait */}
            <div className="pointer-events-none absolute -top-8 -right-4 hidden sm:block">
              <GlowingShape variant="triangle" size={58} delay={0.3} />
            </div>
            <div className="pointer-events-none absolute -bottom-8 -left-4 hidden sm:block">
              <GlowingShape variant="star" size={68} delay={1.1} />
            </div>

            {/* Portrait Container */}
            <div className="group relative w-full max-w-[380px] overflow-hidden rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-2.5 shadow-[0_24px_60px_rgba(0,0,0,0.75)] transition-all hover:border-[var(--border-strong)]">
              <div className="relative aspect-[956/989] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-zinc-800 via-zinc-900 to-zinc-950">
                {!imgError ? (
                  /* Loads /profile.jpg from public/profile.jpg */
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src="/profile.jpg?v=2"
                    alt={PORTFOLIO_DATA.personal.name}
                    onError={() => setImgError(true)}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  /* Sleek Monogram Portrait Placeholder until user drops public/profile.jpg */
                  <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
                    <div className="bg-architectural-grid pointer-events-none absolute inset-0 opacity-40" />
                    <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/15 bg-white/5 font-mono text-3xl font-extrabold tracking-tighter text-white shadow-inner">
                      DGJ
                    </div>
                    <p className="mt-5 text-base font-bold text-white">
                      {PORTFOLIO_DATA.personal.name}
                    </p>
                    <p className="mt-1 text-xs text-zinc-400">
                      Full-Stack Web Developer • Tech Lead
                    </p>
                    <p className="mt-4 rounded-full border border-white/10 bg-black/40 px-3.5 py-1.5 font-mono text-[10px] text-zinc-400">
                      Simpan foto di: public/profile.jpg
                    </p>
                  </div>
                )}

                {/* Subtle Bottom Gradient Overlay with Name & Location */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 pt-12">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-white">
                        {PORTFOLIO_DATA.personal.shortName}
                      </p>
                      <p className="flex items-center gap-1 text-[11px] text-zinc-300">
                        <MapPin className="h-3 w-3" />
                        {PORTFOLIO_DATA.personal.location}
                      </p>
                    </div>
                    <span className="rounded-full border border-white/15 bg-black/60 px-2.5 py-1 font-mono text-[10px] font-semibold text-emerald-400 backdrop-blur-md">
                      Available
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
