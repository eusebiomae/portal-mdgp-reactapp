"use client";

import { useState } from "react";
import Container from "@/components/Container/Index";
import TitleSectionTourImages from "@/components/TitleSectionTourImages/Index";
import SwiperCarouselTour from "@/components/SwiperCarouselTour/Index";
import SwiperCarouselImages from "@/components/SwiperCarouselImages/Index";
import { APARTMENTS } from "@/constants";
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
        id="apartments"
        className="pb-5 relative pt-[100px]"
      >
        <Container>
          <h2 className="text-[#2B2B2B] tracking-[0.5em] uppercase text-[12px] font-arame text-2xl font-normal mb-[70px]">Apartamentos</h2>
        </Container>
        <SwiperCarouselImages data={product.fotos.filter((foto) => foto.escopo === 'apartamentos')} />
      </section>
    </>
  );
};

export default Index;
