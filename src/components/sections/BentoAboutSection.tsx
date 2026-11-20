"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { GlowingShape } from "@/components/ui/GlowingShapes";
import SpotlightCard from "@/components/ui/SpotlightCard";

const APPROACH_STEPS = [
  {
    num: "01",
    text: "Analyze requirements, security & concurrency constraints",
  },
  {
    num: "02",
    text: "Design clean MVC & transactional backend architectures",
  },
  {
    num: "03",
    text: "Deploy resilient end-to-end systems to production VPS/Cloud",
  },
];

const BIG_STATS = [
  { value: "04+", label: "Years In Web Dev" },
  { value: "20+", label: "Projects Completed" },
  { value: "02x", label: "Best Project Awards" },
];

export default function BentoAboutSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative mb-20 flex flex-col items-center justify-center py-8 text-center">
          <div className="mb-8 flex flex-wrap items-center justify-center gap-8 sm:gap-14">
            <GlowingShape variant="cross" size={64} delay={0.1} />
            <GlowingShape variant="square" size={68} delay={0.4} />
            <GlowingShape variant="star" size={72} delay={0.8} />
            <GlowingShape variant="circle" size={68} delay={1.2} />
            <GlowingShape variant="triangle" size={62} delay={1.5} />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)] drop-shadow-[0_0_25px_rgba(255,255,255,0.2)] sm:text-5xl"
          >
            wanna know about me?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative flex items-center justify-center lg:col-span-5"
          >
            <div className="pointer-events-none absolute h-64 w-64 rounded-full bg-white/10 blur-[80px]" />
            <div className="relative flex h-[280px] w-[280px] items-center justify-center sm:h-[340px] sm:w-[340px]">
              <div className="absolute top-2 left-12">
                <GlowingShape variant="star" size={96} delay={0.2} />
              </div>
              <div className="absolute top-24 right-6">
                <GlowingShape variant="triangle" size={78} delay={0.9} />
              </div>
              <div className="absolute bottom-4 left-4">
                <GlowingShape variant="circle" size={120} delay={0.5} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/75 p-2.5 shadow-[0_24px_60px_rgba(0,0,0,0.65)] backdrop-blur-xl sm:p-3.5">
              <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 sm:p-8">
                <div className="flex items-center gap-2.5 pb-4">
                  <span className="h-4 w-1.5 rounded-full bg-zinc-400" />
                  <h3 className="text-lg font-bold text-[var(--text-primary)] sm:text-xl">
                    About Me
                  </h3>
                </div>

                <div className="space-y-3.5 text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                  <p>
                    I&apos;m an{" "}
                    <strong className="text-[var(--text-primary)]">
                      Information Systems student at Universitas Sriwijaya
                    </strong>{" "}
                    and a Software Engineering (RPL) graduate with 4 years of
                    hands-on web development experience.
                  </p>
                  <p>
                    Currently serving as{" "}
                    <strong className="text-[var(--text-primary)]">
                      Core Team Web Development at GDGoC Universitas Sriwijaya
                    </strong>{" "}
                    (leading and teaching Frontend &amp; Backend web development)
                    and experienced in leading end-to-end engineering as{" "}
                    <strong className="text-[var(--text-primary)]">
                      Tech Lead of SI FEST 2026
                    </strong>{" "}
                    (building 98% of the backend solo, including ticketing,
                    payment gateway integration, 2FA admin panel, and QR ticket
                    scanner).
                  </p>
                  <p>
                    Passionate about backend architecture, network &amp;
                    cybersecurity (Blue/Red Team SIEM with Wazuh,{" "}
                    <strong className="text-[var(--text-primary)]">
                      Best Project Q1 NAC
                    </strong>
                    ), and mentoring fellow developers.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-subtle)] pt-4">
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
                    href="#projects"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3.5 py-1.5 text-xs font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-strong)]"
                  >
                    <span>View Projects</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-24 space-y-12">
          <div className="text-center">
            <h3 className="text-lg font-bold text-[var(--text-primary)] sm:text-xl">
              My Approach
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {APPROACH_STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <SpotlightCard className="p-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] font-mono text-xs font-bold text-[var(--text-primary)]">
                      {step.num}
                    </div>
                    <p className="text-xs font-medium leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                      {step.text}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-6 pt-4 text-center">
            {BIG_STATS.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="space-y-1"
              >
                <p className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-5xl">
                  {stat.value}
                </p>
                <p className="text-xs text-[var(--text-muted)]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
