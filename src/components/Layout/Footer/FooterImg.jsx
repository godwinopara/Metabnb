import Logo from "./assets/logo-dark.svg";
import FacebookLogo from "./assets/facebook.svg";
import InstagramLogo from "./assets/instagram.svg";
import TwitterLogo from "./assets/twitter.svg";

const FooterImg = () => {
  return (
    <div className="text-white">
      <img src={Logo} alt="company logo" />
      <div className="mb-14 mt-24 lg:flex">
        <img src={FacebookLogo} alt="" className="mr-8" />
        <img src={InstagramLogo} alt="" className="mr-8" />
        <img src={TwitterLogo} alt="" className="mr-8" />
      </div>
      <div>
        <p>&copy; 2022 Metabnb</p>
      </div>
    </div>
  );
};

export default FooterImg;
