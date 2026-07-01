import {
  Bug,
  Code2,
  Database,
  Globe2,
  Network,
  Radar,
  ScanSearch,
  ShieldCheck,
  TerminalSquare
} from "lucide-react";

export const navItems = [
  "home",
  "about",
  "experience",
  "projects",
  "skills",
  "github",
  "contact"
];

export const roles = [
  "Penetration Tester",
  "Security Researcher",
  "Backend Developer",
  "Frontend Developer",
  "Problem Solver",
  "Open Source Learner"
];

export const projects = [
  {
    title: "AI Travel Manager",
    tag: "AI planner",
    icon: Globe2,
    stack: ["AI", "Travel UX", "Planning", "Web"],
    features: ["Trip planning flow", "Smart itinerary ideas", "User-focused product thinking"],
    accent: "#00E5FF",
    href: "https://github.com/AdolfBharath/Ai-travel-manager"
  },
  {
    title: "Insider Threat Detection",
    tag: "Security analytics",
    icon: ScanSearch,
    stack: ["Python", "ML", "Cyber Security", "UBA"],
    features: ["User behavior analysis", "Threat pattern detection", "Risk-focused monitoring"],
    accent: "#E11D48",
    href: "https://github.com/AdolfBharath/Insider-Threat-Detection-System-Using-User-Behavior-Analysis"
  },
  {
    title: "Jenovate LMS",
    tag: "Live full stack",
    icon: Code2,
    stack: ["JavaScript", "Frontend", "Dashboards", "Auth"],
    features: ["Learning workflows", "Student-facing UI", "Live production platform"],
    accent: "#7C3AED",
    href: "https://github.com/AdolfBharath/LMS",
    liveHref: "https://jenovate.in"
  },
  {
    title: "Student ID OCR Extraction",
    tag: "Computer vision",
    icon: Database,
    stack: ["Python", "OCR", "Image Processing", "Automation"],
    features: ["ID card parsing", "Text extraction", "Structured data output"],
    accent: "#22C55E",
    href: "https://github.com/AdolfBharath/Student-id-card-info-extraction-using-OCR"
  },
  {
    title: "MongoBleed Lab",
    tag: "CVE research",
    icon: Bug,
    stack: ["Python", "MongoDB", "CVE-2025-14847", "Lab"],
    features: ["Vulnerability explanation", "Hands-on lab", "Security research notes"],
    accent: "#00E5FF",
    href: "https://github.com/AdolfBharath/mongobleed"
  },
  {
    title: "DeepFake Detection",
    tag: "AI security",
    icon: Radar,
    stack: ["Python", "ML", "Detection", "Media Forensics"],
    features: ["Model-assisted review", "Authenticity checks", "Security awareness use case"],
    accent: "#E11D48",
    href: "https://github.com/AdolfBharath/DeepFake-Detection-"
  },
  {
    title: "Linux Luminarium",
    tag: "Linux learning",
    icon: Network,
    stack: ["Shell", "Linux", "CLI", "Systems"],
    features: ["Command-line practice", "System fundamentals", "Cyber security groundwork"],
    accent: "#7C3AED",
    href: "https://github.com/AdolfBharath/linux-luminarium"
  },
  {
    title: "Input Speed Analyzer",
    tag: "Python utility",
    icon: TerminalSquare,
    stack: ["Python", "Typing Metrics", "CLI", "Data"],
    features: ["Speed analysis", "Simple feedback loop", "Python fundamentals"],
    accent: "#22C55E",
    href: "https://github.com/AdolfBharath/Input_speed_analyzer"
  }
];

export const skillNodes = [
  { label: "Python", group: "Programming", x: 50, y: 10 },
  { label: "Java", group: "Programming", x: 78, y: 22 },
  { label: "C++", group: "Programming", x: 86, y: 52 },
  { label: "TypeScript", group: "Frontend", x: 69, y: 82 },
  { label: "JavaScript", group: "Frontend", x: 34, y: 86 },
  { label: "React", group: "Frontend", x: 13, y: 62 },
  { label: "Next.js", group: "Frontend", x: 16, y: 28 },
  { label: "Node.js", group: "Backend", x: 50, y: 50 },
  { label: "OWASP", group: "Cyber Security", x: 36, y: 27 },
  { label: "Burp Suite", group: "Cyber Security", x: 64, y: 31 },
  { label: "Wireshark", group: "Networking", x: 62, y: 66 },
  { label: "Nmap", group: "Cyber Security", x: 39, y: 67 },
  { label: "Linux", group: "Tools", x: 24, y: 45 },
  { label: "Supabase", group: "Cloud", x: 76, y: 44 },
  { label: "Firebase", group: "Cloud", x: 26, y: 75 },
  { label: "Metasploit", group: "Cyber Security", x: 74, y: 70 }
];

export const achievements = [
  "Participated in CTF competitions and cyber security challenge rooms",
  "Built and presented ideas in hackathons with fast product prototyping",
  "Managed college events, coordination work, and team execution",
  "Completed certifications in full stack development",
  "Completed certifications in networking and cyber security fundamentals"
];
