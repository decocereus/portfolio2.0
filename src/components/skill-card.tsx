import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SkillCardProps, IconMap } from "@/lib/definitions";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs, TbSql } from "react-icons/tb";
import { FaPython, FaNode } from "react-icons/fa6";

const SkillCard = ({ type, label }: SkillCardProps) => {
  const iconComponents: IconMap = {
    js: <IoLogoJavascript />,
    ts: <BiLogoTypescript />,
    reactjs: <FaReact />,
    nodejs: <FaNode />,
    nextjs: <TbBrandNextjs />,
    mysql: <TbSql />,
    mongodb: <SiMongodb />,
    python: <FaPython />,
  };
  const IconComponent = iconComponents[type];

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div className="flex flex-col gap-2 border border-solid border-skill-card) p-2 sm:p-6 rounded-lg cursor-pointer text-5xl sm:text-6xl md:text-8xl">
              {IconComponent}
            </div>
          </TooltipTrigger>
          <TooltipContent>{label}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default SkillCard;
