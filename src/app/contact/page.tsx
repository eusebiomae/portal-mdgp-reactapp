import Container from "@/components/Container/Index";
import ContactPage from "@/components/ContactPage/Index";
import FAB from "@/components/FAB/Index";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Fale Conosco | MDGP Incorporações',
  description: 'A equipe da MDGP Incorporações está pronta para responder suas dúvidas. Entre em contato conosco!',
}

const Index = () => {
  return (
    <main className="bg-[#C5C8C7] overflow-hidden">
      <Container>
        <ContactPage />
      </Container>
      {/* <FAB /> */}
    </main>
  );
};

export default Index;
