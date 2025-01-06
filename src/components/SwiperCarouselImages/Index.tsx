import Container from "@/components/Container/Index";
import CarouselImages from "@/components/CarouselImages/Index";

type TProps = {
  data: any[];
};

const Index = ({ data }: TProps) => {
  return (
    <div
      className="relative"
    >
      <CarouselImages data={data} />
    </div>
  );
};

export default Index;
