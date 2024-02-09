import React from "react";
import SkillCard from "./skill-card";
import { Skills as SkillsType } from "@/lib/definitions";
import { BsCodeSlash } from "react-icons/bs";

const Skills = () => {
  const skills: SkillsType = {
    Javascript: "js",
    Typescript: "ts",
    ReactJs: "reactjs",
    NodeJs: "nodejs",
    NextJs: "nextjs",
    MySQL: "mysql",
    MonogoDB: "mongodb",
    Python: "python",
  };
  return (
    <div className="w-full md:w-[95%] flex flex-col justify-between p-2 gap-10">
      <p className="flex items-center text-muted-foreground text-md sm:text-lg my-1">
        {"<TechStack/>"}
      </p>
      <div className="grid grid-cols-4 grid-rows-2 gap-10">
        {Object.keys(skills).map((skill) => (
          <SkillCard key={skills[skill]} type={skills[skill]} label={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
