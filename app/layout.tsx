import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
