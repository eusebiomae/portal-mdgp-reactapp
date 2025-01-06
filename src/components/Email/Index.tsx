"use client";

import { z } from "zod";
import { SyncLoader } from "react-spinners";
import Container from "@/components/Container/Index";
import { CONSETN_FORM } from "@/constants/";
import { useContext, useState } from "react";
import { sendGTMEvent } from "@next/third-parties/google";
import axios from "axios";
import Link from "next/link";
import InputMask from "react-input-mask";
import Image from "next/image";
import { ImgContact } from "@/assets/img";
import Modal from "../Modal/Index";
import { HubidContext } from "@/components/Contexts/HubidContext";

const Index = () => {
  const session = useContext(HubidContext);
  const schema = z.object({
    Nome: z.string().nonempty("Nome obrigatório"),
    Email: z.string().nonempty("E-mail inválido"),
    Telefone: z.string().nonempty("Telefone obrigatório"),
    Mensagem: z.string(),
    // WhatsApp: z.boolean().refine(val => val === true, "Consentimento para contato via WhatsApp é obrigatório"),
    WhatsApp: z.boolean(),
    Newsletter: z.boolean(),
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<any>({});
  const [success, setSuccess] = useState<boolean>(false);

  const [isConsentimentoModalOpen, setIsConsentimentoModalOpen] =
    useState(false);

  const handleConsentimento = () => {
    setIsConsentimentoModalOpen(true);
  };
  const handleConsentimentoClose = () => {
    setIsConsentimentoModalOpen(false);
  };

  const [formData, setFormData] = useState({
    Assunto: "",
    Nome: "",
    Telefone: "",
    Mensagem: "",
    Email: "",
    WhatsApp: false, // Adicionado para o checkbox do WhatsApp
    Newsletter: false, // Adicionado para o checkbox da Newsletter
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));

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

      console.log('Resposta da API:', response.data);
      
      setFormErrors({});
      setSuccess(true);
      setFormData({
        Assunto: "",
        Nome: "",
        Telefone: "",
        Mensagem: "",
        Email: "",
        WhatsApp: false,
        Newsletter: false,
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
    <Container className="overflow-hidden">
      <section className="pt-20 pb-[100px] max-@desktop:flex max-@desktop:flex-col-reverse">
        <div className="flex justify-between items-center max-@desktop:flex-col">
          <div 
            className="relative w-full h-[350px] @desktop:w-[400px] @desktop:h-[560px] z-[1] pt-[94px]"
            data-aos="fade-right" data-aos-delay="300" data-aos-duration="2000"
          >
            <p className="font-arame max-@desktop:text-[30px] max-@desktop:leading-[30px] text-[40px] leading-[40px]">
              Preencha<br/> o formulário<br/> para saber mais.
            </p>
            <Image className="absolute w-[295px] h-[380px] @desktop:w-full @desktop:h-full top-0 right-[-70px] z-[-1]" src={ImgContact} alt=""></Image>
          </div>

          <form
            className="w-full max-w-[470px] mx-auto py-14"
            onSubmit={onSubmit}
            method="POST"
          >

            <p className="font-barlow text-[18px] mb-[70px] text-[#2B2B2B]">Em breve um de nossos consultores entrará em contato.</p>

            <div className="">

              <div className="flex gap-[30px] form-group mb-4 max-@desktop:flex-col">
                <div className="@desktop:w-[50%]">
                  <input
                    className="outline-none border-b-[1px] border-b-[#2B2B2B] rounded-none py-4 px-0 w-full placeholder:text-lg placeholder:font-normal placeholder:leading-[32px] placeholder:font-Barlow"
                    type="text"
                    name="Nome"
                    id="name"
                    required
                    placeholder="Seu nome"
                    value={formData.Nome}
                    onChange={handleChange}
                  />
                  {formErrors?.Nome && (
                    <div className="text-left text-red-500">{formErrors.Nome}</div>
                  )}
                </div>

                <div className="@desktop:w-[50%]">
                  <InputMask
                    className="outline-none border-b-[1px] border-b-[#2B2B2B] rounded-none py-4 px-0 w-full placeholder:text-lg placeholder:font-normal placeholder:leading-[32px] placeholder:font-Barlow"
                    type="text"
                    name="Telefone"
                    mask="(99) 99999-9999"
                    placeholder="Seu telefone"
                    id="phone"
                    value={formData.Telefone}
                    onChange={handleChange}
                    required
                  />
                  {formErrors?.Telefone && (
                    <div className="text-left text-red-700">
                      {formErrors.Telefone}
                    </div>
                  )}
                          
                </div>
              </div>

              <div className="form-group mb-4">
                <input
                  className="outline-none border-b-[1px] border-b-[#2B2B2B] rounded-none py-4 px-0 w-full placeholder:text-lg placeholder:font-normal placeholder:leading-[32px] placeholder:font-Barlow"
                  type="email"
                  name="Email"
                  value={formData.Email}
                  onChange={handleChange}
                  id="email"
                  required
                  placeholder="Seu e-mail"
                />     
                {formErrors?.Email && (
                  <div className="text-left text-red-700">{formErrors.Email}</div>
                )}           
              </div>

              <div className="form-group mb-4">
                <textarea
                  className="outline-none border-b-[1px] border-b-[#2B2B2B] rounded-none py-4 px-0 w-full placeholder:text-lg placeholder:font-normal placeholder:leading-[32px] placeholder:font-Barlow"
                  name="Mensagem"
                  id="message"
                  placeholder="Mensagem"
                  value={formData.Mensagem}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="form-group mb-4">
                <label className="flex items-center">
                  <input
                    className="mr-2 custom-checkbox w-5 h-5 font-barlow text-base text-[#2b2b2b]"
                    type="checkbox"
                    name="WhatsApp"
                    checked={formData.WhatsApp}
                    onChange={handleChange}
                  />
                  Aceito ser contatado via WhatsApp
                </label>
              </div>

              <div className="form-group mb-4">
                <label className="flex items-center">
                  <input
                    className="mr-2 custom-checkbox w-5 h-5 font-barlow text-base text-[#2b2b2b]"
                    type="checkbox"
                    name="Newsletter"
                    checked={formData.Newsletter}
                    onChange={handleChange}
                  />
                  Inscrever-se na newsletter MDGP
                </label>
              </div>

              <div className="form-group mb-4">
                <button className="border-[3px] border-[#2B2B2B] px-[30px] py-[10px] ml-auto block text-[14px] leading-[10.57px] font-arame"
                  onClick={() =>
                    sendGTMEvent({
                      event: "buttonClicked",
                      value: "Sucesso Email",
                    })
                  }
                >
                  {loading ? (
                    <SyncLoader
                      color={"#2B2B2B"}
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
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Container>
  );
};

export default Index;
