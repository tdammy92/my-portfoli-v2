import React from "react";

function Footer() {
  return (
    <footer className="max-h-[30px]">
      <p className="text-center font-Poppins text-l md:text-xl">
        {" "}
        &copy;{new Date().getFullYear()} Taiwo Damilola{" "}
      </p>
    </footer>
  );
}

export default Footer;
