"use client";

import Container from "@/components/Container/Index";
import { BsList, BsX } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { LogoFooter, LogoHeader, LogoHeaderMobile, logoToca55Dark } from "@/assets/img";
import ItemMenu from "./ItemMenu";
import { MouseEventHandler, useState } from "react";
import Email from "@/components/Email/Index";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { NAV_LINKS } from "@/constants";
import Modal from "../Modal/Index";
import Login from "../LoginForm/Index";

const Index = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  function toggleMenu() {
    setOpenMenu(!openMenu);
  }

  const handleCloseEmailModal = () => {
    setIsEmailModalOpen(false);
  };

  const handleButtonClick = (
    action: MouseEventHandler<HTMLButtonElement> | string
  ) => {
    switch (action) {
      case "openEmail":
        setIsEmailModalOpen(true);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <header
        data-header="home"
        className="navigationIndex w-full max-@tablet:w-full left-auto right-0 bg-green-normal z-10 py-2 fixed"
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-duration="200"

        onMouseLeave={() => {
          if (window.innerWidth > 768) {
            toggleMenu();
          }
        }}
        
        onMouseEnter={() => {
          if (window.innerWidth > 768) {
            toggleMenu();
          }
        }}
      >
        <nav className="flex items-center justify-end">

          {/* MENU MOBILE */}
          <div
            className=" cursor-pointer flex items-center gap-5 p-2 @desktop:p-[20px]"
            onClick={() => {
              if (window.innerWidth < 768) {
                toggleMenu();
              }
            }}
          >
            <div className="relative flex flex-col z-10 items-center justify-center w-5 h-5">
              <div
                className={`linhaUp transition-transform duration-300 ease-in-out w-6 h-[2px] bg-[#2B2B2B] mb-1 ${
                  openMenu ? "rotate-45 translate-y-1 max-@tablet:bg-white" : ""
                }`}
              />
              <div
                className={`transition-opacity duration-300 ease-in-out w-6 h-[2px] bg-[#2B2B2B] mb-1 ${
                  openMenu ? "opacity-0" : "opacity-100"
                }`}
              />
              <div
                className={`linhaUp transition-transform duration-300 ease-in-out w-6 h-[2px] bg-[#2B2B2B] mb-1 ${
                  openMenu ? "-rotate-45 -translate-y-2 max-@tablet:bg-white" : ""
                }`}
              />
            </div>
          </div>
          
          <div
            className={
              openMenu
                ? "fixed top-0 right-0 h-full w-full max-@tablet:h-screen p-0 opacity-100 ease-in-out duration-500"
                : "fixed top-0 right-0 max-@tablet:right-[-375px] h-full w-full max-@tablet:h-screen p-0 opacity-0 ease-in-out duration-500"
            }
          >
            <div className="barraNavElementos flex 
              items-center 
              justify-between
              max-@desktop:py-4
              bg-white 
              w-full 
              max-@desktop:px-[15px] 
              max-@desktop:h-full
              max-@desktop:bg-[#2B2B2B]
              max-@desktop:items-start
              max-@desktop:pt-[25px]"
            >
              {/* MENU MOBILE LINKS */}
              <a href="/">
                <Image 
                  src={LogoHeader}
                  className="m-2 ml-[50px] max-@desktop:hidden"
                  alt=""
                />
              </a>
              <a href="">
                <Image 
                  src={LogoHeaderMobile}
                  className="m-2 @desktop:hidden"
                  alt=""
                />
              </a>

              <div className="flex items-center justify-end">
                
              <div className="rounded-s-2xl relative flex-col gap-4 overflow-hidden">
                <ul className="
                text-[#2B2B2B]
                flex 
                items-end 
                gap-[30px] 
                place-content-center 
                @desktop:mr-[140px] 
                max-@desktop:flex-col
                max-@desktop:text-white
                max-@desktop:pt-[225px]
                font-arame
                ">
                  {NAV_LINKS.map(({ link, label }, index) => (
                    <ItemMenu
                      key={index}
                      link={link}
                      label={label}
                      event={setOpenMenu}
                    />
                  ))}

                  <li className="">
                    <button
                      onClick={() => setIsEmailModalOpen(true)}
                      className="relative inline-block text-[#2B2B2B] max-@tablet:text-white hover:text-[#7A7E83] font-body text-body-14 py-1 px-2 transition-all ease-linear"
                    >
                      Área do Cliente
                    </button>
                  </li>

                </ul>
              </div>
              <div
                className="
                max-@desktop:absolute
                max-@desktop:top-0
                max-@desktop:right-0
                cursor-pointer flex items-center gap-5 p-2 @desktop:p-[20px] max-@desktop:text-white"
                // onClick={toggleMenu}
                onClick={() => {
                  if (window.innerWidth < 768) {
                    toggleMenu();
                  }
                }}
              >
                <span className="w-8 h-8"></span>
                {/* <BsX className="w-8 h-8 text-cream-normal"/> */}
              </div>

                </div>
            </div>
          </div>
        </nav>
      </header>

      <div>
        {isEmailModalOpen && (
          <Login isOpen={isEmailModalOpen} onClose={handleCloseEmailModal}>
            <Email />
          </Login>
        )}
      </div>
    </>
  );
};

export default Index;
