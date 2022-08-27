import React from "react";
import "./Footer.scss";
import FooterNavList from "../footerNavList/FooterNavList";
import Social from "../social/Social";
import ContactsBlock from "../contactsBlock/ContactsBlock";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__map" id="map"></div>
      <FooterNavList />
      <div className="footer__wrapper-for-lower-lavel">
        <div className="footer__wrapper-for-logo">
          <Link to="/">
            <img
              className="footer__logo"
              src={logo}
              width="50"
              height="50"
              alt="Логотип компании."
            />
          </Link>
          <p className="footer__copyright">©2022 группа компаний</p>
        </div>
        <Social />
        <ContactsBlock />
      </div>
    </footer>
  );
}

export default Footer;
