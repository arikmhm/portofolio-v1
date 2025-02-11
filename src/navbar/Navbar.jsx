import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
        isScrolled ? "bg-white shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center h-16">
          <div className="flex items-center">
            <NavbarLogo />
            <NavbarMenu />
          </div>
          <NavbarSocialMedia />
        </div>
      </div>
    </nav>
  );
};

const NavbarLogo = () => {
  return (
    <div className=" h-16 flex items-center">
      <a
        href="/"
        className="text-xl font-medium text-black hover:text-gray-600 transition-colors duration-300 cursor-pointer px-6 border-r-2 "
      >
        Arikmhm.
      </a>
    </div>
  );
};

const NavbarMenu = () => {
  const [activeItem, setActiveItem] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
            className={`text-sm font-medium hover:text-black transition-colors duration-300 ${
              activeItem === href.substring(1) ? "text-black" : "text-gray-600"
            }`}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
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
    <ul className="flex items-center ml-auto pr-6 space-x-6">
      {socialLinks.map(({ Icon, href, label }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition-colors duration-300"
            aria-label={label}
          >
            <Icon className="w-5 h-5" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
