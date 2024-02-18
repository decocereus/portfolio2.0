import React from "react";
import { experience } from "@/lib/constants";
import ExperienceCard from "./experience-card";

const Experience = () => {
  return (
    <section
      id="#experience"
      className="w-full md:w-[95%] flex flex-col justify-between p-2 gap-10"
    >
      <p className="flex items-center text-foreground text-md sm:text-lg my-1">
        {"<Experience/>"}
      </p>
      <div>
        <ol className="group/list">
          {Object.entries(experience).map(([period, exp], idx) => {
            return (
              <ExperienceCard
                key={period}
                company={exp.company}
                website={exp.website}
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
    </section>
  );
};

export default Experience;
