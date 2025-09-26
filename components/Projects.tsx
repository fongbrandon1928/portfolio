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
        "An interactive D3.js dashboard for exploring global forest coverage. It features a zoomable choropleth map with tooltips and ESC reset, a historical timeline that synchronizes updates across charts, and a customizable radar chart with selectable metrics—designed for educators and analysts to uncover spatial and temporal trends in deforestation and conservation.",
      tags: ["React", "D3", "Chart.js"],
    },
    {
      id: "p3",
      title: "API Service",
      summary: "Node backend",
      description:
        "The Spring Boot Social Media API is a RESTful backend service developed using Java and the Spring Framework to manage users and messages in a social media context. It supports full user authentication, including login and registration, along with complete CRUD operations for messages. Data persistence is handled efficiently through Spring Data and JDBC, ensuring smooth and reliable storage and retrieval. The project also integrates functionality from Javalin to enhance its flexibility and performance.",
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
  ];

  return (
    <section className={className}>
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="text-xl font-semibold tracking-tight text-neutral-900"><span className="accent-cyan">Projects</span></h2>
        <ul className="mt-4 flex gap-4 overflow-x-auto p-4 scrollbar-hide">
          {items.map((p) => (
            <li key={p.id} className="group relative flex-shrink-0 w-80">
              <a
                href={p.link ?? "#"}
                className="block overflow-hidden rounded-2xl bg-white/40 ring-1 ring-neutral-600 shadow-sm backdrop-blur transition-all duration-300 ease-out group-hover:scale-[1.02] group-hover:ring-cyan-500 group-hover:shadow-cyan-500/20"
              >
                <div className="p-4">
                  <h3 className="text-lg font-medium text-neutral-900 group-hover:accent-cyan transition-colors">{p.title}</h3>
                  <p className="mt-1 text-sm text-white">{p.summary}</p>
                </div>

                <div className="grid transition-all duration-1200 ease-in-out group-hover:max-h-[1000px] group-hover:opacity-100 group-hover:translate-y-0 max-h-0 opacity-0 translate-y-[-4px]">
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
    </section>
  );
}


