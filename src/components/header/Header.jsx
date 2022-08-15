import React, { useRef, useState } from "react";
import NavButton from "../navButton/NavButton";
import "./Header.scss";
import { Link } from "react-router-dom";
import { PUBLIC_ROUTES } from "../../router/routes";
import NavLowerList from "../navLowerList/NavLowerList";
import Logo from "../../assets/images/logo.png";

function Header() {
  const nav = useRef(null);
  const [width, setWidth] = useState(window.innerWidth);

  const listenerForLink = () => {
    const body = document.querySelector("#body");

    if (body.style.overflowY === "hidden") {
      body.style.overflowY = "auto";
    }

    if (nav.current.className === "nav nav--opened") {
      nav.current.className = "nav nav--closed";
    }
  };

  window.addEventListener("resize", () => {
    if (width >= 1200) {
      const body = document.querySelector("#body");
      nav.current.className = "nav nav--closed";
      body.style.overflowY = "auto";
    }
    setWidth(window.innerWidth);
  });

  return (
    <header className="header">
      <div className="header__wrapper">
        <Link
          onClick={() => {
            listenerForLink();
          }}
          className="header__main-link"
          to="/"
        >
          <img
            className="header__logo"
            src={Logo}
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
                  <li
                    key={route.path}
                    className="nav__item nav__item--1 square-1"
                  >
                    <Link
                      onClick={() => {
                        listenerForLink();
                      }}
                      className="nav__link"
                      to={route.path}
                    >
                      {route.textLink}
                    </Link>
                    {route.lowerLavelLinks ? (
                      <NavLowerList
                        modifier={"nav__lower-list-item--header"}
                        list={route}
                        buttonExist={true}
                        startClassName={
                          "nav__lower-list nav__lower-list--closed"
                        }
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
      </div>
    </header>
  );
}

export default Header;
