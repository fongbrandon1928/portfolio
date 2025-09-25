type FooterProps = {
  className?: string;
  links?: {
    label: string;
    href: string;
  }[];
};

export function Footer({ className, links }: FooterProps) {
  const items =
    links ?? [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/fongbrandon/" },
      { label: "GitHub", href: "https://github.com/fongbrandon1928/" },
      { label: "Email", href: "mailto:fongbrandon1928@gmail.com" },
    ];

  return (
    <footer className={className}>
      <div className="mx-auto w-full max-w-5xl border-t border-neutral-800/80 pt-8">
        <nav className="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-300">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
               className="rounded-md px-3 py-1 transition-colors hover:bg-neutral-800 hover:text-neutral-100 hover:accent-cyan"
              aria-label={item.label}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <p className="mt-6 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Brandon Fong. All rights reserved.
        </p>
      </div>
    </footer>
  );
}


