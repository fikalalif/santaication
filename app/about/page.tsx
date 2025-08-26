import { Metadata } from "next";
import Image from "next/image";
import { IoEyeOutline, IoLocateOutline } from "react-icons/io5";
import HeaderSection from "@/components/header-section";

export const metadata:Metadata={
    title:"About",
    description:"Who We Are"
}

const AboutPage = () => {
    return (
        <div>
            <HeaderSection title="About Us" subTitle="lorem ipsum dolor sit amet"/>
            <div className="max-w-screen-xl mx-auto py-20 px-4">
                <Image
                    src="/santaication_logo.png"
                    width={650}
                    height={579}
                    alt="about image"
                />
                <div>
                    <h1 className="text-4xl font-semibold text-gray-900 mb-4">
                        Who We Are
                    </h1>
                    <p className="text-gray-500 py-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
                        magni ipsa non, alias doloribus vitae voluptates? Quasi omnis
                        laudantium commodi.
                    </p>
                    <ul className="list-item space-x-6 pt-8">
                        <li className="flex gap-5">
                            <div className="flex-none mt-1">
                                <IoEyeOutline className="size-7" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-semibold mb-1">Vision : </h4>
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                                    aut delectus enim asperiores
                                </p>
                            </div>
                        </li>
                        <li className="flex gap-5">
                            <div className="flex-none mt-1">
                                <IoLocateOutline className="size-7" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-semibold mb-1">Vision : </h4>
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                                    aut delectus enim asperiores ipsa incidunt dolorem blanditiis
                                    voluptates, commodi deserunt.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
