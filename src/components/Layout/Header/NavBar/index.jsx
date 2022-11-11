import Logo from "../assets/logo.svg";
import NavList from "./NavList";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center max-w-[1240px] mx-auto mb-[125px]">
      <img src={Logo} alt="logo" className="h-8" />
      <NavList />
      <button className="gradient rounded-[10px] text-base h-12 w-44 text-white">
        Connect wallet
      </button>
    </nav>
  );
};

export default NavBar;
