import { Product } from "@/@types";
import { ImgHero, LogoFooter, hero01 } from "@/assets/img";
import { NextPage } from "next";
import Image from "next/image";
import React from "react";

interface ProductProps {
  product: Product;
}

const Index: NextPage<ProductProps> = ({product}) => {
  
  return (
    <section className="">
      <div className="relative h-[670px] max-@tablet:h-[550px]">
        <a href="/">
          <Image src={LogoFooter} alt="Logo MDGP" className="absolute left-[30px] top-[20px] w-[50px] z-[1]"></Image>
        </a>

        <div className=" absolute top-0 right-0 h-full bg-white w-[70px] max-@desktop:w-[50px] z-[2]"></div>

          <div className="w-full max-@tablet:w-[326px] flex justify-center absolute top-[46%] max-@tablet:top-[50%]">
            <Image
              width={370}
              height={75}
              sizes="100vw"
              className=" absolute z-[1] max-@tablet:w-[222px] max-@tablet:h-[43px]"
              src={product?.logo?.original || ''}
              alt="Imagem Logo Empreendimento"
            />
          </div>

          <Image
            width={0}
            height={0}
            sizes="100vw"
            className="relative object-cover w-full h-[550px] @desktop:h-full brightness-50"
            // src={ImgHero}
            src={product?.background?.original || ''}
            alt="Imagem Banner Empreendimento"
          />
        </div>
    </section>
  );
};

export default Index;
