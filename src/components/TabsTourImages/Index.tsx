"use client";

import { useState } from "react";
import Container from "@/components/Container/Index";
import TitleSectionTourImages from "@/components/TitleSectionTourImages/Index";
import SwiperCarouselTour from "@/components/SwiperCarouselTour/Index";
import SwiperCarouselImages from "@/components/SwiperCarouselImages/Index";
import TourVirtual from "@/components/TourVirtual/Index";
import { IMAGES } from "@/constants";
import Image from "next/image";
import { ornament04, ornament05 } from "@/assets/img";
import { Product } from "@/@types";
import { NextPage } from "next";

interface ProductProps {
  product: Product;
}

const Index: NextPage<ProductProps> = ({product}) => {

  return (
    <>
      <section
        id="areas-comuns"
        className="AreasComuns pb-5 relative bg-[#C5C8C7] pt-[140px] max-@tablet:pt-10"
      >
        <Container>
          <h2 data-aos="fade-right" data-aos-delay="300" data-aos-duration="2000" className="text-[#2B2B2B] tracking-[0.5em] uppercase text-[12px] font-arame text-2xl font-normal mb-[70px]">áreas comuns</h2>
        </Container>
        <SwiperCarouselImages data={product.fotos.filter((foto) => foto.escopo === 'areas')} />
      </section>

      <section className="tour">
        <TourVirtual product={product} />
      </section>
    </>
  );
};

export default Index;
