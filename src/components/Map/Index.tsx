"use client";

import { useState } from "react";
import Image from "next/image";
import { mapPin } from "@/assets/img";
import Container from "@/components/Container/Index";
import Link from "next/link";

const Index = () => {
  const [mapStarted, setMapStarted] = useState(false);

  const onPlay = () => {
    setMapStarted(true);
  };

  return (
    
    <section className="bg-white">
      <div className="bg-black text-white p-0 @desktop:p-10 rounded-ss-3xl rounded-se-3xl @desktop:!pb-10">
        <Container className="">
          <header className="border-t border-white/50 pt-5 pb-5">
            <h2 className="text-2xl @desktop:text-3xl text-white mb-3 font-semibold">
              Localização
            </h2>
            <p className="text-white/80 font-thin">
              A poucos passos do metrô Fradique Coutinho e de tudo o que você
              precisa.
            </p>
          </header>

          <div className="relative h-[580px]">
            {mapStarted && (
              <div className="relative w-full h-full overflow-hidden rounded-3xl border-white/80">
                <iframe
                  src="https://www.google.com/maps/d/embed?mid=1RQTbanrFy6pv8_7Yi04JKycLtsJiMgg&ehbc=2E312F&noprof=1"
                  width="100%"
                  height="100%"
                ></iframe>
              </div>
            )}

            {!mapStarted && (
              <div
                className="cursor-pointer relative w-full h-full overflow-hidden rounded-3xl border border-white/80"
                onClick={onPlay}
              >
                <Image
                  className="w-full h-full object-cover"
                  src={mapPin}
                  alt=""
                  width={1320}
                  height={580}
                  data-aos="zoom-in"
                  data-aos-delay="500"
                  data-aos-duration="500"
                />
              </div>
            )}

            <div className="bg-white text-black w-full max-w-[770px] p-5 absolute bottom-0 @desktop:bottom-6 left-1/2 -translate-x-1/2 rounded-3xl flex flex-col @desktop:flex-row justify-between items-center gap-4 font-semibold">
              <p>R. Fradique Coutinho, 262 - Pinheiros</p>
              <Link
                href="https://www.google.com/maps/place/Pluri+Pinheiros/@-23.5642962,-46.685586,17z/data=!4m15!1m8!3m7!1s0x94ce579e71eea86b:0x44a51dc6822fc422!2sR.+Fradique+Coutinho,+262+-+Pinheiros,+S%C3%A3o+Paulo+-+SP,+05416-000!3b1!8m2!3d-23.5642962!4d-46.685586!16s%2Fg%2F11c2ccv0jd!3m5!1s0x94ce57c281c95407:0x366cba195e1d6d22!8m2!3d-23.5642962!4d-46.685586!16s%2Fg%2F11rz7p62v6?entry=ttu"
                className="text-center inline-block bg-black text-white py-3 px-4 whitespace-nowrap rounded-xl w-full max-w-[250px] hover:bg-white hover:text-black transition-all ease-linear border border-black/80"
                target="_blank"
              >
                Como chegar?
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Index;
