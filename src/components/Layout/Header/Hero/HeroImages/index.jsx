import HeroImg1 from "../../assets/hero-img1.svg";
import HeroImg2 from "../../assets/hero-img2.svg";
import HeroImg3 from "../../assets/hero-img3.svg";
import HeroImg4 from "../../assets/hero-img4.svg";
import ImageWrapper from "./ImageWrapper";

const HeroImages = () => {
  return (
    <div className="flex items-center justify-between">
      <ImageWrapper image1={HeroImg1} image2={HeroImg2} styles="mr-2 mt-[90px]" />
      <ImageWrapper image1={HeroImg3} image2={HeroImg4} styles="mb-[90px]" />
    </div>
  );
};

export default HeroImages;
