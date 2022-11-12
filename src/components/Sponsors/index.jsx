import mbToken from "./assets/mb-token.svg";
import meta from "./assets/Metatask.svg";
import openSea from "./assets/open-sea.svg";

const Sponsors = () => {
  return (
    <section className="gradient flex justify-around items-center p-[15px] mb-[19px]">
      <img src={mbToken} alt="token" />
      <img src={meta} alt="meta" />
      <img src={openSea} alt="opensea" />
    </section>
  );
};

export default Sponsors;
