import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-display" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Bharath Murugan | Cyber Security Engineer & Full Stack Developer",
  description:
    "A cinematic cyber-security portfolio for Bharath Murugan, blending professional engineering work with original web-inspired visual direction.",
  keywords: [
    "Bharath Murugan",
    "Cyber Security Engineer",
    "Full Stack Developer",
    "Ethical Hacker",
    "Portfolio",
    "Penetration Testing"
  ],
  openGraph: {
    title: "Bharath Murugan | Cyber Security Engineer",
    description: "Secure digital experiences, full stack systems, and cyber-security research.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
