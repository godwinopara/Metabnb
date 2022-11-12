import FooterNavItem from "./FooterNavItem";

const FooterNav = () => {
  const community = ["NFT", "Tokens", "Landlords", "Discord"];
  const places = ["Castle", "Farms ", "Beach", "Learn more"];
  const aboutUs = ["Road map", "Creators", "Career", "Contact us"];

  return (
    <div className="text-white flex justify-around w-3/5">
      <FooterNavItem navLists={community} navTitle="Community" />
      <FooterNavItem navLists={places} navTitle="Places" />
      <FooterNavItem navLists={aboutUs} navTitle="About Us" />
    </div>
  );
};

export default FooterNav;
