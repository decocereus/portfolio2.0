import React from "react";
import ProjectCard from "./project-card";
import { projects } from "@/lib/constants";

const Projects = () => {
  return (
    <section className="w-full md:w-[95%] flex flex-col justify-between items-center p-2 gap-10 mb-5">
      <p className="w-full text-foreground text-md sm:text-lg my-1">
        {"<Projects />"}
      </p>
      <div id="#projects">
        <ol className="group/list w-full flex flex-col items-center justify-center">
          {Object.entries(projects).map(([id, project], idx) => {
            return (
              <ProjectCard
                key={id}
                name={project.name}
                link={project.link}
                image={project.image}
                description={project.description}
                tech={project.tech}
              />
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Projects;
