"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Radar,
  ShieldCheck,
  Code2,
  Trophy,
} from "lucide-react";
import { useState } from "react";
import type { IconType } from "react-icons";
import {
  SiPython,
  SiOpenjdk,
  SiCplusplus,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiOwasp,
  SiBurpsuite,
  SiWireshark,
  SiLinux,
  SiSupabase,
  SiFirebase,
  SiMetasploit,
} from "react-icons/si";
import { achievements, projects, skillNodes } from "@/lib/portfolio-data";
import SwingingSpider from "@/components/swinging-spider";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const github = "https://github.com/AdolfBharath";
const linkedin = "https://www.linkedin.com/in/bharathmurugan247";
const toolLogos: Record<string, { icon: IconType; color: string }> = {
  Python: { icon: SiPython, color: "#76b9eb" },
  Java: { icon: SiOpenjdk, color: "#ff9273" },
  "C++": { icon: SiCplusplus, color: "#83bfff" },
  TypeScript: { icon: SiTypescript, color: "#78b8ff" },
  JavaScript: { icon: SiJavascript, color: "#f7df1e" },
  React: { icon: SiReact, color: "#61dafb" },
  "Next.js": { icon: SiNextdotjs, color: "#ffffff" },
  "Node.js": { icon: SiNodedotjs, color: "#8ed875" },
  OWASP: { icon: SiOwasp, color: "#ffffff" },
  "Burp Suite": { icon: SiBurpsuite, color: "#ff956f" },
  Wireshark: { icon: SiWireshark, color: "#79bdff" },
  Linux: { icon: SiLinux, color: "#f6d661" },
  Supabase: { icon: SiSupabase, color: "#3ecf8e" },
  Firebase: { icon: SiFirebase, color: "#ffca28" },
  Metasploit: { icon: SiMetasploit, color: "#80b9ee" },
};
const filters = ["All work", "Security", "Development"] as const;
const securityProjects = new Set([
  "Insider Threat Detection",
  "MongoBleed Lab",
  "DeepFake Detection",
  "Linux Luminarium",
]);

export default function PortfolioExperience() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState<(typeof filters)[number]>("All work");
  const visibleProjects = projects.filter(
    (project) =>
      filter === "All work" ||
      (filter === "Security"
        ? securityProjects.has(project.title)
        : !securityProjects.has(project.title)),
  );
  return (
    <main id="home">
      <a href="#projects" className="skip-link">
        Skip to projects
      </a>
      <header className="header">
        <a className="brand" href="#home" aria-label="Bharath Murugan home">
          BM<span>.</span>
          <small>
            BHARATH
            <br />
            MURUGAN
          </small>
        </a>
        <button
          className="menu-toggle icon-button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav
          id="navigation"
          className={menuOpen ? "navigation open" : "navigation"}
          aria-label="Main navigation"
        >
          {["about", "projects", "experience", "skills", "contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ),
          )}
          <a className="nav-resume" href={`${base}/resume.pdf`} download>
            Resume <Download size={14} />
          </a>
        </nav>
      </header>
      <SwingingSpider />
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-art" aria-hidden="true">
          <img
            src={`${base}/images/spider-swing.png`}
            alt=""
            width="900"
            height="1196"
            fetchPriority="high"
          />
        </div>
        <div className="hero-inner">
          <div className="issue-label">
            <span>THE PORTFOLIO OF</span>
            <span>VOL. 01 / 2026</span>
          </div>
          <p className="hero-kicker">Your friendly neighborhood developer.</p>
          <h1 id="hero-title">
            BHARATH
            <br />
            <span>MURUGAN</span>
            <b>.</b>
          </h1>
          <p className="hero-description">
            Building for the web.
            <br />
            Thinking like a defender.
          </p>
          <p className="hero-copy">
            Cyber security student. Full stack developer.
            <br />
            Curious about what makes things work, and what makes them break.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              Explore my work <ArrowUpRight size={18} />
            </a>
            <a
              className="text-link"
              href={github}
              aria-label="Bharath on GitHub"
              title="GitHub"
            >
              <Github size={18} /> <span className="social-label">GitHub</span>
            </a>
            <a
              className="text-link"
              href={linkedin}
              aria-label="Bharath on LinkedIn"
              title="LinkedIn"
            >
              <Linkedin size={18} />{" "}
              <span className="social-label">LinkedIn</span>
            </a>
          </div>
          <a className="scroll-link" href="#about">
            <ArrowDown size={16} /> THE STORY CONTINUES
          </a>
        </div>
        <span className="hero-caption">
          WITH GREAT CURIOSITY
          <br />
          <strong>COMES BETTER CODE.</strong>
        </span>
      </section>
      <div className="discipline-strip">
        <span>CYBER SECURITY</span>
        <i>+</i>
        <span>FULL STACK DEVELOPMENT</span>
        <i>+</i>
        <span>CTF & HACKATHONS</span>
        <i>+</i>
        <span>ALWAYS LEARNING</span>
      </div>
      <section id="about" className="section about">
        <div>
          <span className="eyebrow">01 / THE ORIGIN STORY</span>
          <h2>
            A curious mind.
            <br />A builder at heart.
          </h2>
          <div className="about-focus">
            <span>WHAT DRIVES ME</span>
            <p>
              <ShieldCheck size={20} /> Understanding how systems can be
              defended.
            </p>
            <p>
              <Code2 size={20} /> Turning ideas into useful web applications.
            </p>
            <p>
              <Trophy size={20} /> Learning through challenges and teamwork.
            </p>
          </div>
        </div>
        <div className="about-copy">
          <p>
            I&apos;m Bharath, a Computer Science student specializing in Cyber
            Security at Sri Shakthi Institute of Engineering and Technology.
          </p>
          <p>
            I enjoy connecting development with security: building useful
            applications, exploring vulnerabilities in labs, and solving
            challenges with a team. Away from the code, you&apos;ll find me
            participating in CTFs, hackathons, and college events.
          </p>
          <p>
            My projects span full stack development, security analytics, AI, and
            automation. From a learning management platform to threat detection
            and OCR tools, I like working on problems that connect code with a
            practical use.
          </p>
          <p>
            CTF competitions give me a space to explore security challenges.
            Hackathons let me put ideas into practice with a team, while
            managing college events has given me experience in coordination and
            teamwork beyond software.
          </p>
          <p>
            I have completed certifications in full stack development,
            networking, and cyber security. I continue building on that
            foundation through projects, Linux practice, and hands-on security
            labs.
          </p>
          <div className="education">
            <span>B.E. COMPUTER SCIENCE / CYBER SECURITY</span>
            <strong>
              2023 &ndash; 2027 <span>CGPA 7.17</span>
            </strong>
          </div>
        </div>
      </section>
      <section id="projects" className="projects-section">
        <div className="section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">02 / FIELD WORK</span>
              <h2>
                Less talk.
                <br />
                <span className="red-text">More building.</span>
              </h2>
            </div>
            <p>
              Experiments, practical tools, and projects
              <br />
              that turn curiosity into working code.
            </p>
          </div>
          <div className="project-toolbar">
            <div className="filters" role="group" aria-label="Filter projects">
              {filters.map((item) => (
                <button
                  key={item}
                  aria-pressed={item === filter}
                  onClick={() => setFilter(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <span className="project-count" aria-live="polite">
              {String(visibleProjects.length).padStart(2, "0")} PROJECTS
            </span>
          </div>
          <div className="project-grid">
            {visibleProjects.map((project) => {
              const Icon = project.icon;
              return (
                <article className="project-card" key={project.title}>
                  <div
                    className={`project-art ${securityProjects.has(project.title) ? "security-art" : "development-art"}`}
                  >
                    <Icon size={64} strokeWidth={1} />
                    <span>{project.tag}</span>
                    <b>
                      {String(projects.indexOf(project) + 1).padStart(2, "0")}
                    </b>
                  </div>
                  <div className="project-body">
                    <h3>{project.title}</h3>
                    <p>{project.features.join(". ")}.</p>
                    <div className="chips">
                      {project.stack.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={project.href}>
                        View source <ArrowUpRight size={16} />
                      </a>
                      {project.liveHref && (
                        <a className="live-link" href={project.liveHref}>
                          Live site <ArrowUpRight size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <a className="all-code text-link" href={github}>
            More from my GitHub <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
      <section id="experience" className="section experience">
        <div>
          <span className="eyebrow">03 / OUT IN THE REAL WORLD</span>
          <h2>
            Learning.
            <br />
            Building.
            <br />
            <span className="red-text">Shipping.</span>
          </h2>
        </div>
        <div className="experience-detail">
          <span className="role">CYBER SECURITY & FULL STACK INTERN</span>
          <h3>
            Jenovate<span>.</span>
          </h3>
          <p>
            Hands-on experience connecting the frontend, backend, and security
            of a learning platform.
          </p>
          <ul>
            <li>Built and refined full stack learning workflows.</li>
            <li>Worked on authentication, data handling, and dashboards.</li>
            <li>Practiced security reviews across frontend and backend.</li>
          </ul>
          <a className="button dark" href="https://jenovate.in">
            Visit Jenovate <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
      <section id="skills" className="skills-section">
        <div className="section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">04 / THE UTILITY BELT</span>
              <h2>Tools of the trade.</h2>
            </div>
            <ShieldCheck size={42} strokeWidth={1.3} />
          </div>
          <div className="skills-grid">
            {[
              {
                title: "Build",
                icon: Code2,
                groups: ["Programming", "Frontend", "Backend"],
              },
              {
                title: "Defend",
                icon: ShieldCheck,
                groups: ["Cyber Security", "Networking"],
              },
              {
                title: "Deploy & explore",
                icon: Github,
                groups: ["Cloud", "Tools"],
              },
            ].map((group) => (
              <div className="skill-group" key={group.title}>
                <group.icon size={23} />
                <h3>{group.title}</h3>
                <div className="skill-list">
                  {skillNodes
                    .filter((skill) => group.groups.includes(skill.group))
                    .map((skill) => {
                      const logo = toolLogos[skill.label];
                      const Logo = logo?.icon ?? Radar;
                      return (
                        <span key={skill.label}>
                          <Logo
                            size={20}
                            color={logo?.color ?? "#8fc6ff"}
                            aria-hidden="true"
                          />
                          {skill.label}
                        </span>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section achievements" id="achievements">
        <div>
          <span className="eyebrow">05 / BEYOND THE KEYBOARD</span>
          <h2>
            Showing up.
            <br />
            Leveling up.
          </h2>
          <Trophy className="achievement-icon" size={60} strokeWidth={1} />
        </div>
        <ol>
          {achievements.map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
              <ArrowUpRight size={17} />
            </li>
          ))}
        </ol>
      </section>
      <section id="contact" className="contact-section">
        <div className="section">
          <span className="eyebrow">06 / THE NEXT CHAPTER</span>
          <h2>
            Got something
            <br />
            worth building<span>?</span>
          </h2>
          <div className="contact-bottom">
            <p>
              Let&apos;s talk projects, opportunities,
              <br />
              or a good security challenge.
            </p>
            <a href="mailto:levictf24@gmail.com">
              levictf24@gmail.com <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>
      <footer className="footer">
        <a className="footer-name" href="#home">
          BHARATH MURUGAN<span>.</span>
        </a>
        <span>&copy; 2026 &middot; Built with curiosity.</span>
        <div>
          <a href={github} aria-label="Bharath on GitHub">
            <Github size={20} />
          </a>
          <a href={linkedin} aria-label="Bharath on LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:levictf24@gmail.com" aria-label="Email Bharath">
            <Mail size={20} />
          </a>
          <a href="#home" aria-label="Back to top">
            <ArrowUpRight size={20} />
          </a>
        </div>
      </footer>
    </main>
  );
}
