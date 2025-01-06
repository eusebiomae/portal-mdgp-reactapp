"use client";

import Container from "@/components/Container/Index";
import Image from "next/image";
import { 
  aboutDestaque,
  aboutDetail,
  aboutHero,
  aboutMarlus,
  aboutVideo, 
  LogoHeader,
} from "@/assets/img";
import SwiperCarouselAbout from "@/components/SwiperCarouselAbout/Index";
import { Portfolios } from "@/@types/Portfolios";
import { NextPage } from "next";

interface ProductProps {
  portfolios?: Portfolios[];
}


const Index: NextPage<ProductProps> = ({portfolios}) => {

  return (
    <>
      <a href="/">
        <Image src={LogoHeader} alt="Logo MDGP" className="absolute left-[30px] top-[20px] w-[50px] z-[2]"></Image>
      </a>

      <div className=" bg-[#F5F5F5]">
        <div className="containerAbout space-y-5 overflow-hidden hero-container max-@tablet:px-0 relative z-[1] min-w-screen-@fullscreen bg-[#F5F5F5]">
          <section className="hero py-8 my-[70px] @desktop:py-10 max-@tablet:py-0 px-[150px] max-@tablet:px-0 max-@tablet:w-[330px] relative z-[1] bg-[#F5F5F5]">
              
              <div className="about-hero flex max-@tablet:flex-col-reverse @desktop:ml-[-70px]"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <Image src={aboutHero} alt="" className="w-[520px] h-[550px] max-@tablet:w-[365px] max-@tablet:h-[330px] max-@tablet:mt-[-10px]"></Image>

                <p 
                  className="font-arame relative text-6xl max-@tablet:text-3xl mt-[70px] max-@tablet:mt-6 ml-[-75px] max-@tablet:ml-0 w-[548px] max-@tablet:w-full max-@tablet:mb-[-16px] max-@tablet:pl-[25px] max-@tablet:pr-0"
                >
                  Projetos autorais, contemporâneos e que privilegiam o bem viver
                </p>
              </div>

              <div 
                className="about-hero flex max-@tablet:flex-col items-end justify-end gap-[320px] max-@tablet:gap-[30px] mt-[-100px] max-@tablet:mt-[50px] h-[500px] max-@tablet:h-auto max-@tablet:pl-[25px] max-@tablet:pr-0"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="w-[430px] max-@tablet:w-full max-@tablet:mb-[30px]">
                  <p 
                    className="font-arame text-xs tracking-[8.4px]" 
                  >
                    a mdgp
                  </p>

                  <p  
                    className="font-barlow text-base leading-8 mt-[30px] max-@tablet:mt-[20px]"
                  >
                    Na sinergia entre engenharia, arquitetura e design, revelamos a <strong>forma. </strong> 
                    Pelo nosso repertório e com um olhar sensível para o universo ao nosso redor, evocamos a <strong>arte.</strong>
                  </p>

                  <p 
                    className="font-barlow text-base leading-8 mt-[30px] max-@tablet:mt-[20px]"
                  >
                    E na busca pelo bem viver das pessoas, em harmonia com 
                    a cidade, delineamos a <strong>função.</strong> Uma tríade que guia o jeito MDGP de fazer e nos leva a materializar 
                    empreendimentos tão singulares.
                  </p>
                </div>

                <Image src={aboutVideo} alt="" className="w-[340px] h-[395px] max-@tablet:h-[340px]"></Image>
              </div>
          </section>
        </div>
      </div>

      <section className="mdgp-numeros w-full ml-auto pt-[70px] pb-0  relative z-[1]"
        // style={{ background: typeof window !== 'undefined' && window.innerWidth <= 768 ? '#C5C8C7' : 'linear-gradient(90deg, #f5f5f5 7%, rgba(197,200,199,1) 7%)' }}
      >
        <Container>
          <div className="about-content flex gap-28 max-@tablet:gap-12 justify-start px-[70px] mb-[70px] max-@tablet:px-0 max-@tablet:flex-col">
            <div className="about-construction">
              <p 
                className="font-arame text-xs tracking-[8.4px]"
              >
                mdgp em números
              </p>
              
              <div className="construction-items w-[340px] max-@tablet:w-full mt-5">

                <div className="item border-b-[3px] border-b-black py-5">
                  <p className="font-arame text-[20px] font-normal text-xl">desde</p>
                  <p className="font-arame text-[30px] font-normal text-3xl">2008</p>
                </div>

                <div className="item border-b-[3px] border-b-black py-5">
                  <p className="font-arame text-[30px] font-normal text-3xl">23</p>
                  <p className="font-arame text-[20px] font-normal text-xl">empreendimentos entregues entre autorais e com participação</p>
                </div>

                <div className="item border-b-[3px] border-b-black py-5">
                  <p className="font-arame text-[30px] font-normal text-3xl">4.461</p>
                  <p className="font-arame text-[20px] font-normal text-xl">residenciais entregues ou em construção</p>
                </div>

                <div className="item pt-5">
                  <p className="font-arame text-[30px] font-normal text-3xl">853.080,81 m²</p>
                  <p className="font-arame text-[20px] font-normal text-xl">construídos</p>
                </div>

              </div>
            </div>

            <div className="about-imageConstruct flex max-@tablet:flex-row-reverse w-[540px] max-@tablet:w-full items-end ">

              <Image src={aboutDestaque} alt="" className="w-[430px] max-@tablet:w-[245px] h-[540px] max-@tablet:h-[370px] object-cover"></Image>

              <p 
                className="
                  font-arame 
                  font-normal 
                  text-[45px] 
                  max-@tablet:text-[30px]
                  leading-[45px] 
                  max-@tablet:leading-[30px]
                  tracking-[1px] 
                  mb-[66px]
                  max-@tablet:mb-[190px]
                  ml-[-160px] 
                  max-@tablet:ml-0 
                  max-@tablet:mr-[-110px] 
                  w-[301px]                  
                  max-@tablet:w-[190px]
                  text-white" 
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                Construímos para estar mais perto de você
              </p>

            </div>
          </div>
        </Container>
        <div className="bg-[#f5f5f5] w-full h-[70px]"></div>
      </section>


      <section className="diferenciais parallax relative bg-[#f5f5f5]">

        <div className="diferenciaisContent h-[2000px] max-@tablet:h-[2735px] bg-fixed bg-cover bg-no-repeat flex items-start justify-end">
          <Image src={aboutDetail} alt="" className="w-[43%] max-@tablet:w-[25%] h-[100%] object-cover max-@tablet:object-center fixed z-0 top-0 left-0"/>

          <div className="titleDiferencaisParallax01 sticky z-[1] top-0 max-@tablet:top-0 mr-[80px] max-@tablet:left-[25%] max-@tablet:mr-[-25px] max-@tablet:p-7 max-@tablet:bg-[#f5f5f5] max-@tablet:w-full max-@tablet:h-[180px]">
            <p
              className="
                font-arame 
                text-[10px] 
                font-bold 
                tracking-[7px] 
                mb-10 
                max-@tablet:mb-0
                absolute 
                max-@tablet:relative
                right-[14px] 
                max-@tablet:right-0
                top-10
                max-@tablet:top-0"
            >
              diferenciais
            </p>

            <p
              className="
                font-arame 
                text-[45px]
                max-@tablet:text-[30px] 
                font-normal 
                leading-[45px] 
                max-@tablet:leading-7
                absolute 
                max-@tablet:relative
                right-[-90px]
                max-@tablet:right-0
                top-[88px] 
                max-@tablet:top-[25px]
                w-[250px] 
                h-[180px]
                max-@tablet:h-auto
                "
            >
              Projetos pensados em cada detalhe
            </p>
          </div>

          
          <div className="textosParallax relative text-start p-10 pt-[270px] max-@tablet:pt-[90px] text-base font-bold w-[430px] max-@tablet:w-[78%] leading-5 mr-[20%] max-@tablet:mr-0 max-@tablet:mt-[180px]">

            <div className="item border-b-[3px] border-b-black pb-10">
              <p className="font-arame text-[22px] font-normal leading-[22px] mb-5 w-[185px]">Relacionamento com o cliente</p>
              <p className="font-barlow text-4 font-normal leading-7">
                Acreditamos em um atendimento com mais ‘olho no olho’ ao longo de toda a jornada do cliente.
                Buscamos estabelecer uma relação sólida e de longo prazo, que se configura em um contato mais
                direto e numa abordagem focada na compreensão dos desejos de cada família.
              </p>
            </div>

            <div className="item border-b-[3px] border-b-black pb-10 mt-[40px]">
              <p className="font-arame text-[22px] font-normal leading-[22px] mb-5 w-[185px]">Personalização</p>
              <p className="font-barlow text-4 font-normal leading-7">
                Quando o assunto é materializar sonhos, cada decisão importa.
                Nossa personalização procura concretizar, sempre que viável, os anseios e necessidades relacionados ao novo lar.
              </p>
              <p className="font-barlow text-4 font-normal leading-7 mt-10">
                E é exatamente isso o que nos torna únicos: a nossa maleabilidade e a disponibilidade para nos adaptarmos às
                expectativas dos nossos clientes.
              </p>
            </div>

            <div className="item border-b-[3px] border-b-black pb-10 mt-[40px]">
              <p className="font-arame text-[22px] font-normal leading-[22px] mb-5 w-[185px]">Diferenciais construtivos e inovações</p>
              <p className="font-barlow text-4 font-normal leading-7">
                Em cada empreendimento, privilegiamos aspectos que valorizam a vida das pessoas enquanto promovemos também o respeito ao meio ambiente.
                Assim, entre outras decisões construtivas:
              </p>
              <ul className="font-barlow text-4 font-normal leading-7 mt-10 list-disc list-outside ml-5">
                <li>
                  Priorizamos uso de materiais sustentáveis
                </li>
                <li>
                  Valorizamos a iluminação natural
                </li>
                <li>
                  Oferecemos isolamento térmico e acústico
                </li>
                <li>
                  Buscamos soluções para a eficiência energética
                </li>
                <li>
                  Entregamos infraestrutura para bicicletas e estações de carregamento para veículos elétricos
                </li>
              </ul>
            </div>

            <div className="ultimoItem item pb-10 mt-[40px]">
              <p className="font-arame text-[22px] font-normal leading-[22px] mb-5 w-[260px] max-@tablet:w-full">sustentabilidade, selos e certificações</p>
              <p className="font-barlow text-4 font-normal leading-7">
                <strong>GBC Brasil Condomínio nível Ouro</strong> | Concedido pelo Green Building Council Brasil (GBC Brasil), este selo
                é um importante reconhecimento na área de construção sustentável. O nível Ouro representa um alto grau de compromisso com
                práticas construtivas que visam minimizar o impacto ambiental e promover a sustentabilidade.
              </p>
              <p className="font-barlow text-4 font-normal leading-7 mt-10">
                <strong>Selo Procel de economia de energia para edificações 2020</strong> |  Identifica as edificações que apresentem as
                melhores classificações de eficiência energética, avaliando envoltória e o sistema de aquecimento de água.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="historia pt-[70px] max-@tablet:w-[330px]  relative z-[1] bg-[#f5f5f5]">
        <Container className="space-y-5">
          <div className="about-engine-intro px-[70px] max-@tablet:px-0 flex max-@tablet:flex-col gap-[140px] max-@tablet:gap-12">

            <div className="title w-[217px]">
              <p className="font-arame text-[10px] font-bold tracking-[7px] mb-10 max-@tablet:mb-5">nossa história</p>
              <p className="font-arame text-[30px] font-normal leading-[30px] h-[120px] ">Engenharia Civil como um elo entre pai e filho</p>
            </div>

            <div className="content w-[520px] max-@tablet:w-[336px] mt-[41px] max-@tablet:mt-0">
              <p className="font-barlow text-base font-normal leading-7">
                A trajetória da MDGP se funde à história de Marlus Doria, cuja carreira começou em 1988, seguindo o exemplo do pai.
              </p>
              <p className="font-barlow text-base font-normal leading-7 mt-10">
                Ao longo dos anos, Marlus foi destaque em diversas obras residenciais, comerciais e industriais, o que o 
                consagrou ‘Construtor do Ano’ 2003 pela ADEMI - PR.
              </p>
              <p className="font-barlow text-base font-normal leading-7 mt-10">
                Em 2007, firmou uma parceria com a Cyrela Brazil Realty para desenvolver empreendimentos imobiliários no Paraná. 
                O que o levou a fundar, em 2008, a MDGP Incorporações, que se tornou sócia dos empreendimentos executados pelo grupo.
              </p>
            </div>

          </div>
        </Container>

        <div className="about-engine-bio px-[70px] max-@tablet:px-0 h-[624px] max-@tablet:h-auto mt-[70px] py-[70px] max-@tablet:py-[25px]"
          style={{ background: typeof window !== 'undefined' && window.innerWidth <= 768 ? 'linear-gradient(90deg, #C5C8C7 90%, #f5f5f5 90%)' : 'linear-gradient(90deg, #C5C8C7 90%, #f5f5f5 90%)' }}
        >
          <Container>
            <div className="content flex max-@tablet:flex-col-reverse gap-[110px] max-@tablet:gap-5 items-center max-@tablet:mb-[25px] max-@tablet:ml-[-30px]">

              <div className="textos w-[340px] max-@tablet:w-[255px] ml-[156px] max-@tablet:ml-0 max-@tablet:mt-[87px]">
                <p className="font-barlow text-base font-normal leading-7">
                  Marlus possui uma sólida formação acadêmica, com graduação em Engenharia Civil pela Universidade Federal do Paraná, 
                  Pós-graduação em Finanças pela FAE e MBA Executivo pela Kellogg School of Management em Chicago, EUA.
                </p>
                <p className="font-barlow text-base font-normal leading-7 mt-10">
                  Com um extenso histórico profissional, acumula mais de 800 mil metros quadrados de construção em obras residenciais, 
                  comerciais e industriais. Atualmente, é sócio-diretor da MDGP Incorporações.
                </p>
              </div>

              <div className="imagem-bio relative w-[338px] max-@tablet:w-[255px] h-[410px] max-@tablet:h-[326px]">
                <Image src={aboutMarlus} alt="" className="w-full h-full object-cover"></Image>

                <div className="nome-bio w-[116px] absolute bottom-[-75px] left-[30px]">
                  <p className="font-arame text-white text-[30px] font-normal leading-[30px]">Marlus Cesar Doria</p>
                  <p className="font-barlow text-white text-sm font-normal mt-[10px]">Sócio-fundador</p>
                </div>
              </div>
            </div>
          </Container>

        </div>
      </section>

      <div className="space-y-5 overflow-hidden hero-container max-@tablet:px-0 relative z-[1] min-w-screen-@fullscreen bg-[#F5F5F5]">
        <section className="portfolio px-[70px] max-@tablet:px-0 pb-[70px] max-@tablet:w-full"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
            <div className="about-excellence pt-[70px] px-[70px] max-@tablet:px-0">

              <div className="title w-[384px] max-@tablet:w-[330px] max-@tablet:px-[25px]">
                <p className="font-arame text-[10px] font-bold tracking-[7px] mb-10">portfólio</p>
                <p className="font-arame text-[30px] font-normal leading-[30px] h-[120px] ">Na busca pela excelência, construímos nossas relações duradouras</p>
              </div>

              <div className="carousel max-@tablet:h-auto max-@tablet:mt-[70px]">
                <SwiperCarouselAbout data={portfolios?.filter((portfolio) => portfolio.torres && portfolio.torres.length > 0)} />
              </div>

            </div>
        </section>
      </div>
    </>
  );
};

export default Index;

