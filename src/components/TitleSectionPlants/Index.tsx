import { ornament01 } from "@/assets/img";
import { TEXT_PLANTS } from "@/constants/";
import Image from "next/image";

const Index = () => {
  return (
    <header className="!pt-10">
      {TEXT_PLANTS.map(({ title, subtitle }, index) => (
        <div
          className="relative flex flex-col gap-4 items-start mb-10 border-t border-[#1E2256]/50"
          key={index}
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="2000"
        >
          <h2 className="text-[#1E2256] text-2xl font-normal @tablet:text-4xl mt-5">
            {title}
          </h2>
          <div className="">
            <p className="text-[#1E2256] text-body-15 @desktop:text-lg">
              {subtitle}
            </p>
          </div>

          <Image
            src={ornament01}
            alt="Ornamento Circulos"
            className="absolute right-[-110px] top-[50px] max-@tablet:right-[-20px] max-@tablet:top-[20px] max-@tablet:w-[60px]"
          />
        </div>
      ))}
    </header>
  );
};

export default Index;
