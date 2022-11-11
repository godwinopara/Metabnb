import Footer from "./Footer/index.jsx";
import Header from "./Header/index.jsx";

const Layout = ({ childern }) => {
  return (
    <>
      <Header />
      <main>{childern}</main>
      <Footer />
    </>
  );
};

export default Layout;
