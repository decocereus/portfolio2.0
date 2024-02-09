"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { GrDocumentText } from "react-icons/gr";
import { HiOutlineMenu } from "react-icons/hi";
import Modal from "./Modal";

const NavBar = () => {
  const navItems = ["Skills", "Experience", "Projects", "About", "Github"];
  //TODO: Add icons for menu items in burger menu mode
  const [openModal, setOpenModal] = useState(false);
  const handleModalClose = () => setOpenModal(false);
  const addMenuItems = () => {
    return (
      <>
        {navItems.map((item, idx) => {
          return (
            <h3
              key={idx}
              className="font-semibold text-lg cursor-pointer hover:-translate-y-1 h-[10%]"
            >
              {item}
            </h3>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="w-full h-full hidden md:w-[90%] md:flex md:items-center md:justify-between">
        <div className="w-[70%] flex justify-between items-center gap-1">
          {addMenuItems()}
        </div>
        <div className="w-[20%]">
          <Button variant={"default"}>
            <GrDocumentText size={20} color="white" />
            <span className="text-lg ml-2 text-white">Resume</span>
          </Button>
        </div>
      </div>
      <div className="md:hidden">
        <HiOutlineMenu onClick={() => setOpenModal(true)} />
        {openModal && (
          <Modal isOpen={openModal} closeModal={handleModalClose}>
            {addMenuItems()}
          </Modal>
        )}
      </div>
    </>
  );
};

export default NavBar;
