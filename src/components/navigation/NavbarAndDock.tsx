"use client";

import React, { useEffect, useState } from "react";
import {
  Home,
  User,
  FolderGit2,
  Briefcase,
  Cpu,
  Mail,
  Search,
  Sun,
  Moon,
  Terminal,
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
  { id: "projects", label: "Proyek", icon: FolderGit2 },
  { id: "experience", label: "Karir", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Cpu },
  { id: "contact", label: "Kontak", icon: Mail },
];

export default function NavbarAndDock({
  theme,
  onToggleTheme,
  onOpenCommandPalette,
  activeSection,
}: NavbarAndDockProps) {
  const [timeString, setTimeString] = useState<string>("WIB • UTC+7");

  useEffect(() => {
    const updateClock = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat("id-ID", {
          timeZone: "Asia/Jakarta",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });
        setTimeString(`${formatter.format(now)} WIB`);
      } catch {
        setTimeString("WIB • UTC+7");
      }
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Status & Quick Action Bar */}
      <header className="sticky top-0 z-40 w-full border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          {/* Brand Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="group flex items-center gap-2.5 text-left focus:outline-none"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 text-cyan-400 shadow-sm transition-transform group-hover:scale-105">
              <Terminal className="h-4 w-4" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold tracking-tight text-[var(--text-primary)]">
                  Davin G.J.
                </span>
                <span className="rounded-md bg-cyan-500/15 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-cyan-400">
                  4Y EXP
                </span>
              </div>
              <p className="text-[11px] text-[var(--text-muted)]">
                Palembang • <span className="font-mono">{timeString}</span>
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                    isActive
                      ? "bg-cyan-500/15 text-cyan-400"
                      : "text-[var(--text-secondary)] hover:bg-white/5 hover:text-[var(--text-primary)]"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Controls: Command Palette + Theme Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenCommandPalette}
              aria-label="Open Command Palette"
              className="flex items-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-3 py-1.5 text-xs text-[var(--text-secondary)] transition-colors hover:border-cyan-500/40 hover:text-[var(--text-primary)]"
            >
              <Search className="h-3.5 w-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Menu Cepat</span>
              <kbd className="rounded border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--text-muted)]">
                Ctrl K
              </kbd>
            </button>

            <button
              onClick={onToggleTheme}
              aria-label="Toggle color theme"
              className="flex h-8 w-8 items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] transition-colors hover:border-cyan-500/40 hover:text-cyan-400"
              title={theme === "dark" ? "Ganti ke Light Mode" : "Ganti ke Dark Mode"}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-amber-400" />
              ) : (
                <Moon className="h-4 w-4 text-cyan-600" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Thumb-Friendly Floating Bottom Dock */}
      <div className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2 px-3 lg:hidden">
        <nav
          aria-label="Mobile Bottom Navigation"
          className="flex items-center gap-1 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/95 p-1.5 shadow-2xl shadow-black/50 backdrop-blur-xl"
        >
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex flex-col items-center justify-center rounded-xl px-2.5 py-1.5 transition-all ${
                  isActive
                    ? "bg-gradient-to-b from-cyan-500/25 to-emerald-500/15 text-cyan-400 shadow-inner"
                    : "text-[var(--text-secondary)] active:scale-95"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="mt-0.5 text-[10px] font-medium leading-none">
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
}
