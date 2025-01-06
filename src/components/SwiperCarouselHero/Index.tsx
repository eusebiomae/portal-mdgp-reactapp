import Container from "@/components/Container/Index";
import CarouselHero from "@/components/CarouselHero/Index";

type TProps = {
  data: any[];
};

const Index = ({ data }: TProps) => {
  return (
    <section
      className="relative"
      // data-aos="fade-right"
      // data-aos-delay="300"
      // data-aos-duration="2000"
    >
      <CarouselHero data={data} />
    </section>
  );
};

export default Index;
