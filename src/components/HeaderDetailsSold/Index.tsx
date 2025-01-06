import { Product } from "@/@types";
import { IconAddress, IconMeters, IconSuites, ImgHero, LogoFooter, LogoHeader, hero01 } from "@/assets/img";
import { NextPage } from "next";
import Image from "next/image";
import React from "react";

interface ProductProps {
  product: Product;
}

const Index: NextPage<ProductProps> = ({product}) => {
  
  return (
    <section className="">
      <div className="relative h-auto max-@tablet:h-auto bg-[#C5C8C7]">
        <a href="/">
          <Image src={LogoHeader} alt="Logo MDGP" className="absolute left-[30px] top-[30px] w-[70px] z-[2]"></Image>
        </a>

        <div className="bannerHeaderSold relative flex max-@tablet:flex-col items-center max-@tablet:items-start gap-[90px] max-@tablet:gap-[30px] justify-start pt-[140px] max-@tablet:pt-[120px] pb-[100px] max-@tablet:pb-10">

          <Image
            width={0}
            height={0}
            sizes="100vw"
            className=" relative object-cover w-[55%] max-@tablet:w-[85%] h-[650px] max-@tablet:h-[430px]"
            src={product?.background?.original || ''}
            alt="Imagem Banner Empreendimento"
          />

          <div className="infosEnterprise w-[340px] max-@tablet:w-full max-@tablet:px-5">
            <h1 className="nomeProdutoSold font-arame text-3xl font-normal mb-8">{product.nome}</h1>
            <p className="mb-5 max-@tablet:mb-8">{product.sobre}</p>

            <ul className="font-barlow">
              <li className="flex gap-[10px] items-center 
              pb-[5px] mb-[5px] border-b-[3px] border-[#2B2B2B]">
                <Image src={IconMeters} alt=""></Image>
                <p>{product.privativa}</p>
              </li>
              <li className="flex gap-[10px] items-center
              pb-[5px] mb-[5px] border-b-[3px] border-[#2B2B2B]">
                <Image src={IconSuites} alt=""></Image>
                <p>{product.dormitorios}</p>
              </li>
              <li className="flex gap-[10px] items-center">
                <Image src={IconAddress} alt=""></Image>
                <p>{product.endereco}</p>
              </li>
            </ul>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Index;
