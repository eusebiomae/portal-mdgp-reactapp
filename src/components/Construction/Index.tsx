"use client";

import Container from "@/components/Container/Index";
import { EVOLUTION_CONSTRUCTION_TOTAL, IMAGES, IMAGESOBRAS } from "@/constants/index";
import { useState } from "react";
import SwiperCarouselObras from "@/components/SwiperCarouselObras/Index";
import { NextPage } from "next";
import { Product } from "@/@types";

type TProps = {
  data?: any[];
};

interface ProductProps {
  product: Product;
}

const Index: NextPage<ProductProps> = ({product}) => {
  const [total, setTotal] = useState(0);

  return (
    <section className="bg-[#C5C8C7] relative">
      <div className="absolute top-0 right-0 w-[10%] bg-[#F5F5F5] h-full max-@desktop:hidden"></div>
      <Container>

          <div className="pt-[110px] max-@tablet:pt-[60px] pb-[70px]">
            <header className="">
              <h2 className="text-[#2B2B2B] tracking-[0.5em] uppercase text-[12px] font-arame text-2xl font-normal mb-[70px]">
                Evolução da obra
              </h2>
            </header>

            <div className="construction-evo">

              <div className="swiper-obras-imgs">
                <SwiperCarouselObras data={product.fotos.filter((foto) => foto.escopo === 'obra')} />
              </div>

              <div className="evo-barras flex justify-center items-center">
                <div className="evo-barras-content w-[800px] max-@tablet:w-full flex flex-col items-center justify-center mt-[70px] max-@tablet:mt-[35px]">

                  {/* BARRA TOTAL */}
                  <div className="barra-total w-[800px] max-@tablet:w-full flex max-@tablet:flex-col justify-between max-@tablet:justify-start items-center max-@tablet:gap-3">

                    <span className="font-arame font-normal text-3xl max-@tablet:text-xl max-@tablet:w-full">Total da obra</span>

                    <div className="barra-evo max-@tablet:w-full flex justify-center max-@tablet:justify-start items-center gap-12 max-@tablet:gap-3">
                      <div className="barra-percent w-[370px] max-@tablet:w-[245px] border-[#7A7E83] border-[1px]">
                        <div
                          className="faixaPercent @desktop:flex bg-[#7A7E83] h-[70px] max-@tablet:h-[50px] justify-center items-center font-arame text-[14px] max-h-[170px]"
                          style={{ width: `${product.porcentagem}%` }}
                        >
                        </div>
                      </div>

                      <p className="text-center font-arame font-normal text-3xl max-@tablet:text-xl">{product.porcentagem}%</p>

                    </div>

                  </div>
                  {/* FIM BARRA TOTAL */}


                  {/* START BARRAS EVOLUCAO */}

                  {/* FUNDACAO */}
                  <div className="barra-fundacao w-[800px] mt-8 max-@tablet:w-full flex max-@tablet:flex-col justify-between max-@tablet:justify-start items-center max-@tablet:gap-3">

                    <span className="font-barlow font-normal text-lg max-@tablet:text-base max-@tablet:w-full">Fundação e contenção</span>

                    <div className="barra-evo max-@tablet:w-full flex justify-center max-@tablet:justify-start items-center gap-12 max-@tablet:gap-3">
                      <div className="barra-percent w-[370px] max-@tablet:w-[245px] border-[#7A7E83] border-[1px]">
                        <div
                          className="faixaPercent @desktop:flex bg-[#7A7E83] h-[15px] justify-center items-center font-arame text-[14px] max-h-[170px]"
                          style={{ width: `${product.fundacao}%` }}
                        >
                        </div>
                      </div>

                      <p className="text-center font-arame font-normal text-lg max-@tablet:text-base w-[88px]  max-@tablet:w-[35px]">{product.fundacao}%</p>

                    </div>

                  </div>

                  {/* ESTRUTURA */}
                  <div className="barra-estrutura w-[800px] mt-8 max-@tablet:w-full flex max-@tablet:flex-col justify-between max-@tablet:justify-start items-center max-@tablet:gap-3">

                    <span className="font-barlow font-normal text-lg max-@tablet:text-base max-@tablet:w-full">Estrutura</span>

                    <div className="barra-evo max-@tablet:w-full flex justify-center max-@tablet:justify-start items-center gap-12 max-@tablet:gap-3">
                      <div className="barra-percent w-[370px] max-@tablet:w-[245px] border-[#7A7E83] border-[1px]">
                        <div
                          className="faixaPercent @desktop:flex bg-[#7A7E83] h-[15px] justify-center items-center font-arame text-[14px] max-h-[170px]"
                          style={{ width: `${product.estrutura}%` }}
                        >
                        </div>
                      </div>

                      <p className="text-center font-arame font-normal text-lg max-@tablet:text-base w-[88px]  max-@tablet:w-[35px]">{product.estrutura}%</p>

                    </div>

                  </div>

                  {/* PAREDES */}
                  <div className="barra-paredes w-[800px] mt-8 max-@tablet:w-full flex max-@tablet:flex-col justify-between max-@tablet:justify-start items-center max-@tablet:gap-3">

                    <span className="font-barlow font-normal text-lg max-@tablet:text-base max-@tablet:w-full">Paredes e divisórias</span>

                    <div className="barra-evo max-@tablet:w-full flex justify-center max-@tablet:justify-start items-center gap-12 max-@tablet:gap-3">
                      <div className="barra-percent w-[370px] max-@tablet:w-[245px] border-[#7A7E83] border-[1px]">
                        <div
                          className="faixaPercent @desktop:flex bg-[#7A7E83] h-[15px] justify-center items-center font-arame text-[14px] max-h-[170px]"
                          style={{ width: `${product.paredes}%` }}
                        >
                        </div>
                      </div>

                      <p className="text-center font-arame font-normal text-lg max-@tablet:text-base w-[88px]  max-@tablet:w-[35px]">{product.paredes}%</p>

                    </div>

                  </div>

                  {/* INSTALACOES */}
                  <div className="barra-instalacoes w-[800px] mt-8 max-@tablet:w-full flex max-@tablet:flex-col justify-between max-@tablet:justify-start items-center max-@tablet:gap-3">

                    <span className="font-barlow font-normal text-lg max-@tablet:text-base max-@tablet:w-full">Instalações</span>

                    <div className="barra-evo max-@tablet:w-full flex justify-center max-@tablet:justify-start items-center gap-12 max-@tablet:gap-3">
                      <div className="barra-percent w-[370px] max-@tablet:w-[245px] border-[#7A7E83] border-[1px]">
                        <div
                          className="faixaPercent @desktop:flex bg-[#7A7E83] h-[15px] justify-center items-center font-arame text-[14px] max-h-[170px]"
                          style={{ width: `${product.instalacoes}%` }}
                        >
                        </div>
                      </div>

                      <p className="text-center font-arame font-normal text-lg max-@tablet:text-base w-[88px]  max-@tablet:w-[35px]">{product.instalacoes}%</p>

                    </div>

                  </div>

                  {/* ESQUADRIAS */}
                  <div className="barra-esquadrias w-[800px] mt-8 max-@tablet:w-full flex max-@tablet:flex-col justify-between max-@tablet:justify-start items-center max-@tablet:gap-3">

                    <span className="font-barlow font-normal text-lg max-@tablet:text-base max-@tablet:w-full">Esquadrias</span>

                    <div className="barra-evo max-@tablet:w-full flex justify-center max-@tablet:justify-start items-center gap-12 max-@tablet:gap-3">
                      <div className="barra-percent w-[370px] max-@tablet:w-[245px] border-[#7A7E83] border-[1px]">
                        <div
                          className="faixaPercent @desktop:flex bg-[#7A7E83] h-[15px] justify-center items-center font-arame text-[14px] max-h-[170px]"
                          style={{ width: `${product.esquadrias}%` }}
                        >
                        </div>
                      </div>

                      <p className="text-center font-arame font-normal text-lg max-@tablet:text-base w-[88px]  max-@tablet:w-[35px]">{product.esquadrias}%</p>

                    </div>

                  </div>

                  {/* REVESTIMENTOS INTERNOS */}
                  <div className="barra-revestimentoInterno w-[800px] mt-8 max-@tablet:w-full flex max-@tablet:flex-col justify-between max-@tablet:justify-start items-center max-@tablet:gap-3">

                    <span className="font-barlow font-normal text-lg max-@tablet:text-base max-@tablet:w-full">Revestimentos internos</span>

                    <div className="barra-evo max-@tablet:w-full flex justify-center max-@tablet:justify-start items-center gap-12 max-@tablet:gap-3">
                      <div className="barra-percent w-[370px] max-@tablet:w-[245px] border-[#7A7E83] border-[1px]">
                        <div
                          className="faixaPercent @desktop:flex bg-[#7A7E83] h-[15px] justify-center items-center font-arame text-[14px] max-h-[170px]"
                          style={{ width: `${product.revestimento_in}%` }}
                        >
                        </div>
                      </div>

                      <p className="text-center font-arame font-normal text-lg max-@tablet:text-base w-[88px]  max-@tablet:w-[35px]">{product.revestimento_in}%</p>

                    </div>

                  </div>

                  {/* REVESTIMENTOS EXTERNOS */}
                  <div className="barra-revestimentoExterno w-[800px] mt-8 max-@tablet:w-full flex max-@tablet:flex-col justify-between max-@tablet:justify-start items-center max-@tablet:gap-3">

                    <span className="font-barlow font-normal text-lg max-@tablet:text-base max-@tablet:w-full">Revestimentos externos</span>

                    <div className="barra-evo max-@tablet:w-full flex justify-center max-@tablet:justify-start items-center gap-12 max-@tablet:gap-3">
                      <div className="barra-percent w-[370px] max-@tablet:w-[245px] border-[#7A7E83] border-[1px]">
                        <div
                          className="faixaPercent @desktop:flex bg-[#7A7E83] h-[15px] justify-center items-center font-arame text-[14px] max-h-[170px]"
                          style={{ width: `${product.revestimento_ex}%` }}
                        >
                        </div>
                      </div>

                      <p className="text-center font-arame font-normal text-lg max-@tablet:text-base w-[88px]  max-@tablet:w-[35px]">{product.revestimento_ex}%</p>

                    </div>

                  </div>

                  {/* ACABAMENTOS GERAIS */}
                  <div className="barra-acabamentosGerais w-[800px] mt-8 max-@tablet:w-full flex max-@tablet:flex-col justify-between max-@tablet:justify-start items-center max-@tablet:gap-3">

                    <span className="font-barlow font-normal text-lg max-@tablet:text-base max-@tablet:w-full">Acabamentos gerais</span>

                    <div className="barra-evo max-@tablet:w-full flex justify-center max-@tablet:justify-start items-center gap-12 max-@tablet:gap-3">
                      <div className="barra-percent w-[370px] max-@tablet:w-[245px] border-[#7A7E83] border-[1px]">
                        <div
                          className="faixaPercent @desktop:flex bg-[#7A7E83] h-[15px] justify-center items-center font-arame text-[14px] max-h-[170px]"
                          style={{ width: `${product.acabamentos}%` }}
                        >
                        </div>
                      </div>

                      <p className="text-center font-arame font-normal text-lg max-@tablet:text-base w-[88px]  max-@tablet:w-[35px]">{product.acabamentos}%</p>

                    </div>

                  </div>

                  {/* FIM BARRAS EVOLUCAO */}
                </div>
              </div>
            </div>
          </div>
      </Container>
    </section>
  );
};

export default Index;
