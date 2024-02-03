import About from "@/components/ui/About";
import Skills from "@/components/ui/Skills";

export default function Home() {
  return (
    <main className="h-full w-[95%] flex items-center justify-center flex-col gap-10">
      <About />
      <Skills />
    </main>
  );
}
