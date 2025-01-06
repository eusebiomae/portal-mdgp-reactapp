"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SetaCima } from "@/assets/img";
import { Product } from "@/@types";
import { NextPage } from "next";

interface Diferencial {
  categoria_id: string;
  titulo: string;
}

interface ProductProps {
  product: Product;
}

// Mapeamento de categoria_id para nomes
const categoriaNomes: Record<string, string> = {
  "1": "Conforto",
  "2": "Design & Arquitetura",
  "3": "Segurança",
  "4": "Tecnologia",
  "5": "Sustentabilidade",
  "6": "nao tem",
  "7": "Arquitetura e conforto",
};

const DifferencesList: NextPage<ProductProps> = ({ product }) => {

  const [diferenciaisPorCategoria, setDiferenciaisPorCategoria] = useState<Record<string, Diferencial[]>>({});

  useEffect(() => {
    if (product && product.diferenciais) {
      const organizados: Record<string, Diferencial[]> = {};

      product.diferenciais.forEach(({ diferencial }) => {
        if (diferencial) {
          const { categoria_id, titulo } = diferencial;
          
          // Obtenha o nome da categoria usando o ID
          const categoriaNome = categoriaNomes[categoria_id];

          // Verifica se a chave do nome da categoria já existe
          if (categoriaNome && !organizados[categoriaNome]) {
            organizados[categoriaNome] = [];
          }
          
          // Adiciona o diferencial à lista correspondente à categoria
          organizados[categoriaNome].push({ categoria_id: categoriaNome, titulo });
        }
      });

      setDiferenciaisPorCategoria(organizados);
    }
  }, [product]);

  return (
    <>
      <section id="diferenciaisList" className="diferenciaisList">

        <p className="text-[#2B2B2B] tracking-[0.5em] uppercase text-[12px] font-arame mb-[70px] max-@tablet:mb-5 text-2xl font-bold">
          diferenciais {product.nome}
        </p>

        <div className="allCards overflow-hidden flex flex-wrap gap-20 max-@tablet:gap-8">
          {Object.entries(diferenciaisPorCategoria).map(([categoriaNome, diferenciais]) => (
            <div key={categoriaNome}>
              <p className="h-[70px] max-@tablet:h-auto font-arame text-[30px] leading-[30px] max-w-[6em] max-@desktop:text-[22px] max-@desktop:leading-[22px] mb-[20px] max-@tablet:mb-0">
                {categoriaNome}
              </p>

              <ul className="cardList @desktop:flex flex-col w-[230px] max-@tablet:w-full gap-[15px]">
                {diferenciais.map((diferencial, index) => (
                  <li key={index} className="max-@desktop:mb-[50px] max-@tablet:mb-[5px]">
                    <ul>
                      <li className="h-[75px] border-[#2B2B2B] border-b-[1px] font-barlow text-[16px] leading-[20px] flex items-center pb-4 max-@tablet:pb-0">
                        <p>{diferencial.titulo}</p>
                      </li>
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default DifferencesList;
