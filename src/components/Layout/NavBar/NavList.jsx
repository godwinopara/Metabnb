import { Link } from "react-router-dom";

const NavList = () => {
  return (
    <ul>
      <Link to={"/"}>Home</Link>
      <Link>Place to stay</Link>
      <Link>NFTs</Link>
      <Link>Community</Link>
    </ul>
  );
};

export default NavList;
