import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import codefair_logo from "../assets/IT-Code-Fair-Logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const navHandler = () => setNav((prev) => !prev);

  return (
    <div className="border-b border-b-gray-500]">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-16 ">
        <img
          src={codefair_logo}
          className="w-[64px] md:w-[79px]"
          alt="Codefair logo"
        />
        <div>
          <ul className="font-medium text-[#056571] md:flex hidden">
            <li className="p-4 hover:text-[#05647178] cursor-pointer">
              Contact
            </li>
            <li className="p-4 hover:text-[#05647178] cursor-pointer">
              Sign up
            </li>
          </ul>
        </div>
        <div className="md:hidden block" onClick={navHandler}>
          {nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
