import CardWrapper from "../utilities/CardWrapper";
import Img1 from "../../assets/image-1.svg";
import Img2 from "../../assets/image-2.svg";
import Img3 from "../../assets/image-3.svg";
import Img4 from "../../assets/image-4.svg";
import Img5 from "../../assets/image-5.svg";
import Img6 from "../../assets/image-6.svg";
import Img7 from "../../assets/image-7.svg";
import Img8 from "../../assets/image-8.svg";

/* ################################################################ */
/* CHECK INDEX.CSS FOR DEFAULT STYLES e.g gradient, span, h1, h2 etc */

const Places = () => {
  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8];

  return (
    <section className="px-6 md:px-16 lg:px-10 xl:px-0 max-w-[1240px] mx-auto pt-[39px] pb-[53px]">
      <h2 className="mb-[43px] text-center">Inspiration for your next adventure</h2>
      <CardWrapper images={images} />
    </section>
  );
};

export default Places;
