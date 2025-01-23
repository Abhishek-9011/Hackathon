import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-gray-100 py-4 px-6 shadow-md">
      {/* Logo Section */}
      <div>
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="h-10" />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-8 text-lg font-medium text-gray-700">
        <li>
          <Link to="/about-us" className="hover:text-blue-600 cursor-pointer">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/careers" className="hover:text-blue-600 cursor-pointer">
            Careers
          </Link>
        </li>
        <li>
          <Link to="/health" className="hover:text-blue-600 cursor-pointer">
            Health
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-600 cursor-pointer">
            Contact
          </Link>
        </li>
      </ul>

      {/* Authentication Buttons */}
      <div className="flex gap-4">
        <Link to="/sign-up">
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
            Sign Up
          </button>
        </Link>
        <Link to="/sign-in">
          <button className="px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded hover:bg-gray-300">
            Sign In
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
