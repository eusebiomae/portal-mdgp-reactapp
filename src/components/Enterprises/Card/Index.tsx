import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

type TPropsCards = {
  address: string;
  button: string;
  architecture: string;
  landscaping: string;
  interiors?: string;
  communication?: string;
  img_url: string;
  logo_url?: string;
  metragem: string;
  model1: string;
  model2: string;
  name: string;
};

const Index = ({
  address,
  architecture,
  landscaping,
  interiors,
  communication,
  img_url,
  logo_url,
  metragem,
  model1,
  model2,
  name,
}: TPropsCards) => {
  return (
    <Link href="#">
      <div className="py-8">
        <div className="image relative rounded-3xl overflow-hidden w-full h-[230px] @desktop:h-[400px] mb-5">
          <Image
            className="w-full h-full object-cover"
            src={img_url}
            alt=""
            width={750}
            height={750}
            quality={80}
            loading="lazy"
          />
          {logo_url && (
            <Image
              className="absolute top-3 left-3 w-[114px] h-[47px] @desktop:w-[128px] @desktop:h-[60px] object-contain rounded-md"
              src={logo_url}
              alt=""
              width={114}
              height={47}
              quality={80}
              loading="lazy"
            />
          )}
        </div>
        
        <div className="text">
          <div className="flex gap-2 mb-2">
            <span className="text-body-12 flex items-center justify-center h-full border border-[#1E2256] p-1 text-[#1E2256]">
              {model1}
            </span>
            <span className="text-body-12 flex items-center justify-center h-full border border-[#1E2256] p-1 text-[#1E2256]">
              {model2}
            </span>
          </div>
          <div className="mb-5">
            <p className="text-[#1E2256] text-title-20 mb-1">{name}</p>
            <p className="text-[#1E2256] text-title-20 mb-4">{metragem}</p>
            <p className="text-body-14 font-thin">{address}</p>
          </div>

          <ul className="pl-6 list-disc mb-3 h-28 text-[#1E2256]">
            <li className="font-thin">{architecture}</li>
            {communication && <li className="font-thin">{communication}</li>}
            <li className="font-thin">{landscaping}</li>
            {interiors && <li className="font-thin">{interiors}</li>}
          </ul>

          <button className="group border-b border-[#1E2256] bg-transparent text-[#1E2256] py-2 px-4 w-full flex justify-between items-center">
            <span className="text-body-17">Conhecer</span>{" "}
            <BsArrowRight className="group-hover:translate-x-5 transition-all ease-linear" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Index;
