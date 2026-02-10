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

export function WorkExperience({ className, items }: WorkExperienceProps) {
  const entries =
    items ?? [
      {
        role: "Full Stack Engineer Intern",
        company: "FlowGen AI",
        period: "August 2025 – December 2025",
        highlights: [
          "Developed full-stack features using Tailwind, Next.js, and Django to enhance the website platform.",
          "Performed QA testing to validate feature functionality across the site.",
          "Debugged and resolved production issues, improving stability and reducing user-reported bugs.",
        ],
      },
    ];

  const containerClassName = className ?? "w-full";

  return (
    <section className="w-full">
      <div className={`w-full rounded-2xl bg-white/40 p-6 shadow-sm ring-1 ring-neutral-600 backdrop-blur ${containerClassName}`}>
        <h2 className="text-xl font-semibold tracking-tight text-neutral-900">
          <span className="accent-cyan">Work</span> Experience
        </h2>
        <div className="mt-4 space-y-4 text-black">
          {entries.map((item) => (
            <div key={`${item.role}-${item.company}-${item.period}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-medium text-neutral-900">
                  {item.role} · {item.company}
                </p>
                <p className="text-sm text-neutral-700">{item.period}</p>
              </div>
              {item.highlights && item.highlights.length > 0 && (
                <ul className="mt-2 list-disc pl-5 text-sm leading-relaxed">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
