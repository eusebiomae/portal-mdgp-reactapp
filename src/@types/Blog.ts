import { Images } from "./Images";
import { Categoria } from "./Categoria";
import { Gallery } from "./Gallery";

export interface Blog {
    id?:string;
    title?:string;
    body?:string;
    description?:string;
    slug?:string;
    keyword?:string
    resume?:string
    author?:string
    active?:boolean;
    order?:number;
    created_at?:string;
    destaque?:string;
    leganda_destaque?:string;
    mobile?:Images[];
    fotos?:Gallery[];
    categoria:Categoria;
    imagem:Images;               
  }
  