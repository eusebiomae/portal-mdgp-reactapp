"use client"

import { LogoHeader, blogCTA, blogCard, blogHero, blogHeroMob, blogMateriaCorpo } from "@/assets/img";
import Container from "@/components/Container/Index";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { SetStateAction, useContext, useEffect, useState } from "react";
import { HubidContext } from "../Contexts/HubidContext";
import { Blog } from "@/@types/Blog";
import formatDate from "@/functions/formatDate";

interface EmailNewsLetter  {
  id_produto?: string;
  post:Blog;
  categoria:Blog[];
}

const Index: React.FC<EmailNewsLetter> = ({id_produto,post,categoria}) => {
  const [processedBody, setProcessedBody] = useState<string>('');

  useEffect(() => {
    if (post.body) {
      // Função para ajustar as imagens
      const fixImagePaths = (html: string) => {
        return html.replace(/<img.*?src="(\/images\/.*?)".*?>/g, (match, p1) => {
          // Substitui o caminho relativo da imagem pela URL base
          const newSrc = `https://mdgp.dev.id360.net${p1}`;
          return match.replace(p1, newSrc);
        });
      };

      // Processa o conteúdo HTML da matéria para corrigir os caminhos das imagens
      const newBody = fixImagePaths(post.body as string);
      setProcessedBody(newBody); // Atualiza o estado com o conteúdo processado
    }
  }, [post.body]);


  console.log(post,'post');
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);

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


  const items = categoria.map((item)=>{
    return {
      id: item.id,
      image: item?.imagem?.card ?  `https://mdgp.dev.id360.net/${item?.imagem?.card}` : item?.imagem?.cropped,
      category: item.categoria.nome,
      date: formatDate(item.created_at as string),
      title: item.title,
      description: item.description,
      slug:item.slug
    }
  })


  return (
    <>
      <a href="/">
        <Image src={LogoHeader} alt="Logo MDGP" className="absolute left-[30px] top-[20px] w-[50px] z-[1]"></Image>
      </a>

      <section className="blog-materia-hero pt-[140px] max-@tablet:pt-[127px]">
        <Container>
          <div className="intro-materia mb-[70px] max-@tablet:mb-[20px]"
          >

            <div className="infos w-[700px] max-@tablet:w-full mx-auto">
              <div className="infos-header flex justify-between items-center mb-[15px]">
                <p className="font-arame text-[10px] font-bold tracking-[1px] text-[#7A7E83]"><strong className="text-[#2B2B2B]">BLOG</strong> • {post.categoria.nome}</p>
                <p className="font-barlow text-[12px] font-medium text-[#7A7E83]">{formatDate(post.created_at as string)}</p>
              </div>

              <h2 className="infos-title font-arame text-[45px] max-@tablet:text-3xl font-normal leading-[45px] max-@tablet:leading-[30px] mb-5 w-[520px] max-@tablet:w-full">{post.title}</h2>
            </div>

          </div>
        </Container>

        <Image 
          width={0}
          height={0}
          sizes="100vh"
          src={ post.imagem.cropped as string } 
          alt="Imagem Banner Hero Blog Mobile"
          className="w-full h-[415px] @desktop:hidden"
        >
        </Image>

        <Container>

          <Image 
            width={0}
            height={0}
            sizes="100vh" src={ post.imagem.cropped as string }  alt="Image Banner Hero Materia" className="max-@tablet:hidden object-cover w-[1200px] h-[570px]"
          ></Image>

          <div className="infos-materia mx-auto mt-[70px] max-@tablet:mt-[30px] w-[880px] max-@tablet:w-full font-barlow"   dangerouslySetInnerHTML={{ __html: processedBody }} />
        
     
        </Container>

      </section>

      <Container>
        <section className="blog-relacionados mx-auto w-[880px] max-@tablet:w-full border-t-2 border-t-black pt-[70px] max-@tablet:pt-[29px] pb-[76px] max-@tablet:pb-0">
            <p className="title-relacionados font-arame text-[30px] font-normal leading-[30px] mb-[20px]">
              matérias relacionadas
            </p>

            <div className="items flex flex-wrap justify-between max-@tablet:justify-center">

              {items.map((item) => (
                <div
                  key={item.id}
                  className="itemCard w-[430px] max-@tablet:w-[340px]"
                >
                  <Link href={`/blog-materia/${item.slug}`}>
                    <Image width={0} height={0} sizes="100vh" src={item.image as string} alt="Imagem Blog Card" className="w-full h-[290px] mb-4 object-cover" />

                    <div className="infos-itemCard">
                      <div className="infos-headerCard flex justify-between items-center mb-[15px]">
                        <p className="font-arame text-[10px] font-bold tracking-[1px] text-[#7A7E83]">{item.category}</p>
                        <p className="font-barlow text-[12px] font-medium text-[#7A7E83]">{item.date}</p>
                      </div>
                      <h2 className="infos-titleCard w-[340px] font-arame text-[20px] font-normal leading-[22px] mb-[10px]">{item.title}</h2>
                      <p className="infos-introCard w-[340px] font-barlow text-4 font-normal leading-6 mb-10">{item.description}</p>
                    </div>
                  </Link>
                </div>
              ))}

            </div>
        </section>
      </Container>

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
