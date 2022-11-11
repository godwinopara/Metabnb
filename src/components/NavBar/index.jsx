import { Link } from "react-router-dom";
import Logo from "./assets/logo.svg";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center">
      <img src={Logo} alt="logo" />
      <ul>
        <Link to={"/"}>Home</Link>
        <Link>Place to stay</Link>
        <Link>NFTs</Link>
        <Link>Community</Link>
      </ul>
      <button>Connect wallet</button>
    </nav>
  );
};

export default NavBar;
