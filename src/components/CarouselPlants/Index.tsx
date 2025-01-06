"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SlidePlants from "@/components/SlidePlants/Index";
import { useRef } from "react";
import { FaChevronLeft } from "react-icons/fa";
type TPropsImages = {
  image: string;
  title: string;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
};

type TPropsData = {
  data?: TPropsImages[];
};

const Index = ({ data }: TPropsData) => {
  const swiperRef = useRef() as any;

  return (
    <div className="plants-mobile w-full relative">
      <button
        className="rounded-md group w-10 h-10 bg-white hidden @tablet:flex items-center justify-center absolute left-4 z-10 top-1/2 hover: transition-all ease-linear border border-[#1E2256]"
        aria-label="Prev"
        onClick={() => {
          swiperRef.current!.slidePrev();
        }}
      >
        <FaChevronLeft className="group-hover:text-white" />
      </button>

      <Swiper
        className="!pb-10 @tablet:!pb-0"
        slidesPerView={1}
        spaceBetween={32}
        speed={800}
        loop
        modules={[Navigation, Pagination]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        grabCursor
        autoHeight
        navigation
        pagination={{ dynamicBullets: true, clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 24,
          },
          460: {
            slidesPerView: 1,
            spaceBetween: 24,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 24,
          },
          1250: {
            slidesPerView: 1,
            spaceBetween: 32,
          },
        }}
      >
        {data!.map(
          (
            {
              image,
              title,
              description1,
              description2,
              description3,
              description4,
            },
            index
          ) => (
            <SwiperSlide key={index}>
              <SlidePlants
                image={image}
                title={title}
                description1={description1}
                description2={description2}
                description3={description3}
                description4={description4}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>

      <button
        className="rounded-md group w-10 h-10 bg-white hidden @tablet:flex items-center justify-center -rotate-180 absolute right-4 z-10 top-1/2 hover: transition-all ease-linear border border-[#46494A]"
        aria-label="Prev"
        onClick={() => {
          swiperRef.current.slideNext();
        }}
      >
        <FaChevronLeft className="group-hover:text-white" />
      </button>
    </div>
  );
};

export default Index;
