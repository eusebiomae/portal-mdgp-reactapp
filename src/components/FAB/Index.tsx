"use client";

import { FABChat, FABEmail, FABPhone, FABWatsapp } from "@/constants";
import Image from "next/image";
import { MouseEventHandler, useState } from "react";
import Modal from "../Modal/Index";
import Email from "@/components/Email/Index";
import Chat from "@/components/Chat/Index";
import Whatsapp from "@/components/Whatsapp/Index";
import Phone from "@/components/Phone/Index";

const Index = () => {
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isWhatsappModalOpen, setIsWhatsappModalOpen] = useState(false);
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);

  const handleButtonClick = (
    action: MouseEventHandler<HTMLButtonElement> | string
  ) => {
    switch (action) {
      case "openChat":
        setIsChatModalOpen(true);
        break;
      case "openEmail":
        setIsEmailModalOpen(true);
        break;
      case "openWhatsapp":
        setIsWhatsappModalOpen(true);
        break;
      case "openPhone":
        setIsPhoneModalOpen(true);
        break;

      default:
        break;
    }
  };

  const handleCloseChatModal = () => {
    setIsChatModalOpen(false);
  };

  const handleCloseEmailModal = () => {
    setIsEmailModalOpen(false);
  };

  const handleCloseWhatsappModal = () => {
    setIsWhatsappModalOpen(false);
  };

  const handleClosePhoneModal = () => {
    setIsPhoneModalOpen(false);
  };

  return (
    <>
      <div className="rounded-tl-[10px] max-@tablet:rounded-tl-[20px] rounded-tr-0 max-@tablet:rounded-tr-[20px] rounded-br-none rounded-bl-[10px] max-@tablet:rounded-bl-none fixed w-full max-@tablet:w-[50px] max-@tablet:h-[550px] bottom-0 right-0 z-[8] flex max-@tablet:flex-col items-center justify-center gap-4 @tablet:border-t-0 border-white py-2 @tablet:w-[56px] @tablet:max-w-[56px] @tablet:right-0 @tablet:bottom-1/2 @tablet:translate-y-1/2 @tablet:flex-col @tablet:items-end @tablet:gap-2">
        {FABWatsapp.map(({ icon, action }, index) => (
          <>
            <a href="https://wa.me/5541992762538" target="_blank" rel="noopener noreferrer">
              <button
                className={`group  flex items-center p-2 mr-1 rounded-lg hover:scale-150 transition-all`}
                key={index}
                // onClick={() => handleButtonClick(action)}
              >
                <div className="flex items-center justify-center relative w-8 h-8">
                  <Image className="bg-contain" src={icon} alt={''} />
                </div>
              </button>
            </a>
          </>
        ))}

        {FABEmail.map(({ icon, action }, index) => (
          <button
            className={`group  flex items-center p-2 mr-1 rounded-lg hover:scale-150 transition-all`}
            key={index}
            onClick={() => handleButtonClick(action)}
          >
            <div className="flex items-center justify-center relative w-8 h-8">
              <Image className="bg-contain" src={icon} alt={''} />
            </div>
          </button>
        ))}

        {FABPhone.map(({ icon, action }, index) => (
          <>
            <a href="tel:+5541992762538">
              <button
                className={`group  flex items-center p-2 mr-1 rounded-lg hover:scale-150 transition-all`}
                key={index}
                // onClick={() => handleButtonClick(action)}
              >
                <div className="flex items-center justify-center relative w-8 h-8">
                  <Image className="bg-contain" src={icon} alt={''} />
                </div>
              </button>
            </a>
          </>
        ))}
      </div>
      
      <div>
        {isEmailModalOpen && (
          <Modal isOpen={isEmailModalOpen} onClose={handleCloseEmailModal}>
            <Email />
          </Modal>
        )}

        {isChatModalOpen && (
          <Modal isOpen={isChatModalOpen} onClose={handleCloseChatModal}>
            <Chat />
          </Modal>
        )}

        {isWhatsappModalOpen && (
          <Modal
            isOpen={isWhatsappModalOpen}
            onClose={handleCloseWhatsappModal}
          >
            <Whatsapp />
          </Modal>
        )}

        {isPhoneModalOpen && (
          <Modal isOpen={isPhoneModalOpen} onClose={handleClosePhoneModal}>
            <Phone />
          </Modal>
        )}
      </div>
    </>
  );
};

export default Index;
