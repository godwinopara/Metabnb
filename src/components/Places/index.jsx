import CardWrapper from "../utilities/CardWrapper";
import Img1 from "../../assets/image-1.png";
import Img2 from "../../assets/image-2.png";
import Img3 from "../../assets/image-3.png";
import Img4 from "../../assets/image-4.png";
import Img5 from "../../assets/image-5.png";
import Img6 from "../../assets/image-6.png";
import Img7 from "../../assets/image-7.png";
import Img8 from "../../assets/image-8.png";

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
