import React from "react";
import { LuArrowUpRight } from "react-icons/lu";
import Image from "next/image";
interface ExperienceCardProps {
  company: string;
  website: string;
  from: string;
  to: string;
  designation: string;
  location: string;
  tasks: string;
  tech: string[];
}

const ExperienceCard = ({
  company,
  website,
  from,
  to,
  designation,
  location,
  tasks,
  tech,
}: ExperienceCardProps) => {
  return (
    <li className="mb-12 w-3/4">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">{`${from} -- ${to}`}</header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-muted-foreground">
            <div>
              <a
                className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-[#89c4f4] focus-visible:text-ring  group/link text-base"
                href={website}
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                <span className="flex items-center justify-center gap-1 sm:text-xs">
                  {`${designation} ·  `}
                  <span className="flex items-center justify-center gap-1">
                    {`${company}`} <LuArrowUpRight />
                  </span>
                </span>
              </a>
            </div>
          </h3>
          <p className="mt-2 text-sm leading-normal">{tasks}</p>
          <ul className="mt-2 flex flex-wrap">
            {tech.map((t, idx) => (
              <li key={idx} className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-input px-3 py-1 text-xs font-medium leading-5 text-[#89c4f4]">
                  {t}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default ExperienceCard;
