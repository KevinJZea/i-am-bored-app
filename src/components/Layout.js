import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Layout.css";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main className="Main">{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
