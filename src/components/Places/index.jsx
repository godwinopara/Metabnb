import Card from "../utilities/Card";
import Img1 from "../../assets/image-1.svg";
import Img2 from "../../assets/image-2.svg";
import Img3 from "../../assets/image-3.svg";
import Img4 from "../../assets/image-4.svg";
import Img5 from "../../assets/image-5.svg";
import Img6 from "../../assets/image-6.svg";
import Img7 from "../../assets/image-7.svg";
import Img8 from "../../assets/image-8.svg";

const Places = () => {
  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8];

  return (
    <section className="max-w-[1240px] mx-auto pt-[39px] pb-[53px]">
      <h2 className="mb-[43px] text-center">Inspiration for your next adventure</h2>
      <div className="grid grid-cols-4 gap-6">
        {images.map((img, id) => {
          return <Card key={id} image={img} />;
        })}
      </div>
    </section>
  );
};

export default Places;
