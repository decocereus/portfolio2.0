import { ReactNode } from "react";

export interface Skills {
  [key: string]: string;
}

export interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}
