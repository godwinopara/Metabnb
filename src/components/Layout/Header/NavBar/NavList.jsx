import { Link } from "react-router-dom";

const NavList = () => {
  return (
    <ul className="flex justify-center items-center w-[51%]">
      <li className="mr-12">
        <Link to={"/"}>Home</Link>
      </li>
      <li className="mr-12">
        <Link>Place to stay</Link>
      </li>
      <li className="mr-12">
        <Link>NFTs</Link>
      </li>
      <li className="mr-12">
        <Link>Community</Link>
      </li>
    </ul>
  );
};

export default NavList;
