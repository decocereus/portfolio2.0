import { SKILLS } from "@/lib/constants";

const Skills = () => {
  return (
    <section id="skills" className="w-full max-w-3xl mx-auto select-none">
      <h2 className="text-base font-medium mb-3 text-foreground">
        Proficient In
      </h2>
      <div className="flex flex-wrap gap-x-6 gap-y-3">
        {SKILLS.map((skill) => (
          <div
            key={skill}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
