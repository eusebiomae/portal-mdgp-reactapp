import { TEXT_TOUR } from "@/constants/";

const Index = () => {
  return (
    <header className="pt-10 max-@tablet:pt-0">
      {TEXT_TOUR.map(({ title, subtitle }, index) => (
        <div
          className="flex flex-col gap-4 items-start mb-0"
          key={index}
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="2000"
        >
          <h2 className="text-[#1E2256] text-2xl font-normal @tablet:text-4xl mt-5">
            {title}
          </h2>
          <div className="">
            <p className="text-[#1E2256] text-body-15 @desktop:text-lg">
              {subtitle}
            </p>
          </div>
        </div>
      ))}
    </header>
  );
};

export default Index;
