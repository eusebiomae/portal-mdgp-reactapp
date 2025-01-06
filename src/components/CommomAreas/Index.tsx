"use client";

import { useState } from "react";
import Container from "@/components/Container/Index";
import TitleSectionTourImages from "@/components/TitleSectionTourImages/Index";
import SwiperCarouselTour from "@/components/SwiperCarouselTour/Index";
import SwiperCarouselImages from "@/components/SwiperCarouselImages/Index";
import { IMAGES } from "@/constants";
import Image from "next/image";
import { ornament04, ornament05 } from "@/assets/img";

const Index = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <section
        id="plants"
        className="pb-5 relative bg-white rounded-es-3xl rounded-ee-3xl"
      >
        <Container className="">
          {/* Tabs */}
          <div
            className="border-t border-[#1E2256]/50 flex flex-col @desktop:flex-row items-end justify-between max-@tablet:items-start"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="2000"
          >
            <TitleSectionTourImages />

            <div className="mt-5 flex">
              <button
                onClick={() => handleTabChange("tab1")}
                className={`mr-4 px-10 py-2 focus:outline-none whitespace-nowrap rounded-lg ${
                  activeTab === "tab1"
                    ? " border border-[#1E2256] text-bold text-white text-md"
                    : "bg-white text-[#1E2256] border border-[#1E2256] text-bold text-md"
                }`}
              >
                Tour Virtual
              </button>

              <button
                onClick={() => handleTabChange("tab2")}
                className={`px-10 py-2 focus:outline-none whitespace-nowrap rounded-lg ${
                  activeTab === "tab2"
                    ? " border border-[#1E2256] text-bold text-white text-md"
                    : "bg-white text-[#1E2256] border border-[#1E2256] text-bold text-md"
                }`}
              >
                Imagens
              </button>
            </div>
          </div>

          {/* {activeTab === "tab1" && <SwiperCarouselTour />} */}
          {activeTab === "tab2" && <SwiperCarouselImages data={IMAGES} />}
        </Container>
      </section>
      <div className="w-full h-[100px] bg-white -mt-10">
        <Image
          className="hidden @desktop:block w-full h-full object-cover"
          src={ornament04}
          alt=""
          width={1920}
          height={60}
        />
        <Image
          className="block @desktop:hidden w-full h-full object-cover"
          src={ornament05}
          alt=""
          width={1920}
          height={60}
        />
      </div>
    </>
  );
};

export default Index;
