import { useState, useEffect, useRef } from "react";
import { FaEllipsisV, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="shadow-md max-w-[1560px] mx-auto fixed top-0 right-0 left-0 z-50 bg-white transition-all duration-300">
        {/* Top section (always visible on mobile, visible before scroll on desktop) */}
        <div
          className={`flex justify-between items-center px-4 md:px-20 py-6 ${
            isScrolled ? "md:hidden" : ""
          }`}
        >
          <div className="text-[38px] font-bold text-primary">
            <img src="/images/logo.png" alt="logo" className="w-20" />
          </div>

          {/* Desktop Book a Demo (only before scroll) */}
          <div className="hidden md:block text-lg font-semibold text-primary cursor-pointer hover:text-primary-hover transition-colors">
            Book a Demo
          </div>

          {/* Hamburger button for mobile */}
          <button
            className="md:hidden text-2xl text-primary focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes /> : <FaEllipsisV />}
          </button>
        </div>

        {!isScrolled && <hr className="mx-auto" width="1400" />}

        {/* Main nav (desktop only) */}
        <nav
          className={`hidden md:flex items-center px-4 md:px-20 transition-all duration-300 ${
            isScrolled
              ? "justify-between py-4" // after scroll: logo + nav + demo
              : "justify-center py-4" // before scroll: nav centered
          }`}
        >
          {/* Show logo inside nav ONLY when scrolled */}
          {isScrolled && (
            <div className="flex items-center gap-4">
              <img src="/images/logo.png" alt="logo" className="w-16" />
            </div>
          )}

          {/* Desktop Links */}
          <ul className="flex gap-6 text-primary text-[18px]">
            <li>
              <span className="list-item hover:cursor-pointer hover:text-primary-hover relative px-2 py-1">
                Home
              </span>
            </li>
            <li>
              <span className="list-item relative hover:cursor-pointer hover:text-primary-hover px-2 py-1">
                Tuitions
              </span>
            </li>
            <li>
              <span className="list-item relative hover:cursor-pointer hover:text-primary-hover px-2 py-1">
                Computer Centers
              </span>
            </li>
            <li>
              <span className="list-item relative hover:cursor-pointer hover:text-primary-hover px-2 py-1">
                Web Services
              </span>
            </li>
          </ul>

          {/* Desktop Book a Demo (only when scrolled) */}
          {isScrolled && (
            <div className="text-lg font-semibold text-primary hover:cursor-pointer hover:text-primary-hover transition-colors">
              Book a Demo
            </div>
          )}
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 backdrop-blur-sm z-50">
            <div
              ref={menuRef}
              className="bg-white w-64 h-full p-4 flex flex-col gap-4"
            >
              {/* Mobile Menu Header with Close Button */}
              <div className="flex justify-end items-center">
                <button
                  className="text-2xl text-primary focus:outline-none"
                  onClick={toggleMenu}
                >
                  <FaTimes />
                </button>
              </div>
              <ul className="flex flex-col gap-4 text-primary text-[18px]">
                <li>
                  <span
                    className="block hover:cursor-pointer hover:text-primary-hover px-2 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </span>
                </li>
                <li>
                  <span
                    className="block hover:cursor-pointer hover:text-primary-hover px-2 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Tuitions
                  </span>
                </li>
                <li>
                  <span
                    className="block hover:cursor-pointer hover:text-primary-hover px-2 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Computer Centers
                  </span>
                </li>
                <li>
                  <span
                    className="block hover:cursor-pointer hover:text-primary-hover px-2 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Web Services
                  </span>
                </li>
                <li>
                  <span
                    className="block text-lg font-semibold text-primary hover:cursor-pointer hover:text-primary-hover px-2 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Book a Demo
                  </span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
