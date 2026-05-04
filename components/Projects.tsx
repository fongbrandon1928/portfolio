"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Project = {
  id: string;
  title: string;
  summary: string;
  description: string;
  tags?: string[];
  link?: string;
};

type ProjectsProps = {
  className?: string;
  projects?: Project[];
};

const DEFAULT_PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Market Sector Rotation Detector",
    summary: "Full-Stack Analytics Platform",
    description:
      "Built a full-stack analytics platform with Next.js, TypeScript, Tailwind, and Recharts for market and sector performance insights. Implemented financial logic for cumulative returns, relative strength, and sector-rotation signals.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
  },
  {
    id: "p2",
    title: "Machine Learning Prediction",
    summary: "ML Pipeline & EDA",
    description:
      "Built and deployed a heart-disease prediction pipeline with preprocessing and EDA using Pandas/NumPy. Trained and evaluated Logistic Regression, Random Forest, and SVM models with Scikit-learn.",
    tags: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
  },
  {
    id: "p3",
    title: "Full-Stack Flashcard Website",
    summary: "Django + Next.js Platform",
    description:
      "Developed a responsive full-stack platform using Django backend and Next.js/Tailwind CSS frontend. Implemented secure auth (username/password + Google OAuth 2.0) and built DRF CRUD APIs for decks/cards and study progress tracking.",
    tags: ["Django", "Next.js", "Tailwind", "OAuth 2.0"],
  },
  {
    id: "p4",
    title: "Spring Boot Social Media API",
    summary: "RESTful Backend",
    description:
      "Built a RESTful API in Java Spring Boot for user and message management with full CRUD operations. Implemented Spring Security + JWT authentication and used Spring Data JPA/JDBC in a modular Controller-Service-Repository architecture.",
    tags: ["Spring Boot", "Java", "JWT", "Spring Data"],
  },
  {
    id: "p5",
    title: "Discord Bot",
    summary: "Real-Time Bot Service",
    description:
      "Developed a Discord.js bot in JavaScript to handle server commands and real-time user message interactions. Deployed on Oracle Cloud for reliable 24/7 uptime and continuous availability.",
    tags: ["JavaScript", "Discord.js", "Oracle Cloud"],
  },
  {
    id: "p6",
    title: "Global Visualization",
    summary: "Interactive Dashboard",
    description:
      "An interactive dashboard that visualizes global forest coverage with linked charts and a zoomable map.",
    tags: ["React", "D3", "Chart.js"],
  },
  {
    id: "p7",
    title: "Weather API",
    summary: "Weather Service",
    description:
      "Utilized OpenWeatherMap's API to create a service that pulls weather information for many locations.",
    tags: ["Python", "API"],
  },
  {
    id: "p8",
    title: "Portfolio Website",
    summary: "Next.js + Tailwind",
    description:
      "A dark-themed portfolio showcasing projects, experience, and skills with responsive UI, scroll animations, and gradient effects. (This website)",
    tags: ["Next.js", "Tailwind", "TypeScript", "Framer Motion"],
  },
];

export function Projects({ className, projects }: ProjectsProps) {
  const items = projects ?? DEFAULT_PROJECTS;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      className={`section-anchor py-24 px-6 ${className ?? ""}`}
    >
      <div ref={ref} className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-accent-light)]">
            Projects
          </p>
          <h2 className="font-heading mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Things I&apos;ve{" "}
            <span className="gradient-text-static">built</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <motion.a
              key={p.id}
              href={p.link ?? "#"}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="glass-panel glass-panel-interactive group relative flex flex-col rounded-2xl p-6 card-glow"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-accent)]/10">
                <svg
                  className="h-5 w-5 text-[var(--color-accent-light)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                  />
                </svg>
              </div>

              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] transition-colors duration-200 group-hover:text-[var(--color-accent-light)]">
                {p.title}
              </h3>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                {p.summary}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {p.description}
              </p>

              {p.tags && p.tags.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-2.5 py-1 text-xs text-[var(--color-text-muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-5 flex items-center gap-1 text-xs text-[var(--color-accent-light)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span>View project</span>
                <svg
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
