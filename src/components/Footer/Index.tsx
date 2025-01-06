import Container from "@/components/Container/Index";
import Image from "next/image";
import { logoToca55White, logo05, ornament03, LogoFooter, IconCentralVendas, IconOffice, IconMDGP, iconInsta, iconYoutube, iconLinkedin } from "@/assets/img";
import { BsFillTelephoneForwardFill, BsWhatsapp } from "react-icons/bs";

const dateYear = new Date().getFullYear();

const Index = () => {
  return (
    <footer className="bg-[#2B2B2B] text-white pt-[138px] pb-[34px] max-@desktop:pt-[50px] relative z-[1]">
      <Container className="space-y-10">
        <div className="flex flex-col-reverse @desktop:flex-row pb-[60px] border-b-[3px] ">
          <div className="flex-1 flex flex-row gap-5 max-@desktop:flex-col">
            <a href="/">
              <Image src={LogoFooter} alt="logo MDGP" className="w-[100px] h-[100px] max-@desktop:hidden"/>
            </a>

            <div className="flex gap-[54px] @desktop:ml-[100px] max-@desktop:gap-[30px]">
              <div className="">
                <ul className="flex flex-col gap-[30px] uppercase max-@desktop:text-[12px] font-arame tracking-[1.2px]">
                  <li><a href="/enterprises">empreendimentos</a></li>
                  <li><a href="/a-mdgp">sobre</a></li>
                  <li><a href="/blog">Blog</a></li>
                  <li><a href="/revista">REVISTA</a></li>
                </ul>
              </div>
              {/* <div className="">
                <ul className="flex flex-col gap-[30px] uppercase max-@desktop:text-[12px] font-arame">
                  <li><a href="">CONTATO</a></li>
                  <li><a href="">TRABALHE CONOSCO</a></li>
                  <li><a href="">SEJA UM FORNECEDOR</a></li>
                  <li><a href="">COMPRAMOS SEU TERRENO</a></li>
                  <li className="border-white border-2 flex justify-center align-middle p-2"><a href="">ÁREA DO CLIENTE</a></li>
                </ul>
              </div> */}
            </div>
          </div>
          <div className="
          max-@desktop:flex
          max-@desktop:justify-between
          max-@desktop:pb-[50px]
          max-@desktop:mb-[50px]
          max-@desktop:border-b-[3px]
          ">
            <a href="/">
              <Image src={LogoFooter} alt="logo MDGP" className="w-[70px] h-[70px] @desktop:hidden"/>
            </a>
            <ul className="flex flex-col gap-10 max-@desktop:text-[12px] font-barlow">
              <li className="flex align-top gap-[15px]">
                <Image className="h-[18px] w-[18px]" src={IconCentralVendas} alt=""></Image>
                <a href="https://wa.me/41992762538?" target="_blank">
                  <strong>Central de vendas</strong><br/>
                                  +55 41 99276 2538
                </a>
                </li>
              <li className="flex align-top gap-[15px]">
                <Image className="h-[18px] w-[18px]" src={IconOffice} alt=""></Image>
                <a href="tel:+554135016776">
                    <strong>Escritório</strong><br/>
                            +55 41 3501  6776
                </a>
              </li>
              <li className="flex align-top gap-[15px]">
                <Image className="h-[18px] w-[18px]" src={IconMDGP} alt=""></Image>
                <a href="https://maps.app.goo.gl/56HBNUmEhEPcv4SBA" target="_blank">
                <strong>MDGP | Edifício Ar 3000</strong><br/>
                Praça São Paulo da Cruz, 50<br/>
                Sala 1303
                - CEP 80030.480<br/>
                Cabral – Curitiba – PR 
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-10 @desktop:flex-row @desktop:items-center">
          <div>
            <ul className="
            flex 
            gap-[25px] 
            align-center
            max-@desktop:gap-[40px]
            max-@desktop:border-b-[3px]
            max-@desktop:pb-[50px]
            font-arame
            ">
              <li className="uppercase">
                <a target="_blank" href="https://www.instagram.com/mdgpincorporadora/">
                  <Image
                    className="icon-instagram w-6 h-6"
                    src={iconInsta}
                    alt="Icone Link Instagram"
                  />
                </a>
              </li>
              <li className="uppercase">
                <a target="_blank" href="https://www.youtube.com/@mdgpincorporacoes">
                  <Image
                    className="icon-instagram w-7 h-7"
                    src={iconYoutube}
                    alt="Icone Link Youtube"
                  />
                </a>
              </li>
              <li className="uppercase">
                <a target="_blank" href="https://www.linkedin.com/company/mdgp">
                  <Image
                    className="icon-instagram w-6 h-6"
                    src={iconLinkedin}
                    alt="Icone Link Linkedin"
                  />
                </a>
              </li>
            </ul>
          </div>
          <p className="max-@desktop:text-center max-@desktop:text-[12px] font-barlow">2023  |  MDGP Incorporações  |  Todos os direitos reservados  |   Política de privacidade</p>
        </div>
      </Container>
    </footer>
  );
};

export default Index;
