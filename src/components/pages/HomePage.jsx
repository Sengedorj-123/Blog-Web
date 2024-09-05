// import { Header } from "..";
// import BlogPost from "../blog-post/BlogPost";
// import Carousel from "../carousel/Carousel";
// // import Header from "../Header/Header";
// import Trending from "../trending/Trending";
// import { HeaderPart } from "..";
// import { BlogPost } from "../blog-post/BlogPost";
// import { Carousel } from "../carousel/Carousel";
// import { Trending } from "../trending/Trending";
import BlogPost from "@/pages/bloglist";
import { Carousel } from "../carousel/Carousel";
import { HeaderPart } from "../Header/Header";
import { Trending } from "../trending/Trending";
import { BlogPosts, BlogPostt } from "../blog-post/BlogPost";
import { Footer } from "../footer/Footer";



export const HomePage = () => {
  return (
    <div className="">
      <HeaderPart />
      <Carousel />
      <Trending />
      <BlogPosts />
      <div className="w-screen bg-[#E8E8EA]">
        <Footer />
      </div>
    </div>
  );
};
