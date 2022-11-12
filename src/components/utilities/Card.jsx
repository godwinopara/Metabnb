// import Img from "../../assets/image-16.svg";
import rating from "../../assets/rating.svg";

const Card = ({ image }) => {
  return (
    <div className="border border-[#d7d7d7] rounded-2xl p-4">
      <img src={image} alt="" className="w-full object-cover mb-4" />
      <div className="flex justify-between">
        <ul>
          <li className="mb-[10px] text-xs">Desert king</li>
          <li className="mb-[10px] text-xs">2345km away</li>
          <img src={rating} alt="" />
        </ul>
        <ul className="text-right">
          <li className="mb-[10px] text-xs font-bold">1MBT per night</li>
          <li className="mb-[10px] text-xs">available for 2weeks stay</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
