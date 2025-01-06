import { Images } from "@/@types";
import { iconAddress, iconConstruct, iconMetragem, iconType, iconYear } from "@/assets/img";
import Image from "next/image";
import parse from "html-react-parser";

type TProps = {
  descricao: string;
  area_total: string;
  torres: string;
  unidades: string;
  incorporacao: string;
  participacao: string;
  imagem: string;
  data: string;
};

const Index = ({ descricao, area_total, torres, unidades, incorporacao, participacao, imagem, data }: TProps) => {
  const pContent = parse(descricao);

  return (
    <div className="overflow-hidden w-full h-full">
      <div className="group relative overflow-hidden flex max-@tablet:flex-col justify-center items-center gap-[20px] w-[1060px] max-@tablet:w-full h-[568px] max-@tablet:h-auto">

        <Image 
          width={0}
          height={0}
          sizes="100vw"
          className="w-[430px] max-@tablet:w-[340px] h-[458px] max-@tablet:h-[362px] object-cover" 
          src={imagem} 
          alt="" 
        />

        <div className="infos flex flex-col">
          <span className="relative font-arame text-[22px] font-normal leading-[22px] text-black w-[340px] mb-[20px]">
            {pContent}
          </span>
          <span className="relative font-barlow text-[16px] font-normal leading-[28px] text-black w-[340px] flex gap-[5px] items-center border-b-2 border-black pb-[10px] pt-[10px]">
            <Image src={iconYear} alt="Icone Year" className="w-[30px] h-[30px]"></Image>
            {data}
          </span>
          <span className="relative font-barlow text-[16px] font-normal leading-[28px] text-black w-[340px] flex gap-[5px] items-center border-b-2 border-black pb-[10px] pt-[10px]">
            <Image src={iconType} alt="Icone Year" className="w-[30px] h-[30px]"></Image>
            <strong>Torres:</strong>{torres}; <strong>Unidades:</strong>{unidades}
          </span>
          <span className="relative font-barlow text-[16px] font-normal leading-[28px] text-black w-[340px] flex gap-[5px] items-center border-b-2 border-black pb-[10px] pt-[10px]">
            <Image src={iconMetragem} alt="Icone Year" className="w-[30px] h-[30px]"></Image>
            {area_total}
          </span>
          <span className="relative font-barlow text-[16px] font-normal leading-[28px] text-black w-[340px] flex gap-[5px] items-center border-b-2 border-black pb-[10px] pt-[10px]">
            <Image src={iconConstruct} alt="Icone Year" className="w-[30px] h-[30px]"></Image>
            {incorporacao}; {participacao}
          </span>
        </div>

      </div>
    </div>
  );
};

export default Index;
