import React from "react";
import Footer from "./Footer/index.jsx";
import NavBar from "./NavBar";

const Layout = ({ childern }) => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>{childern}</main>
      <Footer />
    </>
  );
};

export default Layout;
