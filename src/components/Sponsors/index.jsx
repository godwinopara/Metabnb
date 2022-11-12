import mbToken from "./assets/mb-token.svg";
import meta from "./assets/Metatask.svg";
import openSea from "./assets/open-sea.svg";

const Sponsors = () => {
  return (
    <section className="gradient flex flex-col xl:flex-row justify-around items-center p-[15px] mb-[19px]">
      <img src={mbToken} alt="token" className="my-10 xl:my-0" />
      <img src={meta} alt="meta" className="my-10 xl:my-0" />
      <img src={openSea} alt="opensea" className="my-10 xl:my-0" />
    </section>
  );
};

export default Sponsors;
