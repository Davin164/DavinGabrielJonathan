"use client";

import React, { useState } from "react";
import {
  Mail,
  Copy,
  Check,
  MessageSquare,
  ExternalLink,
  MapPin,
  Terminal,
  ArrowUpRight,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function ContactFooterSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="pt-16 pb-28 sm:pt-24 sm:pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SpotlightCard className="border-cyan-500/25 p-6 sm:p-10">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            {/* Left CTA Text */}
            <div className="space-y-4 lg:col-span-7">
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                05 // READY TO COLLABORATE
              </p>
              <h2 className="text-2xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl">
                Butuh Backend / Full-Stack Developer atau Tech Lead untuk Proyek Lu?
              </h2>
              <p className="max-w-xl text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                Terbuka untuk peluang kerja Full-Stack / Backend Web Developer, kolaborasi proyek berskala besar, maupun kontribusi sebagai Core Team Web Development.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-5 py-3 text-xs font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:brightness-110 active:scale-95 sm:text-sm"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" />
                      <span>Email Tersalin ({PORTFOLIO_DATA.personal.email})</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>Salin Email: {PORTFOLIO_DATA.personal.email}</span>
                    </>
                  )}
                </button>

                <a
                  href={PORTFOLIO_DATA.personal.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/35 bg-emerald-500/10 px-4 py-3 text-xs font-semibold text-emerald-400 transition-colors hover:bg-emerald-500/20 sm:text-sm"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>WhatsApp ({PORTFOLIO_DATA.personal.phone})</span>
                </a>
              </div>
            </div>

            {/* Right Quick Links Card */}
            <div className="space-y-3 lg:col-span-5">
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="flex items-center justify-between rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/80 p-4 transition-colors hover:border-cyan-500/40"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-400">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[var(--text-primary)]">
                      Kirim Email Langsung
                    </p>
                    <p className="font-mono text-[11px] text-[var(--text-muted)]">
                      {PORTFOLIO_DATA.personal.email}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-cyan-400" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/80 p-4 transition-colors hover:border-cyan-500/40"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-400">
                    <Terminal className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[var(--text-primary)]">
                      GitHub Repository &amp; Open Source
                    </p>
                    <p className="font-mono text-[11px] text-[var(--text-muted)]">
                      github.com/{PORTFOLIO_DATA.personal.githubUsername}
                    </p>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-cyan-400" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/80 p-4 transition-colors hover:border-cyan-500/40"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[var(--text-primary)]">
                      LinkedIn Professional Network
                    </p>
                    <p className="font-mono text-[11px] text-[var(--text-muted)]">
                      linkedin.com/in/{PORTFOLIO_DATA.personal.linkedinHandle}
                    </p>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-emerald-400" />
              </a>
            </div>
          </div>
        </SpotlightCard>

        {/* Bottom Copyright Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-[var(--border-subtle)] pt-6 text-center text-xs text-[var(--text-muted)] sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()}{" "}
            <strong className="text-[var(--text-primary)]">
              {PORTFOLIO_DATA.personal.name}
            </strong>
            . Dibangun dengan Next.js, TypeScript, Tailwind CSS &amp; Framer Motion.
          </p>
          <p className="font-mono text-[11px]">
            Palembang, Sumatera Selatan • Hosted on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
