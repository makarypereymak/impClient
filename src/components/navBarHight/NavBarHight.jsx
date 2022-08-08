import React from "react";
import "./NavBarHight.css";
import { Link } from "react-router-dom";

function NavBarHight(props) {
  return (
    <ul className="nav-bar-hight">
      {props.links.map((link) => (
        <li key={link.path} className="nav-bar-hight__item">
          <Link className="nav-bar-hight__link" to={link.path}>
            {link.textLink}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavBarHight;
