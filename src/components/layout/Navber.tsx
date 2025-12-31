import { useState } from "react";
import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-indigo-600">MyTodo</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium">
              Home
            </Link>
            <Link to="/tasks" className="text-gray-700 hover:text-indigo-600 font-medium">
              Tasks
            </Link>
           
            <Link to="/users" className="text-gray-700 hover:text-indigo-600 font-medium">
             Users
            </Link>
           
            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
              Sign Up
            </button> 

            <div>
              <ModeToggle/>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-white shadow-md">
          <a href="#" className="block text-gray-700 hover:text-indigo-600 font-medium">
            Home
          </a>
          <a href="#" className="block text-gray-700 hover:text-indigo-600 font-medium">
            About
          </a>
          <a href="#" className="block text-gray-700 hover:text-indigo-600 font-medium">
            Services
          </a>
          <a href="#" className="block text-gray-700 hover:text-indigo-600 font-medium">
            Contact
          </a>
          <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
