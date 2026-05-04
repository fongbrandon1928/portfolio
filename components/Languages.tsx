"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type SkillCategory = {
  title: string;
  items: string[];
};

const CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    items: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Web Technologies",
    items: ["HTML", "CSS", "REST APIs", "GraphQL"],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      "React", "Angular", "Express.js", "Spring Boot", "Spring Framework",
      "Javalin", "Django", "Tailwind CSS", "PyTorch", "Scikit-learn",
      "Pandas", "NumPy", "Matplotlib",
    ],
  },
  {
    title: "Developer Tools & Platforms",
    items: ["Git", "Linux", "Oracle Cloud", "JDBC"],
  },
  {
    title: "Technical Skills",
    items: ["Excel", "Adobe Photoshop", "Adobe After Effects", "Adobe Illustrator"],
  },
];

export function Languages({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
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
            Skills
          </p>
          <h2 className="font-heading mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Technologies I{" "}
            <span className="gradient-text-static">work with</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="glass-panel glass-panel-interactive rounded-2xl p-8 card-glow"
            >
              <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                {cat.title}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-3 py-1.5 text-sm text-[var(--color-text-secondary)] transition-all duration-200 hover:border-[var(--color-accent)]/30 hover:text-[var(--color-accent-light)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
