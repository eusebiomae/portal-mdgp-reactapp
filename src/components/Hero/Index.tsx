"use client";

import Container from "@/components/Container/Index";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { hero02, LogoFooter, ornament01 } from "@/assets/img";
import SwiperCarouselHero from "@/components/SwiperCarouselHero/Index";
import { HERO } from "@/constants";
import { Banners } from "@/@types/Banners";
import { NextPage } from "next";

interface ProductProps {
  banners: Banners[];
}

const Index: NextPage<ProductProps> = ({ banners }) => {
  return (
    <section className="overflow-hidden relative">
      <a href="/">
        <Image src={LogoFooter} alt="Logo MDGP" className="absolute left-[30px] top-[20px] w-[50px] z-[1]"></Image>
      </a>

      <div className=" absolute top-0 right-0 h-full bg-white w-[70px] max-@desktop:w-[50px] z-[5]">
      </div>
      
      <SwiperCarouselHero  data={banners}/>

    </section>
  );
};

export default Index;
