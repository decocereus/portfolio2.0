import About from "@/components/about";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import ScrollGrid from "@/components/scroll-grid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}
