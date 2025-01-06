import { Diferenciais } from './Diferenciais';
import { Gallery } from './Gallery';
import { Images } from './Images';
import { Partnership } from './Partnership';
import { Projetistas } from './Projetistas';
import { PropertyTypes } from './PropertyTypes';

export interface Product {
  url: string;
  slug?: string;
  occupation?: string | null;
  nome: string | null;
  status_id: string;
  tipo_id: string;
  background: Images;
  logo: Images;
  municipio_id: string;
  legenda_fachada: string;
  sobre: string;
  sobre_titulo: string;
  video: string;
  fachada: Images;
  privativa: string;
  dormitorios: string;
  unidades: string;
  projetistas: Projetistas[];
  torres: string;
  id_produto: string;
  latitude: number;
  longitude: number;
  bairro: string;
  endereco: string;
  title: string;
  description: string;
  ordem: number;

  porcentagem: string;
  fundacao: string;
  estrutura: string;
  paredes: string;
  instalacoes: string;
  esquadrias: string;
  revestimento_in: string;
  revestimento_ex: string;
  acabamentos: string;
  
  ativo: number;
  stand: number;
  plantas: Gallery[];
  fotos: Gallery[];
  fotos_obra: Gallery[];
  etapas_obra: Gallery[];
  type?: PropertyTypes;
  gtag?:string;
  diferenciais: Diferenciais[];
}
