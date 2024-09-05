export const Page404 = () => {
  return (
    <div className="max-w-7xl m-auto flex justify-center">
      <div className="w-[50%] flex flex-row pt-[330px] pb-[200px] gap-[40px]">
        <h1 className="text-[72px] font-[400]">404</h1>
        <div className="h-[200px] bg-black border"></div>
        <div className="flex flex-col ">
          <h1 className="text-[24px] font-[600]">Page Not Found</h1>
          <h1 className="pt-[20px]">
            We're sorry, This page is unknown or does not exist the page you are
            looking for.
          </h1>
          <div className="pt-[20px]">
            <button className="bg-[#4B6BFB] px-[16px] py-[10px] rounded-[6px]">
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
