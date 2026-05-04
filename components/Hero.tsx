"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-accent)]/[0.07] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-[var(--color-accent-secondary)]/[0.05] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
              Software Developer &bull; Alameda, CA
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="font-heading text-5xl font-bold leading-[1.1] tracking-tight sm:text-7xl lg:text-8xl"
          >
            Brandon{" "}
            <span className="gradient-text">Fong</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)] sm:text-xl lg:mx-0"
          >
            Building modern, performant web applications with a focus on clean
            architecture and exceptional user experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[var(--color-accent)] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]"
            >
              View Projects
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
            </a>
            <a
              href="#about"
              className="glass-panel glass-panel-interactive inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-[var(--color-text-primary)]"
            >
              Learn More
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="relative shrink-0"
        >
          <div className="relative h-56 w-56 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-secondary)] opacity-30 blur-xl" />
            <img
              src="/portfolio/images/portrait.png"
              alt="Portrait of Brandon Fong"
              className="relative h-full w-full rounded-full object-cover ring-2 ring-white/10"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#stats" aria-label="Scroll down">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="glass-panel flex h-10 w-6 items-start justify-center rounded-full pt-2"
          >
            <div className="h-2 w-0.5 rounded-full bg-[var(--color-accent-light)]" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
