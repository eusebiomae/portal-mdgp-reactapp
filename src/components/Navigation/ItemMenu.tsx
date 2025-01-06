"use client";

import Link from "next/link";

type TProps = {
  link: any;
  label?: string;
  event?: (param: boolean) => void;
  isContact?: boolean;
  onClick?: (param: boolean) => void;
};

const ItemMenu = ({ link, label, event }: TProps) => {
  if (!event) {
    return (
      <>
        <li className="">
          <Link
            href={link}
            className="relative inline-block text-[#2B2B2B] hover:text-[#7A7E83] font-body text-body-14 py-1 px-2 transition-all ease-linear"
          >
            {label}
          </Link>
        </li>
      </>
    );
  } else {
    return (
      <>
        <li className="" onClick={() => event(false)}>
          <Link
            href={link}
            className="text-[#2B2B2B] hover:text-[#7A7E83] font-body text-body-17 transition-all ease-linear py-1 max-@desktop:text-white"
          >
            {label}
          </Link>
        </li>
      </>
    );
  }
  return;
};

export default ItemMenu;
