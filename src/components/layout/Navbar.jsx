import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "../../context/ToastContext";
import { useHireMe } from "../../context/HireMeContext";

const navItems = [
  { label: "Home", id: "" },
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { showToast } = useToast();
  const { openHireMePopup } = useHireMe();

  const handleHomeClick = (e, isHomeLink) => {
    if (isHomeLink) {
      openHireMePopup();
    }
    setOpen(false);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (path) => {
    if (path === "") return location.pathname === "/";
    return location.pathname === `/${path}`;
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 px-6 py-6 pointer-events-none flex justify-between items-start">
        {/* Logo - Floats Left */}
        <div className="pointer-events-auto">
          <Link
            to="/"
            className="group flex items-center space-x-2"
            onClick={(e) => handleHomeClick(e, true)}
          >
            <div className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
              <span className="text-white font-bold text-sm">DR</span>
            </div>
          </Link>
        </div>

        {/* Desktop Menu - Floats Center (The "Oval") */}
        <div className="hidden lg:flex pointer-events-auto px-2 py-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={`/${item.id}`}
              onClick={(e) => handleHomeClick(e, item.id === "")}
              className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${isActive(item.id)
                ? 'text-black bg-white'
                : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right Actions - Floats Right */}
        <div className="hidden lg:flex pointer-events-auto items-center space-x-3">
          <Link
            to="/Dinesh_Sample_Resume.pdf"
            target="_blank"
            className="px-5 py-2.5 bg-black/40 backdrop-blur-md border border-white/10 text-gray-300 text-sm font-medium rounded-full hover:bg-white/10 hover:text-white transition-all duration-300"
          >
            Resume
          </Link>
          <button
            onClick={openHireMePopup}
            className="px-5 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-white/10"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden pointer-events-auto">
          <div
            className="w-12 h-12 bg-black/40 backdrop-blur-md border border-white/10 rounded-full flex flex-col justify-center items-center space-y-1.5 text-white cursor-pointer hover:bg-white/10 transition-all duration-300"
            onClick={() => setOpen(!open)}
          >
            <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="lg:hidden absolute top-20 right-6 left-6 pointer-events-auto bg-black/90 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
            >
              <div className="p-6 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    to={`/${item.id}`}
                    onClick={(e) => handleHomeClick(e, item.id === "")}
                    className={`block px-4 py-3 text-lg font-medium transition-all duration-300 ${isActive(item.id)
                      ? 'text-white bg-white/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                      } rounded-xl`}
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="pt-6 mt-4 border-t border-white/10 space-y-3">
                  <button
                    onClick={() => {
                      openHireMePopup();
                      setOpen(false);
                    }}
                    className="block w-full px-4 py-3 bg-white text-black text-lg font-bold rounded-xl hover:scale-[1.02] transition-transform duration-300 text-center"
                  >
                    Hire Me
                  </button>
                  <Link
                    to="/Dinesh_Sample_Resume.pdf"
                    target="_blank"
                    onClick={() => setOpen(false)}
                    className="block w-full px-4 py-3 bg-white/5 border border-white/10 text-white text-lg font-medium rounded-xl hover:bg-white/10 transition-all duration-300 text-center"
                  >
                    View Resume
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
