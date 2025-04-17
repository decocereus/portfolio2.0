import Link from "next/link";
import Skills from "./skills";
import { SOCIALS } from "@/lib/constants";

const About = () => {
  return (
    <section id="about" className="w-full max-w-3xl mx-auto py-6">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-medium tracking-tight text-foreground">
            Amartya Singh
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Full Stack Engineer proficient in Next.js, Node.js and Web3
          </p>
        </div>
        <div className="space-y-4">
          <Skills />
        </div>
        <div className="space-y-2">
          <p className="text-base text-foreground">
            Reach out to me on any of the following platforms
          </p>
          <div className="flex flex-wrap gap-6">
            {SOCIALS.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {social.name}
              </Link>
            ))}
            <Link
              href="mailto:amartyasinghkings07@gmail.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Email
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
