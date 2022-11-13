import CardWrapper from "../components/utilities/CardWrapper";
import Img1 from "../assets/image-1.png";
import Img2 from "../assets/image-2.png";
import Img3 from "../assets/image-3.png";
import Img4 from "../assets/image-4.png";
import Img5 from "../assets/image-5.png";
import Img6 from "../assets/image-6.png";
import Img7 from "../assets/image-7.png";
import Img8 from "../assets/image-8.png";
import Img9 from "../assets/image-9.png";
import Img10 from "../assets/image-10.png";
import Img11 from "../assets/image-11.png";
import Img12 from "../assets/image-12.png";
import Img13 from "../assets/image-13.png";
import Img14 from "../assets/image-14.png";
import Img15 from "../assets/image-15.png";
import Img16 from "../assets/image-16.png";
import settingsImg from "../assets/setting-5.svg";

const PlaceToStay = () => {
  const images = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
    Img10,
    Img11,
    Img12,
    Img13,
    Img14,
    Img15,
    Img16,
  ];

  return (
    <>
      <section className="px-6 max-w-[1240px] text-[#434343] mb-[75px] mx-auto flex md:justify-center md:px-16 lg:justify-start items-center xl:px-0">
        <ul className="hidden lg:flex justify-between items-center lg:gap-5 xl:gap-12">
          <li className="text-base xl:text-xl">Resturant</li>
          <li className="text-base xl:text-xl">Cottage</li>
          <li className="text-base xl:text-xl">Castle</li>
          <li className="text-base xl:text-xl">fantast city</li>
          <li className="text-base xl:text-xl">beach</li>
          <li className="text-base xl:text-xl">Carbins</li>
          <li className="text-base xl:text-xl">Off-grid</li>
          <li className="text-base xl:text-xl">Farm</li>
        </ul>
        <select className="h-[50px] w-full px-2 bg-white border border-[#B4B4B4] rounded-lg  lg:hidden">
          <option className="text-base">Resturant</option>
          <option className="text-base">Cottage</option>
          <option className="text-base">Castle</option>
          <option className="text-base">fantast city</option>
          <option className="text-base">beach</option>
          <option className="text-base">Carbins</option>
          <option className="text-base">Off-grid</option>
          <option className="text-base">Farm</option>
        </select>
        <button className="w-full ml-5 md:ml-16 border border-[#B4B4B4] flex justify-between items-center p-3 lg:w-[161px] rounded-lg">
          Location
          <img src={settingsImg} alt="" className="ml-2 lg:ml-10" />
        </button>
      </section>
      <section className="mb-[92px] px-6 md:px-16 max-w-[1240px] lg:mx-auto lg:px-10 xl:px-0">
        <CardWrapper images={images} />
      </section>
    </>
  );
};

export default PlaceToStay;
