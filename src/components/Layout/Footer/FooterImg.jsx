import Logo from "./assets/logo-dark.svg";
import FacebookLogo from "./assets/facebook.svg";
import InstagramLogo from "./assets/instagram.svg";
import TwitterLogo from "./assets/twitter.svg";

const FooterImg = () => {
  return (
    <div className="text-white flex flex-col items-center xl:flex-row xl:items-left">
      <img src={Logo} alt="company logo" />
      <div className="m-14 xl:mb-14 xl:mt-24 flex justify-between">
        <img src={FacebookLogo} alt="" className="mr-4 xl:mr-8" />
        <img src={InstagramLogo} alt="" className="mr-4 xl:mr-8" />
        <img src={TwitterLogo} alt="" className="mr-4 xl:mr-8" />
      </div>
      <div className="hidden xl:block">
        <p>&copy; 2022 Metabnb</p>
      </div>
    </div>
  );
};

export default FooterImg;
