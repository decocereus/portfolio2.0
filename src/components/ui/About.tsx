import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between min-h-[25em] mt-10">
      <div className="w-full md:w-[55%] p-1">
        <div className="w-full p-1">
          <p className="text-md md:text-2xl py-1 pl-1">Hi, my name is</p>
          <p className="text-2xl sm:text-4xl md:text-6xl lg:8xl">
            Amartya Singh
          </p>
          <p className="text-xl sm:text-4xl md:text-4xl lg:5xl pt-2">
            I am a Full Stack Developer
          </p>
        </div>
        <div className="w-full p-1 text-sm md:text-2xl lg:4xl sm:text-lg">
          <p>
            I am 23 years old. I am proficient in React, Next Js and Node Js
          </p>
          <p>Building the web, one URL at a time</p>
        </div>
      </div>
      <div className="w-full md:w-[45%] p-1 flex items-center justify-center">
        <Image src="/opt-3.svg" width={`${500}`} height={200} alt="image" />
      </div>
    </div>
  );
};

export default About;
