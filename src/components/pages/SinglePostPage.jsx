// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { HeaderPart } from "../Header/Header";
// import { SinglePost } from "../singlepost/SinglePost";
// import { Footer } from "../footer/Footer";

// const SinglePostPage = () => {
//   const router = useRouter();
//   const [posts, setPosts] = useState({});
//   const fetchData = () => {
//     fetch(`https://dev.to/api/articles/${router.query.id}`)
//       .then((response) => response.json())
//       .then((data) => setPosts(data));
//   };

//   useEffect(() => {
//     fetchData();
//   }, [posts]);
//   return (
//     <main className="flex flex-col gap-[100px]">
//       <HeaderPart />
//       <SinglePost posts={posts} />
//       <Footer />
//     </main>
//   );
// };

// export default SinglePostPage;
// src/pages/SinglePostPage.jsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { HeaderPart } from "../Header/Header";
import { Footer } from "../footer/Footer";
import { SinglePost } from "../singlepost/SinglePost";

const SinglePostPage = () => {
  const router = useRouter();
  const [posts, setPosts] = useState(null);

  const fetchData = async () => {
    if (!router.query.id) return;

    try {
      const response = await fetch(
        `https://dev.to/api/articles/${router.query.id}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [router.query.id]);

  return (
    <main className="flex flex-col gap-[100px]">
      <HeaderPart />
      <SinglePost posts={posts} />
      <Footer />
    </main>
  );
};

export default SinglePostPage;
