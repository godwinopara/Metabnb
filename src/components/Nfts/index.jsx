import nftImg from "./assets/nft.svg";

const Nft = () => {
  return (
    <section className="gradient px-6 xl:px-0 pt-[100px] pb-[100px]">
      <div className="text-white flex flex-col-reverse items-center xl:justify-between  max-w-[1240px] mx-auto">
        {/* #################################################### */}

        <div className="text-center xl:text-left xl:w-[32%]">
          <h2 className="mb-[35px]">Metabnb NFTs</h2>
          <p className="mb-[57.55px]">
            Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which
            are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive
            services.
          </p>

          <button className="nft__btn h-12 w-[156px] bg-white rounded-lg">
            <span>Learn more</span>
          </button>
        </div>

        {/* ##################################################### */}
        <div className="mb-16 xl:mb-0 xl:w-[55%]">
          <img src={nftImg} alt="places you can pay for with nft" />
        </div>
        {/* ##################################################### */}
      </div>
    </section>
  );
};

export default Nft;
