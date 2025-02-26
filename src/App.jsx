import { useState, useEffect } from "react";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
import Profile from "./profile/Profile";
import Projects from "./projects/Projects";
import MobileMenu from "./navbar/MobileMenu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        isScrolled={isScrolled}
        scrollY={scrollY}
      />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header />
      <Projects />
      <Profile />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
