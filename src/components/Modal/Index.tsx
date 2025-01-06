import React, { FC, ReactNode, useState } from "react";
import Image from "next/image";
import { IconClose } from "@/assets/img";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [modalOpen, setModalOpen] = useState(true);
  const handleClose = () => {
    setModalOpen(false);
    onClose();
  };

  return (
    <>
      {modalOpen && (
        <div
          className="Modal fixed top-0 left-0 w-full h-full z-50 bg-white overflow-y-scroll"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="200"
        >
          <button className="border border-[#1E2256] absolute top-4 right-4 cursor-pointer text-[#1E2256] bg-white p-2 rounded-md">
            <IoClose onClick={handleClose} size={32} />
          </button>
          {children}
        </div>
      )}
    </>
  );
};

export default Modal;
