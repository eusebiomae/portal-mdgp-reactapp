import { iconAddress, iconConstruct, iconMetragem, iconType, iconYear } from "@/assets/img";
import Image, { StaticImageData } from "next/image";
import { BiExpandAlt } from "react-icons/bi";

type TProps = {
  image: StaticImageData;
  captionEdition: string;
  captionResume: string;
  // onClick: () => void;
};

const Index = ({ image, captionEdition, captionResume  }: TProps) => {
  return (
    <div className="overflow-visible w-[160px] max-@tablet:w-full h-full ">

      <div className="group relative overflow-visible flex flex-col justify-between gap-[20px] w-[160px] max-@tablet:w-full h-[540px] max-@tablet:h-auto">

        <div className="infos-revista">
          <Image className=" w-[160px] max-@tablet:w-full h-[224px] max-@tablet:h-[362px] object-cover" src={image} alt="" />

          <div className="infos flex flex-col w-[160px]  max-@tablet:w-full mt-5">

            <span className="relative font-arame text-[22px] font-normal leading-[22px] text-black w-[160px] mb-[10px]">
              {captionEdition}
            </span>

            <span className="relative font-barlow text-[16px] font-normal leading-[28px] text-black w-[160px]">
              {captionResume}
            </span>

          </div>
        </div>

        <button 
          className="
            px-[10px]
            py-[10px]
            font-arame 
            font-bold
            uppercase 
            text-[12px] 
            border-[3px] 
            border-[#2B2B2B] 
            hover:border-[#7A7E83] 
            ease-in-out duration-300 
            hover:text-[#7A7E83]"                    
          >
          baixar revista
        </button>

      </div>
    </div>
  );
};

export default Index;
