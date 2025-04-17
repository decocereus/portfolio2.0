import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="px-6">
      <About />
      <Experience />
      <Projects />
    </main>
  );
}
