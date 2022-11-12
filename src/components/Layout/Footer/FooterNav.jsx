import FooterNavItem from "./FooterNavItem";

const FooterNav = () => {
  const community = ["NFT", "Tokens", "Landlords", "Discord"];
  const places = ["Castle", "Farms ", "Beach", "Learn more"];
  const aboutUs = ["Road map", "Creators", "Career", "Contact us"];

  return (
    <div className="text-white flex flex-col text-center md:text-left md:flex-row md:justify-between xl:justify-around md:w-3/5">
      <FooterNavItem navLists={community} navTitle="Community" />
      <FooterNavItem navLists={places} navTitle="Places" />
      <FooterNavItem navLists={aboutUs} navTitle="About Us" />
    </div>
  );
};

export default FooterNav;
