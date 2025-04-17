"use client";
import { SKILL_TREE } from "@/lib/constants";
import { useCallback, useEffect, useRef, useState } from "react";

type Skill = {
  name: string;
  level: "expert" | "advanced" | "intermediate" | "basic";
};

type Category = {
  name: string;
  skills: Skill[];
};

type SkillTree = {
  [key: string]: Category;
};

const Skills = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const { width } = containerRef.current.getBoundingClientRect();
      const isSmallScreen = width <= 456;
      setDimensions({
        width: Math.min(
          width - (isSmallScreen ? 10 : 20),
          isSmallScreen ? 400 : 480
        ),
        height: isSmallScreen ? 220 : 240,
      });
    }
  }, []);

  const generatePaths = useCallback(() => {
    const paths = [];
    const nodeRadius = 3;
    const centerX = dimensions.width / 2;
    const categories = Object.keys(SKILL_TREE);
    const verticalSpacing = 45;
    const horizontalSpacing = Math.min(
      dimensions.width <= 456 ? 18 : 20,
      dimensions.width * 0.05
    );
    const startY = dimensions.height - 5;
    const skillSpacing = dimensions.width <= 456 ? 32 : 35;

    paths.push(
      <path
        key="trunk"
        d={`M ${centerX} ${startY} L ${centerX} ${
          startY - verticalSpacing * categories.length
        }`}
        className="stroke-muted-foreground transition-all duration-300"
        strokeWidth={1.5}
      />
    );

    categories.forEach((category, categoryIndex) => {
      const categoryData = (SKILL_TREE as SkillTree)[category];
      const y = startY - verticalSpacing * (categoryIndex + 1);
      const isLeft = categoryIndex % 2 === 0;
      const direction = isLeft ? -1 : 1;
      const categoryBranchX = centerX + direction * horizontalSpacing;

      paths.push(
        <g
          key={`category-${category}`}
          style={{ animationDelay: `${categoryIndex * 200}ms` }}
        >
          <path
            d={`M ${centerX} ${y} L ${categoryBranchX} ${y}`}
            className="stroke-muted-foreground transition-all duration-300 hover:stroke-foreground"
            strokeWidth={1.5}
          />
          <circle
            cx={categoryBranchX}
            cy={y}
            r={nodeRadius}
            className="fill-background bg-background stroke-muted-foreground transition-all duration-300 hover:stroke-foreground"
            strokeWidth={1.5}
          />
          <text
            x={categoryBranchX + direction * 10}
            y={y - 12}
            className={`${
              dimensions.width <= 456 ? "text-xs" : "text-sm"
            } fill-foreground font-bold transition-all duration-300`}
            textAnchor={isLeft ? "end" : "start"}
          >
            {categoryData.name}
          </text>

          {categoryData.skills.map((skill: Skill, skillIndex: number) => {
            const skillY =
              y +
              (skillIndex - (categoryData.skills.length - 1) / 2) *
                skillSpacing;
            const skillX = categoryBranchX + direction * 35;

            return (
              <g
                key={`skill-${category}-${skillIndex}`}
                className="skill-branch opacity-0 animate-[fadeIn_0.5s_ease-in-out_forwards]"
                style={{
                  animationDelay: `${
                    categoryIndex * 200 + (skillIndex + 1) * 100
                  }ms`,
                }}
              >
                <path
                  d={`M ${categoryBranchX} ${y} 
                      L ${categoryBranchX} ${skillY} 
                      L ${skillX} ${skillY}`}
                  className="stroke-muted-foreground transition-all duration-300 hover:stroke-foreground"
                  strokeWidth={1}
                  fill="none"
                />
                <circle
                  cx={skillX}
                  cy={skillY}
                  r={nodeRadius - 1}
                  className={`fill-background stroke-muted-foreground transition-all duration-300 hover:stroke-foreground ${
                    skill.level === "expert" ? "stroke-1.5" : "stroke-1"
                  }`}
                />
                <text
                  x={skillX + direction * 10}
                  y={skillY}
                  className={`${
                    dimensions.width <= 456 ? "text-xs" : "text-sm"
                  } fill-muted-foreground font-medium transition-all duration-300 hover:fill-foreground`}
                  textAnchor={isLeft ? "end" : "start"}
                  dominantBaseline="middle"
                >
                  {skill.name}
                </text>
              </g>
            );
          })}
        </g>
      );
    });

    return paths;
  }, [dimensions]);

  return (
    <section
      id="skills"
      className="w-full select-none px-4 flex items-center justify-center min-h-[272px]"
      ref={containerRef}
    >
      <div className="w-full flex items-center justify-center">
        {dimensions.width > 0 && (
          <svg
            viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
            width="100%"
            height={dimensions.height}
            style={{ minHeight: dimensions.width <= 456 ? "220px" : "240px" }}
            preserveAspectRatio="xMidYMid meet"
          >
            {generatePaths()}
          </svg>
        )}
      </div>
    </section>
  );
};

export default Skills;
