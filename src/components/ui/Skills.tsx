import React from "react";
import SkillCard from "./SkillCard";
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
    <div className="w-full flex flex-col justify-between p-2 gap-4">
      <p className="flex text-muted-foreground text-md my-1">
        <BsCodeSlash className="mr-1" size={22} /> Skills
      </p>
      <div className="flex flex-row flex-wrap justify-between items-center gap-10">
        {Object.keys(skills).map((skill) => (
          <SkillCard key={skills[skill]} type={skills[skill]} label={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
