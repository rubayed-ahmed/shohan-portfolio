import React, {useState} from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUserAlt, FaBook, FaHeartbeat } from "react-icons/fa";

const Header = () => {
    const [activeNav, setActiveNav] = useState()
  return (
    <nav
      className="bg-white bg-opacity-20 backdrop-blur-lg rounded-full drop-shadow-lg w-max flex px-7 
        py-3 z-10 fixed left-1/2 -translate-x-1/2 bottom-6">
      <a href="/#home"
        className="bg-transparent py-2 px-4 rounded-[50%] text-lg hover:text-rose-500 
            transition-all duration-200 ease-linear">
        <FaHome />
      </a>
      <a href="/#about"
        className="bg-transparent py-2 px-4 rounded-[50%] text-lg hover:text-rose-500 
            transition-all duration-200 ease-linear">
        <FaUserAlt />
      </a>
      <Link
        className="bg-transparent py-2 px-4 rounded-[50%] text-lg hover:text-rose-500 
            transition-all duration-200 ease-linear">
        <FaBook />
      </Link>
      <Link
        className="bg-transparent py-2 px-4 rounded-[50%] text-lg hover:text-rose-500 
            transition-all duration-200 ease-linear">
        <FaHeartbeat />
      </Link>
      <Link
        className="bg-transparent py-2 px-4 rounded-[50%] text-lg hover:text-rose-500 
            transition-all duration-200 ease-linear">
        <FaHome />
      </Link>
    </nav>
  );
};

export default Header;