import React, { useRef } from "react";
import NavButton from "../navButton/NavButton";
import "./Header.css";
import { Link } from "react-router-dom";
import { PUBLIC_ROUTES } from "../../router/routes";
import NavLowerList from "../navLowerList/NavLowerList";

function Header() {
  const nav = useRef(null);

  return (
    <header className="header">
      <Link className="header__main-link" to="/">
        <img
          className="header__logo"
          src="./images/logo.png"
          width="100"
          height="100"
          alt="Логотип сайта."
        />
      </Link>
      <nav ref={nav} className="nav nav--closed">
        <ul className="nav__list">
          {PUBLIC_ROUTES.map((route) => {
            if (route.textLink !== null) {
              return (
                <li key={route.path} className="nav__item">
                  <Link
                    onClick={() => {
                      const body = document.querySelector("#body");

                      if (body.style.overflowY === "hidden") {
                        body.style.overflowY = "auto";
                      }

                      if (nav.current.className === "nav nav--opened") {
                        nav.current.className = "nav nav--closed";
                      }
                    }}
                    className="nav__link"
                    to={route.path}
                  >
                    {route.textLink}
                  </Link>
                  {route.lowerLavelLinks ? (
                    <NavLowerList
                      list={route}
                      buttonExist={true}
                      startClassName={"nav__lower-list nav__lower-list--closed"}
                    />
                  ) : null}
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
        <NavButton nav={nav}></NavButton>
        <a className="nav__contact-phone" href="tel:+78632107858">
          8 (863) 210-78-58
        </a>
      </nav>
    </header>
  );
}

export default Header;
