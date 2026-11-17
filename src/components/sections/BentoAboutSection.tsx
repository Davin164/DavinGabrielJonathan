"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Layers, ShieldCheck } from "lucide-react";
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
  { value: "98%", label: "SI FEST Backend Built" },
  { value: "10+", label: "Projects Completed" },
  { value: "02×", label: "Best Project Awards" },
];

const SERVICES = [
  {
    title: "Backend Development",
    description:
      "Robust architectures using Node.js, Express.js, Laravel, and Java for clean, consistent, and reliable API performance.",
    pills: ["Clean MVC & REST API", "Payment Gateway"],
  },
  {
    title: "Fullstack Web",
    description:
      "End-to-end web application development focusing on responsive UI, seamless backend integration, and smooth GSAP/Motion animations.",
    pills: ["React / Next.js", "End-to-End Delivery"],
  },
  {
    title: "System Architecture",
    description:
      "Designing ticketing platforms, competition scoring systems, and QR scanners capable of handling concurrent requests without overselling.",
    pills: ["Pessimistic Locking", "ACID Transactions"],
  },
  {
    title: "DevOps & Security",
    description:
      "Containerized services using Docker Compose, Linux VPS deployment, vulnerability bug hunting, and real-time SIEM monitoring with Wazuh.",
    pills: ["Docker & VPS Host", "Wazuh SIEM"],
  },
];

const CORE_TECH_PILLS = [
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express.js",
  "Laravel",
  "PHP",
  "React / Next.js",
  "Tailwind CSS",
  "GSAP",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Docker",
  "Wazuh SIEM",
  "Figma",
];

export default function BentoAboutSection() {
  const [activeInspector, setActiveInspector] = useState<
    "about" | "sifest" | "lock"
  >("about");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      {/* SECTION 1: "wanna know about me?" + Glowing Geometric Shapes + Double-Framed About Me Card */}
      <section id="about" className="relative overflow-hidden py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Interactive Geometric Header ("wanna know about me?" from atalaa-df.vercel.app) */}
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

          {/* Side-by-Side Glowing Shapes Cluster + Double-Bordered Interactive "About Me" Card (Moved down from Hero!) */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left Glowing Shapes Cluster */}
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
                  <GlowingShape variant="circle" size={130} delay={0.5} />
                </div>
              </div>
            </motion.div>

            {/* Right: Double-Bordered Interactive "About Me" Card + Technologies I Use */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8 lg:col-span-7"
            >
              {/* Double-Framed Interactive About Me Card (with Bio | SI FEST | ACID SQL tabs) */}
              <div className="relative rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/75 p-2.5 shadow-[0_24px_60px_rgba(0,0,0,0.65)] backdrop-blur-xl sm:p-3.5">
                <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5 sm:p-7">
                  {/* Header & Mode Switcher */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="h-4 w-1.5 rounded-full bg-zinc-400" />
                      <h3 className="text-base font-bold text-[var(--text-primary)] sm:text-lg">
                        {activeInspector === "about"
                          ? "About Me"
                          : activeInspector === "sifest"
                          ? "SI FEST 2026 Architecture"
                          : "Concurrency Lock (GDGoC)"}
                      </h3>
                    </div>

                    <div className="flex items-center gap-1 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] p-0.5 font-mono text-[10px]">
                      <button
                        onClick={() => setActiveInspector("about")}
                        className={`rounded-md px-2.5 py-1 transition-colors ${
                          activeInspector === "about"
                            ? "bg-[var(--bg-card-hover)] font-semibold text-[var(--text-primary)]"
                            : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
                        }`}
                      >
                        Bio
                      </button>
                      <button
                        onClick={() => setActiveInspector("sifest")}
                        className={`rounded-md px-2.5 py-1 transition-colors ${
                          activeInspector === "sifest"
                            ? "bg-[var(--bg-card-hover)] font-semibold text-[var(--text-primary)]"
                            : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
                        }`}
                      >
                        SI FEST
                      </button>
                      <button
                        onClick={() => setActiveInspector("lock")}
                        className={`rounded-md px-2.5 py-1 transition-colors ${
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
                          and a Software Engineering (RPL) graduate with 4 years
                          of hands-on web development experience.
                        </p>
                        <p>
                          Experienced in leading end-to-end web development
                          (UI/UX, frontend, backend, VPS deployment) as{" "}
                          <strong className="text-[var(--text-primary)]">
                            Tech Lead of SI FEST 2026
                          </strong>{" "}
                          (building 98% of the backend solo) and contributing as
                          a{" "}
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
                        <div className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] p-3 text-[11px]">
                          <p className="font-semibold text-[var(--text-primary)]">
                            Main Web + Competition Scoring
                          </p>
                          <p className="text-[var(--text-muted)]">
                            Registration → Transparent Judging Score →
                            Announcement
                          </p>
                        </div>
                        <div className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] p-3 text-[11px]">
                          <p className="font-semibold text-[var(--text-primary)]">
                            Payment Gateway + QR Ticket Scanner
                          </p>
                          <p className="text-[var(--text-muted)]">
                            Automated checkout webhook + Admin Panel + Gate
                            Scanner
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

                  {/* Bottom Email & Action Bar */}
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
                      href="#projects"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3 py-1.5 text-xs font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-strong)]"
                    >
                      <span>View Projects</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Technologies I Use (Pill Cloud from atalaa-df Screenshot 13) */}
              <div>
                <h4 className="mb-4 text-xl font-bold text-[var(--text-primary)] sm:text-2xl">
                  Technologies I Use
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {CORE_TECH_PILLS.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] px-4 py-2 text-xs font-medium text-[var(--text-primary)] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[var(--border-strong)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* "My Approach" (01, 02, 03) + Big Stats Counter Row (Inspired by khalifaalhasan Screenshot 5) */}
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

            {/* Big Numbers Row */}
            <div className="grid grid-cols-2 gap-6 pt-4 text-center sm:grid-cols-4">
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
                  <p className="text-xs text-[var(--text-muted)]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: "Services" (Inspired by khalifaalhasan.my.id Screenshot 7) */}
      <section id="services" className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-5xl">
              Services
            </h2>
            <p className="mt-2 text-xs text-[var(--text-muted)] sm:text-sm">
              Designing Clean Scalable Resilient Systems
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((srv, idx) => (
              <motion.div
                key={srv.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
              >
                <SpotlightCard className="flex h-full flex-col justify-between p-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold leading-snug text-[var(--text-primary)] sm:text-xl">
                      {srv.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                      {srv.description}
                    </p>
                  </div>

                  <div className="mt-8 space-y-2">
                    {srv.pills.map((pill) => (
                      <div
                        key={pill}
                        className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-3.5 py-2.5 text-xs font-semibold text-[var(--text-primary)]"
                      >
                        {pill}
                      </div>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
