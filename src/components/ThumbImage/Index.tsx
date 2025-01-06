import Image, { StaticImageData } from "next/image";
import { BiExpandAlt } from "react-icons/bi";

interface IProppsThumbImage {
  srcImage: StaticImageData;
  size: number;
  caption: string;
  onClick: () => void;
}

const Index = ({ srcImage, size, caption, onClick }: IProppsThumbImage) => {
  return (
    <button
      className={`group relative overflow-hidden rounded-xl w-full h-[250px] @desktop:h-[560px] @desktop:col-span-${size}`}
      onClick={onClick}
    >
      <button className="group-hover: group-hover:text-white absolute right-5 top-5 p-2 bg-white rounded-md opacity-[0.6] group-hover:opacity-100">
        <BiExpandAlt className="" size={24} />
      </button>
      <Image
        className={`cursor-pointer w-full h-full object-cover`}
        src={srcImage}
        alt=""
        width={1200}
        height={400}
      />

      <span className="bg-white/80 px-2 py-1 rounded-md absolute bottom-2 left-2 z-0 text-sm text-[#1E2256]">
        {caption}
      </span>
    </button>
  );
};

export default Index;
