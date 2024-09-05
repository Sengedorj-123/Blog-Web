import { Page404 } from "../404/Content";
import { Footer } from "../footer/Footer";
import { HeaderPart } from "../Header/Header";

export const Custom404 = () => {
  return (
    <div>
      <HeaderPart />
      <Page404 />
      <div className=" w-screen bg-[#E8E8EA]">
        <Footer />
      </div>
    </div>
  );
};
