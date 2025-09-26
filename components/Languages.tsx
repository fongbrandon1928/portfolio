type LanguagesProps = {
  className?: string;
  items?: string[];
};

export function Languages({ className, items }: LanguagesProps) {
  const list = items ?? [
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "React",
    "Next.js",
    "Node.js",
    "Java",
    "SQL",
    "Spring Boot",
    "C++",
    "Python"
  ];

  return (
    <section className={className}>
      <div className="mx-auto w-full max-w-3xl rounded-2xl bg-white/40 p-6 shadow-sm ring-1 ring-neutral-600 backdrop-blur">
        <h2 className="text-xl font-semibold tracking-tight text-neutral-900"><span className="accent-cyan">Languages</span> & Tools</h2>
        <ul className="mt-3 flex flex-wrap items-center justify-start gap-2">
          {list.map((label) => (
            <li
              key={label}
              className="rounded-full border border-neutral-200 bg-neutral-200 px-3 py-1 text-sm text-neutral-800 shadow-sm hover:accent-cyan-border hover:accent-cyan transition-colors"
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


