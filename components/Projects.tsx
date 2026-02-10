"use client";

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

import { useEffect, useRef, useState } from 'react';

export function Projects({ className, projects }: ProjectsProps) {
  const items: Project[] = projects ?? [
    {
      id: "p1",
      title: "Portfolio Website",
      summary: "Next.js + Tailwind",
      description:
        "A dark-themed portfolio showcasing projects, education, and skills with responsive UI and animations. (This website)",
      tags: ["Next.js", "Tailwind", "TypeScript"],
    },
    {
      id: "p2",
      title: "Global Visualization",
      summary: "React charts",
      description:
        "An interactive dashboard that visualizes global forest coverage with linked charts and a zoomable map.",
      tags: ["React", "D3", "Chart.js"],
    },
    {
      id: "p3",
      title: "Social Media API",
      summary: "Node backend",
      description:
        "A RESTful Spring Boot API for a social media app with user auth and full CRUD for messages, backed by Spring Data and JDBC.",
      tags: ["Node.js", "Spring Boot", "Javalin"],
    },
    {
      id: "p4",
      title: "Weather API",
      summary: "Weather Information",
      description:
        "Utilized OpenWeatherMap's API to create a service that pulls weather information for many locations.",
      tags: ["Python", "API"],
    },
    {
      id: "p5",
      title: "Flashcards App",
      summary: "Flashcard Frontend + Backend",
      description:
        "Created a flashcards app that allows users to create, edit, and delete flashcards sets. It also allows users to study the flashcards. Users can create accounts that will store their flashcards sets.",
      tags: ["Python",  "Next.js", "Tailwind", "Django"],
    },
    {
      id: "p6",
      title: "Discord Bot",
      summary: "Discord.js bot",
      description:
        "Created a Discord bot to occupy servers and run commands using the Discord.js library. Built in JavaScript, it responds to user messages and commands and is hosted on Oracle Cloud for 24/7 uptime.",
      tags: ["JavaScript", "Discord.js", "Oracle Cloud"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const minVisible = 1;
  const listRef = useRef<HTMLUListElement | null>(null);
  const [itemUnit, setItemUnit] = useState<number>(336); // fallback: 320 card + 16 gap
  const [visibleCount, setVisibleCount] = useState<number>(3);

  useEffect(() => {
    const computeMeasurements = () => {
      if (!listRef.current) return;
      const listEl = listRef.current as HTMLUListElement;
      const firstItem = listEl.querySelector('li') as HTMLElement | null;
      if (!firstItem) return;
      const computed = getComputedStyle(listEl);
      const gapPx = parseFloat(computed.gap || computed.columnGap || '0') || 0;
      const widthPx = firstItem.offsetWidth;
      const unit = widthPx + gapPx;
      if (unit > 0 && Math.abs(unit - itemUnit) > 0.5) {
        setItemUnit(unit);
      }
      const listWidth = listEl.clientWidth;
      const computedVisible = Math.max(minVisible, Math.floor(listWidth / unit) || minVisible);
      if (computedVisible !== visibleCount) {
        setVisibleCount(computedVisible);
      }
    };

    computeMeasurements();

    const ro = new ResizeObserver(() => computeMeasurements());
    if (listRef.current) ro.observe(listRef.current);
    window.addEventListener('resize', computeMeasurements);

    return () => {
      try { ro.disconnect(); } catch {}
      window.removeEventListener('resize', computeMeasurements);
    };
  }, [itemUnit]);
  const maxIndex = Math.max(0, items.length - visibleCount);

  const goToPrevious = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex(Math.min(maxIndex, currentIndex + 1));
  };

  return (
    <section className={className}>
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="text-center text-xl font-semibold tracking-tight text-neutral-900"><span className="accent-cyan">Projects</span></h2>
        <div className="mt-4 overflow-x-hidden overflow-y-visible">
          <ul 
            ref={listRef}
            className="flex w-full gap-2 transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * itemUnit}px)`
            }}
          >
            {items.map((p) => (
            <li key={p.id} className="group relative flex-shrink-0 w-60">
              <a
                href={p.link ?? "#"}
                className="block overflow-visible rounded-2xl bg-white/40 ring-1 ring-inset ring-neutral-600 shadow-sm backdrop-blur transition-all duration-300 ease-out group-hover:ring-cyan-500 group-hover:shadow-cyan-500/20"
              >
                <div className="p-4">
                  <h3 className="text-lg font-medium text-neutral-900 group-hover:accent-cyan transition-colors">{p.title}</h3>
                  <p className="mt-1 text-sm text-white">{p.summary}</p>
                </div>

                <div className="grid overflow-hidden transition-[max-height,opacity] duration-700 ease-in-out group-hover:max-h-[1000px] group-hover:opacity-100 max-h-0 opacity-0">
                  <div className="p-4 pt-0 text-sm text-black">
                    <p>{p.description}</p>
                    {p.tags && p.tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-neutral-200 bg-neutral-200 px-2.5 py-0.5 text-xs text-neutral-800 hover:accent-cyan-border hover:accent-cyan transition-colors"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </a>
            </li>
          ))}
          </ul>
        </div>
        <div className="mt-3 flex items-center justify-center gap-2">
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className="p-2 rounded-lg bg-white/40 ring-1 ring-neutral-600 hover:ring-cyan-500 hover:bg-white/60 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            aria-label="Previous projects"
          >
            <svg className="w-4 h-4 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            disabled={currentIndex >= maxIndex}
            className="p-2 rounded-lg bg-white/40 ring-1 ring-neutral-600 hover:ring-cyan-500 hover:bg-white/60 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            aria-label="Next projects"
          >
            <svg className="w-4 h-4 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}


