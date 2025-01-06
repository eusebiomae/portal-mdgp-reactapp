"use client";

import Container from "@/components/Container/Index";
import Image from "next/image";
import { assistenciaIcon, documentosIcon, LogoHeader } from "@/assets/img";
import Link from "next/link";
import { useAuth } from "@/components/Contexts/AuthContext";
import { UserLogged } from "@/@types/UserLogged";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { fetchAssist } from "@/utils/fecthAssist";

interface HeroClientesProps {
  userLogged: UserLogged;
}

const HeroClientes: React.FC<HeroClientesProps> = ({ userLogged }) => {
  const { logout } = useAuth();
  const [isAssistModalOpen, setIsAssistModalOpen] = useState(false);
  const [numeroDocumentoCliente, setNumeroDocumentoCliente] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Função para formatar CPF/CNPJ
  const formatarDocumento = (valor: string): string => {
    const apenasNumeros = valor.replace(/\D/g, '');
    if (apenasNumeros.length == 14) {
      return apenasNumeros.replace(/^(\d{2})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1/$2').replace(/(\d{4})(\d)/, '$1-$2'); 
    } else {
      return apenasNumeros.replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{2})$/, '$1-$2');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valorFormatado = formatarDocumento(e.target.value);
    setNumeroDocumentoCliente(valorFormatado);
  };

  const handleCloseAssistModal = () => {
    setIsAssistModalOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const valorLimpo = numeroDocumentoCliente.replace(/\D/g, '');
    if (valorLimpo.length !== 11 && valorLimpo.length !== 14) {
      setError('Por favor, insira um CPF ou CNPJ válido.');
      setLoading(false);
      return;
    }

    try {
      const result = await fetchAssist(numeroDocumentoCliente);

      setLoading(false);
      if (result.status !== 404 && result.data?.urlSolicitacoesCliente) {
        window.open(result.data.urlSolicitacoesCliente, '_blank');
      } else {
        setError('Solicitação não encontrada');
      }
    } catch (err) {
      setLoading(false);
      setError('Erro ao enviar solicitação');
    }
  };

  return (
    <>
      <a href="/">
        <Image src={LogoHeader} alt="Logo MDGP" className="absolute left-[30px] top-[20px] w-[50px] z-[1]" />
      </a>

      <section className="heroClientesSection overflow-hidden pb-[70px] relative pt-[140px] bg-[#C5C8C7]">
        <Container>
          {userLogged ? (
            <div className="clientesIntro mb-[50px] flex max-@tablet:flex-col max-@tablet:gap-5 justify-between align-top">
              <div>
                <h2 className="title text-[#2B2B2B] tracking-[7px] uppercase text-[10px] font-arame text-2xl font-bold mb-[20px]">
                  espaço do cliente
                </h2>
                <p className="subtitle font-arame text-[45px] max-@tablet:text-[30px] font-normal leading-[45px] max-@tablet:leading-[30px] w-[340px] max-@tablet:w-[245px]">
                  olá, {userLogged.usuario.username}
                </p>
              </div>

              <Link
                className="flex justify-center items-center w-[95px] h-[50px] font-[700] text-xs tracking-[1.2px] border-[3px] border-[#2B2B2B] hover:border-[#7A7E83] ease-in-out duration-300 hover:text-[#7A7E83]"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  logout();
                }}
              >
                <button className="logout uppercase font-arame text-[14px] leading-[10.57px] ease-in-out">
                  sair
                </button>
              </Link>
            </div>
          ) : (
            <div className="clientesIntro mb-[50px] flex justify-center align-top">
              <p className="subtitle font-arame text-[45px] max-@tablet:text-[30px] font-normal leading-[45px] max-@tablet:leading-[30px]">
                Usuário não encontrado
              </p>
            </div>
          )}

          <div className="clientesNav">
            <div className="items flex justify-evenly max-@tablet:justify-normal max-@tablet:flex-wrap max-@tablet:gap-[5px]">
              
              <button className="assistenciaModalBtn tem w-[100px] flex flex-col items-center"
                onClick={() => setIsAssistModalOpen(true)}
              >
                <Image src={assistenciaIcon} className="m-2" alt="assistência técnica" />
                <p className="font-arameBold text-[10px] tracking-[1px] text-[#2B2B2B] text-center">
                  assistência técnica
                </p>
              </button>

              <Link href={'#documentos'} className="item w-[100px] flex flex-col items-center">
                <Image src={documentosIcon} className="m-2" alt="documentos" />
                <p className="font-arameBold text-[10px] tracking-[1px] text-[#2B2B2B] text-center">
                  documentos
                </p>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {isAssistModalOpen && (
        <section className="assistenciaModal fixed top-0 right-0 w-full h-full z-50">
          <div className="flex w-full h-full">
            <div className="bg-black bg-opacity-50 w-[65%] max-@tablet:w-[15%] h-full"></div>

            <div className="bg-white h-full w-[35%] max-@tablet:w-[85%] pl-[5%] pt-[250px]">

              <button className="absolute top-4 right-4 cursor-pointer text-[#2B2B2B] bg-white p-2 rounded-md">
                <IoClose onClick={handleCloseAssistModal} size={30} />
              </button>

              <header>
                <h2 className="text-[#2B2B2B] tracking-[7px] uppercase text-[10px] font-arameBold font-normal mb-[70px]">
                  assistência técnica
                </h2>
              </header>

              <form onSubmit={handleSubmit} className="items-start flex">
                <input 
                  className="w-[257px] h-[51px] max-@desktop:w-[170px] max-@desktop:h-[45px] border-[1px] border-[#2B2B2B] p-[13px] text-[#2B2B2B] max-@tablet:text-xs"
                  placeholder="Digite seu CPF ou CNPJ"
                  type="text"
                  value={numeroDocumentoCliente}
                  onChange={handleInputChange} // Usa a função atualizada
                  maxLength={18}
                  required
                />                
                <button 
                  type="submit"
                  className="w-[114px] h-[51px] max-@tablet:w-[100px] max-@desktop:h-[45px] border-[3px] border-[#2B2B2B] uppercase text-[14px] font-arame hover:border-[#7A7E83] ease-in-out duration-300 hover:text-[#7A7E83]"
                >
                  {loading ? 'Enviando...' : 'Enviar'}
                </button>
              </form>

              <div className="w-[76%] max-@tablet:w-[90%] text-xs mt-3 leading-5 text-[#7A7E83]">
                É necessário incluir os dados de CPF ou CNPJ com toda sua pontuação. <br /> Ex: 000.000.000-00
              </div>

              {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default HeroClientes;
