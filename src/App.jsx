import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
import Profile from "./profile/Profile";
import Projects from "./projects/Projects";

function App() {
  return (
    <>
      {/* <HamburgerButton /> */}
      <Navbar />
      <Header />
      <Projects />
      <Profile />
      <Contact />
      <Footer />

      {/* Projects Section */}
    </>
  );
}

export default App;
