import Container from "@/components/Container/Index";
import EnterprisesHeroSection from "@/components/EnterprisesHeroSection/Index";
import EnterprisesPage from "@/components/EnterprisesPage/Index";
import FAB from "@/components/FAB/Index";
import { FaMagnifyingGlass } from "react-icons/fa6";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Conheça nossos empreendimentos à venda | MDGP Incorporações',
  description: 'Saiba tudo sobre os empreendimentos imobiliários de alto padrão que a MDGP oferece em Curitiba.',
}

const Index = () => {
  return (
    <main className="overflow-hidden">
      <EnterprisesHeroSection id_produto='03afdbd66e561' />
      <FAB />
    </main>
  );
};

export default Index;
