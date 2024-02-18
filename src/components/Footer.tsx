import React from "react";

const Footer = () => {
  return (
    <div className="sticky bottom-0 w-full p-3 border border-t-[1px] border-solid">
      <div className="w-full flex flex-col items-center justify-center gap-2">
        <p>Built with Next.js and TailwindCSS</p>
        <p className="text-xs md:text-base">
          Special thanks to{" "}
          <a
            href="https://www.linkedin.com/in/bchiang7/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-[#81cfe0]"
          >
            @Brittany Chiang{" "}
          </a>
          for inspiring me.
        </p>
      </div>
    </div>
  );
};

export default Footer;
