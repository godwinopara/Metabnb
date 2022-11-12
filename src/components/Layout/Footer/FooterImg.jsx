import Logo from "./assets/logo-dark.svg";
import FacebookLogo from "./assets/facebook.svg";
import InstagramLogo from "./assets/instagram.svg";
import TwitterLogo from "./assets/twitter.svg";

const FooterImg = () => {
  return (
    <div className="text-white flex flex-col items-center md:items-start">
      <img src={Logo} alt="company logo" className="md:w-[60%] xl:w-full" />
      <div className="m-14 md:mx-0 xl:mb-14 xl:mt-24 flex justify-between">
        <img src={FacebookLogo} alt="" className="cursor-pointer mr-4 md:mr-8" />
        <img src={InstagramLogo} alt="" className="cursor-pointer mr-4 md:mr-8" />
        <img src={TwitterLogo} alt="" className="cursor-pointer mr-4 md:mr-8" />
      </div>
      <div className="hidden md:block">
        <p>&copy; 2022 Metabnb</p>
      </div>
    </div>
  );
};

export default FooterImg;
