import { H1Text } from "../text";

export const ContactUs = () => {
  return (
    <div className="max-w-7xl m-auto pt-[200px] pb-[100px] flex justify-center">
      <div className="w-full  flex justify-center flex-col flex-wrap ">
        <div className="">
          <h1 className="text-[36px] font-[600]">Contact Us</h1>
        </div>
        <div className="w-full pt-[20px]">
          <h1 className="text-[16px] text-[#696A75] font-[300]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit
            aut vero magni eius, enim doloribus modi provident. Eveniet dolorum
            dolores, est harum, quisquam dolor tenetur optio temporibus
            consequuntur fugit voluptates voluptatum quo, animi numquam
            recusandae dicta? Consequuntur, nihil perspiciatis!
          </h1>
        </div>
        <div className="w-full   flex justify-between gap-[20px] pt-[20px] pb-[40px]">
          <div className="w-[50%] p-[16px] flex flex-col border rounded-[12px]">
            <h1>Address</h1>
            <h1>1328 Oak Ridge Drive, Saint Louis, Missouri</h1>
          </div>
          <div className="w-full p-[16px] flex flex-col border rounded-[12px]">
            <h1>Contact</h1>
            <h1>313-332-8662 info@email.com</h1>
          </div>
        </div>
        <div className="w-full bg-[#F6F6F7] h-auto pl-[35px] py-[29px] pr-[100px]  rounded-[10px]">
          <h1 className="text-[18px] font-[600] ">Leave a Message</h1>
          <div className="flex flex-row gap-[30px] pt-[30px]">
            <input
              className="bg-white border"
              placeholder="Your name"
              type="text"
              name=""
              id=""
            />
            <input
              className="bg-white border"
              placeholder="Your email"
              type="email"
              name=""
              id=""
            />
          </div>
          <div className="pt-[30px]">
            <input
              placeholder="Subject"
              className="w-full border "
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="pt-[30px] ">
            <input
              className="  border w-full h-[200px]"
              placeholder="Write a message"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="pt-[30px]">
            <button className="p-[16px] bg-[#4B6BFB] rounded-[6px] text-white">
              <h1>Sent a message</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
