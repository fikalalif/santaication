import HeaderSection from "@/components/header-section";
import { Metadata } from "next";
import {
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
} from "react-icons/io5";

const metadata: Metadata = {
  title: "Contact Us",
};
import ContactFromPage from "@/components/contact-form";

const ContactPage = () => {
  return (
    <div>
      <HeaderSection
        title="Contact Page"
        subTitle="any problem or something just contact us"
      />
      <div className="max-w-screen-xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-lg text-gray-500 mb-3">Contact Us</h1>
            <h1 className="text-5xl font-semibold text-gray-900 mb-4">
              Get In Touch Today
            </h1>
            <p className="text-gray-700 py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              nisi molestiae optio saepe! Libero, porro.
            </p>
            <ul className="list-item space-y6 pt-8">
              <li className="flex gap-5">
                <div className="flex-none bg-gray-300 p-3 shadow-sm rounded-sm">
                  <IoMailOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Email : </h4>
                  <p>email-us@example.com</p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="flex-none bg-gray-300 p-3 shadow-sm rounded-sm">
                  <IoCallOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">
                    Phone Number :{" "}
                  </h4>
                  <p>+625162561526752</p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="flex-none bg-gray-300 p-3 shadow-sm rounded-sm">
                  <IoLocationOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Location : </h4>
                  <p>jl. penusupan rt 6/8 no 61, pangkah, tegal, indonesia</p>
                </div>
              </li>
            </ul>
          </div>
          {/* contactform */}
          <ContactFromPage/>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
