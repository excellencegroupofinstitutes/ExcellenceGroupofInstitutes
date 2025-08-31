import { useState, useEffect, useRef } from "react";
import { FaEllipsisV, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const handleBookDemoClick = () => {

      navigate("/");
      setTimeout(() => {
        document.getElementById("book-demo")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
  };

  return (
    <>
      <header className="shadow-md max-w-[1560px] mx-auto fixed top-0 right-0 left-0 z-50 bg-white transition-all duration-300">
        <div
          className={`flex justify-between items-center px-4 md:px-20 py-2 ${isScrolled ? "md:hidden" : ""
            }`}
        >
          <div className="text-[38px] font-bold text-primary">
            <Link to="/" className="flex items-center">
              <img src="/images/logo.png" alt="logo" className=" w-12 md:w-20" />
              <div>
              <h2 className="text-2xl">Excellence</h2>
              <p className="text-[13px] text-gray-900 font-[400] ">Group</p>

              </div>
            </Link>
          </div>

          <div
            onClick={handleBookDemoClick}
            className="hidden md:block text-lg font-semibold text-primary cursor-pointer hover:text-primary-hover transition-colors"
          >
            Book a Demo
          </div>

          <button
            className="md:hidden text-2xl text-primary focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes /> : <FaEllipsisV />}
          </button>
        </div>

        {!isScrolled && <hr className="mx-auto" width="1400" />}

        <nav
          className={`hidden md:flex items-center px-8  transition-all duration-300 ${isScrolled
              ? "justify-between py-4"
              : "justify-center py-4"
            }`}
        >
          {isScrolled && (
            <div className="flex items-center gap-4">
              <Link to='/' className="flex items-center" >
              <img src="/images/logo.png" alt="logo" className="w-16" />
              </Link>
            </div>
          )}

          <ul className="flex gap-6 text-primary text-[18px]">
            <Link to="/" className="hover:text-primary-hover list-item px-2 py-1">Home</Link>
            <Link to="/tuition" className="hover:text-primary-hover list-item px-2 py-1">Tuitions</Link>
            <Link to="/computer-services" className="hover:text-primary-hover list-item px-2 py-1">Computer Centers</Link>
            <Link to="/web-services" className="hover:text-primary-hover px-2 list-item py-1">Web Services</Link>
            <Link to="/about" className="hover:text-primary-hover px-2 list-item py-1">About</Link>
          </ul>

          {isScrolled && (
            <div
              onClick={handleBookDemoClick}
              className="text-lg font-semibold text-primary hover:cursor-pointer hover:text-primary-hover transition-colors"
            >
              Book a Demo
            </div>
          )}
        </nav>

        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 backdrop-blur-sm z-50">
            <div
              ref={menuRef}
              className="bg-white w-64 h-full p-4 flex flex-col gap-4"
            >
              <div className="flex justify-end items-center">
                <button
                  className="text-2xl text-primary focus:outline-none"
                  onClick={toggleMenu}
                >
                  <FaTimes />
                </button>
              </div>
              <ul className="flex flex-col gap-4 text-primary text-[18px]">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                  <span className="block hover:text-primary-hover px-2 py-1">Home</span>
                </Link>
                <Link to="/tuition" onClick={() => setIsMenuOpen(false)}>
                  <span className="block hover:text-primary-hover px-2 py-1">Tuitions</span>
                </Link>
                <Link to="/computer-services" onClick={() => setIsMenuOpen(false)}>
                  <span className="block hover:text-primary-hover px-2 py-1">Computer Centers</span>
                </Link>
                <Link to="/web-services" onClick={() => setIsMenuOpen(false)}>
                  <span className="block hover:text-primary-hover px-2 py-1">Web Services</span>
                </Link>
                <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                  <span className="block hover:text-primary-hover px-2 py-1">About</span>
                </Link>
                <li>
                  <span
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleBookDemoClick();
                    }}
                    className="block text-lg font-semibold text-primary hover:text-primary-hover px-2 py-1"
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
