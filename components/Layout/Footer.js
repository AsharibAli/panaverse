import React from "react";
import Logo from "../../public/assets/panaverse.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <Logo className="h-8 w-auto mb-6" />
          <p className="mb-4">
            <strong className="font-medium">Panaverse</strong> mission is to
            reshape Pakistan by revolutionizing education, research, and
            business by adopting latest, cutting-edge technologies. Experts are
            calling this the 4th industrial revolution. We want Pakistan to
            become a global hub for AI, data science, cloud native computing,
            edge computing, blockchain, augmented reality, and internet of
            things.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <a
              href="https://www.facebook.com/groups/panaverse"
              className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com/Panaverse_edu"
              className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/piaicofficial/"
              className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
          <p className="text-gray-400">
            ©{new Date().getFullYear()} - Panaverse
          </p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Courses</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Blockchain{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              AI & Deep Learning{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Cloud-Native{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Ambient & IOT{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Genomics & Bioinformatics{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Network Programmability & Automation{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Engage</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Why Panaverse ?{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              FAQs{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Tutorials{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              About Us{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Contact Us{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Privacy Policy{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Terms of Service{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Earn Money</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Freelancing{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Product & Services{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              APIs{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Templates{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Panaverse Dao{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Mission{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Vision{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
