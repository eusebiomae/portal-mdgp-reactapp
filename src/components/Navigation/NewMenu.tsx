import React, { useState, useEffect } from "react";

const MainHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseOver = () => {
    setHoveredLink(null);
  };

  const handleMouseOut = () => {
    setHoveredLink(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      id="eut-main-header"
      className={`${
        isSticky ? "fixed top-0 left-0 right-0 z-50 shadow-lg" : "relative"
      } w-full transition-all duration-300 bg-white`}
    >
      <div className="container mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold">
            {/* Logo Image or Text */}
            <img src="/path-to-your-logo.png" alt="Logo" className="h-8" />
          </a>
        </div>

        {/* Navigation for large screens */}
        <nav className="hidden lg:flex space-x-6">
          {["About", "Services", "Portfolio", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`relative text-gray-600 transition-colors duration-300 ${
                hoveredLink === item ? "text-blue-500" : "hover:text-blue-500"
              }`}
              onMouseOver={() => handleMouseOver()}
              onMouseOut={handleMouseOut}
            >
              {item}
              {/* Underline effect */}
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 transform transition-transform duration-300 ${
                  hoveredLink === item ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="text-gray-600 hover:text-blue-500 focus:outline-none"
          >
            {/* Icon for mobile menu */}
            <svg
              className="w-6 h-6"
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
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } lg:hidden overflow-hidden transition-all duration-300`}
      >
        <nav className="flex flex-col space-y-4 px-4 py-4">
          {["About", "Services", "Portfolio", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default MainHeader;
