import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-950 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to={"/"}>
          <div className="text-white text-xl font-bold">Bookist</div>
        </Link>
        {windowWidth <= 768 ? (
          <button
            onClick={toggleMenu}
            className="block md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6 mr-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        ) : (
          <nav className="hidden md:flex items-center space-x-4">
            <div>
              <Link to={"/"} className="text-gray-400 hover:text-white px-4">
                Home
              </Link>
              <Link to={"/"} className="text-gray-400 hover:text-white px-4">
                About
              </Link>
              <Link to={"/"} className="text-gray-400 hover:text-white px-4">
                Services
              </Link>
            </div>

            <div>
              <button className="px-4 py-2 mr-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Sign Up
              </button>
              <button className="px-4 py-2 ml-1 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-100">
                Sign In
              </button>
            </div>
          </nav>
        )}
      </div>
      {windowWidth <= 768 && isMenuOpen && (
        <nav className="md:hidden flex flex-col items-end mt-4 space-y-2 mr-8">
          <a href="#" className="text-gray-400 hover:text-white py-2">
            Services
          </a>
          <a href="#" className="text-gray-400 hover:text-white py-2">
            Clients
          </a>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Sign In
          </button>
          <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-100">
            Sign Up
          </button>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
