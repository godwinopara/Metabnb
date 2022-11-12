import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const NavList = ({ navOpen, toggleNav }) => {
  /* ############### NAV LINKS ################# */
  const pages = [
    { path: "/", name: "Home" },
    { path: "place-to-stay", name: "Place to stay" },
    { path: "#", name: "NFTs" },
    { path: "#", name: "Community" },
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
          return (
            <NavItem
              handleClick={toggleNav}
              key={id}
              path={page.path}
              name={page.name}
              styles="mb-4 text-xl"
            />
          );
        })}
      </ul>

      {/* ########################### DESKTOP ##################### */}

      <ul className="hidden lg:flex lg:justify-center lg:items-center lg:w-1/2">
        {pages.map((page, id) => {
          return (
            <NavItem
              key={id}
              path={page.path}
              name={page.name}
              styles="mr-12 xl:text-xl text-[#434343]"
            />
          );
        })}
      </ul>
    </>
  );
};

export default NavList;

const NavItem = ({ path, name, handleClick, styles }) => {
  return (
    <li onClick={handleClick} className={`${styles}`}>
      <Link to={`${path}`}>{name}</Link>
    </li>
  );
};
