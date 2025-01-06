"use client";

import Container from "@/components/Container/Index";
import axios from "axios";
import { SetStateAction, useContext, useState } from "react";
import { HubidContext } from "../Contexts/HubidContext";

interface EmailNewsLetter  {
  id_produto?: string;
}

const Index: React.FC<EmailNewsLetter> = ({id_produto}) => {

  const session = useContext(HubidContext);
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);

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
      <section className="relative flex items-center justify-center py-[70px] bg-[#C5C8C7]">
        <Container className="relative h-full flex justify-center items-center">
          <div className="w-[769px] mt-[30px] max-@desktop:w-full">
            <p className="text-[30px] text-[#2B2B2B] uppercase leading-[30px] font-arame w-[210px]">ACOMPANHE AS NOVIDADES DA MDGP</p>

            <div className="border-t-[3px] border-[#2B2B2B] mt-[30px] pt-[30px] flex justify-between items-center max-@desktop:flex-col">
              <p className="text-[18px] max-@desktop:text-[16px] max-@desktop:mb-[20px] font-barlow">
                Cadastre-se para receber nossa newsletter
              </p>

              <div className="items-start flex">
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
