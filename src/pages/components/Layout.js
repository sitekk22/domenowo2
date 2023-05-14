import React from 'react'
import { Link } from 'gatsby'
import Navbar from "./Navbar"
import "../styles/global.scss"
import * as styles from "../styles/global.module.scss"
import logo from "../images/logo_white.png"
export default function Layout(content) {
  return (
    <div className='layout'>
      <Navbar />
      <div className='content'>
        {
          content.children
        }
      </div>

      <footer>
      <Link to= "/" className="logo">
        <img className="logo" src={logo} alt="logo domenowo"/>
        </Link>
        <h4 className={styles.copyright}>
          Wszelkie Prawa Zastrzeżone 2023 Domenowo.org

        </h4>
        <div>
          <Link to="start">Start</Link>
          <Link to="faq">FAQ</Link>
          <Link to="kontakt">Kontakt</Link>
        </div>
      </footer> 
    </div>
  )
}
