"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type BibliographyProps = {
  className?: string;
};

const EDUCATION = [
  {
    school: "University of California, Davis",
    degree: "Bachelor of Science, Computer Science — GPA: 3.6",
    period: "Graduated June 2024",
  },
];

const CERTIFICATIONS = ["Securities Industry Essentials"];

export function Bibliography({ className }: BibliographyProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
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
            About
          </p>
          <h2 className="font-heading mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Get to know <span className="gradient-text-static">me</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="glass-panel glass-panel-interactive rounded-2xl p-8 card-glow">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <img
                  src="/portfolio/images/portrait.jpg"
                  alt="Portrait of Brandon"
                  width={128}
                  height={128}
                  className="h-32 w-32 shrink-0 rounded-2xl object-cover ring-2 ring-[var(--color-accent)]/20"
                />
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                    Brandon Fong
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-accent-light)]">
                    Full Stack Software Developer
                  </p>
                  <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
                    UC Davis Computer Science graduate with a passion for building
                    modern, full-stack web applications. From market analytics
                    platforms to machine learning pipelines, I enjoy turning complex
                    problems into clean, user-friendly solutions using tools like
                    React, Next.js, Django, and Spring Boot.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass-panel glass-panel-interactive h-full rounded-2xl p-8 card-glow">
              <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                Education
              </h3>
              <div className="mt-6 space-y-6">
                {EDUCATION.map((edu) => (
                  <div key={edu.school} className="relative pl-6">
                    <div className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                    <p className="font-medium text-[var(--color-text-primary)]">
                      {edu.school}
                    </p>
                    <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                      {edu.degree}
                    </p>
                    <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                      {edu.period}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-[var(--color-border)] pt-6">
                <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                  Certifications
                </h3>
                <div className="mt-3 space-y-2">
                  {CERTIFICATIONS.map((cert) => (
                    <div key={cert} className="relative pl-6">
                      <div className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-[var(--color-accent-secondary)]" />
                      <p className="text-sm text-[var(--color-text-secondary)]">
                        {cert}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
