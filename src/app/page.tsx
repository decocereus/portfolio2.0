import About from "@/components/about";
import Experience from "@/components/experience";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="h-full w-[95%] flex items-center justify-center flex-col gap-10">
      <About />
      <Skills />
      <Experience />
    </main>
  );
}
