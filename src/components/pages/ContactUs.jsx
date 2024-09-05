import { ContactUs } from "../contact-us/contact";
import { Footer } from "../footer/Footer";
import { HeaderPart } from "../Header/Header";

export default function Contact() {
  return (
    <div className="">
      <HeaderPart />
      <ContactUs />
      <div className="w-screen bg-[#E8E8EA]">
        <Footer />
      </div>
    </div>
  );
}
