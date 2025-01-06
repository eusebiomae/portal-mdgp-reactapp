export const fetchCache = 'force-no-store';

import Container from "@/components/Container/Index";
import RevistaSection from "@/components/RevistaSection/Index";
import Map from "@/components/Map/Index";
import Conheca from "@/components/Conheca/Index";
import FAB from "@/components/FAB/Index";
import CTA from "@/components/CTA/Index";
import Project from "@/components/Project/Index";
import { Revistas } from "@/@types/Revistas";
import { NextPage } from "next";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Revista MDGP | MDGP Incorporações',
  description: '',
}

async function fetchRevistas(): Promise<Revistas[] | null> {
  try {

    const res = await fetch(`https://mdgp.dev.id360.net/api/revistas`);
    const response = await res.json();
    return response.arquivos.data || null;

  } catch (error) {
    console.error('Error fetching edicao:', error);
    return null;
  }
}

const Index: NextPage = async ({params}:any) => { Promise<Revistas | null>
  const { slug } = params;
  const revistas = await fetchRevistas();

  if (!revistas) {
    // Caso o produto não seja encontrado
    return <div className="h-[80vh] flex justify-center items-center">
      <p className="text-[30px] text-center font-bold text-[#1E2256] uppercase">Página não encontrada</p>
      </div>;
  }

  return (
    <main className=" bg-[#99928C]">      
      <RevistaSection id_produto='03afdbd66e561' revistas={revistas}/>
      <FAB />
    </main>
  );
};

export default Index;
