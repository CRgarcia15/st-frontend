import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // modern icons

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo / Brand */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-lime-700 hover:text-lime-800 transition-colors duration-300"
        >
          Sprint<span className="text-gray-800">Track</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-8">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ].map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="text-gray-700 font-medium hover:text-lime-700 transition-colors duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/login"
              className="px-5 py-2 rounded-lg bg-lime-700 text-white font-semibold hover:bg-lime-800 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Login
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-lime-700 transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {[
              { name: "Home", path: "/" },
              { name: "Features", path: "/features" },
              { name: "About", path: "/about" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 text-lg font-medium hover:text-lime-700 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="px-5 py-2 rounded-lg bg-lime-700 text-white font-semibold hover:bg-lime-800 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;
