import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center text-white bg-black w-full h-16 px-10 sm:px-20 fixed shadow-md shadow-slate-600">
      <h2 className="text-3xl md:text-4xl font-semiboldold font-signature">Ssumb</h2>
      <div>
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 duration-200 hover:scale-x-105 hover:text-cyan-400">
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div onClick={() => setNav(!nav)} className="cursor-pointer md:hidden">
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>
      { 
        <ul className={!nav ? "fixed left-[-100%]" : "fixed md:hidden left-0 top-16 w-[50%] h-full p-4 border-r border-gray-600 bg-black text-gray-600 ease-in-out duration-500"}>
          {links.map(({ id, link }) => (
            <li key={id} className="p-4 py-4 border-b border-gray-600 cursor-pointer capitalize font-medium">
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default NavBar;
