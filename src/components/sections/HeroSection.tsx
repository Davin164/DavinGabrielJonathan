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
      className="hero-spotlight-beam relative flex min-h-[calc(100vh-76px)] items-center overflow-hidden py-12 sm:py-16"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="space-y-7 lg:col-span-7"
          >
            <div className="space-y-3">
              <p className="text-sm font-medium tracking-wide text-[var(--text-muted)] sm:text-base">
                I am {PORTFOLIO_DATA.personal.name} | Full-Stack Web Dev
              </p>

              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-[72px] lg:leading-[1.06]">
                <span className="text-[var(--text-secondary)]">Davin </span>
                <span className="text-[var(--text-primary)]">
                  Gabriel Jonathan
                </span>
              </h1>

              <div className="flex min-h-[44px] items-center pt-1 text-2xl font-semibold text-[var(--text-secondary)] sm:text-3xl lg:text-4xl">
                <span>{displayText}</span>
                <span className="ml-1.5 inline-block h-7 w-[2px] animate-pulse bg-[var(--text-primary)] sm:h-9" />
              </div>
            </div>

            <p className="max-w-xl text-sm leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              I don&apos;t just build features, I own outcomes. From database
              locking and payment gateways to shipped end-to-end web products.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#about"
                className="rounded-full border border-[var(--border-strong)] bg-[var(--bg-card)] px-7 py-3 text-xs font-semibold text-[var(--text-primary)] shadow-lg transition-all hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] active:scale-95 sm:text-sm"
              >
                Let&apos;s Discuss &amp; Explore
              </a>

              <a
                href={PORTFOLIO_DATA.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] transition-all hover:scale-105 hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
              >
                <Linkedin className="h-4 w-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub (@Davin164)"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] transition-all hover:scale-105 hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
              >
                <Github className="h-4 w-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp Direct"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] transition-all hover:scale-105 hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
              >
                <MessageCircle className="h-4 w-4" />
              </a>

              <button
                onClick={handleCopyEmail}
                aria-label="Copy Email"
                title="Salin Email"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] transition-all hover:scale-105 hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-emerald-400" />
                ) : (
                  <FileText className="h-4 w-4" />
                )}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
            className="relative flex justify-center lg:col-span-5 lg:justify-end"
          >
            <div className="pointer-events-none absolute -top-9 -right-5 hidden sm:block">
              <GlowingShape variant="triangle" size={64} delay={0.3} />
            </div>
            <div className="pointer-events-none absolute -bottom-9 -left-5 hidden sm:block">
              <GlowingShape variant="star" size={74} delay={1.1} />
            </div>

            <div className="group relative w-full max-w-[430px] overflow-hidden rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-3 shadow-[0_28px_70px_rgba(0,0,0,0.8)] transition-all hover:border-[var(--border-strong)] xl:max-w-[450px]">
              <div className="relative aspect-[956/989] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-zinc-800 via-zinc-900 to-zinc-950">
                {!imgError ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src="/profile.jpg?v=2"
                    alt={PORTFOLIO_DATA.personal.name}
                    onError={() => setImgError(true)}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
                    <div className="bg-architectural-grid pointer-events-none absolute inset-0 opacity-40" />
                    <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/15 bg-white/5 font-mono text-3xl font-extrabold tracking-tighter text-white shadow-inner">
                      DGJ
                    </div>
                    <p className="mt-5 text-base font-bold text-white">
                      {PORTFOLIO_DATA.personal.name}
                    </p>
                    <p className="mt-1 text-xs text-zinc-400">
                      Full-Stack Web Developer
                    </p>
                  </div>
                )}

                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 pt-14">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-bold text-white">
                        {PORTFOLIO_DATA.personal.shortName}
                      </p>
                      <p className="flex items-center gap-1 text-xs text-zinc-300">
                        <MapPin className="h-3.5 w-3.5" />
                        {PORTFOLIO_DATA.personal.location}
                      </p>
                    </div>
                    <span className="rounded-full border border-white/15 bg-black/60 px-3 py-1 font-mono text-[11px] font-semibold text-emerald-400 backdrop-blur-md">
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
