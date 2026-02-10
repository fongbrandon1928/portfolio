import { Bibliography } from "@/components/Bibliography";
import { Languages } from "@/components/Languages";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen container mx-auto px-4 py-16 flex flex-col items-center gap-12">
      <header className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-50">Brandon <span className="accent-cyan">Fong</span></h1>
        <p className="mt-2 text-neutral-400">Software Developer • <span className="accent-cyan">Portfolio</span></p>
      </header>
      <section className="w-full max-w-5xl">
        <Bibliography />
      </section>
      <hr className="w-full max-w-5xl border-neutral-400/80" />
      <section className="w-full max-w-5xl">
        <Languages />
      </section>
      <hr className="w-full max-w-5xl border-neutral-400/80" />
      <section className="w-full max-w-5xl">
        <Projects />
      </section>
      <Footer className="w-full px-4 py-12" />
    </main>
  );
}
