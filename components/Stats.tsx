"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type StatItem = {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
};

const STATS: StatItem[] = [
  { value: 6, suffix: "+", label: "Projects Built" },
  { value: 30, suffix: "+", label: "Technologies" },
  { value: 2, label: "Internships" },
  { value: 3.6, decimals: 1, label: "GPA" },
];

function AnimatedCounter({
  target,
  suffix = "",
  decimals = 0,
  inView,
}: {
  target: number;
  suffix?: string;
  decimals?: number;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const duration = 1500;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * target);
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  const display = decimals > 0 ? count.toFixed(decimals) : Math.round(count);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="stats" className="section-anchor py-24 px-6">
      <div ref={ref} className="mx-auto max-w-5xl">
        <div className="glow-line mb-16" />
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl gradient-text-static">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  inView={inView}
                />
              </p>
              <p className="mt-2 text-sm text-[var(--color-text-muted)] uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="glow-line mt-16" />
      </div>
    </section>
  );
}
