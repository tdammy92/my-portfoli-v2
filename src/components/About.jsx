import React, { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { BsDashLg } from "react-icons/bs";
import { SlBadge } from "react-icons/sl";
import Experience from "./Experience";
import Education from "./Education";
function About() {
  const [isExperience, setIsExperience] = useState(true);

  return (
    <section
      name="about"
      className="max-w-5xl px-6 py-4 mx-auto  mt-3 md:mt-6 min-h-screen"
      id="about_page"
    >
      <div className="font-Poppins text-center">
        <p className="text-sm  md:text-base lg:text-lg flex text-center items-center  justify-center text-gray-400  dark:text-gray-200">
          <BsDashLg className="text-gray-400 text-2xl dark:text-gray-300" /> Get
          to Know more
        </p>
        <h2 className="page-title">About Me</h2>
        <p className="text-sm xs:text-base md:text-lg lg:text-xl text-justify pt-4 text-gray-600  dark:text-gray-200">
          With over three years of dedicated experience in the field of software
          development, I have established myself as a proficient and skilled
          professional. my journey began with a degree in Computer Science,
          which equipped me with a solid foundation in theoretical concepts and
          problem-solving skills. As a Mobile Developer and Front-End Developer,
          I have adeptly woven technical expertise into crafting innovative and
          user-friendly applications. My comprehensive understanding of mobile
          platforms and front-end technologies has enabled me to create seamless
          user experiences that blend functionality with aesthetics. With a
          proven track record of successful projects, I continue to demonstrate
          my commitment to delivering high-quality software solutions that cater
          to both user needs and industry standards.
        </p>
      </div>
      <div className="mt-6 flex flex-row mx-auto justify-center">
        <button
          className="mx-5 border-2 border-gray-500 p-2 px-5 rounded-3xl flex flex-row  items-center text-lg dark:text-white hover:scale-105 transition duration-300 delay-200"
          onClick={() => setIsExperience(true)}
        >
          Experience{" "}
          <span className="px-2">
            {" "}
            <SlBadge />{" "}
          </span>
        </button>
        <button
          className="mx-5 border-2 border-gray-500 p-2 px-4 rounded-3xl flex flex-row items-center text-lg dark:text-white hover:scale-105 transition duration-300 delay-200"
          onClick={() => setIsExperience(false)}
        >
          Education{" "}
          <span className="px-2">
            <FaGraduationCap />
          </span>
        </button>
      </div>
      <div>{isExperience ? <Experience /> : <Education />}</div>
    </section>
  );
}

export default About;
