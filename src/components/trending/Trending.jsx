// import { TrendingCard } from "./TrendingCard";

// export const Trending = () => {
//   return (
//     <div className="max-w-7xl m-auto pt-[100px] px-8">
//       <div>
//         <h1 className="text-[24px] font-[700]">Trending</h1>
//       </div>
//       <TrendingCard />
//     </div>
//   );
// };
import React, { useState, useEffect } from "react";
import { TrendingCard } from "./TrendingCard";

export const Trending = () => {
  const [articles, setArticles] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dev.to/api/articles");
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-7xl m-auto pt-[100px] px-8">
      <div>
        <h1 className="text-[24px] font-[700]">Trending</h1>
      </div>
      <TrendingCard articles={articles.slice(0, 4)} />
    </div>
  );
};
