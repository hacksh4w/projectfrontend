// src/components/Navbar.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Always prevent default link behavior
    const featuresSection = document.getElementById("why-our-system");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 w-full bg-gray-900 shadow-lg">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-red-400">
        Stampede Prediction AI
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <Link
          to="/"
          className="text-gray-300 hover:text-red-400 font-medium transition duration-300"
        >
          Home
        </Link>
        <a
          href="#why-our-system" // Using # to prevent route change
          onClick={handleAboutClick}
          className="text-gray-300 hover:text-red-400 font-medium transition duration-300"
        >
          About
        </a>
        <Link
          to="/upload"
          className="text-gray-300 hover:text-red-400 font-medium transition duration-300"
        >
          Upload
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;