import React from "react";
import { FaCloudDownloadAlt, FaWhatsapp } from "react-icons/fa";
import DammyImage from "../assets/images/Dammy_official.jpeg";
import { TeckStack } from "../common/data";
import StackIcon from "../common/StackIcon";

function Hero() {
  return (
    <section
      name="home"
      className="m ax-w-5xl h-screen mx-auto flex flex-col justify-center justify-items-center items-center"
    >
      <div className="px-6 py-6 flex justify-between items-center ">
        {/* <div className="w-1/2 h-full">
          <img
            src={DammyImage}
            alt="Taiwo Damilola"
            srcset=""
            className="h-full  rounded-full"
          />
        </div> */}
        <div className="h-full text-center mx-auto mt-6">
          <div className="font-Poppins max-w-2xl">
            <p className="text-xl lg:text-3xl font-bold  dark:text-white">
              Hello I'm
            </p>
            <h2 className="text-3xl lg:text-6xl font-black dark:text-white">
              Taiwo Damilola
            </h2>
            <p className="text-xl  text-gray-600 my-5 dark:text-gray-200">
              A software developer , Network Engineer || System Administrator
              conversant with the evolvment of technology
            </p>
          </div>
          <div className="mt-6 flex flex-row items-center justify-center font-Poppins">
            {/* <button className="mx-4 border-2 border-gray-500 p-2 px-5 rounded-3xl flex flex-row items-center text-lg">
              Download CV{" "}
              <span className="px-2">
                <FaCloudDownloadAlt />
              </span>
            </button> */}
            <button className="mx-4 border-2 border-black dark:border-white p-1 px-6 rounded-3xl flex flex-row items-center bg-black text-white text-lg hover:bg-white hover:text-black transition ease-in-out duration-300">
              Chat me
              <span className="px-2">
                {" "}
                <FaWhatsapp className="" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="font-Poppins mt-20   flex flex-col md:flex-row items-center justify-center justify-items-center">
        <h3 className=" text-xl text-center md:text-2xl  md:border-r-2 md:mr-4 border-black dark:border-white  w-48 dark:text-white">
          Tech Stack
        </h3>
        <div className="w-full  my-4 flex flex-wrap gap-4 ">
          {TeckStack?.map((stack, index) => {
            return (
              <div
                className="hover:scale-125 duration-300 "
                key={index}
                title={stack?.name}
              >
                <StackIcon className="" stack={stack.name} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Hero;
