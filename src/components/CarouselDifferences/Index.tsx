"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SlideDifferences from "@/components/SlideDifferences/Index";
import { useRef } from "react";
import { Images } from "@/@types";

type TPropsDifferences = {
  empresa: string;
  setor: string;
  descricao: string;
  imagem: Images;
};

type TPropsData = {
  data?: TPropsDifferences[];
};

const Index = ({ data }: TPropsData) => {
  const swiperRef = useRef() as any;

  return (
    <div className="enterprise-mobile w-full relative">
      <Swiper
        className="!pb-10 @tablet:!pb-0"
        slidesPerView={1}
        spaceBetween={32}
        speed={800}
        loop
        modules={[Pagination]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        grabCursor
        autoHeight
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
            slidesPerView: 3,
            spaceBetween: 32,
          },
        }}
      >
        {data!.map(({ empresa, setor, descricao, imagem }, index) => (
          <SwiperSlide key={index}>
            <SlideDifferences 
              imagem={imagem.cropped} 
              descricao={descricao} 
              setor={setor} 
              empresa={empresa} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Index;
