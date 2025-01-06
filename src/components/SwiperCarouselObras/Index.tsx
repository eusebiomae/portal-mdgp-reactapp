import Container from "@/components/Container/Index";
import CarouselObras from "@/components/CarouselObras/Index";

type TProps = {
  data?: any[];
};

const Index = ({ data }: TProps) => {
  return (
    <div
      className="pt-0 pb-0 mt-[40px] relative bg-transparent @desktop:w-[1130px]"
    >
      <CarouselObras data={data} />
    </div>
  );
};

export default Index;
