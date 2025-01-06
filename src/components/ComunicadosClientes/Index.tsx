'use client';
import { useEffect, useState } from 'react';
import { UserLogged } from "@/@types/UserLogged";
import { iconShareBooks } from "@/assets/img";
import Container from "@/components/Container/Index";
import Image from "next/image";


interface Arquivo {
    nomeacao_arquivo: string;
    titulo: string;
    caminho: string;
    created_at: string;
}


interface ComunicadosClientesProps {
    userLogged: UserLogged;
}

// Função para buscar documentos
const fetchDocumentos = async (usuario_id: number) => {
    const res = await fetch(`https://mdgp.dev.id360.net/api/clienteDocumentos?usuario_id=${usuario_id}&tipo_id=8`);
    return await res.json();
};

// Função para buscar assistência
const fetchAssistencia = async (usuario_id: number) => {
    const res = await fetch(`https://mdgp.dev.id360.net/api/clienteDocumentos?usuario_id=${usuario_id}&tipo_id=5`);
    return await res.json();
};

const ComunicadosClientes: React.FC<ComunicadosClientesProps> = ({ userLogged }) => {
    const [documentos, setDocumentos] = useState<Arquivo[]>([]);
    const [assistencia, setAssistencia] = useState<Arquivo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    const userId = userLogged.usuario?.id ? Number(userLogged.usuario.id) : undefined;

    useEffect(() => {
        const fetchData = async () => {
            if (userId !== undefined) {
                try {
                    const [documentosData, assistenciaData] = await Promise.all([
                        fetchDocumentos(userId),
                        fetchAssistencia(userId),
                    ]);
                    setDocumentos(documentosData);
                    setAssistencia(assistenciaData);
                } catch (err) {
                    console.error('Erro ao buscar documentos:', err);
                    setError('Erro ao carregar dados. Tente novamente mais tarde.');
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchData();
    }, [userId]); // Chama a API apenas se userId mudar

    if (loading) {
        return <p>Carregando documentos...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (userId === undefined) {
        return <p>Usuário não encontrado.</p>;
    }

    return (
        <>
            <section id="documentos" className="documentos">
                <Container>
                    <div className="pt-[70px] max-@tablet:pt-[60px] pb-[70px]">
                        <header>
                            <h2 className="text-[#2B2B2B] tracking-[7px] uppercase text-[10px] font-arameBold font-normal mb-[70px]">
                                documentos
                            </h2>
                        </header>

                        {/* Verificando se documentos e arquivos existem antes de mapear */}
                        {documentos?.map((item: Arquivo) => (
                            <div key={item.titulo} className="content border-b-2 border-b-black pb-5 w-auto max-@tablet:w-full mb-5 ml-[90px] max-@tablet:ml-0">
                                <div className="content-text flex justify-between items-start mb-5">
                                    <p className="title font-arame text-xl text-[#2B2B2B]">
                                        {item.titulo}
                                    </p>
                                    <p className="date font-barlow text-xs text-[#7A7E83]">
                                        {new Date(item.created_at).toLocaleDateString('pt-BR', {
                                            day: '2-digit',
                                            month: '2-digit',
                                            year: 'numeric'
                                        })}
                                    </p>
                                </div>
                                <a className="button button--files flex items-center" href={`https://mdgp.dev.id360.net/${item.caminho}`} target="_blank" rel="noopener noreferrer">
                                    <p className="font-barlow font-semibold text-base text-[#2B2B2B]">
                                        Faça o download do arquivo: 
                                    </p>
                                    <Image 
                                        src={iconShareBooks}
                                        alt=""
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
            
            {/* <section id="assistencia" className="assistencia">
                <Container>
                    <div className="pt-[70px] max-@tablet:pt-[60px] pb-[70px]">
                        <header>
                            <h2 className="text-[#2B2B2B] tracking-[7px] uppercase text-[10px] font-arameBold font-normal mb-[70px]">
                                assistência técnica
                            </h2>
                        </header>
                        {assistencia?.map((item: Arquivo) => (
                            <div key={item.titulo} className="content border-b-2 border-b-black pb-5 w-auto max-@tablet:w-full mb-5 ml-[90px] max-@tablet:ml-0">
                                <div className="content-text flex justify-between items-start mb-5">
                                    <p className="title font-arame text-xl text-[#2B2B2B]">
                                        {item.titulo}
                                    </p>
                                    <p className="date font-barlow text-xs text-[#7A7E83]">
                                        {new Date(item.created_at).toLocaleDateString('pt-BR', {
                                            day: '2-digit',
                                            month: '2-digit',
                                            year: 'numeric'
                                        })}
                                    </p>
                                </div>
                                <a className="button button--files flex items-center" href={`https://mdgp.dev.id360.net/${item.caminho}`} target="_blank" rel="noopener noreferrer">
                                    <p className="font-barlow font-semibold text-base text-[#2B2B2B]">
                                        Faça o download do arquivo: 
                                    </p>
                                    <Image 
                                        src={iconShareBooks}
                                        alt=""
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                </Container>
            </section> */}
        </>
    );
};

export default ComunicadosClientes;
