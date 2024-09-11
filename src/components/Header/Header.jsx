// src/components/Header/HeaderPart.jsx
import { useState, useEffect } from "react";
import { SearchIcon } from "./icons";
import { H1Text } from "../text";
import Link from "next/link";

export const HeaderPart = ({ data = [], searchValue, onSearch }) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (searchValue) {
      setFilteredData(
        data.filter((item) => item.title.toLowerCase().includes(searchValue))
      );
    } else {
      setFilteredData([]);
    }
  }, [searchValue, data]);

  const handleInputChange = (e) => {
    onSearch(e.target.value.trim().toLowerCase());
  };

  return (
    <div className="w-full flex flex-col items-center relative">
      <div className="container m-auto z-50 flex justify-between pt-[25px] pb-[32px] items-center fixed px-8 bg-white">
        <div className="w-[158px] h-[36px]">
          <img src="./Logo.png" alt="Logo" />
        </div>
        <div className="flex flex-row gap-[40px]">
          <Link href="/">
            <button>
              <H1Text text="Home" />
            </button>
          </Link>
          <Link href="/bloglist">
            <button>
              <H1Text text="Blog" />
            </button>
          </Link>
          <Link href="/contact-us">
            <button>
              <H1Text text="Contact" />
            </button>
          </Link>
        </div>
        <div className="flex items-center bg-[#F4F4F5] rounded-[5px]">
          <input
            value={searchValue}
            onChange={handleInputChange}
            className="border-none outline-none bg-[#F4F4F5] rounded-[5px] p-[8px]"
            type="text"
            placeholder="search"
          />
          <button>
            <SearchIcon />
          </button>
        </div>
      </div>
      {searchValue && (
        <div className="mt-[80px] max-w-7xl w-full px-8">
          <div className="bg-white relative z-50 shadow-md rounded-lg border border-gray-300">
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <div key={item.id} className="p-3 border-b border-gray-200">
                  {item.title}
                </div>
              ))
            ) : (
              <div className="p-3">No results found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
