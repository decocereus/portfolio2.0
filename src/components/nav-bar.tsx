"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { GrDocumentText } from "react-icons/gr";
import { HiOutlineMenu } from "react-icons/hi";
import Modal from "./modal";

type NavLink = { [key: string]: string };

const NavBar = () => {
  const navIconMap: NavLink = {
    "<TechStack />": "#skills",
    "<Experience />": "#experience",
    "<Projects />": "#projects",
    "<Github />": "#github",
  };

  const [openModal, setOpenModal] = useState(false);
  const handleModalClose = () => setOpenModal(false);
  const addMenuItems = () => {
    return (
      <>
        {Object.keys(navIconMap).map((item, idx) => {
          return (
            <div
              key={idx}
              className="font-base text-sm text-muted-foreground cursor-pointer hover:border-b-[1px] hover:pb-2 h-[10%] px-4 "
            >
              <a href={`${navIconMap[item]}`}></a>
              {item}
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="w-full h-full hidden md:w-[90%] md:flex md:items-center md:justify-between gap-5">
        <div className="w-[80%] flex justify-between items-center gap-1 ">
          {addMenuItems()}
        </div>
        <div className="w-[20%] flex items-end justify-end">
          <Button variant="ghost" className="text-sm text-muted-foreground">
            <span className="mr-1">{`<Resume `}</span>
            <GrDocumentText className="mr-1" />
            <span>{"   />"}</span>
          </Button>
        </div>
      </div>
      <div className="md:hidden">
        <HiOutlineMenu onClick={() => setOpenModal(true)} />
        {openModal && (
          <Modal isOpen={openModal} closeModal={handleModalClose}>
            {addMenuItems()}
            <div className="">
              <Button variant="ghost" className="text-base">
                <span className="mr-1">{`<Resume `}</span>
                <GrDocumentText className="mr-1" />
                <span>{"   />"}</span>
              </Button>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};

export default NavBar;
