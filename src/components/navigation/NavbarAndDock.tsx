"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Home,
  User,
  FolderGit2,
  Briefcase,
  Cpu,
  Phone,
  Search,
  Sun,
  Moon,
} from "lucide-react";

interface NavbarAndDockProps {
  theme: "dark" | "light";
  onToggleTheme: () => void;
  onOpenCommandPalette: () => void;
  activeSection: string;
}

const NAV_ITEMS = [
  { id: "hero", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Cpu },
  { id: "contact", label: "Contact", icon: Phone },
];

export default function NavbarAndDock({
  theme,
  onToggleTheme,
  onOpenCommandPalette,
  activeSection,
}: NavbarAndDockProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Floating Header (Inspired by ello-rabyndra, khalifaalhasan & atalaa-df) */}
      <header className="sticky top-0 z-40 w-full pt-4 pb-2">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
          {/* Left Terminal Brand (Inspired by khalifaalhasan.my.id) */}
          <button
            onClick={() => scrollToSection("hero")}
            className="group flex items-center gap-2.5 text-left focus:outline-none"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] font-mono text-xs font-bold text-[var(--text-primary)] shadow-sm transition-transform group-hover:scale-105">
              &gt;_
            </div>
            <span className="text-sm font-bold tracking-tight text-[var(--text-primary)] sm:text-base">
              davingabriel.
            </span>
          </button>

          {/* Center Floating Pill Navbar (Signature of all 3 reference sites) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden items-center gap-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)]/85 px-4 py-2 shadow-[0_12px_40px_rgba(0,0,0,0.55)] backdrop-blur-xl lg:flex"
          >
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium transition-colors ${
                    isActive
                      ? "text-[var(--text-primary)] font-semibold"
                      : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5 opacity-80" />
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="desktopActiveUnderline"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute right-3 -bottom-1 left-3 h-[2px] rounded-full bg-[var(--text-primary)]"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Controls: Search (Ctrl+K), Theme Toggle & "Let's Talk" Pill */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenCommandPalette}
              aria-label="Open Command Palette"
              title="Command Palette (Ctrl + K)"
              className="flex h-9 items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] px-3 text-xs text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
            >
              <Search className="h-3.5 w-3.5" />
              <kbd className="hidden font-mono text-[10px] text-[var(--text-muted)] sm:inline">
                ⌘K
              </kbd>
            </button>

            <button
              onClick={onToggleTheme}
              aria-label="Toggle color theme"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
            >
              {theme === "dark" ? (
                <Moon className="h-3.5 w-3.5" />
              ) : (
                <Sun className="h-3.5 w-3.5" />
              )}
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] px-4 py-2 text-xs font-semibold text-[var(--text-primary)] transition-all hover:border-[var(--border-strong)] hover:bg-[var(--bg-card-hover)] active:scale-95"
            >
              Let&apos;s Talk
            </button>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Floating Pill Dock */}
      <div className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2 px-3 lg:hidden">
        <nav
          aria-label="Mobile Bottom Pill Navigation"
          className="flex items-center gap-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/95 px-3 py-2 shadow-2xl shadow-black/70 backdrop-blur-xl"
        >
          {NAV_ITEMS.filter((i) => i.id !== "services").map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative flex flex-col items-center justify-center px-2.5 py-1 transition-all ${
                  isActive
                    ? "text-[var(--text-primary)] font-semibold"
                    : "text-[var(--text-muted)] active:scale-95"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="mt-0.5 text-[10px] leading-none">
                  {item.label}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="mobileActiveUnderline"
                    className="absolute right-2 -bottom-1 left-2 h-[2px] rounded-full bg-[var(--text-primary)]"
                  />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
}
