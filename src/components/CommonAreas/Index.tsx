"use client"

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { listImages } from "@/constants";
import ThumbImage from "@/components/ThumbImage/Index";
import { IconArrow, IconClose } from "@/assets/img";
import TitleSectionCommonAreas from "@/components/TitleSectionCommonAreas/Index";
import { PiPlusBold } from "react-icons/pi";

type TPropsImages = {
  image: StaticImageData;
  caption: string;
};


const Index = () => {
  const [dataImgCurrent, setDataImgCurrent] = useState<StaticImageData | null>(
    null
  );
  const [indexCurrent, setIndexCurrent] = useState(0);
  const [loading, setLoading] = useState(false);
  const [visibleImageCount, setVisibleImageCount] = useState(3);

  const isOpen = dataImgCurrent != null;

  function handleClickLightboxOpen(index: number) {
    setIndexCurrent(index);
    setDataImgCurrent(listImages[index] as any);
  }

  function handleClickLightboxClose() {
    setDataImgCurrent(null);
  }

  function handleNavigate(direction: "next" | "previews") {
    let index = direction === "next" ? indexCurrent + 1 : indexCurrent - 1;

    if (index < 0) {
      index = listImages.length - 1;
    }

    if (index >= listImages.length) {
      index = 0;
    }

    setIndexCurrent(index);

    setDataImgCurrent(listImages[index] as any);
  }

  function handleLoadMoreImages() {
    setLoading(true);
    setTimeout(() => {
      setVisibleImageCount(prevCount => prevCount + 3);
      setLoading(false);
    }, 1000);
  }

  return (
    <>
      <section className="border-t border-[#1E2256]/50 bg-white py-0">
        <TitleSectionCommonAreas />

        <div className="grid @desktop:grid-cols-2 gap-4">
          {listImages.slice(0, visibleImageCount).map(({ size, src, caption }, index) => (
            <ThumbImage
              key={index}
              srcImage={src!}
              size={size!}
              caption={caption}
              onClick={() => handleClickLightboxOpen(index)}
            />
          ))}
        </div>

        {/* Condicionalmente renderiza o botão "Carregar mais" se houver mais imagens para carregar */}
        {visibleImageCount < listImages.length && (
          <div className="carrega mt-5 w-full flex justify-center items-center">
            <button
              className="group bg-white text-[#1E2256] w-full @desktop:max-w-[350px] py-2 border-2 border-[#1E2256] px-4 flex items-center gap-5 justify-center font-semibold text-center text-lg rounded-lg outline-none hover: hover:text-white transition-all ease-linear"
              onClick={handleLoadMoreImages}
              disabled={loading}
            >
              <span className="text-body-17">
                {loading ? "Carregando..." : "Carregar mais"}
              </span>{" "}
              <PiPlusBold className="group-hover:rotate-180 transition-all ease-linear" />
            </button>
          </div>
        )}
      </section>

      {isOpen && (
        <div className="fixed inset-0 w-full h-full z-10 flex items-center justify-center /50 gap-4">
          <button
            className="absolute top-5 right-5 w-10"
            onClick={handleClickLightboxClose}
          >
            <Image src={IconClose} alt="" />
          </button>

          <button
            className="w-12 rotate-180 hover:opacity-50 transition-opacity ease-linear absolute left-0 @desktop:static"
            onClick={() => handleNavigate("previews")}
          >
            <Image src={IconArrow} alt="" />
          </button>

          {dataImgCurrent && (
            <>
              <Image
                className="w-[335px] @desktop:w-[1200px] h-auto object-cover"
                src={dataImgCurrent.src}
                alt=""
                width={1200}
                height={500}
              />

              {/* <span className="bg-white/80 px-2 py-1 rounded-md absolute bottom-2 left-[100px] z-0 text-sm text-[#1E2256]">
                {dataImgCurrent?.caption}
              </span> */}
            </>
          )}

          <button
            className="w-12 rotate-0 hover:opacity-50 transition-opacity ease-linear absolute right-0 @desktop:static"
            onClick={() => handleNavigate("next")}
          >
            <Image src={IconArrow} alt="" width={500} />
          </button>
        </div>
      )}
    </>
  );
};

export default Index;
