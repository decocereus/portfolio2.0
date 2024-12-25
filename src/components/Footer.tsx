import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "./ui/button";
import Link from "next/link";
import { IconMap } from "@/lib/definitions";

const Footer = () => {
  const socials: IconMap = {
    "https://www.linkedin.com/in/amartyasingh07/": (
      <FaLinkedinIn color="#000" />
    ),
    "https://twitter.com/decocereus": <FaXTwitter color="#000" />,
    "https://github.com/decocereus": <FaGithub color="#000" />,
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
    <footer className="w-full p-3 border border-t-[1px] border-solid">
      <div className="w-full flex items-center justify-center gap-2">
        {generateSocialLinks()}
      </div>
    </footer>
  );
};

export default Footer;
