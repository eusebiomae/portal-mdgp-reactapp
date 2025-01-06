"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SlideImages from "@/components/SlideImages/Index";

import { FaChevronLeft } from "react-icons/fa";
import { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { listImagesTourVirtual } from "@/constants";
import { ArrowCarousel, IconArrow, IconClose } from "@/assets/img";
import { Images } from "@/@types";

type TPropsImages = {
  // src: string;
  imagem: Images;
  titulo: string;
};

type TPropsData = {
  data: TPropsImages[];
};

const Index = ({ data }: TPropsData) => {
  const [dataImgCurrent, setDataImgCurrent] = useState<TPropsImages | null>(
    null
  );

  const [indexCurrent, setIndexCurrent] = useState(0);

  const isOpen = dataImgCurrent != null;

  function handleClickLightboxOpen(index: number) {
    setIndexCurrent(index);
    setDataImgCurrent(data[index] as any);
  }

  function handleClickLightboxClose() {
    setDataImgCurrent(null);
  }

  function handleNavigate(direction: "next" | "previews") {
    let index = direction === "next" ? indexCurrent + 1 : indexCurrent - 1;

    if (index < 0) {
      index = data.length - 1;
    }

    if (index >= data.length) {
      index = 0;
    }

    setIndexCurrent(index);

    setDataImgCurrent(data[index] as any);
  }

  const swiperRef = useRef() as any;

  return (
    <>
    <div className=" carousel-images relative images-mobile w-full h-[250px] @desktop:h-[600px] overflow-hidden">
      <button
        className="group w-10 h-10 hidden @tablet:flex items-center justify-center absolute left-[200px] z-10 top-1/2 transition-all ease-linear "
        aria-label="Prev"
        onClick={() => {
          swiperRef.current!.slidePrev();
        }}
      >
        <Image src={ArrowCarousel} alt="" />
      </button>

      <Swiper
        className="!pb-0 @tablet:!pb-0 !overflow-visible"
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        scrollbar={{
          hide: false,
        }}
        loop
        modules={[Navigation, Scrollbar]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        grabCursor
        width={null}
        autoHeight
        navigation
        pagination={{ dynamicBullets: true, clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 'auto',
            spaceBetween: 20,
            width: 340,
          },
          460: {
            slidesPerView: 'auto',
            spaceBetween: 20,
            width: 340,
          },
          640: {
            slidesPerView: 'auto',
            spaceBetween: 20,
            width: 340,
          },
          1250: {
            slidesPerView: 'auto',
            spaceBetween: 30,
            width: 970,
          },
        }}
      >
        {data!.map(({ imagem, titulo }, index) => (
          <SwiperSlide key={index}>
            <SlideImages
              titulo={titulo}
              imagem={imagem?.cropped}
              onClick={() => handleClickLightboxOpen(index)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className="group w-10 h-10 hidden @tablet:flex items-center justify-center -rotate-180 absolute right-[200px] z-10 top-1/2 transition-all ease-linear"
        aria-label="Prev"
        onClick={() => {
          swiperRef.current.slideNext();
        }}
      >
        <Image src={ArrowCarousel} alt="" />
      </button>

      {isOpen && (
        <div className="lightCarousel fixed inset-0 w-full h-full z-50 flex items-center justify-center bg-black gap-4 top-0 left-0">
          <button
            className="absolute top-5 right-5 w-10"
            onClick={handleClickLightboxClose}
          >
            <Image src={IconClose} alt="" />
          </button>

          <button
            className="w-12 rotate-0 hover:opacity-50 transition-opacity ease-linear absolute left-0 @desktop:static"
            onClick={() => handleNavigate("previews")}
          >
            <Image src={ArrowCarousel} alt="" />
          </button>


          {dataImgCurrent && (
            <>
              <Image
                className="w-[335px] @desktop:w-[1200px] h-auto object-cover"
                src={dataImgCurrent.imagem.cropped}
                alt=""
                width={1200}
                height={500}
              />
              <span className="px-2 py-1 absolute bottom-2 left-[100px] font-barlow z-0 text-sm text-white">
                {dataImgCurrent?.titulo}
              </span>
            </>
          )}

          <button
            className="w-12 rotate-180 hover:opacity-50 transition-opacity ease-linear absolute right-0 @desktop:static"
            onClick={() => handleNavigate("next")}
          >
            <Image src={ArrowCarousel} alt="" />
          </button>
        </div>
      )}
    </div>
    </>
  );
};

export default Index;
