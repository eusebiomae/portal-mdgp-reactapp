"use client";

import Container from "@/components/Container/Index";
import Image from "next/image";
import { useState, useRef } from "react";
import { Product } from "@/@types";
import { NextPage } from "next";
import { ArrowCarousel, CloseWhite, IconMeters, IconSuites, iconShareBooks, iconVagas } from "@/assets/img";

interface ProductProps {
  product: Product;
}

const Index: NextPage<ProductProps> = ({ product }) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedPlantaIndex, setSelectedPlantaIndex] = useState<number | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [indexCurrent, setIndexCurrent] = useState(0);

  const plantas = product.plantas.slice(0, 4);

  const abrirPopup = (index: number) => {
    setSelectedPlantaIndex(index);
    setPopupVisible(true);
    setIndexCurrent(index); // Definir o índice atual do lightbox
  };

  const fecharPopup = () => {
    setPopupVisible(false);
    setSelectedPlantaIndex(null);
    setLightboxOpen(false); // Fechar o lightbox quando o popup é fechado
  };

  const handleClickLightboxOpen = (index: number) => {
    setIndexCurrent(index);
    setLightboxOpen(true);
  };

  const handleClickLightboxClose = () => {
    setLightboxOpen(false);
  };

  const handleNavigate = (direction: "next" | "previews") => {
    let index = direction === "next" ? indexCurrent + 1 : indexCurrent - 1;

    if (index < 0) {
      index = plantas.length - 1;
    }

    if (index >= plantas.length) {
      index = 0;
    }

    setIndexCurrent(index);
  };

  return (
    <section className="Plantas overflow-hidden">
      <div className="CardPresentacaoPlata py-[100px]">
        <Container className="flex max-@tablet:flex-col justify-between">
          <h2 className="text-[#2B2B2B] tracking-[0.5em] uppercase text-[12px] font-arame text-2xl font-normal">plantas</h2>
          <div>
            {plantas.map(({ descricao, titulo, foto, destaque }, index) => (
              <div key={index} className="@desktop:flex justify-between @desktop:px-[100px] mb-8">
                <ul className="w-[790px] max-@tablet:w-full">
                  <li className="@desktop:flex justify-between @desktop:pr-[70px] border-b-[3px] border-[#2B2B2B] pb-[30px]">
                    <div>
                      <h2 className="text-[#2B2B2B] uppercase text-[30px] leading-[30px] max-@desktop:text-[22px] max-@desktop:leading-[22px] font-arame font-normal max-@desktop:text-right">{titulo}</h2>
                      <button
                        className="AbreImagemPlanta mt-[45px] text-[#2B2B2B] uppercase text-[14px] leading-[10px] border-[3px] font-arame font-normal max-@desktop:py-[10px] max-@desktop:px-[20px] max-@desktop:mb-[20px] py-[15px] px-[30px] border-[#2B2B2B] hover:border-[#7A7E83] ease-in-out duration-300 hover:text-[#7A7E83]"
                        onClick={() => abrirPopup(index)}
                      >
                        ver plantas
                      </button>
                    </div>

                    <div>
                      <ul className="font-barlow text-base w-[340px] max-@tablet:w-full">
                        <li className="flex gap-[10px] items-center pb-[5px] mb-[5px] border-b-[2px] border-[#2B2B2B]">
                          <Image src={IconMeters} alt="" />
                          <p>{descricao}</p>
                        </li>
                        <li className="flex gap-[10px] items-center pb-[5px] mb-[5px] border-b-[2px] border-[#2B2B2B]">
                          <Image src={IconSuites} alt="" />
                          <p>{titulo}</p>
                        </li>
                        <li className="flex gap-[10px] items-center pb-[5px] mb-[5px] border-b-[2px] border-[#2B2B2B]">
                          <Image src={iconVagas} alt="" />
                          <p>{destaque}</p>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            ))}

            <div className="group shareBook pl-[100px] max-@tablet:pl-0 flex items-center">
              <Image
                src={iconShareBooks}
                alt="Icone Share Book"
              />
              <a 
                href={`/${product.slug}-book-completo.pdf`} 
                download 
                className="font-barlow text-sm font-semibold text-[#2B2B2B] hover:text-[#7A7E83]">
                Baixar o book completo
              </a>
            </div>
          </div>
        </Container>
      </div>

      {popupVisible && selectedPlantaIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#f2f2f2] flex justify-center items-center z-50 max-@tablet:overflow-x-scroll">
          <div className="relative bg-[#f2f2f2] p-8 w-[1200px] max-@tablet:w-full max-@tablet:h-full">
            <button className="absolute top-2 right-2 text-black" onClick={fecharPopup}>
              <Image src={CloseWhite} alt="Fechar" />
            </button>

            <div className="flex max-@tablet:flex-col justify-center mb-4 w-[1200px] max-@tablet:w-full flex-wrap">
              {plantas.map((planta, index) => (
                <button
                  key={index}
                  className={`mx-2 py-2 px-4 ${
                    selectedPlantaIndex === index ? "bg-transparent text-white font-arame" : "bg-transparent text-black font-arame"
                  }`}
                  onClick={() => setSelectedPlantaIndex(index)}
                >
                  {planta.titulo}
                </button>
              ))}
            </div>

            <div className="flex max-@tablet:flex-col justify-between items-center h-[470px] max-@tablet:h-[420px]">
              <Image
                src={product.plantas[selectedPlantaIndex].foto.cropped}
                alt="Planta"
                width={0}
                height={0}
                sizes="100vw"
                className="relative w-[600px] max-@tablet:w-full h-[470px] max-@tablet:h-[250px] object-contain cursor-pointer"
                onClick={() => handleClickLightboxOpen(selectedPlantaIndex)}
              />

              <ul className="font-barlow text-base w-[370px] max-@tablet:w-full pb-6 mt-4">
                <li className="flex gap-[10px] items-center pb-[5px] mb-[5px] border-b-[2px] border-[#2B2B2B]">
                  <Image src={IconMeters} alt="" />
                  <p>{product.plantas[selectedPlantaIndex].descricao}</p>
                </li>
                <li className="flex gap-[10px] items-center pb-[5px] mb-[5px] border-b-[2px] border-[#2B2B2B]">
                  <Image src={IconSuites} alt="" />
                  <p>{product.plantas[selectedPlantaIndex].titulo}</p>
                </li>
                <li className="flex gap-[10px] items-center pb-[5px] mb-[5px] border-b-[2px] border-[#2B2B2B]">
                  <Image src={iconVagas} alt="" />
                  <p>{product.plantas[selectedPlantaIndex].destaque}</p>
                </li>

                <div className="shareBook pl-0 mt-10 flex items-center">
                  <Image
                    src={iconShareBooks}
                    alt="Icone Share Book"
                  />
                  <a 
                    href={`/${product.slug}-book-completo.pdf`} 
                    download 
                    className="font-barlow text-sm font-semibold text-[#2B2B2B] hover:text-[#7A7E83]">
                    Baixar o book completo
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && selectedPlantaIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center">
          <button onClick={handleClickLightboxClose} className="absolute top-2 right-2 text-white">
            <Image src={CloseWhite} alt="Fechar" />
          </button>
          <button onClick={() => handleNavigate("previews")} className="absolute left-4 text-white">
            <Image src={ArrowCarousel} alt="Chevron Prev" />
          </button>
          <Image
            src={product.plantas[indexCurrent].foto.cropped}
            alt="Planta"
            width={800}
            height={600}
            className="object-contain"
          />
          <button onClick={() => handleNavigate("next")} className="absolute right-4 text-white">
            <Image src={ArrowCarousel} alt="Chevron Next" className="rotate-180" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Index;
