import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "./ui/button";
import Link from "next/link";
import { IconMap } from "@/lib/definitions";

const Footer = () => {
  const socials: IconMap = {
    "https://www.linkedin.com/in/amartyasingh07/": <FaLinkedinIn />,
    "https://twitter.com/decocereus": <FaXTwitter />,
    "https://github.com/decocereus": <FaGithub />,
  };
  const generateSocialLinks = () => {
    return (
      <>
        {Object.keys(socials).map((link) => {
          return (
            <Link href={link} target="_blank" key={link}>
              <Button variant="ghost" size="socialLinkIcon">
                {socials[link]}
              </Button>
            </Link>
          );
        })}
      </>
    );
  };
  return (
    <div className="sticky bottom-0 w-full p-3 border border-t-[1px] border-solid">
      <div className="w-full flex items-center justify-center gap-2">
        {generateSocialLinks()}
      </div>
    </div>
  );
};

export default Footer;
