// import { useState, useEffect } from "react";
// import { BlogPostCard } from "./BlogPostCard";

// const allArticles = [
//   "All",
//   "Design",
//   "Travel",
//   "Fashion",
//   "Technology",
//   "Branding",
// ];

// export const BlogPosts = ({ searchQuery = "" }) => {
//   const [selectedArticles, setSelectedArticles] = useState("All");
//   const [blogPostData, setBlogPostData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   const fetchData = async (pageNumber) => {
//     setLoading(true);
//     try {
//       const response = await fetch(
//         `https://dev.to/api/articles?per_page=10&page=${pageNumber}`
//       );
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const data = await response.json();
//       if (data.length === 0) {
//         setHasMore(false);
//       }
//       setBlogPostData((prevData) => [...prevData, ...data]);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData(page);
//   }, [page]);

//   const handleLoadMore = () => {
//     if (hasMore) {
//       setPage((prevPage) => prevPage + 1);
//     }
//   };

//   const filteredPosts = blogPostData.filter(
//     (post) =>
//       (selectedArticles === "All" ||
//         post.tag_list.includes(selectedArticles)) &&
//       (searchQuery === "" ||
//         (post.title &&
//           post.title.toLowerCase().includes(searchQuery.toLowerCase())))
//   );

//   if (loading && page === 1) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="max-w-7xl mx-auto pt-24 px-8">
//       <h1 className="text-2xl font-bold">All Blog Posts</h1>
//       <div className="text-gray-600 text-xs font-bold flex gap-5 pt-8 pb-8">
//         {allArticles.map((articles) => (
//           <button
//             key={articles}
//             onClick={() => {
//               setSelectedArticles(articles);
//               setBlogPostData([]);
//               setPage(1);
//               setHasMore(true);
//             }}
//             className={`hover:text-yellow-600 ${
//               selectedArticles === articles ? "text-yellow-600" : ""
//             }`}
//           >
//             {articles}
//           </button>
//         ))}
//       </div>
//       <BlogPostCard posts={filteredPosts} />
//       <div className="flex justify-center mt-8">
//         <button
//           onClick={handleLoadMore}
//           className="w-32 h-12 border border-black rounded-lg hover:bg-gray-200"
//           disabled={loading || !hasMore}
//         >
//           {loading ? "Loading..." : hasMore ? "Load More" : "No More Posts"}
//         </button>
//       </div>
//     </div>
//   );
// };
// src/components/blog-post/BlogPosts.jsx
import { useState, useEffect } from "react";
import { BlogPostCard } from "./BlogPostCard";

const allArticles = [
  "All",
  "Design",
  "Travel",
  "Fashion",
  "Technology",
  "Branding",
];

export const BlogPosts = ({ searchQuery = "" }) => {
  const [selectedArticles, setSelectedArticles] = useState("All");
  const [blogPostData, setBlogPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async (pageNumber) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://dev.to/api/articles?per_page=10&page=${pageNumber}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data.length === 0) {
        setHasMore(false);
      }
      setBlogPostData((prevData) => [...prevData, ...data]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const handleLoadMore = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const filteredPosts = blogPostData.filter(
    (post) =>
      (selectedArticles === "All" ||
        post.tag_list.includes(selectedArticles)) &&
      (searchQuery === "" ||
        (post.title &&
          post.title.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  if (loading && page === 1) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto pt-24 px-8">
      <h1 className="text-2xl font-bold">All Blog Posts</h1>
      <div className="text-gray-600 text-xs font-bold flex gap-5 pt-8 pb-8">
        {allArticles.map((articles) => (
          <button
            key={articles}
            onClick={() => {
              setSelectedArticles(articles);
              setBlogPostData([]);
              setPage(1);
              setHasMore(true);
            }}
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
        <button
          onClick={handleLoadMore}
          className="w-32 h-12 border border-black rounded-lg hover:bg-gray-200"
          disabled={loading || !hasMore}
        >
          {loading ? "Loading..." : hasMore ? "Load More" : "No More Posts"}
        </button>
      </div>
    </div>
  );
};
