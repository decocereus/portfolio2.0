import React from "react";

interface ExperienceCardProps {
  company: string;
  from: string;
  to: string;
  designation: string;
  location: string;
  tasks: string;
  tech: string[];
}

const ExperienceCard = ({
  company,
  from,
  to,
  designation,
  location,
  tasks,
  tech,
}: ExperienceCardProps) => {
  console.log();
  return (
    <li>
      <div>{`${company} ${from} ${to} ${designation} ${location} ${tasks} ${tech[0]}`}</div>
    </li>
  );
};

export default ExperienceCard;
