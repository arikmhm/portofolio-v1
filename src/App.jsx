import { useState, useEffect } from "react";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
import Profile from "./profile/Profile";
import Projects from "./projects/Projects";
import MobileMenu from "./navbar/MobileMenu";
import LoadingScreen from "./LoadingScreen";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [isVideoLoaded, setIsVideoLoaded] = useState(false); // Video load state

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

  // Hilangkan loading jika video sudah loaded
  useEffect(() => {
    if (isVideoLoaded) {
      setTimeout(() => setIsLoading(false), 500); // Tambahkan delay 0.5s untuk transition smooth
    }
  }, [isVideoLoaded]);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <div
        className={`transition-opacity duration-700 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          isScrolled={isScrolled}
          scrollY={scrollY}
        />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Header onVideoLoaded={() => setIsVideoLoaded(true)} />{" "}
        {/* Pass event ke Header */}
        <Projects />
        <Profile />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
