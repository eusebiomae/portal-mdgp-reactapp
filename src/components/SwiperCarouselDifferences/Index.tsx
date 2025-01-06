import Container from "@/components/Container/Index";
import CarouselDifferences from "@/components/CarouselDifferences/Index";

type TProps = {
  data?: any[];
};

const Index = ({ data }: TProps) => {
  return (
    <section
      className="pt-0 pb-[40px] mt-[40px] relative"
      data-aos="fade-right"
      data-aos-delay="300"
      data-aos-duration="2000"
    >
      {/*
      <Container className="border-red"> */}
      <CarouselDifferences data={data} />
      {/*</Container> */}
    </section>
  );
};

export default Index;
