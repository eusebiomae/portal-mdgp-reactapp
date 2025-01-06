import Container from "@/components/Container/Index";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Card from "./Card/Index";
import {
  ENTERPRISES_CARDS1,
  ENTERPRISES_CARDS2,
  ENTERPRISES_CARDS3,
  ENTERPRISES_CARDS4,
  ENTERPRISES_DESTAQ,
} from "@/constants";
import Link from "next/link";
import { IconAddress, IconMeters, IconSuites, ImgSecondProdutoCard, ornament01 } from "@/assets/img";

const Index = () => {
  return (
    <section id="properties" className="relative py-8 @desktop:py-10 overflow-hidden bg-[#C5C8C7] max-@desktop:py-[50px]">
      <Container className="@desktop:py-[150px]">
        <div className="flex @desktop:px-[170px] gap-[100px] @desktop:pb-[200px] relative max-@desktop: max-@desktop:flex-col max-@desktop:gap-[30px] max-@desktop:pb-[150px]">
          <div className="w-[2px] h-[100px] bg-[#2B2B2B] absolute bottom-[70px] max-@desktop:bottom-[30px] left-[50%]"></div>
          <p data-aos="fade-right" data-aos-delay="400" data-aos-duration="2000" className="text-[40px] max-@desktop:text-[30px] max-@desktop:leading-[30px] leading-[40px] uppercase font-arame @desktop:min-w-[7em]">Nosso imóveis autorais.</p>
          <div data-aos="fade-left" data-aos-delay="400" data-aos-duration="2000" className="text-[16px] leading-[32px] flex flex-col gap-[40px] font-barlow">
            <p>Engenharia, arquitetura, design e arte se entrelaçam em perfeita harmonia para a concepção dos nossos imóveis autorais. </p>
            <p>Na busca por traços inéditos, formas contemporâneas e espaços para o bem viver, entregamos projetos únicos e nas regiões mais desejadas de Curitiba.</p>
            <p className="font-semibold">Escolha seu próximo MDGP</p>
          </div>
        </div>

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
              }) => (
                <>
                <div className="" data-aos="fade-left" data-aos-delay="400" data-aos-duration="2000">

                  <div className="relative flex max-@tablet:flex-col" >

                    <div data-aos="fade-left" className="relative flex gap-[30px] items-center max-@desktop:flex-col">
                      <div className="relative w-[740px] h-[500px] max-@desktop:w-screen max-@desktop:h-[415px] overflow-hidden">
                        <Link href="/amira-cabral">
                          <Image
                            className="w-full h-full object-cover  transform transition-transform duration-300 hover:scale-105"
                            src={img}
                            alt=""
                          />
                        </Link>

                        <Link href="/amira-cabral">
                          <Image
                            className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
                            src={logo}
                            alt=""                        
                          />
                        </Link>
                      </div>
                      <div className="textosRigthFicha" data-aos="fade-left" data-aos-delay="400" data-aos-duration="2000">
                        <h2 className="text-[40px] uppercase w-[3.5em] leading-[40px] mb-[30px] font-arame">{slogan}</h2>
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
                      data-aos="fade-right" data-aos-delay="400" data-aos-duration="2000" 
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
                      ">{status}</p>
                    </div>
                  </div>
                  <div className="mt-[30px] flex justify-between @desktop:px-[136px] items-center max-@desktop:flex-col-reverse">
                    <Link className="p-[20px] max-@desktop:mt-[20px] font-[700] border-[3px] border-[#2B2B2B] hover:border-[#7A7E83] ease-in-out duration-300 hover:text-[#7A7E83]" href="/amira-cabral" key={id}>
                      <p className="uppercase font-arame text-[14px] leading-[10.57px] ease-in-out" >conheça o {name}</p>
                    </Link>
                    <Link  href="/amira-cabral" className="overflow-hidden">
                      <Image className="max-w-[500px] w-full transform transition-transform duration-300 hover:scale-105" src={img2} alt="" />
                    </Link>
                  </div>
                </div>
                </>
                
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
                      <p className="bg-[#7A7E83]  tracking-[7px] w-fit p-[8px] font-arame text-[12px] leading-[9.06px] text-white mb-[20px] uppercase">{status}</p>
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
                        <Link  href="arbo-cabral">
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
  );
};

export default Index;
