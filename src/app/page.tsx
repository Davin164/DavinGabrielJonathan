"use client";

import React, { useEffect, useState } from "react";
import NavbarAndDock from "@/components/navigation/NavbarAndDock";
import HeroSection from "@/components/sections/HeroSection";
import BentoAboutSection from "@/components/sections/BentoAboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactFooterSection from "@/components/sections/ContactFooterSection";

const SECTION_IDS = [
  "hero",
  "about",
  "projects",
  "experience",
  "skills",
  "contact",
];

export default function HomePage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const updateActiveSection = () => {
      const triggerLine = window.innerHeight * 0.38;
      let current = SECTION_IDS[0];

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerLine) {
          current = id;
        }
      }

      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80;
      if (nearBottom) {
        current = "contact";
      }

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="relative min-h-screen">
      <NavbarAndDock
        theme={theme}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
        onSelectSection={setActiveSection}
      />

      <main>
        <HeroSection />
        <BentoAboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
      </main>

      <ContactFooterSection />
    </div>
  );
}
