import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Davin Gabriel Jonathan | Full-Stack Web Developer",
  description: "Portfolio of Davin Gabriel Jonathan - Full-Stack Web Developer & Tech Lead",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}
