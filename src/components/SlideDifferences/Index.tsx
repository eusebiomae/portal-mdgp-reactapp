import Image from "next/image";

type TProps = {
  empresa: string;
  setor: string;
  descricao: string;
  imagem: string;
};

const Index = ({ empresa, setor, descricao, imagem }: TProps) => {
  return (
    <div className="w-auto overflow-hidden">
      <ul className="enterprise flex flex-col gap-4"> 
      <li className="relative">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-[300px] object-cover object-top mb-6"
                  src={imagem}
                  alt=""
                />
              </li>
              <li className="text-[#2B2B2B] text-[30px] leading-[30px] w-[8em] font-arame uppercase font-normal">{empresa}</li>
              <li className="text-[#2B2B2B] text-[12px] font-arame mt-[10px] mb-[30px]">{setor}</li>
              <li className="text-[#2B2B2B] font-barlow text-[18px] leading-[32px]">{descricao}</li>
      </ul>
    </div>
  );
};

export default Index;
