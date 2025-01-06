"use client";

import { BannerVideo, CloseWhite, Face, IconAddress, IconMeters, IconSuites, Insta, PlayWhite, Share, Twitter, WhatsApp } from "@/assets/img";
import Container from "@/components/Container/Index";
import { CAROUSEL_DIFFERENCES, DIFFERENCES_01, DIFFERENCES_02, DIFFERENCES_03, DIFFERENCES_04 } from "@/constants";
import Image from "next/image";
import SwiperCarouselDifferences from "@/components/SwiperCarouselDifferences/Index";
import { useState } from "react";
import axios from "axios";
import { Product } from "@/@types";
import { NextPage } from "next";

interface ProductProps {
  product: Product;
}

const Index: NextPage<ProductProps> = ({product}) => {

  const [playVideo, setplayVideo] = useState(false);

  return (
    <section className=" bg-[#C5C8C7] p-0 @desktop:p-10">
      {playVideo &&(
        <>
        <div className="fixed top-0 left-0 z-20 w-full h-full flex justify-center items-center px-auto py-auto">
          <div className="bg-[#000000] absolute w-full h-full opacity-[88%]"></div>
          <button className="absolute top-[22px] right-[20px]" onClick={() => {setplayVideo(false)}}><Image src={CloseWhite} alt=""></Image></button>
          <Container className="">

            <iframe className="w-full relative max-@desktop:h-[300px] top-[50%]" src={product.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          
          </Container>
        </div>
        </>
      )}

      <Container className="overflow-hidden">
        <header className="About py-8">
          <div 
            className="flex justify-center gap-[131px] max-@desktop:gap-[50px] max-@desktop:flex-col"
            
          >
            <div className="w-[370px] max-@desktop:w-full"
              data-aos="fade-right" data-aos-delay="400" data-aos-duration="2000"
            >
              <h2 className="font-arame text-[40px] leading-[40px] max-@desktop:text-[30px] max-@desktop:leading-[30px]">{product.sobre_titulo}</h2>
              <a href="#contactFooter">
                <button className="py-[20px] px-[30px] border-[3px] border-[#2B2B2B] text-[14px] leading-[10.57px] font-arame mt-[30px] hover:border-[#7A7E83] ease-in-out duration-300 hover:text-[#7A7E83]">
                  entre em contato
                </button>
              </a>
            </div>
            
            
            <div className="font-barlow text-[18px] w-[470px] max-@desktop:w-full flex flex-col gap-[50px]"
              data-aos="fade-left" data-aos-delay="400" data-aos-duration="2000"
            >
              <p>{product.sobre}</p>
            </div>
          </div>

          <div className="flex justify-start @desktop:px-[100px] @desktop:items-end max-@desktop:flex-col-reverse"
          >
            <div className="@desktop:mr-[275px] mr-auto"
              data-aos="fade-right" data-aos-delay="200" data-aos-duration="2000"
            >
              <ul className="flex items-center gap-[15px]">
                <li className="flex gap-[5px] items-center">
                  <Image src={Share} alt=""></Image>
                  <p  className="text-[12px] font-arame uppercase leading-[9.06px]">compartilhar</p>
                </li>
                <li>
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent("Veja o último empreendimento do MDGP")}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Image src={Face} alt="Compartilhar no Facebook" />
                  </a>
                </li>
                <li>
                  <a 
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent("Veja o último empreendimento do MDGP")}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Image src={Twitter} alt="Compartilhar no Twitter" />
                  </a>
                </li>
                <li>
                  <a 
                    href={`https://www.instagram.com/`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Image src={Insta} alt="Compartilhar no Instagram" />
                  </a>
                </li>
                <li>
                  <a 
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent("Veja o último empreendimento do MDGP: " + window.location.href)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Image src={WhatsApp} alt="Compartilhar no WhatsApp" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="@desktop:w-[361px] max-@desktop:mt-[24px] max-@desktop:mb-[30px]"
              data-aos="fade-left" data-aos-delay="100" data-aos-duration="2000"
            >
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
        </header>

        <div className="Video max-@desktop:w-screen mt-[80px] mb-[100px] max-@desktop:my-[50px] relative">

          <div className="relative z-[1] max-@desktop:left-[-25px] max-@tablet:h-[400px]">
          <button 
            className="
              group /* Adiciona a classe group para que o hover seja aplicado a todos os elementos filhos */
              absolute 
              left-[50%] 
              top-[50%] 
              translate-x-[-50%] 
              translate-y-[-50%] 
              z-[1] 
              border-white 
              pl-[5px] 
              border-[1px] 
              hover:border-[1px]
              w-[101px]
              hover:w-[125px] 
              h-[101px] 
              hover:h-[125px]
              hover:ease-in-out
              hover:duration-300
              flex 
              justify-center 
              items-center 
              rounded-full" 
            onClick={() => {setplayVideo(true)}}
          >
            <Image 
              src={PlayWhite} 
              alt="Icone Play Video"
              className="
                group-hover:scale-110 /* Aplica um efeito de escala à imagem ao passar o mouse sobre o botão */
                transition-transform /* Garante uma transição suave */
                duration-300 /* Define a duração da transição */
              "
            />
          </button>
            
            <Image            
              width={0}
              height={0} 
              sizes="100vw"
              className="relative object-cover w-full h-[687px]  max-@tablet:h-[400px]" 
              src={product.fachada.original} 
              alt="Imagem Thumb Video"></Image>              
          </div>

        </div>


        <div className="Projetistas my-8">
          <h2 className="text-[#2B2B2B] tracking-[0.5em] uppercase text-[12px] font-arame mb-4 text-2xl font-normal">
            signatures
          </h2>
        </div>

        <div  className="Projetistas_cards hidden @desktop:grid grid-cols-4 gap-8">
          {product.projetistas.map(({ empresa, setor, descricao, imagem }, index) => (
            <ul
              className=""
              key={index}
            >
              <li className="relative">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[250px] max-@tablet:w-full object-cover object-top mb-6"
                  src={imagem.cropped}
                  alt="Imagem Projetista"
                />
              </li>
              <li className="text-[#2B2B2B] text-[30px] leading-[30px] w-[8em] font-arame uppercase font-normal">{empresa}</li>
              <li className="text-[#2B2B2B] text-[12px] font-arame mt-[10px] mb-[30px]">{setor}</li>
              <li className="text-[#2B2B2B] font-barlow text-[18px] leading-[32px]">{descricao}</li>
            </ul>
          ))}
        </div>
        
        <div className="block @desktop:hidden">
          <SwiperCarouselDifferences data={product.projetistas} />
        </div>
      </Container>
    </section>
  );
};

export default Index;