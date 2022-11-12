import CardWrapper from "../components/utilities/CardWrapper";
import Img1 from "../assets/image-1.svg";
import Img2 from "../assets/image-2.svg";
import Img3 from "../assets/image-3.svg";
import Img4 from "../assets/image-4.svg";
import Img5 from "../assets/image-5.svg";
import Img6 from "../assets/image-6.svg";
import Img7 from "../assets/image-7.svg";
import Img8 from "../assets/image-8.svg";
import Img9 from "../assets/image-9.svg";
import Img10 from "../assets/image-10.svg";
import Img11 from "../assets/image-11.svg";
import Img12 from "../assets/image-12.svg";
import Img13 from "../assets/image-13.svg";
import Img14 from "../assets/image-14.svg";
import Img15 from "../assets/image-15.svg";
import Img16 from "../assets/image-16.svg";
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
      <section className="px-6 max-w-[1240px] text-[#434343] mb-[75px] mx-auto flex justify-start items-center">
        <ul className="hidden lg:flex justify-between items-center gap-12">
          <li className="text-xl">Resturant</li>
          <li className="text-xl">Cottage</li>
          <li className="text-xl">Castle</li>
          <li className="text-xl">fantast city</li>
          <li className="text-xl">beach</li>
          <li className="text-xl">Carbins</li>
          <li className="text-xl">Off-grid</li>
          <li className="text-xl">Farm</li>
        </ul>
        <select className="h-[50px] px-2 bg-white border border-[#B4B4B4] rounded-lg lg:hidden">
          <option className="text-base">Resturant</option>
          <option className="text-base">Cottage</option>
          <option className="text-base">Castle</option>
          <option className="text-base">fantast city</option>
          <option className="text-base">beach</option>
          <option className="text-base">Carbins</option>
          <option className="text-base">Off-grid</option>
          <option className="text-base">Farm</option>
        </select>
        <button className="w-[150px] ml-16 border border-[#B4B4B4] flex justify-between items-center p-3 lg:w-[161px] rounded-lg">
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
