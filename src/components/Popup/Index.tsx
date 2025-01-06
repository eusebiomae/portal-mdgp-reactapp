"use client";
import React, { useState, useEffect, useContext } from 'react';
import InputMask from 'react-input-mask';
import SyncLoader from 'react-spinners/SyncLoader';
import { HubidContext } from "../Contexts/HubidContext";
import { z } from "zod";
import axios from "axios";
import Image from "next/image";
import { IconClose } from '@/assets/img';

interface PopupProps {
  isVisible: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isVisible, onClose }) => {
    const session = useContext(HubidContext);
    const schema = z.object({    
      Nome: z.string().nonempty("Nome obrigatório"),
      Email: z.string().email("E-mail inválido").nonempty("E-mail obrigatório"),
      Telefone: z.string().nonempty("Telefone obrigatório"),
      Mensagem: z.string(),
      WhatsApp: z.boolean().refine(val => val === true, "Consentimento para contato via WhatsApp é obrigatório"),
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

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

  return isVisible ? (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-95 z-50">
      <div className="formQuadro relative bg-transparent p-8 rounded shadow-lg w-[850px] max-@tablet:w-full h-[630px]">

        <button className="absolute top-4 right-4" onClick={onClose}>
            <Image
                className="icon-instagram w-6 h-6"
                src={IconClose}
                alt="Icone Link Instagram"
            />
        </button>

        <form className="w-[600px] max-@tablet:w-full mx-auto py-14 max-@tablet:pt-[15px]" onSubmit={onSubmit} method="POST">

          <h2 className="text-3xl max-@tablet:text-2xl leading-9 max-@tablet:leading-7 font-arame mb-4 ml-[-60px] max-@tablet:ml-0 text-white w-[333px]">Tem Interesse em um de nossos projetos autorais?</h2>

          <p className="font-barlow text-lg max-@tablet:text-sm my-[25px] max-@tablet:mt-6 text-white">Cadastre-se e receba mais informações sobre nossos empreendimentos</p>

          <div className="flex flex-wrap max-@tablet:flex-col w-[630px] max-@tablet:w-full gap-[30px] form-group mb-4">

            <div className="w-[300px] mb-4 max-@tablet:mb-0">
              <input
                className="outline-none border-b-[1px] border-b-white placeholder:text-white text-white rounded-none p-4 bg-transparent w-full"
                type="text"
                name="Nome"
                id="name"
                required
                placeholder="Seu nome"
                value={formData.Nome}
                onChange={handleChange}
              />
              {formErrors?.Nome && <div className="text-left text-red-500">{formErrors.Nome}</div>}
            </div>

            <div className="w-[300px] mb-4 max-@tablet:mb-0">
              <InputMask
                className="outline-none border-b-[1px] border-b-white placeholder:text-white text-white rounded-none p-4 bg-transparent w-full"
                type="text"
                name="Telefone"
                mask="(99) 99999-9999"
                placeholder="Seu telefone"
                id="phone"
                value={formData.Telefone}
                onChange={handleChange}
                required
              />
              {formErrors?.Telefone && <div className="text-left text-red-700">{formErrors.Telefone}</div>}
            </div>

            <div className="w-full mb-4">
              <input
                className="outline-none border-b-[1px] border-b-white placeholder:text-white text-white rounded-none p-4 bg-transparent w-full"
                type="email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                id="email"
                required
                placeholder="Seu e-mail"
              />
              {formErrors?.Email && <div className="text-left text-red-700">{formErrors.Email}</div>}
            </div>

            <div className='checkboxes w-[300px]'>
                <div className="w-full mb-4">
                    <label className="flex items-center text-sm font-barlow text-white">
                        <input
                            className="mr-2 w-5 h-5 border-white border-[1px] rounded-0 custom-checkbox "
                            type="checkbox"
                            name="WhatsApp"
                            checked={formData.WhatsApp}
                            onChange={handleChange}
                        />
                        Aceito ser contatado via Whatsapp
                    </label>
                    {formErrors?.WhatsApp && <div className="text-left text-red-700">{formErrors.WhatsApp}</div>}
                </div>

                <div className="w-full mb-4">
                    <label className="flex items-center text-sm font-barlow text-white">
                        <input
                            className="mr-2 w-5 h-5 border-white border-[1px] rounded-0 custom-checkbox "
                            type="checkbox"
                            name="Newsletter"
                            checked={formData.Newsletter}
                            onChange={handleChange}
                        />
                        Inscrever-se na newsletter MDGP
                    </label>
                </div>
            </div>

            <div className="w-full mt-[-75px] max-@tablet:mt-[-25px]">
              <button
                className="border-[3px] border-white px-[30px] py-[10px] ml-auto block text-[14px] text-white leading-[10.57px] font-arame"
                type="submit"
              >
                {loading ? (
                  <SyncLoader color={"#FFFFFF"} loading={loading} size={20} aria-label="Loading Spinner" data-testid="loader" />
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
    </div>
  ) : null;
};

const App = () => {
  const [isPopupVisible, setPopupVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopupVisible(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1 className='hidden'>Seu conteúdo principal</h1>
      <Popup isVisible={isPopupVisible} onClose={() => setPopupVisible(false)} />
    </div>
  );
};

export default App;
