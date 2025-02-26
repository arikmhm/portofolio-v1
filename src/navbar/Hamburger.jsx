/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import { useEffect, useRef } from "react";

const HamburgerButton = ({ isActive, onclick }) => {
  const buttonRef = useRef(null);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Jika menu aktif dan klik terjadi di luar button
      if (
        isActive &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        onclick(); // Panggil onclick untuk menutup menu
      }
    };

    // Tambahkan event listener saat menu aktif
    if (isActive) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup saat unmount atau saat isActive berubah
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive, onclick]);

  return (
    <motion.div
      ref={buttonRef}
      onClick={onclick}
      className="w-10 h-10 rounded-full border border-white/20 bg-white/80 backdrop-blur-md cursor-pointer flex items-center justify-center hover:border-white/40 transition-all duration-300 ease-in-out z-50"
      whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
      whileTap={{ scale: 0.9 }}
      initial={{ rotate: 0 }}
      animate={{ rotate: isActive ? 180 : 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="w-full relative">
        <motion.div
          className={`
            before:content-[''] before:block before:h-[0.5px] before:w-[35%] before:mx-auto before:bg-black/90 
            before:relative before:transition-all before:duration-300 before:ease-in-out
            ${
              isActive
                ? "before:rotate-45 before:top-0 before:w-[35%]"
                : "before:top-[6px]"
            }
            after:content-[''] after:block after:h-[0.5px] after:w-[35%] after:mx-auto after:bg-black/90 
            after:relative after:transition-all after:duration-300 before:will-change-transform after:will-change-transform
            ${
              isActive
                ? "after:-rotate-45 after:top-0 after:w-[35%]"
                : "after:-top-[6px]"
            }
          `}
        />
      </div>
    </motion.div>
  );
};

export default HamburgerButton;
