// import { Header } from "..";
// import BlogPost from "../blog-post/BlogPost";
// import Carousel from "../carousel/Carousel";
// // import Header from "../Header/Header";
// import Trending from "../trending/Trending";
// import { HeaderPart } from "..";
// import { BlogPost } from "../blog-post/BlogPost";
// import { Carousel } from "../carousel/Carousel";
// import { Trending } from "../trending/Trending";
// import BlogPost from "@/pages/bloglist";
// import { Carousel } from "../carousel/Carousel";
// import { HeaderPart } from "../Header/Header";
// import { Trending } from "../trending/Trending";
// import { BlogPosts } from "../blog-post/BlogPost";
// import { Footer } from "../footer/Footer";

// export const HomePage = () => {
//   return (
//     <div className="">
//       <HeaderPart />
//       <Carousel />
//       <Trending />
//       <BlogPosts />
//       <div className="w-screen bg-[#E8E8EA]">
//         <Footer />
//       </div>
//     </div>
//   );
// };

// import { useState, useEffect } from "react";
// import { HeaderPart } from "../Header/Header";
// import { BlogPosts } from "../blog-post/BlogPost";
// import { Carousel } from "../carousel/Carousel";
// import { Trending } from "../trending/Trending";
// import { Footer } from "../footer/Footer";

// const HomePage = () => {
//   const [searchValue, setSearchValue] = useState("");
//   const [data, setData] = useState([]);

//   const fetchData = async () => {
//     try {
//       const response = await fetch("https://dev.to/api/articles/");
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const articles = await response.json();
//       setData(articles);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleSearch = (value) => {
//     setSearchValue(value);
//   };

//   return (
//     <div>
//       <HeaderPart
//         data={data}
//         searchValue={searchValue}
//         onSearch={handleSearch}
//       />
//       <Carousel />
//       <Trending />
//       <BlogPosts searchQuery={searchValue} />
//       <div className="w-screen bg-[#E8E8EA]">
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default HomePage;
// src/pages/HomePage.jsx
// src/pages/HomePage.jsx
import { useState, useEffect } from "react";

import { BlogPosts } from "../blog-post/BlogPost";
import { Carousel } from "../carousel/Carousel";
import { Trending } from "../trending/Trending";
import { Footer } from "../footer/Footer";
import { HeaderPart } from "../Header/Header";

const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dev.to/api/articles/");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const articles = await response.json();
      setData(articles);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  return (
    <div>
      <HeaderPart
        data={data}
        searchValue={searchValue}
        onSearch={handleSearch}
      />
      <Carousel />
      <Trending />
      <BlogPosts searchQuery={searchValue} />
      <div className="w-screen bg-[#E8E8EA]">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
