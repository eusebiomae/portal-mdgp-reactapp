"use client"

import { LogoHeader, blogCTA, blogCard, blogHero, blogHeroMob } from "@/assets/img";
import Container from "@/components/Container/Index";
import Image from "next/image";
import { SetStateAction, useContext, useState } from "react";
import { motion } from 'framer-motion';
import Link from "next/link";
import axios from "axios";
import {
  ENTERPRISES_CARDS1,
  ENTERPRISES_CARDS2,
  ENTERPRISES_CARDS3,
  ENTERPRISES_CARDS4,
  ENTERPRISES_DESTAQ,
} from "@/constants";
import { IconAddress, IconMeters, IconSuites, ImgSecondProdutoCard, ornament01 } from "@/assets/img";
import { HubidContext } from "../Contexts/HubidContext";

interface EmailNewsLetter  {
  id_produto?: string;
}

const Index: React.FC<EmailNewsLetter> = ({id_produto}) => {
  
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);
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
      {/* HERO */}
      <section className="empreendimentos-hero relative py-[140px] bg-white overflow-hidden">
          <Container>
            <div className="destaque-title relative ml-[145px] max-@desktop:ml-0"
              data-aos="fade-right" 
              data-aos-duration="1200"
            >
                <div className="title w-[520px] max-@desktop:w-full">
                  <p className="font-arame text-[10px] font-bold tracking-[7px] mb-10 max-@tablet:mb-5">empreendimentos</p>
                  <p className="font-arame text-[45px] max-@tablet:text-[30px] font-normal leading-[45px] max-@tablet:leading-[30px] max-@desktop:w-full">Forma, arte e função que se conectam aos seus desejos.</p>
                </div>
                <div className="textos w-[470px] max-@desktop:w-full mt-[30px] font-barlow text-base text-[#2B2B2B] ml-[360px] max-@desktop:ml-0">
                  <p>
                    Engenharia, arquitetura, design e arte se entrelaçam em perfeita harmonia para a concepção dos nossos imóveis autorais.
                  </p> <br />
                  <p>
                    Na busca por traços inéditos, formas contemporâneas e espaços para o bem viver, entregamos projetos únicos e nas regiões mais desejadas de Curitiba.
                  </p>
                </div>
            </div>
          </Container>
      </section>

      {/* EMPREENDIMENTOS */}
      <section className="empreendimentos-cards py-[70px] bg-[#C5C8C7]">
        <Container>
          <div className="relative z-[1]">
            <div className="cardsHero">

              {ENTERPRISES_DESTAQ.map(
                ({
                  img,
                  img2,
                  logo,
                  status,
                  id,
                  slogan,
                  name,
                  meters,
                  address,
                  suites,
                  button,
                  slug, // Certifique-se de que o slug está presente no objeto
                }) => (
                  <div key={id} className="" data-aos="fade-left" data-aos-delay="400" data-aos-duration="2000">
                    <div className="relative flex max-@tablet:flex-col">
                      <div data-aos="fade-left" className="relative flex gap-[30px] items-center max-@desktop:flex-col">
                        <div className="relative w-[740px] h-[500px] max-@desktop:w-screen max-@desktop:h-[415px] overflow-hidden">
                          {/* Atualize os links para usar o slug dinâmico */}
                          <Link href={`/amira-cabral`}>
                            <Image
                              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                              src={img}
                              alt=""
                            />
                          </Link>

                          <Link href={`/amira-cabral`}>
                            <Image
                              className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
                              src={logo}
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="" data-aos="fade-left" data-aos-delay="400" data-aos-duration="2000">
                          <h2 className="text-[40px] uppercase w-[3.5em] leading-[40px] mb-[30px] font-arame">{slogan}</h2>
                          <div className="">
                            <ul className="font-barlow">
                              <li className="flex gap-[10px] items-center pb-[5px] mb-[5px] border-b-[2px] border-[#2B2B2B]">
                                <Image src={IconMeters} alt="" />
                                <p className="font-barlow text-base leading-7">{meters}</p>
                              </li>
                              <li className="flex gap-[10px] items-center pb-[5px] mb-[5px] border-b-[2px] border-[#2B2B2B]">
                                <Image src={IconSuites} alt="" />
                                <p className="font-barlow text-base leading-7">{suites}</p>
                              </li>
                              <li className="flex gap-[10px] items-center">
                                <Image src={IconAddress} alt="" />
                                <p className="font-barlow text-base leading-7">{address}</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p
                          data-aos="fade-right"
                          data-aos-delay="400"
                          data-aos-duration="2000"
                          className="
                            absolute 
                            top-0 
                            right-[-109px]
                            p-[8px] 
                            bg-[#2B2B2B] 
                            text-[12px] 
                            leading-[9.06px]
                            text-white 
                            tracking-[0.5em] 
                            uppercase 
                            font-arame
                            max-@desktop:left-[20px]
                            max-@desktop:top-[20px]
                            max-w-fit
                          "
                        >
                          {status}
                        </p>
                      </div>
                    </div>
                    <div className="mt-[30px] flex justify-between @desktop:px-[136px] items-center max-@desktop:flex-col-reverse">
                      <Link
                        className="p-[20px] max-@desktop:mt-[20px] font-[700] border-[3px] border-[#2B2B2B] hover:border-[#7A7E83] ease-in-out duration-300 hover:text-[#7A7E83]"
                        href={`/amira-cabral`}
                      >
                        <p className="uppercase font-arame text-[14px] leading-[10.57px] ease-in-out">
                          conheça o {name}
                        </p>
                      </Link>
                      <Link href={`/amira-cabral`} className="overflow-hidden">
                        <Image
                          className="max-w-[500px] w-full transform transition-transform duration-300 hover:scale-105"
                          src={img2}
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                )
              )}


              {/* CARD 1 */}
              {ENTERPRISES_CARDS1.map(
                ({
                  img,
                  img2,
                  logo,
                  status,
                  id,
                  slogan,
                  name,
                  meters,
                  address,
                  suites,
                  button,
                }) => (
                  <>
                  <div className="" data-aos="fade-left" data-aos-delay="400" data-aos-duration="2000">

                    <div className="relative flex max-@tablet:flex-col mt-[140px] max-@desktop:mt-[50px]">

                      <div className="relative flex gap-[30px] items-center max-@desktop:flex-col">
                        <div className="relative w-[740px] h-[500px] max-@desktop:w-screen max-@desktop:h-[415px] overflow-hidden">
                        <Link  href="/andaz-cabral">
                          <Image
                            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                            src={img}
                            alt=""
                          />
                        </Link>
                        <Link  href="/andaz-cabral">
                          <Image
                          className="max-w-[270px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
                          src={logo}
                          alt=""
                          />
                        </Link>
                        </div>
                        <div className="" data-aos="fade-left" data-aos-delay="400" data-aos-duration="2000">
                          <h2 className="text-[40px] uppercase w-[8em] leading-[40px] mb-[30px] font-arame">{slogan}</h2>
                          <div className="">
                            <ul className="font-barlow">
                              <li className="flex gap-[10px] items-center 
                              pb-[5px] mb-[5px] border-b-[2px] border-[#2B2B2B]">
                                <Image src={IconMeters} alt=""></Image>
                                <p className="font-barlow text-base leading-7">{meters}</p>
                              </li>
                              <li className="flex gap-[10px] items-center
                              pb-[5px] mb-[5px] border-b-[2px] border-[#2B2B2B]">
                                <Image src={IconSuites} alt=""></Image>
                                <p className="font-barlow text-base leading-7">{suites}</p>
                              </li>
                              <li className="flex gap-[10px] items-center">
                                <Image src={IconAddress} alt=""></Image>
                                <p className="font-barlow text-base leading-7">{address}</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p 
                        data-aos="fade-left" data-aos-delay="400" data-aos-duration="2000" 
                        className="
                        absolute 
                        top-0 
                        @desktop:right-[-109px] 
                        font-arame
                        p-[8px] 
                        bg-[#2B2B2B] 
                        text-[12px] 
                        leading-[9.06px] 
                        text-white 
                        tracking-[0.5em] 
                        uppercase
                        max-@desktop:left-[20px]
                        max-@desktop:top-[20px]
                        ">{status}</p>
                      </div>
                    </div>
                    <div className="mt-[30px] flex justify-between @desktop:px-[136px] items-center max-@desktop:flex-col-reverse">
                      <Link className="p-[20px] max-@desktop:mt-[20px] font-[700] border-[3px] border-[#2B2B2B] hover:border-[#7A7E83] ease-in-out duration-300 hover:text-[#7A7E83]" href="/andaz-cabral" key={id}>
                        <p className="uppercase text-[14px] leading-[10.57px] font-arame">conheça o {name}</p>
                      </Link>
                      <Link  href="/andaz-cabral" className="overflow-hidden">
                        <Image className="max-w-[500px] w-full transform transition-transform duration-300 hover:scale-105" src={img2} alt="" />
                      </Link>


                    </div>
                  </div>
                  </>
                  
                )
              )}          

              <div className="flex justify-center gap-[90px] max-@tablet:flex-col max-@desktop:mt-[50px] mt-[140px] max-@desktop:gap-[50px]">
                {/* CARD 3 */}
                <div className="w-[405px] max-@tablet:w-full">
                  {ENTERPRISES_CARDS3.map(
                    ({
                      img,
                      status,
                      id,
                      slogan,
                      meters,
                      address,
                      suites,
                      button,
                    }) => (
                      <>
                      <div className="" data-aos="fade-right" data-aos-delay="400" data-aos-duration="2000">
                        <p className="bg-[#7A7E83] tracking-[7px] w-fit p-[8px] font-arame text-[12px] leading-[9.06px] text-white mb-[20px] uppercase">{status}</p>
                        <p className="font-arame text-[30px] leading-[30px]">{slogan}</p>


                        <div className="overflow-hidden my-[20px]">
                          <Link  href="/atman-cabral">
                            <Image className="w-full min-h-[500px] object-cover max-@desktop:min-h-[270px] transform transition-transform duration-300 hover:scale-105" src={img} alt=""/>
                          </Link>
                        </div>

                        <div className="">
                          <ul className="font-barlow">
                            <li className="flex gap-[10px] items-center 
                            pb-[5px] mb-[5px] border-b-[2px] border-[#2B2B2B]">
                              <Image src={IconMeters} alt=""></Image>
                              <p className="font-barlow text-base leading-7">{meters}</p>
                            </li>
                            <li className="flex gap-[10px] items-center
                            pb-[5px] mb-[5px] border-b-[2px] border-[#2B2B2B]">
                              <Image src={IconSuites} alt=""></Image>
                              <p className="font-barlow text-base leading-7">{suites}</p>
                            </li>
                            <li className="flex gap-[10px] items-center">
                              <Image src={IconAddress} alt=""></Image>
                              <p className="font-barlow text-base leading-7">{address}</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      </>
                    )
                  )}
                </div>

                {/* CARD 4 */}
                <div className="w-[405px] max-@tablet:w-full">
                  {ENTERPRISES_CARDS4.map(
                    ({
                      img,
                      status,
                      id,
                      slogan,
                      meters,
                      address,
                      suites,
                      button,
                    }) => (
                      <>
                      <div className="" data-aos="fade-left" data-aos-delay="400" data-aos-duration="2000">
                        <p className="bg-[#7A7E83] tracking-[7px] w-fit p-[8px] font-arame text-[12px] leading-[9.06px] text-white mb-[20px] uppercase">{status}</p>
                        <p className="font-arame text-[30px] leading-[30px]">{slogan}</p>


                        <div className="overflow-hidden my-[20px]">
                          <Link  href="/arbo-cabral">
                            <Image className="w-full min-h-[500px] object-cover max-@desktop:min-h-[270px] transform transition-transform duration-300 hover:scale-105" src={img} alt=""/>
                          </Link>
                        </div>


                        <div className="">
                          <ul className="font-barlow">
                            <li className="flex gap-[10px] items-center 
                            pb-[5px] mb-[5px] border-b-[2px] border-[#2B2B2B]">
                              <Image src={IconMeters} alt=""></Image>
                              <p className="font-barlow text-base leading-7">{meters}</p>
                            </li>
                            <li className="flex gap-[10px] items-center
                            pb-[5px] mb-[5px] border-b-[2px] border-[#2B2B2B]">
                              <Image src={IconSuites} alt=""></Image>
                              <p className="font-barlow text-base leading-7">{suites}</p>
                            </li>
                            <li className="flex gap-[10px] items-center">
                              <Image src={IconAddress} alt=""></Image>
                              <p className="font-barlow text-base leading-7">{address}</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      </>
                    )
                  )}
                </div>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* PRODUTOS ENTREGUES */}
      <section className="empreendimentos-produtos-entregues py-[70px]">
        <Container>
          <div className="title w-[450px] max-@desktop:w-full">
            <p className="font-arame text-[10px] font-bold tracking-[7px] mb-5 max-@tablet:mb-5">produtos entregues</p>
            <p className="font-arame text-[45px] max-@tablet:text-[30px] font-normal leading-[45px] max-@tablet:leading-[30px] max-@tablet:w-[245px]">Excelência <br /> em cada projeto</p>
          </div>

          <div className="flex justify-center gap-[20px] max-@tablet:flex-col max-@desktop:mt-[50px] mt-[40px] max-@desktop:gap-[50px]">
            {/* CARD 5 */}
            <div className="w-[340px] max-@tablet:w-full">
              {ENTERPRISES_CARDS3.map(
                ({
                  img,
                  status,
                  id,
                  slogan,
                  meters,
                  address,
                  suites,
                  button,
                }) => (
                  <>
                  <div className="" data-aos="fade-right" data-aos-delay="400" data-aos-duration="2000">

                    <div className="overflow-hidden mb-[10px]">
                      <Link  href="/atman-cabral">
                        <Image className="w-full h-[370px] object-cover max-@desktop:min-h-[270px] transform transition-transform duration-300 hover:scale-105" src={img} alt=""/>
                      </Link>
                    </div>

                    <p className="font-arame text-[22px] leading-[30px]">{slogan}</p>

                    <div className="mt-[5px]">
                      <ul className="font-barlow">
                        <li className="flex gap-[10px] items-center 
                        pb-[5px] mb-[5px] border-b-[2px] border-[#2B2B2B]">
                          <Image src={IconMeters} alt=""></Image>
                          <p className="font-barlow text-base leading-7">{meters}</p>
                        </li>
                        <li className="flex gap-[10px] items-center
                        pb-[5px] mb-[5px] border-b-[2px] border-[#2B2B2B]">
                          <Image src={IconSuites} alt=""></Image>
                          <p className="font-barlow text-base leading-7">{suites}</p>
                        </li>
                        <li className="flex gap-[10px] items-center">
                          <Image src={IconAddress} alt=""></Image>
                          <p className="font-barlow text-base leading-7">{address}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  </>
                )
              )}
            </div>

            {/* CARD 6 */}
            <div className="w-[340px] max-@tablet:w-full">
              {ENTERPRISES_CARDS4.map(
                ({
                  img,
                  status,
                  id,
                  slogan,
                  meters,
                  address,
                  suites,
                  button,
                }) => (
                  <>
                  <div className="" data-aos="fade-right" data-aos-delay="400" data-aos-duration="2000">

                    <div className="overflow-hidden mb-[10px]">
                      <Link  href="/arbo-cabral">
                        <Image className="w-full h-[370px] object-cover max-@desktop:min-h-[270px] transform transition-transform duration-300 hover:scale-105" src={img} alt=""/>
                      </Link>
                    </div>

                    <p className="font-arame text-[22px] leading-[30px]">{slogan}</p>

                    <div className="mt-[5px]">
                      <ul className="font-barlow">
                        <li className="flex gap-[10px] items-center 
                        pb-[5px] mb-[5px] border-b-[2px] border-[#2B2B2B]">
                          <Image src={IconMeters} alt=""></Image>
                          <p className="font-barlow text-base leading-7">{meters}</p>
                        </li>
                        <li className="flex gap-[10px] items-center
                        pb-[5px] mb-[5px] border-b-[2px] border-[#2B2B2B]">
                          <Image src={IconSuites} alt=""></Image>
                          <p className="font-barlow text-base leading-7">{suites}</p>
                        </li>
                        <li className="flex gap-[10px] items-center">
                          <Image src={IconAddress} alt=""></Image>
                          <p className="font-barlow text-base leading-7">{address}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  </>
                )
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="empreendimentos-cta relative flex items-center justify-center py-[70px] bg-[#C5C8C7]">

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
