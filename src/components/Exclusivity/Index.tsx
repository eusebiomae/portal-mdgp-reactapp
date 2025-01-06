"use client"

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { listImages } from "@/constants";
import ThumbImage from "@/components/ThumbImage/Index";
import { IconArrow, IconClose, ImgExclusivity } from "@/assets/img";
import TitleSectionCommonAreas from "@/components/TitleSectionCommonAreas/Index";
import { PiPlusBold } from "react-icons/pi";

type TPropsImages = {
  image: StaticImageData;
  caption: string;
};


const Index = () => {
  return (
    <>
      <section className="bg-[#2B2B2B] text-white pt-[106px] max-@desktop:py-[50px] pb-[88px] max-@desktop:px-[25px] px-[100px] max-@desktop:left-[-25px] relative z-[1] @desktop:flex @desktop:justify-between">
        
        <Image className="absolute top-0 left-0 w-full @desktop:w-[630px] h-full object-cover z-[-1] max-@desktop:h-[365px]" src={ImgExclusivity} alt="" />

        <p data-aos="fade-right" data-aos-delay="300" data-aos-duration="2000" className="uppercase text-[40px] leading-[40px] font-arame @desktop:w-[10em] max-@desktop:text-[30px] max-@desktop:leading-[30px] max-@desktop:mb-[275px]">Nosso jeito de construir exclusividade</p>

        <div className="flex flex-col gap-[50px] @desktop:w-[340px] font-barlow leading-[32px]">
          <p>Todos os apartamentos possuem piso aquecido nos banheiros das suítes, além de mantas acústicas de proteção, para tornar a sua experiência mais aconchegante e silenciosa.</p>
          <p>Os amplos vãos para esquadrias com persianas integradas privilegiam a iluminação e a ventilação naturais, enquanto os vidros têm desempenho térmico e acústico.</p>
        </div>
      </section>
    </>
  );
};

export default Index;
