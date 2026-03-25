"use client";
import { useState } from "react";
import styles from "./page.module.css";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github: string;
  category: "security" | "fullstack" | "tools" | "research";
  status: "complete" | "in-progress" | "research";
  featured?: boolean;
  date?: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "VulnVault",
    description:
      "Full-stack four-tier web application for tracking software vulnerabilities, affected products, vendors, and security reports. Designed a layered Python backend — Data Access Layer (psycopg2), Business Logic Layer, and a RESTful Service Layer (FastAPI) — with 20 endpoints supporting full CRUD operations across four relational entities. Engineered a normalized PostgreSQL schema with referential integrity constraints, check constraints on severity/status enums, and indexed foreign keys; seeded with 150+ rows of realistic test data. Responsive Next.js/TypeScript frontend with a custom dark-mode design system featuring live search, multi-filter support, modal forms, and a real-time dashboard with severity and status breakdowns. Deployed on Railway (backend) and Vercel (frontend).",
    tags: ["Python", "FastAPI", "PostgreSQL", "Next.js", "TypeScript", "REST API", "Railway", "Vercel"],
    github: "https://github.com/TylerZolk/CSCE548Project",
    category: "fullstack",
    status: "in-progress",
    featured: true,
    date: "January 2026 – Present",
  },
  {
    id: 2,
    title: "PolPadAI",
    description:
      "Secure full-stack application with cookie-based session authentication using HMAC-SHA256 signature verification and server-side route protection via Next.js layout guards. Implements a two-tier RBAC system with admin and user roles, gating all mutations behind server-validated session checks that return 403 before any business logic executes. Includes a user management dashboard for account creation/removal and a multi-category photo submission workflow for structured field data collection.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "RBAC", "HMAC-SHA256", "Vercel"],
    github: "https://github.com/TylerZolk/GridstormFrontEnd/tree/main",
    category: "fullstack",
    status: "in-progress",
    featured: true,
    date: "January 2026 – Present",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description:
      "This site — built with Next.js 14, TypeScript, and CSS Modules. Features an animated particle network canvas, typing effect, filterable project cards, and a fully responsive dark-mode design system.",
    tags: ["Next.js", "TypeScript", "React", "CSS Modules"],
    github: "https://github.com/tylerzolk",
    category: "fullstack",
    status: "complete",
    date: "2026",
  },
];

const CATEGORIES = ["all", "fullstack"] as const;
const CATEGORY_LABELS: Record<string, string> = {
  all: "All Projects",
  fullstack: "Full Stack",
};

const STATUS_LABELS: Record<string, string> = {
  complete: "Complete",
  "in-progress": "In Progress",
  research: "Research",
};

export default function Portfolio() {
  const [active, setActive] = useState<string>("all");

  const filtered =
    active === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <main className={`${styles.page} grid-bg`}>
      <div className={`${styles.header} container`}>
        <div className={styles.eyebrow}>
          <span className={styles.mono}>~/projects</span>
        </div>
        <h1 className={styles.title}>
          My <span className={styles.accent}>Projects</span>
        </h1>
        <p className={styles.desc}>
          A collection of security tools, full-stack applications, and research projects
          built throughout my academic and personal journey in computer science.
        </p>

        <div className={styles.filters}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`${styles.filter} ${active === cat ? styles.filterActive : ""}`}
              onClick={() => setActive(cat)}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>
      </div>

      <div className={`${styles.grid} container`}>
        {filtered.map((project, i) => (
          <article
            key={project.id}
            className={`${styles.card} ${project.featured ? styles.featured : ""}`}
            style={{ animationDelay: `${i * 0.07}s` }}
          >
            <div className={styles.cardTop}>
              <div className={styles.cardHeader}>
                <span className={`${styles.status} ${styles[project.status]}`}>
                  <span className={styles.statusDot} />
                  {STATUS_LABELS[project.status]}
                </span>
                {project.featured && (
                  <span className={styles.featuredBadge}>Featured</span>
                )}
                {project.date && (
                  <span className={styles.dateLabel}>{project.date}</span>
                )}
              </div>
              <h2 className={styles.cardTitle}>{project.title}</h2>
              <p className={styles.cardDesc}>{project.description}</p>
            </div>

            <div className={styles.cardBottom}>
              <div className={styles.tags}>
                {project.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubLink}
              >
                <GitHubIcon />
                View on GitHub
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={styles.extIcon}>
                  <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className={`${styles.cta} container`}>
        <p className={styles.ctaText}>Want to see more? Check out my GitHub for all repositories.</p>
        <a
          href="https://github.com/tylerzolk"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaBtn}
        >
          <GitHubIcon />
          github.com/tylerzolk
        </a>
      </div>
    </main>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
