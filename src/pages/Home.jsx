import React from "react";
import Sponsors from "../components/Sponsors";
import Places from "../components/Places";
import Nft from "../components/Nfts";
import Hero from "../components/Layout/Header/Hero";
const Home = () => {
  return (
    <>
      <Hero />
      <Sponsors />
      <Places />
      <Nft />
    </>
  );
};

export default Home;
