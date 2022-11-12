import FooterNav from "./FooterNav";
import FooterImg from "./FooterImg";

const Footer = () => {
  return (
    <footer className="bg-black pt-[63px] pb-[37px]">
      <section className="max-w-[1112px] mx-auto flex justify-between">
        <FooterImg />
        <FooterNav />
      </section>
    </footer>
  );
};

export default Footer;
