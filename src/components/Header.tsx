import React from "react";
import NavBar from "./ui/NavBar";
import { Button } from "@/components/ui/button";
import { FileCode } from "lucide-react";

const Header = () => {
  return (
    <div className="relative top-0 w-[65%] h-[5em] p-3">
      <div className="w-full h-full flex items-center justify-between">
        <div>Icon</div>
        <NavBar />
        <div>
          <Button variant={"default"}>
            <FileCode size={20} color="white" />
            <span className="text-lg ml-2 text-white">Resume</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
