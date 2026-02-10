type BibliographyProps = {
  className?: string;
};

export function Bibliography({ className }: BibliographyProps) {
  const containerClassName = className ?? "w-full";
  return (
    <section className="w-full">
      <div className={`flex w-full items-start gap-6 rounded-2xl bg-white/40 p-6 shadow-sm ring-1 ring-neutral-600 backdrop-blur ${containerClassName}`}>
        <img
          src="/portfolio/images/portrait.jpg"
          alt="Portrait of Brandon"
          width={128}
          height={128}
          className="h-40 w-40 rounded-full object-cover ring-2 ring-neutral-200 accent-cyan-ring"
        />
        <div className="flex-1">
          <section>
            <h2 className="text-xl font-semibold tracking-tight text-neutral-900">About <span className="accent-cyan">Me</span></h2>
            <p className="mt-2 leading-relaxed text-black">
              My name is Brandon Fong and this is my portfolio website!
              This website was made to catalogue all the personal and school projects I have worked on.
            </p>
          </section>

          <hr className="my-4 border-neutral-400" />

          <section>
            <h2 className="text-xl font-semibold tracking-tight text-neutral-900"><span className="accent-cyan">Education</span></h2>
            <ul className="mt-2 list-disc pl-5 text-black">
              <li className="mb-2">
                University of California, Davis — Bachelor&apos;s Degree, Computer Science (2022-2024)
              </li>
              <li>
                College of Alameda — Computer Science (2019-2022)
                <ul className="mt-1 list-disc pl-5">
                  <li>Associate&apos;s Degree in Mathematics</li>
                </ul>
              </li>
            </ul>

          </section>
        </div>
      </div>
    </section>
  );
}


