import Image, { StaticImageData } from "next/image";
import { BiExpandAlt } from "react-icons/bi";

type TProps = {
  imagem: string;
  titulo: string;
  // onClick: () => void;
};

const Index = ({ imagem, titulo }: TProps) => {
  return (
    <div
      className="overflow-hidden w-full h-[250px]"
      // onClick={onClick}
    >
      <div className="group relative w-full h-[250px] overflow-hidden">
        {/* <button className="group-hover: group-hover:text-white absolute right-5 top-5 z-[1] p-2 bg-white rounded-md opacity-[0.6] group-hover:opacity-100">
          <BiExpandAlt className="" size={24} />
        </button> */}

        <Image 
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover" 
          src={imagem} 
          fill 
          alt="" 
        />

        <span className="absolute bottom-2 right-2 z-10 font-barlow text-white text-[14px]">
          {titulo}
        </span>
      </div>
    </div>
  );
};

export default Index;
