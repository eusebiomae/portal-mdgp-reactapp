export const fetchCache = 'force-no-store';

import Hero from "@/components/Hero/Index";
import Popup from "@/components/Popup/Index";
import Enterprises from "@/components/Enterprises/Index";
import CTA from "@/components/CTA/Index";
import Project from "@/components/Project/Index";
import FAB from "@/components/FAB/Index";
import { NextPage } from "next";
import { Banners } from "@/@types/Banners";

async function fetchBanners(): Promise<Banners[] | null> {
  try {

    const res = await fetch(`https://mdgp.dev.id360.net/api/banners`);
    const response = await res.json();
    return response.banners.data || null;

  } catch (error) {
    console.error('Error fetching banner:', error);
    return null;
  }
}

const page: NextPage = async ({params}:any) => { Promise<Banners[] | null>
  const banners = await fetchBanners();

  if (!banners) {
    return <div className="h-[80vh] flex justify-center items-center">
      <p className="text-[30px] text-center font-bold text-[#1E2256] uppercase">Página não encontrada</p>
      </div>;
  }

  return (
    <main>
      {/* <Popup/> */}
      <Hero banners={banners}/>
      <Enterprises />
      <CTA />
      <Project id_produto='03afdbd66e561'/>
      <FAB />
    </main>
  );
};

export default page;
