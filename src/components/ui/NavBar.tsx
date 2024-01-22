import React from "react";

const NavBar = () => {
  const navItems = ["Skills", "Experience", "Projects", "About", "Github"];
  return (
    <div className="w-[50%] h-full flex items-center justify-between">
      {navItems.map((item, idx) => {
        return (
          <h3
            key={idx}
            className="font-semibold text-lg cursor-pointer hover:-translate-y-1"
          >
            {item}
          </h3>
        );
      })}
    </div>
  );
};

export default NavBar;
