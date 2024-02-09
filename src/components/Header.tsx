import React from "react";
import NavBar from "./nav-bar";

const Header = () => {
  return (
    <div className="sticky top-0 w-full h-[5em] bg-background shadow-2xl shadow-blue-500/20 flex items-center justify-center z-50">
      <div className="w-[95%] h-full flex items-center justify-between">
        <div className="w-[10%]">
          <span className="border rounded-full p-4">AS</span>
        </div>
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
