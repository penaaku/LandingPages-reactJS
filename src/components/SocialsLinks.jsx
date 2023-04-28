import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

function SocialsLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={25} />
        </>
      ),
      href: "https://www.linkedin.com/in/arianto-saragih-b97700234/",
      style: "rounded-tr-md",
    },
    {
      id: 1,
      child: (
        <>
          Github <FaGithub size={25} />
        </>
      ),
      href: "https://github.com/penaaku",
    },
    {
      id: 2,
      child: (
        <>
          Mail <AiOutlineMail size={25} />
        </>
      ),
      href: "https://mail.google.com/mail/u/1/#inbox",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={25} />
        </>
      ),
      href: "/AuthLoginPage.js.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-105px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + " " + style}>
            <a href={href} className="flex justify-between items-center w-full pl-2 text-white" download={download} rel="noreferrer">
                <>{child}</>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialsLinks;
