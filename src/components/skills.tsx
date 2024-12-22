import React from "react";
import SkillCard from "./skill-card";
import { Skills as SkillsType } from "@/lib/definitions";

const Skills = () => {
  const skills: SkillsType = {
    NextJs: "nextjs",
    Web3: "web3",
    Solidity: "solidity",
    ReactJs: "reactjs",
    NodeJs: "nodejs",
    Typescript: "ts",
    TailwindCSS: "tailwindcss",
    Python: "python",
  };
  return (
    <section
      id="#skills"
      className="w-full md:w-[95%] flex flex-col justify-between px-2 py-4 gap-10 mb-4"
    >
      <p className="flex items-center text-secondary-foreground text-md sm:text-lg my-1">
        {"<TechStack />"}
      </p>
      <div className="grid grid-cols-4 grid-rows-2 gap-10">
        {Object.keys(skills).map((skill) => (
          <SkillCard key={skills[skill]} type={skills[skill]} label={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
