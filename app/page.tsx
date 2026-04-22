import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Bibliography } from "@/components/Bibliography";
import { WorkExperience } from "@/components/WorkExperience";
import { Languages } from "@/components/Languages";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Bibliography />
        <WorkExperience />
        <Languages />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
