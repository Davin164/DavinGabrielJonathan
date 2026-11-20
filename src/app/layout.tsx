import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Davin Gabriel Jonathan | Full-Stack Web Developer",
  description:
    "Portofolio resmi Davin Gabriel Jonathan, Mahasiswa S1 Sistem Informasi Universitas Sriwijaya & Lulusan SMK RPL dengan 4+ tahun pengalaman pengembangan web, Backend Architecture, Tech Lead SI FEST 2026, dan Backend GDGoC 2026.",
  keywords: [
    "Davin Gabriel Jonathan",
    "Full-Stack Web Developer",
    "Backend Developer",
    "Tech Lead SI FEST 2026",
    "Universitas Sriwijaya",
    "Sistem Informasi UNSRI",
    "GDGoC UNSRI",
    "Node.js",
    "Express.js",
    "Laravel",
    "Next.js",
  ],
  authors: [{ name: "Davin Gabriel Jonathan", url: "https://github.com/Davin164" }],
  icons: {
    icon: [
      { url: "/icon-64.png?v=4", type: "image/png", sizes: "64x64" },
      { url: "/favicon.svg?v=4", type: "image/svg+xml" },
      { url: "/favicon.ico?v=4", sizes: "any" },
    ],
    shortcut: ["/icon-64.png?v=4"],
    apple: [{ url: "/icon-64.png?v=4", sizes: "64x64", type: "image/png" }],
  },
  openGraph: {
    title: "Davin Gabriel Jonathan | Full-Stack Web Developer",
    description:
      "4+ Tahun membangun sistem web: Ticketing SI FEST 2026, Payment Gateway, High-Concurrency Backend (GDGoC), Dockerized API & SIEM Wazuh.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-theme="dark" suppressHydrationWarning>
      <body className="bg-architectural-grid min-h-screen font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
