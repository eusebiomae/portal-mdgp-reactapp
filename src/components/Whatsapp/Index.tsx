"use client";
import { z } from "zod";
import { SyncLoader } from "react-spinners";
// import { HubidContext } from "@/components/contexts/HubidContext";
import Container from "@/components/Container/Index";
import { CONSETN_FORM, TEXT_CONTACT } from "@/constants/";
import { useContext, useState } from "react";
import { sendGTMEvent } from "@next/third-parties/google";
import axios from "axios";
import Link from "next/link";
import InputMask from "react-input-mask";
import Image from "next/image";
import { logoToca55Dark } from "@/assets/img";
import Modal from "../Modal/Index";
import { PiTelegramLogo } from "react-icons/pi";

// import ReactGA from "react-ga";

const Index = () => {
  // const session = useContext(HubidContext);
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
          // ...session,
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

  const [selectedOption, setSelectedOption] = useState();

  const handleSelect: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setSelectedOption(selectedOption);
  };

  return (
    <section
      id="contact"
      className="flex h-full"
      // data-header="contact"
    >
      <Container className="flex flex-col @desktop:flex-row items-center justify-center gap-8 overflow-y-scroll @desktop:overflow-y-auto pt-20 @desktop:pt-0">
        <div className="flex flex-col items-start justify-center mt-[320px] @desktop:mt-14">
          <Image
            src={logoToca55Dark}
            alt=""
            width={120}
            height={50}
            className=""
          />
          <div className="w-full border-b border-[#1E2256]/80 pb-5 mb-5"></div>
          <h2 className="text-[32px] text-left text-[#1E2256] font-extrabold mt-3">
            Saiba mais sobre o projeto.
          </h2>
        </div>
        <div className="">
          <form
            onSubmit={onSubmit}
            className="w-[345px] @desktop:w-[650px]"
            method="POST"
          >
            <div className="mb-[2px]">
              <label
                htmlFor="name"
                className="inline-block w-full mb-2 cursor-pointer text-body-16 font-body text-[#1E2256]"
              >
                Nome<sup>*</sup>
              </label>
              <input
                className="w-full py-4 px-3 bg-white text-gray-dark outline-none hover:ring-2 ring-gray-dark transition-all ease-linear border-2 border-gray-dark focus:border-gray-dark"
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
            <div className="mb-[2px]">
              <label
                htmlFor="email"
                className="inline-block w-full mb-2 cursor-pointer text-body-16 font-body text-[#1E2256]"
              >
                E-mail<sup>*</sup>
              </label>
              <input
                className="w-full py-4 px-3 bg-white text-gray-dark outline-none hover:ring-2 ring-gray-dark transition-all ease-linear border-2 border-gray-dark focus:border-gray-dark"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                id="email"
                type="email"
                placeholder=""
              />
              {formErrors?.Email && (
                <div className="text-left text-red-700">{formErrors.Email}</div>
              )}
            </div>
            <div className="mb-[2px]">
              <label
                htmlFor="phone"
                className="inline-block w-full mb-2 cursor-pointer text-body-16 font-body text-[#1E2256]"
              >
                Telefone com DDD<sup>*</sup>
              </label>

              <InputMask
                className="w-full py-4 px-3 bg-white text-gray-dark outline-none hover:ring-2 ring-gray-dark transition-all ease-linear border-2 border-gray-dark focus:border-gray-dark"
                name="Telefone"
                id="phone"
                type="text"
                mask="(99) 99999-9999"
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
            <div className="pb-2">
              <p className="text-[#1E2256] font-body text-body-11 text-center leading-5">
                Ao enviar você concorda com o{" "}
                <Link
                  className="underline underline-offset-4 hover:font-semibold"
                  href=""
                  onClick={handleConsentimento}
                >
                  Termo de Consentimento
                </Link>{" "}
                para utilização de dados pessoais.
              </p>
            </div>
            <div className="mb-4">
              <button
                className="group  text-white w-full py-2 border-2 border-[#1E2256] px-4 flex items-center gap-5 justify-center font-semibold text-center text-lg rounded-lg outline-none hover:bg-white hover:text-[#1E2256] transition-all ease-linear"
                onClick={() =>
                  sendGTMEvent({
                    event: "buttonClicked",
                    value: "Sucesso Email",
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
          </form>
        </div>
      </Container>
      {isConsentimentoModalOpen && (
        <Modal
          isOpen={isConsentimentoModalOpen}
          onClose={handleConsentimentoClose}
        >
          <div className="flex justify-center h-full bg-center container text-center">
            {CONSETN_FORM.map(
              (
                { strong1, text1, text2, strong2, text3, email, text4 },
                index
              ) => (
                <div
                  key={index}
                  className="flex flex-col max-w-[70%] justify-center text-left overflow-scroll gap-4 h-full bg-center pt-96 pb-10 @desktop:pt-0 @desktop:pb-0 @desktop:overflow-auto"
                >
                  <p>
                    <strong>{strong1}</strong>
                    {text1}
                  </p>
                  <p className="font-normal">{text2}</p>
                  <p>
                    <strong>{strong2}</strong>
                    {text3}
                    <strong>{email}</strong>
                  </p>
                  <p>{text4}</p>
                </div>
              )
            )}
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Index;
