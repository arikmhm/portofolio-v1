const NavbarMenu = () => {
  return (
    <ul className="flex flex-row items-center gap-4 w-full px-4">
      <li>
        <a href="#" className=" text-md">
          Projects
        </a>
      </li>
      <li>
        <a href="#" className="text-md">
          Profile
        </a>
      </li>
      <li>
        <a href="#" className="text-md">
          Contact
        </a>
      </li>
    </ul>
  );
};

export default NavbarMenu;
