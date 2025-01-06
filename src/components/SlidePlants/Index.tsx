import Image from "next/image";

type TProps = {
  image: string;
  title: string;
  description1: string;
  description2?: string;
  description3?: string;
  description4?: string;
};

const Index = ({
  image,
  title,
  description1,
  description2,
  description3,
  description4,
}: TProps) => {
  return (
    <div className="w-full overflow-hidden relative">
      <div className="border border-[#1E2256] bg-white relative w-full overflow-hidden flex max-@tablet:flex-col items-center justify-center rounded-br-[20px] h-auto @desktop:h-[550px] p-10">
        <div className="max-w-[290px] order-2 @desktop:order-1 flex-col max-@tablet:mt-10">
          <h2 className="bg-white text-[#1E2256] text-[25px] font-normal text-bold font-body whitespace-nowrap py-1 px-2 text-left right-0 bottom-0 z-10 mb-5">
            {title}
          </h2>
          <p className="text-[#1E2256] textlg font-thin py-1 px-2 text-left right-0 bottom-0 z-10 w-[282px]">
            {description1}
          </p>
          <p className="text-[#1E2256] textlg font-thin py-1 px-2 text-left right-0 bottom-0 z-10 w-[282px]">
            {description2}
          </p>
          <p className="text-[#1E2256] textlg font-thin py-1 px-2 text-left right-0 bottom-0 z-10 w-[282px]">
            {description3}
          </p>
          <p className="text-[#1E2256] textlg font-thin py-1 px-2 text-left right-0 bottom-0 z-10 w-[282px]">
            {description4}
          </p>
        </div>

        <Image
          className="order-1 @desktop:order-2 @desktop:max-w-[700px] h-[70%] object-contain relative"
          src={image}
          alt=""
        />
      </div>
    </div>
  );
};

export default Index;
