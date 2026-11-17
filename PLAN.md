# Blueprint & Git Workflow Plan — Portofolio Davin Gabriel Jonathan

Dokumen ini berisi perencanaan arsitektur, desain, pemetaan konten dari CV/Portofolio, serta urutan pengerjaan menggunakan **Conventional Commits** yang di-push bertahap per modul ke repository GitHub:  
🔗 **Repository:** `https://github.com/Davin164/DavinGabrielJonathan`

---

## 1. Tech Stack & Konsep Desain

- **Core Framework:** **Next.js (App Router) + React 19 + TypeScript** (Siap deploy 1-klik di **Vercel**).
- **Styling & UI:** **Tailwind CSS v4** + Custom CSS Variables (Dark Mode First: *Sleek Obsidian/Zinc* `#09090b` dengan aksen *Cyan & Emerald glow* + fitur Toggle Light Mode).
- **Animasi & Interaksi (Ringan di HP & Desktop):** **Framer Motion** + **Lucide React** + Adaptive CSS GPU-accelerated hover (`pointer: fine` untuk spotlight desktop, *native touch & bottom-sheet drawer* untuk HP).
- **Konsep Visual:** **Hybrid A + B**
  1. **Modern Bento Grid & Spotlight Cards** untuk merangkum perjalanan 4 tahun di Web Dev (2022–2026).
  2. **Command Palette (`Ctrl+K` / `⌘K`)** & **Thumb-Friendly Floating Bottom Dock** untuk navigasi cepat di desktop maupun satu tangan di layar HP.
  3. **Interactive System Architecture Preview** (`Ringkasan Fitur` ↔ `Alur Arsitektur`) pada proyek unggulan (SI FEST 2026, Domus Fox, The Gatekeeper Logic, Docker CRUD API).

---

## 2. Pemetaan Data Konten (CV & Portofolio PDF)

### A. Profil Utama (About Me)
- **Nama:** Davin Gabriel Jonathan
- **Role:** Full-Stack Web Developer *(Backend-Focused & Tech Lead)*
- **Pendidikan:**
  - **Universitas Sriwijaya (2025 – Sekarang):** S1 Sistem Informasi
  - **SMK Bukit Asam (2022 – 2025):** Rekayasa Perangkat Lunak (RPL)
- **Domisili:** Palembang, Sumatera Selatan (`WIB / UTC+7`)
- **Kontak:** `davingabrieljonathan@gmail.com` | `+62 812-7867-8918` | [github.com/Davin164](https://github.com/Davin164) | [linkedin.com/in/davin-gabriel-jonathan](https://linkedin.com/in/davin-gabriel-jonathan)

### B. Daftar Proyek (4 Kategori Filter)
1. **Proyek Utama (`Featured`):**
   - **SI FEST 2026: Main Web, Admin Panel & Ticket Scanner** *(Tech Lead & Backend Developer, 2026)* — Memimpin tim end-to-end & mengerjakan 98% arsitektur backend sendiri (ticketing, kompetisi dengan transparansi nilai, payment gateway, admin panel, ticket scanner).
   - **Website Penerbitan Buku Domus Fox** *(Backend Developer, 2026 - Berjalan)* — Backend landing page & admin panel untuk pengajuan naskah buku.
   - **SIEM Threat Monitoring System dengan Wazuh** *(Blue Team - Best Project Q1 NAC, 2025)* — Monitoring serangan Red Team secara real-time.
2. **Proyek Backend (`Backend`):**
   - **The Gatekeeper Logic: Platform Tiket Event Online** *(Java Native, MySQL | GDGoC 2026)* — Penanganan *concurrent requests* anti-overselling dengan *Pessimistic Locking (`SELECT FOR UPDATE`)* & *ACID Transaction*.
   - **REST API CRUD Produk dengan Docker** *(Node.js, Express.js, PostgreSQL, Docker Compose | GDGoC 2026)* — Arsitektur MVC dengan containerization penuh.
   - **REST API CMS Sekolah Sederhana** *(Node.js, MongoDB | Magang PT Gamelab Indonesia, Apr–Jun 2024)* — Manajemen data siswa per jurusan dan angkatan.
   - **Bookshelf API** *(Node.js, Express.js, Nanoid, ESLint Airbnb | Submission Akhir Dicoding)*.
3. **Proyek Full-Stack & Fundamental (`Full-Stack`):**
   - **Website SIMAK Universitas** *(Best Team Project PTI #1 HIMSI, 2025)*.
   - **Website Perpustakaan Sederhana** *(Laravel, Bootstrap, MySQL)*.
   - **Website Pengelolaan Keuangan Pribadi** *(Laravel, Bootstrap, MySQL)*.
   - **Website Absensi Online Sederhana** *(HTML, CSS, JS, LocalStorage)* & **Website To-Do List Sederhana** *(PHP Native, HTML, CSS, JS)*.
4. **Konten Edukasi & Mentorship (`Edukasi`):**
   - **Video Pembelajaran Java Basic** untuk mahasiswa Sistem Informasi ([Google Drive](https://drive.google.com/drive/folders/1GB-g1MKgdiqM6yNRRR4kz0u6kOKC-HJo?usp=drive_link)).
   - **Mentoring Web Dev (UI/UX, Frontend, Backend)** kepada Staff & Freelance TID SI FEST 2026.

---

## 3. Urutan Eksekusi & Conventional Commits (Incremental Git Push)

Pengerjaan dilakukan bertahap dan di-push ke `https://github.com/Davin164/DavinGabrielJonathan` per grup fungsional:

### Tahap 1 — Instalasi Project & Koneksi GitHub
- **Scope:** Inisialisasi Next.js + TypeScript + Tailwind CSS (`package.json`, `package-lock.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `.gitignore`, `PLAN.md`, dan base `src/app/`).
- **Commit Message:** `chore: initial next.js typescript project setup and planning doc`
- **Action:** `git push -u origin main`

### Tahap 2 — Data Layer, Types & Domain Logic
- **Scope:** Pembuatan kontrak tipe TypeScript (`src/types/portfolio.ts`) dan data terpusat (`src/data/portfolio.ts`) berisi profil, metrik, proyek, diagram arsitektur, pengalaman organisasi/magang, dan skill.
- **Commit Message:** `feat(data): add portfolio typescript interfaces and centralized content data`
- **Action:** `git push origin main`

### Tahap 3 — Design System, Theme Engine & Core UI Primitives
- **Scope:** Konfigurasi sistem tema Dark/Light & architectural grid di `src/app/globals.css` serta komponen reusable `src/components/ui/SpotlightCard.tsx`.
- **Commit Message:** `feat(ui): add adaptive dark-light theme system and spotlight bento card primitive`
- **Action:** `git push origin main`

### Tahap 4 — Navigation, Mobile Dock & Command Palette Logic
- **Scope:** Pembuatan `src/components/navigation/NavbarAndDock.tsx` (status bar + jam WIB real-time + floating bottom dock HP) dan `src/components/navigation/CommandPalette.tsx` (`Ctrl+K` quick actions & search).
- **Commit Message:** `feat(navigation): add responsive navbar, mobile floating dock and command palette`
- **Action:** `git push origin main`

### Tahap 5 — Hero Section & Bento Grid About UI
- **Scope:** Pembuatan `src/components/sections/HeroSection.tsx` (lengkap dengan interactive code/architecture inspector) dan `src/components/sections/BentoAboutSection.tsx`.
- **Commit Message:** `feat(sections): add interactive hero section and bento about grid`
- **Action:** `git push origin main`

### Tahap 6 — Projects Showcase & Interactive Architecture Modal
- **Scope:** Pembuatan `src/components/sections/ProjectsSection.tsx` (filter kategori, switcher Ringkasan ↔ Arsitektur Sistem, dan responsive bottom-sheet/modal detail proyek).
- **Commit Message:** `feat(projects): add filterable project showcase and system architecture flow viewer`
- **Action:** `git push origin main`

### Tahap 7 — Experience Timeline, Skills Toolbox & Contact Footer
- **Scope:** Pembuatan `src/components/sections/ExperienceSection.tsx`, `src/components/sections/SkillsSection.tsx`, dan `src/components/sections/ContactFooterSection.tsx`.
- **Commit Message:** `feat(sections): add career timeline, engineering skills matrix and contact section`
- **Action:** `git push origin main`

### Tahap 8 — Main Page Assembly & SEO Metadata
- **Scope:** Integrasi seluruh section di `src/app/page.tsx`, konfigurasi metadata SEO/OpenGraph di `src/app/layout.tsx`, dan verifikasi build produksi (`npm run build`).
- **Commit Message:** `feat(app): assemble full portfolio page and configure seo metadata`
- **Action:** `git push origin main`
