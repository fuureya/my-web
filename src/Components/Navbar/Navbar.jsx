import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img className="h-8" src="path/to/your/logo.png" alt="Logo" />
          <span className="text-white text-lg ml-2">Brand</span>
        </div>
        {/* Mobile Menu Button */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-500 hover:text-white focus:outline-none focus:text-white transition duration-300 transform hover:scale-110"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M4 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 11-4 0V6H6v2a2 2 0 11-4 0V6zm0 7a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 11-4 0v-2H6v2a2 2 0 11-4 0v-2zm0 7a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 11-4 0v-2H6v2a2 2 0 11-4 0v-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:items-center lg:w-auto" id="menu">
          <ul className="text-lg lg:flex items-center justify-between text-gray-300">
            <li>
              <a href="#" className="block lg:inline-block mt-4 lg:mt-0 mr-10">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block lg:inline-block mt-4 lg:mt-0 mr-10">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block lg:inline-block mt-4 lg:mt-0 mr-10">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block lg:inline-block mt-4 lg:mt-0">
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
        <ul className="text-lg text-gray-300">
          <li>
            <a href="#" className="block mt-4">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block mt-4">
              About
            </a>
          </li>
          <li>
            <a href="#" className="block mt-4">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="block mt-4">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
