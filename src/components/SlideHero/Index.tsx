import Image from "next/image";

type TProps = {
  mp4: string | null;
  logo: string;
  url: string;
  bairro: string;
  cidade: string;
};

const Index = ({ mp4, logo, url, bairro, cidade }: TProps) => {

  const bannerUrl = url || "#"; // Fallback para evitar URLs vazias

  if (mp4) {
    return (
      <div className="w-full h-full overflow-hidden relative">
        <video
          className="videoBanner w-full h-[100vh] object-fill max-@tablet:object-cover brightness-75"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={`https://mdgp.dev.id360.net/${mp4}`} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>

        <div className="absolute bottom-[30px] text-white left-[90px] max-@tablet:left-0 flex flex-col max-@desktop:px-[25px] max-@desktop:w-[270px]">
          <p className="w-fit max-@tablet:w-max h-auto p-2 flex justify-center align-middle text-white text-[10px] font-arame tracking-[7px] bg-[#2B2B2B] mb-[10px]">{bairro}</p>
          <p className="w-[395px] max-@tablet:w-[275px] font-arame text-[45px] text-white leading-[45px]">{cidade}</p>
          <div className="hr w-[395px] h-[2px] bg-white my-[15px]"></div>
          <a className="linkBanner py-[12px] px-[10px] uppercase border-[2px] w-[104px] text-xs text-center leading-[9.06px] tracking-[1.2px] font-arame" href={bannerUrl}>Saiba mais</a>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full overflow-hidden relative">
      <div className="divLogo w-full h-[100vh]">
        <Image
          className="imagemLogo object-cover w-full h-full brightness-50"
          width={0}
          height={0}
          sizes="100vw"
          src={logo}
          alt=""
        />
      </div>

      <div className="absolute bottom-[30px] text-white left-[90px] max-@tablet:left-0 flex flex-col max-@desktop:px-[25px] max-@desktop:w-[270px]">
        <p className="w-fit max-@tablet:w-max h-auto p-2 flex justify-center align-middle text-white text-[10px] font-arame tracking-[7px] bg-[#2B2B2B] mb-[10px]">{bairro}</p>
        <p className="w-[395px] max-@tablet:w-[275px] font-arame text-[45px] text-white leading-[45px]">{cidade}</p>
        <div className="hr w-[395px] h-[2px] bg-white my-[15px]"></div>
        <a className="linkBanner py-[12px] px-[10px] uppercase border-[2px] w-[104px] text-xs text-center leading-[9.06px] tracking-[1.2px] font-arame" href={bannerUrl}>Saiba mais</a>
      </div>
    </div>
  );
};

export default Index;
