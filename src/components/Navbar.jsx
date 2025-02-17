import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-scroll";
import myIcon from "./icon.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-950 py-4 md:px-6 fixed w-full z-50 shadow-lg">
      <div className="flex px-6 justify-between items-center max-w-7xl mx-auto">
        <div className="text-3xl font-bold text-indigo-400 flex items-center">
          <a href="/" className="flex items-center">
            <img
              className="md:w-14 md:h-14 w-12 h-12"
              src={myIcon}
              alt="Icon"
            />
            <span className="md:text-4xl ml-2">Teranis</span>
          </a>
        </div>

        {/* Hamburger Icon */}
        <div
          className="md:hidden text-white cursor-pointer"
          onClick={toggleMenu}
        >
          <Menu size={28} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white text-lg font-medium">
          <li className="hover:text-indigo-400 cursor-pointer">
            <Link to="about" smooth={true} duration={500}>
              ABOUT
            </Link>
          </li>
          <li className="hover:text-indigo-400 cursor-pointer">
            <Link to="events" smooth={true} duration={500}>
              EVENTS
            </Link>
          </li>
          <li className="hover:text-indigo-400 cursor-pointer">
            <Link to="contact" smooth={true} duration={500}>
              CONTACT US
            </Link>
          </li>
          <li className=" cursor-pointer">
            {/* Download Brochure link */}
            <a
              href="/brochure.pdf"
              download
              className="text-indigo-300  font-extrabold"
            >
              BROCHURE
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu with Smooth Transition */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="bg-gray-950 w-full flex flex-col space-y-10 text-white py-4 text-xl items-center font-medium md:hidden shadow-[0px_10px_15px_rgba(255,255,255,0.01)]">
          <li className="hover:text-indigo-400 cursor-pointer">
            <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>
              ABOUT
            </Link>
          </li>
          <li className="hover:text-indigo-400 cursor-pointer">
            <Link to="events" smooth={true} duration={500} onClick={toggleMenu}>
              EVENTS
            </Link>
          </li>
          <li className="hover:text-indigo-400 cursor-pointer">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              CONTACT US
            </Link>
          </li>
          <li className="cursor-pointer">
            {/* Download Brochure link */}
            <a
              href="/path-to-your-brochure.pdf"
              download
              className="text-indigo-400 hover:text-indigo-600"
            >
             BROCHURE
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
