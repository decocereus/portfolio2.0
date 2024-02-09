import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="h-full w-[95%] flex items-center justify-center flex-col gap-10">
      <About />
      <Skills />
      <Experience />
    </main>
  );
}
