"use client";

import { ReactNode } from "react";
import "@/styles/globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import Navigation from "@/components/Navigation/Index";
import Footer from "@/components/Footer/Index";
import { HubidProvider } from "@/components/Contexts/HubidContext";
import { AuthProvider } from "@/components/Contexts/AuthContext";
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AuthProvider>
      <HubidProvider>
        <html className="scroll-smooth" lang="pt-br">
          <head>
            <title>MDGP Incorporações</title>
            <meta
              name="description"
              content="Localizações nobres e projetos autorais repletos de personalidade. Os empreendimentos da MDGP são concebidos para serem marcos em design e sustentabilidade."
            />
            <meta
              name="keywords"
              content="MDGP Incorporações, Empreendimentos Inéditos, Empreendimentos Alto Padrão, MDGP Marlus Doria"
            />
            <GoogleTagManager gtmId="GTM-W5H7QLP" />
          </head>
          <body
            className="selection:bg-black selection:text-white bg-white text-gray-dark"
          >
            {/* Renderiza Navigation apenas se não estiver na página "espaco-cliente" */}
            {pathname !== "/espaco-cliente" && <Navigation />}
            {children}
            <Footer />
          </body>
          <script src="https://script.hubid360.com.br/js" async></script>
        </html>
      </HubidProvider>
    </AuthProvider>
  );
}
