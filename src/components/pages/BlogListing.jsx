    import { BlogPosts } from "../blog-post/BlogPost";
    import { Footer } from "../footer/Footer";
    import { HeaderPart } from "../Header/Header";

    export default function Bloglisting() {
      return (
        <div className="">
          <HeaderPart />
          <BlogPosts />
          <div className="w-screen bg-[#E8E8EA]">
            <Footer />
          </div>
        </div>
      );
    }
