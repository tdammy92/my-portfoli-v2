import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import {
  BsLinkedin,
  BsDashLg,
  BsDiscord,
  BsGithub,
  BsTwitter,
} from "react-icons/bs";
import { GiSmartphone } from "react-icons/gi";
import { GrMapLocation } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";

function Contact() {
  const className = `text-xl  md:text-2xl text-black`;
  const classNameSocial = `text-2xl md:text-4xl text-white  hover:scale-125 duration-300`;
  return (
    <section id="contact" name="contact" className="max-w-5xl mx-auto p-4 pb-6">
      <div className="">
        <div className="text-center my-4 font-Poppins">
          <div className="text-gray-400 text-base flex items-center justify-center">
            <BsDashLg className="text-gray-400 text-2xl" /> Am available for
            work
          </div>
          <h3 className="text-4xl">Contact Me</h3>
        </div>
        <div className="w-full">
          <h5 className="text-center text-gray-500  font-Poppins">
            Submit the form below or reachout through my social's
          </h5>
          <form className="my-2 max-w-[500px] mx-auto">
            <input
              className="block flex-1 border border-1 rounded-lg border-black bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6 md:text-xl  focus:outline-none  w-full my-4  font-Poppins"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="block flex-1 border border-1 rounded-lg border-black bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6 md:text-xl  focus:outline-none w-full my-4 font-Poppins"
              type="email"
              placeholder="Your Email"
            />
            <textarea
              className="block flex-1 border border-1 rounded-lg border-black bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6 md:text-xl  focus:outline-none w-full my-4 font-Poppins"
              placeholder="Message Here..."
            ></textarea>

            <button
              className=" border border-1 border-black px-3 py-2 rounded-lg hover:bg-black hover:text-white font-Poppins"
              type="submit"
            >
              Lets Colaborate
            </button>
          </form>
        </div>
        <div className="grid  md:grid-cols-2 font-Poppins mt-6">
          <div className="text-l md:text-2xl p-3 border border-black rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
            <div className="flex  items-center gap-2 my-3">
              <BiLogoGmail className={className} />
              <p>tdammy92@gmail.com</p>
            </div>
            <div className="flex  items-center gap-2 my-3">
              <GiSmartphone className={className} />
              <p>+2348065253164</p>
            </div>
            <div className="flex  items-center gap-2 my-3">
              <GrMapLocation className={className} />
              <p>Lagos, Nigeria</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 md:gap-2 justify-center justify-items-center items-center bg-black p-3 rounded-b-lg md:rounded-r-lg md:rounded-bl-none">
            <a
              href="https://tdammy.com.ng/www.linkedin.com/in/taiwo-damilola-56061a91"
              target="__blank"
            >
              <BsLinkedin className={classNameSocial} />
            </a>
            <a href="https://github.com/tdammy92" target="__blank">
              <BsGithub className={classNameSocial} />
            </a>
            <a href="https://twitter.com/tdamilola" target="__blank">
              <BsTwitter className={classNameSocial} />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=2347057216653"
              target="__blank"
            >
              <IoLogoWhatsapp className={classNameSocial} />
            </a>
            <a href="https://t.me/oluwadamilola19" target="__blank">
              <FaTelegram className={classNameSocial} />
            </a>
            <a
              href="https://discordapp.com/channels/@me/tdammy92/"
              target="__blank"
            >
              <BsDiscord className={classNameSocial} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
