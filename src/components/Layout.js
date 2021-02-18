import React, { useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
// import DarkModeButton from "./DarkModeButton";
import AppContext from "../context/AppContext";

import "../styles/Layout.css";
import LightDarkModeButton from "./LightDarkModeButton";

const Layout = ({ children }) => {
  const {
    themeStyles: { body },
  } = useContext(AppContext);

  return (
    <React.Fragment>
      <Header />
      <main style={body} className="Main">
        <aside className="Button-Container">
          {/* <DarkModeButton /> */}
          <LightDarkModeButton />
        </aside>
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
