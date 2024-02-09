import React from "react";
import { experience } from "@/lib/constants";
import ExperienceCard from "./experience-card";

const Experience = () => {
  return (
    <div className="w-full md:w-[95%] flex flex-col justify-between p-2 gap-10">
      <p className="flex items-center text-muted-foreground text-md sm:text-lg my-1">
        {"<Experience/>"}
      </p>
      <div className="">
        <ol>
          {Object.entries(experience).map(([period, exp], idx) => {
            return (
              <ExperienceCard
                key={period}
                company={exp.company}
                from={exp.from}
                to={exp.to}
                designation={exp.designation}
                location={exp.location}
                tasks={exp.tasks}
                tech={exp.tech}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Experience;
