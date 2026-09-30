import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bharath Murugan | Cyber Security Engineer & Full Stack Developer",
  description:
    "Bharath Murugan's portfolio: full stack projects, cyber security research, CTFs, and hands-on learning.",
  keywords: [
    "Bharath Murugan",
    "Cyber Security Engineer",
    "Full Stack Developer",
    "Ethical Hacker",
    "Portfolio",
    "Penetration Testing",
  ],
  openGraph: {
    title: "Bharath Murugan | Cyber Security Engineer",
    description:
      "Secure digital experiences, full stack systems, and cyber-security research.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
