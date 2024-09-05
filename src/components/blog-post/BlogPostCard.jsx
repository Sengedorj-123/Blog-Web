import Link from "next/link"

export const BlogPostCard = ({ posts }) => {
  return (
    <div className="max-w-7xl mx-auto flex gap-5 justify-between flex-wrap">
      {posts.map((post) => (
        <div
          key={post.id}
          className="w-96 flex flex-col border rounded-lg border-black mb-5"
        >
          <img className="p-[16px] " src={post.cover_image} alt={post.title} />
          <div className="p-4">
            <h2 className="text-blue-600 text-lg font-semibold">
              {post.title}
            </h2>
            <p className="text-xl font-bold mt-2">
              {post.description || "No description"}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              {new Date(post.published_at).toLocaleDateString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
