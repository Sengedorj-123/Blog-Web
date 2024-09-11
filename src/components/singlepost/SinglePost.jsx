export const SinglePost = ({ posts }) => {
  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div className="container m-auto mt-24">
        <div className="lg:px-20 px-4 flex justify-center">
          <div className="flex flex-col gap-8 max-w-[800px]">
            <div className="flex flex-col gap-5">
              <h1 className="self-stretch font-workSans font-semibold not-italic text-4xl text-[#181A2A]">
                {posts.title || "Default Title"}
              </h1>
              <div className="flex items-center gap-6">
                <div className="flex gap-3 items-center">
                  <div className="rounded-[50%] bg-[#F4F4F5]">
                    <img
                      src={posts.user?.profile_image || "default-image.jpg"}
                      alt={posts.user?.name || "Default User"}
                      className="w-7 h-7 rounded-[50%]"
                    />
                  </div>
                  <p className="font-workSans font-medium not-italic text-sm text-[#696A75]">
                    {posts.user?.name || "Default Name"}
                  </p>
                </div>
                <p className="font-workSans font-normal not-italic text-sm text-[#696A75]">
                  {posts.published_at
                    ? new Date(posts.published_at).toLocaleDateString()
                    : "Unknown Date"}
                </p>
              </div>
            </div>

            <div className="bg-[#F4F4F5] w-full h-auto rounded-xl">
              <img
                src={posts.cover_image || "default-cover.jpg"}
                alt="Cover Image"
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div>
              <p className="font-soerceSerif font-normal not-italic text-xl leading-8 text-[#3B3C4A]">
                {posts.body_markdown || "Default body content"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
