"use client";
import { bgPlantaContact, Face, IconCentralVendas, IconMDGP, IconOffice, ImgContact, Insta, LogoHeader, Share, Twitter, WhatsApp } from "@/assets/img";
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

// Define os tipos dos assuntos
type Subject = "Interesse em imóvel" | "Trabalhe conosco" | "Compramos seu terreno" | "Seja um fornecedor";

// Mapeamento dos assuntos para `id_produto`
const subjectToIdMap: Record<Subject, string> = {
  "Interesse em imóvel": "03afdbd66e479", //institucional
  "Trabalhe conosco": "03afdbd66e483",
  "Compramos seu terreno": "03afdbd66e485",
  "Seja um fornecedor": "03afdbd66e484"
};

const Index = () => {
  const session = useContext(HubidContext);
  const schema = z.object({    
    Nome: z.string().nonempty("Nome obrigatório"),
    Email: z.string().nonempty("E-mail inválido"),
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
    WhatsApp: false,
    Newsletter: false,
    id_produto: ""
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({ 
      ...prevData, 
      [name]: type === "checkbox" ? checked : value 
    }));

    if (name === "Assunto") {
      const selectedSubject = value as Subject;
      setFormData((prevData) => ({
        ...prevData,
        id_produto: subjectToIdMap[selectedSubject] || "" // Atualiza `id_produto` com base na seleção
      }));
    }

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
          id_produto: formData.id_produto // Usa o `id_produto` do estado
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
        WhatsApp: false,
        Newsletter: false,
        id_produto: ""
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
    <section className="pt-20 max-@tablet:pt-0 pb-[100px] max-@desktop:flex max-@desktop:flex-col-reverse" id="contactPage">
      <a href="/">
        <Image src={LogoHeader} alt="Logo MDGP" className="absolute left-[30px] top-[20px] w-[50px] z-[1]"></Image>
      </a>

      <div className="flex justify-between items-center max-@desktop:flex-col mt-[120px]">
        <div 
          className="relative w-full h-[350px] @desktop:w-[400px] @desktop:h-[560px] z-[1] pt-[40px]"
           data-aos="fade-right" data-aos-delay="300" data-aos-duration="2000"
        >
          <div className="infosContactPage">
            <p className="font-arameBold text-[10px] tracking-[7px] mb-5">fale com a gente</p>

            <ul className="flex flex-col gap-10 max-@desktop:text-[12px] font-barlow">
              <li className="flex align-top gap-[15px]">
                <a href="https://wa.me/41992762538?" target="_blank" className="font-barlow text-base text-[#2B2B2B]">
                  <strong className="font-arame text-[22px]">Central <br /> de vendas</strong><br/>+55 41 99276 2538
                </a>
              </li>

              <li className="flex align-top gap-[15px]">
                <a href="tel:+554135016776"  className="font-barlow text-base text-[#2B2B2B]">
                    <strong className="font-arame text-[22px]">Escritório</strong><br/>+55 41 3501  6776
                </a>
              </li>

              <li className="flex align-top gap-[15px]">
                <a href="https://maps.app.goo.gl/56HBNUmEhEPcv4SBA" target="_blank" className="font-barlow text-base text-[#2B2B2B]">
                <strong className="font-arame text-[22px]">MDGP</strong><br/>
                Edifício Ar 3000 <br />
                Praça São Paulo da Cruz, 50<br/>
                Sala 1303
                - CEP 80030.480<br/>
                Cabral – Curitiba – PR 
                </a>
              </li>

            </ul>
          </div>

          <Image className="absolute max-@tablet:hidden w-[295px] h-[470px] @desktop:w-full @desktop:h-full top-0 right-[-70px] max-@tablet:right-[-65px] z-[-1]" src={bgPlantaContact} alt=""></Image>
          <Image className="absolute @desktop:hidden w-[295px] h-[470px] @desktop:w-full @desktop:h-full top-0 right-[-70px] max-@tablet:right-[-65px] z-[-1]" src={bgPlantaContact} alt=""></Image>
        </div>

        <form
          className="w-full max-w-[470px] mx-auto py-14 pt-0 max-@tablet:mt-[160px] @desktop:mt-0"
          onSubmit={onSubmit}
          method="POST"
        >

          <div className="">

            <div className="flex gap-[30px] form-group mb-4 max-@desktop:flex-col">
              <div className="@desktop:w-[50%]">
                <input
                  className="outline-none border-b-[1px] border-b-[#2B2B2B] placeholder:text-[#2B2B2B] rounded-none p-4 pl-0 bg-[transparent] w-full"
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
                  className="outline-none border-b-[1px] border-b-[#2B2B2B] placeholder:text-[#2B2B2B] rounded-none p-4 pl-0 bg-[transparent] w-full"
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

            <div className="form-group mb-4 flex max-@tablet:flex-col justify-between items-baseline">
              
                <input
                  className="outline-none  mb-4 border-b-[1px] border-b-[#2B2B2B] placeholder:text-[#2B2B2B] rounded-none p-4 pl-0 bg-[transparent] w-[220px] max-@tablet:w-full"
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

                <select
                  className="outline-none border-b-[1px] border-b-[#2B2B2B] placeholder:text-[#2B2B2B] rounded-none p-4 pl-0 bg-[transparent] w-[220px] max-@tablet:w-full"
                  name="Assunto"
                  value={formData.Assunto}
                  onChange={handleChange}
                  id="assunto"
                  required
                >
                  <option value="" disabled>
                    Assunto
                  </option>
                  <option value="Interesse em imóvel">
                    Interesse em imóvel
                  </option>
                  <option value="Trabalhe conosco">
                    Trabalhe conosco
                  </option>
                  <option value="Compramos seu terreno">
                    Compramos seu terreno
                  </option>
                  <option value="Seja um fornecedor">
                    Seja um fornecedor
                  </option>
                </select>
            </div>


            <div className="form-group mb-4">
              <textarea
                className="outline-none border-b-[1px] border-b-[#2B2B2B] placeholder:text-[#2B2B2B] rounded-none p-4 pl-0 bg-[transparent] w-full"
                name="Mensagem"
                id="message"
                placeholder="Mensagem"
                value={formData.Mensagem}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="form-group mb-4">
              <label className="flex items-center text-sm font-barlow text-white">
                <input
                  className="mr-2 w-5 h-5 border-black border-[1px] bg-[transparent] accent-[#2B2B2B] "
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
              <label className="flex items-center text-sm font-barlow text-white">
                <input
                  className="mr-2 w-5 h-5 border-black border-[1px] bg-[transparent] accent-[#2B2B2B] "
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
