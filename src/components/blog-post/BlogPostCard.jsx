import Link from "next/link";

export const BlogPostCard = ({ posts }) => {
  return (
    <div className="max-w-7xl mx-auto flex gap-5 justify-between flex-wrap">
      {posts.map((posts) => (
        <Link href={`/bloglist/${posts.id}`}>
          <div
            key={posts.id}
            className="w-96 h-[390px] flex flex-col border rounded-lg border-black mb-5"
          >
            <img
              className="p-[16px] "
              src={posts.cover_image}
              alt={posts.title}
            />
            <div className="p-4">
              <h2 className="text-blue-600 text-lg font-semibold">
                {posts.title}
              </h2>
              <p className="text-xl font-bold mt-2 line-clamp-3">
                {posts.description || "No description"}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                {new Date(posts.published_at).toLocaleDateString()}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
