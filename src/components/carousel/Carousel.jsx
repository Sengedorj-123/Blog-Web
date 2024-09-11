import React, { useState, useEffect, useDeferredValue } from "react";
import { BackIcon } from "./BackButton";
import { ForwardIcon } from "./ForwardButton";

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [articles, setArticles] = useState([]);

  const fetchData = () => {
    fetch("https://dev.to/api/articles/")
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + articles.length) % articles.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [articles.length]);

  const currentItem = articles[currentIndex];

  return (
    <div className="max-w-7xl m-auto pt-[100px] px-8 duration-[2000ms]">
      <div className="relative">
        <div className="relative flex justify-start items-end">
          <div className="w-[598px] bg-white absolute ml-[11px] mb-[13px] flex flex-col justify-start rounded-[12px]">
            <div className="p-[40px]">
              <div className="px-[10px] py-[4px] bg-[#4B6BFB] w-[97px] h-[28px] text-center rounded-[6px]">
                <h1 className="text-[14px] font-[500] text-center text-white">
                  {currentItem?.category}
                </h1>
              </div>
              <h1 className="text-[36px] font-[600] pt-[16px]">
                {currentItem?.title}
              </h1>
              <h1 className="text-[#97989F] font-[400] text-[16px] pt-[24px]">
                {currentItem?.date}
              </h1>
            </div>
          </div>
          <img
            className="rounded-[12px] w-full"
            src={currentItem?.cover_image}
            alt={currentItem?.title}
          />
        </div>
        <div className="flex justify-end gap-[9px] pt-[11px]">
          <button onClick={handlePrev}>
            <BackIcon />
          </button>
          <button onClick={handleNext}>
            <ForwardIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
