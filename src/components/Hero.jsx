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
            <p className="text-xl lg:text-3xl font-bold">Hello I'm</p>
            <h2 className="text-3xl lg:text-6xl font-black">Taiwo Damilola</h2>
            <p className="text-xl  text-gray-600 my-5">
              A software developer , Network Engineer || System Administrator
              conversant with the evolvment of technology
            </p>
          </div>
          <div className="mt-6 flex flex-row items-center justify-center font-Poppins">
            <button className="mx-4 border-2 border-gray-500 p-2 px-5 rounded-3xl flex flex-row items-center text-lg">
              Download CV{" "}
              <span className="px-2">
                <FaCloudDownloadAlt />
              </span>
            </button>
            <button className="mx-4 border-2 border-black p-2 px-6 rounded-3xl flex flex-row items-center bg-black text-white text-lg">
              Chat me
              <span className="px-2">
                {" "}
                <FaWhatsapp className="" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="font-Poppins mt-20   flex items-center justify-center justify-items-center">
        <h3 className=" text-2xl  border-r-2 border-black  w-40">Tech Stack</h3>
        <div className="w-full my-4 flex">
          {TeckStack?.map((stack, index) => {
            return (
              <div
                className="font-Poppins mx-2 hover:scale-125 duration-300"
                key={index}
                title={stack?.name}
              >
                <StackIcon stack={stack.name} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Hero;
