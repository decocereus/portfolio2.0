import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IconMap } from "@/lib/definitions";

const About = () => {
  const socials: IconMap = {
    "https://www.linkedin.com/in/amartyasingh07/": <FaLinkedinIn />,
    twiiter: <FaXTwitter />,
    "https://github.com/decocereus": <FaGithub />,
  };
  const generateSocialLinks = () => {
    return (
      <>
        {Object.keys(socials).map((link) => {
          return (
            <Button key={link} variant="ghost" size="socialLinkIcon">
              <a href={link} target="_blank">
                {socials[link]}
              </a>
            </Button>
          );
        })}
      </>
    );
  };

  return (
    <div className="w-full md:w-[95%] flex flex-col-reverse md:flex-row items-center justify-between min-h-[25em] mt-10 gap-5">
      <div className="w-full md:w-[65%] p-1">
        <div className="w-full py-2 px-3">
          <p className="text-md sm:text-lg md:text-xl py-1 md:pl-2 sm:pl-1 pl-1">
            Hi, my name is
          </p>
          <p className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl">
            Amartya Singh
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:5xl pt-2 md:pt-4">
            I am a Full Stack Engineer proficient in React, Next.js and Node.js
          </p>
        </div>

        <div className="w-full py-2 px-3">
          <p className="text-xl sm:text-3xl md:text-3xl lg:text-4xl">
            Building the web, one URL at a time
          </p>
        </div>

        <div className="w-full flex flex-col gap-3 mt-3">
          <div className="w-[50%] flex gap-5">{generateSocialLinks()}</div>
          <Button variant="ghostEmail" size="socialLinkIcon">
            <a href="mailto:amartyasinghkings07@gmail.com" target="_blank">
              Get in touch @Amartya Singh
            </a>
          </Button>
        </div>
      </div>
      <div className="w-full md:w-[35%] p-1 flex items-center justify-center">
        <Image src="/opt-3.svg" width={500} height={200} alt="image" />
      </div>
    </div>
  );
};

export default About;
