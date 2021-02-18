import React, { useContext } from "react";
import AppContext from "../context/AppContext";

import "../styles/Footer.css";

const Footer = () => {
  const {
    themeStyles: { body, text },
  } = useContext(AppContext);

  return (
    <footer style={body} className="Footer">
      <h3>
        <a style={text} href="https://github.com/kevinjzea">
          Author's Github
        </a>
      </h3>
      <h3>
        <a style={text} href="https://linkedin.com/in/kevinjzea">
          Author's LinkedIn
        </a>
      </h3>
    </footer>
  );
};

export default Footer;
