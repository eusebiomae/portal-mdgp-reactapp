import { Images } from "./Images";

export interface Revistas {
  id: number;
  edicao: string;
  titulo: string;
  descricao: string,
  url: string,
  imagem: Images,
  ordem: string,
  arquivo: string,
}
