import { Images } from "./Images";

export interface Gallery {
    empreendimento_id: number;
    imagem: Images;
    areacomun_id: number;
    ordem: string;
    titulo: string;
    escopo: string;
    data: any;
    video: string;
    mp4: string;

    descricao: string;
    destaque: string;
    foto: Images;
}