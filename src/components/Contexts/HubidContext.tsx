"use client";
import React, { ReactNode, createContext, useEffect, useState } from "react";
import Cookie from "js-cookie";

const id_produto = '03afdbd66e479'

interface HubidContextData {
  historico_id: string | null;
  Referencia: string | null;
  Referencia_raw: string | null;
  pagina: string | null;
  Origem: string | null;
  id_produto: string | null;
  Termo_Consentimento: string | null;
  WhatsApp: boolean | null;
  Newsletter: boolean | null;
}

export const HubidContext = createContext<HubidContextData>({
  historico_id: null,
  Referencia: null,
  Referencia_raw: null,
  pagina: null,
  Origem: null,
  id_produto: "",
  Termo_Consentimento: "",
  WhatsApp: true,
  Newsletter: true,
});

interface HubidProviderProps {
  children: ReactNode;
}

export const HubidProvider: React.FC<HubidProviderProps> = ({ children }) => {
  const [contextValue, setContextValue] = useState<HubidContextData>({
    historico_id: null,
    Referencia: null,
    Referencia_raw: null,
    pagina: null,
    Origem: null,
    id_produto,
    Termo_Consentimento: "Aceito",
    WhatsApp: true,
    Newsletter: true,
  });

  useEffect(() => {
    const checkCookie = () => {
      const hubidUser = Cookie.get("hubid_user");
      if (hubidUser) {
        // const decodedHubidUser = hubidUser
        //   ? JSON.parse(window.atob(hubidUser))
        //   : {};
        const hubid_rawref = Cookie.get("hubid_rawref");
        const decodedValueHubidRawref = hubid_rawref
          ? JSON.parse(window.atob(hubid_rawref))
          : {};

        setContextValue((prevContext) => ({
          ...prevContext,
          // historico_id: decodedHubidUser.history_id
          //   ? `${decodedHubidUser.history_id}`
          //   : null,
          Referencia_raw: decodedValueHubidRawref.url || null,
          Referencia: decodedValueHubidRawref.referrer || null,
          pagina: decodedValueHubidRawref.url || null,
          Origem: decodedValueHubidRawref.origem || null,
        }));
      } else {
        setTimeout(checkCookie, 1000);
      }
    };

    checkCookie();
  }, []);

  return (
    <HubidContext.Provider value={contextValue}>
      {children}
    </HubidContext.Provider>
  );
};
