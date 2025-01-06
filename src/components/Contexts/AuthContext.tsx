"use client";

import { createContext, useState, useContext, ReactNode } from 'react';
import { useRouter } from 'next/navigation'; // Importa a nova API de navegação
import { fetchUserLogin } from "@/utils/fetchUserLogin"; // Importe a função correta
import { User } from '@/@types/User';
import { boolean } from 'zod';

interface AuthContextProps {
  isAuthenticated: boolean;
  user: User | null;  // Adiciona o objeto do usuário logado
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);  // Estado para armazenar o usuário logado
  const router = useRouter(); // Usa a nova API de navegação

  const login = async (username: string, password: string) => {
    
    const fetchedUser: User | null = await fetchUserLogin(username, password);

    let meuUser = fetchedUser && Object.keys(fetchedUser).length > 0 ? true : false;
    
    if (meuUser) {
      sessionStorage.setItem('userSession', JSON.stringify(fetchedUser));
      setIsAuthenticated(true);
      setUser(fetchedUser);  // Armazena o usuário logado
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    sessionStorage.removeItem('userSession');
    sessionStorage.clear();
    setIsAuthenticated(false);
    setUser(null);  // Reseta o usuário ao deslogar
    router.push('/'); // Redireciona para a página inicial (ou de login)
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
