import Logo from "../assets/logo.svg";
import NavList from "./NavList";
import { IoIosMenu } from "react-icons/io";
import { useState, useEffect } from "react";
import Modal from "../../../Modal";

const NavBar = () => {
  const [navOpen, setnavOpen] = useState(false);
  const [modalOpen, setmodalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen || navOpen) {
      document.documentElement.style.overflow = "hidden";
    }

    return () => {
      document.documentElement.style.overflowY = "scroll";
    };
  }, [modalOpen, navOpen]);

  const toggleNav = () => {
    setnavOpen((previousState) => !previousState);
  };

  const toggleModal = () => {
    setmodalOpen((previousState) => !previousState);
    setnavOpen(false);
  };

  return (
    <>
      <nav className="flex justify-between items-center max-w-[1240px] mx-auto mb-12 lg:mb-[125px]">
        <img src={Logo} alt="logo" className="h-5 md:h-8" />
        <NavList navOpen={navOpen} toggleNav={toggleNav} toggleModal={toggleModal} />
        <button
          onClick={toggleModal}
          className="hidden text-sm h-10 w-36 gradient rounded-[10px] lg:block lg:text-base lg:h-12 lg:w-44 text-white"
        >
          Connect wallet
        </button>

        <div onClick={toggleNav} className="text-4xl cursor-pointer lg:hidden">
          <IoIosMenu />
        </div>
      </nav>
      <Modal toggleModal={toggleModal} modalOpen={modalOpen} />
    </>
  );
};

export default NavBar;
