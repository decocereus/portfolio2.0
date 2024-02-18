"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { GrDocumentText } from "react-icons/gr";
import { HiOutlineMenu } from "react-icons/hi";
import Modal from "./modal";

type NavLink = { [key: string]: string };

const NavBar = () => {
  const navIconMap: NavLink = {
    "<Experience />": "#experience",
    "<TechStack />": "#skills",
    "<Projects />": "#projects",
  };

  const [openModal, setOpenModal] = useState(false);
  const handleModalClose = () => setOpenModal(false);
  const handleScroll = (id: string) => {
    const elem = document.getElementById(id);
    window.scrollTo({
      top: elem?.getBoundingClientRect().top,
      behavior: "smooth",
    });
  };
  const addMenuItems = () => {
    return (
      <>
        {Object.keys(navIconMap).map((item, idx) => {
          return (
            <div
              className="font-base text-sm text-muted-foreground cursor-pointer hover:border-b-[1px] hover:pb-2 h-[10%] px-1 "
              onClick={() => handleScroll(navIconMap[item])}
              key={idx}
            >
              {item}
            </div>
          );
        })}
      </>
    );
  };

  const resumeButton = () => {
    return (
      <Button variant="ghost" className="text-sm text-muted-foreground">
        <span className="mr-1">{`<Resume `}</span>
        <GrDocumentText className="mr-1" />
        <span>{"   />"}</span>
      </Button>
    );
  };

  return (
    <>
      <div className="w-full h-full hidden md:w-[90%] md:flex md:items-center md:justify-around gap-1">
        <div className="w-[90%] flex justify-between items-center gap-1 ">
          {addMenuItems()}
          {resumeButton()}
        </div>
      </div>
      <div className="md:hidden">
        <HiOutlineMenu onClick={() => setOpenModal(true)} />
        {openModal && (
          <Modal isOpen={openModal} closeModal={handleModalClose}>
            {addMenuItems()}
            {resumeButton()}
          </Modal>
        )}
      </div>
    </>
  );
};

export default NavBar;
