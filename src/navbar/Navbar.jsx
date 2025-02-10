import NavbarLogo from "./NavbarLogo";
import NavbarMenu from "./NavbarMenu";
import NavbarSocialMedia from "./NavbarSocialMedia";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-center p-4 shadow-sm shadow-gray-100 fixed top-0 bg-white w-full z-100">
      <div className="flex flex-row justify-between items-center gap-4 w-full max-w-6xl">
        <NavbarLogo />
        <NavbarMenu />
        <NavbarSocialMedia />
      </div>
    </nav>
  );
};

export default Navbar;
