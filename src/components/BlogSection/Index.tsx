"use client";

import { LogoHeader, blogCTA, blogCard, blogHero, blogHeroMob } from "@/assets/img";
import Container from "@/components/Container/Index";
import Image from "next/image";
import { SetStateAction, useContext, useState } from "react";
import { motion } from 'framer-motion';
import Link from "next/link";
import axios from "axios";
import { HubidContext } from "../Contexts/HubidContext";
import { Blog } from "@/@types/Blog";
import formatDate from '@/functions/formatDate';

interface EmailNewsLetter {
  id_produto?: string;
  blog: Blog[];
}

const Index: React.FC<EmailNewsLetter> = ({ id_produto, blog }) => {
  const [visibleItems, setVisibleItems] = useState(4);
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // Estado para a categoria selecionada
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
      console.error('Erro ao enviar e-mail. Tente novamente.', error);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleShowMore = () => {
    setVisibleItems(visibleItems + 2); // Incrementa em 2 o número de itens visíveis
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category); // Atualiza a categoria selecionada
  };

  const items = blog.slice(0).map((item) => {
    return {
      id: item.id,
      slug: item.slug,
      image: `https://mdgp.dev.id360.net/${item?.imagem?.card}`,
      image2: item?.imagem?.cropped,
      category: item?.categoria?.nome,
      date: formatDate(item.created_at as string),
      title: item.title,
      description: item.description
    };
  });

  const filteredItems = selectedCategory 
    ? items.filter(item => item.category === selectedCategory) 
    : items;

  const firstItem = filteredItems[0];

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <>
      <a href="/">
        <Image src={LogoHeader} alt="Logo MDGP" className="absolute left-[30px] top-[20px] w-[50px] z-[2]" />
      </a>

      {firstItem && (
        <section key={firstItem.id} className="blog-destaque relative py-[70px]">
          <div
            className="destaque-title bg-[#F5F5F5] absolute z-[1] w-[40%] max-@tablet:w-[310px] h-[400px] max-@tablet:h-[250px] top-0 left-0 max-@tablet:left-auto max-@tablet:right-0 flex justify-end items-end"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <div className="title w-[250px] mr-[65px] max-@tablet:mr-auto max-@tablet:ml-4 mb-[42px] max-@tablet:mb-3">
              <p className="font-arame text-[10px] font-bold tracking-[7px] mb-10 max-@tablet:mb-5">blog</p>
              <p className="font-arame text-[45px] max-@tablet:text-[30px] font-normal leading-[45px] max-@tablet:leading-[30px] max-@tablet:w-[245px]">
                fique por dentro do universo mdgp
              </p>
            </div>
          </div>

          <div className="destaque-infos bg-[#F5F5F5]">
            <Image
              src={firstItem.image2 as string}
              width={0}
              height={0}
              sizes="100vw"
              alt="Imagem Banner Hero Blog"
              className="w-[88%] h-[530px] mt-[190px] max-@tablet:hidden object-cover"
            />
            <Image
              src={blogHeroMob}
              alt="Imagem Banner Hero Blog Mobile"
              className="w-full h-[430px] mt-45px @desktop:hidden"
            />
            <div className="infos w-[700px] max-@tablet:w-[340px] mt-[70px] mx-auto">
              <div className="infos-header flex justify-between items-center mb-[15px]">
                <p 
                  className="font-arame text-[10px] font-bold tracking-[1px] text-[#7A7E83] cursor-pointer"
                  onClick={() => handleCategoryClick(firstItem.category)}
                >
                  {firstItem.category}
                </p>
                <p className="font-barlow text-[12px] font-medium text-[#7A7E83]">{firstItem.date}</p>
              </div>
              <h2 className="infos-title font-arame text-[30px] font-normal leading-[30px] mb-5">
                {firstItem.title}
              </h2>
              <p className="infos-intro font-barlow text-4 font-normal leading-7 mb-10">
                {firstItem.description}
              </p>
              <Link href={`/blog-materia/${firstItem.slug}`}>
                <button
                  className="
                    px-[30px]
                    py-[13px]
                    font-arame
                    font-bold
                    uppercase
                    text-[14px]
                    tracking-[2px]
                    border-[3px]
                    border-[#2B2B2B]
                    hover:border-[#7A7E83]
                    ease-in-out duration-300
                    hover:text-[#7A7E83]"
                >
                  ler matéria
                </button>
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="blog-items py-[70px] bg-[#F5F5F5]">
        <div className="items mx-auto w-[970px] max-@tablet:w-full flex flex-wrap justify-between max-@tablet:justify-center">
          {filteredItems.slice(0, visibleItems).map((item) => (
            <motion.div
              key={item.id}
              className="itemCard w-[470px] max-@tablet:w-[340px] @desktop:mb-[70px]"
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <Link href={`/blog-materia/${item.slug}`}>
                <Image src={item.image as string} width={0} height={0} sizes="100vh" alt="Imagem Blog Card" className="w-full h-[320px] mb-4 object-cover" />
              </Link>
                <div className="infos-itemCard">
                  <div className="infos-headerCard flex justify-between items-center mb-[15px]">
                    <p 
                      className="font-arame text-[10px] font-bold tracking-[1px] text-[#7A7E83] cursor-pointer"
                      onClick={() => handleCategoryClick(item.category)}
                    >
                      {item.category}
                    </p>
                    <p className="font-barlow text-[12px] font-medium text-[#7A7E83]">{item.date}</p>
                  </div>
                  <Link href={`/blog-materia/${item.slug}`}>
                    <h2 className="infos-titleCard w-[340px] font-arame text-[20px] font-normal leading-[22px] mb-[10px]">{item.title}</h2>
                    <p className="infos-introCard w-[340px] font-barlow text-4 font-normal leading-6 mb-10">{item.description}</p>
                  </Link>
                </div>
            </motion.div>
          ))}
        </div>

        {visibleItems < filteredItems.length && (
          <div className="mais-btn flex justify-center mt-[70px]">
            <button
              className="
              btn-mais
              px-[30px]
              py-[18px]
              font-arame 
              font-bold
              uppercase 
              text-[12px] 
              border-[3px] 
              border-[#2B2B2B] 
              hover:border-[#7A7E83] 
              ease-in-out duration-300 
              hover:text-[#7A7E83]"
              onClick={handleShowMore}
            >
              ver mais matérias
            </button>
          </div>
        )}
      </section>

      <section className="blog-cta relative flex items-center justify-center py-[70px] bg-[#C5C8C7]">

        <Container className="relative h-full max-@tablet:h-auto flex  max-@tablet:flex-col justify-center items-center">

          <Image src={blogCTA} alt="Image CTA Acompanhe" className="max-@tablet:w-[215px] max-@tablet:absolute max-@tablet:right-0 max-@tablet:top-0"></Image>

          <div className="w-[769px] mt-[30px] ml-[-45px] max-@tablet:ml-0 relative max-@desktop:w-full">
            
            <p className="text-[30px] text-[#2B2B2B] uppercase leading-[30px] font-arame w-[210px]">ACOMPANHE AS NOVIDADES DA MDGP</p>

            <div className="border-t-[3px] border-[#2B2B2B] mt-[30px] max-@tablet:mt-[10px] pt-[30px] flex justify-end  max-@tablet:items-start gap-5 items-center max-@desktop:flex-col">
              <p className="text-[16px] max-@desktop:mb-[20px] max-@tablet:mb-0 max-@tablet:mt-[120px] font-barlow">
                Cadastre-se para receber nossa newsletter
              </p>

              <div className="items-start flex">
                <input 
                  className="w-[257px] h-[51px] max-@desktop:w-[200px] max-@desktop:h-[45px] bg-[#C5C8C7] border-[1px] border-[#2B2B2B] p-[13px] text-[#2B2B2B]" 
                  placeholder="Digite seu e-mail"
                  value={email} 
                  type="email" 
                  onChange={handleEmailChange} 
                />
                <button 
                  className="w-[114px] h-[51px] max-@desktop:h-[45px] border-[3px] border-[#2B2B2B] uppercase text-[14px] font-arame hover:border-[#7A7E83] ease-in-out duration-300 hover:text-[#7A7E83]"
                  onClick={handleSubmit}
                >Enviar</button>
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
