"use client";
export const fetchCache = 'force-no-store';

import HeroClientes from "@/components/HeroClientes/Index";
import ComunicadosClientes from "@/components/ComunicadosClientes/Index";
import FAB from "@/components/FAB/Index";
import type { Metadata, NextPage } from 'next';
import { UserLogged } from "@/@types/UserLogged";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'

async function fetchUserLogged(userId:string): Promise<UserLogged | null> {
  try {
    const res = await fetch(`https://mdgp.dev.id360.net/api/areaCliente?usuario_id=${userId}`);

    if (!res.ok) {
      console.error('Response not OK:', res.status);
      return null;
    }

    const response = await res.json();
    
    if (!response.loggedFilesUsers || response.loggedFilesUsers.length === 0) {
      console.error('loggedFilesUsers is undefined or empty');
      return null;
    }    
    
    return response.loggedFilesUsers[0]; 

    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
}

const Index =  ()  => {
  const [userLogged, setUserLogged] = useState<UserLogged | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter(); 

  useEffect(() => {
    const storedUser = sessionStorage.getItem('userSession');
    
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      const userId = parsedUser[0].id;
      fetchUserLogged(userId).then((user) => {
        setUserLogged(user);
        setLoading(false);
      });
    } else { 
      router.replace('/');
      setLoading(false);
      
    }
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userLogged) {
    return (
      <>
      <div className="h-[80vh] flex justify-center items-center">
        <p className="text-[30px] text-center font-bold text-[#1E2256] uppercase">Página não encontrada</p>
      </div>
      </>
    );
  }

  return (
    <main className="bg-[#F5F5F5]">
      <HeroClientes userLogged={userLogged} /> {/* Passa o usuário logado */}
      <ComunicadosClientes userLogged={userLogged}/> {/* Passa os dados do usuário para os comunicados */}
      <FAB />
    </main>
  );
};

export default Index;
