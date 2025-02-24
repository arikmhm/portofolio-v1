import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center h-16">
          <div className="flex items-center flex-1">
            <NavbarLogo />
            <NavbarMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </div>
          <div className="flex items-center">
            <NavbarSocialMedia />
            <HamburgerButton
              isOpen={isMenuOpen}
              toggle={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "calc(100vh - 64px)", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-16 right-0 w-full bg-black/90 backdrop-blur-lg md:hidden overflow-hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex-1 overflow-y-auto">
                <MobileMenu setIsMenuOpen={setIsMenuOpen} />
              </div>
              <div className="border-t border-gray-100 p-6">
                <MobileSocialMedia />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const HamburgerButton = ({ isOpen, toggle }) => {
  return (
    <button
      className="w-12 h-12 flex items-center justify-center md:hidden relative"
      onClick={toggle}
      aria-label="Toggle menu"
    >
      <div className="w-8 h-8 relative">
        <motion.span
          className="absolute h-0.5 bg-black rounded-full w-6 transform origin-center"
          style={{ top: "35%" }}
          animate={isOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute h-0.5 bg-black rounded-full w-6"
          style={{ top: "50%" }}
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="absolute h-0.5 bg-black rounded-full w-6"
          style={{ top: "65%" }}
          animate={isOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </div>
    </button>
  );
};

const NavbarLogo = () => {
  return (
    <div className="h-16 flex items-center">
      <a
        href="/"
        className="text-xl font-medium tracking-tight text-black hover:text-gray-600 transition-colors duration-300 cursor-pointer px-6"
      >
        Arikmhm.
      </a>
    </div>
  );
};

const NavbarMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  const [activeItem, setActiveItem] = useState("");

  const menuItems = [
    { label: "Projects", href: "#projects" },
    { label: "Profile", href: "#profile" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) => ({
        id: item.href.substring(1),
        offset: document.getElementById(item.href.substring(1))?.offsetTop || 0,
      }));

      const scrollPosition = window.scrollY + 100;

      const active = sections.find((section, index) => {
        const nextSection = sections[index + 1];
        if (!nextSection) return true;
        return (
          scrollPosition >= section.offset &&
          scrollPosition < nextSection.offset
        );
      });

      if (active) setActiveItem(active.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuItems]);

  return (
    <ul className="hidden md:flex items-center h-full pl-6 space-x-8">
      {menuItems.map(({ label, href }) => (
        <li key={label}>
          <a
            href={href}
            className={`text-sm font-medium tracking-tight hover:text-black transition-colors duration-300 ${
              activeItem === href.substring(1) ? "text-black" : "text-gray-500"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
};

const MobileMenu = ({ setIsMenuOpen }) => {
  const menuItems = [
    { label: "Projects", href: "#projects" },
    { label: "Profile", href: "#profile" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.ul
      className="p-8 space-y-6"
      initial="closed"
      animate="open"
      variants={{
        open: {
          transition: {
            staggerChildren: 0.1,
          },
        },
        closed: {
          transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
          },
        },
      }}
    >
      {menuItems.map(({ label, href }, index) => (
        <motion.li
          key={label}
          variants={{
            open: { y: 0, opacity: 1 },
            closed: { y: 20, opacity: 0 },
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href={href}
            className="block text-3xl font-medium tracking-tight text-white/90 hover:text-white transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="text-sm text-gray-400 mr-4">0{index + 1}</span>
            {label}
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
};

const NavbarSocialMedia = () => {
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
    <ul className="hidden md:flex items-center pr-6 space-x-6">
      {socialLinks.map(({ Icon, href, label }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black transition-colors duration-300"
            aria-label={label}
          >
            <Icon className="w-5 h-5" />
          </a>
        </li>
      ))}
    </ul>
  );
};

const MobileSocialMedia = () => {
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
    <motion.ul
      className="flex justify-center space-x-8"
      initial="closed"
      animate="open"
      variants={{
        open: {
          transition: {
            staggerChildren: 0.1,
          },
        },
        closed: {
          transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
          },
        },
      }}
    >
      {socialLinks.map(({ Icon, href, label }) => (
        <motion.li
          key={label}
          variants={{
            open: { y: 0, opacity: 1 },
            closed: { y: 20, opacity: 0 },
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black transition-colors duration-300"
            aria-label={label}
          >
            <Icon className="w-6 h-6" />
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Navbar;
