import { BsArrowRight } from "react-icons/bs";
import Container from "@/components/Container/Index";
import Link from "next/link";
import Image from "next/image";
import { Marca } from "@/assets/img";

const Index = () => {
  return (
    <section className="relative bg-white max-@desktop:py-[50px] @desktop:h-[500px] flex items-center justify-center">

      <Container 
        className=""        
      >
        <div className="cta-content relative h-full flex justify-center items-center gap-[70px] max-@desktop:gap-[15px] max-@desktop:items-start" data-aos="fade-right" data-aos-delay="400" data-aos-duration="2000">
          <Image className="w-[231px] max-@desktop:w-[80px] max-@desktop:h-[80px]" src={Marca} alt=""></Image>
          <div className="">
            <p
            className="
            text-[30px] 
            leading-[30px] 
            uppercase 
            w-[14em] 
            pb-[30px] 
            mb-[30px] 
            border-b-[3px] 
            border-[#2B2B2B]
            max-@desktop:text-[22px]
            max-@desktop:leading-[22px]
            max-@desktop:w-[11em]
            font-arame
            ">Gostou? Descubra<br/> mais sobre os empreendimentos MDGP.</p>
            <Link href="/enterprises">
              <button
              className="
              ml-auto 
              block 
              px-[30px] 
              py-[20px] 
              uppercase 
              text[14px] 
              leading-[14px] 
              border-[3px] 
              text-[#2B2B2B] 
              border-[#2B2B2B]
              max-@desktop:text[12px] 
              max-@desktop:leading-[12px] 
              font-arame
              hover:border-[#7A7E83] ease-in-out duration-300 hover:text-[#7A7E83]
              ">clique e conheça</button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Index;
