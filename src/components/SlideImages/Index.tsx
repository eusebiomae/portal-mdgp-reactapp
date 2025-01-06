import { Images } from "@/@types";
import Image, { StaticImageData } from "next/image";
import { BiExpandAlt } from "react-icons/bi";

type TProps = {
  imagem: string;
  titulo: string;
  onClick: () => void;
};

const Index = ({ imagem, titulo, onClick }: TProps) => {
  return (
    <div
      className="overflow-hidden  w-full h-full"
      onClick={onClick}
    >
      <div className="group relative w-full h-[250px] @desktop:h-[560px] overflow-hidden">
        <Image 
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover"
          src={imagem} 
          fill 
          alt="" 
        />

        <span className="absolute bottom-2 right-10 z-10 font-barlow text-[14px] text-white">
          {titulo}
        </span>
      </div>
    </div>
  );
};

export default Index;
