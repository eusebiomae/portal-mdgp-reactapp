"use client";

import { useState } from "react";
import Image from "next/image";
import { SetaCima } from "@/assets/img";
import { Product } from "@/@types";
import { NextPage } from "next";
import DifferencesList from "../DifferencesList/Index";

interface ProductProps {
  product: Product;
}

const Index: NextPage<ProductProps> = ({ product }) => {
  const [tamanho, setTamanho] = useState('450px');
  const [buttonOpen, setButtonOpen] = useState('block');
  const [buttonSeta, setButtonSeta] = useState('none');

  const handleTabChange = () => {
    const isCollapsed = tamanho === '450px';
    setTamanho(isCollapsed ? 'auto' : '450px');
    setButtonOpen(isCollapsed ? 'none' : 'block');
    setButtonSeta(isCollapsed ? 'block' : 'none');
  };

  return (
    <>
      <section id="diferenciais" className="mt-[70px] mb-[50px]">

        <div style={{ height: tamanho }} className="overflow-hidden">
          <DifferencesList product={product} />
        </div>

        <div className="flex justify-center mt-[70px]">
          <button
            className="font-arame text-[14px] leading-[10px] py-[15px] px-[30px] border-[3px] border-[#2B2B2B] hover:border-[#7A7E83] ease-in-out duration-300 hover:text-[#7A7E83]"
            style={{ display: buttonOpen }}
            onClick={handleTabChange}
          >
            Veja todos os diferenciais
          </button>
          <button className="ml-auto" style={{ display: buttonSeta }} onClick={handleTabChange}>
            <Image src={SetaCima} alt="Seta para cima" />
          </button>
        </div>
      </section>
    </>
  );
};

export default Index;
