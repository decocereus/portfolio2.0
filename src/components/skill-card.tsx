import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SkillCardProps, IconMap } from "@/lib/definitions";
import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";
import { SiMongodb, SiSolidity, SiWeb3Dotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs, TbSql } from "react-icons/tb";
import { FaPython, FaNode } from "react-icons/fa6";
import { cn } from "@/lib/utils";

const SkillCard = ({ type, label, className }: SkillCardProps) => {
  const iconComponents: IconMap = {
    tailwindcss: <BiLogoTailwindCss />,
    ts: <BiLogoTypescript />,
    reactjs: <FaReact />,
    nodejs: <FaNode />,
    nextjs: <TbBrandNextjs />,
    mysql: <TbSql />,
    mongodb: <SiMongodb />,
    python: <FaPython />,
    solidity: <SiSolidity />,
    web3: <SiWeb3Dotjs />,
  };
  const IconComponent = iconComponents[type];

  return (
    <div
      className={cn(
        "w-full flex flex-col items-center justify-center ",
        className
      )}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div className="flex flex-col gap-2 border border-solid  p-2 sm:p-6 rounded-lg cursor-pointer text-5xl sm:text-6xl md:text-8xl bg-gradient-to-r from-input from-1% to-background to-200%">
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
