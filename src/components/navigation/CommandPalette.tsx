"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  X,
  FolderGit2,
  User,
  Briefcase,
  Cpu,
  Mail,
  Copy,
  Check,
  ExternalLink,
  Sun,
  Moon,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ProjectItem } from "@/types/portfolio";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  theme: "dark" | "light";
  onToggleTheme: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  theme,
  onToggleTheme,
  onSelectProject,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      } else if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const navigateTo = (sectionId: string) => {
    onClose();
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const filteredProjects = PORTFOLIO_DATA.projects.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.techStack.some((t) => t.toLowerCase().includes(query.toLowerCase())) ||
      p.role.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-16 sm:pt-24">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -12 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="relative z-10 w-full max-w-xl overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] shadow-2xl"
          >
            {/* Search Input Header */}
            <div className="flex items-center border-b border-[var(--border-subtle)] px-4 py-3.5">
              <Search className="mr-3 h-4 w-4 text-cyan-400" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari proyek (SI FEST, Gatekeeper, Docker), skill, atau navigasi..."
                className="w-full bg-transparent text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none"
              />
              <button
                onClick={onClose}
                className="rounded-lg p-1 text-[var(--text-muted)] hover:bg-white/10 hover:text-[var(--text-primary)]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Command List Body */}
            <div className="max-h-[65vh] space-y-4 overflow-y-auto p-3">
              {/* Quick Actions */}
              <div>
                <p className="px-2 pb-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                  Aksi Cepat &amp; Kontak
                </p>
                <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center justify-between rounded-xl px-3 py-2 text-left text-xs text-[var(--text-secondary)] transition-colors hover:bg-cyan-500/10 hover:text-cyan-400"
                  >
                    <span className="flex items-center gap-2">
                      {copiedEmail ? (
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="h-3.5 w-3.5 text-cyan-400" />
                      )}
                      {copiedEmail ? "Email Disalin!" : "Salin Email Davin"}
                    </span>
                    <span className="font-mono text-[10px] opacity-70">1-Click</span>
                  </button>

                  <a
                    href={PORTFOLIO_DATA.personal.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl px-3 py-2 text-left text-xs text-[var(--text-secondary)] transition-colors hover:bg-emerald-500/10 hover:text-emerald-400"
                  >
                    <span className="flex items-center gap-2">
                      <MessageSquare className="h-3.5 w-3.5 text-emerald-400" />
                      Chat WhatsApp Langsung
                    </span>
                    <ExternalLink className="h-3 w-3 opacity-60" />
                  </a>

                  <button
                    onClick={() => {
                      onToggleTheme();
                      onClose();
                    }}
                    className="flex items-center justify-between rounded-xl px-3 py-2 text-left text-xs text-[var(--text-secondary)] transition-colors hover:bg-white/5 hover:text-[var(--text-primary)]"
                  >
                    <span className="flex items-center gap-2">
                      {theme === "dark" ? (
                        <Sun className="h-3.5 w-3.5 text-amber-400" />
                      ) : (
                        <Moon className="h-3.5 w-3.5 text-cyan-500" />
                      )}
                      Ganti ke {theme === "dark" ? "Light Mode" : "Dark Mode"}
                    </span>
                    <span className="font-mono text-[10px] opacity-70">Theme</span>
                  </button>

                  <a
                    href={PORTFOLIO_DATA.personal.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl px-3 py-2 text-left text-xs text-[var(--text-secondary)] transition-colors hover:bg-white/5 hover:text-[var(--text-primary)]"
                  >
                    <span className="flex items-center gap-2">
                      <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                      Buka GitHub (@Davin164)
                    </span>
                    <ExternalLink className="h-3 w-3 opacity-60" />
                  </a>
                </div>
              </div>

              {/* Navigation Sections */}
              <div>
                <p className="px-2 pb-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                  Lompat ke Bagian
                </p>
                <div className="grid grid-cols-2 gap-1 sm:grid-cols-3">
                  {[
                    { id: "about", label: "About & Bento", icon: User },
                    { id: "projects", label: "Showcase Proyek", icon: FolderGit2 },
                    { id: "experience", label: "Karir & Organisasi", icon: Briefcase },
                    { id: "skills", label: "Tech Stack", icon: Cpu },
                    { id: "contact", label: "Hubungi Saya", icon: Mail },
                  ].map((nav) => {
                    const Icon = nav.icon;
                    return (
                      <button
                        key={nav.id}
                        onClick={() => navigateTo(nav.id)}
                        className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs text-[var(--text-secondary)] transition-colors hover:bg-white/5 hover:text-[var(--text-primary)]"
                      >
                        <Icon className="h-3.5 w-3.5 text-cyan-400" />
                        <span>{nav.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Filtered Projects */}
              <div>
                <p className="px-2 pb-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                  Bedah Proyek &amp; Arsitektur ({filteredProjects.length})
                </p>
                <div className="space-y-1">
                  {filteredProjects.map((project) => (
                    <button
                      key={project.id}
                      onClick={() => {
                        onClose();
                        onSelectProject(project);
                      }}
                      className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-cyan-500/10"
                    >
                      <div>
                        <p className="text-xs font-semibold text-[var(--text-primary)]">
                          {project.title}
                        </p>
                        <p className="text-[11px] text-[var(--text-muted)]">
                          {project.role} • {project.techStack.slice(0, 3).join(", ")}
                        </p>
                      </div>
                      <span className="rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 font-mono text-[10px] text-cyan-400">
                        {project.architecture ? "Lihat Arsitektur" : "Detail"}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-4 py-2 text-[11px] text-[var(--text-muted)]">
              <span>Tekan ESC untuk menutup</span>
              <span className="font-mono">Davin Gabriel Jonathan • Portfolio v2026</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
