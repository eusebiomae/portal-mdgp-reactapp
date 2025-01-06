import { Categoria } from "./Categoria";
import { Diferencial } from "./Diferencial";


export interface Diferenciais {
  id?: string;
  empreendimento_id?: number;
  diferencial_id?: number;
  ordem?: number;

  diferencial: Diferencial;
}
