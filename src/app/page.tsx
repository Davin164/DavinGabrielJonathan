"use client";

import React, { useEffect, useState } from "react";
import NavbarAndDock from "@/components/navigation/NavbarAndDock";
import CommandPalette from "@/components/navigation/CommandPalette";
import HeroSection from "@/components/sections/HeroSection";
import BentoAboutSection from "@/components/sections/BentoAboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactFooterSection from "@/components/sections/ContactFooterSection";
import { ProjectItem } from "@/types/portfolio";

export default function HomePage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  // Sync theme attribute on html element
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Global keyboard shortcut Ctrl+K / Cmd+K to toggle Command Palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Track active section while scrolling
  useEffect(() => {
    const sectionIds = [
      "hero",
      "about",
      "services",
      "projects",
      "experience",
      "skills",
      "contact",
    ];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-35% 0px -50% 0px", threshold: 0.05 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="relative min-h-screen">
      {/* Top Navbar & Mobile Floating Bottom Dock */}
      <NavbarAndDock
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenCommandPalette={() => setIsCommandOpen(true)}
        activeSection={activeSection}
      />

      {/* Interactive Command Palette (Ctrl+K) */}
      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        theme={theme}
        onToggleTheme={toggleTheme}
        onSelectProject={(project) => setSelectedProject(project)}
      />

      {/* Main Content Sections */}
      <main>
        <HeroSection />
        <BentoAboutSection />
        <ProjectsSection
          selectedProject={selectedProject}
          onSelectProject={setSelectedProject}
        />
        <ExperienceSection />
        <SkillsSection />
      </main>

      {/* Contact & Footer */}
      <ContactFooterSection />
    </div>
  );
}
