import Container from "@/components/Container/Index";
import CarouselAbout from "@/components/CarouselAbout/Index";

type TProps = {
  data?: any[];
};

const Index = ({ data }: TProps) => {
  return (
    <div
      className=" max-@tablet:h-auto"
      data-aos="fade-right"
      data-aos-delay="300"
      data-aos-duration="2000"
    >
      <CarouselAbout data={data} />
    </div>
  );
};

export default Index;
