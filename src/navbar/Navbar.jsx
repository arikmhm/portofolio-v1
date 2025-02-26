/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "motion/react";
import HamburgerButton from "./Hamburger";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar = ({ menuOpen, setMenuOpen, isScrolled, scrollY }) => {
  // Calculate progress for smooth transition
  const transitionProgress = Math.min(Math.max((scrollY - 900) / 200, 0), 1);
  // Social media links data
  const socialLinks = [
    { Icon: FaGithub, href: "https://github.com/arikmhm", label: "GitHub" },
    {
      Icon: FaLinkedin,
      href: "https://linkedin.com/in/arikmhm",
      label: "LinkedIn",
    },
    {
      Icon: FaInstagram,
      href: "https://instagram.com/arikmhm",
      label: "Instagram",
    },
  ];

  return (
    <>
      {/* Hamburger button that appears when scrolled or menu is open */}
      <AnimatePresence>
        {(isScrolled || menuOpen) && (
          <motion.div
            className="fixed top-0 right-0 m-6 z-50"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <HamburgerButton
              isActive={menuOpen}
              onclick={() => setMenuOpen(!menuOpen)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full navbar that transforms when scrolled */}
      <motion.nav
        className="p-4 fixed top-0 w-full z-40"
        style={{
          opacity: menuOpen ? 0 : 1 - transitionProgress,
          pointerEvents: isScrolled || menuOpen ? "none" : "auto",
          y: -100 * transitionProgress,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-row justify-between items-center w-full">
            <motion.a
              href="#home"
              className="font-bold text-white px-4 border-r-2"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
            >
              Arikmhm.
            </motion.a>

            {/* Mobile "MENU" text button instead of hamburger */}
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden px-6 py-2 border  border-white text-white text-[12px] uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              MENU
            </motion.button>

            {/* Desktop navigation links */}
            <div className="hidden md:flex items-start w-full mx-8 space-x-8">
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#profile">Profile</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              {/* Social media icons */}
            </div>
            <div className="hidden md:flex items-center space-x-4 ml-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

// Animated navigation link component
const NavLink = ({ href, children }) => {
  return (
    <motion.a
      href={href}
      className="text-gray-300 hover:text-white transition-colors relative"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      <motion.div
        className="absolute bottom-0 left-0 w-0 h-0.5 bg-white"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.2 }}
      />
    </motion.a>
  );
};

export default Navbar;
