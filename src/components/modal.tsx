import { ModalProps } from "@/lib/definitions";
import React from "react";

const Modal = ({ children, isOpen, closeModal }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <div
          className={`w-screen h-screen fixed inset-0 z-50 flex items-center justify-end overflow-x-hidden overflow-y-auto bg-[rgba(0,0,0,0.5)]`}
          onClick={closeModal}
        >
          <div
            className={`relative bg-background p-6 w-[50%] h-full flex items-center justify-center flex-col`}
          >
            <div
              className="w-full h-full absolute top-0 right-0 p-4 cursor-pointer flex items-center justify-center flex-col shadow-2xl shadow-blue-500"
              onClick={closeModal}
            >
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
