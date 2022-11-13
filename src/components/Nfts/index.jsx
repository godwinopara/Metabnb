import ImgNFT from "./assets/nft.png";

/* ################################################################ */
/* CHECK INDEX.CSS FOR DEFAULT STYLES e.g gradient, span, h1, h2 etc */

const Nft = () => {
  return (
    <section className="gradient px-6 md:px-16 xl:px-0 pt-[100px] pb-[100px]">
      <div className="text-white flex flex-col-reverse items-center lg:flex-row lg:justify-between  max-w-[1240px] mx-auto">
        {/* #################################################### */}

        <div className="text-center lg:text-left lg:w-[40%] xl:w-[30%]">
          {/* ####################################################### */}
          {/* ###### CHECK INDEX.CSS FOR H2 DEFAULT STYLES ########## */}
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
        <div className="mb-16 lg:mb-0 md:w-3/4 lg:w-1/2 xl:w-[60%]">
          <img src={ImgNFT} alt="places you can pay for with nft" />
        </div>
        {/* ##################################################### */}
      </div>
    </section>
  );
};

export default Nft;
