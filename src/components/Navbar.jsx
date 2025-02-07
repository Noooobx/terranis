import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-950 py-4 md:px-6 fixed w-full z-50 shadow-lg">
      <div className="flex px-6 justify-between items-center max-w-7xl mx-auto">
        <div className="text-3xl font-bold text-indigo-400">Terranis25</div>

        {/* Hamburger Icon */}
        <div className="md:hidden text-white cursor-pointer" onClick={toggleMenu}>
          <Menu size={28} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li className="hover:text-indigo-400 cursor-pointer">
            <Link to="about" smooth={true} duration={500}>
              About Us
            </Link>
          </li>
          <li className="hover:text-indigo-400 cursor-pointer">
            <Link to="events" smooth={true} duration={500}>
              Events
            </Link>
          </li>
          <li className="hover:text-indigo-400 cursor-pointer">
            <Link to="contact" smooth={true} duration={500}>
              Contact Us
            </Link>
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
              About Us
            </Link>
          </li>
          <li className="hover:text-indigo-400 cursor-pointer">
            <Link to="events" smooth={true} duration={500} onClick={toggleMenu}>
              Events
            </Link>
          </li>
          <li className="hover:text-indigo-400 cursor-pointer">
            <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
