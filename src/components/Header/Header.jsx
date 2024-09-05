import { SearchIcon } from "./icons";
import { H1Text } from "../text";
import Link from "next/link";

export const HeaderPart = () => {
  return (
    <div className="w-full flex justify-center  relative ">
      <div className="container m-auto  z-50 flex justify-between pt-[25px] pb-[32px] items-center fixed px-8  bg-white">
        <div className="w-[158px] h-[36px]">
          <img src="./Logo.png" alt="" />
        </div>
        <div className="flex flex-row gap-[40px]">
          <Link href="/homepage">
            <button>
              <H1Text text="Home" />
            </button>
          </Link>
          <Link href="/bloglist">
            <button>
              <H1Text text="Blog" />
            </button>
          </Link>
          <Link href="/contactus">
            <button>
              <H1Text text="Contact" />
            </button>
          </Link>
        </div>
        <div className="flex items-center bg-[#F4F4F5] rounded-[5px]">
          <input
            className="border-none outline-none bg-[#F4F4F5] rounded-[5px] p-[8px]"
            type="text"
            placeholder="search"
          />
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};
