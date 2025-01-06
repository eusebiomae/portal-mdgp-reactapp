"use client";

import React, { FC, ReactNode, useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useAuth } from "@/components/Contexts/AuthContext";
import { useRouter } from 'next/navigation';

interface LoginProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Login: FC<LoginProps> = ({ isOpen, onClose, children }) => {
  const { login, isAuthenticated } = useAuth(); // Usa o contexto de autenticação
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter(); // Usa a nova API de navegação

  useEffect(() => {
    if (!isOpen) {
      setUsername(""); // Limpa o nome de usuário quando o modal é fechado
      setPassword(""); // Limpa a senha
      setErrorMessage(""); // Limpa a mensagem de erro
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(""); // Reseta a mensagem de erro ao enviar

    let blogin = await login(username, password);  // Login armazena o usuário se o login for bem-sucedido

    console.log(blogin);

    if (blogin === false) {
      setErrorMessage("Nome ou senha incorretos.");
    } else {
      router.push('/espaco-cliente'); // Redireciona após login
    }     

  };

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
    setErrorMessage(""); // Limpa a mensagem de erro ao digitar novamente
  };

  if (isAuthenticated) return null; // Se o usuário está autenticado, oculta o formulário

  return (
    <>
      {isOpen && (
        <div className="Login fixed top-0 left-0 w-full h-full z-50 bg-white overflow-y-scroll">
          <button className="border border-[#2B2B2B] absolute top-4 right-4 cursor-pointer text-[#2B2B2B] bg-white p-2 rounded-md">
            <IoClose onClick={onClose} size={32} />
          </button>

          <div className="formLogin w-full h-full flex flex-col justify-center items-center bg-[#f2f2f2]">
            <div className="formDatos rounded-[10px] backdrop-blur-sm p-8 shadow-sm shadow-slate-500 bg-[#ffffff]">
              <div className="title flex flex-col justify-center items-center">
                <h4 className="w-[570px] max-@tablet:w-full font-arame text-[32px] leading-10 tracking-[2px] text-center border-b-8 border-b-black">
                  Área do Cliente
                </h4>
                <p className="w-[570px] max-@tablet:w-full font-barlow text-[17px] leading-[27px] tracking-[1px] mt-6">
                  Para seguir na área restrita preencha os dados abaixo. Insira seu{" "}
                  <strong>login e senha</strong> para acessar.
                </p>
              </div>

              <div className="credenciais flex flex-col w-[570px] max-@tablet:w-full mt-5">
                <form onSubmit={handleSubmit}>
                  <input
                    className="outline-none bg-transparent border-b-[1px] border-b-[#2B2B2B] rounded-none py-4 px-0 w-full placeholder:text-lg placeholder:font-normal placeholder:leading-[32px] placeholder:font-Barlow"
                    type="text"
                    name="Nome"
                    id="name"
                    value={username}
                    onChange={handleInputChange(setUsername)}
                    required
                    placeholder="Nome"
                  />

                  <input
                    className="outline-none bg-transparent border-b-[1px] border-b-[#2B2B2B] rounded-none py-4 px-0 w-full placeholder:text-lg placeholder:font-normal placeholder:leading-[32px] placeholder:font-Barlow"
                    type="password"
                    name="Senha"
                    id="pass"
                    value={password}
                    onChange={handleInputChange(setPassword)}
                    required
                    placeholder="Senha"
                  />

                  {errorMessage && <p className="text-red-500">{errorMessage}</p>}

                  <button
                    type="submit"
                    className="enviarButton bg-[#2B2B2B] px-[30px] py-[20px] w-full mt-5 block text-[14px] leading-[10.57px] font-arame text-white text-xl tracking-[3px]"
                  >
                    Entrar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
