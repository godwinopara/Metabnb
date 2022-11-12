import { Link } from "react-router-dom";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { useState } from "react";

const NavList = ({ navOpen, toggleNav }) => {
  /* ############### NAV LINKS ################# */
  const pages = [
    { path: "/", name: "Home" },
    { name: "Place to stay" },
    { name: "NFTs" },
    { name: "Community" },
  ];

  return (
    <>
      {/* ########################### MOBILE ###################### */}

      <ul
        className={`${navOpen ? "translate-y-0" : "-translate-y-full"} 
        transition-all absolute inset-0 gradient h-[250px]  text-white px-8 pb-16 xl:hidden`}
      >
        <div onClick={toggleNav} className="flex justify-end text-3xl mt-5 cursor-pointer">
          <IoMdClose />
        </div>

        {pages.map((page, id) => {
          return <NavItem key={id} path={page.path} name={page.name} styles="mb-4 text-xl" />;
        })}
      </ul>

      {/* ########################### DESKTOP ##################### */}

      <ul className="hidden xl:flex xl:justify-center xl:items-center xl:w-[51%]">
        {pages.map((page, id) => {
          return <NavItem key={id} path={page.path} name={page.name} styles="mr-12" />;
        })}
      </ul>
    </>
  );
};

export default NavList;

const NavItem = ({ path = "#", name, styles }) => {
  return (
    <li className={`${styles}`}>
      <Link to={path}>{name}</Link>
    </li>
  );
};
