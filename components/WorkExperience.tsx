"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type WorkExperienceItem = {
  role: string;
  company: string;
  period: string;
  highlights?: string[];
};

type WorkExperienceProps = {
  className?: string;
  items?: WorkExperienceItem[];
};

const DEFAULT_ITEMS: WorkExperienceItem[] = [
  {
    role: "Software Developer Intern",
    company: "Highmark Solutions Inc.",
    period: "December 2025 – Present",
    highlights: [
      "Deliver end-to-end features across frontend and backend logic for a market analysis platform using modern JavaScript/TypeScript tooling.",
      "Translate financial concepts into product features, including relative performance metrics and rotation-based market signals.",
    ],
  },
  {
    role: "Full Stack Engineer Intern",
    company: "FlowGen AI",
    period: "August 2025 – December 2025",
    highlights: [
      "Developed full-stack features using Tailwind, Next.js, and Django to enhance the website platform.",
      "Performed quality assurance testing for features to test functionality of the website.",
      "Debugged and resolved bugs in production, improving application stability and reducing user-reported issues.",
    ],
  },
];

export function WorkExperience({ className, items }: WorkExperienceProps) {
  const entries = items ?? DEFAULT_ITEMS;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
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
            Experience
          </p>
          <h2 className="font-heading mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Where I&apos;ve{" "}
            <span className="gradient-text-static">worked</span>
          </h2>
        </motion.div>

        <div className="mt-12 space-y-6">
          {entries.map((item, i) => (
            <motion.div
              key={`${item.role}-${item.company}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 transition-all duration-300 hover:border-[var(--color-border-hover)] card-glow"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-[var(--color-accent-light)]">
                    {item.company}
                  </p>
                </div>
                <span className="shrink-0 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-1 text-xs text-[var(--color-text-muted)]">
                  {item.period}
                </span>
              </div>

              {item.highlights && item.highlights.length > 0 && (
                <ul className="mt-6 space-y-3">
                  {item.highlights.map((hl) => (
                    <li key={hl} className="flex gap-3 text-[var(--color-text-secondary)]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                      <span className="text-sm leading-relaxed">{hl}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
