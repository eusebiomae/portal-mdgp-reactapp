"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules"; // Importar Autoplay e EffectFade
import SlideHero from "@/components/SlideHero/Index";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Images } from "@/@types";

type TPropsHero = {
  mp4: string;
  logo: Images;
  url: string;
  bairro: string;
  cidade: string;
};

type TPropsData = {
  data: TPropsHero[];
};

const Index = ({ data }: TPropsData) => {
  const swiperRef = useRef() as any;

  return (
    <div className="hero w-full h-full relative">
      <Swiper
        className=""
        slidesPerView={1}
        effect="fade"  // Usar o efeito fade para transições suaves
        modules={[Pagination, Autoplay, EffectFade]} // Módulos: Pagination, Autoplay, e Fade
        loop={true}  // Ativar o loop
        autoplay={{
          delay: 10000, // 10 segundos entre os slides
          disableOnInteraction: false, // Continua o autoplay mesmo após interação do usuário
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        grabCursor
        autoHeight
        fadeEffect={{ crossFade: true }}  // Suavizar a transição com crossFade
        pagination={{ dynamicBullets: true, clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          460: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          1250: {
            slidesPerView: 1,
          },
        }}
      >
        {data!.map(({ mp4, logo, url, bairro, cidade }, index) => (
          <SwiperSlide key={index}>
            <SlideHero mp4={mp4} logo={logo?.original} url={url} bairro={bairro} cidade={cidade}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Index;