import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Overview", path: "/" },
    { label: "Leasing", path: "/leasing" },
    { label: "Sponsorship", path: "/sponsorship" },
    { label: "Events", path: "/events" },
    { label: "Venues", path: "/venues" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
          : "bg-black/60 backdrop-blur-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
        {/* BRAND */}
        <Link
          to="/"
          className="text-white text-2xl font-semibold tracking-[0.12em]"
        >
          Mall{" "}
          <span className="text-[var(--color-accent)] italic font-light">
            of
          </span>{" "}
          America
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative pb-2 text-sm tracking-wide transition-colors duration-300 ${
                  isActive ? "text-white" : "text-white/65 hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[var(--color-accent)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* PREMIUM MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.35 }}
            className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-white/10"
          >
            <div className="px-6 py-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-8">
                Explore Platform
              </p>

              <div className="flex flex-col divide-y divide-white/10">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className={`py-4 text-lg tracking-wide transition ${
                        isActive
                          ? "text-white"
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;