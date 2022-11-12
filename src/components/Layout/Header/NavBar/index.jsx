import Logo from "../assets/logo.svg";
import NavList from "./NavList";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";

const NavBar = () => {
  const [navOpen, setnavOpen] = useState(false);

  const toggleNav = () => {
    console.log(navOpen);
    setnavOpen((previousState) => !previousState);
  };
  return (
    <>
      <nav className="flex justify-between items-center max-w-[1240px] mx-auto mb-12 lg:mb-[125px]">
        <img src={Logo} alt="logo" className="h-5 md:h-8" />
        <NavList navOpen={navOpen} toggleNav={toggleNav} />
        <button className="hidden text-sm h-10 w-36 gradient rounded-[10px] lg:block lg:text-base lg:h-12 lg:w-44 text-white">
          Connect wallet
        </button>

        <div onClick={toggleNav} className="text-4xl cursor-pointer lg:hidden">
          <IoIosMenu />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
