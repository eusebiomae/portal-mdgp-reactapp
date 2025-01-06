import Container from "@/components/Container/Index";
import CarouselPlants from "@/components/CarouselPlants/Index";

type TProps = {
  data?: any[];
};

const Index = ({ data }: TProps) => {
  return (
    <section
      className="pt-0 pb-[40px] mt-[40px] relative bg-white bg-vertical-yellow"
      data-aos="fade-right"
      data-aos-delay="300"
      data-aos-duration="2000"
    >
      {/* <Container className=""> */}
        <CarouselPlants data={data} />
      {/* </Container> */}
    </section>
  );
};

export default Index;
