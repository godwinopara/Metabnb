import FooterNav from "./FooterNav";
import FooterImg from "./FooterImg";

const Footer = () => {
  return (
    <footer className="bg-black pt-[63px] pb-[37px]">
      <section className="max-w-[1112px] mx-auto xl:flex xl:justify-between">
        <FooterImg />
        <FooterNav />
      </section>
      <div className="text-white text-center xl:hidden">
        <p>&copy; 2022 Metabnb</p>
      </div>
    </footer>
  );
};

export default Footer;
