import Logo from "./assets/logo.svg";
import NavList from "./NavList";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center max">
      <img src={Logo} alt="logo" />
      <NavList />
      <button className="h-12 w-44 bg-red-900 text-white">
        Connect wallet
      </button>
    </nav>
  );
};

export default NavBar;
