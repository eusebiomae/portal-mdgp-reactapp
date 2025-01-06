"use client";

import { Product } from "@/@types";
import { NextPage } from "next";
import "swiper/css";
import "swiper/css/pagination";
interface ProductProps {
  product: Product;
}

const Index: NextPage<ProductProps> = ({product}) => {

    if(product.slug === 'amira-cabral'){
      return (
        <div className="tourVirtual relative embed-responsive embed-responsive-16by9 w-full h-[250px] @desktop:h-[650px] overflow-hidden">
          <iframe
            className="embed-responsive-item top-0 w-full h-full"
            src="https://3doficina.com.br/amira/"
            allow="autoplay; encrypted-media"
          ></iframe>
        </div>
      );
    }
};

export default Index;
