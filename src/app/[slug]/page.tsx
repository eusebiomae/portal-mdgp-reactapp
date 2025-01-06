export const fetchCache = 'force-no-store';

import Container from "@/components/Container/Index";
import Breadcrumbs from "@/components/Breadcrumbs/Index";
import HeaderDetails from "@/components/HeaderDetails/Index";
import HeaderDetailsSold from "@/components/HeaderDetailsSold/Index";
import AboutProject from "@/components/AboutProject/Index";
import Plants from "@/components/Plants/Index";
import TabsTourImages from "@/components/TabsTourImages/Index";
import CommonAreas from "@/components/CommonAreas/Index";
import Localization from "@/components/Localization/Index";
import Contact from "@/components/Contact/Index";
import Newsletter from "@/components/Newsletter/Index";
import Conheca from "@/components/Conheca/Index";
import Exclusivity from "@/components/Exclusivity/Index";
import Construction from "@/components/Construction/Index";
import Apartments from "@/components/Apartments/Index";
import ApartmentsAreas from "@/components/ApartmentsAreas/Index";
import Differences from "@/components/Differences/Index";
import FAB from "@/components/FAB/Index";
import axios from "axios";
import { Product } from "@/@types";
import { NextPage } from "next";

import type { Metadata } from 'next';

async function fetchProduct(slug: string): Promise<Product | null> {
  try {
    console.log('slug',slug);

    const res = await fetch(`https://mdgp.dev.id360.net/api/empreendimentos?slug=${slug}`);
    const response = await res.json();
    return response.produto[0] || null;

  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

// Função para construir a metadata dinamicamente
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = params;
  const product = await fetchProduct(slug);

  if (product) {
    return {
      title: product.title,
      description: product.description,
    };
  } else {
    return {
      title: "Página não encontrada",
      description: "O empreendimento que você está procurando não foi encontrado.",
    };
  }
}

const Index: NextPage = async ({params}:any) => { Promise<Product | null>
  const { slug } = params;
  const product = await fetchProduct(slug);
  
  
  if (!product) {
    // Caso o produto não seja encontrado
    return <div className="h-[80vh] flex justify-center items-center">
      <p className="text-[30px] text-center font-bold text-[#1E2256] uppercase">Página não encontrada</p>
      </div>;
  }

  if (product.status_id != '5') {
      return (
        <main className="bg-[#F5F5F5]">
    
          <HeaderDetails product={product}/>
    
          <AboutProject product={product} /> 
    
          <TabsTourImages product={product}/>
          
          <Plants product={product}/>
    
          <Container className="overflow-hidden">
            <Exclusivity />
          </Container>
    
          <Apartments product={product}/>
    
          <Container className="overflow-hidden">
            <Differences product={product}/>
          </Container>
    
          <Construction product={product}/>
    
          <Container className="overflow-hidden">
            <Contact />
          </Container>
    
          <FAB />
        </main>
      );
  } else {
    return (
      <main className="bg-[#F5F5F5]">

        <HeaderDetailsSold product={product}/>

        <ApartmentsAreas product={product}/>

        <Newsletter id_produto='03afdbd66e561'/>
    
        <FAB />
      </main>
    );
  }


};

export default Index;
