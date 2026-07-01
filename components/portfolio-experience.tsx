"use client";

import Lenis from "lenis";
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Send,
  Shield,
  ShieldCheck,
  Trophy
} from "lucide-react";
import { motion } from "framer-motion";
import { CSSProperties, FormEvent, useEffect, useState } from "react";
import { achievements, projects, skillNodes } from "@/lib/portfolio-data";

const githubUrl = "https://github.com/AdolfBharath";
const jenovateUrl = "https://jenovate.in";
const email = "levictf24@gmail.com";
const assetBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const heroImagePath = `${assetBase}/images/spider-cyber-hero.png`;
const resumePath = `${assetBase}/resume.pdf`;

const navItems = ["about", "experience", "projects", "live", "skills", "contact"];

function SectionTitle({ kicker, title, copy }: { kicker: string; title: string; copy?: string }) {
  return (
    <motion.div
      className="section-title"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45 }}
    >
      <span>{kicker}</span>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </motion.div>
  );
}

export default function PortfolioExperience() {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => cancelAnimationFrame(frame);
  }, []);

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const sender = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio contact from ${name || "visitor"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${sender}\n\n${message}`);
    setSent(true);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    window.setTimeout(() => setSent(false), 2200);
  };

  return (
    <main className="site" style={{ "--hero-image": `url("${heroImagePath}")` } as CSSProperties}>
      <nav className="nav-shell">
        <a className="brand" href="#home">
          <span className="brand-mark">BM</span>
          <span>Bharath Murugan</span>
        </a>
        <div>
          {navItems.map((item) => (
            <a href={`#${item}`} key={item}>{item}</a>
          ))}
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-image" aria-hidden>
          <img
            src={heroImagePath}
            alt=""
            className="hero-photo"
          />
          <div className="hero-webline hero-webline-one" />
          <div className="hero-webline hero-webline-two" />
          <div className="hero-shade" />
        </div>
        <motion.div className="hero-content" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="hero-status">
            <span><Shield size={15} /> Security portfolio online</span>
            <span>Resume ready</span>
          </div>
          <span className="eyebrow">Cyber Security / Full Stack / Ethical Hacking</span>
          <h1>Bharath Murugan</h1>
          <p>
            I build secure digital experiences with the discipline of a security engineer and the craft of a full stack developer.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">View Projects <ArrowUpRight size={17} /></a>
            <a className="button" href={resumePath} download>Resume <Download size={17} /></a>
            <a className="button quiet" href={githubUrl}>GitHub <Github size={17} /></a>
          </div>
        </motion.div>
      </section>

      <section id="about" className="section about-section">
        <SectionTitle
          kicker="Profile"
          title="A security-first developer with a cinematic edge, not a noisy gimmick."
          copy="The portfolio now uses a Spider-inspired visual mood through image direction, red and blue contrast, web-like structure, and restrained security UI details."
        />
        <div className="about-grid">
          <article className="feature-panel large">
            <h3>Education</h3>
            <p>BE Computer Science (Cyber Security), Sri Shakthi Institute of Engineering and Technology.</p>
            <dl>
              <div><dt>Timeline</dt><dd>2023-2027</dd></div>
              <div><dt>CGPA</dt><dd>7.17</dd></div>
            </dl>
          </article>
          {["Cyber Security", "Full Stack Development", "Open Source Learning"].map((item) => (
            <article className="feature-panel" key={item}>
              <ShieldCheck />
              <h3>{item}</h3>
              <p>Practical, focused, and built around real outcomes instead of decoration.</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section story-row">
        <SectionTitle kicker="Experience" title="Jenovate internship work, presented clearly." />
        <article className="experience-panel">
          <div>
            <span>Cyber Security & Full Stack Intern</span>
            <h3>Jenovate</h3>
          </div>
          <ul>
            <li>Built and refined full stack learning platform workflows.</li>
            <li>Supported secure auth, data handling, and dashboard behavior.</li>
            <li>Practiced security review habits across frontend and backend touchpoints.</li>
          </ul>
        </article>
      </section>

      <section id="projects" className="section projects-section">
        <SectionTitle
          kicker="Projects"
          title="Security projects that recruiters can scan fast."
          copy="Each card is quiet enough to read, but still carries the red-blue Spider-inspired identity."
        />
        <div className="project-grid">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.article
                className="project-card"
                key={project.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
              >
                <div className="project-top" style={{ "--accent": project.accent } as CSSProperties}>
                  <Icon />
                  <span>{project.tag}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.features.join(" / ")}</p>
                <div className="chips">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
                <div className="project-links">
                  {project.liveHref ? <a href={project.liveHref}>Live Site <ArrowUpRight size={15} /></a> : null}
                  <a href={project.href}>{project.liveHref ? "Source" : "Open Repo"} <ArrowUpRight size={15} /></a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section id="live" className="section live-section">
        <SectionTitle
          kicker="Live work"
          title="Jenovate is live in production."
          copy="A real deployed platform is stronger than another oversized source-card. This section points visitors straight to the working site."
        />
        <a className="live-card" href={jenovateUrl}>
          <div>
            <span>jenovate.in</span>
            <strong>Open the live Jenovate platform</strong>
          </div>
          <ArrowUpRight />
        </a>
      </section>

      <section id="skills" className="section skills-section">
        <SectionTitle kicker="Skills" title="A practical toolkit, organized as a web of strengths." />
        <div className="skill-cloud">
          {skillNodes.map((skill) => (
            <span key={skill.label}>{skill.label}</span>
          ))}
        </div>
      </section>

      <section id="github" className="section github-section">
        <a className="github-card compact" href={githubUrl}>
          <Github />
          <div>
            <span>github.com/AdolfBharath</span>
            <strong>More source code on GitHub</strong>
          </div>
          <ArrowUpRight />
        </a>
      </section>

      <section id="achievements" className="section achievements-section">
        <SectionTitle kicker="Achievements" title="Signals beyond code." />
        <div className="achievement-grid">
          {achievements.map((item) => (
            <article className="achievement-card" key={item}>
              <Trophy />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <SectionTitle kicker="Contact" title="Start a conversation." copy={`Messages open your mail client to ${email}.`} />
        <form className="contact-form" onSubmit={submitContact}>
          <input required name="name" placeholder="Name" aria-label="Name" suppressHydrationWarning />
          <input required name="email" type="email" placeholder="Email" aria-label="Email" suppressHydrationWarning />
          <textarea required name="message" placeholder="Message" aria-label="Message" rows={5} suppressHydrationWarning />
          <button className="button primary" type="submit">Send Message <Send size={17} /></button>
          {sent ? <p className="sent-note">Opening email draft for {email}.</p> : null}
        </form>
      </section>

      <footer className="footer">
        <span>{"\u00a9"} 2026 Bharath Murugan</span>
        <div>
          <a href={githubUrl}><Github /></a>
          <a href="#"><Linkedin /></a>
          <a href={`mailto:${email}`}><Mail /></a>
          <a href="#home"><ArrowUpRight /></a>
        </div>
      </footer>
    </main>
  );
}
