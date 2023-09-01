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
  const className = `text-4xl text-black`;
  const classNameSocial = `text-4xl text-white  hover:scale-125 duration-300`;
  return (
    <section id="contact" className="max-w-5xl mx-auto p-4 pb-6">
      <div className="">
        <div className="text-center my-4 font-Poppins">
          <div className="text-gray-400 text-base flex items-center justify-center">
            <BsDashLg className="text-gray-400 text-2xl" /> Am available for
            work
          </div>
          <h3 className="text-4xl">Contact Me</h3>
        </div>
        <div className="grid grid-cols-2 font-Poppins mt-6">
          <div className=" p-3 border border-black rounded-l-lg">
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
          <div className="grid grid-cols-3 gap-2 justify-center justify-items-center items-center bg-black p-3 rounded-r-lg">
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
