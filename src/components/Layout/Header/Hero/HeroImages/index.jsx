import HeroImg from "../../assets/hero-img.png";

const HeroImages = () => {
  return (
    <div className="mb-[67px] flex items-center md:justify-center lg:w-[50%] lg:justify-between xl:w-auto">
      <img src={HeroImg} alt="" />
    </div>
  );
};

export default HeroImages;
