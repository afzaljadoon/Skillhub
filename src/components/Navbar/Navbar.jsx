import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../../images/logo.png";

// Define your navigation items in arrays
const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/resources", label: "Resources" },
  { path: "/online-learning", label: "Online Learning" },
  { path: "/contactus", label: "Contact Us" }
];
const signUpItem = { path: "/signup", label: "Sign Up" };

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // helper to determine active link
  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 font-mono">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-2xl font-bold leading-none flex items-center">
            <img
              src={Logo}
              alt="Skillhub Logo"
              className="w-12 h-12 -mt-[6px] -mr-[12px] align-middle"
            />
            kill<span className="text-[#3fba96]">hub</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${
                isActive(item.path)
                  ? "text-[#3fba96] font-semibold"
                  : "text-gray-700"
              } hover:text-[#3fba96] transition`}
            >
              {item.label}
            </Link>
          ))}

          {/* Sign Up button */}
          <Link
            to={signUpItem.path}
            className="ml-4 bg-[#3fba96] hover:bg-transparent hover:text-[#3fba96] hover:border-[#3fba96] text-white border-2 border-transparent px-4 py-2 rounded"
          >
            {signUpItem.label}
          </Link>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-700">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${
                  isActive(item.path)
                    ? "text-[#3fba96] font-semibold"
                    : "text-gray-700"
                } hover:text-[#3fba96] transition`}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Sign Up button */}
            <Link
              to={signUpItem.path}
              className="mt-2 bg-[#3fba96] hover:bg-transparent hover:text-[#3fba96] hover:border-[#3fba96] text-white px-4 py-2 rounded text-center"
            >
              {signUpItem.label}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
