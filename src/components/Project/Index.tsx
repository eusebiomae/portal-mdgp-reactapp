"use client";

import { BsArrowRight } from "react-icons/bs";
import Container from "@/components/Container/Index";
import Link from "next/link";
import Image from "next/image";
import { ImgBase, ImgDestaque, ImgLateral, Marca } from "@/assets/img";
import { SetStateAction, useContext, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      // toast.error('Erro ao enviar e-mail. Tente novamente.');
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section className="relative 
    bg-[#C5C8C7]
    pt-[353px]
    pb-[210px]
    flex items-center 
    justify-center
    z-[1]
    overflow-hidden
    max-@desktop:pb-[50px]
    max-@desktop:pt-[198px]
    ">
      <Image className="
      object-cover
      absolute 
      top-[200px] 
      left-0 
      w-[678px] 
      h-[800px] 
      z-[-1]
      max-@desktop:w-[295px]
      max-@desktop:h-[445px]
      max-@desktop:top-[50px]
      " src={ImgDestaque} alt="Imagem Mulher Desfocada"></Image>
      <Container className="relative">

      <Image className="
        absolute 
        @desktop:top-[520px] 
        right-[-186px]
        max-@desktop:bottom-[280px]
        max-@desktop:w-[295px]
        max-@desktop:right-[0px]
        z-[-1]" 
        src={ImgBase} alt="Imagem Planta"
        data-aos="fade-left" data-aos-delay="400" data-aos-duration="2000"
        >
      </Image>

      <Image className="
        absolute 
        @desktop:top-[-83px] 
        @desktop:right-[-156px]
        max-@desktop:bottom-[380px]
        max-@desktop:w-[175px]
        max-@desktop:left-[25px]
        z-[-1]" 
        src={ImgLateral} alt="Imagem Cadeira com vaso">
      </Image>

        <p 
        data-aos="fade-right" data-aos-delay="400" data-aos-duration="2000"
        className="
        text-white 
        uppercase 
        text-[60px] 
        leading-[60px] 
        @desktop:ml-[200px] 
        max-@desktop:ml-[80px] 
        max-@desktop:text-[30px] 
        max-@desktop:leading-[30px] 
        font-arame
        ">Projetos<br/> autorais,<br/> contemporâneos<br/> e que privilegiam<br/> o bem viver.</p>
        <div className="
        @desktop:w-[441px] 
        @desktop:ml-[401px] 
        mt-[70px] 
        flex flex-col 
        gap-[50px] 
        text-[18px] 
        font-barlow
        max-@desktop:mb-[500px]
        max-@desktop:text-[16px]
        max-@desktop:mt-[167px]
        ">
          <p className="font-barlow text-4 font-normal leading-[28px]">
            Guiados pela tríade forma, arte e função, 
            materializamos empreendimentos singulares em Curitiba. Para cada projeto autoral, envolvemos um time excepcional de signatures.
          </p>
          <p className="font-barlow text-4 font-normal leading-[28px]">Profissionais que, assim como nós, buscam se conectar ao desejo das pessoas para criar uma vida com mais conforto, aconchego, bem-estar e sustentabilidade.</p>
          <p className="font-barlow text-4 font-normal leading-[28px]">Assim, concretizamos lugares de alto padrão que transcendem as expectativas e refletem a exclusividade, a excelência e a contemporaneidade, sempre presentes em um MDGP.</p>
        </div>

        <div className="relative">
          <div className="novidades-news w-[769px] mt-[30px] max-@desktop:w-full">
            <p
              className="text-[40px] text-[#2B2B2B] uppercase leading-[40px] w-[10em] font-arame">Novidades em primeira mão
            </p>

            <div className="border-t-[3px] border-[#2B2B2B] mt-[30px] pt-[30px] flex justify-between items-center max-@desktop:flex-col">
              <p className="text-[18px] max-@desktop:text-[16px] max-@desktop:mb-[20px] font-barlow">Cadastre-se para receber nossa newsletter</p>

              <div className="flex items-center">
                <input 
                  className="w-[257px] h-[51px] max-@desktop:w-[200px] max-@desktop:h-[45px] bg-[#C5C8C7] border-[1px] border-[#2B2B2B] p-[13px] text-[#2B2B2B]" 
                  placeholder="Digite seu e-mail" 
                  type="text" 
                  value={email} 
                  onChange={handleEmailChange}
                />
                <button 
                  className="w-[114px] h-[51px] max-@desktop:h-[45px] border-[3px] border-[#2B2B2B] uppercase text-[14px] font-arame hover:border-[#7A7E83] ease-in-out duration-300 hover:text-[#7A7E83]"
                  onClick={handleSubmit}
                >
                  Enviar
                </button>
              </div>

              {showPopup && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#c5c8c7] w-[790px] max-@desktop:w-full z-50">
                  <div className="bg-white p-6 rounded shadow-lg text-center w-[790px] max-@desktop:w-full">
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

              <ToastContainer />
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
};

export default Index;
