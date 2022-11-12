import FooterNav from "./FooterNav";
import FooterImg from "./FooterImg";

const Footer = () => {
  return (
    <footer className="bg-black pt-[63px] pb-[37px] md:px-16 lg:px-10 xl:px-0">
      <section className="max-w-[1112px] mx-auto md:flex md:justify-between xl:max-w-[1240px]">
        <FooterImg />
        <FooterNav />
      </section>
      <div className="text-white text-center md:hidden">
        <p>&copy; 2022 Metabnb</p>
      </div>
    </footer>
  );
};

export default Footer;
