"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type FeaturedProjectProps = {
  className?: string;
};

export function FeaturedProject({ className }: FeaturedProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="featured"
      className={`section-anchor py-24 px-6 ${className ?? ""}`}
    >
      <div ref={ref} className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-accent-light)]">
            Featured Project
          </p>
          <h2 className="font-heading mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Market{" "}
            <span className="gradient-text-static">Dynamics</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          {/* Tall description card; pr clears overlap (56% image − 26% “past” card = ~30% gutter) */}
          <div className="glass-panel relative z-0 flex min-h-[280px] flex-col justify-between rounded-2xl p-8 sm:p-10 card-glow lg:max-w-[74%] lg:min-h-[420px] lg:py-12 lg:pr-[max(3rem,calc(min(56%,32rem)-26%))]">
            <div>
              <p className="leading-relaxed text-[var(--color-text-secondary)]">
                A full-stack analytics platform built with Next.js, TypeScript,
                Tailwind, and Recharts for market and sector performance
                insights. Features financial logic for cumulative returns,
                relative strength, and sector-rotation signals, with continuous
                testing and production issue resolution.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "Tailwind", "Recharts"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-3 py-1.5 text-sm text-[var(--color-text-secondary)] transition-all duration-200 hover:border-[var(--color-accent)]/30 hover:text-[var(--color-accent-light)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 lg:mt-10">
              <a
                href="#"
                className="group inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors duration-200 hover:text-[var(--color-accent-light)]"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  View Live
                </span>
              </a>
            </div>
          </div>

          {/* Landscape image: same vertical extent as description row, centered inside it */}
          <div className="pointer-events-none relative z-10 mt-6 lg:pointer-events-auto lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:flex lg:w-[56%] lg:max-w-[32rem] lg:items-center lg:justify-end">
            <div className="glass-panel pointer-events-auto aspect-[16/10] w-full overflow-hidden rounded-2xl">
              <img
                src="/portfolio/images/marketdynamics_showcase.png"
                alt="Market Dynamics — sector rotation analytics platform"
                className="h-full w-full object-cover object-left-top"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
