import { Assistencia } from "./Assistencia";
import { Documents } from "./Documents";
import { User } from "./User";

export interface UserLogged {
    usuario: User;
    comunicados: string;
    manual_proprietarios: string;
    assistencia_tecnica: Assistencia[];
    memorial_descritivo: string;
    documentos: Documents[];
    preferences: string;
    arquivos: string;
  }
  