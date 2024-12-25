import React from "react";
import NavBar from "./nav-bar";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 w-full h-[5em] bg-background shadow-2xl shadow-blue-500/20 flex items-center justify-center z-50">
      <div className="w-[95%] h-full flex items-center justify-between">
        <div className="w-[10%]">
          <Image src="/logo.png" width={80} height={80} alt="logo" />
        </div>

        <NavBar />
      </div>
    </header>
  );
};

export default Header;
