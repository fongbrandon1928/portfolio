type BibliographyProps = {
  className?: string;
};

export function Bibliography({ className }: BibliographyProps) {
  return (
    <section className={className}>
      <div className="mx-auto flex w-full max-w-3xl items-start gap-6 rounded-2xl bg-neutral-900/80 p-6 shadow-sm ring-1 ring-neutral-800 backdrop-blur">
        <img
          src="\images\portrait.jpg"
          alt="Portrait of Brandon"
          width={128}
          height={128}
          className="h-40 w-40 rounded-full object-cover ring-2 ring-neutral-800 accent-cyan-ring"
        />
        <div className="flex-1">
          <section>
            <h2 className="text-xl font-semibold tracking-tight text-neutral-100">About <span className="accent-cyan">Me</span></h2>
            <p className="mt-2 leading-relaxed text-neutral-300">
            My name is Brandon Fong and this is my portfolio website! 
            This website was made to catalogue all the personal and school projects I have worked on. 
            </p>
          </section>

          <hr className="my-4 border-neutral-800" />

          <section>
            <h2 className="text-xl font-semibold tracking-tight text-neutral-100"><span className="accent-cyan">Education</span></h2>
            <ul className="mt-2 list-disc pl-5 text-neutral-300">
              <li className="mb-2">
                University of California, Davis — Bachelor's Degree, Computer Science (2022-2024)
              </li>
              <li>
                College of Alameda — Computer Science (2019-2022)
                <ul className="mt-1 list-disc pl-5">
                  <li>Associate's Degree in Mathematics</li>
                </ul>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}


