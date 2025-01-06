"use client";

import Container from "@/components/Container/Index";
import { useContext, useState } from "react";
import { PiTelegramLogo } from "react-icons/pi";
import { HubidContext } from "@/components/Contexts/HubidContext";
import { z } from "zod";
import axios from "axios";
import { SyncLoader } from "react-spinners";
import { sendGTMEvent } from "@next/third-parties/google";

const Index = () => {
  const session = useContext(HubidContext);

  const schema = z.object({    
    //Assunto: z.string().nonempty("Opção de contato obrigatória"),
    Nome: z.string().nonempty("Nome obrigatório"),
    Email: z.string().nonempty("E-mail inválido"),
    Telefone: z.string().nonempty("Telefone obrigatório"),
    Mensagem: z.string(),
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<any>({});
  const [success, setSuccess] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    Assunto: "",
    Nome: "",
    Telefone: "",
    Mensagem: "",
    Email: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (formErrors[name]) {
      setFormErrors((prevErrors: any) => ({
        ...prevErrors,
        [name]: undefined,
      }));
    }
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    try {
      const values = schema.parse(formData);
      const response = await axios.post(
        `https://hubid360.com.br/api/mensagem`,
        {
          ...values,
          ...session,
        }
      );
      setFormErrors({});
      setSuccess(true);
      setFormData({
        Assunto: "",
        Nome: "",
        Telefone: "",
        Mensagem: "",
        Email: "",
      });
      setTimeout(() => {
        setSuccess(false);
      }, 3000);

      (window as any).dataLayer.push({
        event: "Sucesso Email",
      });
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        console.log(error.formErrors.fieldErrors);
        setFormErrors(error.formErrors.fieldErrors);
      }
      setLoading(false);
    }
    setLoading(false);
  };


  return (
    <section className="bg-white">
      <div className="bg-white overflow-hidden rounded-ss-3xl rounded-se-3xl">

        <Container className="">
          <form
            onSubmit={onSubmit}
            className="w-full max-w-[570px] mx-auto py-14"
            method="POST"
          >

            <div className="">
              <div className="form-group mb-4">
                <label
                  htmlFor="channel"
                  className="w-full inline-block cursor-pointer mb-1 text-lg text-[#1E2256] font-semibold"
                >
                  Sobre qual assunto vamos falar?
                </label>
                <select
                  className="bg-gray-200 font-sans w-full cursor-pointer h-[58px] px-4"
                  name="channel"
                  id=""
                >
                  <option value="" disabled selected>
                    Selecione uma opção
                  </option>
                  <option value="email">E-mail</option>
                  <option value="phone">Telefone</option>
                  <option value="whatsapp">WhatsApp</option>
                </select>
              </div>

              <div className="form-group mb-4">
                <label
                  htmlFor="name"
                  className="w-full inline-block cursor-pointer mb-1 text-lg text-[#1E2256] font-semibold"
                >
                  Qual o seu nome?
                </label>
                <input
                  className="outline-none border border-[#1E2256] rounded-none p-4 bg-white w-full"
                  name="Nome"
                  id="name"
                  type="text"
                  placeholder=""
                  value={formData.Nome}
                  onChange={handleChange}
                />
                {formErrors?.Nome && (
                  <div className="text-left text-red-500">{formErrors.Nome}</div>
                )}
              </div>

              <div className="form-group mb-4">
                <label
                  htmlFor="email"
                  className="w-full inline-block cursor-pointer mb-1 text-lg text-[#1E2256] font-semibold"
                >
                  Poderia nos informar um e-mail?
                </label>
                <input
                  className="outline-none border border-[#1E2256] rounded-none p-4 bg-white w-full"
                  name="Email"
                  value={formData.Email}
                  onChange={handleChange}
                  id="email"
                  type="email"
                  placeholder="Digite seu melhor e-mail"
                />
                {formErrors?.Email && (
                  <div className="text-left text-red-700">{formErrors.Email}</div>
                )}
              </div>

              <div className="form-group mb-4">
                <label
                  htmlFor="phone"
                  className="w-full inline-block cursor-pointer mb-1 text-lg text-[#1E2256] font-semibold"
                >
                  E um telefone para contato?
                </label>
                <input
                  className="outline-none border border-[#1E2256] rounded-none p-4 bg-white w-full"
                  name="Telefone"
                  id="phone"
                  type="text"
                  placeholder="(xx) xxxx-xxxx"
                  value={formData.Telefone}
                  onChange={handleChange}
                />
                {formErrors?.Telefone && (
                  <div className="text-left text-red-700">
                    {formErrors.Telefone}
                  </div>
                )}
              </div>

              <div className="form-group mb-4">
                <label
                  htmlFor="message"
                  className="w-full inline-block cursor-pointer mb-1 text-lg text-[#1E2256] font-semibold"
                >
                  Mensagem
                </label>
                <textarea
                  className="outline-none border border-[#1E2256] rounded-none p-4 bg-white w-full"
                  name="Mensagem"
                  id="message"
                  placeholder="Olá, gostaria de mais informações sobre os produtos Toca55."
                  value={formData.Mensagem}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="form-group mb-4">
              <button
                className="group  text-white w-full py-2 border-2 border-[#1E2256] px-4 flex items-center gap-5 justify-center font-semibold text-center text-lg rounded-lg outline-none hover:bg-white hover:text-[#1E2256] transition-all ease-linear"
                onClick={() =>
                  sendGTMEvent({
                    event: "buttonClicked",
                    value: "Sucesso Fale Conosco",
                  })
                }
              >
                {loading ? (
                  <SyncLoader
                    color={"#ffff"}
                    loading={loading}
                    size={20}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                ) : success ? (
                  "Dados recebidos com sucesso!"
                ) : (
                  "Enviar"
                )}

                <PiTelegramLogo className="group-hover:translate-x-5 transition-all ease-linear" />
              </button>
              </div>
            </div>
          </form>
        </Container>
      </div>
    </section>
  );
};

export default Index;
