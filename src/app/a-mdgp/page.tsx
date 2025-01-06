export const fetchCache = 'force-no-store';

import Container from "@/components/Container/Index";
import AboutSection from "@/components/AboutSection/Index";
import Map from "@/components/Map/Index";
import Conheca from "@/components/Conheca/Index";
import FAB from "@/components/FAB/Index";
import CTA from "@/components/CTA/Index";
import Project from "@/components/Project/Index";
import { Portfolios } from "@/@types/Portfolios";

import type { Metadata, NextPage } from 'next'
 
export const metadata: Metadata = {
  title: 'Sobre a MDGP | MDGP Incorporações',
  description: 'A MDGP INCORPORAÇÕES foi criada para atuar no desenvolvimento, execução e gestão de empreendimentos imobiliários de alto padrão em Curitiba.',
}

async function fetchRevistas(): Promise<Portfolios[] | null> {
  try {

    const res = await fetch(`https://mdgp.dev.id360.net/api/portfolios`);
    const response = await res.json();
    return response.arquivos.data || null;

  } catch (error) {
    console.error('Error fetching edicao:', error);
    return null;
  }
}


const Index: NextPage = async ({params}:any) => { Promise<Portfolios | null>
  const { slug } = params;
  const portfolios = await fetchRevistas();

  if (!portfolios) {
    // Caso o produto não seja encontrado
    return <div className="h-[80vh] flex justify-center items-center">
      <p className="text-[30px] text-center font-bold text-[#1E2256] uppercase">Página não encontrada</p>
      </div>;
  }

  return (
    <main className="bg-[#f5f5f5]">      
      <AboutSection portfolios={portfolios}/>
      <Conheca id_produto='03afdbd66e561'/>
      <FAB />
    </main>
  );
};

export default Index;
