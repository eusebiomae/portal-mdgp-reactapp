"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SlideAbout from "@/components/SlideAbout/Index";

import { FaChevronLeft } from "react-icons/fa";
import { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { listImagesTourVirtual } from "@/constants";
import { ArrowCarousel, ArrowCarouselBlack, IconArrow, IconClose } from "@/assets/img";
import { Images } from "@/@types";

type TPropsImages = {
  descricao: string;
  area_total: string;
  torres: string;
  unidades: string;
  incorporacao: string;
  participacao: string;
  imagem: Images;
  data: string;
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
    <div className=" carousel-images relative images-mobile w-full h-[250px] max-@tablet:h-auto @desktop:h-[600px] overflow-hidden">
      <button
        className="group w-10 h-10 hidden @tablet:flex items-center justify-center absolute left-4 z-10 top-1/2 transition-all ease-linear "
        aria-label="Prev"
        onClick={() => {
          swiperRef.current!.slidePrev();
        }}
      >
        <Image src={ArrowCarouselBlack} alt="" />
      </button>

      <Swiper
        className="!pb-0 @tablet:!pb-0 max-@tablet:!h-[720px]"
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
        {data!.map(({ descricao, area_total, torres, unidades, incorporacao, participacao, imagem, data }, index) => (
          <SwiperSlide key={index}>
            <SlideAbout
              descricao={descricao}
              imagem={imagem.original} 
              area_total={area_total} 
              torres={torres} 
              unidades={unidades} 
              incorporacao={incorporacao} 
              participacao={participacao}              
              data={data}              
              // onClick={() => handleClickLightboxOpen(index)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className="group w-10 h-10 hidden @tablet:flex items-center justify-center rotate-180 absolute right-4 z-10 top-1/2 transition-all ease-linear"
        aria-label="Prev"
        onClick={() => {
          swiperRef.current.slideNext();
        }}
      >
        <Image src={ArrowCarouselBlack} alt="" />
      </button>

      {isOpen && (
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
