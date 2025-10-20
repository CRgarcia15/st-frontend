import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        
        {/* Logo / Brand */}
        <Link
          to="/"
          className="text-3xl md:text-4xl font-extrabold text-lime-700 hover:text-lime-800 transition-colors duration-300"
        >
          Sprint<span className="text-gray-800">Track</span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-6">
          <li>
            <Link
              to="/"
              className="text-gray-700 font-medium hover:text-lime-700 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/features"
              className="text-gray-700 font-medium hover:text-lime-700 transition-colors duration-300"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-700 font-medium hover:text-lime-700 transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="px-5 py-2 rounded-lg bg-lime-700 text-white font-semibold hover:bg-lime-800 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;