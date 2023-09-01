import React, { useState } from "react";
import { BsCloudMoonFill } from "react-icons/bs";
import { LuSunMoon } from "react-icons/lu";

function Nav() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <nav className="py-3 px-5 font-Poppins fixed top-0 w-full bg-white">
      <div className="max-w-5xl mx-auto flex flex-row justify-between align-center">
        <a href="#" className="text-3xl cursor-pointer">
          T-Dammy
        </a>
        <div className="hidden md:block">
          <ul className="flex flex-row text-2xl">
            <li className="mx-3 pb-2 hover:border-b-2 hover:border-b-black ">
              <a href="#about_page">About</a>
            </li>
            <li className="mx-3 pb-2 hover:border-b-2 hover:border-b-black ">
              <a href="#project">Project</a>
            </li>
            <li className="mx-3 pb-2 hover:border-b-2 hover:border-b-black ">
              <a href="#contact">Contact</a>
            </li>
            <li className="mx-3 ml-8 pb-2  cursor-pointer text-2xl">
              {isDarkMode ? <LuSunMoon /> : <BsCloudMoonFill />}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
