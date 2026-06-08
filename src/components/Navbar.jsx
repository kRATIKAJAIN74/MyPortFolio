import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);

  const socialLinks = [
    {
      id: 1,
      icon: <FaLinkedin size={20} />,
      href: "https://www.linkedin.com/in/kratika-jain-39511631b/",
    },
    {
      id: 2,
      icon: <FaGithub size={20} />,
      href: "https://github.com/kRATIKAJAIN74",
    },
    {
      id: 3,
      icon: <HiOutlineMail size={20} />,
      href: "mailto:jkratika8@gmail.com",
    },
    {
      id: 4,
      icon: <BsFillPersonLinesFill size={20} />,
      href: "/Kratika's Resume.pdf",
      download: true,
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white fixed bg-black z-50">
      {/* Normal text for the name */}
      <h1 className="text-xl">
        Kratika Jain | Mern Stack Developer
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={300}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-cyan-500 transition-all duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="intro"
            smooth={true}
            duration={300}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-cyan-500 transition-all duration-200"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="achievements"
            smooth={true}
            duration={300}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-cyan-500 transition-all duration-200"
          >
            Achievements
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={300}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-cyan-500 transition-all duration-200"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="portfolio"
            smooth={true}
            duration={300}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-cyan-500 transition-all duration-200"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={300}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-cyan-500 transition-all duration-200"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 transform ${
          nav ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 w-2/4`}
      >
        <ul className="flex flex-col justify-center items-start p-6">
          <li className="py-6 text-2xl">
            <Link
              to="home"
              smooth={true}
              duration={300}
              className="capitalize hover:text-cyan-500 duration-200"
              onClick={() => setNav(false)}
            >
              Home
            </Link>
          </li>
          <li className="py-6 text-2xl">
            <Link
              to="intro"
              smooth={true}
              duration={300}
              className="capitalize hover:text-cyan-500 duration-200"
              onClick={() => setNav(false)}
            >
              About
            </Link>
          </li>
          <li className="py-6 text-2xl">
            <Link
              to="achievements"
              smooth={true}
              duration={300}
              className="capitalize hover:text-cyan-500 duration-200"
              onClick={() => setNav(false)}
            >
              Achievements
            </Link>
          </li>
          <li className="py-6 text-2xl">
            <Link
              to="skills"
              smooth={true}
              duration={300}
              className="capitalize hover:text-cyan-500 duration-200"
              onClick={() => setNav(false)}
            >
              Skills
            </Link>
          </li>
          <li className="py-6 text-2xl">
            <Link
              to="portfolio"
              smooth={true}
              duration={300}
              className="capitalize hover:text-cyan-500 duration-200"
              onClick={() => setNav(false)}
            >
              Projects
            </Link>
          </li>
          <li className="py-6 text-2xl">
            <Link
              to="contact"
              smooth={true}
              duration={300}
              className="capitalize hover:text-cyan-500 duration-200"
              onClick={() => setNav(false)}
            >
              Contact
            </Link>
          </li>

          {/* Social Links */}
          <div className="flex mt-8">
            {socialLinks.map(({ id, icon, href, download }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                download={download}
                className="text-white mx-2 hover:text-cyan-500 transition duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;