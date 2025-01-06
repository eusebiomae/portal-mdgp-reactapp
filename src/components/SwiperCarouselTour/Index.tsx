import { Product } from "@/@types";
import TourVirtual from "@/components/TourVirtual/Index";
import { NextPage } from "next";
interface ProductProps {
  product: Product;
}

const Index: NextPage<ProductProps> = ({product}) => {
  return (
    <div
      className="pt-0 pb-0 mt-[40px] relative bg-transparent"
      data-aos="fade-right"
      data-aos-delay="300"
      data-aos-duration="2000"
    >
      <TourVirtual product={product} />
    </div>
  );
};

export default Index;
