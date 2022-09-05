import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { PUBLIC_ROUTES } from "../../router/routes";
import NavLowerList from "../navLowerList/NavLowerList";
import Logo from "../../assets/images/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Link className="header__main-link" to="/">
          <img
            className="header__logo"
            src={Logo}
            width="100"
            height="100"
            alt="Логотип сайта."
          />
        </Link>
        <nav className="nav">
          <ul className="nav__list">
            {PUBLIC_ROUTES.map((route) => {
              if (route.textLink !== null) {
                return (
                  <li key={route.path} className="nav__item">
                    <Link className="nav__link" to={route.path}>
                      {route.textLink}
                    </Link>
                    {route.lowerLavelLinks ? (
                      <NavLowerList
                        modifier={"nav__lower-list-item--header"}
                        list={route}
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
        </nav>
      </div>
    </header>
  );
}

export default Header;
