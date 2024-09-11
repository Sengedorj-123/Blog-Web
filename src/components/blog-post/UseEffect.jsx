import { useEffect, useState } from "react";

const UseEffectPage = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://dev.to/api/articles=${page}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setArticles((prevArticles) => [...prevArticles, ...data]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="flex flex-col items-center">
      {articles.map((article) => (
        <div key={article.id} className="mb-4">
          {article.title}
        </div>
      ))}
      <button
        className="border border-red-400 px-4 py-2 rounded"
        onClick={() => setPage(page + 1)}
        disabled={loading}
      >
        {loading ? "Loading..." : "Load more"}
      </button>
    </div>
  );
};

export default UseEffectPage;
