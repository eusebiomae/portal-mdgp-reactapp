"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SlideObras from "@/components/SlideObras/Index";

import { FaChevronLeft } from "react-icons/fa";
import { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { listImagesObras } from "@/constants";
import { ArrowCarousel, ArrowCarouselBlack, IconArrow, IconClose } from "@/assets/img";
import { Images } from "@/@types";

type TPropsImages = {
  imagem: Images;
  titulo: string;
};

type TPropsData = {
  data?: TPropsImages[];
};

const Index = ({ data }: TPropsData) => {
  const [dataImgCurrent, setDataImgCurrent] = useState<StaticImageData | null>(
    null
  );

  const [indexCurrent, setIndexCurrent] = useState(0);

  const isOpen = dataImgCurrent != null;

  function handleClickLightboxOpen(index: number) {
    setIndexCurrent(index);
    setDataImgCurrent(listImagesObras[index] as any);
  }

  function handleClickLightboxClose() {
    setDataImgCurrent(null);
  }

  function handleNavigate(direction: "next" | "previews") {
    let index = direction === "next" ? indexCurrent + 1 : indexCurrent - 1;

    if (index < 0) {
      index = listImagesObras.length - 1;
    }

    if (index >= listImagesObras.length) {
      index = 0;
    }

    setIndexCurrent(index);

    setDataImgCurrent(listImagesObras[index] as any);
  }

  const swiperRef = useRef() as any;

  return (
    <div className="@desktop:px-[100px] construction-mobile relative w-full h-[290px] overflow-hidden">
      <button
        className="group w-10 h-10 hidden @tablet:flex items-center justify-center absolute left-11 z-10 top-1/3 transition-all ease-linear "
        aria-label="Prev"
        onClick={() => {
          swiperRef.current!.slidePrev();
        }}
      >
        <Image src={ArrowCarouselBlack} alt="" />
      </button>

      <Swiper
        className="!pb-0 @desktop:!h-[290px] @tablet:!pb-0 max-@tablet:!h-[290px]"
        slidesPerView={1}
        spaceBetween={32}
        speed={800}
        loop
        modules={[Navigation]}
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
            width: 300,
          },
          460: {
            slidesPerView: 1,
            spaceBetween: 24,
            width: 300,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 24,
            width: 300,
          },
          1250: {
            spaceBetween: 32,
            width: 300, 
          },
        }}
      >
        {data!.map(({ imagem, titulo }, index) => (
          <SwiperSlide key={index}>
            <SlideObras
              titulo={titulo}
              imagem={imagem?.original}
              // onClick={() => handleClickLightboxOpen(index)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className="group w-10 h-10 hidden @tablet:flex items-center justify-center -rotate-180 absolute right-12 z-10 top-1/3 transition-all ease-linear"
        aria-label="Prev"
        onClick={() => {
          swiperRef.current.slideNext();
        }}
      >
        <Image src={ArrowCarouselBlack} alt="" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 w-full h-full z-10 flex items-center justify-center gap-4">
          <button
            className="absolute top-5 right-5 w-10"
            onClick={handleClickLightboxClose}
          >
            <Image src={IconClose} alt="" />
          </button>

          <button
            className="w-12 rotate-180 hover:opacity-50 transition-opacity ease-linear absolute left-0 @desktop:static"
            onClick={() => handleNavigate("previews")}
          >
            <Image src={ArrowCarousel} alt="" />
          </button>

          {dataImgCurrent && (
            <>
              <Image
                className="w-[335px] @desktop:w-[1200px] h-auto object-cover"
                src={dataImgCurrent.src}
                alt=""
                width={1200}
                height={500}
              />
              {/* <span className="bg-white/80 px-2 py-1 rounded-md absolute bottom-2 left-[100px] z-0 text-sm text-[#1E2256]">
                {dataImgCurrent?.caption}
              </span> */}
            </>
          )}

          <button
            className="w-12 rotate-0 hover:opacity-50 transition-opacity ease-linear absolute right-0 @desktop:static"
            onClick={() => handleNavigate("next")}
          >
            <Image src={ArrowCarousel} alt="" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Index;
