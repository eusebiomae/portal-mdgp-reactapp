"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SlideRevista from "@/components/SlideRevista/Index";

import { FaChevronLeft } from "react-icons/fa";
import { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { listImagesTourVirtual } from "@/constants";
import { ArrowCarousel, IconArrow, IconClose } from "@/assets/img";

type TPropsImages = {
  image: StaticImageData;
  captionEdition: string;
  captionResume: string;
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
    setDataImgCurrent(listImagesTourVirtual[index] as any);
  }

  function handleClickLightboxClose() {
    setDataImgCurrent(null);
  }

  function handleNavigate(direction: "next" | "previews") {
    let index = direction === "next" ? indexCurrent + 1 : indexCurrent - 1;

    if (index < 0) {
      index = listImagesTourVirtual.length - 1;
    }

    if (index >= listImagesTourVirtual.length) {
      index = 0;
    }

    setIndexCurrent(index);

    setDataImgCurrent(listImagesTourVirtual[index] as any);
  }

  const swiperRef = useRef() as any;

  return (
    <div className=" carousel-revista relative images-mobile w-full h-[250px] max-@tablet:h-auto @desktop:h-[600px] overflow-visible">
      {/* <button
        className="group w-10 h-10 hidden @tablet:flex items-center justify-center absolute left-4 z-10 top-1/2 transition-all ease-linear "
        aria-label="Prev"
        onClick={() => {
          swiperRef.current!.slidePrev();
        }}
      >
        <Image src={ArrowCarousel} alt="" />
      </button> */}

      <Swiper
        className="Revista !pb-0 @tablet:!pb-0 flex justify-center"
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={8}
        scrollbar={{
          hide: false,
        }}
        modules={[Navigation, Scrollbar]}
        grabCursor
        autoHeight
        navigation
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
            spaceBetween: 8,
            width: 160,
          },
        }}
      >
        {data!.map(({ image, captionEdition, captionResume }, index) => (
          <SwiperSlide key={index}>
            <SlideRevista
              key={index}
              image={image} 
              captionEdition={captionEdition}
              captionResume={captionResume}             
              // onClick={() => handleClickLightboxOpen(index)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <button
        className="group w-10 h-10 hidden @tablet:flex items-center justify-center -rotate-180 absolute right-4 z-10 top-1/2 transition-all ease-linear"
        aria-label="Prev"
        onClick={() => {
          swiperRef.current.slideNext();
        }}
      >
        <Image src={ArrowCarousel} alt="" />
      </button> */}

      {/* {isOpen && (
        <div className="fixed inset-0 w-full h-full z-10 flex items-center justify-center /50 gap-4">
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
            </>
          )}

          <button
            className="w-12 rotate-0 hover:opacity-50 transition-opacity ease-linear absolute right-0 @desktop:static"
            onClick={() => handleNavigate("next")}
          >
            <Image src={ArrowCarousel} alt="" />
          </button>
        </div>
      )} */}
    </div>
  );
};

export default Index;
