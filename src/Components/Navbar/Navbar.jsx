import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-neutral-950 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-white text-lg ml-6 font-bold">Agil Jibrin</span>
        </div>
        {/* Mobile Menu Button */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-500 hover:text-white focus:outline-none focus:text-white transition duration-300 transform hover:scale-110"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:items-center lg:w-auto " id="menu">
          <ul className="text-lg lg:flex items-center justify-between text-gray-300">
            <li>
              <a
                href="#"
                className="block lg:inline-block mt-4 md:text-sm text-xs lg:mt-0 mr-10 hover:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block lg:inline-block md:text-sm text-xs mt-4 hover:text-white lg:mt-0 mr-10"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block lg:inline-block md:text-sm text-xs mt-4 lg:mt-0 mr-10 hover:text-white"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block lg:inline-block md:text-sm text-xs mt-4 lg:mt-0 hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu (Hidden by Default) */}
      <div
        className={`lg:hidden transition-opacity duration-500 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 hidden"
        }`}
        id="mobile-menu"
      >
        <ul className="text-lg text-gray-300 text-center">
          {" "}
          {/* Text center on mobile */}
          <li>
            <a href="#" className="block mt-4 text-sm">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block mt-4 text-sm">
              About
            </a>
          </li>
          <li>
            <a href="#" className="block mt-4 text-sm">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="block mt-4 text-sm">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
