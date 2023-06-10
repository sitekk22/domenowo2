import { Link } from "gatsby";
import React from "react";
import logo from "../images/logo_white.png";
export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="logo">
        <img className="logo" src={logo} alt="logo domenowo" />
      </Link>
      <div className="links">
        <Link to="/">Start</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/kontakt">Kontakt</Link>
      </div>
    </nav>
  );
}
