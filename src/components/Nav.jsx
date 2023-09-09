import React, { useState, useEffect } from "react";
import { BsCloudMoonFill, BsBriefcaseFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { LuSunMoon } from "react-icons/lu";
import { RiContactsFill } from "react-icons/ri";
import { Link } from "react-scroll";

function Nav() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkMode() {
    document.documentElement.classList.toggle("dark");
  }

  useEffect(() => {
    const sub = handleDarkMode();

    return () => sub;
  }, [isDarkMode]);

  return (
    <nav className="py-3 px-5 font-Poppins fixed top-0 w-full bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto flex flex-row justify-between align-center">
        <Link
          to="home"
          smooth={true}
          offset={50}
          duration={500}
          className="text-lg  dark:text-white xm:text-xl md:text-3xl font-semibold cursor-pointer"
        >
          T-Dammy
        </Link>
        <div className="hidden md:block">
          <ul className="flex flex-row text-2xl dark:text-white">
            <li className="mx-3  hover:border-b-2 hover:border-b-black  dark:hover:border-b-white">
              <Link to="about" smooth={true} offset={-70} duration={500}>
                About
              </Link>
            </li>
            <li className="mx-3 hover:border-b-2 hover:border-b-black x-3  dark:hover:border-b-white">
              <Link
                to="project"
                smooth={true}
                offset={-70}
                duration={500}
                href="#project"
              >
                Project
              </Link>
            </li>
            <li className="mx-3  hover:border-b-2 hover:border-b-black x-3 dark:hover:border-b-white">
              <Link
                to="contact"
                smooth={true}
                offset={-70}
                duration={500}
                href="#contact"
              >
                Contact
              </Link>
            </li>
            <li
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="mx-3 ml-8   cursor-pointer text-2xl"
            >
              {!isDarkMode ? <LuSunMoon /> : <BsCloudMoonFill />}
            </li>
          </ul>
        </div>
        <div className="block md:hidden">
          <ul className="flex flex-row py-1 text-lg xm:text-2xl items-center justify-center dark:text-white">
            <li className="mx-3  hover:border-b-2 hover:border-b-black x-3  dark:hover:border-b-white">
              <Link to="about" smooth={true} offset={-70} duration={500}>
                <FaUserTie />
              </Link>
            </li>
            <li className="mx-3 hover:border-b-2 hover:border-b-black x-3  dark:hover:border-b-white">
              <Link
                to="project"
                smooth={true}
                offset={-70}
                duration={500}
                href="#project"
              >
                <BsBriefcaseFill />
              </Link>
            </li>
            <li className="mx-3 hover:border-b-2 hover:border-b-black x-3  dark:hover:border-b-white">
              <Link
                to="contact"
                smooth={true}
                offset={-70}
                duration={500}
                href="#contact"
              >
                <RiContactsFill />
              </Link>
            </li>
            <li
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="mx-2 ml-4  cursor-pointer"
            >
              {!isDarkMode ? <LuSunMoon /> : <BsCloudMoonFill />}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
