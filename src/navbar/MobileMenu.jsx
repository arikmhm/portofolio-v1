/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "motion/react";
import { useRef } from "react";
import { useEffect } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const scrollPosition = useRef(0); // Menyimpan posisi scroll
  const scrollbarWidth = useRef(0); // Menyimpan lebar scrollbar
  const menuRef = useRef(null); // Buat referensi untuk menu

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false); // Tutup menu jika klik di luar
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen, setMenuOpen]);

  useEffect(() => {
    if (menuOpen) {
      // Simpan posisi scroll
      scrollPosition.current = window.scrollY;

      // Hitung lebar scrollbar
      scrollbarWidth.current =
        window.innerWidth - document.documentElement.clientWidth;

      // Atur body agar tidak bisa di-scroll, tapi tetap mempertahankan ukuran
      document.body.style.top = `-${scrollPosition.current}px`;

      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth.current}px`; // Hindari pergeseran layout
    } else {
      // Kembalikan body ke normal dan kembalikan scroll ke posisi sebelumnya
      document.body.style.top = "";
      document.body.style.overflow = "";
      document.body.style.paddingRight = ""; // Reset paddingRight

      window.scrollTo(0, scrollPosition.current);
    }

    return () => {
      document.body.style.top = "";
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [menuOpen]);

  // Data sosial media
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

  // Data menu navigasi
  const menuItems = [
    { label: "Projects", href: "#projects" },
    { label: "Profile", href: "#profile" },
    { label: "Contact", href: "#contact" },
  ];

  // Animasi varian untuk menu
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.07,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          className="fixed top-0 right-0 max-w-md w-full h-full z-40 bg-black/90  backdrop-blur-lg flex flex-col border-l border-gray-800"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Kontainer menu */}
          <div className="flex flex-col h-full max-w-md mx-auto px-8 pt-24 pb-4 justify-between">
            {/* Menu navigasi */}
            <div className="flex flex-col space-y-10">
              {menuItems.map(({ label, href }, index) => (
                <motion.div
                  key={label}
                  className="flex items-baseline"
                  variants={itemVariants}
                >
                  <span className="text-gray-500 text-sm font-medium w-6">
                    0{index + 1}
                  </span>
                  <a
                    href={href}
                    className="text-white text-3xl font-light tracking-tight hover:text-gray-200"
                    onClick={() => setMenuOpen(false)} // Tutup menu setelah klik
                  >
                    {label}
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Bagian sosial media */}
            <motion.div className="mt-auto pt-12" variants={itemVariants}>
              <motion.h3
                className="text-gray-400 text-xs uppercase tracking-widest mb-6 font-medium"
                variants={itemVariants}
              >
                Connect
              </motion.h3>

              <div className="space-x-5 flex flex-row">
                {socialLinks.map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-white transition-colors group"
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    variants={itemVariants}
                  >
                    <Icon className="w-5 h-5 mr-4 text-gray-400 group-hover:text-white transition-colors" />
                    <span className="text-sm font-light">{label}</span>
                  </motion.a>
                ))}
              </div>

              {/* Copyright */}
              <motion.p
                className="text-gray-600 text-xs mt-12"
                variants={itemVariants}
              >
                © {new Date().getFullYear()} Arikmhm. All rights reserved.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
