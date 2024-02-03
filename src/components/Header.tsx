import React from "react";
import NavBar from "./ui/NavBar";

const Header = () => {
  return (
    <div className="sticky top-0 w-full h-[5em] bg-background shadow-2xl shadow-blue-500/20 flex items-center justify-center">
      <div className="w-[95%] h-full flex items-center justify-between">
        <div className="w-[10%]">Icon</div>
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
