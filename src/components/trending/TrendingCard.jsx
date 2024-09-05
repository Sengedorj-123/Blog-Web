import { Technology } from "./Technology";

export const TrendingCard = ({ articles }) => {
  return (
    <div className="max-w-7xl m-auto flex flex-wrap justify-between gap-[20px] pt-[30px]">
      {articles.map((article) => (
        <div key={article.id} className="relative flex flex-col items-start">
          <img
            className="h-[320px] object-cover w-[289px] rounded-[12px]"
            src={article.cover_image}
            alt={article.title}
          />
          <div className="absolute bottom-0 left-0 p-4">
            <Technology />
            <div className="text-white text-[18px] font-[600] mt-2">
              {article.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
