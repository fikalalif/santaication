import HeaderSection from "@/components/header-section";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "Contact Us",
};

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
