import {
  ProjectItem,
  ExperienceItem,
  SkillCategory,
  EducationItem,
  MetricItem,
} from "@/types/portfolio";

export const PORTFOLIO_DATA = {
  personal: {
    name: "Davin Gabriel Jonathan",
    shortName: "Davin",
    handle: "@Davin164",
    role: "Full-Stack Web Developer",
    focus: "Backend Architecture • Tech Lead • Full-Stack Engineering",
    educationHeadline: "S1 Sistem Informasi Universitas Sriwijaya & Alumni SMK RPL",
    yearsOfCoding: 4,
    codingSince: 2022,
    location: "Palembang, Sumatera Selatan",
    timezone: "WIB (UTC+7)",
    availability: "Open for Full-Stack / Backend Roles, Core Team & Freelance Projects",
    email: "davingabrieljonathan@gmail.com",
    phone: "+62 812-7867-8918",
    whatsappUrl: "https://wa.me/6281278678918",
    githubUrl: "https://github.com/Davin164",
    githubUsername: "Davin164",
    linkedinUrl: "https://linkedin.com/in/davin-gabriel-jonathan",
    linkedinHandle: "davin-gabriel-jonathan",
    bio: "Mahasiswa S1 Sistem Informasi Universitas Sriwijaya dan lulusan SMK Rekayasa Perangkat Lunak (2022–2025) dengan 4 tahun jam terbang di pengembangan web. Berpengalaman memimpin pengembangan end-to-end (UI/UX, Frontend, Backend, hingga VPS Deployment) sebagai Tech Lead Web Development SI FEST 2026 serta mengerjakan 98% arsitektur backend secara langsung. Aktif sebagai anggota Backend GDGoC 2026 dengan fokus pada sistem ticketing, integrasi payment gateway, concurrency control, dan keamanan sistem.",
  },

  metrics: [
    {
      label: "Perjalanan Web Dev",
      value: "4+ Tahun",
      detail: "Sejak SMK RPL (2022) hingga S1 Sistem Informasi UNSRI (2026)",
    },
    {
      label: "SI FEST 2026 Backend",
      value: "98%",
      detail: "Arsitektur backend, payment gateway & scanner dibangun mandiri + Tech Lead",
    },
    {
      label: "Penghargaan Proyek",
      value: "2× Best Project",
      detail: "Best Project Q1 NAC (Wazuh SIEM) & Best Team Project PTI #1 HIMSI",
    },
    {
      label: "Proyek & Ekosistem",
      value: "10+ Proyek",
      detail: "Ticketing, Payment Gateway, Dockerized REST API, CMS & Mentorship",
    },
  ] as MetricItem[],

  projects: [
    {
      id: "sifest-2026",
      title: "SI FEST 2026: Main Web, Admin Panel & Ticket Scanner",
      subtitle: "End-to-End Event Ticketing, Competition Platform & Real-Time QR Validation",
      role: "Tech Lead & Backend Developer",
      period: "2026",
      category: "featured",
      status: "Production",
      badge: "Website",
      image: "/projects/sifest-2026.svg",
      summary:
        "Platform ekosistem acara tahunan SI FEST 2026 yang dikembangkan secara end-to-end mulai dari perancangan UI/UX, frontend interaktif, arsitektur backend, integrasi payment gateway, hingga deployment ke produksi VPS.",
      highlights: [
        "Memimpin tim web sebagai generalis (UI/UX, Frontend, Backend, Deployment) sekaligus mengeksekusi 98% kode sisi backend secara mandiri.",
        "Membangun Main Web yang menangani seluruh siklus kompetisi (pendaftaran hingga pengumuman) dengan sistem transparansi nilai penjurian.",
        "Mengintegrasikan Payment Gateway otomatis untuk transaksi pembelian tiket dan registrasi peserta.",
        "Mengembangkan Admin Panel terpusat untuk manajemen acara serta aplikasi Ticket Scanner untuk validasi kehadiran peserta secara real-time.",
        "Membimbing staff internal dan freelancer serta turut membangun Website Freelance selama proyek berlangsung.",
      ],
      techStack: [
        "Node.js / Backend API",
        "Payment Gateway",
        "Auth Middleware",
        "Tailwind CSS",
        "GSAP",
        "MySQL / PostgreSQL",
        "VPS Deployment",
      ],
      architecture: {
        overview:
          "Arsitektur terpusat yang menghubungkan 3 antarmuka (Main Web Peserta, Admin Panel Panitia, dan Ticket Scanner Gate) ke satu Core Backend dengan validasi webhook Payment Gateway.",
        nodes: [
          {
            id: "client",
            label: "Main Web & Scanner UI",
            sublabel: "Peserta, Kompetisi & QR Gate Scanner",
            type: "client",
          },
          {
            id: "auth",
            label: "Auth & RBAC Middleware",
            sublabel: "Session, Role Guard & Webhook Verifier",
            type: "security",
          },
          {
            id: "core",
            label: "SI FEST Core Backend (98% Solo)",
            sublabel: "Ticketing Engine, Scoring Transparency & Admin API",
            type: "service",
          },
          {
            id: "payment",
            label: "Payment Gateway",
            sublabel: "Automated Checkout & Callback Sync",
            type: "gateway",
          },
          {
            id: "db",
            label: "Relational Database (VPS)",
            sublabel: "Peserta, Transaksi, Tiket & Nilai Kompetisi",
            type: "database",
          },
        ],
        keyEngineeringDecision:
          "Memisahkan modul validasi Ticket Scanner dan callback Payment Gateway dengan middleware berlapis agar proses check-in peserta di hari-H tetap cepat dan bebas duplikasi tiket.",
      },
      links: {
        github: "https://github.com/Davin164",
      },
    },
    {
      id: "domus-fox",
      title: "Website Penerbitan Buku Domus Fox",
      subtitle: "Publishing Landing Page, Manuscript Submission & Editorial Admin Panel",
      role: "Backend Developer",
      period: "2026",
      category: "featured",
      status: "Ongoing",
      badge: "2026 - Ongoing",
      image: "/projects/domus-fox.svg",
      summary:
        "Platform digital untuk penerbit buku Domus Fox yang memfasilitasi penulis dalam mengajukan naskah buku secara online sekaligus menyediakan Admin Panel bagi tim redaksi untuk mengelola alur penerbitan.",
      highlights: [
        "Merancang dan mengembangkan keseluruhan arsitektur sisi backend untuk Landing Page publik dan Admin Panel internal.",
        "Membangun endpoint pengajuan penerbitan buku, manajemen metadata naskah, dan pelacakan status pengajuan penulis.",
        "Menerapkan autentikasi berbasis middleware untuk melindungi akses dashboard manajemen penerbit.",
      ],
      techStack: ["Node.js / Express.js", "REST API", "Middleware Auth", "Relational DB", "Admin Panel"],
      architecture: {
        overview:
          "Sistem backend terstruktur yang menjembatani portal pengajuan naskah penulis dengan dashboard manajemen redaksi Domus Fox.",
        nodes: [
          {
            id: "portal",
            label: "Landing Page & Form Naskah",
            sublabel: "Portal Publik Penulis Domus Fox",
            type: "client",
          },
          {
            id: "middleware",
            label: "Auth & Input Sanitizer",
            sublabel: "Middleware Login & Validasi File/Naskah",
            type: "security",
          },
          {
            id: "api",
            label: "Domus Fox Backend API",
            sublabel: "Submission Workflow & Catalog Service",
            type: "service",
          },
          {
            id: "db",
            label: "Publishing Database",
            sublabel: "Data Penulis, Naskah & Status Terbit",
            type: "database",
          },
        ],
        keyEngineeringDecision:
          "Menyusun skema status pengajuan berjenjang sehingga admin penerbit dapat memantau antrean naskah masuk hingga proses terbit tanpa tumpang tindih data.",
      },
      links: {
        github: "https://github.com/Davin164",
      },
    },
    {
      id: "gatekeeper-logic",
      title: "The Gatekeeper Logic: Platform Tiket Event Online",
      subtitle: "High-Concurrency Event Ticketing dengan Pessimistic Locking & ACID",
      role: "Backend Developer",
      period: "2026",
      category: "backend",
      status: "Completed",
      badge: "Backend",
      image: "/projects/gatekeeper-logic.svg",
      summary:
        "Platform pemesanan tiket event online yang dirancang khusus untuk menangani lonjakan permintaan bersamaan (concurrent requests / flash sale) tanpa risiko overselling kuota tiket.",
      highlights: [
        "Mengimplementasikan Pessimistic Locking (`SELECT ... FOR UPDATE`) di level database untuk mengunci baris stok tiket saat transaksi berlangsung.",
        "Menjamin integritas data penuh menggunakan ACID Transaction (rollback otomatis apabila pembayaran atau validasi stok gagal di tengah jalan).",
        "Menguji skenario race condition saat banyak request masuk di milidetik yang sama untuk memastikan stok tidak pernah minus.",
      ],
      techStack: ["Java Native", "MySQL", "Pessimistic Locking", "ACID Transactions", "Concurrency Control"],
      architecture: {
        overview:
          "Alur penguncian baris transaksi (Row-Level Locking) pada database untuk mencegah race condition saat ratusan user membeli tiket di detik yang sama.",
        nodes: [
          {
            id: "req",
            label: "Concurrent Buyers",
            sublabel: "Simulasi Ratusan Request Bersamaan",
            type: "client",
          },
          {
            id: "engine",
            label: "Gatekeeper Java Service",
            sublabel: "Transaction Boundary (BEGIN / COMMIT / ROLLBACK)",
            type: "service",
          },
          {
            id: "lock",
            label: "SELECT ... FOR UPDATE",
            sublabel: "Pessimistic Row-Level Lock pada Stok Tiket",
            type: "security",
          },
          {
            id: "mysql",
            label: "MySQL InnoDB Engine",
            sublabel: "Zero Overselling • ACID Compliant",
            type: "database",
          },
        ],
        keyEngineeringDecision:
          "Memilih Pessimistic Locking (`SELECT FOR UPDATE`) dibanding pengecekan stok biasa di aplikasi agar antrean request dieksekusi secara atomik oleh engine InnoDB.",
      },
      links: {
        github: "https://github.com/Davin164",
      },
    },
    {
      id: "docker-crud-api",
      title: "REST API CRUD Produk dengan Docker",
      subtitle: "Multi-Container MVC REST API dengan Node.js, PostgreSQL & Docker Compose",
      role: "Backend Developer",
      period: "2026",
      category: "backend",
      status: "Completed",
      badge: "Backend",
      image: "/projects/docker-crud-api.svg",
      summary:
        "Layanan REST API manajemen produk berarsitektur MVC yang di-containerize sepenuhnya menggunakan Docker dan Docker Compose untuk menjamin konsistensi environment.",
      highlights: [
        "Membangun arsitektur Model-View-Controller (MVC) yang bersih dengan kontrak respons JSON yang terstandarisasi.",
        "Mengorkestrasi service API (Node.js/Express) dan database (PostgreSQL) menggunakan Docker & Docker Compose.",
        "Melakukan pengujian menyeluruh untuk seluruh endpoint CRUD dan edge-case validasi menggunakan Postman.",
      ],
      techStack: ["Node.js", "Express.js", "PostgreSQL", "Docker", "Docker Compose", "Postman"],
      architecture: {
        overview:
          "Isolasi layanan aplikasi dan penyimpanan data di dalam jaringan virtual Docker Compose yang siap dijalankan di server mana pun dengan satu perintah.",
        nodes: [
          {
            id: "postman",
            label: "API Consumer / Postman",
            sublabel: "REST HTTP Requests (GET/POST/PUT/DELETE)",
            type: "client",
          },
          {
            id: "express",
            label: "App Container (Express MVC)",
            sublabel: "Router → Controller → Service Layer",
            type: "service",
          },
          {
            id: "postgres",
            label: "DB Container (PostgreSQL)",
            sublabel: "Persistent Volume & Internal Docker Network",
            type: "database",
          },
        ],
        keyEngineeringDecision:
          "Menggunakan Docker Compose dengan network terisolasi dan persistent volume agar database PostgreSQL tetap aman saat container aplikasi di-rebuild.",
      },
      links: {
        github: "https://github.com/Davin164",
      },
    },
    {
      id: "wazuh-siem-nac",
      title: "SIEM Threat Monitoring System (Wazuh)",
      subtitle: "Real-Time Blue Team Security Monitoring terhadap Serangan Red Team",
      role: "Blue Team Security",
      period: "2025",
      category: "featured",
      status: "Award Winner",
      badge: "Best Project Q1 NAC",
      image: "/projects/wazuh-siem.svg",
      summary:
        "Proyek kolaborasi keamanan siber di Network Administrator Club (NAC) untuk mendeteksi, menganalisis, dan memonitor serangan Red Team secara real-time menggunakan platform SIEM Wazuh.",
      highlights: [
        "Meraih penghargaan Best Project pada Quarter 1 di Network Administrator Club (NAC) Fasilkom UNSRI.",
        "Mengonfigurasi Wazuh SIEM untuk mengumpulkan telemetry log, mendeteksi anomali/intrusi dari Red Team, dan menyajikan dashboard insiden real-time.",
        "Berperan aktif baik sebagai Blue Team (Q1 Defense & Monitoring) maupun Red Team (Q2 Offensive Simulation).",
      ],
      techStack: ["Wazuh SIEM", "Blue Team Defense", "Red Team Simulation", "Linux Server", "Log Analysis"],
      links: {
        github: "https://github.com/Davin164",
      },
    },
    {
      id: "school-cms-api",
      title: "REST API CMS Sekolah Sederhana",
      subtitle: "Proyek Akhir Magang PT Gamelab Indonesia",
      role: "Backend Developer Intern",
      period: "2024",
      category: "backend",
      status: "Completed",
      badge: "Backend",
      image: "/projects/school-cms.svg",
      summary:
        "REST API Content Management System (CMS) sekolah untuk mengelola data akademik siswa secara terstruktur berdasarkan jurusan dan angkatan.",
      highlights: [
        "Dikembangkan sebagai proyek puncak setelah menyelesaikan 4 kelas intensif Web Backend di PT Gamelab Indonesia.",
        "Menggunakan MongoDB untuk fleksibilitas skema data siswa lintas jurusan dan angkatan.",
        "Menyediakan endpoint filter, paginasi, dan manajemen profil siswa.",
      ],
      techStack: ["Node.js", "Express.js", "MongoDB", "REST API", "JavaScript"],
      links: {
        github: "https://github.com/Davin164",
      },
    },
    {
      id: "bookshelf-api",
      title: "Bookshelf API",
      subtitle: "Submission Akhir Bootcamp Backend JavaScript Dicoding",
      role: "Backend Developer",
      period: "2024",
      category: "backend",
      status: "Completed",
      badge: "Backend",
      image: "/projects/bookshelf-api.svg",
      summary:
        "REST API pengelolaan katalog buku dengan fitur pencarian dan filter dinamis (status sedang dibaca, selesai dibaca, dan kueri nama).",
      highlights: [
        "Menggunakan Nanoid untuk pembuatan ID unik berkecepatan tinggi pada setiap entitas buku.",
        "Menerapkan standar kualitas kode ketat menggunakan ESLint dengan konfigurasi Airbnb JavaScript Style Guide.",
        "Memenuhi seluruh spesifikasi pengujian otomatis Postman dari Dicoding dengan sempurna.",
      ],
      techStack: ["Node.js", "Express.js", "Nanoid", "ESLint (Airbnb)", "REST API"],
      links: {
        github: "https://github.com/Davin164",
      },
    },
    {
      id: "simak-himsi",
      title: "Website SIMAK Universitas",
      subtitle: "Prototipe Portal Akademik — Project PTI #1 HIMSI",
      role: "Web Developer",
      period: "2025",
      category: "fullstack",
      status: "Award Winner",
      badge: "Website",
      image: "/projects/simak-himsi.svg",
      summary:
        "Pengembangan website Sistem Informasi Akademik (SIMAK) sederhana untuk universitas yang meraih predikat Best Team Project pada program kerja PTI #1 HIMSI.",
      highlights: [
        "Menyabet penghargaan Best Team Project pada kompetisi internal Project PTI #1 HIMSI UNSRI.",
        "Membangun alur informasi akademik yang mudah dinavigasi oleh mahasiswa dan pengelola kampus.",
      ],
      techStack: ["Full-Stack Web", "HTML/CSS", "JavaScript", "Backend Integration"],
      links: {
        github: "https://github.com/Davin164",
      },
    },
    {
      id: "laravel-library-finance",
      title: "Website Perpustakaan & Pengelolaan Keuangan",
      subtitle: "Aplikasi Full-Stack Berbasis Laravel, Bootstrap & MySQL",
      role: "Full-Stack Developer",
      period: "2024",
      category: "fullstack",
      status: "Completed",
      badge: "Website",
      image: "/projects/laravel-suite.svg",
      summary:
        "Rangkaian aplikasi web full-stack menggunakan ekosistem Laravel dan MySQL untuk manajemen sirkulasi perpustakaan serta pencatatan arus kas keuangan pribadi.",
      highlights: [
        "Website Perpustakaan: Fitur CRUD lengkap untuk manajemen katalog buku, data anggota, dan transaksi peminjaman/pengembalian.",
        "Website Keuangan Pribadi: Pencatatan pemasukan, pengeluaran, kalkulasi saldo real-time, serta riwayat audit transaksi.",
        "Website Absensi Online & To-Do List: Eksplorasi fundamental DOM manipulation, LocalStorage, dan PHP Native.",
      ],
      techStack: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript", "LocalStorage"],
      links: {
        github: "https://github.com/Davin164",
      },
    },
    {
      id: "education-mentorship",
      title: "Video Pembelajaran Java Basic & Mentoring TID",
      subtitle: "Konten Edukasi Mahasiswa SI UNSRI & Bimbingan Tim Web",
      role: "Mentor & Creator",
      period: "2026",
      category: "education",
      status: "Completed",
      badge: "Education",
      image: "/projects/java-education.svg",
      summary:
        "Inisiatif berbagi pengetahuan pemrograman melalui kurikulum mentoring Web Development (UI/UX, Frontend, Backend) serta seri video pembelajaran Java Basic.",
      highlights: [
        "Membuat dan membagikan seri Video Pembelajaran Java Basic untuk rekan seangkatan dan adik tingkat S1 Sistem Informasi UNSRI.",
        "Menyusun materi dan membimbing langsung staff serta freelancer divisi TID SI FEST 2026 mengenai alur kerja UI/UX, Frontend, dan Backend.",
      ],
      techStack: ["Java Basic", "UI/UX Workflow", "Frontend Architecture", "Backend Mentorship"],
      links: {
        drive: "https://drive.google.com/drive/folders/1GB-g1MKgdiqM6yNRRR4kz0u6kOKC-HJo?usp=drive_link",
      },
    },
  ] as ProjectItem[],

  experiences: [
    {
      id: "tech-lead-sifest-2026",
      role: "Tech Lead — Divisi Technology & Information Development",
      organization: "OC TID SI FEST 2026 (Fasilkom UNSRI)",
      period: "2026",
      type: "Leadership & Tech",
      badge: "Tech Lead • 98% Backend Solo",
      location: "Palembang, Indonesia",
      highlights: [
        "Memimpin tim pengembangan web secara end-to-end sebagai generalis (UI/UX, Frontend, Backend, Deployment) dan mengerjakan 98% arsitektur backend sendiri.",
        "Membangun 2 website utama: Main Web SI FEST 2026 (ticketing, kompetisi dari pendaftaran hingga pengumuman dengan transparansi nilai, admin panel, ticket scanner, payment gateway) dan Website Freelance.",
        "Memberikan materi teknis serta membimbing staff dan freelancer selama siklus proyek berjalan.",
      ],
      skills: ["Tech Leadership", "Backend Architecture", "Payment Gateway", "System Deployment", "Mentoring"],
    },
    {
      id: "gdgoc-backend-2026",
      role: "Member — Backend Development",
      organization: "Google Developer Group on Campus (GDGoC)",
      period: "2026",
      type: "Engineering & Community",
      badge: "GDGoC Batch 2026",
      location: "Universitas Sriwijaya",
      highlights: [
        "Menyelesaikan Backend Test (Dockerized Product REST API dengan PostgreSQL) dan tugas Backend Web Developer (The Gatekeeper Logic dengan Pessimistic Locking).",
        "Berkolaborasi dalam pengembangan proyek web lintas divisi bersama komunitas developer kampus.",
      ],
      skills: ["Node.js", "Express.js", "Java Concurrency", "PostgreSQL", "Docker Compose"],
    },
    {
      id: "nac-security-multimedia",
      role: "Staff Medinfo-Multimedia & Blue/Red Team Member",
      organization: "Network Administrator Club (NAC)",
      period: "2025 – Sekarang",
      type: "Cyber Security & IT",
      badge: "Best Project Q1 (Wazuh SIEM)",
      location: "Fasilkom UNSRI",
      highlights: [
        "Berperan di divisi Medinfo–Multimedia sekaligus terjun di tim teknis keamanan siber selama 2 kuarter: Q1 sebagai Blue Team dan Q2 sebagai Red Team.",
        "Meraih penghargaan Best Project pada Quarter 1 dengan membangun sistem SIEM menggunakan Wazuh untuk memonitor serangan Red Team secara real-time.",
      ],
      skills: ["Wazuh SIEM", "Blue Team Defense", "Red Team Simulation", "Network Security"],
    },
    {
      id: "himsi-pti",
      role: "Staff Pengembangan Teknologi dan Informasi (PTI)",
      organization: "HIMSI Fasilkom UNSRI",
      period: "2025 – Sekarang",
      type: "Engineering & Community",
      badge: "Best Team Project PTI #1",
      location: "Fasilkom UNSRI",
      highlights: [
        "Meraih penghargaan Best Team Project pada Project PTI #1 melalui pengembangan prototipe website SIMAK (Sistem Informasi Akademik) untuk universitas.",
      ],
      skills: ["Web Development", "Team Collaboration", "Academic Information System"],
    },
    {
      id: "intel-arrait-po",
      role: "PIC Backend ARRAIT, Project Officer & Vice PO",
      organization: "INTEL (English Club FASILKOM UNSRI)",
      period: "2025 – 2026",
      type: "Leadership & Tech",
      badge: "PIC Backend & Project Officer",
      location: "Indralaya & Palembang",
      highlights: [
        "PIC Backend untuk pengembangan Website Company Profile INTEL FASILKOM UNSRI serta Staff IT Protein 2026.",
        "Project Officer 'Intel Goes to School' (2026): Memimpin program kerja pengabdian mengajar Bahasa Inggris dan IT di SMPN 1 Indralaya.",
        "Vice Project Officer 'General Assembly / Mubes' (2026): Mendampingi perencanaan dan pelaksanaan musyawarah besar organisasi.",
      ],
      skills: ["Backend Development", "Project Management", "Public Leadership", "IT Education"],
    },
    {
      id: "gamelab-intern-bughunter",
      role: "Web Backend Intern & Bug Hunter PPDB",
      organization: "PT Gamelab Indonesia & SMK Bukit Asam",
      period: "2024 (SMK RPL 2022–2025)",
      type: "Industry & Security",
      badge: "Industry Internship & Security Audit",
      location: "Indonesia",
      highlights: [
        "Magang PT Gamelab Indonesia (Apr–Jun 2024): Lulus 4 kelas intensif Web Backend & membangun proyek REST API CMS Sekolah dengan Node.js dan MongoDB.",
        "Bug Hunter Website PPDB SMK Bukit Asam (2024): Dipercaya mengaudit celah keamanan dan bug pada portal Penerimaan Peserta Didik Baru milik Yayasan Bukit Asam Foundation serta menyusun laporan teknis perbaikannya.",
      ],
      skills: ["Node.js", "MongoDB", "REST API", "Bug Hunting", "Security Reporting"],
    },
  ] as ExperienceItem[],

  skillCategories: [
    {
      id: "backend",
      title: "Backend & System Architecture",
      subtitle: "Fokus utama dalam merancang logika bisnis, API aman, dan transaksi anti-race condition",
      skills: [
        { name: "Node.js & Express.js", level: "Core Stack", highlight: true, usedIn: "SI FEST, GDGoC, Gamelab, Dicoding" },
        { name: "REST API Design (MVC)", level: "Core Stack", highlight: true, usedIn: "Semua Proyek Backend" },
        { name: "Laravel & PHP", level: "Production", highlight: true, usedIn: "Web Perpustakaan, Keuangan & To-Do" },
        { name: "Payment Gateway Integration", level: "Production", highlight: true, usedIn: "SI FEST 2026 Ticketing" },
        { name: "Auth & Middleware Security", level: "Production", highlight: true, usedIn: "SI FEST 2026 & Domus Fox" },
        { name: "Java & Concurrency Control", level: "Pessimistic Lock / ACID", highlight: false, usedIn: "The Gatekeeper Logic & Video Edukasi" },
      ],
    },
    {
      id: "frontend",
      title: "Frontend, UI & Web Animation",
      subtitle: "Antarmuka responsif, modern, dan interaktif di perangkat mobile maupun desktop",
      skills: [
        { name: "JavaScript (ES6+) & TypeScript", level: "Core Stack", highlight: true, usedIn: "Full-Stack Web Apps" },
        { name: "Tailwind CSS", level: "Core Stack", highlight: true, usedIn: "SI FEST 2026 & Modern Web UI" },
        { name: "GSAP (Web Animation)", level: "Interactive Motion", highlight: true, usedIn: "Animasi Interaktif Frontend" },
        { name: "React & Next.js", level: "Modern Web", highlight: true, usedIn: "Interactive Web & Portfolio Ecosystem" },
        { name: "HTML5, CSS3 & Bootstrap", level: "Fundamental", highlight: false, usedIn: "Landing Page & Dashboard" },
        { name: "Figma (UI/UX Prototyping)", level: "Design-to-Code", highlight: false, usedIn: "Perancangan End-to-End & Mentorship" },
      ],
    },
    {
      id: "database-devops",
      title: "Database, DevOps & Cyber Security",
      subtitle: "Manajemen penyimpanan relasional/NoSQL, containerization, dan monitoring keamanan",
      skills: [
        { name: "MySQL & PostgreSQL", level: "Relational & ACID", highlight: true, usedIn: "SI FEST, GDGoC Docker API, Gatekeeper" },
        { name: "MongoDB & SQLite", level: "NoSQL & Lightweight", highlight: false, usedIn: "REST API CMS Sekolah Gamelab" },
        { name: "Docker & Docker Compose", level: "Containerization", highlight: true, usedIn: "GDGoC Product CRUD API" },
        { name: "Linux VPS & Web Deployment", level: "Production Host", highlight: true, usedIn: "Deployment Ekosistem SI FEST 2026" },
        { name: "Wazuh SIEM & Bug Hunting", level: "Blue/Red Team", highlight: true, usedIn: "Best Project NAC Q1 & Audit PPDB" },
        { name: "Git, GitHub & Postman", level: "Engineering Workflow", highlight: false, usedIn: "Version Control & API Testing" },
      ],
    },
  ] as SkillCategory[],

  education: [
    {
      institution: "Universitas Sriwijaya (UNSRI)",
      degree: "S1 Sistem Informasi — Fakultas Ilmu Komputer",
      period: "2025 – Sekarang",
      highlights: "Tech Lead SI FEST 2026, Member Backend GDGoC 2026, Best Project NAC Q1, Best Team Project PTI #1 HIMSI, PIC Backend INTEL.",
    },
    {
      institution: "SMK Bukit Asam",
      degree: "Rekayasa Perangkat Lunak (Software Engineering)",
      period: "2022 – 2025",
      highlights: "Bug Hunter Website PPDB Yayasan Bukit Asam (2024) & Magang Web Backend di PT Gamelab Indonesia (Apr–Jun 2024).",
    },
  ] as EducationItem[],
};
