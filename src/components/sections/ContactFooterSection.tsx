"use client";

import React, { useState } from "react";
import {
  Mail,
  Copy,
  Check,
  MessageSquare,
  ExternalLink,
  Linkedin,
  Github,
  ArrowUpRight,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { GlowingShape } from "@/components/ui/GlowingShapes";

export default function ContactFooterSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer
      id="contact"
      className="relative overflow-hidden pt-16 pb-28 sm:pt-24 sm:pb-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SpotlightCard className="relative p-7 sm:p-12">
          <div className="pointer-events-none absolute -top-6 right-8 hidden opacity-60 lg:block">
            <GlowingShape variant="star" size={76} delay={0.4} />
          </div>

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-7">
              <p className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
                LET&apos;S BUILD SOMETHING GREAT
              </p>
              <h2 className="heading-gradient text-3xl font-extrabold tracking-tight sm:text-5xl">
                Ready to collaborate on your next project?
              </h2>
              <p className="max-w-xl text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                Open for Full-Stack / Backend Web Developer roles, Tech Lead
                opportunities, and Core Team Web Development collaborations.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--text-primary)] px-6 py-3 text-xs font-bold text-[var(--bg-primary)] shadow-lg transition-all hover:opacity-90 active:scale-95 sm:text-sm"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-500" />
                      <span>Copied: {PORTFOLIO_DATA.personal.email}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={PORTFOLIO_DATA.personal.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-5 py-3 text-xs font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--border-strong)] sm:text-sm"
                >
                  <MessageSquare className="h-4 w-4 text-emerald-400" />
                  <span>WhatsApp ({PORTFOLIO_DATA.personal.phone})</span>
                </a>
              </div>
            </div>

            <div className="space-y-3 lg:col-span-5">
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="flex items-center justify-between rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-4 transition-colors hover:border-[var(--border-strong)]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)]">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[var(--text-primary)]">
                      Email Direct
                    </p>
                    <p className="font-mono text-[11px] text-[var(--text-muted)]">
                      {PORTFOLIO_DATA.personal.email}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-[var(--text-secondary)]" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-4 transition-colors hover:border-[var(--border-strong)]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)]">
                    <Github className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[var(--text-primary)]">
                      GitHub Profile
                    </p>
                    <p className="font-mono text-[11px] text-[var(--text-muted)]">
                      github.com/{PORTFOLIO_DATA.personal.githubUsername}
                    </p>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-[var(--text-secondary)]" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-4 transition-colors hover:border-[var(--border-strong)]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)]">
                    <Linkedin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[var(--text-primary)]">
                      LinkedIn
                    </p>
                    <p className="font-mono text-[11px] text-[var(--text-muted)]">
                      linkedin.com/in/{PORTFOLIO_DATA.personal.linkedinHandle}
                    </p>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-[var(--text-secondary)]" />
              </a>
            </div>
          </div>
        </SpotlightCard>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-[var(--border-subtle)] pt-6 text-center text-xs text-[var(--text-muted)] sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()}{" "}
            <strong className="text-[var(--text-primary)]">
              {PORTFOLIO_DATA.personal.name}
            </strong>
            . Crafted with Next.js, TypeScript, Tailwind CSS &amp; Framer Motion.
          </p>
          <p className="font-mono text-[11px]">
            Palembang, Sumatera Selatan | Hosted on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
