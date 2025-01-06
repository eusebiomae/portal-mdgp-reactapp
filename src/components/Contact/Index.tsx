"use client";
import { Face, ImgContact, Insta, Share, Twitter, WhatsApp } from "@/assets/img";
import Container from "@/components/Container/Index";
import Image from "next/image";
import { useContext, useState } from "react";
import { PiTelegramLogo } from "react-icons/pi";
import InputMask from "react-input-mask";
import { HubidContext } from "../Contexts/HubidContext";
import { z } from "zod";
import axios from "axios";
import { SyncLoader } from "react-spinners";
import { sendGTMEvent } from "@next/third-parties/google";

const Index = () => {
  const session = useContext(HubidContext);
  const schema = z.object({    
    Nome: z.string().nonempty("Nome obrigatório"),
    Email: z.string().nonempty("E-mail inválido"),
    tipo_de_contato: z.string().nonempty("Selecione uma opção"),
    Telefone: z.string().nonempty("Telefone obrigatório"),
    Mensagem: z.string(),
    WhatsApp: z.boolean().refine(val => val === true, "Consentimento para contato via WhatsApp é obrigatório"),
    // WhatsApp: z.boolean(),
    Newsletter: z.boolean(),
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
    tipo_de_contato: "",
    WhatsApp: false,
    Newsletter: false,
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({ 
      ...prevData, 
      [name]: type === "checkbox" ? checked : value 
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
      setFormErrors({});
      setSuccess(true);
      setFormData({
        Assunto: "",
        Nome: "",
        Telefone: "",
        Mensagem: "",
        tipo_de_contato: "",
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
    <section className="pt-20 pb-[100px] max-@desktop:flex max-@desktop:flex-col-reverse" id="contactFooter">
      <div className="">
        <ul className="flex justify-end max-@desktop:justify-center  items-center gap-[15px]">
          <li
          className="flex gap-[5px] items-center">
            <Image src={Share} alt=""></Image>
            <p  className="text-[12px] font-arame uppercase leading-[9.06px]">compartilhar</p>
          </li>
          <li>
            <a 
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent("Veja o último empreendimento do MDGP")}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Image src={Face} alt="Compartilhar no Facebook" />
            </a>
          </li>
          <li>
            <a 
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window .location.href)}&text=${encodeURIComponent("Veja o último empreendimento do MDGP")}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Image src={Twitter} alt="Compartilhar no Twitter" />
            </a>
          </li>
          <li>
            <a 
              href={`https://www.instagram.com/`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Image src={Insta} alt="Compartilhar no Instagram" />
            </a>
          </li>
          <li>
            <a 
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent("Veja o último empreendimento do MDGP: " + window.location.href)}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Image src={WhatsApp} alt="Compartilhar no WhatsApp" />
            </a>
          </li>
        </ul>
        </div>
      <div className="flex justify-between items-center max-@desktop:flex-col">
        <div 
          className="relative w-full h-[350px] @desktop:w-[400px] @desktop:h-[560px] z-[1] pt-[94px]"
           data-aos="fade-right" data-aos-delay="300" data-aos-duration="2000"
        >
          <p className="font-arame max-@desktop:text-[30px] max-@desktop:leading-[30px] text-[40px] leading-[40px]">Preencha<br/> o formulário<br/> para saber mais.</p>
          <Image className="absolute w-[295px] h-[380px] @desktop:w-full @desktop:h-full top-0 right-[-70px] z-[-1]" src={ImgContact} alt=""></Image>
        </div>

        <form
          className="w-full max-w-[470px] mx-auto py-14"
          onSubmit={onSubmit}
          method="POST"
        >

          <p className="font-barlow text-[18px] mb-[70px] text-[#2B2B2B] max-@desktop:hidden">Em breve um de nossos consultores entrará em contato.</p>

          <div className="">

            <div className="flex gap-[30px] form-group mb-4 max-@desktop:flex-col">
              <div className="@desktop:w-[50%]">
                <input
                  className="outline-none border-b-[1px] border-b-[#2B2B2B] rounded-none p-4 bg-[#F5F5F5] w-full"
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
                  className="outline-none border-b-[1px] border-b-[#2B2B2B] rounded-none p-4 bg-[#F5F5F5] w-full"
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
                className="outline-none border-b-[1px] border-b-[#2B2B2B] rounded-none p-4 bg-[#F5F5F5] w-full"
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

            <select
              className="outline-none border-b-[1px] border-b-[#2B2B2B] rounded-none p-4 bg-[#F5F5F5] w-full"
              name="tipo_de_contato"
              value={formData.tipo_de_contato}
              onChange={handleChange}
              id=""
            >
              <option value="" disabled selected className="text-[#8F8F8F]">
              Você está...
              </option>
              <option value="Apenas olhando imóveis" className="text-[#2B2B2B]">Apenas olhando imóveis</option>
              <option value="Visitando imóveis" className="text-[#2B2B2B]">Visitando imóveis</option>
              <option value="Pronto para fazer uma proposta" className="text-[#2B2B2B]">Pronto para fazer uma proposta</option>
            </select>
            {formErrors?.tipo_de_contato && (
              <div className="text-left text-red-700">
                {formErrors.tipo_de_contato}
              </div>
            )}

            <div className="form-group mb-4">
              <textarea
                className="outline-none border-b-[1px] border-b-[#2B2B2B] rounded-none p-4 bg-[#F5F5F5] w-full"
                name="Mensagem"
                id="message"
                placeholder="Mensagem"
                value={formData.Mensagem}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="form-group mb-4">
              <label className="flex items-center text-sm font-barlow">
                <input
                  className="mr-2 w-5 h-5 border-black border-[1px] rounded-0 custom-checkbox"
                  type="checkbox"
                  name="WhatsApp"
                  checked={formData.WhatsApp}
                  onChange={handleChange}
                />
                Aceito ser contatado via Whatsapp
              </label>
              {formErrors?.WhatsApp && (
                <div className="text-left text-red-700">{formErrors.WhatsApp}</div>
              )}
            </div>

            <div className="form-group mb-4">
              <label className="flex items-center text-sm font-barlow">
                <input
                  className="mr-2 w-5 h-5 border-black border-[1px] rounded-0 custom-checkbox"
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
  );
};

export default Index;
