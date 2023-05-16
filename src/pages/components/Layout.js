import React from "react";
import { Link } from "gatsby";
import Navbar from "./Navbar";
import "../styles/global.scss";
import * as styles from "../styles/global.module.scss";
import logo from "../images/logo_white.png";
import footerBG from "../images/footer.svg";

const Layout = (content) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{content.children}</div>

      <footer>
        <img className="footerBG" src={footerBG} alt="waves"></img>
        <div className="footerBox">
          <Link to="/" className="logo">
            <img className="logo" src={logo} alt="logo domenowo" />
          </Link>
          <h4 className={styles.copyright}>
            Wszelkie Prawa Zastrzeżone 2023 Domenowo.org
          </h4>
          <div className="footerLinks">
            <Link to="start">Start</Link>
            <Link to="faq">FAQ</Link>
            <Link to="kontakt">Kontakt</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
