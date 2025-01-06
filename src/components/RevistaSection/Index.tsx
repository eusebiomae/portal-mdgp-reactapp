"use client";

import { SetStateAction, useContext, useState } from "react";
import Container from "@/components/Container/Index";
import TitleSectionTourImages from "@/components/TitleSectionTourImages/Index";
import SwiperCarouselTour from "@/components/SwiperCarouselTour/Index";
import SwiperCarouselRevista from "@/components/SwiperCarouselRevista/Index";
import { APARTMENTS, REVISTA } from "@/constants";
import Image from "next/image";
import { blogCard, blogCTA, LogoHeader, ornament04, ornament05, revistaEd05, revistaEd06 } from "@/assets/img";
import Link from "next/link";
import axios from "axios";
import { HubidContext } from "../Contexts/HubidContext";
import { Revistas } from "@/@types/Revistas";

interface EmailNewsLetter  {
  id_produto?: string;
  revistas?: Revistas[];
}

const Index: React.FC<EmailNewsLetter> = ({id_produto, revistas}) => {
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  console.log(revistas);

  const session = useContext(HubidContext);

  const handleEmailChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      await axios.post('https://hubid360.com.br/api/mensagem', 
        { 
          email,
          id_produto: id_produto ?? session.id_produto,
        }
      );
      setShowPopup(true);
      setEmail(''); // Limpar o campo de input
    } catch (error) {
      console.error('Erro ao enviar e-mail. Tente novamente.', error);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <a href="/">
        <Image src={LogoHeader} alt="Logo MDGP" className="absolute left-[30px] top-[20px] w-[50px] z-[1]"></Image>
      </a>
      <Container>
        <section id="revista" className="revista pb-5 relative pt-[140px]">

          <div className="revista-intro mb-[50px]">
            <h2 className="title text-[#2B2B2B] tracking-[7px] uppercase text-[10px] font-arame text-2xl font-bold mb-[30px] max-@tablet:mb-[20px]">Revista</h2>
            <p className="subtitle font-arame text-[45px] max-@tablet:text-[30px] font-normal leading-[45px] max-@tablet:leading-[30px] w-[362px] max-@tablet:w-[245px]">baixe a edição virtual da revista mdpg</p>
          </div> 

          {/* <div className="revista-carousel max-@tablet:hidden">
            <SwiperCarouselRevista data={REVISTA} />
          </div>       */}

          <div className="revista-cards">

            <div className="items flex flex-wrap max-@tablet:flex-col w-full max-@tablet:w-[340px] items-center @desktop:justify-between">

              {revistas && revistas.map((item) => (                
                <div
                  key={item.id}
                  className="itemCard w-[340px] flex gap-[15px] mb-[50px]"
                >  
                  <div className="image-btn w-[175px] flex flex-col">
                    <Image 
                      width={0}
                      height={0}  
                      sizes="100vw"
                      src={item.imagem.original} 
                      alt="Imagem Revista Card" 
                      className="w-[175px] h-[248px]"
                    /> 

                    <a href={`https://mdgp.dev.id360.net/${item.arquivo}`} target="_blank">
                      <button 
                        className="
                          p-[10px]
                          mx-auto
                          mt-[30px]
                          w-[130px]
                          font-arame 
                          font-bold
                          uppercase 
                          text-[10px] 
                          border-[3px] 
                          border-[#2B2B2B] 
                          hover:border-[#7A7E83] 
                          ease-in-out duration-300 
                          hover:text-[#7A7E83]"                    
                        >
                        baixar revista
                      </button>
                    </a>
                    
                  </div>                

                  <div className="infos-itemCard w-[150px]">
                    <div className="infos-headerCard flex flex-col">
                      <p className="font-arame text-[20px] font-normal leading-[22px]">Edição {item.edicao}</p>
                      <p className="font-barlow text-[16px] font-normal mt-[10px]">{item.descricao}</p>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div> 

        </section>

      </Container>

      <section className="blog-cta relative flex items-center justify-center py-[70px] bg-[#C5C8C7]">

        <Container className="relative h-full max-@tablet:h-auto flex  max-@tablet:flex-col justify-center items-center">

          <Image src={blogCTA} alt="Image CTA Acompanhe" className="max-@tablet:w-[215px] max-@tablet:absolute max-@tablet:right-0 max-@tablet:top-0"></Image>

          <div className="w-[769px] mt-[30px] ml-[-45px] max-@tablet:ml-0 relative max-@desktop:w-full">
            
            <p className="text-[30px] text-[#2B2B2B] uppercase leading-[30px] font-arame w-[210px]">ACOMPANHE AS NOVIDADES DA MDGP</p>

            <div className="border-t-[3px] border-[#2B2B2B] mt-[30px] max-@tablet:mt-[10px] pt-[30px] flex justify-end  max-@tablet:items-start gap-5 items-center max-@desktop:flex-col">
              <p className="text-[16px] max-@desktop:mb-[20px] max-@tablet:mb-0 max-@tablet:mt-[120px] font-barlow">
                Cadastre-se para receber nossa newsletter
              </p>

              <div className="items-start flex">
                <input 
                  className="w-[257px] h-[51px] max-@desktop:w-[200px] max-@desktop:h-[45px] bg-[#C5C8C7] border-[1px] border-[#2B2B2B] p-[13px] text-[#2B2B2B]" 
                  placeholder="Digite seu e-mail"
                  value={email} 
                  type="email" 
                  onChange={handleEmailChange} 
                />
                <button 
                  className="w-[114px] h-[51px] max-@desktop:h-[45px] border-[3px] border-[#2B2B2B] uppercase text-[14px] font-arame hover:border-[#7A7E83] ease-in-out duration-300 hover:text-[#7A7E83]"
                  onClick={handleSubmit}
                >Enviar</button>
              </div>
            </div>
          </div>

        </Container>
        {showPopup && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#c5c8c7] w-full z-50">
            <div className="bg-white p-6 rounded shadow-lg text-center w-[790px] max-@desktop:w-full mx-5">
            <p>Bem-vindo à nossa newsletter!</p>
            <p>Estamos felizes em ter você conosco. Prepare-se para receber nossas melhores dicas e ofertas.</p>
              <button 
                className="mt-4 px-4 py-2 bg-[#2B2B2B] text-white rounded hover:bg-[#7A7E83]" 
                onClick={closePopup}
              >
                Fechar
              </button>
            </div>
          </div>
        )}

      </section>
    </>
  );
};

export default Index;
