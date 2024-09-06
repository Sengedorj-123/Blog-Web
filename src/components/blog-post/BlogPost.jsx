import { useState, useEffect } from "react";
import { BlogPostCard } from "./BlogPostCard";
import Link from "next/link";
const allArticles = [
  "All",
  "Design",
  "Travel",
  "Fashion",
  "Technology",
  "Branding",
];

export const BlogPosts = () => {
  const [selectedArticles, setSelectedArticles] = useState("All");
  const [blogPostData, setBlogPostData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dev.to/api/articles");
      const data = await response.json();
      setBlogPostData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredPosts = blogPostData.filter(
    (post) =>
      selectedArticles === "All" || post.tag_list.includes(selectedArticles)
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto pt-24 px-8">
      <h1 className="text-2xl font-bold">All Blog Posts</h1>
      <div className="text-gray-600 text-xs font-bold flex gap-5 pt-8 pb-8">
        {allArticles.map((articles) => (
          <button
            key={articles}
            onClick={() => setSelectedArticles(articles)}
            className={`hover:text-yellow-600 ${
              selectedArticles === articles ? "text-yellow-600" : ""
            }`}
          >
            {articles}
          </button>
        ))}
      </div>
      <BlogPostCard posts={filteredPosts} />
      <div className="flex justify-center mt-8">
        <button className="w-32 h-12 border border-black rounded-lg hover:bg-gray-200">
          Load More
        </button>
      </div>
    </div>
  );
};
